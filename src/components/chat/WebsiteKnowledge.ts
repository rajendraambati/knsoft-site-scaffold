// COMPREHENSIVE KNSOFT TECHNOLOGIES WEBSITE KNOWLEDGE BASE
// Complete learning from all website pages for accurate chatbot responses

export interface ContentSection {
  page: string;
  section: string;
  content: string;
  keywords: string[];
  context: string;
}

export const websiteContent: ContentSection[] = [
  // COMPANY INFORMATION
  {
    page: "about",
    section: "company_overview",
    content: "KNSOFT Technologies is an IT solutions company founded in 2010 that provides software development, web and mobile app development, cloud solutions, and digital transformation services for businesses worldwide. We deliver enterprise software solutions with a focus on reliability, compliance, and speed. Our teams specialize in SAP integration, custom development, and automation.",
    keywords: ["what is knsoft", "company", "it solutions", "founded 2010", "enterprise software", "reliability", "compliance"],
    context: "Basic company description and core focus"
  },
  
  // LOCATION INFORMATION
  {
    page: "contact",
    section: "headquarters_location",
    content: "KNSOFT Technologies headquarters is located at H.No 8, Apurupa Turbo Tower, No:36 Pillar No:1680, 2-293/82/a/787, Road, Jubilee Hills, Hyderabad, Telangana 500033, India. Email: info@knsofttech.com",
    keywords: ["where is knsoft", "location", "headquarters", "hyderabad", "india", "address", "jubilee hills"],
    context: "Primary office location and contact"
  },
  {
    page: "contact", 
    section: "usa_office",
    content: "Our USA branch office is located at 6250, Westpark Dr., Houston, TX 77057. Email: usa@knsofttech.com",
    keywords: ["usa office", "houston", "america", "branch office", "texas"],
    context: "US office location"
  },
  {
    page: "contact",
    section: "development_center", 
    content: "Our development center is located at Flat No - TF-2, Venkateswara Arcade, Annapurna Nagar 6th lane, Gorantla, Guntur, Andhra Pradesh – 522034. Email: guntur@knsofttech.com",
    keywords: ["guntur office", "development center", "andhra pradesh"],
    context: "Development center location"
  },
  
  // CONTACT INFORMATION
  {
    page: "contact",
    section: "contact_details",
    content: "You can contact KNSOFT Technologies through email at info@knsofttech.com for general inquiries, usa@knsofttech.com for USA office, and guntur@knsofttech.com for development center. Phone: +91 40 4012 3456",
    keywords: ["contact", "email", "phone", "how to contact", "reach"],
    context: "Contact methods and details"
  },
  
  // COMPANY HISTORY & STATS
  {
    page: "about",
    section: "company_stats",
    content: "KNSOFT Technologies has been in business for over 13 years since being founded in 2010. We have served 500+ satisfied clients across 25+ countries and completed 1000+ successful project deliveries with 24/7 dedicated support services.",
    keywords: ["how long", "years in business", "founded", "experience", "clients", "projects", "countries"],
    context: "Company experience and achievements"
  },
  
  // SERVICES OFFERED
  {
    page: "services",
    section: "core_services",
    content: "KNSOFT Technologies provides end-to-end IT services including: 1) Custom software development - tailored solutions for business needs, 2) Web & Mobile Development - full-stack development, progressive web apps, responsive design, 3) SAP Modernization & ERP - S/4HANA migration, system integration, custom implementations, 4) Ecommerce Portals - custom ecommerce development, payment integration, mobile commerce, 5) AI & Automation - chatbots, RPA, machine learning, intelligent process automation, 6) IT Consulting - strategic planning, technology assessment, infrastructure optimization",
    keywords: ["services", "what services", "software development", "web development", "mobile development", "sap", "erp", "ecommerce", "ai automation", "it consulting"],
    context: "Complete list of services offered"
  },
  {
    page: "services", 
    section: "specialized_services",
    content: "We also provide specialized services including: Solar Energy Storage solutions, Smart Solar Integration with IoT monitoring, Agile Software Development methodology, Blockchain Development for digital assets, Chatbot Development for customer service, and RPA Solutions for business process automation.",
    keywords: ["specialized services", "solar energy", "blockchain", "chatbot development", "rpa", "agile development"],
    context: "Additional specialized expertise"
  },
  
  // TECHNOLOGY STACK
  {
    page: "services",
    section: "technologies",
    content: "Our technology expertise includes: Web Technologies (React, Angular, Vue.js, Node.js, Python, Java), Mobile Development (Native iOS Swift, Android Kotlin/Java, React Native, Flutter, PWA), Cloud Platforms (AWS, Azure, Google Cloud), Database & Analytics (SQL and NoSQL databases, data warehousing), Enterprise Technologies (SAP implementations, ERP/CRM platforms, API development), and Emerging Technologies (AI/ML, IoT, Blockchain solutions).",
    keywords: ["technologies", "tech stack", "react", "angular", "nodejs", "python", "java", "mobile", "cloud", "aws", "azure", "sap"],
    context: "Technical capabilities and technology stack"
  },
  
  // INDUSTRIES SERVED
  {
    page: "about",
    section: "target_clients",
    content: "We work with startups, SMEs, and large enterprises across multiple industries including healthcare, finance, retail, education, logistics, and e-commerce.",
    keywords: ["clients", "customers", "industries", "healthcare", "finance", "retail", "education", "startups", "enterprises"],
    context: "Client types and industries served"
  },
  
  // PRODUCTS
  {
    page: "products",
    section: "hospital_management",
    content: "Hospital Management Software 2 is our next-generation platform designed to integrate all hospital departments into a unified digital ecosystem. Key features include unified patient records (EHR), integrated pharmacy and lab modules, automated billing with claim management, doctor/nurse scheduling, real-time performance dashboards, and secure patient and doctor portals. Results show 40% faster patient admissions, 35% reduction in administrative costs, 25% improvement in patient satisfaction, and 32% fewer claim rejections.",
    keywords: ["hospital management", "healthcare software", "ehr", "patient records", "medical software", "hospital system"],
    context: "Healthcare software product details and outcomes"
  },
  
  // PRICING & ENGAGEMENT
  {
    page: "services",
    section: "pricing_model",
    content: "The cost of software development depends on project complexity, features, and duration. We provide free initial consultations to understand requirements and offer both fixed-price and flexible hourly billing models to match client needs. We support both project-based work and long-term partnership contracts.",
    keywords: ["cost", "pricing", "how much", "billing", "consultation", "quote", "free consultation"],
    context: "Pricing approach and engagement models"
  },
  
  // SUPPORT & MAINTENANCE  
  {
    page: "services",
    section: "support_services",
    content: "We provide ongoing technical support and updates after project delivery to ensure smooth operations. Our typical response time is within a few hours depending on the support package. We offer regular software maintenance, updates, bug fixes, and performance enhancements. 24/7 support is available for clients under premium support plans.",
    keywords: ["support", "maintenance", "technical support", "24/7", "updates", "response time"],
    context: "Post-delivery support and maintenance services"
  },
  
  // CAREERS
  {
    page: "careers",
    section: "career_opportunities",
    content: "You can apply for jobs at KNSOFT Technologies through our Careers page or by sending your resume to hr@knsoft.com. We hire for roles in software development, testing, UI/UX design, project management, and business analysis. We offer opportunities for both interns and fresh graduates, as well as experienced professionals. Career benefits include meaningful work on impactful projects, collaboration with talented professionals, and continuous growth opportunities in a supportive environment.",
    keywords: ["careers", "jobs", "hiring", "apply", "hr@knsoft.com", "software development", "testing", "design", "internships"],
    context: "Career opportunities and application process"
  },
  
  // LEADERSHIP
  {
    page: "about",
    section: "leadership_team",
    content: "Our leadership team includes: Dasaradh Ram - Chief Executive Officer & Founder with 25+ years experience in enterprise software development and SAP integration, Uday Kiran - Chief Technology Officer with 20+ years experience in cloud architecture and AI automation, Rajesh - Head of Operations with 18+ years overseeing project delivery, and Karuna Sree - Head of Business Development with 15+ years driving growth strategy.",
    keywords: ["leadership", "team", "ceo", "cto", "founders", "management", "experience"],
    context: "Company leadership and their expertise"
  },
  
  // CERTIFICATIONS
  {
    page: "about", 
    section: "certifications",
    content: "KNSOFT Technologies holds industry certifications including ISO 9001:2015 Quality Management Systems, ISO 27001:2013 Information Security Management, CMMI Level 3 Capability Maturity Model Integration, SAP Partnership as Certified SAP Solutions Partner, AWS Partnership as Amazon Web Services Technology Partner, and Microsoft Certified Partner status.",
    keywords: ["certifications", "iso 9001", "iso 27001", "cmmi level 3", "sap partner", "aws partner", "microsoft partner"],
    context: "Industry certifications and partnerships"
  },
  
  // COMPANY CULTURE
  {
    page: "about",
    section: "company_values",
    content: "Our company culture is built on four core values: Collaboration - we believe in teamwork and open communication, Innovation - we constantly evolve with cutting-edge technologies, Client Focus - our clients' success is our priority, and Integrity - we conduct business with honesty and transparency.",
    keywords: ["culture", "values", "collaboration", "innovation", "client focus", "integrity"],
    context: "Company values and culture"
  },
  
  // PARTNERSHIPS
  {
    page: "services",
    section: "partnerships",
    content: "Yes, we welcome partnerships and collaboration with businesses, startups, and resellers. We support startups with affordable, scalable solutions to bring their ideas to life. We also provide dedicated offshore teams and outsourcing services for cost-effective development.",
    keywords: ["partnerships", "collaboration", "startups", "outsourcing", "offshore", "resellers"],
    context: "Partnership and collaboration opportunities"
  },
  
  // DATA SECURITY
  {
    page: "services",
    section: "data_security",
    content: "We ensure data security in our software by following industry best practices including encryption, secure coding standards, and compliance with GDPR/ISO standards. All our systems include end-to-end encryption, audit trails, and HIPAA compliance where applicable.",
    keywords: ["data security", "encryption", "gdpr", "hipaa", "compliance", "secure"],
    context: "Data security and compliance measures"
  },
  
  // INTEGRATION CAPABILITIES
  {
    page: "services",
    section: "system_integration",
    content: "Yes, we can integrate software with existing systems to ensure smooth integration with your current tools and platforms. We specialize in API development and integration, ERP system integration, and connecting disparate systems into unified solutions.",
    keywords: ["integration", "existing systems", "api", "erp integration", "system integration"],
    context: "Integration capabilities with existing systems"
  }
];

