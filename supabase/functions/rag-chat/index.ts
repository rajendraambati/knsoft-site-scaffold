import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const GROQ_API_KEY = Deno.env.get('GROQ_API_KEY');
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversationHistory = [] } = await req.json();
    console.log('Received message:', message);

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Check if this is a job application intent
    const jobApplicationIntent = detectJobApplicationIntent(message);
    
    if (jobApplicationIntent.isIntent) {
      console.log('Detected job application intent:', jobApplicationIntent.jobTitle);
      
      return new Response(
        JSON.stringify({
          response: `I can help you apply for the ${jobApplicationIntent.jobTitle} position! Let me redirect you to the application form.`,
          action: 'job_application',
          jobTitle: jobApplicationIntent.jobTitle,
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Generate embedding for the user's query
    console.log('Generating query embedding...');
    const embeddingResponse = await fetch('https://api.groq.com/openai/v1/embeddings', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'nomic-embed-text-v1.5',
        input: message,
      }),
    });

    const embeddingData = await embeddingResponse.json();
    const queryEmbedding = embeddingData.data[0].embedding;

    // Search for similar content in the knowledge base
    console.log('Searching knowledge base...');
    const { data: matches, error: matchError } = await supabase.rpc('match_knowledge', {
      query_embedding: queryEmbedding,
      match_threshold: 0.5,
      match_count: 5,
    });

    if (matchError) {
      console.error('Error searching knowledge base:', matchError);
    }

    // Build context from matches
    let context = '';
    if (matches && matches.length > 0) {
      console.log(`Found ${matches.length} relevant matches`);
      context = matches
        .map((match: any) => `${match.content}\n(Relevance: ${(match.similarity * 100).toFixed(1)}%)`)
        .join('\n\n---\n\n');
    } else {
      console.log('No relevant matches found in knowledge base');
    }

    // Build conversation messages
    const messages = [
      {
        role: 'system',
        content: `You are a helpful AI assistant for KN Soft Tech, a CMMI Level 3 and ISO 27001:2022 certified IT company. 

You have access to the following information about the company:

${context || 'No specific context available. Please provide general information about KN Soft Tech and offer to help with specific questions.'}

Guidelines:
- Be friendly, professional, and helpful
- Use the context provided to answer questions accurately
- If you don't have specific information, say so and offer to connect them with someone who can help
- For job applications, guide users to the careers page
- For inquiries, suggest they use the contact form
- Keep responses concise and relevant
- If asked about services, products, or company information, use the context provided`
      },
      ...conversationHistory,
      {
        role: 'user',
        content: message
      }
    ];

    // Generate response using Groq
    console.log('Generating AI response...');
    const chatResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: messages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const chatData = await chatResponse.json();
    const aiResponse = chatData.choices[0].message.content;

    console.log('Response generated successfully');

    return new Response(
      JSON.stringify({
        response: aiResponse,
        sources: matches?.slice(0, 3).map((m: any) => ({
          content: m.content.substring(0, 200) + '...',
          similarity: m.similarity,
          metadata: m.metadata
        }))
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in rag-chat:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});

function detectJobApplicationIntent(message: string): { isIntent: boolean; jobTitle: string | null } {
  const lowerMessage = message.toLowerCase();
  
  // Job titles to detect
  const jobTitles = [
    'ai engineer',
    'full stack developer',
    'sap abap developer',
    'data scientist',
    'software engineer',
    'frontend developer',
    'backend developer',
    'devops engineer',
    'ml engineer',
    'machine learning engineer'
  ];

  // Application intent keywords
  const applyKeywords = ['apply', 'application', 'job', 'position', 'opening', 'career', 'join'];

  // Check if message contains both job title and application intent
  for (const jobTitle of jobTitles) {
    if (lowerMessage.includes(jobTitle)) {
      const hasApplyIntent = applyKeywords.some(keyword => lowerMessage.includes(keyword));
      if (hasApplyIntent) {
        return { isIntent: true, jobTitle };
      }
    }
  }

  return { isIntent: false, jobTitle: null };
}