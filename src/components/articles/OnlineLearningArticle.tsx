import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";
import { 
  Users, 
  Shield, 
  BookOpen, 
  Monitor,
  BarChart3,
  Clock,
  CheckCircle,
  TrendingUp,
  Eye,
  FileText,
  Zap,
  Globe
} from "lucide-react";
import onlineLearningImage from "../../assets/online-learning-examination-system.jpg";

interface OnlineLearningArticleProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OnlineLearningArticle({ isOpen, onClose }: OnlineLearningArticleProps) {
  const painPoints = [
    "Lack of centralized LMS and examination tools",
    "Difficulty in ensuring secure and fair online assessments", 
    "Limited interaction between students and instructors",
    "Manual workload for grading, attendance, and course tracking"
  ];

  const objectives = [
    "Deliver a comprehensive e-learning and exam management solution",
    "Ensure exam integrity with proctoring and anti-cheating features",
    "Improve learning outcomes and student engagement", 
    "Automate administration and performance reporting"
  ];

  const coreCapabilities = [
    {
      icon: BookOpen,
      title: "Learning Management System (LMS)",
      description: "Digital classrooms, video lectures, study materials, and attendance tracking"
    },
    {
      icon: Shield,
      title: "Examination Management", 
      description: "Online exams with AI-proctored monitoring, question banks, and instant result generation"
    },
    {
      icon: BarChart3,
      title: "Grading & Reporting",
      description: "Automated grading and progress analytics"
    },
    {
      icon: Users,
      title: "Student & Faculty Portals",
      description: "Secure, role-based access for different stakeholders"
    },
    {
      icon: Monitor,
      title: "Collaboration Tools",
      description: "Live chat, discussion forums, and interactive quizzes"
    }
  ];

  const techStack = [
    { category: "Frontend", tech: "React for web, Flutter for mobile apps" },
    { category: "Backend", tech: "Node.js with REST/GraphQL APIs" },
    { category: "Database", tech: "PostgreSQL (structured data), MongoDB (exam sessions, logs)" },
    { category: "Integrations", tech: "Zoom/MS Teams APIs, Google Classroom sync, Payment gateways" },
    { category: "Infrastructure", tech: "AWS cloud with autoscaling, CI/CD pipelines" },
    { category: "Security", tech: "SSL/TLS 1.3 encryption, AES-256, GDPR compliance, role-based access" }
  ];

  const timeline = [
    { phase: "Phase 1 (0–2 months)", task: "Requirement gathering and LMS setup" },
    { phase: "Phase 2 (2–4 months)", task: "Exam management and AI proctoring integration" },
    { phase: "Phase 3 (4–6 months)", task: "Analytics dashboards and reporting" },
    { phase: "Phase 4 (6–8 months)", task: "Institution-wide rollout and faculty training" }
  ];

  const results = [
    { metric: "Student Engagement", value: "52%", description: "Higher participation in digital classes", icon: TrendingUp },
    { metric: "Admin Efficiency", value: "45%", description: "Reduction in administrative workload", icon: Clock },
    { metric: "Exam Processing", value: "38%", description: "Faster exam cycle with enhanced integrity", icon: Shield },
    { metric: "Faculty Productivity", value: "30%", description: "Productivity boost for teaching staff", icon: Users }
  ];

  const futureRoadmap = [
    "AI-driven personalized learning paths",
    "VR/AR classrooms for immersive education", 
    "Blockchain-based credential verification",
    "Advanced analytics for predictive performance insights"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Online Learning and Examination Management Software
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8">
          {/* Executive Summary */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <img 
                src={onlineLearningImage} 
                alt="Online Learning and Examination Management Software"
                className="w-full h-full object-cover"
              />
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Executive Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The Online Learning and Examination Management Software was designed to provide a seamless digital education ecosystem for schools, colleges, and training institutions. It enables interactive learning, streamlined course management, and secure online examinations. After implementation, institutions reported significant improvements across all key metrics within the first academic year.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Client Context & Problems */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Client Context & Problem
                </CardTitle>
                <CardDescription>
                  Educational institutions faced challenges in delivering effective online learning, maintaining exam integrity, and managing administrative workloads. Pandemic-driven remote learning accelerated the need for a unified digital platform.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Pain Points</h4>
                  <div className="grid gap-2">
                    {painPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Objectives</h4>
                  <div className="grid gap-2">
                    {objectives.map((objective, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{objective}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Core Capabilities */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Solution Overview - Core Capabilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {coreCapabilities.map((capability, index) => (
                    <Card key={index} className="border-l-4 border-l-primary">
                      <CardContent className="pt-4">
                        <div className="flex items-start gap-3">
                          <capability.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-sm">{capability.title}</h4>
                            <p className="text-xs text-muted-foreground mt-1">{capability.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Technology Stack */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Architecture & Technology Stack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {techStack.map((item, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2 p-3 bg-muted/50 rounded-lg">
                      <Badge variant="secondary" className="w-fit">
                        {item.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{item.tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Implementation Timeline */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Implementation Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {timeline.map((phase, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 border rounded-lg">
                      <Badge variant="outline">{phase.phase}</Badge>
                      <span className="text-sm text-muted-foreground">{phase.task}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Results */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-4"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Results & Impact (First Academic Year)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {results.map((result, index) => (
                    <Card key={index} className="text-center">
                      <CardContent className="pt-4">
                        <result.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-primary">{result.value}</div>
                        <h4 className="font-semibold text-sm">{result.metric}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{result.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Future Roadmap */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-4"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Future Roadmap
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {futureRoadmap.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-muted/30 rounded">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Call to Action */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="space-y-4"
          >
            <Card className="bg-gradient-to-r from-primary/10 to-primary-glow/10 border-primary/20">
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-bold mb-2">Ready to Transform Education?</h3>
                <p className="text-muted-foreground mb-4">
                  We design smart e-learning and exam platforms that transform education delivery with innovation, scalability, and security.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                    Contact Us for Demo
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                    View Similar Projects
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </DialogContent>
    </Dialog>
  );
}