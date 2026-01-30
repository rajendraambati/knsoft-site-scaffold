"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";

const testimonials = [
  {
    quote: "KNSOFT Technologies transformed our hospital management system. Their expertise in healthcare software is exceptional. The team delivered on time and exceeded our expectations.",
    author: "Dr. Rajesh Kumar",
    role: "Director, City Hospital",
    company: "Healthcare Sector",
  },
  {
    quote: "Working with KNSOFT was a game-changer for our e-commerce platform. Their technical knowledge and professional approach made the entire development process smooth.",
    author: "Priya Sharma",
    role: "CEO",
    company: "RetailTech Solutions",
  },
  {
    quote: "The SAP modernization project was completed flawlessly. KNSOFT's team demonstrated deep expertise and excellent communication throughout the engagement.",
    author: "Michael Chen",
    role: "CTO",
    company: "Manufacturing Corp, USA",
  },
];

export function CapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} className="py-32 lg:py-40 bg-[#0a0812] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <motion.div 
        className="absolute inset-0 bg-gradient-mesh opacity-30"
        style={{ y }}
      />
      
      {/* Glow */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Join our growing</span>{" "}
            <span className="text-gradient">community</span>
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
            Thousands of businesses are using KNSOFT to build the future of their digital operations.
          </p>
          
          <Button asChild size="lg" className="btn-outline-glow rounded-xl mt-8 group">
            <Link to="/contact" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              <span>Talk to our team</span>
            </Link>
          </Button>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl card-premium"
            >
              {/* Quote */}
              <p className="text-white/60 mb-8 leading-relaxed text-sm">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-white/40">
                    {testimonial.role}, {testimonial.company}
                  </div>
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
          className="mt-24"
        >
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/10" />
            <div className="absolute inset-0 glass" />
            
            {/* Content */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 p-12 lg:p-16">
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
                className="btn-gradient rounded-xl group whitespace-nowrap"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  <span>Get Started Today</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
