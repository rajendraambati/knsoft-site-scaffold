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
    // Validate API key
    if (!GROQ_API_KEY) {
      console.error('GROQ_API_KEY is not configured');
      return new Response(
        JSON.stringify({ error: 'GROQ_API_KEY is not configured. Please add it to your Supabase secrets.' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500 
        }
      );
    }

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

    // Search for relevant content using keyword matching
    console.log('Searching knowledge base...');
    const { data: allContent, error: fetchError } = await supabase
      .from('knowledge_base')
      .select('*');

    if (fetchError) {
      console.error('Error fetching knowledge base:', fetchError);
    }

    // Enhanced keyword matching with intelligent scoring
    let relevantContent: any[] = [];
    if (allContent && allContent.length > 0) {
      const messageLower = message.toLowerCase();
      const messageWords = messageLower.split(/\s+/).filter(w => w.length > 2);
      
      relevantContent = allContent
        .map((item: any) => {
          const contentLower = item.content.toLowerCase();
          const titleLower = (item.metadata?.title || '').toLowerCase();
          const keywords = item.metadata?.keywords || [];
          
          // Calculate relevance score
          let score = 0;
          
          // High priority: Check for exact keyword matches
          keywords.forEach((keyword: string) => {
            const keywordLower = keyword.toLowerCase();
            if (messageLower.includes(keywordLower)) {
              score += 5; // Higher weight for exact keyword matches
            }
          });
          
          // Check for matches in title (very important)
          messageWords.forEach((word: string) => {
            if (titleLower.includes(word)) score += 4;
          });
          
          // Check for matches in content
          messageWords.forEach((word: string) => {
            // Skip common words
            if (['the', 'and', 'are', 'what', 'who', 'how', 'can', 'you', 'your', 'our', 'for', 'with', 'about'].includes(word)) {
              return;
            }
            if (contentLower.includes(word)) score += 2;
          });
          
          // Boost specific question types
          if (messageLower.includes('ceo') || messageLower.includes('chief executive') || messageLower.includes('founder')) {
            if (contentLower.includes('ceo') || contentLower.includes('dasaradha')) score += 15;
          }
          if (messageLower.includes('coo') || messageLower.includes('cto') || messageLower.includes('operations')) {
            if (contentLower.includes('coo') || contentLower.includes('cto') || contentLower.includes('uday')) score += 15;
          }
          if (messageLower.includes('services') || messageLower.includes('offer') || messageLower.includes('provide') || messageLower.includes('do you do')) {
            if (item.metadata?.type === 'services' || item.metadata?.section === 'services') score += 12;
          }
          if (messageLower.includes('job') || messageLower.includes('career') || messageLower.includes('hiring') || messageLower.includes('opening') || messageLower.includes('position')) {
            if (item.metadata?.type === 'careers' || contentLower.includes('career') || contentLower.includes('job')) score += 15;
          }
          if (messageLower.includes('contact') || messageLower.includes('location') || messageLower.includes('office') || messageLower.includes('address')) {
            if (item.metadata?.section === 'contact' || contentLower.includes('contact') || contentLower.includes('office')) score += 15;
          }
          if (messageLower.includes('leadership') || messageLower.includes('team') || messageLower.includes('management')) {
            if (item.metadata?.type === 'leadership' || contentLower.includes('leadership')) score += 12;
          }
          
          return { ...item, relevance: score };
        })
        .filter((item: any) => item.relevance > 0)
        .sort((a: any, b: any) => b.relevance - a.relevance)
        .slice(0, 5); // Get top 5 most relevant items
    }

    // Build context from relevant content
    let context = '';
    if (relevantContent.length > 0) {
      console.log(`Found ${relevantContent.length} relevant content pieces`);
      context = relevantContent
        .map((item: any) => item.content)
        .join('\n\n---\n\n');
    } else {
      console.log('No relevant content found, using general knowledge');
    }

    // Build conversation messages
    const messages = [
      {
        role: 'system',
        content: `You are a helpful AI assistant for KN Soft Tech (KNSOFT Technologies), a CMMI Level 3 and ISO 27001:2022 certified software development company.

${context ? `Here is relevant information from our knowledge base:\n\n${context}\n\n` : ''}

CRITICAL INSTRUCTIONS:
- ALWAYS answer questions using ONLY the information provided in the context above
- Be friendly, professional, and enthusiastic about KN Soft Tech
- If asked about CEO, COO, leadership, services, products, jobs, or contact info, use the specific details from the context
- NEVER say "I don't have specifics" or suggest visiting the website if the information IS in the context
- Keep responses concise but informative (2-4 sentences)
- If information is genuinely NOT in the context, then politely say so and suggest contacting the team
- When listing services or products, mention specific ones from the context with details
- Use actual names, titles, email addresses, and details provided in the context
- For career inquiries, mention specific job openings if they're in the context`
      },
      ...conversationHistory.map((msg: any) => ({
        role: msg.role,
        content: msg.content
      })),
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

    if (!chatResponse.ok) {
      const errorText = await chatResponse.text();
      console.error('Groq chat API error:', chatResponse.status, errorText);
      throw new Error(`Failed to generate response: ${chatResponse.status} - ${errorText}`);
    }

    const chatData = await chatResponse.json();
    console.log('Chat response received successfully');
    
    if (!chatData.choices || !Array.isArray(chatData.choices) || chatData.choices.length === 0 || !chatData.choices[0]?.message) {
      console.error('Invalid chat response format:', JSON.stringify(chatData));
      throw new Error('Invalid chat response format from Groq API');
    }
    
    const aiResponse = chatData.choices[0].message.content;

    console.log('Response generated successfully');

    return new Response(
      JSON.stringify({
        response: aiResponse,
        sources: relevantContent.slice(0, 2).map((item: any) => ({
          content: item.content.substring(0, 150) + '...',
          metadata: item.metadata
        }))
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in rag-chat:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'An unexpected error occurred',
        details: 'Please check the function logs for more information'
      }),
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