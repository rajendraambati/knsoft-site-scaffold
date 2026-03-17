import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

interface ContactNotificationRequest {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, service, message }: ContactNotificationRequest = await req.json();

    console.log("Processing contact notification:", { name, email, service });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : "Not provided";
    const safeService = service ? escapeHtml(service) : "Not specified";
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    // Send notification email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "KNSOFT Contact <onboarding@resend.dev>",
      to: ["info@knsofttech.com"],
      subject: `New Contact Form Submission from ${safeName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Service Interested In:</strong> ${safeService}</p>
        <h3>Message:</h3>
        <p>${safeMessage}</p>
        <hr>
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
      `,
    });

    console.log("Admin notification email sent:", adminEmailResponse);

    // Send auto-reply to user
    const userEmailResponse = await resend.emails.send({
      from: "KNSOFT Technologies <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting KNSOFT Technologies",
      html: `
        <h2>Thank you for contacting KNSOFT Technologies!</h2>
        <p>Dear ${safeName},</p>
        <p>Thank you for contacting KNSOFT. Our team will get back to you shortly.</p>
        <p>We have received your message and will respond within 24 hours.</p>
        <br>
        <p>Best regards,<br>
        <strong>KNSOFT Technologies Team</strong><br>
        KNSOFT Technologies Pvt Ltd</p>
        <hr>
        <p style="font-size: 12px; color: #666;">
          This is an automated response. Please do not reply to this email.
        </p>
      `,
    });

    console.log("Auto-reply sent to user:", userEmailResponse);

    return new Response(
      JSON.stringify({
        success: true,
        adminEmail: adminEmailResponse,
        userEmail: userEmailResponse,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-notification:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send contact notification" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
