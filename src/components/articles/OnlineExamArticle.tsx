import { motion } from "framer-motion";
import { X, CheckCircle, TrendingUp, Users, FileText, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import examImage from "@/assets/online-exam-system.jpg";

interface OnlineExamArticleProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OnlineExamArticle({ isOpen, onClose }: OnlineExamArticleProps) {
  if (!isOpen) return null;

  const keyMetrics = [
    { icon: Clock, label: "Admin Time", value: "55%", description: "reduction in exam setup" },
    { icon: TrendingUp, label: "Grading Speed", value: "60%", description: "faster turnaround" },
    { icon: Users, label: "Student Satisfaction", value: "35%", description: "increase in ratings" },
    { icon: CheckCircle, label: "Error Reduction", value: "30%", description: "fewer exam errors" }
  ];

  const features = [
    { icon: FileText, title: "Exam Creation & Scheduling", description: "User-friendly interface for instructors to set exams" },
    { icon: Award, title: "Question Bank", description: "Centralized repository with categorization and randomization" },
    { icon: CheckCircle, title: "Automated Grading", description: "Instant evaluation for objective questions and assisted grading" },
    { icon: Shield, title: "Secure Proctoring", description: "AI-based monitoring, browser lockdown, and cheating detection" },
    { icon: TrendingUp, title: "Results & Analytics", description: "Real-time scorecards, detailed reports, and progress tracking" },
    { icon: Users, title: "Student Experience", description: "Seamless digital examination interface with transparency" }
  ];

  const techStack = [
    "Angular/React", "Node.js", "PostgreSQL", "REST/GraphQL APIs", "AWS/Azure", "Flutter"
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-background rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-background border-b p-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Online Exam System</h1>
            <p className="text-muted-foreground">Comprehensive Case Study</p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6 space-y-8">
          {/* Hero Image */}
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img 
              src={examImage} 
              alt="Online Exam System Interface"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <Badge variant="secondary" className="mb-2">Case Study</Badge>
              <h2 className="text-xl font-semibold">Secure Digital Examination Platform</h2>
            </div>
          </div>

          {/* Executive Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Executive Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                The Online Exam System was developed to provide secure, efficient, and scalable digital examination 
                management for educational institutions, training centers, and certification bodies. It eliminates 
                manual exam setups, reduces administrative overhead, and ensures academic integrity through advanced 
                proctoring. The platform has transformed how institutions conduct assessments in the digital age.
              </p>
            </CardContent>
          </Card>

          {/* Key Metrics */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Key Results</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {keyMetrics.map((metric, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-4">
                    <metric.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-destructive">Challenges Faced</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm">Complex manual exam scheduling and management</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm">Time-consuming grading and results processing</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm">Risk of malpractice in remote assessments</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm">Lack of centralized performance tracking</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Solution Delivered</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Automated exam scheduling, delivery, and grading</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Enhanced security and fairness in remote exams</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Seamless digital experience for students</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Real-time analytics and reporting for administrators</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Core Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-4">
                    <feature.icon className="h-6 w-6 text-primary mb-3" />
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <Card>
            <CardHeader>
              <CardTitle>Technology Stack</CardTitle>
              <CardDescription>Secure, scalable architecture for examination management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <Badge key={index} variant="secondary">{tech}</Badge>
                ))}
              </div>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">System Workflow</h4>
                <div className="text-sm text-muted-foreground font-mono">
                  [Instructor Portal] → [Exam Creation & Question Bank] → [Exam Delivery & Proctoring] → [Automated Grading] → [Results & Analytics]
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Features */}
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Security & Compliance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Data Protection</h4>
                  <p className="text-sm text-muted-foreground">End-to-end encryption and GDPR compliance</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">AI Monitoring</h4>
                  <p className="text-sm text-muted-foreground">Advanced cheating detection and proctoring</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Access Control</h4>
                  <p className="text-sm text-muted-foreground">Role-based permissions and secure authentication</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Browser Security</h4>
                  <p className="text-sm text-muted-foreground">Lockdown mode and secure exam environment</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Implementation Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Implementation Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-8 w-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                  <div>
                    <h4 className="font-semibold">Phase 1 (0–2 months)</h4>
                    <p className="text-sm text-muted-foreground">Requirement gathering and core setup</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-8 w-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                  <div>
                    <h4 className="font-semibold">Phase 2 (2–4 months)</h4>
                    <p className="text-sm text-muted-foreground">Exam scheduling and question bank deployment</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-8 w-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                  <div>
                    <h4 className="font-semibold">Phase 3 (4–6 months)</h4>
                    <p className="text-sm text-muted-foreground">Automated grading and proctoring integration</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-8 w-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold">4</div>
                  <div>
                    <h4 className="font-semibold">Phase 4 (6–8 months)</h4>
                    <p className="text-sm text-muted-foreground">Analytics dashboards and full rollout</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Future Roadmap */}
          <Card>
            <CardHeader>
              <CardTitle>Future Roadmap</CardTitle>
              <CardDescription>Upcoming enhancements and features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">AI Recommendations</h4>
                  <p className="text-sm text-muted-foreground">AI-driven personalized exam recommendations</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">LMS Integration</h4>
                  <p className="text-sm text-muted-foreground">Deeper integration with learning management systems</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Large-Scale Exams</h4>
                  <p className="text-sm text-muted-foreground">Support for nationwide online examinations</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Multi-Language</h4>
                  <p className="text-sm text-muted-foreground">Multilingual exam interfaces and support</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conclusion */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">Conclusion</h3>
              <p className="text-muted-foreground leading-relaxed">
                The Online Exam System modernized the examination process by reducing inefficiencies, ensuring fairness, 
                and improving student satisfaction. It enabled institutions to scale their assessments digitally with 
                transparency and accuracy, setting new standards for secure online examinations.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}