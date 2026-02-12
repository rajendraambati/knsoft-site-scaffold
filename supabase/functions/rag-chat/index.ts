import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const GROQ_API_KEY = Deno.env.get('GROQ_API_KEY');
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

const AGENT_SYSTEM_PROMPT = `You are an advanced AI agent for KN Soft Tech (KNSOFT Technologies), a CMMI Level 3 and ISO 27001:2022 certified software company.

## Your Agent Capabilities

### 1. PLANNING
Before answering any question, you internally:
- Break down complex queries into sub-questions
- Identify what information is needed
- Determine the best way to structure your response

### 2. REASONING
You think step-by-step:
- Analyze the user's intent (informational, transactional, navigational, or support)
- Cross-reference multiple knowledge sources to build comprehensive answers
- Draw logical conclusions when direct answers aren't available
- Identify follow-up questions the user might have

### 3. KNOWLEDGE EXPERTISE
You are an expert on:
- KN Soft Tech's full service portfolio (AI/ML, SAP, Web/Mobile, E-commerce, IT Consulting, Solar)
- All product offerings (Healthcare, Education, Finance, Retail, ERP/CRM systems)
- Company leadership, certifications, and history
- Career opportunities and company culture
- Technical consulting and solution architecture

### 4. CONVERSATIONAL INTELLIGENCE
- Remember conversation context and refer back to earlier points
- Proactively suggest related services or products when relevant
- Ask clarifying questions when the user's intent is ambiguous
- Provide structured, easy-to-read responses with bullet points and sections

## Response Guidelines

**Format**: Use markdown formatting for readability:
- **Bold** for emphasis
- Bullet points for lists
- Short paragraphs (2-3 sentences max)

**Tone**: Professional yet warm and approachable. You represent KN Soft Tech's brand.

**Structure your responses**:
1. Direct answer to the question
2. Supporting details from knowledge base
3. Proactive suggestion or follow-up question

**When you DON'T have information**: Say "I don't have specific details on that, but I can connect you with our team who can help. Would you like to reach out via our contact page or email info@knsofttech.com?"

**For technical questions**: Provide thoughtful analysis, mention relevant KN Soft Tech capabilities, and suggest how the company can help.

**For comparison/evaluation questions**: Reason through pros and cons, relate to KN Soft Tech's expertise, and provide actionable recommendations.`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!GROQ_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'GROQ_API_KEY is not configured.' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      );
    }

    const { message, conversationHistory = [] } = await req.json();
    console.log('Received message:', message);

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Step 1: PLANNING - Classify user intent
    const intent = classifyIntent(message);
    console.log('Classified intent:', intent);

    // Step 2: Check for job application intent
    const jobApplicationIntent = detectJobApplicationIntent(message);
    if (jobApplicationIntent.isIntent) {
      return new Response(
        JSON.stringify({
          response: `Great news! I can help you apply for the **${jobApplicationIntent.jobTitle}** position! 🎯\n\nLet me redirect you to the application form where you can submit your details.`,
          action: 'job_application',
          jobTitle: jobApplicationIntent.jobTitle,
          reasoning: `Detected job application intent for: ${jobApplicationIntent.jobTitle}`
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Step 3: REASONING - Retrieve relevant knowledge with intent-aware search
    const { data: allContent, error: fetchError } = await supabase
      .from('knowledge_base')
      .select('*');

    if (fetchError) {
      console.error('Error fetching knowledge base:', fetchError);
    }

    const relevantContent = rankContent(allContent || [], message, intent);
    console.log(`Found ${relevantContent.length} relevant content pieces`);

    // Step 4: Build context
    const context = relevantContent.length > 0
      ? relevantContent.map((item: any) => item.content).join('\n\n---\n\n')
      : '';

    // Step 5: Generate response with agentic reasoning
    const messages = [
      {
        role: 'system',
        content: `${AGENT_SYSTEM_PROMPT}

## Current Knowledge Context
${context ? `\n${context}\n` : '\nNo specific knowledge base content matched this query.\n'}

## User Intent Analysis
- **Detected Intent**: ${intent.type}
- **Key Topics**: ${intent.topics.join(', ')}
- **Conversation Turn**: ${conversationHistory.length + 1}
${conversationHistory.length > 0 ? '- This is a follow-up question. Consider the conversation history for context.' : '- This is the first message. Give a welcoming, comprehensive response.'}`
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

    const chatResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages,
        temperature: 0.7,
        max_tokens: 800,
      }),
    });

    if (!chatResponse.ok) {
      const errorText = await chatResponse.text();
      console.error('Groq API error:', chatResponse.status, errorText);
      throw new Error(`Failed to generate response: ${chatResponse.status}`);
    }

    const chatData = await chatResponse.json();
    if (!chatData.choices?.[0]?.message) {
      throw new Error('Invalid response format from Groq API');
    }

    const aiResponse = chatData.choices[0].message.content;

    return new Response(
      JSON.stringify({
        response: aiResponse,
        reasoning: `Intent: ${intent.type} | Topics: ${intent.topics.join(', ')} | Sources: ${relevantContent.length}`,
        sources: relevantContent.slice(0, 3).map((item: any) => ({
          content: item.content.substring(0, 150) + '...',
          similarity: item.relevance,
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
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});

// Intent classification engine
function classifyIntent(message: string): { type: string; topics: string[]; priority: string } {
  const lower = message.toLowerCase();
  const topics: string[] = [];
  let type = 'general';
  let priority = 'normal';

  // Detect intent type
  if (/\b(apply|job|career|hiring|opening|position|join|resume|vacancy)\b/.test(lower)) {
    type = 'career'; topics.push('careers'); priority = 'high';
  }
  if (/\b(price|cost|quote|budget|pricing|estimate|how much)\b/.test(lower)) {
    type = 'sales'; topics.push('pricing'); priority = 'high';
  }
  if (/\b(help|issue|problem|bug|error|not working|broken|fix)\b/.test(lower)) {
    type = 'support'; topics.push('support'); priority = 'high';
  }
  if (/\b(ceo|coo|cto|founder|leader|management|team|who runs)\b/.test(lower)) {
    type = 'informational'; topics.push('leadership');
  }
  if (/\b(service|offer|provide|do you|can you|capability|solution)\b/.test(lower)) {
    type = 'informational'; topics.push('services');
  }
  if (/\b(product|software|system|platform|app|application|tool)\b/.test(lower)) {
    type = 'informational'; topics.push('products');
  }
  if (/\b(contact|email|phone|address|location|office|reach)\b/.test(lower)) {
    type = 'navigational'; topics.push('contact');
  }
  if (/\b(train|course|learn|certif|workshop|skill)\b/.test(lower)) {
    type = 'informational'; topics.push('training');
  }
  if (/\b(ai|machine learning|ml|data science|deep learning|nlp|automation)\b/.test(lower)) {
    topics.push('ai-ml');
  }
  if (/\b(sap|abap|s4hana|erp)\b/.test(lower)) {
    topics.push('sap');
  }
  if (/\b(hospital|clinic|pharmacy|healthcare|medical|pathology|diagnostic)\b/.test(lower)) {
    topics.push('healthcare');
  }
  if (/\b(school|education|exam|library|learning|student)\b/.test(lower)) {
    topics.push('education');
  }
  if (/\b(solar|renewable|energy|green)\b/.test(lower)) {
    topics.push('solar');
  }
  if (/\b(web|mobile|react|angular|flutter|ios|android|frontend|backend)\b/.test(lower)) {
    topics.push('web-mobile');
  }

  if (topics.length === 0) topics.push('general');
  if (type === 'general' && topics.length > 0 && topics[0] !== 'general') type = 'informational';

  return { type, topics, priority };
}

// Enhanced content ranking with intent awareness
function rankContent(allContent: any[], message: string, intent: { type: string; topics: string[] }): any[] {
  const messageLower = message.toLowerCase();
  const messageWords = messageLower.split(/\s+/).filter(w => w.length > 2);
  const stopWords = new Set(['the', 'and', 'are', 'what', 'who', 'how', 'can', 'you', 'your', 'our', 'for', 'with', 'about', 'this', 'that', 'have', 'has', 'does', 'from', 'will', 'would', 'could', 'should', 'there', 'their', 'they', 'been', 'being', 'some', 'into', 'than', 'then', 'when', 'where', 'which', 'more', 'also', 'very', 'just', 'know', 'tell']);

  return allContent
    .map((item: any) => {
      const contentLower = item.content.toLowerCase();
      const titleLower = (item.metadata?.title || '').toLowerCase();
      const keywords = item.metadata?.keywords || [];
      const itemType = item.metadata?.type || '';
      let score = 0;

      // Intent-based boosting
      if (intent.topics.includes('leadership') && (itemType === 'leadership')) score += 20;
      if (intent.topics.includes('services') && (itemType === 'services')) score += 15;
      if (intent.topics.includes('products') && (itemType === 'products')) score += 15;
      if (intent.topics.includes('careers') && (itemType === 'careers')) score += 20;
      if (intent.topics.includes('contact') && (item.metadata?.section === 'contact')) score += 20;
      if (intent.topics.includes('training') && (contentLower.includes('training') || contentLower.includes('course'))) score += 15;

      // Keyword matching
      keywords.forEach((keyword: string) => {
        if (messageLower.includes(keyword.toLowerCase())) score += 5;
      });

      // Title matching
      messageWords.forEach((word: string) => {
        if (!stopWords.has(word) && titleLower.includes(word)) score += 4;
      });

      // Content matching
      messageWords.forEach((word: string) => {
        if (!stopWords.has(word) && contentLower.includes(word)) score += 2;
      });

      // Specific entity boosts
      if (messageLower.includes('ceo') || messageLower.includes('dasaradha')) {
        if (contentLower.includes('ceo') || contentLower.includes('dasaradha')) score += 15;
      }
      if (messageLower.includes('coo') || messageLower.includes('cto') || messageLower.includes('uday')) {
        if (contentLower.includes('coo') || contentLower.includes('uday')) score += 15;
      }

      return { ...item, relevance: score };
    })
    .filter((item: any) => item.relevance > 0)
    .sort((a: any, b: any) => b.relevance - a.relevance)
    .slice(0, 5);
}

function detectJobApplicationIntent(message: string): { isIntent: boolean; jobTitle: string | null } {
  const lowerMessage = message.toLowerCase();
  const jobTitles = [
    'ai engineer', 'full stack developer', 'sap abap developer', 'data scientist',
    'software engineer', 'frontend developer', 'backend developer', 'devops engineer',
    'ml engineer', 'machine learning engineer', 'react developer', 'python developer',
    'java developer', 'qa engineer', 'test engineer'
  ];
  const applyKeywords = ['apply', 'application', 'submit', 'interested in applying', 'want to join', 'how to apply'];

  for (const jobTitle of jobTitles) {
    if (lowerMessage.includes(jobTitle)) {
      if (applyKeywords.some(keyword => lowerMessage.includes(keyword))) {
        return { isIntent: true, jobTitle };
      }
    }
  }
  return { isIntent: false, jobTitle: null };
}