export const findRelevantContent = (query: string): ContentSection[] => {
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(' ').filter(word => word.length > 2);
  
  const scored = websiteContent.map(section => {
    let score = 0;
    
    // Exact phrase matching gets highest score
    if (section.content.toLowerCase().includes(queryLower)) {
      score += 10;
    }
    
    // Keywords matching
    section.keywords.forEach(keyword => {
      if (queryLower.includes(keyword.toLowerCase()) || keyword.toLowerCase().includes(queryLower)) {
        score += 5;
      }
      queryWords.forEach(word => {
        if (keyword.toLowerCase().includes(word) || word.includes(keyword.toLowerCase())) {
          score += 3;
        }
      });
    });
    
    // Content word matching
    queryWords.forEach(word => {
      if (section.content.toLowerCase().includes(word)) {
        score += 2;
      }
    });
    
    // Context matching
    queryWords.forEach(word => {
      if (section.context.toLowerCase().includes(word)) {
        score += 1;
      }
    });
    
    return { ...section, score };
  });
  
  return scored
    .filter(section => section.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3); // Return top 3 matches for more focused responses
};

export const getCompanyInfo = () => {
  return {
    name: "KNSOFT Technologies",
    founded: "2010",
    experience: "13+ years",
    clients: "500+ satisfied clients",
    countries: "25+ countries",
    projects: "1000+ successful deliveries",
    support: "24/7 dedicated support",
    headquarters: "Hyderabad, India",
    branches: ["Houston, USA", "Guntur, India"],
    email: "info@knsofttech.com",
    tagline: "Driving Digital Transformation with Innovative IT Solutions, Software Development & Solar-Powered Sustainability"
  };
};