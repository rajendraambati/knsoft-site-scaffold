import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";
import { 
  School,
  Users,
  CreditCard,
  FileText,
  MessageSquare,
  Calendar,
  BarChart3,
  Clock,
  CheckCircle,
  TrendingUp,
  Eye,
  Database,
  Shield,
  Bell,
  Globe,
  UserCheck,
  BookOpen,
  Calculator,
  Phone
} from "lucide-react";
import proSchoolManagementImage from "../../assets/pro-school-management-system.jpg";

interface ProSchoolManagementArticleProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProSchoolManagementArticle({ isOpen, onClose }: ProSchoolManagementArticleProps) {
  const painPoints = [
    "Manual student record keeping and attendance tracking",
    "Inefficient fee collection and accounting processes",
    "Lack of a central communication system for parents and teachers",
    "Time-consuming exam and report card generation"
  ];

  const objectives = [
    "Provide a centralized platform for all school operations",
    "Automate academic and administrative workflows",
    "Improve transparency and communication with parents",
    "Enhance overall efficiency and student performance tracking"
  ];

  const coreCapabilities = [
    {
      icon: Database,
      title: "Student Information System (SIS)",
      description: "Centralized student profiles, attendance, and academic records"
    },
    {
      icon: CreditCard,
      title: "Fee & Accounting Module",
      description: "Automated invoicing, online payments, and real-time tracking"
    },
    {
      icon: FileText,
      title: "Examination & Report Cards",
      description: "Digital exam scheduling, evaluation, and instant report generation"
    },
    {
      icon: MessageSquare,
      title: "Parent & Teacher Portals",
      description: "Secure communication channels with real-time notifications"
    },
    {
      icon: Calendar,
      title: "Timetable & Resource Management",
      description: "Automated scheduling and resource allocation"
    }
  ];

  const techStack = [
    { category: "Frontend", tech: "React.js web, Flutter mobile apps" },
    { category: "Backend", tech: "Node.js with REST APIs" },
    { category: "Database", tech: "PostgreSQL for structured data, Redis for caching" },
    { category: "Integrations", tech: "Payment gateways, SMS/Email APIs, LMS integration" },
    { category: "Infrastructure", tech: "Cloud-hosted (AWS/Azure) with scalable architecture" },
    { category: "Security", tech: "GDPR-compliant, SSL/TLS encryption, role-based access control" }
  ];

  const timeline = [
    { phase: "Phase 1 (0–2 months)", task: "Requirement analysis and student data migration" },
    { phase: "Phase 2 (2–4 months)", task: "Fee management and accounting module integration" },
    { phase: "Phase 3 (4–6 months)", task: "Exam management and parent portals" },
    { phase: "Phase 4 (6–8 months)", task: "Analytics dashboards and full rollout" }
  ];

  const keyFeatures = [
    { icon: Users, title: "Centralized student and staff information" },
    { icon: CreditCard, title: "Online fee collection and accounting" },
    { icon: UserCheck, title: "Automated attendance and report generation" },
    { icon: MessageSquare, title: "Parent-teacher communication portals" },
    { icon: BarChart3, title: "Analytics dashboards for administrators" }
  ];

  const results = [
    { metric: "Administrative Workload", value: "58%", description: "Reduction in admin time", icon: Clock },
    { metric: "Fee Processing", value: "46%", description: "Faster fee collection", icon: CreditCard },
    { metric: "Parent Engagement", value: "40%", description: "Stronger parent participation", icon: Users },
    { metric: "Academic Tracking", value: "35%", description: "Better academic monitoring", icon: BarChart3 }
  ];

  const securityFeatures = [
    "GDPR-compliant student data management",
    "Role-based access for staff, parents, and administrators",
    "End-to-end encryption for sensitive data",
    "Audit logs for transparency"
  ];

  const kpis = [
    "Reduction in manual administrative work",
    "Speed of fee collection",
    "Parent-teacher communication frequency",
    "Academic performance tracking efficiency"
  ];

  const lessonsLearned = [
    "Digital fee collection boosts financial efficiency",
    "Parent-teacher communication improves student outcomes",
    "Centralized data management reduces duplication and errors",
    "Training ensures smooth adoption by staff"
  ];

  const futureRoadmap = [
    "AI-driven student performance predictions",
    "Mobile-first approach with push notifications",
    "Integration with e-learning and virtual classrooms",
    "Multi-school and group-level management"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Pro School Management Software
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
                src={proSchoolManagementImage} 
                alt="Pro School Management Software System"
                className="w-full h-full object-cover"
              />
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <School className="h-5 w-5" />
                  Executive Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The Pro School Management Software was designed as a comprehensive solution for schools to digitize academic, administrative, and communication processes. It provides a unified platform for managing students, teachers, classes, fees, examinations, and parent engagement, delivering significant improvements across all key operational metrics.
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
                  Schools struggled with manual paperwork, inefficient student data management, delayed fee collection, and limited parent engagement. With growing class sizes and multiple stakeholders, institutions needed a centralized system.
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
                  <BookOpen className="h-5 w-5" />
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

          {/* Key Features */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-2">
                  {keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <feature.icon className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature.title}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Security & Compliance */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-4"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Security, Privacy & Compliance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {securityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-muted/30 rounded">
                      <Shield className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
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
            transition={{ duration: 0.5, delay: 0.6 }}
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

          {/* KPIs & Measurement */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="space-y-4"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  KPIs & Measurement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {kpis.map((kpi, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-muted/30 rounded">
                      <BarChart3 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{kpi}</span>
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
            transition={{ duration: 0.5, delay: 0.8 }}
            className="space-y-4"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Results & Impact (Post-Launch)
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

          {/* Lessons Learned */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="space-y-4"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Lessons Learned
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {lessonsLearned.map((lesson, index) => (
                    <div key={index} className="flex items-start gap-2 p-2 bg-muted/30 rounded">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{lesson}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Future Roadmap */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
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
                      <TrendingUp className="h-4 w-4 text-primary flex-shrink-0" />
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
            transition={{ duration: 0.5, delay: 1.1 }}
            className="space-y-4"
          >
            <Card className="bg-gradient-to-r from-primary/10 to-primary-glow/10 border-primary/20">
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-bold mb-2">Transform Your School Management</h3>
                <p className="text-muted-foreground mb-4">
                  We deliver smart school management solutions that simplify operations, improve transparency, and strengthen academic outcomes.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                    Request Demo
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                    View Case Studies
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