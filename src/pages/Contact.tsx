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

        {/* Map Section */}
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
                Find Us <span className="text-gradient">Here</span>
              </h2>
              <p className="text-muted-foreground">
                Located in the prestigious Jubilee Hills area
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-video w-full rounded-lg overflow-hidden shadow-elegant"
            >
              <iframe
                src="https://maps.google.com/maps?q=H.No+8,+Apurupa+Turbo+Tower,+No:36+Pillar+No:1680,+2-293/82/a/787,+Road,+Jubilee+Hills,+Hyderabad,+Telangana+500033,+India&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KNSOFT Technologies Office Location"
                className="w-full h-full"
              />
            </motion.div>
            
            {/* Office Address Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <div className="card-elegant p-6 max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold mb-4 flex items-center justify-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Office Address
                </h3>
                <p className="text-foreground leading-relaxed">
                  H.No 8, Apurupa Turbo Tower<br/>
                  No:36 Pillar No:1680, 2-293/82/a/787, Road<br/>
                  Jubilee Hills, Hyderabad<br/>
                  Telangana 500033, India
                </p>
              </div>
            </motion.div>
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