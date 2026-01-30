"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";

const testimonials = [
  {
    quote: "KNSOFT's Hospital Management System transformed our operations completely. The seamless integration and intuitive interface have significantly improved our efficiency and patient care quality.",
    author: "Dr. Rajesh Kumar",
    role: "Director",
    company: "Apollo Healthcare",
  },
  {
    quote: "The School Management Software has revolutionized how we handle administration. From attendance to fee collection, everything is now automated and error-free. Highly recommend KNSOFT!",
    author: "Priya Sharma",
    role: "Principal",
    company: "Delhi Public School",
  },
  {
    quote: "Excellent service and support from KNSOFT. Their Diagnostic Lab Management software helped us scale our operations across multiple locations with ease. The team is always responsive.",
    author: "Amit Patel",
    role: "CEO",
    company: "MedCare Diagnostics",
  },
  {
    quote: "Working with KNSOFT has been a game-changer for our business. Their custom software solutions are robust, scalable, and perfectly aligned with our requirements.",
    author: "Sarah Johnson",
    role: "IT Manager",
    company: "Global Retail Solutions",
  },
  {
    quote: "The Pharmacy Management System by KNSOFT has streamlined our inventory and billing processes. Real-time reporting and analytics have given us valuable insights.",
    author: "Mohammed Ali",
    role: "Operations Head",
    company: "PharmaCare Chain",
  },
  {
    quote: "KNSOFT's dedication to quality and customer satisfaction is unmatched. They understood our unique needs and delivered a solution that exceeded our expectations.",
    author: "Lakshmi Reddy",
    role: "Director",
    company: "Sunrise Educational Institute",
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
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-[0.2em] mb-6">Testimonials</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">What Our</span>{" "}
            <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
            Don't just take our word for it — hear from some of our satisfied clients about their experience working with KNSOFT.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl card-premium"
            >
              {/* Quote */}
              <p className="text-white/60 mb-6 leading-relaxed text-sm line-clamp-4">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-white/40">
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
