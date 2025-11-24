import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Users, BookOpen, CheckCircle, Award, Target, TrendingUp, Code, Star, Globe } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEOHead } from "@/components/SEO/SEOHead";
import vijayaBhanuImage from "@/assets/vijaya-bhanu.jpg";
import nancySevaganImage from "@/assets/nancy-sevagan.png";

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

const coreExpertise = [
  "Communication & Accentuation",
  "Customer Service & Selling Skills",
  "Leadership Development & Team Building",
  "Campus to Corporate & Train-the-Trainer (TTT)",
  "Retail, Product & POS Training"
];

const awards = [
  "Best Trainer – RAYE",
  "Excellence in Training – PMKVY",
  "Outstanding Contribution – DDU-GKY"
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

        {/* Expert Trainers Section */}
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
                Meet Your <span className="text-gradient">Expert Trainers</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Learn from industry-leading professionals with decades of experience
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto space-y-8">
              {/* Vijaya Bhanu Profile */}
              <Card className="overflow-hidden card-glow">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-[300px_1fr] gap-8 p-8 md:p-12">
                    {/* Trainer Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center"
                    >
                      <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg mb-4">
                        <img 
                          src={vijayaBhanuImage} 
                          alt="Vijaya Bhanu - Certified Soft Skills & Business Communication Trainer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-center mb-2">Vijaya Bhanu</h3>
                      <p className="text-sm text-muted-foreground text-center mb-4">
                        Certified Soft Skills & Business Communication Trainer
                      </p>
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Star className="h-5 w-5 fill-current" />
                        <span className="font-semibold">5000+ Training Sessions</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Globe className="h-4 w-4" />
                        <span className="text-sm">English, Hindi, Telugu, Tamil</span>
                      </div>
                    </motion.div>

                    {/* Trainer Details */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="space-y-6"
                    >
                      <div>
                        <p className="text-base leading-relaxed text-muted-foreground mb-4">
                          With a rich career spanning over two decades, Vijaya Bhanu stands out as a highly accomplished trainer who has transformed thousands of careers through her impactful training style. Having conducted <strong>5000+ training sessions</strong> across India, she brings unmatched expertise, energy, and practical insights to every program.
                        </p>
                        <p className="text-base leading-relaxed text-muted-foreground">
                          Vijaya Bhanu has collaborated with leading corporate giants such as <strong>Infosys, Amazon, ICICI, L'Oréal</strong>, and numerous retail and service brands. Her training sessions are known for being interactive, engaging, and tailor-made to meet the unique needs of diverse audiences.
                        </p>
                      </div>

                      {/* Core Expertise */}
                      <div>
                        <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <Target className="h-5 w-5 text-primary" />
                          Core Expertise
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {coreExpertise.map((expertise, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                              <span className="text-sm">{expertise}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Awards */}
                      <div>
                        <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary" />
                          Awards & Recognition
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {awards.map((award, index) => (
                            <div key={index} className="bg-primary/10 px-4 py-2 rounded-full">
                              <span className="text-sm font-medium">{award}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* What Makes Training Unique */}
                      <div className="bg-secondary/50 p-6 rounded-lg">
                        <h4 className="text-lg font-bold mb-3">What Makes Her Training Unique?</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Vijaya Bhanu's approach blends real-world experience, behavioral insights, and learner-centric methods to ensure measurable outcomes. Every session is designed to build confidence, enhance communication, and elevate professional performance with practical tools that can be applied immediately at work.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>

              {/* Nancy Sevagan Profile */}
              <Card className="overflow-hidden card-glow">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-[300px_1fr] gap-8 p-8 md:p-12">
                    {/* Trainer Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center"
                    >
                      <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg mb-4">
                        <img 
                          src={nancySevaganImage} 
                          alt="Nancy Sevagan - Assistant Vice President, Head of Relationship Banking at HDFC Bank"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-center mb-2">Nancy Sevagan</h3>
                      <p className="text-sm text-muted-foreground text-center mb-4">
                        Vice President - Sales Division
                      </p>
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <TrendingUp className="h-5 w-5" />
                        <span className="font-semibold">20 Years Experience</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Award className="h-4 w-4" />
                        <span className="text-sm">Pan-India #1 Performer</span>
                      </div>
                    </motion.div>

                    {/* Trainer Details */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="space-y-6"
                    >
                      <div>
                        <p className="text-base leading-relaxed text-muted-foreground mb-4">
                          Nancy Sevagan is an accomplished sales and relationship management professional with nearly <strong>20 years of experience</strong> across banking, telecom, FMCG, and HR. She currently serves as Assistant Vice President – Head of Relationship Banking at <strong>HDFC Bank</strong>, where she leads high-value corporate and HNI portfolios.
                        </p>
                        <p className="text-base leading-relaxed text-muted-foreground">
                          Nancy has consistently delivered top results, including being ranked <strong>Pan-India #1 in Internet Payment Gateway</strong> for three consecutive years and managing portfolios worth <strong>INR 1500 Cr</strong>. Her career highlights include leadership roles at Airtel India, Bank of Baroda, ICICI Bank, Oriflame, and Hindustan Unilever.
                        </p>
                      </div>

                      {/* Core Expertise */}
                      <div>
                        <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <Target className="h-5 w-5 text-primary" />
                          Core Expertise
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm">Sales & Relationship Management</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm">Corporate & HNI Portfolio Management</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm">Digital Banking & Adoption</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm">Client Acquisition & Retention</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm">Business Development & Growth</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm">Account Management Excellence</span>
                          </div>
                        </div>
                      </div>

                      {/* Career Highlights */}
                      <div>
                        <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary" />
                          Career Highlights
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          <div className="bg-primary/10 px-4 py-2 rounded-full">
                            <span className="text-sm font-medium">HDFC Bank</span>
                          </div>
                          <div className="bg-primary/10 px-4 py-2 rounded-full">
                            <span className="text-sm font-medium">Airtel India</span>
                          </div>
                          <div className="bg-primary/10 px-4 py-2 rounded-full">
                            <span className="text-sm font-medium">Bank of Baroda</span>
                          </div>
                          <div className="bg-primary/10 px-4 py-2 rounded-full">
                            <span className="text-sm font-medium">ICICI Bank</span>
                          </div>
                          <div className="bg-primary/10 px-4 py-2 rounded-full">
                            <span className="text-sm font-medium">Oriflame</span>
                          </div>
                          <div className="bg-primary/10 px-4 py-2 rounded-full">
                            <span className="text-sm font-medium">Hindustan Unilever</span>
                          </div>
                        </div>
                      </div>

                      {/* What Makes Training Unique */}
                      <div className="bg-secondary/50 p-6 rounded-lg">
                        <h4 className="text-lg font-bold mb-3">Professional Strengths</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Nancy is recognized for her <strong>client-centric approach</strong>, strong account management skills, and ability to build lasting business relationships. Her extensive experience across diverse industries enables her to deliver training that drives growth, enhances client satisfaction, and builds high-performing teams.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
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
