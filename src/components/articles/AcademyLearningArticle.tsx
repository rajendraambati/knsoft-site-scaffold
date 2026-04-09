import { motion } from "framer-motion";
import { X, CheckCircle, TrendingUp, Users, BookOpen, Award, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import academyImage from "@/assets/academy-learning-management-system.jpg";

interface AcademyLearningArticleProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AcademyLearningArticle({ isOpen, onClose }: AcademyLearningArticleProps) {
  if (!isOpen) return null;

  const keyMetrics = [
    { icon: TrendingUp, label: "Learner Engagement", value: "65%", description: "increase in engagement" },
    { icon: Clock, label: "Admin Workload", value: "50%", description: "reduction in manual work" },
    { icon: CheckCircle, label: "Assessment Speed", value: "42%", description: "faster grading turnaround" },
    { icon: Award, label: "Course Completion", value: "38%", description: "higher completion rates" }
  ];

  const features = [
    { icon: BookOpen, title: "Course Management", description: "Simple course creation with multimedia content support" },
    { icon: Users, title: "Student Enrollment", description: "Centralized database of learners with progress tracking" },
    { icon: CheckCircle, title: "Assessments & Quizzes", description: "Automated quizzes, assignments, and grading" },
    { icon: Award, title: "Digital Certificates", description: "Instant certificate generation upon course completion" },
    { icon: TrendingUp, title: "Analytics & Reports", description: "Real-time data for instructors and administrators" },
    { icon: Shield, title: "Security & Compliance", description: "GDPR-compliant with role-based access control" }
  ];

  const techStack = [
    "React.js", "Node.js", "PostgreSQL", "GraphQL/REST APIs", "AWS/Azure", "Flutter"
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
            <h1 className="text-2xl font-bold">Academy Learning Management System</h1>
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
              src={academyImage} 
              alt="Academy Learning Management System Interface"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <Badge variant="secondary" className="mb-2">Case Study</Badge>
              <h2 className="text-xl font-semibold">Modern Digital Learning Platform</h2>
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
                The Academy Learning Management System (LMS) was designed to provide a modern, centralized platform 
                for managing online courses, student learning, and instructor interactions. It streamlines course creation, 
                enrollment, assessments, and certifications. Post-implementation, institutions reported significant improvements 
                in learner engagement, administrative efficiency, and assessment turnaround times.
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
                  <p className="text-sm">Difficulty managing large-scale online classes and student data</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm">Time-consuming course creation and enrollment processes</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm">Lack of automated grading and feedback systems</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm">Limited visibility into student progress and performance</p>
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
                  <p className="text-sm">Digital-first learning experience with modern interface</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Easy course creation tools for instructors</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Automated assessments, grading, and certification</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Real-time analytics for tracking student performance</p>
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
              <CardDescription>Modern, scalable architecture for optimal performance</CardDescription>
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
                  [Instructor Portal] → [Course Creation] → [Student Enrollment] → [Assessments & Quizzes] → [Certificates] → [Analytics Dashboard]
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
                    <p className="text-sm text-muted-foreground">Requirement analysis and platform setup</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-8 w-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                  <div>
                    <h4 className="font-semibold">Phase 2 (2–4 months)</h4>
                    <p className="text-sm text-muted-foreground">Course creation and enrollment modules</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-8 w-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                  <div>
                    <h4 className="font-semibold">Phase 3 (4–6 months)</h4>
                    <p className="text-sm text-muted-foreground">Assessment automation and certificates</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-8 w-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold">4</div>
                  <div>
                    <h4 className="font-semibold">Phase 4 (6–8 months)</h4>
                    <p className="text-sm text-muted-foreground">Analytics dashboard and full rollout</p>
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
                  <h4 className="font-semibold">AI & Personalization</h4>
                  <p className="text-sm text-muted-foreground">AI-based personalized learning recommendations</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Virtual Integration</h4>
                  <p className="text-sm text-muted-foreground">Integration with virtual classrooms and video conferencing</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Gamification</h4>
                  <p className="text-sm text-muted-foreground">Gamification features to boost engagement</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Multi-Language Support</h4>
                  <p className="text-sm text-muted-foreground">Multi-language and multi-academy support</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conclusion */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">Conclusion</h3>
              <p className="text-muted-foreground leading-relaxed">
                The Academy Learning Management System empowered institutions to digitize their training delivery, 
                automate administrative workflows, and improve learner success rates, creating a scalable and modern 
                education ecosystem that serves both instructors and students effectively.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}