"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Shield, MessageCircle, Bot, CheckCircle, Cpu } from "lucide-react";
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
    gradient: "from-yellow-500 to-orange-500"
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
    gradient: "from-blue-500 to-cyan-500"
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
    gradient: "from-purple-500 to-pink-500"
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
    gradient: "from-primary to-primary-glow"
  }
];

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <motion.div 
        className="absolute inset-0 bg-gradient-mesh opacity-30"
        style={{ y }}
      />
      
      {/* Floating Orbs */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 text-sm font-medium mb-8"
          >
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-white/80">Advanced Capabilities</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Cutting-Edge</span>{" "}
            <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
            We leverage the latest technologies to build innovative solutions that give your business a competitive edge.
          </p>
        </motion.div>

        {/* Features Grid - 2x2 */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full p-8 lg:p-10 rounded-3xl card-premium overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Border Glow */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:via-transparent group-hover:to-accent/10 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                
                <div className="relative flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/50 mb-6 leading-relaxed group-hover:text-white/60 transition-colors">
                      {feature.description}
                    </p>
                    
                    {/* Points */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {feature.points.map((point, pointIndex) => (
                        <motion.li 
                          key={pointIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + pointIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-sm text-white/60">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
