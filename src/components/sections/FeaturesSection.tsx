"use client";

import { motion } from "framer-motion";
import { Zap, Shield, MessageCircle, Bot, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Agile Software Development",
    description: "In software development, agile (sometimes written Agile) practices include requirements discovery and solutions improvement through the collaborative effort of self-organizing and cross-functional teams with their customer(s)/end user(s), adaptive planning, evolutionary development, early delivery, continual improvement, and flexible responses to changes in requirements, capacity, and understanding of the problems to be solved.",
    points: [
      "Individuals and interactions over processes and tools",
      "Working software over comprehensive documentation", 
      "Customer collaboration over contract negotiation",
      "Responding to change over following a plan"
    ]
  },
  {
    icon: Shield,
    title: "Blockchain Development",
    description: "Blockchain development is the process of creating shared, unchangeable, distributed ledger technology (DLT) that securely records transactions and tracks assets—whether those are physical assets, like money or real estate, or nonphysical assets, like copyrights—within a network",
    points: [
      "Secure distributed ledger technology",
      "Smart contract development",
      "Cryptocurrency solutions",
      "DeFi applications"
    ]
  },
  {
    icon: MessageCircle,
    title: "Chatbot Development", 
    description: "Chatbots are used in dialog systems for various purposes including customer service, request routing, or information gathering. While some chatbot applications use extensive word-classification processes, natural-language processors, and sophisticated AI, others simply scan for general keywords and generate responses using common phrases obtained from an associated library or database.",
    points: [
      "Messaging apps integration",
      "Company apps and websites", 
      "Customer service automation",
      "Healthcare applications"
    ]
  },
  {
    icon: Bot,
    title: "RPA",
    description: "Robotic process automation (RPA) is a productivity tool that allows a user to configure one or more scripts (which some vendors refer to as \"bots\") to activate specific keystrokes in an automated fashion. RPA is a software technology that makes it easy to build, deploy, and manage software robots that emulate humans actions interacting with digital systems and software.",
    points: [
      "RPA Blue Prism",
      "UiPath automation",
      "Automation Anywhere", 
      "Kofax Kapow solutions",
      "NICE RPA tools"
    ]
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced <span className="text-gradient">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our teams listen, plan with you, and develop solutions to help you succeed.
          </p>
        </motion.div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <ul className="space-y-3">
                  {feature.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image/Icon placeholder */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="card-elegant p-12 text-center">
                  <feature.icon className="h-24 w-24 mx-auto text-primary mb-4" />
                  <div className="text-lg font-semibold text-gradient">
                    {feature.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}