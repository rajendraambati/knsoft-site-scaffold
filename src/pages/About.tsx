import { motion } from "framer-motion";
import { 
  Building2, 
  Users, 
  Target, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  MapPin, 
  Mail, 
  Phone,
  Heart,
  Lightbulb,
  Handshake,
  Shield,
  Globe,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Certification logo imports
import iso27001Logo from "@/assets/iso-27001-new.png";
import iso9001Logo from "@/assets/iso-9001-new.png";
import cmmiLevel3Logo from "@/assets/cmmi-level3-new.png";

const cultureValues = [
  {
    icon: Handshake,
    title: "Collaboration",
    description: "We believe in the power of teamwork and open communication to achieve extraordinary results together."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly evolve and adopt cutting-edge technologies to deliver innovative solutions that drive progress."
  },
  {
    icon: Heart,
    title: "Client Focus",
    description: "Our clients' success is our priority. We work closely to understand and exceed their expectations every time."
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We conduct business with honesty, transparency, and accountability in every interaction and decision."
  }
];

const leadership = [
  {
    name: "Dasaradh Ram",
    title: "Chief Executive Officer & Founder",
    image: "src/assets/ceo.jpg", // Placeholder - replace with actual images
    bio: "With over 15 years in enterprise software development, Dasaradh Ramaiah Kosana founded KNSOFT Technologies with a vision to deliver world-class IT solutions. He specializes in SAP integration and digital transformation strategies.",
    experience: "25+ years"
  },
  {
    name: "Uday Kiran",
    title: "COO/CTO",
    image: "src/assets/coo.png", // Placeholder - replace with actual images  
    bio: "Venkata Uday Kiran leads our technical strategy and innovation initiatives. He brings extensive experience in cloud architecture, AI automation, and enterprise system integration across multiple industries.",
    experience: "20+ years"
  },
  {
    name: "Rajesh",
    title: "Head of Operations(Usa)",
    image: "/images/leadership/coo.jpg", // Placeholder - replace with actual images
    bio: "Rajesh Mora oversees project delivery and client relationships. His expertise in agile methodologies and quality assurance ensures our solutions meet the highest standards of excellence.",
    experience: "18+ years"
  },
  {
    name: "Karuna Sree",
    title: "Head of Business Development(Usa)",
    image: "/images/leadership/bd.jpg", // Placeholder - replace with actual images
    bio: "Karuna Sree drives our growth strategy and partnerships. She has a proven track record in building long-term client relationships and identifying new business opportunities in emerging markets.",
    experience: "15+ years"
  }
];

interface OfficeLocation {
  city: string;
  country: string;
  type: string;
  address: string;
  email: string;
  phone?: string;
  mapEmbed: string | null;
}

const officeLocations: OfficeLocation[] = [
  {
    city: "Hyderabad",
    country: "India",
    type: "Headquarters",
    address: "H.No 8, Apurupa Turbo Tower, No:36 Pillar No:1680, 2-293/82/a/787, Road, Jubilee Hills, Hyderabad, Telangana 500033",
    email: "info@knsofttech.com",
    /*phone: "+91 40 4012 3456",*/
    mapEmbed: "https://maps.google.com/maps?q=H.No+8,+Apurupa+Turbo+Tower,+Jubilee+Hills,+Hyderabad,+Telangana+500033&t=&z=16&ie=UTF8&iwloc=&output=embed"
  },
  {
    city: "Houston",
    country: "USA",
    type: "Branch Office",
    address: "6250, Westpark Dr., Houston, TX 77057",
    email: "info@knsofttech.com", 
    /*phone: "+1 (713) 555-0123",*/
    mapEmbed: null
  },
  {
    city: "Guntur",
    country: "India",
    type: "Development Center",
    address: "Flat No - TF-2, Venkateswara Arcade, Annapurna Nagar 6th lane, Gorantla, Guntur, Andhra Pradesh – 522034",
    email: "info@knsofttech.com",
    /*phone: "+91 863 4567 8901",*/
    mapEmbed: null
  }
];

const certifications = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management Systems",
    icon: iso9001Logo,
    category: "Quality"
  },
  {
    name: "ISO 27001:2013", 
    description: "Information Security Management",
    icon: iso27001Logo,
    category: "Security"
  },
  {
    name: "CMMI Level 3",
    description: "Capability Maturity Model Integration",
    icon: cmmiLevel3Logo,
    category: "Process"
  },
  {
    name: "SAP Partnership",
    description: "Certified SAP Solutions Partner",
    icon: null,
    category: "Technology"
  },
  {
    name: "AWS Partner",
    description: "Amazon Web Services Technology Partner",
    icon: null,
    category: "Cloud"
  },
  {
    name: "Microsoft Partner",
    description: "Microsoft Certified Partner",
    icon: null,
    category: "Technology"
  }
];

