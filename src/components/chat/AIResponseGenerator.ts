import { findRelevantContent, getCompanyInfo, type ContentSection } from './WebsiteKnowledge';
import { enhanceWithPersonality, getResponseVariation } from './PersonalityEngine';

interface AIResponse {
  response: string;
  confidence: number;
  sources: string[];
}

// Fallback responses for when no relevant content is found
const fallbackResponses = [
  "That's an interesting question! While I don't have that specific information in my knowledge base yet, I can tell you that KNSOFT Technologies specializes in comprehensive IT solutions. Would you like to know more about our core services or perhaps get in touch with our team for detailed information?",
  
  "I'd love to help with that! Though I don't have those exact details, KNSOFT Technologies has been delivering innovative solutions since 2010. You might find what you're looking for on our Contact page, or I can tell you about our main services - which would interest you most?",
  
  "Great question! I don't have that particular information available, but I can share that we're experts in digital transformation, software development, and solar-powered sustainability solutions. Is there a specific service or capability you'd like to explore?",
  
  "I appreciate your question! While that specific information isn't in my current knowledge base, I can tell you about KNSOFT's 13+ years of experience serving 500+ clients across 25+ countries. Would you like to know more about our achievements or perhaps explore our services?"
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
    
    // Check for specific location questions
    if (this.isLocationQuery(query)) {
      return this.generateLocationResponse(query, relevantContent, companyInfo);
    }

    // Check for specific contact questions  
    if (this.isSpecificContactQuery(query)) {
      return this.generateSpecificContactResponse(query, relevantContent, companyInfo);
    }

    // Check for specific service questions
    if (this.isSpecificServiceQuery(query)) {
      return this.generateSpecificServiceResponse(query, relevantContent);
    }

    // Check for company info questions
    if (this.isSpecificCompanyQuery(query)) {
      return this.generateSpecificCompanyResponse(query, relevantContent, companyInfo);
    }

    // Determine response type based on query intent
    if (this.isGreeting(query)) {
      return this.generateGreetingResponse(companyInfo);
    }

    if (this.isAboutCompany(query)) {
      return this.generateAboutResponse(relevantContent, companyInfo);
    }

    if (this.isServicesQuery(query)) {
      return this.generateServicesResponse(relevantContent);
    }

    if (this.isContactQuery(query)) {
      return this.generateContactResponse(relevantContent, companyInfo);
    }

    if (this.isTechnologyQuery(query)) {
      return this.generateTechnologyResponse(relevantContent);
    }

    if (this.isCareersQuery(query)) {
      return this.generateCareersResponse(relevantContent);
    }

    // General focused response
    return this.generateFocusedGeneralResponse(userMessage, relevantContent[0]);
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

  private generateGreetingResponse(companyInfo: any): string {
    const greetings = [
      `Hello! Welcome to ${companyInfo.name}! 🚀 I'm here to help you discover our innovative IT solutions and solar-powered sustainability initiatives. With ${companyInfo.experience} of experience serving ${companyInfo.clients} worldwide, we're passionate about driving digital transformation. What would you like to know about our services?`,
      
      `Hi there! Great to meet you! I'm the ${companyInfo.name} assistant, ready to help you explore our cutting-edge technology solutions. Since ${companyInfo.founded}, we've been transforming businesses with our expertise in software development, SAP modernization, and renewable energy. How can I assist you today?`,
      
      `Hey! Welcome to the world of ${companyInfo.name}! 🌟 I'm excited to share how we're revolutionizing businesses through our comprehensive IT solutions and sustainable technology. With our global presence and ${companyInfo.projects}, there's so much to discover. What interests you most?`
    ];
    
    return greetings[Math.floor(Math.random() * greetings.length)];
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
    const servicesContent = relevantContent.filter(c => 
      c.section === 'core_services' || c.section === 'services_offered' || c.section === 'specialized_services'
    );

    if (servicesContent.length > 0) {
      return `🛠️ **KNSOFT Technologies Services**

We offer a comprehensive suite of technology solutions designed to accelerate your business growth:

**Core Services:**
${servicesContent[0]?.content || 'Complete IT solutions tailored to your needs'}

${servicesContent.length > 1 ? `**Specialized Expertise:**
${servicesContent[1]?.content || 'Advanced technology solutions'}` : ''}

**Why Choose Us:**
• End-to-end solution delivery
• Industry-certified professionals  
• Agile development methodologies
• 24/7 global support
• Proven track record with 1000+ projects

Ready to transform your business? I can provide more details about any specific service or connect you with our expert team!`;
    }

    return this.generateFallbackResponse("services");
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
    const careerContent = relevantContent.find(c => c.section === 'why_work_with_us');
    
    if (careerContent) {
      return `🚀 **Join the KNSOFT Team!**

${careerContent.content}

**What We Offer:**
• Competitive compensation & benefits
• Flexible work arrangements
• Cutting-edge technology projects
• Global collaboration opportunities
• Continuous learning & development
• Innovation-driven culture

**Current Focus Areas:**
• Software Development
• AI & Automation
• Cloud Technologies  
• Solar Energy Solutions
• Digital Transformation

We're always looking for passionate professionals who want to make a meaningful impact. Visit our Careers page to explore current openings or send your resume to start a conversation!

What type of role interests you most?`;
    }

    return this.generateFallbackResponse("careers");
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
    
    // Add some contextual suggestions based on the query
    const suggestions = this.generateSuggestions(userMessage);
    
    const enhancedResponse = `${response}

**Here are some things I can help you with:**
${suggestions.map(s => `• ${s}`).join('\n')}

${getResponseVariation()}`;

    return enhanceWithPersonality(enhancedResponse, userMessage);
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