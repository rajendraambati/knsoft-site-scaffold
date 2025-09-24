"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Smartphone, Globe, Users, Sparkles, Zap, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs that respond to mouse movement */}
        <motion.div 
          className="absolute w-96 h-96 bg-gradient-to-r from-accent/20 to-primary-glow/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 1.5,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          style={{ 
            left: '-10%', 
            top: '-10%',
          }}
        />
        
        <motion.div 
          className="absolute w-80 h-80 bg-gradient-to-r from-primary-glow/15 to-accent/15 rounded-full blur-2xl"
          animate={{
            x: -mousePosition.x * 1.5,
            y: -mousePosition.y * 2,
          }}
          transition={{ type: "spring", stiffness: 40, damping: 25 }}
          style={{ 
            right: '-10%', 
            bottom: '-10%',
          }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4"
          animate={{
            rotate: mousePosition.x * 0.5,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <Sparkles className="w-8 h-8 text-accent/60 animate-pulse" />
        </motion.div>

        <motion.div
          className="absolute top-3/4 right-1/4"
          animate={{
            rotate: -mousePosition.y * 0.3,
            x: mousePosition.x * 0.1,
          }}
          transition={{ duration: 0.4 }}
        >
          <Zap className="w-12 h-12 text-primary-glow/50" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-1/6"
          animate={{
            y: Math.sin(mousePosition.x * 0.01) * 20,
            rotate: mousePosition.y * 0.2,
          }}
          transition={{ duration: 0.5 }}
        >
          <Cpu className="w-10 h-10 text-accent/40" />
        </motion.div>

        {/* Grid pattern that shifts with mouse */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: `${mousePosition.x * 0.5}px ${mousePosition.y * 0.5}px`,
          }}
          transition={{ duration: 0.1 }}
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.h1 
              className="hero-text mb-6"
              animate={{
                scale: mousePosition.x > 50 ? 1.02 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              KNSOFT TECHNOLOGIES
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 leading-relaxed bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent font-semibold"
              animate={{
                opacity: isHovered ? 1 : 0.9,
              }}
              transition={{ duration: 0.3 }}
            >
              Driving Digital Transformation with Innovative IT Solutions, Software Development & Solar-Powered Sustainability
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button asChild variant="hero" size="xl">
              <Link to="/contact" aria-label="Get in touch with KNSOFT Technologies">
                Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/services" aria-label="Explore KNSOFT Technologies services and solutions">Our Services</Link>
            </Button>
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