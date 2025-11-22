import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Users, BookOpen, CheckCircle, Award, Target, TrendingUp, Code } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEOHead } from "@/components/SEO/SEOHead";

const keyBenefits = [
  "Expert-led training programs",
  "Hands-on practical sessions",
  "Industry-relevant curriculum",
  "Certification programs",
  "Flexible learning schedules",
  "Corporate training solutions",
  "One-on-one mentorship",
  "Real-world project experience"
];

const trainingServices = [
  { name: "Software Development", icon: Code },
  { name: "Corporate Training", icon: Users },
  { name: "Certification Courses", icon: Award },
  { name: "Technology Workshops", icon: Target }
];

export default function Training() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IT Training & Professional Development",
    "description": "Comprehensive IT training programs including software development courses, corporate training, certification programs, and hands-on technology workshops.",
    "provider": {
      "@type": "Organization",
      "name": "KNSOFT Technologies",
      "url": "https://knsoft.dev"
    },
    "serviceType": "Training & Education",
    "areaServed": "Global"
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="IT Training & Professional Development | KNSOFT Technologies"
        description="Expert-led IT training programs with hands-on sessions. Software development courses, corporate training, certification programs, and technology workshops to advance your career."
        keywords="IT training, software development courses, corporate training, certification programs, technology workshops, professional development, coding bootcamp"
        canonical="https://knsoft.dev/services/training"
        structuredData={structuredData}
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
                IT Training & Professional Development
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Empower your team with cutting-edge technology skills through our comprehensive training programs. 
                From software development to specialized certifications, we provide hands-on learning experiences 
                that drive career growth and organizational success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Transform Skills into Success
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our training programs are designed by industry experts to bridge the gap between theoretical 
                  knowledge and practical application. Whether you're looking to upskill your team or advance 
                  individual careers, we offer tailored training solutions that deliver measurable results.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With a focus on real-world projects and industry best practices, our courses ensure participants 
                  gain the confidence and competence needed to excel in today's competitive technology landscape.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {trainingServices.map((service, index) => (
                  <Card key={index} className="text-center p-4 card-glow hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-sm">{service.name}</h3>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
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
                Key <span className="text-gradient">Benefits</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Invest in professional development and unlock your team's full potential with our comprehensive training programs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-card rounded-lg border"
                >
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Elevate Your Skills?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join our training programs and accelerate your career growth with industry-leading expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="gradient" size="lg">
                  <Link to="/contact">
                    Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">View All Services</Link>
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
