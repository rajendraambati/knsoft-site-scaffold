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
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Custom online stores with seamless checkout, inventory management, and payment gateway integration.",
    href: "/services/ecommerce-portals",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Database,
    title: "ERP & SAP Development",
    description: "Enterprise resource planning solutions that modernize and streamline your business operations.",
    href: "/services/sap-modernization",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Tailored software solutions designed to meet your unique business requirements and goals.",
    href: "/services/web-mobile-development",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: TestTube,
    title: "Quality Assurance",
    description: "Comprehensive testing services ensuring your software performs flawlessly across all platforms.",
    href: "/services/web-mobile-development",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Scalable web applications built with modern frameworks for optimal performance and user experience.",
    href: "/services/web-mobile-development",
    color: "from-indigo-500 to-purple-500"
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none"
        style={{ y: backgroundY }}
      />
      
      {/* Floating orb */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-10" />
      
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
            Our Services
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
            Solutions That <span className="text-gradient">Drive Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to transform your business and accelerate digital innovation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                to={service.href}
                className="group block h-full"
              >
                <div className="relative h-full p-6 lg:p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {/* Link indicator */}
                  <div className="flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button asChild size="lg" className="btn-gradient group">
            <Link to="/services" className="flex items-center gap-2">
              Explore All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}