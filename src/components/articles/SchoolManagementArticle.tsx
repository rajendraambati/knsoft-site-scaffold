import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { X, School, Users, CreditCard, FileText, MessageSquare, BarChart3, Shield, Clock, TrendingUp } from "lucide-react";
import schoolManagementImage from "@/assets/school-management-software-1.jpg";

interface SchoolManagementArticleProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SchoolManagementArticle({ isOpen, onClose }: SchoolManagementArticleProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-2xl font-bold text-gradient">
            School Management Software 1 - Case Study
          </DialogTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-6">
          {/* Hero Image */}
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <img 
              src={schoolManagementImage} 
              alt="School Management Software 1 Dashboard"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Executive Summary */}
          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <School className="h-5 w-5 text-primary" />
              Executive Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The <strong>School Management Software 1</strong> was built to streamline administrative, academic, and communication tasks within schools. It serves as a digital hub that integrates student data, fee management, examinations, and parent-teacher interactions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-secondary/20 rounded-lg">
                <div className="text-2xl font-bold text-primary">55%</div>
                <div className="text-sm text-muted-foreground">Less Manual Paperwork</div>
              </div>
              <div className="text-center p-4 bg-secondary/20 rounded-lg">
                <div className="text-2xl font-bold text-primary">42%</div>
                <div className="text-sm text-muted-foreground">Faster Fee Collections</div>
              </div>
              <div className="text-center p-4 bg-secondary/20 rounded-lg">
                <div className="text-2xl font-bold text-primary">38%</div>
                <div className="text-sm text-muted-foreground">Higher Parent Engagement</div>
              </div>
              <div className="text-center p-4 bg-secondary/20 rounded-lg">
                <div className="text-2xl font-bold text-primary">30%</div>
                <div className="text-sm text-muted-foreground">Faster Report Generation</div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Client Context & Problem */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Client Context & Problem</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Context</h3>
                <p className="text-muted-foreground">
                  Many schools relied heavily on manual methods for managing records, collecting fees, and communicating with parents. This led to inefficiencies, errors, and delays.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Challenges Faced</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Manual attendance and student record management</li>
                  <li>Inefficient and time-consuming fee collection</li>
                  <li>Difficulty in scheduling and managing examinations</li>
                  <li>Lack of a structured parent communication system</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator />

          {/* Solution Overview */}
          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Solution Overview
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold mb-3">Key Modules Delivered</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Student Information System</div>
                      <div className="text-sm text-muted-foreground">Centralized database of student profiles and attendance</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CreditCard className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Fee & Accounts Module</div>
                      <div className="text-sm text-muted-foreground">Automated invoicing, payment tracking, and receipts</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Exam & Report Card Management</div>
                      <div className="text-sm text-muted-foreground">Digital exam schedules, grading, and instant reports</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Communication Portal</div>
                      <div className="text-sm text-muted-foreground">Direct messaging and notifications between school and parents</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">System Workflow</h3>
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <div className="text-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Parent/Student Portal</span>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <div className="w-1 h-6 bg-border"></div>
                      <span>Attendance & Student Info</span>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <div className="w-1 h-6 bg-border"></div>
                      <span>Fee & Accounts</span>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <div className="w-1 h-6 bg-border"></div>
                      <span>Exams & Report Cards</span>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <div className="w-1 h-6 bg-border"></div>
                      <span>Communication & Analytics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Architecture & Technology */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Architecture & Technology</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Frontend</h3>
                <div className="space-y-1">
                  <Badge variant="secondary">Angular/React</Badge>
                  <Badge variant="secondary">Flutter Mobile</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Backend</h3>
                <div className="space-y-1">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Express APIs</Badge>
                  <Badge variant="secondary">MySQL/PostgreSQL</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Infrastructure</h3>
                <div className="space-y-1">
                  <Badge variant="secondary">AWS/Azure</Badge>
                  <Badge variant="secondary">SSL Encryption</Badge>
                  <Badge variant="secondary">GDPR Compliant</Badge>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Key Features */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm">Attendance and student record automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-primary" />
                  <span className="text-sm">Digital fee collection and receipts</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  <span className="text-sm">Parent-teacher messaging system</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <span className="text-sm">Exam and grading automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Real-time dashboards for administrators</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm">Role-based access control</span>
                </li>
              </ul>
            </div>
          </section>

          <Separator />

          {/* Implementation Timeline */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Implementation Timeline</h2>
            <div className="space-y-3">
              <div className="flex gap-4">
                <div className="w-24 text-sm font-medium">Phase 1</div>
                <div className="text-sm text-muted-foreground">0–2 months: Requirement analysis and system setup</div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 text-sm font-medium">Phase 2</div>
                <div className="text-sm text-muted-foreground">2–4 months: Fee and exam modules integration</div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 text-sm font-medium">Phase 3</div>
                <div className="text-sm text-muted-foreground">4–6 months: Parent portal and analytics dashboards</div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 text-sm font-medium">Phase 4</div>
                <div className="text-sm text-muted-foreground">6–8 months: Training and full deployment</div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Results */}
          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Results & Impact
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Operational Efficiency</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 55% decrease in manual workload</li>
                  <li>• 42% faster fee collection</li>
                  <li>• 30% quicker academic report processing</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Stakeholder Engagement</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 38% higher parent engagement</li>
                  <li>• Improved teacher-parent communication</li>
                  <li>• Enhanced transparency in operations</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator />

          {/* Future Roadmap */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Future Roadmap</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>• AI-driven student performance tracking</p>
              <p>• Integration with e-learning and digital classrooms</p>
              <p>• Mobile-first enhancements with instant notifications</p>
              <p>• Multi-branch school group management</p>
            </div>
          </section>

          <Separator />

          {/* Conclusion */}
          <section className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">Conclusion</h2>
            <p className="text-muted-foreground leading-relaxed">
              The <strong>School Management Software 1</strong> successfully transformed traditional school operations into a digital-first model, reducing workload, improving transparency, and supporting better academic outcomes.
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}