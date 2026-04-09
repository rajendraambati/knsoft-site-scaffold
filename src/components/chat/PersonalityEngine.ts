// KNSOFT Chatbot Personality Engine - Adds creativity and engagement to responses

export class PersonalityEngine {
  private static moods = ['enthusiastic', 'professional', 'friendly', 'innovative', 'helpful'];
  private static currentMood = 'enthusiastic';

  public static enhanceResponse(response: string, userMessage: string): string {
    // For specific factual queries, return response as-is without too much enhancement
    if (this.isFactualQuery(userMessage)) {
      return this.addMinimalFormatting(response);
    }
    
    const enhanced = this.addPersonality(response, userMessage);
    return this.addEmojisAndFormatting(enhanced);
  }

  private static isFactualQuery(userMessage: string): boolean {
    const factualKeywords = [
      'where is', 'where are', 'located', 'address', 'email', 'phone',
      'when founded', 'how many', 'founded in', 'contact', 'office'
    ];
    const message = userMessage.toLowerCase();
    return factualKeywords.some(keyword => message.includes(keyword));
  }

  private static addMinimalFormatting(response: string): string {
    // Just add basic formatting without personality touches
    return response.replace(/• /g, '• ');
  }

  private static addPersonality(response: string, userMessage: string): string {
    const mood = this.selectMood(userMessage);
    const personalityTouches = this.getPersonalityTouches(mood);
    
    // Add random personality elements
    const touch = personalityTouches[Math.floor(Math.random() * personalityTouches.length)];
    
    // Occasionally add creative introductions
    if (Math.random() < 0.3) {
      const intro = this.getCreativeIntro(mood);
      return `${intro} ${response}\n\n${touch}`;
    }
    
    return `${response}\n\n${touch}`;
  }

  private static selectMood(userMessage: string): string {
    const message = userMessage.toLowerCase();
    
    if (message.includes('problem') || message.includes('issue') || message.includes('help')) {
      return 'helpful';
    }
    if (message.includes('innovation') || message.includes('ai') || message.includes('technology')) {
      return 'innovative';
    }
    if (message.includes('hello') || message.includes('thanks')) {
      return 'friendly';
    }
    if (message.includes('business') || message.includes('enterprise') || message.includes('professional')) {
      return 'professional';
    }
    
    return 'enthusiastic';
  }

  private static getPersonalityTouches(mood: string): string[] {
    const touches = {
      enthusiastic: [
        "🚀 Exciting times ahead with these possibilities!",
        "💡 I'm thrilled to share this information with you!",
        "⚡ The future of technology is happening now, and you're part of it!",
        "🌟 This is just the beginning of what we can achieve together!",
        "🔥 Ready to revolutionize your business? Let's make it happen!"
      ],
      professional: [
        "📊 Our track record speaks for itself in delivering results.",
        "🎯 Precision and excellence define our approach to every project.",
        "💼 Professional excellence backed by 13+ years of proven expertise.",
        "🏆 Industry-leading standards guide every solution we deliver.",
        "📈 Measurable outcomes and sustainable growth are our commitments."
      ],
      friendly: [
        "😊 I'm here whenever you need assistance or have questions!",
        "🤝 Looking forward to helping you succeed in your endeavors!",
        "💬 Feel free to ask me anything - I enjoy our conversations!",
        "🌈 Together, we can explore endless possibilities for your business!",
        "☕ Think of me as your friendly technology companion!"
      ],
      innovative: [
        "🔮 The future is being built today, and we're the architects!",
        "🧠 Innovation isn't just what we do - it's who we are!",
        "⚗️ Every challenge is an opportunity to create something groundbreaking!",
        "🛸 We're not just following trends - we're creating the future!",
        "🎨 Technology becomes art when passion meets expertise!"
      ],
      helpful: [
        "🆘 I'm here to guide you through any challenges you're facing!",
        "🔧 Every problem has a solution - let's find yours together!",
        "🎯 Focused support tailored exactly to your needs!",
        "💪 With the right approach, we can overcome any obstacle!",
        "🏃‍♂️ Quick solutions and long-term success - that's our promise!"
      ]
    };

    return touches[mood] || touches.enthusiastic;
  }

