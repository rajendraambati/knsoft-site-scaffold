"use client";

import { motion } from "framer-motion";
import { Shield, Award, Users, CheckCircle, Star, Quote, Verified } from "lucide-react";

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
  { value: "1000+", label: "Projects Delivered", icon: CheckCircle },
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
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
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
            <Verified className="w-4 h-4 text-primary" />
            <span className="text-white/80">Trusted by 500+ Businesses</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Why Businesses</span>{" "}
            <span className="text-gradient">Trust Us</span>
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
            ISO certified, CMMI Level 3 appraised, and trusted by leading organizations across India and USA.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="text-center p-8 rounded-2xl card-premium">
                <div className="mx-auto w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50 font-medium">
                  {stat.label}
                </div>
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
          className="mb-20"
        >
          <h3 className="text-xl font-semibold text-center mb-10 text-white/70">
            Our Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex flex-col items-center p-8 rounded-2xl card-premium text-center">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                    <img
                      src={cert.image}
                      alt={`${cert.name} Certification`}
                      className="h-20 w-auto object-contain brightness-90 group-hover:brightness-100 transition-all"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="font-semibold text-white mb-1">{cert.name}</h4>
                  <p className="text-sm text-white/50">
                    {cert.description}
                  </p>
                </div>
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
          className="mb-20"
        >
          <h3 className="text-xl font-semibold text-center mb-10 text-white/70">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl card-premium">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-primary/30 mb-6" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-4 w-4 fill-primary text-primary" 
                      />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-white/60 mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-white/50">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
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
          <h3 className="text-sm font-medium text-center mb-8 text-white/40 uppercase tracking-widest">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center gap-6 opacity-50">
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="px-8 py-4 rounded-xl glass text-white/60 font-medium hover:text-white/80 hover:opacity-100 transition-all cursor-default"
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
