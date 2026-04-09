import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Church, Newspaper, Hammer, FileText, Mail, Camera, WashingMachine, Gamepad2, MessageCircle, Scissors, Calendar } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEO/SEOHead";

const products = [
  // Social & Community
  { name: "Crowdfunding Software For NGO", icon: Heart, type: "Standard", description: "Complete crowdfunding platform for NGOs to create campaigns, accept donations, and manage fundraising activities." },
  { name: "Crowdfunding Software For NGO Pro", icon: Heart, type: "Pro", description: "Advanced crowdfunding solution with donor management, campaign analytics, and multiple payment gateway integration." },
  { name: "Crowdfunding Software For NGO Pro 2", icon: Heart, type: "Pro", description: "Enterprise crowdfunding platform with social media integration, automated receipts, and comprehensive reporting." },
  { name: "Professional Crowdfunding Software For NGO", icon: Heart, type: "Pro", description: "Professional-grade crowdfunding system with peer-to-peer fundraising, recurring donations, and donor portal." },
  { name: "Matrimonial CMS Website", icon: Heart, type: "Standard", description: "Complete matrimonial website solution with profile matching, communication tools, and privacy controls." },
  { name: "Matrimonial Portal Website", icon: Heart, type: "Standard", description: "Advanced matrimonial portal with AI-powered matching, verified profiles, and secure messaging system." },
  { name: "Church Management Software", icon: Church, type: "Standard", description: "Comprehensive church management system for member records, donations, events, and communications." },
  { name: "Crowdfunding System TSF", icon: Heart, type: "TSF", description: "TSF certified crowdfunding platform with enhanced security and compliance features for fundraising." },
  
  // Other Services
  { name: "News Portal Management Software", icon: Newspaper, type: "Standard", description: "Complete news portal CMS with article management, categories, multimedia support, and reader engagement." },
  { name: "Bricks Field Management Software", icon: Hammer, type: "Standard", description: "Specialized software for brick manufacturing management including production, inventory, and sales tracking." },
  { name: "Advanced File Management", icon: FileText, type: "Standard", description: "Robust file management system with secure storage, sharing, versioning, and access control features." },
  { name: "Bulk Email Management Software", icon: Mail, type: "Standard", description: "Professional bulk email platform with campaign management, templates, analytics, and subscriber management." },
  { name: "Card-Php-Coming-Soon-With-Admin-Panel", icon: Camera, type: "Standard", description: "Coming soon page builder with admin panel for managing pre-launch campaigns and collecting leads." },
  { name: "Laundry Management Software", icon: WashingMachine, type: "Standard", description: "Complete laundry service management with order tracking, customer management, and billing system." },
  { name: "Game Software", icon: Gamepad2, type: "Standard", description: "Gaming platform software with user management, leaderboards, achievements, and multiplayer support." },
  { name: "ChatPion Facebook Chatbot, eCommerce & Social Media Management Tool", icon: MessageCircle, type: "Pro", description: "All-in-one chatbot and social media management platform for Facebook automation and eCommerce integration." },
  { name: "Gain - Salon Booking Software", icon: Scissors, type: "Standard", description: "Modern salon booking system with appointment scheduling, staff management, and customer relationship tools." },
  { name: "Book My Salon / Salon, Parlour Management Software", icon: Scissors, type: "Pro", description: "Comprehensive salon and parlour management with inventory, billing, appointments, and analytics dashboard." },
  { name: "Event Management Software", icon: Calendar, type: "Standard", description: "Complete event management solution with registration, ticketing, attendee tracking, and event analytics." },
  { name: "Online Confess System TSF", icon: MessageCircle, type: "TSF", description: "TSF certified anonymous confession platform for educational institutions and organizations." }
];

export default function CivicSocial() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProductCategory",
    "name": "Civic, Social & Miscellaneous Systems",
    "description": "Diverse software solutions for NGOs, community platforms, social services, and specialized business operations.",
    "numberOfItems": products.length,
    "provider": {
      "@type": "Organization",
      "name": "KNSOFT Technologies"
    }
  };

  return (
    <>
      <SEOHead 
        title="Civic, Social & Miscellaneous Software Solutions | KNSOFT Technologies"
        description="Comprehensive software for NGOs, crowdfunding, social platforms, and specialized business operations. Custom solutions for community services."
        keywords="NGO software, crowdfunding platform, church management, matrimonial website, social platform, community software"
        structuredData={structuredData}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Civic, Social & Miscellaneous Solutions
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Diverse software solutions for NGOs, community organizations, and specialized businesses. 
                  Empowering social impact and unique business operations.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <product.icon className="w-8 h-8 text-primary" />
                          </div>
                          <span className={`text-xs px-3 py-1 rounded-full ${
                            product.type === 'Pro' ? 'bg-accent text-accent-foreground' : 
                            product.type === 'TSF' ? 'bg-primary text-primary-foreground' : 
                            'bg-secondary text-secondary-foreground'
                          }`}>
                            {product.type}
                          </span>
                        </div>
                        <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                        <CardDescription>{product.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-2">
                          <Button variant="default" className="flex-1">
                            Request Demo
                          </Button>
                          <Button variant="outline" className="flex-1">
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto"
              >
                <h2 className="text-3xl font-bold mb-4">Ready to Make a Social Impact?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Contact us today to find the perfect solution for your organization's unique needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link to="/contact">
                      Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/products">View All Products</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
