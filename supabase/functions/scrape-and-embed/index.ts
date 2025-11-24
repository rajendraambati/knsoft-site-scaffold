import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    
    console.log('Starting website content storage...');
    
    // Website content to store - defining key pages and sections
    const websiteContent = [
      {
        type: 'page',
        title: 'Homepage - KN Soft Tech',
        content: 'KN Soft Tech is a CMMI Level 3 and ISO 27001:2022 certified IT company specializing in software development, AI/ML solutions, SAP modernization, and solar power services. We deliver innovative technology solutions across healthcare, education, finance, e-commerce, and more.',
        keywords: ['about', 'company', 'knsoft', 'kn soft tech', 'certified', 'cmmi', 'iso'],
        metadata: { section: 'about', url: '/' }
      },
      {
        type: 'services',
        title: 'AI & Automation Services',
        content: 'We offer cutting-edge AI and automation services including Artificial Intelligence, Agentic AI, Generative AI, and Data Science solutions. Our AI capabilities help businesses automate processes, gain insights from data, and build intelligent applications.',
        keywords: ['ai', 'artificial intelligence', 'automation', 'machine learning', 'ml', 'data science', 'agentic ai', 'generative ai'],
        metadata: { section: 'services', url: '/services/ai-automation' }
      },
      {
        type: 'services',
        title: 'Web & Mobile Development',
        content: 'Custom web and mobile application development services using modern technologies. We build responsive, scalable applications for web, iOS, and Android platforms.',
        keywords: ['web development', 'mobile development', 'app development', 'ios', 'android', 'responsive'],
        metadata: { section: 'services', url: '/services/web-mobile-development' }
      },
      {
        type: 'services',
        title: 'SAP Modernization & ABAP',
        content: 'SAP modernization services including SAP ABAP development, S/4HANA migration, and SAP system optimization. Our certified SAP experts help modernize legacy systems.',
        keywords: ['sap', 'abap', 's4hana', 'sap modernization', 'legacy systems'],
        metadata: { section: 'services', url: '/services/sap-modernization' }
      },
      {
        type: 'services',
        title: 'E-commerce & Portals',
        content: 'Complete e-commerce portal development with shopping cart, payment gateway integration, inventory management, and customer relationship management.',
        keywords: ['ecommerce', 'e-commerce', 'online store', 'shopping', 'portal'],
        metadata: { section: 'services', url: '/services/ecommerce-portals' }
      },
      {
        type: 'services',
        title: 'IT Consulting',
        content: 'Expert IT consulting services for technology strategy, digital transformation, system architecture, and IT infrastructure optimization.',
        keywords: ['consulting', 'it consulting', 'strategy', 'digital transformation'],
        metadata: { section: 'services', url: '/services/it-consulting' }
      },
      {
        type: 'services',
        title: 'Training Programs',
        content: 'Professional IT training programs led by expert trainers Vijaya Bhanu (15+ years in SAP ABAP, Big Data, AI/ML) and Nancy Sevagan (20 years in sales, banking, and relationship management).',
        keywords: ['training', 'courses', 'learning', 'education', 'vijaya bhanu', 'nancy sevagan'],
        metadata: { section: 'services', url: '/services/training' }
      },
      {
        type: 'services',
        title: 'Solar Power Services',
        content: 'Solar power installation, maintenance, and renewable energy consulting services. We help businesses transition to sustainable energy solutions.',
        keywords: ['solar', 'renewable energy', 'solar power', 'sustainable'],
        metadata: { section: 'services', url: '/solar-services' }
      },
      {
        type: 'products',
        title: 'Healthcare & Medical Solutions',
        content: 'Hospital Management Systems, Clinic Management Software, Pharmacy Management Software, Pathology Lab Management, and Diagnostic Lab Management systems. Comprehensive healthcare IT solutions for hospitals, clinics, labs, and pharmacies.',
        keywords: ['healthcare', 'hospital', 'clinic', 'pharmacy', 'medical', 'pathology', 'diagnostic'],
        metadata: { section: 'products', url: '/products/healthcare-medical' }
      },
      {
        type: 'products',
        title: 'Education & Learning Solutions',
        content: 'School Management Systems, Academy Learning Management Systems, Library Management Systems, Online Exam Systems, and E-learning platforms for educational institutions.',
        keywords: ['education', 'school', 'learning', 'lms', 'exam', 'library'],
        metadata: { section: 'products', url: '/products/education-learning' }
      },
      {
        type: 'products',
        title: 'Finance & Microfinance Solutions',
        content: 'Financial management software, microfinance solutions, accounting systems, and banking applications for financial institutions.',
        keywords: ['finance', 'microfinance', 'banking', 'accounting'],
        metadata: { section: 'products', url: '/products/finance-microfinance' }
      },
      {
        type: 'products',
        title: 'E-commerce & Retail Solutions',
        content: 'Complete e-commerce platforms, retail management systems, inventory management, POS systems, and online shopping solutions.',
        keywords: ['ecommerce', 'retail', 'inventory', 'pos', 'shopping'],
        metadata: { section: 'products', url: '/products/ecommerce-retail' }
      },
      {
        type: 'products',
        title: 'Business ERP & CRM',
        content: 'Enterprise Resource Planning (ERP) systems, Customer Relationship Management (CRM) software, Project Management tools, and business automation solutions.',
        keywords: ['erp', 'crm', 'business', 'project management', 'automation'],
        metadata: { section: 'products', url: '/products/business-erp-crm' }
      },
      {
        type: 'careers',
        title: 'Careers at KN Soft Tech',
        content: 'Join our team! We offer exciting career opportunities in software development, AI/ML, SAP, and more. We provide meaningful work, an amazing team environment, and growth opportunities. Open positions include AI Engineer, Full Stack Developer, SAP ABAP Developer, Data Scientist, and more.',
        keywords: ['careers', 'jobs', 'hiring', 'employment', 'opportunities', 'ai engineer', 'developer', 'sap'],
        metadata: { section: 'careers', url: '/careers' }
      },
      {
        type: 'contact',
        title: 'Contact Information',
        content: 'Contact KN Soft Tech for inquiries. Visit our website to submit a contact form or reach out to discuss your project requirements.',
        keywords: ['contact', 'inquiry', 'reach out', 'get in touch'],
        metadata: { section: 'contact', url: '/contact' }
      }
    ];

    console.log(`Processing ${websiteContent.length} content chunks...`);

    // Store content in database (without embeddings)
    for (const item of websiteContent) {
      console.log(`Processing: ${item.title}`);
      
      const { error } = await supabase
        .from('knowledge_base')
        .upsert({
          content: `${item.title}\n\n${item.content}`,
          metadata: {
            ...item.metadata,
            keywords: item.keywords,
            type: item.type
          },
        }, {
          onConflict: 'content'
        });

      if (error) {
        console.error(`Error storing ${item.title}:`, error);
      } else {
        console.log(`Successfully stored: ${item.title}`);
      }
    }

    console.log('Website content storage complete!');

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