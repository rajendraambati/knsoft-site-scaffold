"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";

const oldWay = [
  "Cumbersome discovery via HTTP/DNS",
  "Limited 1:1 communication",
  "Pull based semantics",
  "Perimeter based security models",
  "Routing via gateways, proxies, load balancers",
  "Centralized, location dependent backends"
];

const newWay = [
  "Services can live anywhere and are easily discoverable",
  "Flexible M:N communication",
  "Push, pull, fan in/out",
  "Decentralized, zero trust security",
  "Intelligent routing without more infrastructure",
  "Bringing data closer to the user"
];

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} className="py-32 lg:py-40 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <motion.div 
        className="absolute inset-0 bg-gradient-mesh opacity-30"
        style={{ y }}
      />
      
      {/* Glow */}
      <div className="absolute top-40 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Building for the edge</span>
            <br />
            <span className="text-gradient">requires new tech</span>
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto">
            From connected cars and fleet management to smart manufacturing and real-time telemetry, 
            edge devices and applications are transforming how we build distributed systems.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
          >
            <h3 className="text-2xl font-bold text-white/70 mb-8">The old way</h3>
            <ul className="space-y-5">
              {oldWay.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-white/40" />
                  </div>
                  <span className="text-white/50">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* New Way */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl card-premium"
          >
            <h3 className="text-2xl font-bold text-gradient mb-8">The new way</h3>
            <ul className="space-y-5">
              {newWay.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-white/70">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button asChild size="lg" className="btn-gradient rounded-xl group">
            <Link to="/services" className="flex items-center gap-2">
              <span>Explore our solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
