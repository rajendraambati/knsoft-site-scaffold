"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Users, Award, Target, ArrowRight, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";

const stats = [
  { icon: Users, label: "Happy Clients", value: 500, suffix: "+" },
  { icon: Building2, label: "Projects Completed", value: 1000, suffix: "+" },
  { icon: Award, label: "Years Experience", value: 13, suffix: "+" },
  { icon: Target, label: "Success Rate", value: 99, suffix: "%" },
];

const highlights = [
  "ISO 27001 & ISO 9001 Certified",
  "CMMI Level 3 Appraised",
  "24/7 Dedicated Support",
  "Agile Development Methodologies",
  "Certified Professionals & Domain Experts",
  "25+ Countries Served"
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 section-light relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 20% 80%, hsl(190 50% 85% / 0.3) 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, hsl(190 50% 90% / 0.2) 0%, transparent 40%)`
      }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-semibold mb-8"
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-dark-heading uppercase tracking-wider text-xs">Who We Are</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="text-dark-heading">Empowering</span>
              <br />
              <span className="text-dark-heading">Innovation </span>
              <span className="text-gradient">Through</span>
              <br />
              <span className="text-gradient">Technology</span>
            </h2>
            
            <div className="space-y-6 text-lg text-dark-body leading-relaxed mb-10">
              <p>
                <strong className="text-dark-heading">KNSOFT TECHNOLOGIES PVT LTD</strong> delivers cutting-edge IT services, software development, and innovative digital solutions that transform businesses.
              </p>
              <p>
                We believe that true innovation comes from reliable, intelligent systems—web applications, mobile apps, and enterprise solutions that create sustainable competitive advantages in today's digital marketplace.
              </p>
            </div>

            <Button asChild size="lg" className="btn-gradient rounded-full group">
              <Link to="/about" className="flex items-center gap-3">
                <span>Discover Our Story</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-8 rounded-2xl card-light text-center">
                  {/* Icon */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-accent/20 border border-accent/30 group-hover:scale-110 transition-transform duration-500">
                    <stat.icon className="w-8 h-8 text-accent" />
                  </div>
                  
                  {/* Value */}
                  <div className="text-4xl lg:text-5xl font-bold text-dark-heading mb-3">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm font-medium text-dark-muted tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
