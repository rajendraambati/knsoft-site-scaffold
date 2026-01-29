"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Power, Stars } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const heroSlides = [
  {
    title: "Top Software Company in Hyderabad",
    subtitle: "Trusted by 500+ businesses across India & USA for custom software development, web apps, and enterprise solutions",
    icon: Power,
  },
  {
    title: "Leading IT Company in India",
    subtitle: "10+ years of excellence in software development, mobile apps, ERP systems & digital transformation",
    icon: Power,
  },
  {
    title: "Your Technology Partner",
    subtitle: "ISO certified software company delivering world-class IT solutions from Hyderabad to the world",
    icon: Power,
  },
];

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(slideInterval);
    };
  }, []);

  const currentHero = heroSlides[currentSlide];
  const Icon = currentHero.icon;

  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
      style={{ opacity }}
    >
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
      
      {/* Floating Gradient Orbs */}
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
        style={{
          background: `radial-gradient(circle, hsl(var(--primary)) 0%, hsl(var(--accent)) 50%, transparent 70%)`,
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
        }}
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{
          background: `radial-gradient(circle, hsl(var(--accent)) 0%, hsl(var(--primary-glow)) 50%, transparent 70%)`,
          right: `${100 - mousePosition.x}%`,
          bottom: `${100 - mousePosition.y}%`,
        }}
        animate={{
          x: [100, -100, 100],
          y: [50, -50, 50],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 left-[10%] hidden lg:block"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Power className="w-12 h-12 text-primary/40" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-[10%] hidden lg:block"
        animate={{
          y: [0, 30, 0],
          rotate: [0, -180, -360],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <Stars className="w-16 h-16 text-accent/30" />
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Title */}
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-heading mb-6 leading-tight text-white"
          >
            {currentHero.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            {currentHero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              asChild 
              size="lg" 
              className="btn-gradient text-base md:text-lg px-8 py-6 group"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="text-base md:text-lg px-8 py-6 bg-primary border-primary text-white"
            >
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </motion.div>

          {/* Slide Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-2 justify-center mt-12"
          >
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === currentSlide 
                    ? 'w-12 bg-gradient-primary' 
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </motion.section>
  );
}