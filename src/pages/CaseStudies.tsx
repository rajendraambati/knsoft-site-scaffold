import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Breadcrumbs } from "@/components/SEO/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Building2, 
  Calendar, 
  Target, 
  TrendingUp, 
  Code, 
  MapPin,
  Clock,
  CheckCircle
} from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Digital Banking Platform Transformation",
    client: {
      sector: "Financial Services",
      region: "Middle East",
      size: "Fortune 500 Bank"
    },
    problem: "Legacy banking system with outdated infrastructure, poor user experience, and inability to support modern digital banking features. Customer satisfaction was declining due to slow transaction processing and limited mobile capabilities.",
    solution: "Designed and implemented a comprehensive digital banking platform with microservices architecture, real-time transaction processing, advanced security features, and intuitive mobile-first UI/UX design.",
    impact: {
      kpis: [
        "70% increase in customer satisfaction scores",
        "85% reduction in transaction processing time",
        "300% increase in mobile app adoption",
        "40% reduction in operational costs"
      ]
    },
    timeline: "18 months",
    techStack: [
      "React Native",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Kubernetes",
      "Redis",
      "JWT Authentication"
    ],
    featured: true
  },
  {
    id: 2,
    title: "E-commerce Marketplace Revolution",
    client: {
      sector: "Retail & E-commerce",
      region: "North America",
      size: "Mid-size Retailer"
    },
    problem: "Outdated e-commerce platform struggling with scalability issues, poor search functionality, and limited payment gateway integrations. High cart abandonment rates and declining sales conversion.",
    solution: "Built a modern, scalable e-commerce marketplace with AI-powered product recommendations, advanced search capabilities, multiple payment gateways, and comprehensive admin dashboard.",
    impact: {
      kpis: [
        "120% increase in online sales",
        "45% reduction in cart abandonment",
        "90% improvement in page load times",
        "200% increase in customer retention"
      ]
    },
    timeline: "12 months",
    techStack: [
      "React",
      "Next.js",
      "Stripe API",
      "MongoDB",
      "Express.js",
      "AWS S3",
      "Elasticsearch",
      "GraphQL"
    ],
    featured: false
  },
  {
    id: 3,
    title: "Healthcare Management System",
    client: {
      sector: "Healthcare",
      region: "Europe",
      size: "Regional Hospital Network"
    },
    problem: "Fragmented patient data across multiple systems, inefficient appointment scheduling, lack of telemedicine capabilities, and compliance challenges with healthcare regulations.",
    solution: "Developed an integrated healthcare management system with unified patient records, automated scheduling, telemedicine platform, and HIPAA-compliant data handling.",
    impact: {
      kpis: [
        "60% reduction in appointment scheduling time",
        "95% improvement in patient data accessibility",
        "80% increase in telemedicine consultations",
        "100% compliance with healthcare regulations"
      ]
    },
    timeline: "15 months",
    techStack: [
      "Angular",
      "Python Django",
      "PostgreSQL",
      "Azure",
      "WebRTC",
      "HL7 FHIR",
      "OAuth 2.0",
      "Docker"
    ],
    featured: false
  },
  {
    id: 4,
    title: "Smart Manufacturing Analytics",
    client: {
      sector: "Manufacturing",
      region: "Asia Pacific",
      size: "Industrial Conglomerate"
    },
    problem: "Lack of real-time visibility into manufacturing processes, inefficient resource allocation, high downtime costs, and difficulty in predictive maintenance planning.",
    solution: "Implemented IoT-enabled smart manufacturing analytics platform with real-time monitoring, predictive maintenance algorithms, and automated reporting dashboards.",
    impact: {
      kpis: [
        "35% reduction in equipment downtime",
        "50% improvement in resource utilization",
        "25% increase in overall equipment effectiveness",
        "$2M annual cost savings achieved"
      ]
    },
    timeline: "10 months",
    techStack: [
      "Vue.js",
      "Python FastAPI",
      "InfluxDB",
      "Apache Kafka",
      "TensorFlow",
      "AWS IoT",
      "Grafana",
      "MQTT"
    ],
    featured: true
  },
  {
    id: 5,
    title: "Educational Learning Management System",
    client: {
      sector: "Education Technology",
      region: "Global",
      size: "International University"
    },
    problem: "Fragmented learning tools, poor student engagement, lack of analytics for learning outcomes, and difficulty in managing remote learning during the pandemic.",
    solution: "Created a comprehensive LMS with interactive content delivery, gamification features, advanced analytics, and seamless video conferencing integration.",
    impact: {
      kpis: [
        "85% increase in student engagement",
        "70% improvement in course completion rates",
        "90% reduction in technical support tickets",
        "150% increase in platform active users"
      ]
    },
    timeline: "14 months",
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "AWS Lambda",
      "Zoom API",
      "Chart.js",
      "Firebase"
    ],
    featured: false
  }
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Case Studies", href: "/case-studies" }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Case Studies - KNSOFT Technologies Success Stories"
        description="Explore our successful IT projects and digital transformations. Real client results, detailed case studies showing our expertise in web development, AI automation, and digital solutions."
        keywords="case studies, IT projects, digital transformation, web development success stories, client results, KNSOFT portfolio"
      />
      
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumbs */}
        <div className="bg-muted/30 py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

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
                Client Success Stories
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Discover how we've helped businesses across industries achieve digital transformation success. 
                Our case studies showcase real challenges, innovative solutions, and measurable results that 
                demonstrate our expertise in delivering cutting-edge IT solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Proven Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  <span>Measurable Impact</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Client Success</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`card-elegant ${study.featured ? 'ring-2 ring-primary/20' : ''}`}>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                          {study.featured && (
                            <Badge variant="secondary" className="mb-4">
                              Featured Project
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      {/* Client Information */}
                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-primary" />
                          <div>
                            <p className="text-sm font-medium">Sector</p>
                            <p className="text-sm text-muted-foreground">{study.client.sector}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <div>
                            <p className="text-sm font-medium">Region</p>
                            <p className="text-sm text-muted-foreground">{study.client.region}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <div>
                            <p className="text-sm font-medium">Timeline</p>
                            <p className="text-sm text-muted-foreground">{study.timeline}</p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Problem */}
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Target className="h-4 w-4 text-destructive" />
                          Challenge
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.problem}
                        </p>
                      </div>

                      <Separator />

                      {/* Solution */}
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Solution
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.solution}
                        </p>
                      </div>

                      <Separator />

                      {/* Impact */}
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          Measurable Impact
                        </h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {study.impact.kpis.map((kpi, kpiIndex) => (
                            <div key={kpiIndex} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{kpi}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      {/* Tech Stack */}
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Code className="h-4 w-4 text-primary" />
                          Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {study.techStack.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready to Write Your <span className="text-gradient">Success Story?</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Let's discuss how we can help transform your business with innovative IT solutions. 
                Contact us today to start your digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gradient-primary rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300"
                >
                  <Clock className="mr-2 h-5 w-5" />
                  Schedule a Consultation
                </motion.a>
                <motion.a
                  href="/services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary bg-background border border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Explore Our Services
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}