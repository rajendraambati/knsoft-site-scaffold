"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Dark Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      
      {/* Gradient Overlay - Dark to transparent */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/60" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-60" />
      
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-80" />
      
      {/* Animated Gradient Orbs */}
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full blur-[150px] opacity-20"
        style={{
          background: `radial-gradient(circle, hsl(155 100% 50%) 0%, transparent 70%)`,
          left: `${mousePosition.x * 0.15 - 10}%`,
          top: `${mousePosition.y * 0.15 - 10}%`,
        }}
        animate={{
          x: [-50, 50, -50],
          y: [-30, 30, -30],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-15"
        style={{
          background: `radial-gradient(circle, hsl(192 100% 50%) 0%, transparent 70%)`,
          right: `${(100 - mousePosition.x) * 0.1}%`,
          bottom: `${(100 - mousePosition.y) * 0.1}%`,
        }}
        animate={{
          x: [40, -40, 40],
          y: [20, -20, 20],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ y }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Pre-title Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 glass-light rounded-full px-5 py-2.5 mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-white/90">CMMI Level 3 & ISO Certified Excellence</span>
          </motion.div>

          {/* Main Headline - 72-84px */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-extrabold tracking-tight leading-[1.05] mb-8"
          >
            <span className="text-white">Transform Your Business</span>
            <br />
            <span className="text-gradient">With Enterprise Software</span>
          </motion.h1>

          {/* Subtitle - 20-24px */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Leading software development company delivering cutting-edge IT solutions, 
            custom applications, and digital transformation for 500+ enterprises worldwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <Button 
              asChild 
              size="lg" 
              className="btn-gradient text-lg px-10 py-7 h-auto rounded-xl font-semibold group"
            >
              <Link to="/contact" className="flex items-center gap-3">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="btn-outline-glow text-lg px-10 py-7 h-auto rounded-xl font-semibold group"
            >
              <Link to="/success-stories" className="flex items-center gap-3">
                <Play className="w-5 h-5" />
                <span>View Our Work</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={scrollToContent}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 cursor-pointer group"
        >
          <span className="text-xs text-white/50 uppercase tracking-[0.2em] group-hover:text-white/70 transition-colors">
            Scroll
          </span>
          <ChevronDown className="w-6 h-6 text-white/50 group-hover:text-primary transition-colors" />
        </motion.button>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </motion.section>
  );
}
