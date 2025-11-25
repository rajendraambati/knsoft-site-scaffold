"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Loader2, GraduationCap, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const trainingInquirySchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone number must be less than 20 characters").optional(),
  courseInterest: z.string().min(1, "Please select a course interest"),
  teamSize: z.string().min(1, "Please select your team size"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
  consent: z.boolean().refine(val => val === true, "You must agree to the privacy policy"),
  // Honeypot field for spam protection
  website: z.string().max(0, "Please leave this field empty").optional(),
});

type TrainingInquiryFormData = z.infer<typeof trainingInquirySchema>;

const courseOptions = [
  { value: "software-development", label: "Software Development" },
  { value: "business-communication", label: "Business Communication" },
  { value: "soft-skills", label: "Soft Skills Training" },
  { value: "leadership-development", label: "Leadership Development" },
  { value: "customer-service", label: "Customer Service Excellence" },
  { value: "sales-training", label: "Sales & Relationship Management" },
  { value: "campus-corporate", label: "Campus to Corporate" },
  { value: "train-trainer", label: "Train the Trainer (TTT)" },
  { value: "email-etiquette", label: "Email Etiquette & Writing" },
  { value: "public-speaking", label: "Public Speaking & Presentation" },
  { value: "voice-accent", label: "Voice & Accent Neutralization" },
  { value: "custom", label: "Custom Training Program" },
];

const teamSizeOptions = [
  { value: "1-5", label: "1-5 employees" },
  { value: "6-10", label: "6-10 employees" },
  { value: "11-25", label: "11-25 employees" },
  { value: "26-50", label: "26-50 employees" },
  { value: "51-100", label: "51-100 employees" },
  { value: "100+", label: "100+ employees" },
];

export function TrainingInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<TrainingInquiryFormData>({
    resolver: zodResolver(trainingInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      courseInterest: "",
      teamSize: "",
      message: "",
      consent: false,
      website: "", // Honeypot field
    },
  });

  const onSubmit = async (data: TrainingInquiryFormData) => {
    setIsSubmitting(true);
    
    try {
      // Check honeypot field for spam protection
      if (data.website && data.website.length > 0) {
        throw new Error("Invalid submission detected");
      }

      // Get the selected course and team size labels
      const courseLabel = courseOptions.find(c => c.value === data.courseInterest)?.label || data.courseInterest;
      const teamSizeLabel = teamSizeOptions.find(t => t.value === data.teamSize)?.label || data.teamSize;

      // Insert into Supabase contacts table with training-specific subject
      const { error } = await supabase
        .from('contacts')
        .insert({
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          subject: `Training Inquiry: ${courseLabel} (Team: ${teamSizeLabel})`,
          message: `Course Interest: ${courseLabel}\nTeam Size: ${teamSizeLabel}\n\n${data.message}`,
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Training inquiry submitted successfully!",
        description: "Our training team will contact you within 24 hours to discuss your requirements.",
      });
      form.reset();
    } catch (error) {
      console.error('Training inquiry submission error:', error);
      toast({
        title: "Failed to submit inquiry",
        description: "Please try again or contact us directly at training@knsofttech.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto card-glow">
      <CardHeader className="text-center">
        <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
          <GraduationCap className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-2xl">Request Training Information</CardTitle>
        <CardDescription>
          Tell us about your training needs and we'll create a customized program for your team
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Honeypot field - hidden from users but visible to bots */}
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem className="hidden">
                  <FormControl>
                    <Input {...field} tabIndex={-1} autoComplete="off" />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@company.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 (555) 123-4567" type="tel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="teamSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team Size *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {teamSizeOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="courseInterest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Interest *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a training program" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {courseOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Choose the training program that best fits your needs
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Training Requirements *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your training goals, preferred schedule, specific skills you want to develop, or any special requirements..."
                      rows={5}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm">
                      I agree to the privacy policy and consent to be contacted about training programs *
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                type="submit" 
                variant="gradient" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Request Training Information
                  </>
                )}
              </Button>
            </motion.div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
