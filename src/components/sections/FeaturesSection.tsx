"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle, ArrowRight, Zap, Link2, Bot, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";

const advancedFeatures = [
  {
    icon: Zap,
    title: "Agile Software Development",
    description: "Collaborative effort of self-organizing and cross-functional teams with adaptive planning, evolutionary development, and flexible responses to changes.",
    points: [
      "Individuals and interactions over processes and tools",
      "Working software over comprehensive documentation",
      "Customer collaboration over contract negotiation",
      "Responding to change over following a plan"
    ]
  },
  {
    icon: Link2,
    title: "Blockchain Development",
    description: "Creating shared, unchangeable, distributed ledger technology (DLT) that securely records transactions and tracks assets.",
    points: [
      "Secure distributed ledger technology",
      "Smart contract development",
      "Cryptocurrency solutions",
      "DeFi applications"
    ]
  },
  {
    icon: Bot,
    title: "Chatbot Development",
    description: "Intelligent conversational interfaces for customer service, request routing, and information gathering with natural-language processing.",
    points: [
      "Messaging apps integration",
      "Company apps and websites",
      "Customer service automation",
      "Healthcare applications"
    ]
  },
  {
    icon: Cog,
    title: "RPA Solutions",
    description: "Robotic process automation that makes it easy to build, deploy, and manage software robots that emulate human actions.",
    points: [
      "RPA Blue Prism",
      "UiPath automation",
      "Automation Anywhere",
      "NICE RPA tools"
    ]
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
    <section ref={sectionRef} className="py-32 lg:py-40 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <motion.div 
        className="absolute inset-0 bg-gradient-mesh opacity-30"
        style={{ y }}
      />
      
      {/* Glow */}
      <div className="absolute top-40 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-[0.2em] mb-6">Advanced Capabilities</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Advanced Features</span>
            <br />
            <span className="text-gradient">That Drive Innovation</span>
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto">
            Our teams listen, plan with you, and develop solutions to help you succeed with cutting-edge technologies.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {advancedFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 lg:p-10 rounded-2xl card-premium hover-bounce group"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-white/50 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-white/60">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button asChild size="sm" className="btn-gradient rounded-lg group">
            <Link to="/services" className="flex items-center gap-2">
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
