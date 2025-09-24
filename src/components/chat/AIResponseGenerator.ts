import { findRelevantContent, getCompanyInfo, type ContentSection } from './WebsiteKnowledge';
import { enhanceWithPersonality, getResponseVariation } from './PersonalityEngine';

interface AIResponse {
  response: string;
  confidence: number;
  sources: string[];
}

// Fallback responses for when no relevant content is found
const fallbackResponses = [
  "I don't have that specific information available right now. Could you try asking about our services, company info, or contact details instead?",
  
  "I'm not sure about that particular detail. I can help you with information about KNSOFT Technologies' services, locations, or how to get in touch with our team.",
  
  "I don't have those exact details in my knowledge base. Would you like to know about our core services, company background, or contact information instead?",
  
  "That specific information isn't available to me. I can provide details about our services, company history, or help you connect with our team for more information."
];

export class AIResponseGenerator {
  private static instance: AIResponseGenerator;
  
  public static getInstance(): AIResponseGenerator {
    if (!AIResponseGenerator.instance) {
      AIResponseGenerator.instance = new AIResponseGenerator();
    }
    return AIResponseGenerator.instance;
  }

  public async generateResponse(userMessage: string): Promise<string> {
    try {
      // Find relevant content from website knowledge
      const relevantContent = findRelevantContent(userMessage);
      const companyInfo = getCompanyInfo();
      
      if (relevantContent.length === 0) {
        return this.generateFallbackResponse(userMessage);
      }

      // Generate focused response based on specific query
      const response = this.generateFocusedResponse(userMessage, relevantContent, companyInfo);
      return response;
    } catch (error) {
      console.error('Error generating AI response:', error);
      return this.generateFallbackResponse(userMessage);
    }
  }

  private generateFocusedResponse(
    userMessage: string, 
    relevantContent: ContentSection[], 
    companyInfo: any
  ): string {
    const query = userMessage.toLowerCase();
    
    // Direct question matching for accurate responses
    if (this.isWhatIsKnsoft(query)) {
      return this.generateWhatIsKnsoftResponse(relevantContent);
    }
    
    if (this.isLocationQuery(query)) {
      return this.generateLocationResponse(query, relevantContent, companyInfo);
    }

    if (this.isServicesQuery(query)) {
      return this.generateServicesResponse(relevantContent);
    }
    
    if (this.isBusinessDurationQuery(query)) {
      return this.generateBusinessDurationResponse(relevantContent);
    }
    
    if (this.isClientsQuery(query)) {
      return this.generateClientsResponse(relevantContent);
    }
    
    if (this.isSpecificContactQuery(query)) {
      return this.generateSpecificContactResponse(query, relevantContent, companyInfo);
    }
    
    if (this.isDifferencesQuery(query)) {
      return this.generateDifferencesResponse(relevantContent);
    }
    
    if (this.isSoftwareDevelopmentQuery(query)) {
      return this.generateSoftwareDevelopmentResponse(relevantContent);
    }
    
    if (this.isMobileAppsQuery(query)) {
      return this.generateMobileAppsResponse(relevantContent);
    }
    
    if (this.isWebDevelopmentQuery(query)) {
      return this.generateWebDevelopmentResponse(relevantContent);
    }
    
    if (this.isCloudSolutionsQuery(query)) {
      return this.generateCloudSolutionsResponse(relevantContent);
    }
    
    if (this.isIndustriesQuery(query)) {
      return this.generateIndustriesResponse(relevantContent);
    }
    
    if (this.isDigitalTransformationQuery(query)) {
      return this.generateDigitalTransformationResponse(relevantContent);
    }
    
    if (this.isERPCRMQuery(query)) {
      return this.generateERPCRMResponse(relevantContent);
    }
    
    if (this.isAIMLQuery(query)) {
      return this.generateAIMLResponse(relevantContent);
    }
    
    if (this.isCareersQuery(query)) {
      return this.generateCareersResponse(relevantContent);
    }
    
    if (this.isPricingQuery(query)) {
      return this.generatePricingResponse(relevantContent);
    }
    
    if (this.isSupportQuery(query)) {
      return this.generateSupportResponse(relevantContent);
    }

    // Fallback for general queries
    return this.generateDirectResponse(userMessage, relevantContent);
  }

  private isWhatIsKnsoft(query: string): boolean {
    const keywords = ['what is knsoft', 'what is knsoft technologies', 'about knsoft', 'tell me about knsoft'];
    return keywords.some(keyword => query.includes(keyword));
  }

  private isBusinessDurationQuery(query: string): boolean {
    const keywords = ['how long', 'years in business', 'experience', 'how many years', 'when founded'];
    return keywords.some(keyword => query.includes(keyword));
  }

