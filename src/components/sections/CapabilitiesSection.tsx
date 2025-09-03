"use client";

import { motion } from "framer-motion";
import { Cloud, Settings, Headphones, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const capabilities = [
  {
    icon: Cloud,
    title: "Hosting Services",
    items: [
      "Blended Cloudhosting",
      "IAAS (Infrastructure As A Service)", 
      "PUM image updates",
      "Optimization for lower cost"
    ]
  },
  {
    icon: Settings,
    title: "Implementations & Upgrades",
    items: [
      "Installations",
      "Roll-outs",
      "Implementations", 
      "Customizations",
      "Integrations",
      "Fit-gap Analysis",
      "Accelerated Upgrade Paths",
      "Retrofitting",
      "Testing & Go-live",
      "Critical Care"
    ]
  },
  {
    icon: Headphones,
    title: "Support & Maintenance", 
    items: [
      "Production Support",
      "24*7 Support (using onsite-offshore model)",
      "Break-fix and Enhancements",
      "SLA Based Services & Tax Updates"
    ]
  }
];

export function CapabilitiesSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to support your business operations and technology infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-glow hover:shadow-glow transition-all duration-500">
                <CardHeader>
                  <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <capability.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">
                    {capability.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {capability.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}