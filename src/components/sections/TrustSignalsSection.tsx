"use client";

import { motion } from "framer-motion";
import { Shield, Award, Users, CheckCircle, Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Import certification images
import cmmiLogo from "@/assets/cmmi-level3-new.png";
import iso9001Logo from "@/assets/iso-9001-new.png";
import iso27001Logo from "@/assets/iso-27001-new.png";

const certifications = [
  {
    name: "CMMI Level 3",
    description: "Capability Maturity Model Integration",
    image: cmmiLogo,
  },
  {
    name: "ISO 9001:2015",
    description: "Quality Management System",
    image: iso9001Logo,
  },
  {
    name: "ISO 27001",
    description: "Information Security Management",
    image: iso27001Logo,
  },
];

const stats = [
  { value: "500+", label: "Happy Clients", icon: Users },
  { value: "10+", label: "Years Experience", icon: Award },
  { value: "100+", label: "Projects Delivered", icon: CheckCircle },
  { value: "99%", label: "Client Satisfaction", icon: Star },
];

const testimonials = [
  {
    quote: "KNSOFT Technologies transformed our hospital management system. Their expertise in healthcare software is exceptional. The team delivered on time and exceeded our expectations.",
    author: "Dr. Rajesh Kumar",
    role: "Director, City Hospital",
    company: "Healthcare Sector",
    rating: 5,
  },
  {
    quote: "Working with KNSOFT was a game-changer for our e-commerce platform. Their technical knowledge and professional approach made the entire development process smooth.",
    author: "Priya Sharma",
    role: "CEO",
    company: "RetailTech Solutions",
    rating: 5,
  },
  {
    quote: "The SAP modernization project was completed flawlessly. KNSOFT's team demonstrated deep expertise and excellent communication throughout the engagement.",
    author: "Michael Chen",
    role: "CTO",
    company: "Manufacturing Corp, USA",
    rating: 5,
  },
];

const clientLogos = [
  "Healthcare Partners",
  "TechCorp Industries", 
  "Global Retail",
  "Finance Solutions",
  "Education First",
  "Manufacturing Plus",
];

export function TrustSignalsSection() {
  return (
    <section className="py-20 bg-secondary/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Trusted by 500+ Businesses
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Businesses <span className="text-gradient">Trust Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ISO certified, CMMI Level 3 appraised, and trusted by leading organizations across India and USA.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50"
            >
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-center mb-8 text-foreground">
            Our Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-shadow"
              >
                <img
                  src={cert.image}
                  alt={`${cert.name} Certification`}
                  className="h-20 w-auto object-contain mb-4"
                  loading="lazy"
                />
                <h4 className="font-semibold text-foreground">{cert.name}</h4>
                <p className="text-sm text-muted-foreground text-center">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-center mb-8 text-foreground">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full card-glow hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    {/* Quote Icon */}
                    <Quote className="h-8 w-8 text-primary/30 mb-4" />
                    
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-4 w-4 fill-primary text-primary" 
                        />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-medium text-center mb-6 text-muted-foreground uppercase tracking-wider">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="px-6 py-3 rounded-lg bg-muted/30 text-muted-foreground font-medium hover:opacity-100 transition-opacity"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
