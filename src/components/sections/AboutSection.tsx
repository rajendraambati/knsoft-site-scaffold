"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Users, Award, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const stats = [
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Building2, label: "Projects Completed", value: "1000+" },
  { icon: Award, label: "Years Experience", value: "10+" },
  { icon: Target, label: "Success Rate", value: "99%" },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="py-24 bg-background section-mesh overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">Who We Are</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Best Software Company <span className="text-gradient">in Hyderabad, India</span>
            </h2>
            
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed mb-8">
              <p className="font-medium">
                <strong className="text-foreground font-semibold">KNSOFT TECHNOLOGIES PVT LTD</strong> is a leading software company in Hyderabad, India, delivering cutting-edge IT services, custom software development, and innovative digital solutions that transform businesses worldwide.
              </p>
              
              <p>
                As one of the top IT companies in India, we specialize in web applications, mobile apps, ERP systems, and enterprise solutions. Our Hyderabad-based team of 50+ skilled developers has successfully delivered 1000+ projects for clients across India, USA, and globally.
              </p>
            </div>

            <Button asChild size="lg" className="btn-gradient group">
              <Link to="/about" className="flex items-center gap-2">
                Discover Our Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />
                <div className="relative card-elegant p-8 text-center hover:-translate-y-2 transition-all duration-500">
                  <div className="relative inline-flex items-center justify-center mb-4">
                    <div className="absolute inset-0 bg-gradient-primary rounded-xl opacity-20 blur-md" />
                    <div className="relative h-14 w-14 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <stat.icon className="h-7 w-7 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold font-heading text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
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