import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Scale, Shield, AlertTriangle, Clock, Mail } from "lucide-react";

export default function Terms() {
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        "By accessing or using our services, you agree to be bound by these Terms of Service",
        "These terms apply to all visitors, users, and clients of KNSOFT Technologies",
        "We reserve the right to update these terms at any time with notice",
        "Continued use after changes constitutes acceptance of new terms"
      ]
    },
    {
      icon: Scale,
      title: "Services & Scope",
      content: [
        "We provide IT consulting, software development, and digital solutions",
        "Service specifications and deliverables are defined in individual project agreements",
        "We reserve the right to refuse service to anyone for any reason",
        "Services are provided 'as is' and we make no warranties beyond those in writing"
      ]
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      content: [
        "All content on our website is owned by KNSOFT Technologies or licensed to us",
        "Custom software developed for clients remains client property as per agreements",
        "We retain rights to general methodologies, frameworks, and know-how",
        "Clients grant us permission to use their project as a case study unless restricted"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Limitation of Liability",
      content: [
        "Our liability is limited to the amount paid for services in the preceding 12 months",
        "We are not liable for indirect, consequential, or special damages",
        "Client is responsible for data backup and business continuity planning",
        "Force majeure events excuse performance delays or failures"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Terms of Service - KNSOFT Technologies"
        description="Read the terms and conditions for using KNSOFT Technologies services. Understanding our service agreement and legal terms."
        keywords="terms of service, legal terms, service agreement, terms and conditions, KNSOFT Technologies"
        canonical="https://knsoft.dev/terms"
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
                Terms of Service
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Legal terms and conditions governing the use of our services and website.
              </p>
              <div className="flex items-center justify-center mt-6 text-white/80">
                <Clock className="h-5 w-5 mr-2" />
                <span>Last updated: September 22, 2025</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Terms Content */}
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
                    Welcome to KNSOFT TECHNOLOGIES PVT LTD. These Terms of Service ("Terms") govern your use of our website and services. Please read these terms carefully before using our services.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    These terms constitute a legally binding agreement between you and KNSOFT Technologies. If you do not agree with any part of these terms, you may not access or use our services.
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

            {/* Additional Terms */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 space-y-8"
            >
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle>Payment Terms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Payment terms are specified in individual project agreements. Generally, we require:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      50% advance payment before project commencement
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      Milestone-based payments for long-term projects
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      Final payment upon project completion and approval
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      Late payment fees may apply as specified in agreements
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle>Confidentiality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We maintain strict confidentiality regarding client information:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      All client data and business information is kept confidential
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      Non-disclosure agreements are standard for all projects
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      Access to client systems requires proper authorization
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      Data security measures comply with industry standards
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle>Governing Law</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    These terms are governed by the laws of India. Any disputes arising from these terms or our services will be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India. We strive to resolve all disputes amicably through negotiation before pursuing legal remedies.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-primary" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> legal@knsofttech.com</p>
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