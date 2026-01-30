"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Users, Award, Target, ArrowRight, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";

const stats = [
  { icon: Users, label: "Happy Clients", value: 500, suffix: "+" },
  { icon: Building2, label: "Projects Delivered", value: 1000, suffix: "+" },
  { icon: Award, label: "Years Experience", value: 10, suffix: "+" },
  { icon: Target, label: "Success Rate", value: 99, suffix: "%" },
];

const highlights = [
  "ISO 27001 & ISO 9001 Certified",
  "CMMI Level 3 Appraised",
  "24/7 Support & Maintenance",
  "Agile Development Process"
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      
      {/* Floating Orbs */}
      <motion.div 
        className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
        style={{ y: y1 }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-[100px]"
        style={{ y: y2 }}
      />
      
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
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-medium mb-8"
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-white/80">About KNSOFT Technologies</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">Enterprise-Grade</span>
              <br />
              <span className="text-gradient">Software Solutions</span>
            </h2>
            
            <div className="space-y-6 text-lg text-white/60 leading-relaxed mb-10">
              <p>
                <strong className="text-white">KNSOFT Technologies</strong> is a leading software company delivering cutting-edge IT services, custom software development, and innovative digital solutions that transform businesses worldwide.
              </p>
              <p>
                Our Hyderabad-based team of 50+ skilled developers has successfully delivered 1000+ projects for clients across India, USA, and globally. We specialize in web applications, mobile apps, ERP systems, and enterprise solutions.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 glass rounded-xl"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-white/80">{item}</span>
                </motion.div>
              ))}
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
                <div className="relative p-8 rounded-2xl card-premium text-center">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-radial from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Value */}
                  <div className="text-4xl lg:text-5xl font-bold text-gradient mb-3">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm font-medium text-white/50 tracking-wide">
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
