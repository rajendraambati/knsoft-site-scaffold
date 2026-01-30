"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

const heroSlides = [
  {
    title: "Enterprise",
    highlight: "Software Solutions",
    subtitle: "Transform your business with cutting-edge technology. Custom software, AI integration, and digital transformation for Fortune 500 companies.",
  },
  {
    title: "AI-Powered",
    highlight: "Innovation",
    subtitle: "Harness the power of artificial intelligence and machine learning to drive unprecedented business growth and efficiency.",
  },
  {
    title: "Global",
    highlight: "Technology Partner",
    subtitle: "Trusted by 500+ enterprises worldwide. ISO certified excellence delivering world-class IT solutions from Hyderabad to the world.",
  },
];

const stats = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "1000+", label: "Projects Delivered" },
  { value: "10+", label: "Years Excellence" },
  { value: "99%", label: "Client Satisfaction" },
];

const trustedBy = [
  "Fortune 500", "Healthcare", "FinTech", "E-Commerce", "Manufacturing", "Education"
];

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1, 0.9]);
  const y = useTransform(scrollY, [0, 600], [0, 150]);

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
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Dark Background with Gradient */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-100" />
      
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
      
      {/* Animated Gradient Orbs */}
      <motion.div 
        className="absolute w-[1000px] h-[1000px] rounded-full blur-[120px] opacity-20"
        style={{
          background: `radial-gradient(circle, hsl(83 100% 43%) 0%, transparent 70%)`,
          left: `${mousePosition.x * 0.2 - 20}%`,
          top: `${mousePosition.y * 0.2 - 20}%`,
        }}
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full blur-[100px] opacity-15"
        style={{
          background: `radial-gradient(circle, hsl(186 100% 50%) 0%, transparent 70%)`,
          right: `${(100 - mousePosition.x) * 0.15}%`,
          bottom: `${(100 - mousePosition.y) * 0.15}%`,
        }}
        animate={{
          x: [80, -80, 80],
          y: [40, -40, 40],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Radial Glow from Center */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ y }}
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Pre-title Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-white/90">CMMI Level 3 & ISO Certified</span>
          </motion.div>

          {/* Main Headline */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-bold tracking-tight leading-[1.05]"
            >
              <span className="text-white">{currentHero.title}</span>
              <br />
              <span className="text-gradient">{currentHero.highlight}</span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            {currentHero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button 
              asChild 
              size="lg" 
              className="btn-gradient text-base md:text-lg px-8 py-6 h-auto rounded-full group relative overflow-hidden"
            >
              <Link to="/contact" className="flex items-center gap-3">
                <Sparkles className="w-5 h-5" />
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="btn-outline-glow text-base md:text-lg px-8 py-6 h-auto rounded-full group"
            >
              <Link to="/success-stories" className="flex items-center gap-3">
                <Play className="w-5 h-5" />
                <span>View Our Work</span>
              </Link>
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-4xl mx-auto mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50 font-medium tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Slide Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-3 justify-center mb-12"
          >
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative h-1.5 rounded-full transition-all duration-500 overflow-hidden ${
                  index === currentSlide 
                    ? 'w-12 bg-white/20' 
                    : 'w-1.5 bg-white/10 hover:bg-white/20'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index === currentSlide && (
                  <motion.div
                    className="absolute inset-0 bg-primary rounded-full"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 6, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Trusted By Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-20 left-0 right-0 z-10"
      >
        <div className="text-center mb-4">
          <span className="text-xs font-medium text-white/40 uppercase tracking-widest">
            Trusted by Industry Leaders
          </span>
        </div>
        <div className="flex justify-center gap-8 md:gap-16 opacity-40">
          {trustedBy.map((name) => (
            <span key={name} className="text-sm font-medium text-white/60 whitespace-nowrap">
              {name}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-xs text-white/40 uppercase tracking-widest group-hover:text-white/60 transition-colors">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 text-white/40 group-hover:text-primary transition-colors" />
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
    </motion.section>
  );
}
