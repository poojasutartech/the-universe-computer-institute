import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req) {
  try {
    const { to, subject, name, message, type, courseId, courseName } = await req.json();

    if (!to || !subject || !name) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // If Resend key is not available, log the email instead (for development)
    if (!resend) {
      console.log('[v0] Email would be sent:', { to, subject, name, message, type });
      return Response.json({ 
        success: true, 
        messageId: `dev-${Date.now()}`,
        note: 'Email service not configured. Check RESEND_API_KEY env var.'
      });
    }

    let htmlContent = '';

    if (type === 'contact') {
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%); padding: 40px; text-align: center; border-radius: 12px 12px 0 0; color: white;">
            <h1 style="margin: 0; font-size: 28px;">New Contact Message</h1>
          </div>
          <div style="padding: 40px; background: #f0f9ff; border-radius: 0 0 12px 12px;">
            <p style="margin: 0 0 20px 0; font-size: 16px;">
              <strong>Name:</strong> ${name}
            </p>
            <p style="margin: 0 0 20px 0; font-size: 16px;">
              <strong>Email:</strong> ${to}
            </p>
            <p style="margin: 0 0 20px 0; font-size: 16px;">
              <strong>Message:</strong>
            </p>
            <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #333;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          <div style="padding: 20px; background: #e0f2fe; text-align: center; border-radius: 0 0 12px 12px; font-size: 12px; color: #666;">
            <p style="margin: 0;">© 2024 The Universe Computer Institute</p>
          </div>
        </div>
      `;
    } else if (type === 'admission') {
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%); padding: 40px; text-align: center; border-radius: 12px 12px 0 0; color: white;">
            <h1 style="margin: 0; font-size: 28px;">New Admission Application</h1>
          </div>
          <div style="padding: 40px; background: #f0f9ff; border-radius: 0 0 12px 12px;">
            <p style="margin: 0 0 20px 0; font-size: 16px;">
              <strong>Student Name:</strong> ${name}
            </p>
            <p style="margin: 0 0 20px 0; font-size: 16px;">
              <strong>Email:</strong> ${to}
            </p>
            <p style="margin: 0 0 20px 0; font-size: 16px;">
              <strong>Course Applied:</strong> ${courseName || 'Not specified'}
            </p>
            <p style="margin: 0 0 20px 0; font-size: 16px;">
              <strong>Message:</strong>
            </p>
            <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #333;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          <div style="padding: 20px; background: #e0f2fe; text-align: center; border-radius: 0 0 12px 12px; font-size: 12px; color: #666;">
            <p style="margin: 0;">© 2024 The Universe Computer Institute</p>
          </div>
        </div>
      `;
    }

    const response = await resend.emails.send({
      from: 'admissions@universecomputer.edu',
      to: to,
      cc: 'info@universecomputer.edu',
      subject: subject,
      html: htmlContent,
    });

    return Response.json({ success: true, messageId: response.id });
  } catch (error) {
    console.error('Email sending error:', error);
    return Response.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}