const achievements = [
  "Founded in 2010 with 13+ years of industry experience",
  "500+ satisfied clients across 25+ countries",
  "1000+ successful project deliveries", 
  "24/7 dedicated support services",
  "Certified professionals & domain experts",
  "Agile development methodologies"
];

export default function About() {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="About Us - KNSOFT Technologies Leadership & Company Info"
        description="Learn about KNSOFT Technologies - Founded in 2010, delivering enterprise software solutions with SAP integration, custom development, and automation. Meet our leadership team and office locations."
        keywords="about KNSOFT Technologies, company leadership, office locations, certifications, company culture, enterprise software development"
      />
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About KNSOFT Technologies
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Empowering businesses through innovative technology solutions and digital transformation expertise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gradient">Who We Are</span>
                </h2>
                
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2010, KNSoft Technologies delivers enterprise software solutions with a focus on reliability, compliance, and speed. Our teams specialize in SAP integration, custom development, and automation.
                  </p>
                  
                  <p>
                    We earnestly believe that innovativeness in business operations can be brought in only through reliable software systems, web apps and enterprise mobile apps which eventually can create long-term sustainable, competitive advantage in the marketplace.
                  </p>

                  <p>
                    Our team of experienced professionals combines deep technical expertise with industry knowledge to deliver solutions that not only meet current needs but also scale for future growth.
                  </p>
                </div>

                <div className="mt-8">
                  <Button asChild variant="gradient" size="lg">
                    <Link to="/contact">
                      Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 card-glow">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold mb-6 text-center text-gradient">
                      Our Achievements
                    </h3>
                    <ul className="space-y-4">
                      {achievements.map((achievement, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center"
                        >
                          <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                          <span className="text-foreground">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
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
                Our <span className="text-gradient">Leadership</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the experienced professionals who guide our vision and drive our success.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center card-elegant hover:shadow-glow transition-all duration-500">
                    <CardContent className="p-6">
                      <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-12 w-12 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                      <p className="text-primary font-medium mb-2">{leader.title}</p>
                      <Badge variant="secondary" className="mb-4">
                        <Calendar className="w-3 h-3 mr-1" />
                        {leader.experience}
                      </Badge>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {leader.bio}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Office Locations */}
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
                Global <span className="text-gradient">Presence</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our strategically located offices enable us to serve clients across different time zones and markets.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {officeLocations.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full card-elegant">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold flex items-center gap-2">
                            <Globe className="h-5 w-5 text-primary" />
                            {office.city}, {office.country}
                          </h3>
                          <Badge variant="outline" className="mt-1">
                            {office.type}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{office.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-primary" />
                          <a href={`mailto:${office.email}`} className="text-primary hover:underline">
                            {office.email}
                          </a>
                        </div>
                        {office.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-primary" />
                            <a href={`tel:${office.phone}`} className="text-primary hover:underline">
                              {office.phone}
                            </a>
                          </div>
                        )}
                      </div>

                      {/* Embed map for headquarters */}
                      {office.mapEmbed && (
                        <div className="mt-4 aspect-video rounded-lg overflow-hidden">
                          <iframe
                            src={office.mapEmbed}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`${office.city} Office Location`}
                            className="w-full h-full"
                          />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Partnerships */}
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
                Certifications & <span className="text-gradient">Partnerships</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our industry certifications and strategic partnerships demonstrate our commitment to excellence and innovation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center p-6 card-elegant hover:shadow-glow transition-all duration-500">
                    <CardContent className="p-0">
                      <div className="h-20 w-20 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 border p-2">
                        {cert.icon ? (
                          <img 
                            src={cert.icon} 
                            alt={`${cert.name} certification logo`}
                            className="max-h-16 max-w-16 object-contain"
                          />
                        ) : (
                          <Award className="h-8 w-8 text-primary" />
                        )}
                      </div>
                      <Badge variant="secondary" className="mb-2">
                        {cert.category}
                      </Badge>
                      <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                      <p className="text-muted-foreground text-sm">
                        {cert.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture & Values Section */}
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
                Culture & <span className="text-gradient">Values</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our core values shape our company culture and guide every decision we make, ensuring we deliver exceptional results while maintaining the highest ethical standards.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cultureValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center p-6 card-glow hover:shadow-glow transition-all duration-500">
                    <CardContent className="p-0">
                      <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                        <value.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Let's discuss how our expertise can help you achieve your goals and drive sustainable growth through innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="gradient" size="lg">
                  <Link to="/contact">Get Started Today</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
