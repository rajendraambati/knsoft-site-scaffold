"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Cloud, Settings, Headphones, CheckCircle, ArrowRight, Layers } from "lucide-react";
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
    gradient: "from-blue-500 to-cyan-400"
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
    gradient: "from-purple-500 to-pink-400"
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
    gradient: "from-primary to-primary-glow"
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <motion.div 
        className="absolute inset-0 bg-gradient-mesh opacity-40"
        style={{ y }}
      />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />
      
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
            <Layers className="w-4 h-4 text-primary" />
            <span className="text-white/80">Our Capabilities</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">End-to-End</span>{" "}
            <span className="text-gradient">IT Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
            Comprehensive support and services to keep your business operations running smoothly.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl card-premium overflow-hidden">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Border Glow */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:via-transparent group-hover:to-accent/10 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${capability.gradient} mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                    <capability.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {capability.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-6 group-hover:text-white/60 transition-colors">
                    {capability.description}
                  </p>
                  
                  {/* Items */}
                  <ul className="space-y-3">
                    {capability.items.map((item, itemIndex) => (
                      <motion.li 
                        key={itemIndex} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + itemIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-white/60">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/10" />
            <div className="absolute inset-0 glass" />
            
            {/* Content */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 p-10 lg:p-14">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-white/60 max-w-xl">
                  Let's discuss how we can help you achieve your goals with cutting-edge technology solutions.
                </p>
              </div>
              <Button 
                asChild 
                size="lg" 
                className="btn-gradient rounded-full group whitespace-nowrap"
              >
                <Link to="/contact" className="flex items-center gap-3">
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