  private isClientsQuery(query: string): boolean {
    const keywords = ['clients', 'customers', 'who are your clients', 'client base'];
    return keywords.some(keyword => query.includes(keyword));
  }

  private isDifferencesQuery(query: string): boolean {
    const keywords = ['what makes', 'different', 'competitors', 'why choose', 'advantages'];
    return keywords.some(keyword => query.includes(keyword));
  }

  private isSoftwareDevelopmentQuery(query: string): boolean {
    const keywords = ['software development', 'custom software', 'develop software'];
    return keywords.some(keyword => query.includes(keyword));
  }

  private isMobileAppsQuery(query: string): boolean {
    const keywords = ['mobile app', 'mobile development', 'android', 'ios', 'app development'];
    return keywords.some(keyword => query.includes(keyword));
  }

  private isWebDevelopmentQuery(query: string): boolean {
    const keywords = ['web development', 'website', 'web design', 'web app'];
    return keywords.some(keyword => query.includes(keyword));
  }

  private isCloudSolutionsQuery(query: string): boolean {
    const keywords = ['cloud solutions', 'cloud services', 'aws', 'azure', 'cloud migration'];
    return keywords.some(keyword => query.includes(keyword));
  }

  private isIndustriesQuery(query: string): boolean {
    const keywords = ['industries', 'sectors', 'specialize in', 'work with'];
    return keywords.some(keyword => query.includes(keyword));
  }

  private isDigitalTransformationQuery(query: string): boolean {
    const keywords = ['digital transformation', 'it consulting', 'consulting'];
    return keywords.some(keyword => query.includes(keyword));
  }

  private isERPCRMQuery(query: string): boolean {
    const keywords = ['erp', 'crm', 'enterprise resource', 'customer relationship'];
    return keywords.some(keyword => query.includes(keyword));
  }

  private isAIMLQuery(query: string): boolean {
    const keywords = ['ai', 'artificial intelligence', 'machine learning', 'ml', 'data analytics'];
    return keywords.some(keyword => query.includes(keyword));
  }

  private isPricingQuery(query: string): boolean {
    const keywords = ['cost', 'price', 'pricing', 'how much', 'quote', 'billing'];
    return keywords.some(keyword => query.includes(keyword));
  }

  private isSupportQuery(query: string): boolean {
    const keywords = ['support', 'maintenance', 'technical support', '24/7', 'help'];
    return keywords.some(keyword => query.includes(keyword));
  }

  private isGreeting(query: string): boolean {
    const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'];
    return greetings.some(greeting => query.includes(greeting));
  }

  private isAboutCompany(query: string): boolean {
    const aboutKeywords = ['about', 'company', 'knsoft', 'who are you', 'what is', 'history', 'founded'];
    return aboutKeywords.some(keyword => query.includes(keyword));
  }

  private isServicesQuery(query: string): boolean {
    const serviceKeywords = ['service', 'what do you do', 'offer', 'solutions', 'capabilities', 'development'];
    return serviceKeywords.some(keyword => query.includes(keyword));
  }

  private isContactQuery(query: string): boolean {
    const contactKeywords = ['contact', 'reach', 'phone', 'email', 'address', 'location', 'office'];
    return contactKeywords.some(keyword => query.includes(keyword));
  }

  private isTechnologyQuery(query: string): boolean {
    const techKeywords = ['technology', 'tech stack', 'programming', 'languages', 'frameworks', 'tools'];
    return techKeywords.some(keyword => query.includes(keyword));
  }

  private isCareersQuery(query: string): boolean {
    const careerKeywords = ['career', 'job', 'hiring', 'work', 'employment', 'position', 'opportunity'];
    return careerKeywords.some(keyword => query.includes(keyword));
  }

  private isLocationQuery(query: string): boolean {
    const locationKeywords = ['where is', 'where are', 'located', 'location', 'address', 'office'];
    return locationKeywords.some(keyword => query.includes(keyword));
  }

  private isSpecificContactQuery(query: string): boolean {
    const contactKeywords = ['email', 'phone', 'contact number', 'how to contact', 'reach'];
    return contactKeywords.some(keyword => query.includes(keyword));
  }

  private isSpecificServiceQuery(query: string): boolean {
    const serviceKeywords = ['what services', 'what do you offer', 'services list', 'what can you do'];
    return serviceKeywords.some(keyword => query.includes(keyword));
  }

  private isSpecificCompanyQuery(query: string): boolean {
    const companyKeywords = ['when founded', 'how many years', 'experience', 'clients', 'projects'];
    return companyKeywords.some(keyword => query.includes(keyword));
  }

