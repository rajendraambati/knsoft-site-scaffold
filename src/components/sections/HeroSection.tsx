"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, CheckCircle, Star, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const trustBadges = [
  { icon: Shield, label: "ISO 27001 Certified" },
  { icon: Award, label: "CMMI Level 3" },
  { icon: Star, label: "500+ Happy Clients" },
];

const heroSlides = [
  {
    title: "Top Software Company",
    highlight: "in Hyderabad",
    subtitle: "Trusted by 500+ businesses across India & USA for custom software development, web apps, and enterprise solutions",
  },
  {
    title: "Leading IT Company",
    highlight: "in India",
    subtitle: "10+ years of excellence in software development, mobile apps, ERP systems & digital transformation",
  },
  {
    title: "Your Technology",
    highlight: "Partner",
    subtitle: "ISO certified software company delivering world-class IT solutions from Hyderabad to the world",
  },
];

const clientLogos = [
  "TechCorp", "InnovateCo", "DataFlow", "CloudSync", "NextGen", "SmartSoft"
];

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(slideInterval);
    };
  }, []);

  const currentHero = heroSlides[currentSlide];

  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
      style={{ opacity, scale }}
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Floating Gradient Orbs - Enhanced */}
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-25"
        style={{
          background: `radial-gradient(circle, hsl(var(--accent)) 0%, hsl(var(--primary)) 40%, transparent 70%)`,
          left: `${mousePosition.x * 0.3}%`,
          top: `${mousePosition.y * 0.3}%`,
        }}
        animate={{
          x: [-150, 150, -150],
          y: [-75, 75, -75],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{
          background: `radial-gradient(circle, hsl(var(--primary-glow)) 0%, hsl(var(--accent)) 50%, transparent 70%)`,
          right: `${(100 - mousePosition.x) * 0.2}%`,
          bottom: `${(100 - mousePosition.y) * 0.2}%`,
        }}
        animate={{
          x: [100, -100, 100],
          y: [50, -50, 50],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Trust Badges - Left Side */}
      <div className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-20">
        {trustBadges.map((badge, index) => (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
            className="flex items-center gap-3 bg-background/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2"
          >
            <badge.icon className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-white/90">{badge.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Pre-title Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-medium text-white/90">Trusted by Fortune 500 Companies</span>
          </motion.div>

          {/* Title with Split Animation */}
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-heading mb-6 leading-[1.1] text-white"
          >
            {currentHero.title}
            <br />
            <span className="relative inline-block">
              <span className="text-gradient-accent">{currentHero.highlight}</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-accent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            {currentHero.subtitle}
          </motion.p>

          {/* CTA Buttons - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button 
              asChild 
              size="xl" 
              className="btn-gradient text-base md:text-lg px-8 py-6 group shadow-glow"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="xl"
              className="text-base md:text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <Link to="/success-stories" className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                View Our Work
              </Link>
            </Button>
          </motion.div>

          {/* Quick Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-12"
          >
            {[
              { value: "500+", label: "Clients" },
              { value: "1000+", label: "Projects" },
              { value: "10+", label: "Years" },
              { value: "99%", label: "Satisfaction" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Slide Indicators - Enhanced */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-3 justify-center"
          >
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative h-2 rounded-full transition-all duration-500 overflow-hidden ${
                  index === currentSlide 
                    ? 'w-16 bg-white/30' 
                    : 'w-2 bg-white/20 hover:bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index === currentSlide && (
                  <motion.div
                    className="absolute inset-0 bg-accent rounded-full"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 6, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Client Logos Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-0 right-0 z-10"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-white/50 text-sm mb-4">
            <CheckCircle className="w-4 h-4" />
            <span>Trusted by leading companies worldwide</span>
          </div>
        </div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </motion.section>
  );
}