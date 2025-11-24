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
        content: 'KN Soft Tech (KNSOFT Technologies) is a CMMI Level 3 and ISO 27001:2022 certified IT company specializing in software development, AI/ML solutions, SAP modernization, and solar power services. Founded in 2010 with 13+ years of industry experience. We deliver innovative technology solutions across healthcare, education, finance, e-commerce, and more. We have 500+ satisfied clients across 25+ countries and 1000+ successful project deliveries.',
        keywords: ['about', 'company', 'knsoft', 'kn soft tech', 'certified', 'cmmi', 'iso', 'founded', 'experience'],
        metadata: { section: 'about', url: '/' }
      },
      {
        type: 'leadership',
        title: 'CEO - Dasaradha Ramaiah Kosana',
        content: 'Dasaradha Ramaiah Kosana (USA) is the CEO of KN Soft Tech. With over 25 years in enterprise software development, he founded KNSOFT Technologies with a vision to deliver world-class IT solutions. He specializes in SAP integration and digital transformation strategies. Email: dasaradh@knsoft.com',
        keywords: ['ceo', 'founder', 'dasaradha', 'ramaiah', 'kosana', 'leadership', 'chief executive'],
        metadata: { section: 'leadership', url: '/about' }
      },
      {
        type: 'leadership',
        title: 'COO/CTO - Uday Kiran Bandaru',
        content: 'Uday Kiran Bandaru (India) is the COO and CTO of KN Soft Tech. With over 20+ years of leadership at the intersection of technology and operations, he brings expertise in scaling systems, optimizing workflows, and driving digital transformation. He architects solutions that deliver measurable impact, resilience, and growth. Email: uday@knsoft.com',
        keywords: ['coo', 'cto', 'uday', 'kiran', 'bandaru', 'leadership', 'operations', 'technology'],
        metadata: { section: 'leadership', url: '/about' }
      },
      {
        type: 'leadership',
        title: 'Leadership Team',
        content: 'Our leadership team includes: Dasaradha Ramaiah Kosana (CEO, 25+ years), Uday Kiran Bandaru (COO/CTO, 20+ years), Rajesh Mora (Head of HR Operations, 18+ years), Karuna Sree (Director-Business Development, 15+ years), Swapna Chowdary (Vice President, 16+ years in sales), and Vijaya Bhanu (Certified Soft Skills & Business Communication Trainer, 20+ years).',
        keywords: ['team', 'leadership', 'management', 'executives', 'directors'],
        metadata: { section: 'leadership', url: '/about' }
      },
      {
        type: 'services',
        title: 'AI & Automation Services',
        content: 'We offer cutting-edge AI and automation services including Artificial Intelligence, Agentic AI, Generative AI, and Data Science solutions. Our AI capabilities help businesses automate processes, gain insights from data, and build intelligent applications. We specialize in machine learning, deep learning, natural language processing, and computer vision.',
        keywords: ['ai', 'artificial intelligence', 'automation', 'machine learning', 'ml', 'data science', 'agentic ai', 'generative ai', 'nlp', 'computer vision'],
        metadata: { section: 'services', url: '/services/ai-automation' }
      },
      {
        type: 'services',
        title: 'Web & Mobile Development',
        content: 'Custom web and mobile application development services using modern technologies. We build responsive, scalable applications for web, iOS, and Android platforms. Our expertise includes React, Angular, Vue.js, Node.js, React Native, Flutter, and native iOS/Android development. We create consumer-facing web applications, enterprise software, and mobile apps.',
        keywords: ['web development', 'mobile development', 'app development', 'ios', 'android', 'responsive', 'react', 'angular', 'flutter'],
        metadata: { section: 'services', url: '/services/web-mobile-development' }
      },
      {
        type: 'services',
        title: 'SAP Modernization & ABAP',
        content: 'SAP modernization services including SAP ABAP development, S/4HANA migration, and SAP system optimization. Our certified SAP experts help modernize legacy systems. We can modernize your existing SAP application infrastructure, build SAP-based solutions from scratch or seamlessly integrate applications with your current enterprise systems and SAP products.',
        keywords: ['sap', 'abap', 's4hana', 'sap modernization', 'legacy systems', 'erp', 'enterprise'],
        metadata: { section: 'services', url: '/services/sap-modernization' }
      },
      {
        type: 'services',
        title: 'E-commerce & Portals',
        content: 'Complete e-commerce portal development with shopping cart, payment gateway integration, inventory management, and customer relationship management. We bring together a professional team of experts in Ecommerce and Web Development to develop an Ecommerce website. Create a presence for your business on internet with software applications to support online transactions, advertising, product procurement and order management.',
        keywords: ['ecommerce', 'e-commerce', 'online store', 'shopping', 'portal', 'payment gateway', 'inventory'],
        metadata: { section: 'services', url: '/services/ecommerce-portals' }
      },
      {
        type: 'services',
        title: 'IT Consulting',
        content: 'Expert IT consulting services for technology strategy, digital transformation, system architecture, and IT infrastructure optimization. KNSoft IT consulting division provides assistance to Clients for their changing IT Environments to improve their Effectiveness and efficiency by adopting advanced technologies and Methodologies.',
        keywords: ['consulting', 'it consulting', 'strategy', 'digital transformation', 'architecture'],
        metadata: { section: 'services', url: '/services/it-consulting' }
      },
      {
        type: 'services',
        title: 'Training Programs',
        content: 'Professional IT training programs led by expert trainers. Vijaya Bhanu (20 years training excellence) delivers impactful learning experiences in communication, customer service, and leadership. She has conducted 5000+ sessions for brands like Infosys, Amazon, ICICI, and L\'Oréal. Training covers SAP ABAP, Big Data, AI/ML, soft skills, and business communication.',
        keywords: ['training', 'courses', 'learning', 'education', 'vijaya bhanu', 'soft skills', 'sap training'],
        metadata: { section: 'services', url: '/services/training' }
      },
      {
        type: 'services',
        title: 'Software Testing Services',
        content: 'Our team of experienced locally-based system analysts and developers provide comprehensive software testing services. We offer quality assurance, test automation, performance testing, security testing, and user acceptance testing for Enterprise Software, Web Applications, and Mobile Applications.',
        keywords: ['testing', 'qa', 'quality assurance', 'test automation', 'software testing'],
        metadata: { section: 'services', url: '/services/web-mobile-development' }
      },
      {
        type: 'services',
        title: 'Solar Power Services',
        content: 'Solar power installation, maintenance, and renewable energy consulting services. We help businesses transition to sustainable energy solutions with solar panel installation, energy audits, and green energy consulting.',
        keywords: ['solar', 'renewable energy', 'solar power', 'sustainable', 'green energy'],
        metadata: { section: 'services', url: '/solar-services' }
      },
      {
        type: 'products',
        title: 'Healthcare & Medical Solutions',
        content: 'Hospital Management Systems, Clinic Management Software, Pharmacy Management Software, Pathology Lab Management, and Diagnostic Lab Management systems. Comprehensive healthcare IT solutions for hospitals, clinics, labs, and pharmacies. Features include patient management, appointment scheduling, billing, inventory, reporting, and EMR/EHR systems.',
        keywords: ['healthcare', 'hospital', 'clinic', 'pharmacy', 'medical', 'pathology', 'diagnostic', 'hms', 'emr', 'ehr'],
        metadata: { section: 'products', url: '/products/healthcare-medical' }
      },
      {
        type: 'products',
        title: 'Education & Learning Solutions',
        content: 'School Management Systems, Academy Learning Management Systems, Library Management Systems, Online Exam Systems, and E-learning platforms for educational institutions. Features include student management, attendance tracking, fee collection, grade management, online classes, examination systems, and parent portals.',
        keywords: ['education', 'school', 'learning', 'lms', 'exam', 'library', 'student management', 'online learning'],
        metadata: { section: 'products', url: '/products/education-learning' }
      },
      {
        type: 'products',
        title: 'Finance & Microfinance Solutions',
        content: 'Financial management software, microfinance solutions, accounting systems, and banking applications for financial institutions. Includes loan management, savings management, accounting, reporting, and compliance features.',
        keywords: ['finance', 'microfinance', 'banking', 'accounting', 'loan management'],
        metadata: { section: 'products', url: '/products/finance-microfinance' }
      },
      {
        type: 'products',
        title: 'E-commerce & Retail Solutions',
        content: 'Complete e-commerce platforms, retail management systems, inventory management, POS systems, and online shopping solutions. Features include product catalog management, order processing, payment integration, shipping management, and customer analytics.',
        keywords: ['ecommerce', 'retail', 'inventory', 'pos', 'shopping', 'online store'],
        metadata: { section: 'products', url: '/products/ecommerce-retail' }
      },
      {
        type: 'products',
        title: 'Business ERP & CRM',
        content: 'Enterprise Resource Planning (ERP) systems, Customer Relationship Management (CRM) software, Project Management tools, and business automation solutions. Integrate all business processes including finance, HR, sales, purchasing, and operations.',
        keywords: ['erp', 'crm', 'business', 'project management', 'automation', 'enterprise'],
        metadata: { section: 'products', url: '/products/business-erp-crm' }
      },
      {
        type: 'careers',
        title: 'Careers and Job Openings',
        content: 'Join our team at KN Soft Tech! We offer exciting career opportunities in software development, AI/ML, SAP, data science, and more. We provide meaningful work, an amazing team environment, and growth opportunities. Current open positions include AI Engineer, Full Stack Developer, SAP ABAP Developer, Data Scientist, React Developer, Python Developer, and various other technology roles. We believe in collaboration, innovation, client focus, and integrity.',
        keywords: ['careers', 'jobs', 'hiring', 'employment', 'opportunities', 'openings', 'positions', 'ai engineer', 'developer', 'sap', 'join', 'work'],
        metadata: { section: 'careers', url: '/careers' }
      },
      {
        type: 'contact',
        title: 'Contact Information and Office Locations',
        content: 'Contact KN Soft Tech for inquiries. Email: info@knsofttech.com. Office Locations: Headquarters in Hyderabad, India (H.No 8, Apurupa Turbo Tower, Jubilee Hills, Hyderabad, Telangana 500033). Branch Office in Houston, USA (6250, Westpark Dr., Houston, TX 77057). Development Center in Guntur, India (Flat No - TF-2, Venkateswara Arcade, Annapurna Nagar 6th lane, Gorantla, Guntur, Andhra Pradesh – 522034). Visit our website to submit a contact form or reach out to discuss your project requirements.',
        keywords: ['contact', 'inquiry', 'reach out', 'get in touch', 'office', 'location', 'address', 'email', 'hyderabad', 'houston', 'guntur'],
        metadata: { section: 'contact', url: '/contact' }
      },
      {
        type: 'certifications',
        title: 'Certifications and Quality Standards',
        content: 'KN Soft Tech holds multiple certifications: CMMI Level 3 (Capability Maturity Model Integration for process excellence), ISO 9001:2015 (Quality Management Systems), ISO 27001:2013 (Information Security Management). We are also a SAP Certified Solutions Partner, AWS Technology Partner, and Microsoft Certified Partner. We follow agile development methodologies and provide 24/7 dedicated support services.',
        keywords: ['certifications', 'cmmi', 'iso', 'quality', 'standards', 'certified', 'sap partner', 'aws', 'microsoft'],
        metadata: { section: 'about', url: '/about' }
      }
    ];

    console.log(`Processing ${websiteContent.length} content chunks...`);

    // First, clear existing data to avoid duplicates
    const { error: deleteError } = await supabase
      .from('knowledge_base')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all rows
    
    if (deleteError) {
      console.error('Error clearing knowledge base:', deleteError);
    } else {
      console.log('Cleared existing knowledge base');
    }

    // Store content in database (without embeddings)
    for (const item of websiteContent) {
      console.log(`Processing: ${item.title}`);
      
      const { error } = await supabase
        .from('knowledge_base')
        .insert({
          content: `${item.title}\n\n${item.content}`,
          metadata: {
            ...item.metadata,
            keywords: item.keywords,
            type: item.type,
            title: item.title
          },
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