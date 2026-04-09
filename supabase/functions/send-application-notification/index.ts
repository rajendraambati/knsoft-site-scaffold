import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

interface ApplicationNotificationRequest {
  jobTitle: string;
  applicantName: string;
  applicantEmail: string;
  coverLetter: string;
  resumeUrl: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { 
      jobTitle, 
      applicantName, 
      applicantEmail, 
      coverLetter, 
      resumeUrl 
    }: ApplicationNotificationRequest = await req.json();

    console.log(`Processing job application for ${jobTitle} from ${applicantName}`);

    // Sanitize all user-supplied data before embedding in HTML
    const safeJobTitle = escapeHtml(jobTitle);
    const safeName = escapeHtml(applicantName);
    const safeEmail = escapeHtml(applicantEmail);
    const safeCoverLetter = escapeHtml(coverLetter).replace(/\n/g, '<br>');
    const safeResumeUrl = escapeHtml(resumeUrl);

    // Send notification email to HR/Recruiting team
    const hrEmailResponse = await resend.emails.send({
      from: "KNSOFT Careers <noreply@resend.dev>",
      to: ["osaka9449@gmail.com"],
      subject: `New Job Application: ${safeJobTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1A2B4C;">New Job Application Received</h1>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1A2B4C; margin-top: 0;">Position: ${safeJobTitle}</h2>
            <p><strong>Applicant:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Application Date:</strong> ${new Date().toLocaleDateString()}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #1A2B4C;">Cover Letter:</h3>
            <div style="background-color: #fff; padding: 15px; border-left: 4px solid #F9A825; margin: 10px 0;">
              ${safeCoverLetter}
            </div>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #1A2B4C;">Resume:</h3>
            <p>The applicant's resume has been uploaded to the system. You can access it through the admin dashboard.</p>
            <p style="color: #666; font-size: 12px;">Resume path: ${safeResumeUrl}</p>
          </div>

          <div style="background-color: #1A2B4C; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Next Steps:</strong></p>
            <p style="margin: 5px 0 0 0;">1. Review the application in your admin dashboard</p>
            <p style="margin: 5px 0 0 0;">2. Download and review the resume</p>
            <p style="margin: 5px 0 0 0;">3. Schedule an interview if the candidate is a good fit</p>
          </div>

          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            This email was sent automatically by the KNSOFT careers system.
          </p>
        </div>
      `,
    });

    // Send confirmation email to the applicant
    const applicantEmailResponse = await resend.emails.send({
      from: "KNSOFT Careers <noreply@resend.dev>",
      to: [applicantEmail],
      subject: `Application Received: ${safeJobTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1A2B4C;">Thank You for Your Application!</h1>
          
          <p>Dear ${safeName},</p>
          
          <p>Thank you for your interest in the <strong>${safeJobTitle}</strong> position at KNSOFT Technologies. We have successfully received your application and resume.</p>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1A2B4C; margin-top: 0;">What's Next?</h2>
            <ul style="color: #333; line-height: 1.6;">
              <li>Our recruiting team will review your application within 5-7 business days</li>
              <li>If your qualifications match our requirements, we'll contact you to schedule an interview</li>
              <li>We'll keep you updated on your application status throughout the process</li>
            </ul>
          </div>

          <div style="background-color: #2E7D32; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Why KNSOFT?</strong></p>
            <p style="margin: 5px 0 0 0;">Join our innovative team working on cutting-edge technology solutions in AI, data science, and sustainable energy.</p>
          </div>

          <p>If you have any questions about your application or the position, please don't hesitate to reach out to us.</p>

          <p>Best regards,<br>
          <strong>The KNSOFT Careers Team</strong></p>

          <div style="border-top: 1px solid #ddd; padding-top: 20px; margin-top: 30px; color: #666; font-size: 12px;">
            <p>KNSOFT Technologies<br>
            Building the Future Through Technology<br>
            Email: osaka9449@gmail.com</p>
          </div>
        </div>
      `,
    });

    console.log("HR notification sent:", hrEmailResponse);
    console.log("Applicant confirmation sent:", applicantEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Application notification emails sent successfully",
        hrEmailId: hrEmailResponse.data?.id,
        applicantEmailId: applicantEmailResponse.data?.id
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-application-notification function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to send notification emails"
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
