// KNSOFT Technologies Knowledge Base for Chatbot

export interface KnowledgeItem {
  keywords: string[];
  response: string;
  category: string;
}

export const knowledgeBase: KnowledgeItem[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon'],
    category: 'greeting',
    response: "Hello! I'm the KNSOFT Technologies assistant. I can help you learn about our innovative IT solutions, software development services, and solar-powered sustainability initiatives. What would you like to know?"
  },
  {
    keywords: ['services', 'what do you do', 'offer', 'solutions', 'capabilities'],
    category: 'services',
    response: `KNSOFT Technologies offers a comprehensive range of services including:

• **Software Development & Web Applications** - Custom web solutions and enterprise applications
• **Mobile App Development** - iOS and Android native and cross-platform apps  
• **IT Consulting & Digital Transformation** - Strategic technology guidance and modernization
• **SAP Modernization** - Legacy system upgrades and SAP implementations
• **E-commerce Portal Development** - Online marketplace and retail solutions
• **AI & Automation Solutions** - Artificial intelligence and process automation
• **Solar Power & Renewable Energy** - Sustainable technology integration

Which service interests you most?`
  },
  {
    keywords: ['contact', 'reach', 'phone', 'email', 'address', 'location', 'get in touch'],
    category: 'contact',
    response: `You can reach KNSOFT Technologies through:

• **Contact Page** - Visit our Contact section for detailed information and contact form
• **Services Information** - Explore our Services section to learn more about specific offerings
• **Portfolio** - Check out our Work section to see our completed projects

For specific contact details, please visit our Contact page where you'll find all the information you need to get in touch with our team.`
  },
  {
    keywords: ['about', 'company', 'knsoft', 'who are you', 'business', 'organization'],
    category: 'about',
    response: `KNSOFT Technologies is a leading provider of innovative IT solutions, driving digital transformation with cutting-edge software development and solar-powered sustainability.

**Our Mission:** We specialize in creating business-centric solutions that perfectly reflect our clients' requirements while promoting environmental sustainability.

**Key Focus Areas:**
• Digital Transformation & Innovation
• Custom Software Development  
• Sustainable Technology Integration
• Enterprise Solutions & Consulting

We're committed to delivering excellence through technology while contributing to a more sustainable future. Would you like to know more about our specific capabilities or services?`
  },
  {
    keywords: ['software', 'development', 'app', 'application', 'web development', 'mobile app'],
    category: 'development',
    response: `KNSOFT Technologies specializes in comprehensive software development services:

**Web Development:**
• Custom web applications and enterprise portals
• E-commerce and retail solutions
• Responsive and progressive web apps

**Mobile Development:**  
• Native iOS and Android applications
• Cross-platform mobile solutions
• App modernization and optimization

**Enterprise Software:**
• Business management systems
• CRM and ERP solutions
• Custom database applications

**Development Approach:**
We focus on creating scalable, secure, and user-friendly applications that drive business growth and efficiency.

Would you like to know more about our development process or see examples of our work?`
  },
  {
    keywords: ['solar', 'renewable', 'energy', 'sustainable', 'green', 'environmental'],
    category: 'sustainability',
    response: `KNSOFT Technologies is committed to sustainability through our comprehensive renewable energy solutions:

**Solar Power Solutions:**
• Solar system design and implementation
• Energy efficiency optimization
• Sustainable technology integration

**Environmental Impact:**
• Reducing carbon footprint through technology
• Green energy consulting and planning
• Sustainable business practices

**Integration Approach:**
We uniquely combine our IT expertise with renewable energy solutions, helping businesses achieve both digital transformation and environmental sustainability goals.

This dual focus allows us to create truly sustainable business solutions that benefit both our clients and the environment.

Interested in learning how we can help make your business more sustainable while improving your technology infrastructure?`
  },
  {
    keywords: ['ai', 'artificial intelligence', 'automation', 'machine learning', 'smart', 'intelligent'],
    category: 'ai',
    response: `KNSOFT Technologies offers cutting-edge AI and automation solutions:

**AI Solutions:**
• Intelligent process automation
• Machine learning implementations  
• Data analytics and insights
• Predictive modeling systems

**Automation Services:**
• Business process optimization
• Workflow automation
• Smart system integration
• Efficiency enhancement tools

**Benefits:**
• Reduced operational costs
• Improved accuracy and efficiency
• Enhanced decision-making capabilities
• Scalable intelligent solutions

Our AI and automation expertise helps businesses streamline operations, reduce manual work, and make data-driven decisions for better outcomes.

Would you like to explore specific AI solutions for your business needs?`
  },
  {
    keywords: ['portfolio', 'work', 'projects', 'examples', 'case studies', 'clients'],
    category: 'portfolio',
    response: `KNSOFT Technologies has successfully delivered numerous projects across various industries:

**Healthcare Solutions:**
• Hospital management systems
• Clinic management software  
• Diagnostic lab management platforms
• Pharmacy management systems

**Business Applications:**
• ERP and CRM solutions
• E-commerce platforms
• Directory listing software
• Travel and hospitality systems

**Specialized Projects:**
• SAP modernization initiatives
• Custom enterprise applications
• Mobile app solutions
• Solar energy system integrations

Visit our **Work** section to explore detailed case studies and see examples of our successful project implementations.

Is there a specific type of project or industry solution you're interested in learning more about?`
  },
  {
    keywords: ['price', 'cost', 'budget', 'pricing', 'quote', 'estimate'],
    category: 'pricing',
    response: `Project pricing at KNSOFT Technologies depends on various factors:

**Factors Affecting Cost:**
• Project scope and complexity
• Technology requirements
• Timeline and delivery schedule
• Integration needs
• Ongoing support requirements

**Our Approach:**
• Detailed project analysis and consultation
• Transparent pricing with no hidden costs
• Flexible engagement models
• Value-driven solutions

**Next Steps:**
For accurate pricing information, I recommend:
• Visiting our Contact page to discuss your specific requirements
• Scheduling a consultation to understand your project needs
• Exploring our Services section to understand our capabilities

Our team will provide you with a detailed proposal and transparent pricing based on your unique requirements.`
  },
  {
    keywords: ['technology', 'tech stack', 'programming', 'languages', 'frameworks'],
    category: 'technology',
    response: `KNSOFT Technologies works with modern, industry-leading technologies:

**Web Technologies:**
• React, Angular, Vue.js for frontend development
• Node.js, Python, Java for backend systems
• Cloud platforms (AWS, Azure, Google Cloud)

**Mobile Development:**
• Native iOS (Swift) and Android (Kotlin/Java)
• Cross-platform solutions (React Native, Flutter)
• Progressive Web Apps (PWA)

**Database & Analytics:**
• SQL and NoSQL databases
• Data warehousing and analytics
• Business intelligence solutions

**Enterprise Technologies:**
• SAP implementations and modernization
• ERP and CRM platforms
• API development and integration

**Emerging Technologies:**
• Artificial Intelligence and Machine Learning
• IoT and smart systems integration
• Blockchain solutions

We stay current with technology trends to deliver future-proof solutions. What technology area interests you most?`
  }
];

export const findResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  // Find the best matching knowledge item
  for (const item of knowledgeBase) {
    if (item.keywords.some(keyword => message.includes(keyword))) {
      return item.response;
    }
  }
  
  // Default response if no match found
  return `I don't have that specific information yet, but you can find more details by:

• **Contact Page** - For direct inquiries and detailed information
• **Services Section** - To explore our complete service offerings  
• **Work Portfolio** - To see examples of our completed projects
• **About Section** - To learn more about KNSOFT Technologies

Is there something else about our services or capabilities I can help you with?`;
};

export const getGreeting = (): string => {
  return knowledgeBase.find(item => item.category === 'greeting')?.response || 
    "Hello! How can I help you learn about KNSOFT Technologies today?";
};