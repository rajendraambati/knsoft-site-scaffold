import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/forms/ContactForm";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "info@knsofttech.com",
    description: "Send us an email anytime!"
  },
  {
    icon: MapPin,
    title: "Branches",
    content: "6250, westpark dr. Houston TX 77057\nHouston Office Location\n\nNo:36 Pillar No:1680, 2-293/82/a/787, Road, Jubilee Hills",
    description: "Our office locations worldwide"
  },
  {
    icon: Clock,
    title: "Response Time", 
    content: "Within 24 hours",
    description: "We'll get back to you quickly."
  }
];

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

        {/* Contact Information */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 card-elegant"
                >
                  <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <p className="text-foreground font-medium mb-1 whitespace-pre-line">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
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
                Located in the heart of Hyderabad's tech hub
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-video w-full rounded-lg overflow-hidden shadow-elegant"
            >
              {/* Map placeholder - In production, you'd integrate with Google Maps or similar */}
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <p className="text-foreground font-medium">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">
                    6th Floor, Sanvi Yamuna Pride<br/>
                    Madhapur, Hyderabad - 500081
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}