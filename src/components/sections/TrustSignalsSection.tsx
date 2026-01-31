"use client";

import { motion } from "framer-motion";
import { Verified, Server, Settings, Headphones, Cloud, Award, Shield } from "lucide-react";

// Import certification images
import cmmiLogo from "@/assets/cmmi-level3-new.png";
import iso9001Logo from "@/assets/iso-9001-new.png";
import iso27001Logo from "@/assets/iso-27001-new.png";

const certifications = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management Systems",
    category: "Quality",
    image: iso9001Logo,
  },
  {
    name: "ISO 27001:2013",
    description: "Information Security Management",
    category: "Security",
    image: iso27001Logo,
  },
  {
    name: "CMMI Level 3",
    description: "Capability Maturity Model Integration",
    category: "Process",
    image: cmmiLogo,
  },
];

const partnerships = [
  { name: "SAP Partnership", description: "Certified SAP Solutions Partner" },
  { name: "AWS Partner", description: "Amazon Web Services Technology Partner" },
  { name: "Microsoft Partner", description: "Microsoft Certified Partner" },
];

const capabilities = [
  {
    icon: Server,
    title: "Hosting Services",
    items: ["Blended Cloud Hosting", "IAAS (Infrastructure As A Service)", "PUM image updates", "Optimization for lower cost"]
  },
  {
    icon: Settings,
    title: "Implementations & Upgrades",
    items: ["Installations & Roll-outs", "Customizations & Integrations", "Fit-gap Analysis", "Accelerated Upgrade Paths", "Testing & Go-live"]
  },
  {
    icon: Headphones,
    title: "Support & Maintenance",
    items: ["Production Support", "24*7 Support (onsite-offshore model)", "Critical Care Services", "Dedicated Support Team"]
  },
];

export function TrustSignalsSection() {
  return (
    <section className="py-24 lg:py-32 section-light relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 80% 20%, hsl(190 50% 85% / 0.3) 0%, transparent 50%)`
      }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Capabilities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-[0.2em] mb-6">Our Capabilities</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-dark-heading">Comprehensive Solutions</span>{" "}
              <span className="text-gradient">For Your Business</span>
            </h2>
            <p className="text-lg text-dark-body max-w-2xl mx-auto">
              Comprehensive solutions to support your business operations and technology infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl card-light hover-bounce group"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <capability.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-dark-heading mb-4 group-hover:text-primary transition-colors">{capability.title}</h3>
                <ul className="space-y-3">
                  {capability.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-dark-body">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
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
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2.5 text-sm font-semibold mb-10">
            <Verified className="w-4 h-4 text-primary" />
            <span className="text-dark-heading">Certifications & Partnerships</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-dark-heading mb-6">
            Industry certifications & strategic partnerships
          </h3>
          <p className="text-dark-body max-w-2xl mx-auto mb-12">
            Our industry certifications and strategic partnerships demonstrate our commitment to excellence and innovation.
          </p>
          
          {/* Certifications Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex flex-col items-center p-8 rounded-2xl card-light text-center">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">{cert.category}</span>
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                    <img
                      src={cert.image}
                      alt={`${cert.name} Certification`}
                      className="h-20 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="font-semibold text-dark-heading mb-1">{cert.name}</h4>
                  <p className="text-sm text-dark-muted">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Partnerships */}
          <div className="flex flex-wrap justify-center gap-6">
            {partnerships.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 px-6 py-4 rounded-xl card-light"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-dark-heading text-sm">{partner.name}</div>
                  <div className="text-xs text-dark-muted">{partner.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
