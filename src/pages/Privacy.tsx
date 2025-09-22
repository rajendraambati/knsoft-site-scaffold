import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, FileText, Clock, Mail } from "lucide-react";

export default function Privacy() {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Personal information you provide when contacting us or requesting services",
        "Technical data about your device and browsing behavior on our website",
        "Communication records including emails, calls, and meeting notes",
        "Business information shared during project consultations"
      ]
    },
    {
      icon: Shield,
      title: "How We Use Your Information",
      content: [
        "To provide and deliver our IT and software development services",
        "To communicate with you about projects, updates, and support",
        "To improve our website functionality and user experience",
        "To comply with legal obligations and protect our business interests"
      ]
    },
    {
      icon: Lock,
      title: "Data Protection & Security",
      content: [
        "We implement industry-standard security measures to protect your data",
        "Access to personal information is restricted to authorized personnel only",
        "We use encrypted connections (SSL/TLS) for data transmission",
        "Regular security audits and compliance with ISO 27001 standards"
      ]
    },
    {
      icon: FileText,
      title: "Data Sharing & Disclosure",
      content: [
        "We do not sell, trade, or rent your personal information to third parties",
        "Information may be shared with trusted partners only as necessary for service delivery",
        "We may disclose information if required by law or to protect our rights",
        "Client project data is kept confidential under non-disclosure agreements"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Privacy Policy - KNSOFT Technologies"
        description="Learn how KNSOFT Technologies protects your privacy and handles personal information. Our commitment to data security and privacy compliance."
        keywords="privacy policy, data protection, information security, GDPR compliance, data privacy, KNSOFT Technologies"
        canonical="https://knsoft.dev/privacy"
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
                Privacy Policy
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
              </p>
              <div className="flex items-center justify-center mt-6 text-white/80">
                <Clock className="h-5 w-5 mr-2" />
                <span>Last updated: September 22, 2025</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Card className="card-elegant">
                <CardContent className="p-8">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    At KNSOFT TECHNOLOGIES PVT LTD, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    By using our website or services, you consent to the data practices described in this policy. We comply with applicable data protection laws including GDPR, and maintain ISO 27001 certification for information security management.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-elegant">
                    <CardHeader>
                      <CardTitle className="flex items-center text-xl">
                        <div className="h-10 w-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                          <section.icon className="h-5 w-5 text-white" />
                        </div>
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Additional Sections */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 space-y-8"
            >
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle>Your Rights & Choices</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    You have the right to access, update, or delete your personal information. You may also opt-out of marketing communications at any time. For data portability requests or to exercise your rights under applicable privacy laws, please contact us using the information below.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle>Cookies & Tracking Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our website uses cookies and similar technologies to improve functionality and user experience. We use:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      Essential cookies for website functionality
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      Analytics cookies to understand website usage
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      Performance cookies to improve website speed
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-primary" />
                    Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> privacy@knsofttech.com</p>
                    <p><strong>Address:</strong> H.No 8, Apurupa Turbo Tower, Jubilee Hills, Hyderabad, Telangana 500033, India</p>
                    <p><strong>Phone:</strong> +91 40 4012 3456</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}