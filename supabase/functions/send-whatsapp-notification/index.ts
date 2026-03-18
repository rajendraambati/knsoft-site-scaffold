import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/twilio';
const ADMIN_WHATSAPP = 'whatsapp:+919553312650';
const TWILIO_WHATSAPP_FROM = 'whatsapp:+14155238886'; // Twilio Sandbox

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WhatsAppNotificationRequest {
  name: string;
  phone?: string;
  message: string;
  userPhone?: string; // For optional user confirmation
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) throw new Error('LOVABLE_API_KEY is not configured');

    const TWILIO_API_KEY = Deno.env.get('TWILIO_API_KEY');
    if (!TWILIO_API_KEY) throw new Error('TWILIO_API_KEY is not configured');

    const { name, phone, message, userPhone }: WhatsAppNotificationRequest = await req.json();

    console.log("Sending WhatsApp notification for lead:", { name, phone });

    // 1. Send admin notification
    const adminMessage = `🔔 *New Lead from KNSOFT Website*\n\n👤 *Name:* ${name}\n📞 *Phone:* ${phone || 'Not provided'}\n💬 *Message:* ${message}`;

    const adminResponse = await fetch(`${GATEWAY_URL}/Messages.json`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'X-Connection-Api-Key': TWILIO_API_KEY,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        To: ADMIN_WHATSAPP,
        From: TWILIO_WHATSAPP_FROM,
        Body: adminMessage,
      }),
    });

    const adminData = await adminResponse.json();
    if (!adminResponse.ok) {
      throw new Error(`Twilio admin WhatsApp failed [${adminResponse.status}]: ${JSON.stringify(adminData)}`);
    }

    console.log("Admin WhatsApp sent:", adminData.sid);

    // 2. Optional: Send confirmation to user if phone provided
    let userData = null;
    if (userPhone) {
      const userMessage = `Hi ${name} 👋\n\nThanks for contacting *KNSOFT Technologies!*\n\nWe received your request regarding "${message}".\n\nOur team will contact you shortly.\n\n- Team KNSOFT 🚀`;

      const userResponse = await fetch(`${GATEWAY_URL}/Messages.json`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${LOVABLE_API_KEY}`,
          'X-Connection-Api-Key': TWILIO_API_KEY,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          To: `whatsapp:${userPhone}`,
          From: TWILIO_WHATSAPP_FROM,
          Body: userMessage,
        }),
      });

      userData = await userResponse.json();
      if (!userResponse.ok) {
        console.warn(`User WhatsApp failed [${userResponse.status}]:`, userData);
      } else {
        console.log("User WhatsApp confirmation sent:", userData.sid);
      }
    }

    return new Response(
      JSON.stringify({ success: true, adminSid: adminData.sid, userSid: userData?.sid }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: unknown) {
    console.error("Error sending WhatsApp:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
