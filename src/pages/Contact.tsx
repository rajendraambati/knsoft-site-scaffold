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
    title: "Visit Us",
    content: "6th Floor, Sanvi Yamuna Pride, Plot#20 & 21, Krithika Layout, Opp: Image Gardens, Madhapur, Hyderabad - 500081",
    description: "Come say hello at our office HQ."
  },
  {
    icon: Phone,
    title: "Branches",
    content: "6250, westpark dr.\nHouston\nTX 77057\n\nFlat No - TF-2,\nVenkateswara Arcade,\nAnnapurna Nagar 6th lane",
    description: "Our office locations"
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

        {/* Calendar Booking Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">
                Book a <span className="text-gradient">Call</span>
              </h2>
              <p className="text-muted-foreground">
                Schedule a consultation with our experts
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="aspect-[4/3] w-full rounded-lg overflow-hidden shadow-elegant bg-background border">
                <iframe
                  src="https://calendly.com/your-calendly-link"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Schedule a Meeting"
                  className="w-full h-full"
                />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Can't see the calendar? <a href="https://calendly.com/your-calendly-link" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Click here to book directly</a>
              </p>
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.613906991717!2d78.3912!3d17.4483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sMadhapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1638360644021!5m2!1sen!2sin"
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
                  6th Floor, Sanvi Yamuna Pride<br/>
                  Plot#20 & 21, Krithika Layout<br/>
                  Opp: Image Gardens, Madhapur<br/>
                  Hyderabad - 500081, Telangana, India
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