  private generateWhatIsKnsoftResponse(relevantContent: ContentSection[]): string {
    const companyInfo = relevantContent.find(c => c.section === 'company_overview');
    if (companyInfo) {
      return companyInfo.content;
    }
    return "KNSOFT Technologies is an IT solutions company that provides software development, web and mobile app development, cloud solutions, and digital transformation services for businesses worldwide.";
  }

  private generateBusinessDurationResponse(relevantContent: ContentSection[]): string {
    const statsInfo = relevantContent.find(c => c.section === 'company_stats');
    if (statsInfo) {
      return "KNSOFT Technologies has been delivering IT solutions for over 13 years since being founded in 2010.";
    }
    return "KNSOFT Technologies has been delivering IT solutions for over 13 years, helping businesses of all sizes with technology-driven growth.";
  }

  private generateClientsResponse(relevantContent: ContentSection[]): string {
    const clientInfo = relevantContent.find(c => c.section === 'target_clients' || c.section === 'company_stats');
    if (clientInfo) {
      return "We work with startups, SMEs, and large enterprises across industries like healthcare, finance, retail, and education. We have served 500+ satisfied clients across 25+ countries.";
    }
    return "We work with startups, SMEs, and large enterprises across industries like healthcare, finance, retail, and education.";
  }

  private generateDifferencesResponse(relevantContent: ContentSection[]): string {
    return "Our focus is on delivering customized, scalable, and secure IT solutions while ensuring timely delivery and long-term support. We combine deep technical expertise with industry knowledge and hold certifications like ISO 9001, ISO 27001, and CMMI Level 3.";
  }

  private generateSoftwareDevelopmentResponse(relevantContent: ContentSection[]): string {
    return "Yes, we specialize in custom software development tailored to your business needs. We build enterprise-grade solutions with focus on reliability, compliance, and scalability.";
  }

  private generateMobileAppsResponse(relevantContent: ContentSection[]): string {
    return "Yes, we develop Android, iOS, and cross-platform mobile apps with modern UI/UX and robust performance. We use technologies like React Native, Flutter, and native development.";
  }

  private generateWebDevelopmentResponse(relevantContent: ContentSection[]): string {
    return "Absolutely! We create responsive, SEO-friendly, and visually appealing websites that enhance your online presence. We use modern frameworks like React, Angular, and Vue.js.";
  }

  private generateCloudSolutionsResponse(relevantContent: ContentSection[]): string {
    return "Yes, we offer cloud migration, deployment, and management services for platforms like AWS, Azure, and Google Cloud. We help modernize your infrastructure for better scalability and efficiency.";
  }

  private generateIndustriesResponse(relevantContent: ContentSection[]): string {
    const industryInfo = relevantContent.find(c => c.section === 'target_clients');
    if (industryInfo) {
      return industryInfo.content;
    }
    return "We work across multiple industries including healthcare, retail, finance, education, logistics, and e-commerce.";
  }

  private generateDigitalTransformationResponse(relevantContent: ContentSection[]): string {
    return "Yes, we help businesses modernize operations through digital solutions, process automation, and technology consulting. Our IT consulting services include strategic planning, technology assessment, and infrastructure optimization.";
  }

  private generateERPCRMResponse(relevantContent: ContentSection[]): string {
    return "Yes, we build and customize ERP & CRM systems to streamline your business processes. We specialize in SAP modernization, S/4HANA migration, and custom ERP implementations.";
  }

  private generateAIMLResponse(relevantContent: ContentSection[]): string {
    return "Yes, we provide AI, machine learning, and advanced analytics to help businesses make data-driven decisions. Our AI & automation services include chatbots, RPA, and intelligent process automation.";
  }

  private generatePricingResponse(relevantContent: ContentSection[]): string {
    const pricingInfo = relevantContent.find(c => c.section === 'pricing_model');
    if (pricingInfo) {
      return pricingInfo.content;
    }
    return "The cost depends on project complexity, features, and duration. We provide a free quote after consultation and offer both fixed-price and hourly billing models.";
  }

  private generateSupportResponse(relevantContent: ContentSection[]): string {
    const supportInfo = relevantContent.find(c => c.section === 'support_services');
    if (supportInfo) {
      return supportInfo.content;
    }
    return "Yes, we provide ongoing support and updates to ensure smooth operations. Our typical response time is within a few hours, and 24/7 support is available for premium plans.";
  }

