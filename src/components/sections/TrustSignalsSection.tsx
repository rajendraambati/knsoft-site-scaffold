"use client";

import { motion } from "framer-motion";
import { Award, Verified } from "lucide-react";

// Import certification images
import cmmiLogo from "@/assets/cmmi-level3-new.png";
import iso9001Logo from "@/assets/iso-9001-new.png";
import iso27001Logo from "@/assets/iso-27001-new.png";

const certifications = [
  {
    name: "CMMI Level 3",
    description: "Capability Maturity Model Integration",
    image: cmmiLogo,
  },
  {
    name: "ISO 9001:2015",
    description: "Quality Management System",
    image: iso9001Logo,
  },
  {
    name: "ISO 27001",
    description: "Information Security Management",
    image: iso27001Logo,
  },
];

const techLogos = [
  "Go", "Rust", "Java", "Python", "JavaScript", "React", "Node.js", "C#"
];

export function TrustSignalsSection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      {/* Glow */}
      <div className="absolute top-40 right-20 w-80 h-80 bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {techLogos.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-6 py-3 rounded-xl glass text-white/50 font-medium text-sm hover:text-white/80 hover:bg-white/5 transition-all cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 text-sm font-medium mb-10">
            <Verified className="w-4 h-4 text-primary" />
            <span className="text-white/80">Certified Excellence</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-12">
            Enterprise-grade certifications
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex flex-col items-center p-8 rounded-2xl card-premium text-center">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                    <img
                      src={cert.image}
                      alt={`${cert.name} Certification`}
                      className="h-20 w-auto object-contain brightness-90 group-hover:brightness-100 transition-all"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="font-semibold text-white mb-1">{cert.name}</h4>
                  <p className="text-sm text-white/50">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
