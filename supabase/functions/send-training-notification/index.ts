import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface TrainingNotificationRequest {
  name: string;
  email: string;
  phone?: string;
  courseInterest: string;
  teamSize: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, courseInterest, teamSize, message }: TrainingNotificationRequest = await req.json();

    console.log("Processing training inquiry notification:", { name, email, courseInterest, teamSize });

    // Send notification email to the company
    const companyEmailResponse = await resend.emails.send({
      from: "KNSOFT Training <onboarding@resend.dev>",
      to: ["training@knsofttech.com"],
      subject: `New Training Inquiry: ${courseInterest} - Team of ${teamSize}`,
      html: `
        <h2>New Training Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <p><strong>Course Interest:</strong> ${courseInterest}</p>
        <p><strong>Team Size:</strong> ${teamSize}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
      `,
    });

    console.log("Company notification email sent:", companyEmailResponse);

    // Send confirmation email to the inquirer
    const confirmationEmailResponse = await resend.emails.send({
      from: "KNSOFT Training <onboarding@resend.dev>",
      to: [email],
      subject: "We Received Your Training Inquiry - KNSOFT Technologies",
      html: `
        <h2>Thank you for your interest in our training programs!</h2>
        <p>Dear ${name},</p>
        <p>We have received your inquiry for <strong>${courseInterest}</strong> training for your team of <strong>${teamSize}</strong>.</p>
        <p>Our training team will review your requirements and get back to you within 24 hours to discuss:</p>
        <ul>
          <li>Customized training program structure</li>
          <li>Schedule and delivery format</li>
          <li>Pricing and package options</li>
          <li>Success metrics and outcomes</li>
        </ul>
        <p>In the meantime, if you have any urgent questions, please don't hesitate to contact us at <a href="mailto:training@knsofttech.com">training@knsofttech.com</a>.</p>
        <br>
        <p>Best regards,<br>
        <strong>KNSOFT Training Team</strong><br>
        KNSOFT Technologies Pvt Ltd</p>
        <hr>
        <p style="font-size: 12px; color: #666;">
          <strong>Your Inquiry Details:</strong><br>
          Course: ${courseInterest}<br>
          Team Size: ${teamSize}<br>
          ${phone ? `Phone: ${phone}<br>` : ""}
          Submitted: ${new Date().toLocaleString()}
        </p>
      `,
    });

    console.log("Confirmation email sent to inquirer:", confirmationEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true,
        companyEmail: companyEmailResponse,
        confirmationEmail: confirmationEmailResponse
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
    console.error("Error in send-training-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
