import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";
import { 
  BookOpen,
  BarChart3,
  Clock,
  CheckCircle,
  TrendingUp,
  Eye,
  FileText,
  Database,
  Users,
  Shield,
  Search,
  Scan,
  CreditCard,
  Bell,
  Globe
} from "lucide-react";
import libraryManagementImage from "../../assets/library-management-system.jpg";

interface LibraryManagementArticleProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LibraryManagementArticle({ isOpen, onClose }: LibraryManagementArticleProps) {
  const painPoints = [
    "Manual cataloging and outdated indexing systems",
    "Difficulty tracking issued and overdue books",
    "Limited integration of e-resources with physical collections",
    "Time-consuming membership and fine management processes"
  ];

  const objectives = [
    "Create a centralized digital catalog for all resources",
    "Automate borrowing, returns, and fine collection",
    "Provide self-service portals for members",
    "Improve reporting and analytics for administrators"
  ];

  const coreCapabilities = [
    {
      icon: Database,
      title: "Catalog Management",
      description: "Digital indexing of physical and e-books with advanced search"
    },
    {
      icon: Scan,
      title: "Borrow & Return Automation",
      description: "Barcode/RFID-based tracking with automated reminders"
    },
    {
      icon: Users,
      title: "Member Portal",
      description: "Online book requests, renewals, and fine payments"
    },
    {
      icon: BookOpen,
      title: "Digital Resources Integration",
      description: "Seamless access to e-books, journals, and multimedia"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Dashboards for usage statistics, circulation trends, and overdue tracking"
    }
  ];

  const techStack = [
    { category: "Frontend", tech: "React.js web interface, Flutter mobile apps" },
    { category: "Backend", tech: "Node.js with REST APIs" },
    { category: "Database", tech: "PostgreSQL (catalog + member data), ElasticSearch (search optimization)" },
    { category: "Integrations", tech: "RFID/barcode scanners, payment gateways, e-book repositories" },
    { category: "Infrastructure", tech: "Cloud-hosted (AWS/Azure) with containerized deployment" },
    { category: "Security", tech: "GDPR-compliant, SSL/TLS encryption, role-based access control" }
  ];

  const timeline = [
    { phase: "Phase 1 (0–2 months)", task: "Requirement gathering and catalog digitization" },
    { phase: "Phase 2 (2–4 months)", task: "Borrow/return automation and RFID integration" },
    { phase: "Phase 3 (4–6 months)", task: "Member portal and fine management" },
    { phase: "Phase 4 (6–8 months)", task: "Analytics dashboards and training" }
  ];

  const keyFeatures = [
    { icon: Database, title: "Centralized catalog for physical and digital books" },
    { icon: Scan, title: "Barcode/RFID-based circulation" },
    { icon: Users, title: "Online membership management" },
    { icon: Bell, title: "Overdue alerts and automated fines" },
    { icon: BarChart3, title: "Usage analytics and reporting" }
  ];

  const results = [
    { metric: "Manual Workload", value: "60%", description: "Reduction in manual administrative effort", icon: Clock },
    { metric: "Circulation Speed", value: "50%", description: "Faster book borrowing and returns", icon: TrendingUp },
    { metric: "Overdue Cases", value: "35%", description: "Fewer overdue incidents", icon: CheckCircle },
    { metric: "User Satisfaction", value: "40%", description: "Improvement in member ratings", icon: Users }
  ];

  const securityFeatures = [
    "GDPR-compliant data storage",
    "Encrypted communications (TLS 1.3)",
    "Role-based access for staff, admins, and members",
    "Audit trails for all transactions"
  ];

  const lessonsLearned = [
    "RFID/barcode automation is crucial for efficiency",
    "Member self-service portals improve satisfaction",
    "Integration with digital resources expands usage",
    "Analytics help libraries align services with demand"
  ];

  const futureRoadmap = [
    "AI-powered book recommendation engine",
    "Mobile-first library app with voice search",
    "Blockchain-based copyright tracking for digital assets",
    "Inter-library network management for shared catalogs"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Library Management Software
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
                src={libraryManagementImage} 
                alt="Library Management Software System"
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
                  The Library Management Software was developed to modernize how libraries operate, by digitizing catalog management, automating borrowing/return processes, and providing easy access to digital and physical resources. After deployment, institutions experienced significant improvements in efficiency, circulation, and user satisfaction.
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
                  Public and academic libraries faced issues with manual cataloging, delayed book tracking, and inefficient member services. The transition to hybrid (physical + digital) resources required an integrated solution.
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
                  <Search className="h-5 w-5" />
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

          {/* Results */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="space-y-4"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Results & Impact (First Year)
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
            transition={{ duration: 0.5, delay: 0.8 }}
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
            transition={{ duration: 0.5, delay: 0.9 }}
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
            transition={{ duration: 0.5, delay: 1.0 }}
            className="space-y-4"
          >
            <Card className="bg-gradient-to-r from-primary/10 to-primary-glow/10 border-primary/20">
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-bold mb-2">Ready to Modernize Your Library?</h3>
                <p className="text-muted-foreground mb-4">
                  We design modern library management systems that simplify operations and enrich the user experience through automation and digital innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                    Schedule Demo
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                    View Portfolio
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