import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/forms/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get In Touch With Us
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Ready to transform your business with innovative IT solutions? Let's discuss your project and see how KNSOFT Technologies can help you achieve your goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">
                Global <span className="text-gradient">Presence</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our strategically located offices enable us to serve clients across different time zones and markets.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Hyderabad - Headquarters */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="card-elegant p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Hyderabad, India</h3>
                </div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4">
                  Headquarters
                </div>
                <p className="text-foreground leading-relaxed mb-4">
                  H.No 8, Apurupa Turbo Tower, No:36 Pillar No:1680, 2-293/82/a/787, Road, Jubilee Hills, Hyderabad, Telangana 500033
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:info@knsofttech.com" className="hover:underline">
                    info@knsofttech.com
                  </a>
                </div>
              </motion.div>

              {/* Houston - Branch Office */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="card-elegant p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Houston, USA</h3>
                </div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4">
                  Branch Office
                </div>
                <p className="text-foreground leading-relaxed mb-4">
                  6250, Westpark Dr., Houston, TX 77057
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:info@knsofttech.com" className="hover:underline">
                    info@knsofttech.com
                  </a>
                </div>
              </motion.div>

              {/* Guntur - Development Center */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="card-elegant p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Guntur, India</h3>
                </div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4">
                  Development Center
                </div>
                <p className="text-foreground leading-relaxed mb-4">
                  Flat No - TF-2, Venkateswara Arcade, Annapurna Nagar 6th lane, Gorantla, Guntur, Andhra Pradesh – 522034
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:info@knsofttech.com" className="hover:underline">
                    info@knsofttech.com
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Details Summary */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8">
                Ready to <span className="text-gradient">Connect?</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="card-elegant p-6">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <a href="mailto:info@knsofttech.com" className="text-primary hover:underline">
                    info@knsofttech.com
                  </a>
                </div>
                <div className="card-elegant p-6">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <a href="tel:+914040123456" className="text-primary hover:underline">
                    +91 40 4012 3456
                  </a>
                </div>
              </div>
              
              {/* Compliance Note */}
              <div className="bg-muted/50 rounded-lg p-6 border border-border/50">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Privacy Commitment:</strong> We do not share your data with third parties. 
                  Information submitted through this form will only be used to respond to your inquiry. 
                  Your privacy and data security are our top priorities.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}