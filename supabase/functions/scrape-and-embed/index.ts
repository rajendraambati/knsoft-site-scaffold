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
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    
    console.log('Starting website scraping and embedding process...');
    
    // Website content to scrape - defining key pages and sections
    const websiteContent = [
      {
        type: 'page',
        title: 'Homepage - KN Soft Tech',
        content: 'KN Soft Tech is a CMMI Level 3 and ISO 27001:2022 certified IT company specializing in software development, AI/ML solutions, SAP modernization, and solar power services. We deliver innovative technology solutions across healthcare, education, finance, e-commerce, and more.',
        metadata: { section: 'about', url: '/' }
      },
      {
        type: 'services',
        title: 'AI & Automation Services',
        content: 'We offer cutting-edge AI and automation services including Artificial Intelligence, Agentic AI, Generative AI, and Data Science solutions. Our AI capabilities help businesses automate processes, gain insights from data, and build intelligent applications.',
        metadata: { section: 'services', url: '/services/ai-automation' }
      },
      {
        type: 'services',
        title: 'Web & Mobile Development',
        content: 'Custom web and mobile application development services using modern technologies. We build responsive, scalable applications for web, iOS, and Android platforms.',
        metadata: { section: 'services', url: '/services/web-mobile-development' }
      },
      {
        type: 'services',
        title: 'SAP Modernization & ABAP',
        content: 'SAP modernization services including SAP ABAP development, S/4HANA migration, and SAP system optimization. Our certified SAP experts help modernize legacy systems.',
        metadata: { section: 'services', url: '/services/sap-modernization' }
      },
      {
        type: 'services',
        title: 'E-commerce & Portals',
        content: 'Complete e-commerce portal development with shopping cart, payment gateway integration, inventory management, and customer relationship management.',
        metadata: { section: 'services', url: '/services/ecommerce-portals' }
      },
      {
        type: 'services',
        title: 'IT Consulting',
        content: 'Expert IT consulting services for technology strategy, digital transformation, system architecture, and IT infrastructure optimization.',
        metadata: { section: 'services', url: '/services/it-consulting' }
      },
      {
        type: 'services',
        title: 'Training Programs',
        content: 'Professional IT training programs led by expert trainers Vijaya Bhanu (15+ years in SAP ABAP, Big Data, AI/ML) and Nancy Sevagan (20 years in sales, banking, and relationship management).',
        metadata: { section: 'services', url: '/services/training' }
      },
      {
        type: 'services',
        title: 'Solar Power Services',
        content: 'Solar power installation, maintenance, and renewable energy consulting services. We help businesses transition to sustainable energy solutions.',
        metadata: { section: 'services', url: '/solar-services' }
      },
      {
        type: 'products',
        title: 'Healthcare & Medical Solutions',
        content: 'Hospital Management Systems, Clinic Management Software, Pharmacy Management Software, Pathology Lab Management, and Diagnostic Lab Management systems. Comprehensive healthcare IT solutions for hospitals, clinics, labs, and pharmacies.',
        metadata: { section: 'products', url: '/products/healthcare-medical' }
      },
      {
        type: 'products',
        title: 'Education & Learning Solutions',
        content: 'School Management Systems, Academy Learning Management Systems, Library Management Systems, Online Exam Systems, and E-learning platforms for educational institutions.',
        metadata: { section: 'products', url: '/products/education-learning' }
      },
      {
        type: 'products',
        title: 'Finance & Microfinance Solutions',
        content: 'Financial management software, microfinance solutions, accounting systems, and banking applications for financial institutions.',
        metadata: { section: 'products', url: '/products/finance-microfinance' }
      },
      {
        type: 'products',
        title: 'E-commerce & Retail Solutions',
        content: 'Complete e-commerce platforms, retail management systems, inventory management, POS systems, and online shopping solutions.',
        metadata: { section: 'products', url: '/products/ecommerce-retail' }
      },
      {
        type: 'products',
        title: 'Business ERP & CRM',
        content: 'Enterprise Resource Planning (ERP) systems, Customer Relationship Management (CRM) software, Project Management tools, and business automation solutions.',
        metadata: { section: 'products', url: '/products/business-erp-crm' }
      },
      {
        type: 'products',
        title: 'Hospitality & Travel',
        content: 'Hotel management systems, restaurant management software, travel booking platforms, and city guide CMS solutions.',
        metadata: { section: 'products', url: '/products/hospitality-travel' }
      },
      {
        type: 'products',
        title: 'NGO & Crowdfunding',
        content: 'NGO management systems, crowdfunding platforms, donation management, and volunteer coordination software.',
        metadata: { section: 'products', url: '/products/ngo-crowdfunding' }
      },
      {
        type: 'products',
        title: 'Solar & Renewable Energy',
        content: 'Solar power monitoring systems, renewable energy management software, and energy tracking solutions.',
        metadata: { section: 'products', url: '/products/solar-renewable' }
      },
      {
        type: 'company',
        title: 'About KN Soft Tech',
        content: 'KN Soft Tech is a leading technology company with CMMI Level 3 and ISO 27001:2022 certifications. We specialize in AI/ML, software development, SAP solutions, and solar power services. Our team delivers innovative solutions across multiple industries.',
        metadata: { section: 'company', url: '/about' }
      },
      {
        type: 'careers',
        title: 'Careers at KN Soft Tech',
        content: 'Join our team! We offer exciting career opportunities in software development, AI/ML, SAP, and more. We provide meaningful work, an amazing team environment, and growth opportunities. Check our open positions for AI Engineer, Full Stack Developer, SAP ABAP Developer, and other roles.',
        metadata: { section: 'careers', url: '/careers' }
      },
      {
        type: 'contact',
        title: 'Contact Information',
        content: 'Contact KN Soft Tech for inquiries. Visit our website to submit a contact form or reach out to discuss your project requirements.',
        metadata: { section: 'contact', url: '/contact' }
      }
    ];

    console.log(`Processing ${websiteContent.length} content chunks...`);

    // Generate embeddings for each content chunk
    for (const item of websiteContent) {
      console.log(`Processing: ${item.title}`);
      
      // Generate embedding using Groq
      const embeddingResponse = await fetch('https://api.groq.com/openai/v1/embeddings', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'nomic-embed-text-v1.5',
          input: `${item.title}\n\n${item.content}`,
        }),
      });

      if (!embeddingResponse.ok) {
        console.error(`Failed to generate embedding for ${item.title}`);
        continue;
      }

      const embeddingData = await embeddingResponse.json();
      const embedding = embeddingData.data[0].embedding;

      // Store in database
      const { error } = await supabase
        .from('knowledge_base')
        .upsert({
          content: `${item.title}\n\n${item.content}`,
          metadata: item.metadata,
          embedding: embedding,
        }, {
          onConflict: 'content'
        });

      if (error) {
        console.error(`Error storing ${item.title}:`, error);
      } else {
        console.log(`Successfully stored: ${item.title}`);
      }
    }

    console.log('Website scraping and embedding complete!');

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Successfully processed ${websiteContent.length} content chunks`,
        count: websiteContent.length 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error in scrape-and-embed:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});