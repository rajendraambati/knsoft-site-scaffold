"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

const trustedBy = [
  "Healthcare", "FinTech", "E-Commerce", "Manufacturing", "Education", "Government",
  "Retail", "Logistics", "Real Estate", "Hospitality", "Pharma", "Energy"
];

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Background Arc Layer - animates left and fades out on load */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 hero-gradient" />
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        {/* Gradient Mesh Overlay */}
        <div className="absolute inset-0 bg-gradient-mesh" />
        
        {/* Animated Arc/Sphere that moves left and disappears */}
        <motion.div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] rounded-full sphere-3d"
          initial={{ x: 0, scale: 1, opacity: 1 }}
          animate={{ x: -600, scale: 0.5, opacity: 0 }}
          transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
        />
        
        {/* Glow Effects */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5, delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[120px]"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5, delay: 2 }}
        />
      </motion.div>

      <motion.section 
        ref={sectionRef}
        className="relative min-h-screen flex flex-col overflow-hidden"
      >
        {/* Static Hero Background that stays */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 bg-gradient-mesh" />

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24">
          <div className="max-w-5xl mx-auto text-center">
            {/* Pre-title Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 mb-10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-semibold text-white">
                CMMI Level 3 & ISO Certified Excellence
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold tracking-tight leading-[1.05] mb-8"
            >
              <span className="text-white drop-shadow-lg [text-shadow:_0_2px_20px_rgb(255_255_255_/_30%)]">Transform Your</span>
              <br />
              <span className="text-gradient drop-shadow-lg">Digital Vision</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md"
            >
              Cutting-edge technology solutions that propel your business into the future. 
              KNSOFT Technologies delivers enterprise-grade software and digital transformation services.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center"
            >
              <Button 
                asChild 
                size="sm" 
                className="btn-gradient text-sm px-5 py-2 h-auto rounded-lg group"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  <span>Get started for free</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="sm"
                className="btn-outline-glow text-sm px-5 py-2 h-auto rounded-lg"
              >
                <Link to="/about">
                  <span>Learn more</span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="relative z-10 py-16"
        >
          <div className="text-center mb-8">
            <span className="text-sm font-bold text-white uppercase tracking-widest drop-shadow-md">
              Trusted by top companies
            </span>
          </div>
          
          {/* Logo Marquee */}
          <div className="logo-bar overflow-hidden">
            <div className="flex animate-marquee gap-16 whitespace-nowrap">
              {trustedBy.map((name, index) => (
                <span 
                  key={index} 
                  className="text-lg font-semibold text-white/70 hover:text-white transition-colors cursor-default"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <ChevronDown className="w-6 h-6 text-white/40 group-hover:text-primary transition-colors" />
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}
