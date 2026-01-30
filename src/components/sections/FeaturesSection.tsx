"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Shield, MessageCircle, Bot, CheckCircle, Sparkles } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Zap,
    title: "Agile Development",
    description: "We embrace agile methodologies for faster delivery, continuous improvement, and flexible responses to changing requirements.",
    points: [
      "Iterative development sprints",
      "Continuous integration & delivery", 
      "Customer collaboration focus",
      "Rapid prototyping"
    ],
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Blockchain Solutions",
    description: "Secure distributed ledger technology for transparent, immutable record-keeping and smart contract development.",
    points: [
      "Smart contract development",
      "Cryptocurrency solutions",
      "DeFi applications",
      "NFT marketplaces"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: MessageCircle,
    title: "AI Chatbots", 
    description: "Intelligent conversational interfaces that enhance customer service and automate routine interactions.",
    points: [
      "Natural language processing",
      "Multi-platform integration", 
      "Customer service automation",
      "Analytics & insights"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Bot,
    title: "RPA Automation",
    description: "Robotic process automation that eliminates repetitive tasks and streamlines business operations.",
    points: [
      "UiPath & Blue Prism",
      "Process optimization", 
      "Workflow automation",
      "Cost reduction"
    ],
    color: "from-green-500 to-emerald-500"
  }
];

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Advanced Capabilities
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
            Cutting-Edge <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We leverage the latest technologies to build innovative solutions that give your business a competitive edge.
          </p>
        </motion.div>

        {/* Features Grid - 2x2 */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                  
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground mb-5 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {/* Points */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {feature.points.map((point, pointIndex) => (
                          <motion.li 
                            key={pointIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + pointIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}