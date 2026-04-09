import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TrendingUp, Users, DollarSign, Calendar, Target, Shield } from "lucide-react";
import projectManagementImage from "@/assets/project-management-finance-crm.jpg";

interface ProjectManagementArticleProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectManagementArticle({ isOpen, onClose }: ProjectManagementArticleProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gradient">
            Project Management, Finance, CRM & Task Management Software
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Hero Image */}
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <img 
              src={projectManagementImage} 
              alt="Project Management Dashboard Interface"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <Badge variant="secondary" className="mb-2">Enterprise Solution</Badge>
              <h3 className="text-lg font-semibold">Unified Business Management Platform</h3>
            </div>
          </div>

          {/* Executive Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Executive Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Project Management, Finance, CRM, and Task Management Software was developed to streamline business operations by combining project planning, financial tracking, customer relationship management, and team collaboration into one unified platform.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">55%</div>
                  <div className="text-sm text-muted-foreground">Improvement in project delivery</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">60%</div>
                  <div className="text-sm text-muted-foreground">Increase in financial accuracy</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">50%</div>
                  <div className="text-sm text-muted-foreground">Growth in customer retention</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Client Context & Problem */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Client Context & Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Many SMEs and enterprises relied on separate tools for project management, finance, CRM, and tasks, leading to silos, data inconsistencies, and inefficiencies.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span className="text-sm">Lack of integration between project, finance, and CRM tools</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span className="text-sm">Poor visibility into project progress and financial health</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span className="text-sm">Inefficient task allocation and tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span className="text-sm">Customer data spread across multiple platforms</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Solution Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Solution Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Delivered Modules</h4>
                  <div className="space-y-2">
                    <Badge variant="outline">Project Management: Gantt charts, Kanban boards</Badge>
                    <Badge variant="outline">Finance: Invoicing, budgeting, reporting</Badge>
                    <Badge variant="outline">CRM: Customer profiles, pipeline management</Badge>
                    <Badge variant="outline">Task Management: Assignment, deadlines, tracking</Badge>
                    <Badge variant="outline">Analytics: Real-time dashboards</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">First Year Impact</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Project delivery:</span>
                      <span className="text-sm font-semibold text-green-600">55% faster</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Financial reporting:</span>
                      <span className="text-sm font-semibold text-green-600">60% more accurate</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Customer retention:</span>
                      <span className="text-sm font-semibold text-green-600">50% higher</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technology & Architecture */}
          <Card>
            <CardHeader>
              <CardTitle>Technology Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Frontend</h4>
                  <p className="text-sm text-muted-foreground">React.js for web, Flutter for mobile</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Backend</h4>
                  <p className="text-sm text-muted-foreground">Node.js with Express</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Database</h4>
                  <p className="text-sm text-muted-foreground">PostgreSQL with encryption</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Hosting</h4>
                  <p className="text-sm text-muted-foreground">Cloud-hosted (AWS/Azure)</p>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Workflow</h4>
                <div className="flex items-center gap-2 text-sm">
                  <span className="bg-primary/10 px-2 py-1 rounded">Projects</span>
                  <span>→</span>
                  <span className="bg-primary/10 px-2 py-1 rounded">Tasks</span>
                  <span>→</span>
                  <span className="bg-primary/10 px-2 py-1 rounded">Finance</span>
                  <span>→</span>
                  <span className="bg-primary/10 px-2 py-1 rounded">CRM</span>
                  <span>→</span>
                  <span className="bg-primary/10 px-2 py-1 rounded">Analytics</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Implementation Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Implementation Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">1</div>
                  <div>
                    <h4 className="font-medium">Phase 1 (0–2 months)</h4>
                    <p className="text-sm text-muted-foreground">Project & Task Management</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">2</div>
                  <div>
                    <h4 className="font-medium">Phase 2 (2–4 months)</h4>
                    <p className="text-sm text-muted-foreground">Finance module development</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">3</div>
                  <div>
                    <h4 className="font-medium">Phase 3 (4–6 months)</h4>
                    <p className="text-sm text-muted-foreground">CRM integration</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">4</div>
                  <div>
                    <h4 className="font-medium">Phase 4 (6–8 months)</h4>
                    <p className="text-sm text-muted-foreground">Analytics, reporting, and final rollout</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security & Compliance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Security & Compliance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Encrypted financial and customer data</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">GDPR-compliant data storage</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Multi-factor authentication</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Secure API integrations</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Future Roadmap */}
          <Card>
            <CardHeader>
              <CardTitle>Future Roadmap</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Badge variant="secondary">AI-powered project risk prediction</Badge>
                  <Badge variant="secondary">Advanced financial forecasting with ML</Badge>
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary">CRM chatbot for customer engagement</Badge>
                  <Badge variant="secondary">Deeper ERP and HRM integrations</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conclusion */}
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle>Conclusion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                The Project Management, Finance, CRM, and Task Management Software unified critical business functions into a single platform, resulting in greater efficiency, financial accuracy, and stronger customer relationships. It empowered organizations to achieve operational excellence and data-driven growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}