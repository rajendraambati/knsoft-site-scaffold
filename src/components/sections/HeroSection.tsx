"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Smartphone, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroSlides = [
  {
    title: "Experience in staff Augmentation",
    subtitle: "We, KNSoft Technologies, are highly regarded for our innovation in stream of value-added staffing or recruiting services.",
    icon: Users,
  },
  {
    title: "We Bring your app concepts to life",
    subtitle: "It is time to explore endless possibilities with our unique APP Development Services.",
    icon: Smartphone,
  },
  {
    title: "Ideally business-centric it solutions",
    subtitle: "We provide avant-garde software, web and mobile app services which best reflect our client's requirements.",
    icon: Globe,
  },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/5 rounded-full animate-float" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-white/3 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Code className="h-16 w-16 mx-auto mb-6 text-white/80" />
            <h1 className="hero-text mb-6">
              KNSOFT TECHNOLOGIES
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Innovative IT Solutions, Software Development & Digital Transformation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/services">Our Services</Link>
            </Button>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {heroSlides.map((slide, index) => (
              <div key={index} className="card-elegant p-6 text-center">
                <slide.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {slide.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {slide.subtitle}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce mt-2" />
        </div>
      </motion.div>
    </section>
  );
}