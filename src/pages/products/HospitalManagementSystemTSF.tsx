import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Breadcrumbs } from "@/components/SEO/Breadcrumbs";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Calendar, Target, CheckCircle, TrendingUp, Shield, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import hospitalSystemImage from "@/assets/hospital-management-system-tsf.jpg";

const HospitalManagementSystemTSF = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Healthcare & Medical", href: "/products/healthcare-medical" },
    { label: "Hospital Management System TSF" }
  ];

  const keyResults = [
    { metric: "47%", description: "Faster patient admissions" },
    { metric: "41%", description: "Reduction in administrative overhead" },
    { metric: "35%", description: "Growth in patient satisfaction" },
    { metric: "30%", description: "Fewer insurance claim rejections" }
  ];

  const keyFeatures = [
    "Integrated EHR and patient management",
    "Automated billing with real-time claim tracking", 
    "Pharmacy and diagnostic lab modules",
    "Staff and payroll management",
    "Analytics dashboards for administrators"
  ];

  const timeline = [
    { phase: "Phase 1 (0–3 months)", description: "Requirement analysis and workflow mapping" },
    { phase: "Phase 2 (3–6 months)", description: "Core patient management and billing modules" },
    { phase: "Phase 3 (6–9 months)", description: "Pharmacy, labs, and staff management integration" },
    { phase: "Phase 4 (9–12 months)", description: "Dashboards, analytics, and full hospital rollout" }
  ];

  return (
    <>
      <SEOHead
        title="Hospital Management System TSF - Healthcare Digital Transformation | KNSOFT"
        description="Comprehensive case study of Hospital Management System TSF featuring 47% faster admissions, 41% cost reduction, and 35% improved patient satisfaction. Complete EHR, billing, and analytics solution."
        keywords="hospital management system, healthcare software, EHR system, patient management, medical billing, healthcare analytics, digital transformation"
        canonical="https://knsoft.in/products/hospital-management-system-tsf"
      />
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Back Button */}
          <div className="mb-6">
            <Button variant="ghost" asChild className="hover:bg-primary/10">
              <Link to="/products/healthcare-medical" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Healthcare Solutions
              </Link>
            </Button>
          </div>

          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <Badge variant="secondary" className="mb-4">
                  Case Study
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Hospital Management System TSF
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Modernizing healthcare operations with scalability, transparency, and flexibility (TSF) - delivering 47% faster admissions and 35% improved patient satisfaction.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Link to="/contact" className="flex items-center gap-2">
                      Get Similar Solution
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex-1 max-w-lg">
                <img
                  src={hospitalSystemImage}
                  alt="Hospital Management System TSF - Healthcare Digital Platform"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Key Results */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Key Results (First Year)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {keyResults.map((result, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-primary/5">
                    <div className="text-3xl font-bold text-primary mb-2">{result.metric}</div>
                    <div className="text-sm text-muted-foreground">{result.description}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-destructive" />
                  Problem Statement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Hospitals faced challenges managing growing patient volumes, fragmented systems across departments, and increasing compliance demands.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Key Pain Points:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Disconnected systems across admissions, pharmacy, labs, and billing</li>
                      <li>• Inefficient patient flow management causing delays</li>
                      <li>• Slow and error-prone billing and insurance processing</li>
                      <li>• Lack of data-driven decision-making tools</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Solution Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Unified hospital management ecosystem integrating patient care, administration, and financial workflows into a single digital platform.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Core Capabilities:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Digital EHR system covering OPD, IPD, and emergency care</li>
                      <li>• Automated billing, claims tracking, and compliance</li>
                      <li>• Real-time pharmacy and lab integration</li>
                      <li>• Resource and staff management tools</li>
                      <li>• Analytics dashboards with clinical and financial KPIs</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technology Architecture */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Technology Stack & Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">Technology Stack</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Frontend:</strong> Angular for web; Flutter for mobile apps</p>
                    <p><strong>Backend:</strong> Node.js/NestJS with REST APIs</p>
                    <p><strong>Database:</strong> PostgreSQL for structured data; MongoDB for unstructured records</p>
                    <p><strong>Infrastructure:</strong> Kubernetes clusters on AWS with CI/CD</p>
                    <p><strong>Security:</strong> HIPAA, GDPR compliance; AES-256 encryption</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">System Flow</h4>
                  <div className="bg-muted p-4 rounded-lg text-sm font-mono">
                    <div>[Patient Admission] →</div>
                    <div className="ml-4">[EHR System] →</div>
                    <div className="ml-8">[Treatment & Pharmacy/Lab] →</div>
                    <div className="ml-12">[Billing & Insurance] →</div>
                    <div className="ml-16">[Analytics Dashboard] →</div>
                    <div className="ml-20">[Discharge & Follow-up]</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Features */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-primary/5">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Implementation Timeline */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Implementation Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {timeline.map((phase, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold">{phase.phase}</h4>
                      <p className="text-sm text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Security & Compliance */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Security & Compliance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Compliance Standards</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• HIPAA and GDPR compliant architecture</li>
                    <li>• AES-256 encryption and TLS 1.3</li>
                    <li>• Role-based access control</li>
                    <li>• Immutable compliance audit trails</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Security Features</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• End-to-end encrypted data transmission</li>
                    <li>• Multi-factor authentication</li>
                    <li>• Regular security audits and penetration testing</li>
                    <li>• Secure backup and disaster recovery</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lessons Learned & Future Roadmap */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Lessons Learned</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Unified platforms reduce fragmentation across departments</li>
                  <li>• Faster claims processing improves financial health</li>
                  <li>• Analytics empower real-time decision-making</li>
                  <li>• Patient satisfaction is driven by speed and transparency</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Future Roadmap</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• AI-driven clinical decision support systems</li>
                  <li>• IoT device integration for patient monitoring</li>
                  <li>• Blockchain for secure record sharing</li>
                  <li>• Multi-hospital group management</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="text-center">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Hospital Operations?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can implement a similar solution for your healthcare facility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/products/healthcare-medical">View More Healthcare Solutions</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default HospitalManagementSystemTSF;