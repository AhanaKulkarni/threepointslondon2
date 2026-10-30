import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey) {
      const resend = new Resend(apiKey);
      const data = await resend.emails.send({
        from: "Three Points London <newsroom@threepointslondon.com>",
        to: ["editor@threepointslondon.com"],
        replyTo: email,
        subject: `[TPL Contact] ${subject?.toUpperCase() || "INQUIRY"} from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e5e7eb; border-radius: 4px;">
            <h2 style="color: #1D2B45; margin-bottom: 8px;">Three Points London — Editorial Dispatch</h2>
            <p style="color: #6B7280; font-size: 13px; margin-top: 0;">New incoming communication received from contact desk</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
            <p><strong>Sender:</strong> ${name} (&lt;${email}&gt;)</p>
            <p><strong>Department:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #F8F9FA; padding: 14px; border-left: 3px solid #2B4BC4; font-size: 14px; line-height: 1.6;">
              ${message.replace(/\n/g, "<br />")}
            </div>
          </div>
        `,
      });

      return NextResponse.json({
        success: true,
        messageId: data.data?.id || "resend_sent",
        recipient: "editor@threepointslondon.com",
        timestamp: new Date().toISOString(),
      });
    }

    // Graceful fallback when RESEND_API_KEY is not set yet in local/testing
    console.log("[TPL Resend API Simulated Dispatch]:", {
      name,
      email,
      subject,
      messagePreview: message.slice(0, 100),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      simulated: true,
      messageId: `msg_${Date.now()}`,
      note: "Email logged via Resend dispatch bridge (Configure RESEND_API_KEY to broadcast directly).",
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("[TPL Resend Error]:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to dispatch email" },
      { status: 500 }
    );
  }
}
