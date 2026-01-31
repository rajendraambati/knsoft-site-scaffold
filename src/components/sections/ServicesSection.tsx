"use client";

import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Smartphone, Database, Cpu, ShoppingCart, Headphones, ArrowRight } from "lucide-react";
import { useRef } from "react";

const services = [
  { icon: Headphones, title: "IT Consulting", description: "Expert guidance to improve effectiveness and efficiency by adopting advanced technologies and methodologies.", href: "/services/it-consulting" },
  { icon: ShoppingCart, title: "Ecommerce Portals", description: "Professional ecommerce development to grab the growing market with online transactions, advertising, and order management.", href: "/services/ecommerce-portals" },
  { icon: Database, title: "ERP & SAP Solutions", description: "Modernize your SAP infrastructure, build solutions from scratch, or integrate with enterprise systems.", href: "/services/sap-modernization" },
  { icon: Code, title: "Software Development", description: "End-to-end suite from Enterprise Software, Consumer Web Applications to Mobile Applications.", href: "/services/web-mobile-development" },
  { icon: Smartphone, title: "Web Applications", description: "Expert development on PHP, .NET, Ruby on Rails, Django, and more with clear-cut understanding of various frameworks.", href: "/services/web-mobile-development" },
  { icon: Cpu, title: "AI & Automation", description: "Chatbots, RPA with Blue Prism, UiPath, Automation Anywhere, and intelligent process automation.", href: "/services/ai-automation" },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 section-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 80% 30%, hsl(190 50% 85% / 0.4) 0%, transparent 50%)`
      }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-20">
          <span className="inline-block text-primary font-bold text-sm uppercase tracking-[0.2em] mb-6">Our Services</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-display-lg font-bold mb-6">
            <span className="text-dark-heading">Solutions That</span> <span className="text-gradient">Drive Growth</span>
          </h2>
          <p className="text-lg text-dark-body font-medium max-w-2xl mx-auto">Comprehensive IT solutions tailored to transform your business.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }}>
              <Link to={service.href} className="group block h-full">
                <div className="relative h-full p-12 rounded-2xl card-light overflow-hidden hover-bounce">
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/20 border border-accent/30 mb-8 group-hover:scale-110 transition-all duration-500">
                      <service.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-heading mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-base text-dark-body leading-relaxed mb-6">{service.description}</p>
                    <div className="flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
