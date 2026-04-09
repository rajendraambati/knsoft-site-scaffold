// Mock API handler for contact form
// In a real Next.js application, this would be handled by API routes
// For this React app, we'll simulate the API functionality

interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  consent: boolean;
  website?: string; // honeypot field
}

interface ApiResponse {
  success: boolean;
  error?: string;
}

// Rate limiting storage (in-memory for demo)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function getClientIP(): string {
  // In a real application, you'd get the actual client IP
  // For demo purposes, we'll use a mock IP
  return "demo-ip-" + Math.random().toString(36).substr(2, 9);
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitStore.get(ip);
  
  if (!limit) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + 10 * 60 * 1000 }); // 10 minutes
    return false;
  }
  
  if (now > limit.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + 10 * 60 * 1000 });
    return false;
  }
  
  if (limit.count >= 5) { // 5 requests per 10 minutes
    return true;
  }
  
  limit.count++;
  return false;
}

export async function submitContactForm(data: ContactFormData): Promise<ApiResponse> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Check honeypot (anti-spam)
  if (data.website && data.website.length > 0) {
    console.warn("Spam detected via honeypot field");
    return { success: false, error: "Invalid submission detected" };
  }
  
  // Check rate limiting
  const ip = getClientIP();
  if (isRateLimited(ip)) {
    return { success: false, error: "Too many requests. Please try again later." };
  }
  
  // Validate required fields
  if (!data.name || !data.email || !data.message || !data.consent) {
    return { success: false, error: "Please fill in all required fields" };
  }
  
  // Simulate storing to database
  const contactMessage = {
    id: Math.random().toString(36).substr(2, 9),
    name: data.name,
    email: data.email,
    subject: data.subject || "General Inquiry",
    message: data.message,
    ip: ip,
    isRead: false,
    createdAt: new Date().toISOString()
  };
  
  // In a real application, you would:
  // 1. Store to database using Prisma
  // 2. Send email using Nodemailer
  // 3. Return appropriate response
  
  console.log("Contact form submission:", contactMessage);
  console.log("Email would be sent to: info@knsofttech.com");
  
  // Simulate success response
  return { success: true };
}

// Mock function to simulate email sending
export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  // This would integrate with Nodemailer in a real application
  console.log("Sending email to info@knsofttech.com:", {
    to: "info@knsofttech.com",
    subject: `New Contact Form Submission: ${data.subject || "General Inquiry"}`,
    from: data.email,
    replyTo: data.email,
    body: `
      Name: ${data.name}
      Email: ${data.email}
      Subject: ${data.subject || "General Inquiry"}
      Message: ${data.message}
    `
  });
  
  return true;
}