  private generateDirectResponse(userMessage: string, relevantContent: ContentSection[]): string {
    if (!relevantContent || relevantContent.length === 0) {
      return this.generateFallbackResponse(userMessage);
    }
    
    // Return the most relevant content directly
    const primaryContent = relevantContent[0];
    return primaryContent.content;
  }

  private generateGreetingResponse(companyInfo: any): string {
    return `Hello! I'm here to help you learn about KNSOFT Technologies. We're an IT solutions company founded in 2010, providing software development, web & mobile applications, SAP modernization, and digital transformation services. How can I assist you today?`;
  }

  private generateAboutResponse(relevantContent: ContentSection[], companyInfo: any): string {
    const aboutContent = relevantContent.find(c => c.section === 'company_overview' || c.section === 'achievements');
    
    if (aboutContent) {
      return `🏢 **About ${companyInfo.name}**

${aboutContent.content}

**Our Impact:**
• ${companyInfo.experience} of innovation and excellence
• ${companyInfo.clients} across ${companyInfo.countries}
• ${companyInfo.projects} completed successfully
• ${companyInfo.support} available globally

We're not just a technology company - we're your partners in digital transformation and sustainability. Our unique combination of cutting-edge IT solutions and solar-powered initiatives sets us apart in the industry.

Would you like to know more about our leadership team, office locations, or specific achievements?`;
    }

    return this.generateFallbackResponse("about company");
  }

  private generateServicesResponse(relevantContent: ContentSection[]): string {
    const servicesContent = relevantContent.find(c => c.section === 'core_services');
    
    if (servicesContent) {
      return servicesContent.content;
    }

    return "We provide end-to-end IT services including custom software development, web & mobile development, SAP modernization & ERP, ecommerce portals, AI & automation, and IT consulting services.";
  }

  private generateContactResponse(relevantContent: ContentSection[], companyInfo: any): string {
    const contactContent = relevantContent.find(c => c.section === 'contact_details' || c.section === 'office_locations');
    
    return `📞 **Get in Touch with ${companyInfo.name}**

${contactContent?.content || ''}

**Quick Contact:**
• Email: ${companyInfo.email}
• Global Support: ${companyInfo.support}
• Headquarters: ${companyInfo.headquarters}

**Global Presence:**
${companyInfo.branches.map(branch => `• ${branch}`).join('\n')}

**Ready to Start Your Project?**
✅ Free consultation available
✅ Expert recommendations provided  
✅ Custom solutions designed for your needs

I can help you get connected with the right team member or provide more specific information about our services. What would you like to discuss?`;
  }

  private generateTechnologyResponse(relevantContent: ContentSection[]): string {
    const techContent = relevantContent.find(c => c.section === 'technology_stack');
    
    if (techContent) {
      return `💻 **Technology Expertise at KNSOFT**

${techContent.content}

**Our Approach:**
• Latest industry-standard technologies
• Scalable and secure architecture
• Future-proof solutions
• Continuous technology adoption
• Best practices implementation

**Innovation Focus:**
🔮 AI & Machine Learning integration
⛓️ Blockchain solutions  
☁️ Cloud-native development
📱 Mobile-first approach
🔒 Security-by-design

We stay ahead of technology trends to ensure your solutions are built for tomorrow. Which technology area interests you most?`;
    }

    return "We work with cutting-edge technologies including React, Angular, Node.js, Python, Java, cloud platforms, AI/ML, and blockchain. Our experienced team stays current with the latest innovations to deliver future-proof solutions. What specific technology would you like to know more about?";
  }

  private generateCareersResponse(relevantContent: ContentSection[]): string {
    const careerContent = relevantContent.find(c => c.section === 'career_opportunities');
    
    if (careerContent) {
      return careerContent.content;
    }

    return "You can apply for jobs at KNSOFT Technologies through our Careers page or by sending your resume to hr@knsoft.com. We offer opportunities in software development, testing, UI/UX design, and project management.";
  }