  private static getCreativeIntro(mood: string): string {
    const intros = {
      enthusiastic: [
        "🎉 Fantastic question!",
        "✨ I love talking about this!",
        "🚀 Buckle up for some exciting insights!",
        "💫 You've touched on something amazing!"
      ],
      professional: [
        "📋 Allow me to provide you with comprehensive information:",
        "🎯 Here's a detailed overview of what you need to know:",
        "💼 Based on our expertise, here's what I can share:",
        "📊 Let me break this down professionally for you:"
      ],
      friendly: [
        "😊 Great to hear from you!",
        "🌟 I'm so glad you asked!",
        "💭 That's a wonderful question!",
        "🤗 I'd be delighted to help with that!"
      ],
      innovative: [
        "🔬 Diving into the future of technology:",
        "⚡ Here's where innovation meets reality:",
        "🧬 Let me paint you a picture of possibilities:",
        "🎭 The intersection of creativity and technology:"
      ],
      helpful: [
        "🔍 Let me dig into that for you:",
        "🛠️ I've got just the information you need:",
        "💡 Here's how we can solve this together:",
        "🎪 Time to turn challenges into opportunities:"
      ]
    };

    const moodIntros = intros[mood] || intros.friendly;
    return moodIntros[Math.floor(Math.random() * moodIntros.length)];
  }

  private static addEmojisAndFormatting(response: string): string {
    // Add strategic line breaks for better readability
    let formatted = response.replace(/\. ([A-Z])/g, '.\n\n$1');
    
    // Enhance bullet points
    formatted = formatted.replace(/• /g, '✅ ');
    
    // Add emphasis to key terms
    const keyTerms = [
      'KNSOFT Technologies',
      'digital transformation', 
      'AI & Automation',
      '13+ years',
      '500+ clients',
      '1000+ projects',
      '24/7 support'
    ];
    
    keyTerms.forEach(term => {
      const regex = new RegExp(`\\b${term}\\b`, 'gi');
      formatted = formatted.replace(regex, `**${term}**`);
    });

    return formatted;
  }

  public static addResponseVariation(): string {
    const variations = [
      "Is there anything specific you'd like me to elaborate on?",
      "What other aspects of our services interest you?", 
      "Ready to take the next step? I can connect you with our team!",
      "Curious about how this applies to your specific needs?",
      "Want to dive deeper into any particular area?",
      "I'm here to help with any follow-up questions!",
      "Shall we explore how we can bring this to life for your business?",
      "What would you like to discover next about KNSOFT?"
    ];
    
    return variations[Math.floor(Math.random() * variations.length)];
  }

  public static getRandomConversationStarter(): string {
    const starters = [
      "💡 Did you know KNSOFT has delivered 1000+ successful projects across 25+ countries?",
      "🌱 Curious how we combine cutting-edge IT solutions with solar-powered sustainability?",
      "🚀 Want to see how our AI & Automation services can transform your business?",
      "⚡ Ready to explore our rapid SAP modernization capabilities?",
      "🏆 Interested in learning why 500+ clients trust KNSOFT Technologies?",
      "🔮 Wondering what makes our approach to digital transformation unique?"
    ];
    
    return starters[Math.floor(Math.random() * starters.length)];
  }
}

export const enhanceWithPersonality = (response: string, userMessage: string): string => {
  return PersonalityEngine.enhanceResponse(response, userMessage);
};

export const getConversationStarter = (): string => {
  return PersonalityEngine.getRandomConversationStarter();
};

export const getResponseVariation = (): string => {
  return PersonalityEngine.addResponseVariation();
};