// COMPREHENSIVE KNSOFT TECHNOLOGIES WEBSITE KNOWLEDGE BASE
// This knowledge base contains all content from the website pages

export interface ContentSection {
  page: string;
  section: string;
  content: string;
  keywords: string[];
  context: string;
}

export const websiteContent: ContentSection[] = [
  // HOME PAGE CONTENT
  {
    page: "home",
    section: "hero",
    content: "KNSOFT TECHNOLOGIES - Driving Digital Transformation with Innovative IT Solutions, Software Development & Solar-Powered Sustainability",
    keywords: ["home", "knsoft", "digital transformation", "IT solutions", "software development", "solar", "sustainability"],
    context: "Main company tagline and mission"
  },
  {
    page: "home",
    section: "hero_slides", 
    content: "Experience in staff Augmentation - We, KNSoft Technologies, are highly regarded for our innovation in stream of value-added staffing or recruiting services. We Bring your app concepts to life - It is time to explore endless possibilities with our unique APP Development Services. Ideally business-centric it solutions - We provide avant-garde software, web and mobile app services which best reflect our client's requirements.",
    keywords: ["staff augmentation", "app development", "business solutions", "mobile app", "software"],
    context: "Key value propositions displayed on homepage"
  },

  // ABOUT PAGE CONTENT
  {
    page: "about",
    section: "company_overview",
    content: "Founded in 2010, KNSoft Technologies delivers enterprise software solutions with a focus on reliability, compliance, and speed. Our teams specialize in SAP integration, custom development, and automation. We earnestly believe that innovativeness in business operations can be brought in only through reliable software systems, web apps and enterprise mobile apps which eventually can create long-term sustainable, competitive advantage in the marketplace.",
    keywords: ["founded 2010", "enterprise software", "SAP integration", "automation", "reliability", "compliance"],
    context: "Company history and core beliefs"
  },
  {
    page: "about", 
    section: "achievements",
    content: "Founded in 2010 with 13+ years of industry experience. 500+ satisfied clients across 25+ countries. 1000+ successful project deliveries. 24/7 dedicated support services. Certified professionals & domain experts. Agile development methodologies.",
    keywords: ["13 years experience", "500 clients", "25 countries", "1000 projects", "24/7 support", "agile"],
    context: "Company statistics and achievements"
  },
  {
    page: "about",
    section: "leadership",
    content: "Leadership team includes: Dasaradh Ram - Chief Executive Officer & Founder with 25+ years experience in enterprise software development and SAP integration. Uday Kiran - Chief Technology Officer with 20+ years experience leading technical strategy and innovation in cloud architecture, AI automation, and enterprise systems. Rajesh - Head of Operations with 18+ years overseeing project delivery and client relationships. Karuna Sree - Head of Business Development with 15+ years driving growth strategy and partnerships.",
    keywords: ["leadership", "ceo", "cto", "dasaradh ram", "uday kiran", "rajesh", "karuna sree"],
    context: "Company leadership and their expertise"
  },
  {
    page: "about",
    section: "office_locations",
    content: "Global presence with offices in: Hyderabad, India (Headquarters) - H.No 8, Apurupa Turbo Tower, Jubilee Hills, Hyderabad, Telangana 500033, email: info@knsofttech.com. Houston, USA (Branch Office) - 6250, Westpark Dr., Houston, TX 77057, email: usa@knsofttech.com. Guntur, India (Development Center) - Flat No - TF-2, Venkateswara Arcade, Annapurna Nagar 6th lane, Gorantla, Guntur, Andhra Pradesh – 522034, email: guntur@knsofttech.com.",
    keywords: ["offices", "hyderabad", "houston", "guntur", "headquarters", "branch office", "development center"],
    context: "Company office locations and contact details"
  },
  {
    page: "about",
    section: "certifications",
    content: "Industry certifications and partnerships: ISO 9001:2015 Quality Management Systems, ISO 27001:2013 Information Security Management, CMMI Level 3 Capability Maturity Model Integration, SAP Partnership - Certified SAP Solutions Partner, AWS Partner - Amazon Web Services Technology Partner, Microsoft Partner - Microsoft Certified Partner.",
    keywords: ["iso 9001", "iso 27001", "cmmi level 3", "sap partner", "aws partner", "microsoft partner"],
    context: "Company certifications and technology partnerships"
  },

  // SERVICES PAGE CONTENT  
  {
    page: "services",
    section: "core_services",
    content: "Core services include: Web & Mobile Development - Transform your digital presence with cutting-edge web and mobile applications, full-stack development, progressive web apps, and responsive design solutions. SAP Modernization & ERP - Modernize your SAP infrastructure and streamline business processes with comprehensive ERP solutions, S/4HANA migration, system integration, and custom implementations. Ecommerce Portals - Build powerful online stores and marketplaces, custom ecommerce development, payment integration, and mobile commerce solutions. AI & Automation - Harness artificial intelligence and automation to streamline operations including chatbots, RPA, machine learning, and intelligent process automation. IT Consulting - Navigate digital transformation with expert IT consulting, strategic planning, technology assessment, and infrastructure optimization.",
    keywords: ["web development", "mobile development", "sap modernization", "erp", "ecommerce", "ai automation", "it consulting"],
    context: "Primary service offerings"
  },
  {
    page: "services", 
    section: "specialized_services",
    content: "Specialized expertise includes: Solar Energy Storage - Advanced battery storage solutions to maximize solar energy utilization and provide backup power. Smart Solar Integration - IoT-enabled solar systems with intelligent monitoring and automated energy management. Agile Software Development - Collaborative, adaptive, and efficient development approach focused on delivering working software quickly. Blockchain Development - Secure, distributed ledger solutions for modern digital asset management and transactions. Chatbot Development - Intelligent conversational interfaces for enhanced customer service and automation. RPA Solutions - Robotic Process Automation to streamline business operations and increase efficiency.",
    keywords: ["solar energy", "smart solar", "agile development", "blockchain", "chatbot", "rpa"],
    context: "Specialized technology and energy solutions"
  },

  // SERVICES SECTION CONTENT
  {
    page: "home",
    section: "services_offered",
    content: "IT Consulting - KNSoft IT consulting division provides assistance to the Clients for their changing IT Environments to improve their Effectiveness and efficiency by adopting advanced technologies and Methodologies. Ecommerce - KNSoft will bring together a professional team of experts in Ecommerce and Web Development to develop an Ecommerce website that will grab the growing market. ERP Application Development - We can modernize your existing SAP application infrastructure, build SAP-based solutions from scratch or seamlessly integrate applications with your current enterprise systems and SAP products. Software Development - KNSoft want to reach optimal efficiency in the organization of your system projects, complete end-to-end suite developed and delivered by us. Software testing service - Our team of experienced locally-based system analysts and developers will meet your various needs with comprehensive testing services. Web application - We work on business models our clients want us to. We have unparalleled expertise at developing web solutions any technology platform including PHP Framework, Zend PHP Framework, Symfony, Phalcon, CodeIgniter, .NET Framework, Ruby on Rails, Django.",
    keywords: ["it consulting", "ecommerce development", "erp development", "software development", "testing", "web application", "php", "net framework"],
    context: "Detailed service descriptions from homepage"
  },

  // CAPABILITIES CONTENT
  {
    page: "home",
    section: "capabilities",
    content: "Our capabilities include: Hosting Services - Blended Cloudhosting, IAAS (Infrastructure As A Service), PUM image updates, Optimization for lower cost. Implementations & Upgrades - Installations, Roll-outs, Implementations, Customizations, Integrations, Fit-gap Analysis, Accelerated Upgrade Paths, Retrofitting, Testing & Go-live, Critical Care. Support & Maintenance - Production Support, 24*7 Support (using onsite-offshore model), Break-fix and Enhancements, SLA Based Services & Tax Updates.",
    keywords: ["hosting", "cloud hosting", "iaas", "implementations", "upgrades", "support", "maintenance", "24x7"],
    context: "Technical capabilities and service delivery model"
  },

  // PRODUCTS CONTENT
  {
    page: "products",
    section: "hospital_management",
    content: "Hospital Management Software 2 - Next-generation platform designed to integrate all hospital departments into a unified digital ecosystem. Features include unified patient records (EHR), integrated pharmacy and lab modules, automated billing with claim management, doctor/nurse scheduling, real-time performance dashboards, secure patient and doctor portals. Achieved 40% faster patient admissions, 35% reduction in administrative costs, 25% improvement in overall patient satisfaction, 32% fewer claim rejections. Implementation includes patient management, billing, pharmacy integration, insurance processing, lab integration, staff management, analytics and hospital-wide rollout.",
    keywords: ["hospital management", "healthcare software", "ehr", "patient records", "billing", "pharmacy", "lab integration"],
    context: "Healthcare software solutions and outcomes"
  },

  // CAREERS CONTENT
  {
    page: "careers",
    section: "why_work_with_us",
    content: "Why work with KNSOFT Technologies: Meaningful Work - Work on projects that make a real difference in the world, from AI solutions to sustainable technology. Amazing Team - Collaborate with talented professionals who are passionate about technology and innovation. Growth Opportunities - Continuous learning, professional development, and career advancement in a supportive environment. We believe in fostering innovation, supporting growth, and creating an environment where everyone can thrive.",
    keywords: ["careers", "jobs", "meaningful work", "team", "growth opportunities", "innovation", "professional development"],
    context: "Career opportunities and company culture"
  },

  // TECHNOLOGY STACK
  {
    page: "services",
    section: "technology_stack",
    content: "Technology expertise includes: Web Technologies - React, Angular, Vue.js for frontend development, Node.js, Python, Java for backend systems, Cloud platforms (AWS, Azure, Google Cloud). Mobile Development - Native iOS (Swift) and Android (Kotlin/Java), Cross-platform solutions (React Native, Flutter), Progressive Web Apps (PWA). Database & Analytics - SQL and NoSQL databases, Data warehousing and analytics, Business intelligence solutions. Enterprise Technologies - SAP implementations and modernization, ERP and CRM platforms, API development and integration. Emerging Technologies - Artificial Intelligence and Machine Learning, IoT and smart systems integration, Blockchain solutions.",
    keywords: ["react", "angular", "vue", "nodejs", "python", "java", "aws", "azure", "ios", "android", "sap", "ai", "machine learning", "blockchain"],
    context: "Technical capabilities and technology stack"
  },

  // CONTACT INFORMATION
  {
    page: "contact",
    section: "contact_details",
    content: "Contact KNSOFT Technologies: Primary email: info@knsofttech.com. USA office email: usa@knsofttech.com. Guntur office email: guntur@knsofttech.com. Headquarters address: H.No 8, Apurupa Turbo Tower, No:36 Pillar No:1680, 2-293/82/a/787, Road, Jubilee Hills, Hyderabad, Telangana 500033, India. USA office: 6250, Westpark Dr., Houston, TX 77057. Development center: Flat No - TF-2, Venkateswara Arcade, Annapurna Nagar 6th lane, Gorantla, Guntur, Andhra Pradesh – 522034.",
    keywords: ["contact", "email", "address", "phone", "info@knsofttech.com", "hyderabad", "houston", "guntur"],
    context: "Contact information and office addresses"
  }
];

export const findRelevantContent = (query: string): ContentSection[] => {
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(' ').filter(word => word.length > 2);
  
  const scored = websiteContent.map(section => {
    let score = 0;
    
    // Check keywords match
    section.keywords.forEach(keyword => {
      if (queryWords.some(word => keyword.includes(word) || word.includes(keyword))) {
        score += 3;
      }
    });
    
    // Check content match
    queryWords.forEach(word => {
      if (section.content.toLowerCase().includes(word)) {
        score += 2;
      }
    });
    
    // Check context match
    if (queryWords.some(word => section.context.toLowerCase().includes(word))) {
      score += 1;
    }
    
    return { ...section, score };
  });
  
  return scored
    .filter(section => section.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5); // Return top 5 matches
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