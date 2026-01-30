"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Cloud, Settings, Headphones, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";

const capabilities = [
  {
    icon: Cloud,
    title: "Cloud & Hosting",
    description: "Scalable cloud infrastructure tailored to your business needs",
    items: [
      "Blended Cloud Hosting",
      "IAAS Solutions", 
      "Performance Optimization",
      "Cost-Effective Scaling"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Settings,
    title: "Implementation & Upgrades",
    description: "Seamless deployment and modernization of your systems",
    items: [
      "Custom Installations",
      "System Integrations", 
      "Data Migration",
      "Go-Live Support"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Headphones,
    title: "24/7 Support", 
    description: "Round-the-clock assistance to keep your systems running",
    items: [
      "Production Support",
      "Onsite-Offshore Model",
      "SLA Based Services",
      "Emergency Response"
    ],
    color: "from-green-500 to-emerald-500"
  }
];

export function CapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute inset-0 bg-gradient-mesh opacity-20"
        style={{ y }}
      />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
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
            Our Capabilities
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
            End-to-End <span className="text-gradient">IT Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support and services to keep your business operations running smoothly.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="relative h-full p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${capability.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${capability.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <capability.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Title & Description */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5">
                  {capability.description}
                </p>
                
                {/* Items */}
                <ul className="space-y-3">
                  {capability.items.map((item, itemIndex) => (
                    <motion.li 
                      key={itemIndex} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 lg:p-8 rounded-2xl bg-gradient-primary">
            <div className="text-center sm:text-left">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                Ready to Transform Your Business?
              </h3>
              <p className="text-white/80">
                Let's discuss how we can help you achieve your goals.
              </p>
            </div>
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 group whitespace-nowrap"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}