  private generateLocationResponse(query: string, relevantContent: ContentSection[], companyInfo: any): string {
    if (query.includes('hyderabad') || query.includes('headquarters') || query.includes('main office')) {
      return `KNSOFT Technologies is headquartered in Hyderabad, India at:

📍 **Headquarters:**
H.No 8, Apurupa Turbo Tower, No:36 Pillar No:1680, 2-293/82/a/787, Road, Jubilee Hills, Hyderabad, Telangana 500033, India

Email: info@knsofttech.com`;
    }

    if (query.includes('houston') || query.includes('usa') || query.includes('america')) {
      return `Our USA branch office is located in Houston:

📍 **USA Branch Office:**
6250, Westpark Dr., Houston, TX 77057

Email: usa@knsofttech.com`;
    }

    if (query.includes('guntur') || query.includes('development center')) {
      return `Our development center is in Guntur:

📍 **Development Center:**
Flat No - TF-2, Venkateswara Arcade, Annapurna Nagar 6th lane, Gorantla, Guntur, Andhra Pradesh – 522034

Email: guntur@knsofttech.com`;
    }

    // General location response
    return `KNSOFT Technologies has offices in multiple locations:

📍 **Headquarters:** Hyderabad, India
H.No 8, Apurupa Turbo Tower, Jubilee Hills, Hyderabad, Telangana 500033
Email: info@knsofttech.com

📍 **USA Branch:** Houston, Texas
6250, Westpark Dr., Houston, TX 77057  
Email: usa@knsofttech.com

📍 **Development Center:** Guntur, India
Flat No - TF-2, Venkateswara Arcade, Gorantla, Guntur, Andhra Pradesh – 522034
Email: guntur@knsofttech.com`;
  }

  private generateSpecificContactResponse(query: string, relevantContent: ContentSection[], companyInfo: any): string {
    if (query.includes('email')) {
      return `📧 **Email Contacts:**
• General inquiries: info@knsofttech.com
• USA office: usa@knsofttech.com  
• Guntur office: guntur@knsofttech.com`;
    }

    if (query.includes('phone') || query.includes('contact number')) {
      return `📞 We provide 24/7 support services. For specific phone numbers, please contact us via email:
• General: info@knsofttech.com
• USA: usa@knsofttech.com`;
    }

    return `📞 **Contact Information:**
• Email: info@knsofttech.com
• USA office: usa@knsofttech.com
• Guntur office: guntur@knsofttech.com
• Support: 24/7 dedicated support available`;
  }

  private generateSpecificServiceResponse(query: string, relevantContent: ContentSection[]): string {
    const coreServices = [
      "IT Consulting & Digital Transformation",
      "Software Development & Web Applications", 
      "Mobile App Development",
      "SAP Modernization & ERP Solutions",
      "E-commerce Portal Development",
      "AI & Automation Solutions",
      "Solar Power & Renewable Energy Solutions"
    ];

    return `🛠️ **KNSOFT Technologies Services:**

${coreServices.map(service => `• ${service}`).join('\n')}

**Additional Specializations:**
• Blockchain Development
• RPA Solutions  
• Chatbot Development
• Cloud Solutions (AWS, Azure)
• Testing & Quality Assurance`;
  }

  private generateSpecificCompanyResponse(query: string, relevantContent: ContentSection[], companyInfo: any): string {
    if (query.includes('founded') || query.includes('when')) {
      return `🏢 KNSOFT Technologies was founded in 2010, giving us 13+ years of industry experience.`;
    }

    if (query.includes('clients') || query.includes('how many clients')) {
      return `👥 We have served 500+ satisfied clients across 25+ countries worldwide.`;
    }

    if (query.includes('projects')) {
      return `📊 KNSOFT Technologies has successfully completed 1000+ projects with our experienced team.`;
    }

    if (query.includes('experience') || query.includes('years')) {
      return `⭐ We have 13+ years of industry experience since our founding in 2010, delivering innovative IT solutions and serving clients globally.`;
    }

    return `📈 **Company Overview:**
• Founded: 2010 (13+ years experience)
• Clients: 500+ across 25+ countries  
• Projects: 1000+ successful deliveries
• Support: 24/7 dedicated services`;
  }

  private generateFocusedGeneralResponse(userMessage: string, primaryContent: ContentSection): string {
    // Extract the key information without extra fluff
    const content = primaryContent.content;
    
    return `${content}

Is there anything specific about this you'd like me to clarify?`;
  }

  private generateFallbackResponse(userMessage: string): string {
    const response = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    return response;
  }

  private generateSuggestions(query: string): string[] {
    const allSuggestions = [
      "Learn about our core services (Web Development, SAP Modernization, AI & Automation)",
      "Discover our 13+ years of experience and 1000+ successful projects",
      "Explore our global presence with offices in India and USA",
      "Find out about our leadership team and company culture",
      "Get information about our technology stack and expertise",
      "Learn about our solar energy and sustainability initiatives", 
      "Discover career opportunities and why people love working here",
      "Get contact information and office locations",
      "Explore our certifications (ISO 9001, ISO 27001, CMMI Level 3)",
      "Learn about our specialized products like Hospital Management Systems"
    ];

    // Return 4 random suggestions
    const shuffled = allSuggestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }
}

export const generateAIResponse = async (userMessage: string): Promise<string> => {
  const generator = AIResponseGenerator.getInstance();
  return await generator.generateResponse(userMessage);
};