import { motion } from "framer-motion";
import { 
  X, 
  Hospital, 
  Users, 
  Calendar, 
  CreditCard, 
  TestTube, 
  Pill, 
  FileText, 
  BarChart3, 
  CheckCircle, 
  AlertTriangle, 
  Star, 
  TrendingUp,
  Shield,
  Clock,
  Target,
  Zap
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface HospitalManagementArticleProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HospitalManagementArticle({ isOpen, onClose }: HospitalManagementArticleProps) {
  const modules = [
    { name: "Registration", icon: Users },
    { name: "OPD/IPD Billing", icon: CreditCard },
    { name: "Lab & Radiology", icon: TestTube },
    { name: "Pharmacy", icon: Pill },
    { name: "Reports & MIS", icon: BarChart3 },
  ];

  const outcomes = [
    { 
      title: "Administrative Efficiency", 
      description: "Major reduction in manual errors and consolidated billing",
      icon: Zap,
      color: "text-accent"
    },
    { 
      title: "Operational Visibility", 
      description: "Data-driven decision making with comprehensive dashboards",
      icon: BarChart3,
      color: "text-secondary"
    },
    { 
      title: "Cross-Department Coordination", 
      description: "Seamless integration improved throughput across all departments",
      icon: Target,
      color: "text-cta"
    },
  ];

  const feedback = {
    positive: [
      "Efficiency of the software with minimal risk of loss of data",
      "User friendly, easy to use and understand",
    ],
    negative: [
      "Unable to generate anything beyond registration after 10 months",
      "System stops working during power failures",
      "Poor post-sales service and support",
    ]
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-background">
        <DialogHeader className="relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 p-6 bg-gradient-hero rounded-lg text-white"
          >
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Hospital size={40} className="text-white" />
            </div>
            <div>
              <DialogTitle className="text-3xl font-bold mb-2">
                Hospital Management Software Pro
              </DialogTitle>
              <p className="text-white/90 text-lg">
                Comprehensive Healthcare Management System Case Study
              </p>
            </div>
          </motion.div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={20} className="text-white" />
          </button>
        </DialogHeader>

        <div className="space-y-8 p-6">
          {/* Overview Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FileText className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-primary">Overview</h2>
            </div>
            <Card className="card-elegant">
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  "Hospital Management Software Pro"—or HMS Pro+—is positioned as a comprehensive, 
                  integrated Hospital Management System (HMS). It supports a broad spectrum of hospital 
                  functions, including reception, billing, inpatient (IPD) and outpatient (OPD) management, 
                  diagnostics, pharmacy, radiology, and reporting.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Implementation Context */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <Target className="text-secondary" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-primary">Implementation Context</h2>
            </div>
            <Card className="card-elegant">
              <CardContent className="p-6">
                <div className="bg-gradient-card p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold mb-4 text-primary">Case Study: Midsize Multispecialty Hospital, India</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-accent">Challenges Before Implementation:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <AlertTriangle size={16} className="text-cta mt-1 flex-shrink-0" />
                          Manual record-keeping processes
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle size={16} className="text-cta mt-1 flex-shrink-0" />
                          Fragmented billing systems
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle size={16} className="text-cta mt-1 flex-shrink-0" />
                          Inconsistent departmental workflows
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-accent">Implementation Objectives:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-secondary mt-1 flex-shrink-0" />
                          Automate appointment scheduling
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-secondary mt-1 flex-shrink-0" />
                          Consolidate IPD and OPD billing
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-secondary mt-1 flex-shrink-0" />
                          Integrate all departmental operations
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Implementation Timeline */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Clock className="text-accent" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-primary">Implementation Highlights</h2>
            </div>
            <Card className="card-elegant">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-cta/10 text-cta border-cta/20">8-12 Weeks Timeline</Badge>
                    <Badge className="bg-secondary/10 text-secondary border-secondary/20">Remote Support</Badge>
                  </div>
                  <div className="grid gap-4">
                    <h3 className="text-lg font-semibold text-primary mb-4">Module Rollout Sequence:</h3>
                    <div className="grid md:grid-cols-5 gap-4">
                      {modules.map((module, index) => {
                        const IconComponent = module.icon;
                        return (
                          <motion.div
                            key={module.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            className="text-center p-4 bg-gradient-card rounded-lg border border-border/50"
                          >
                            <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-3">
                              <IconComponent size={24} className="text-primary" />
                            </div>
                            <p className="text-sm font-medium text-foreground">{module.name}</p>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Outcomes & Benefits */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cta/10 rounded-lg">
                <TrendingUp className="text-cta" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-primary">Outcomes & Benefits</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {outcomes.map((outcome, index) => {
                const IconComponent = outcome.icon;
                return (
                  <motion.div
                    key={outcome.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <Card className="card-elegant h-full hover:shadow-glow transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-background rounded-lg">
                            <IconComponent size={24} className={outcome.color} />
                          </div>
                          <h3 className="font-semibold text-primary">{outcome.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{outcome.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* User Feedback */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Star className="text-accent" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-primary">User Feedback</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-elegant border-l-4 border-l-secondary">
                <CardHeader>
                  <CardTitle className="text-secondary flex items-center gap-2">
                    <CheckCircle size={20} />
                    Positive Reviews
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {feedback.positive.map((review, index) => (
                      <div key={index} className="p-4 bg-secondary/5 rounded-lg border-l-2 border-l-secondary/20">
                        <p className="text-muted-foreground italic">"{review}"</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-elegant border-l-4 border-l-cta">
                <CardHeader>
                  <CardTitle className="text-cta flex items-center gap-2">
                    <AlertTriangle size={20} />
                    Critical Issues
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {feedback.negative.map((review, index) => (
                      <div key={index} className="p-4 bg-cta/5 rounded-lg border-l-2 border-l-cta/20">
                        <p className="text-muted-foreground italic">"{review}"</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Key Recommendations */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-primary">Key Recommendations</h2>
            </div>
            <Card className="card-elegant">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-accent mb-3">Success Factors:</h3>
                    <div className="space-y-3">
                      {[
                        "Structured pilot testing",
                        "Robust SLA & support model",
                        "Comprehensive staff training",
                        "Phased rollout approach"
                      ].map((factor, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                          <span className="text-muted-foreground">{factor}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-cta mb-3">Risk Mitigation:</h3>
                    <div className="space-y-3">
                      {[
                        "Offline data capture strategies",
                        "Local caching mechanisms",
                        "Manual override procedures",
                        "Escalation path protocols"
                      ].map((risk, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Shield size={16} className="text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{risk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Conclusion */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Card className="bg-gradient-hero text-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                    <Hospital size={32} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Conclusion</h2>
                </div>
                <p className="text-white/90 leading-relaxed text-lg">
                  "HMS Pro+" exemplifies a powerful hospital software platform with potential to streamline 
                  operations across departments. But its success rests heavily on execution—meticulous rollout 
                  planning, reliable support, and robust backup strategies. Without these, even the 
                  best-featured system can face resistance, under-utilization, or worse, operational failure.
                </p>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </DialogContent>
    </Dialog>
  );
}