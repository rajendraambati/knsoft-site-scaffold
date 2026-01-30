"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Settings, 
  ShoppingCart, 
  Database, 
  Code, 
  TestTube, 
  Globe,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const services = [
  {
    icon: Settings,
    title: "IT Consulting",
    description: "Strategic guidance to optimize your IT infrastructure and drive digital transformation with modern technologies.",
    href: "/services/it-consulting",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Custom online stores with seamless checkout, inventory management, and payment gateway integration.",
    href: "/services/ecommerce-portals",
    gradient: "from-purple-500 to-pink-400"
  },
  {
    icon: Database,
    title: "ERP & SAP Development",
    description: "Enterprise resource planning solutions that modernize and streamline your business operations.",
    href: "/services/sap-modernization",
    gradient: "from-orange-500 to-red-400"
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Tailored software solutions designed to meet your unique business requirements and goals.",
    href: "/services/web-mobile-development",
    gradient: "from-primary to-primary-glow"
  },
  {
    icon: TestTube,
    title: "Quality Assurance",
    description: "Comprehensive testing services ensuring your software performs flawlessly across all platforms.",
    href: "/services/web-mobile-development",
    gradient: "from-yellow-500 to-orange-400"
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Scalable web applications built with modern frameworks for optimal performance and user experience.",
    href: "/services/web-mobile-development",
    gradient: "from-indigo-500 to-purple-400"
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <motion.div 
        className="absolute inset-0 bg-gradient-mesh opacity-30"
        style={{ y: backgroundY }}
      />
      
      {/* Floating Orbs */}
      <div className="absolute top-40 right-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />
      
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
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-white/80">Our Services</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Solutions That</span>{" "}
            <span className="text-gradient">Drive Growth</span>
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to transform your business and accelerate digital innovation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                to={service.href}
                className="group block h-full"
              >
                <div className="relative h-full p-8 rounded-2xl card-premium overflow-hidden">
                  {/* Hover Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Glow Effect on Hover */}
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:via-transparent group-hover:to-accent/10 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed mb-6 group-hover:text-white/60 transition-colors">
                      {service.description}
                    </p>
                    
                    {/* Link Indicator */}
                    <div className="flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
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
          <Button asChild size="lg" className="btn-gradient rounded-full group">
            <Link to="/services" className="flex items-center gap-3">
              <span>Explore All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
