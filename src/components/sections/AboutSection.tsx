"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Users, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Building2, label: "Projects Completed", value: "1000+" },
  { icon: Award, label: "Years Experience", value: "10+" },
  { icon: Target, label: "Success Rate", value: "99%" },
];

export function AboutSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Who We Are</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                We, <strong className="text-foreground">KNSOFT TECHNOLOGIES PVT LTD</strong>, as an IT Services, Software Development, Web and Mobile App Development Firm, are here to help clients reach their goal the easy way through our unique IT, Software, Web & Mobile App Solutions, replete in quality.
              </p>
              
              <p>
                We earnestly believe that innovativeness in business operations can be brought in only through reliable software systems, web apps and enterprise mobile apps which eventually can create long-term sustainable, competitive advantage in the marketplace.
              </p>
            </div>

            <Button asChild variant="gradient" size="lg">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 card-elegant"
              >
                <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}