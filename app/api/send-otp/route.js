import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// In-memory OTP storage (in production, use a database with expiration)
const otpStore = new Map();

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export async function POST(req) {
  try {
    const { email, action } = await req.json();

    if (!email) {
      return Response.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    if (action === 'send') {
      const otp = generateOTP();
      const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes

      otpStore.set(email, { otp, expiresAt });
      
      // If Resend is not available, log the OTP
      if (!resend) {
        console.log(`[v0] OTP for ${email}: ${otp}`);
      }

      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%); padding: 40px; text-align: center; border-radius: 12px 12px 0 0; color: white;">
            <h1 style="margin: 0; font-size: 28px;">Verification Code</h1>
          </div>
          <div style="padding: 40px; background: #f0f9ff; text-align: center; border-radius: 0 0 12px 12px;">
            <p style="margin: 0 0 30px 0; font-size: 16px; color: #333;">
              Your verification code is:
            </p>
            <div style="background: white; border: 3px solid #0ea5e9; padding: 20px; border-radius: 12px; margin: 0 0 30px 0;">
              <p style="margin: 0; font-size: 48px; font-weight: bold; color: #0ea5e9; letter-spacing: 4px;">
                ${otp}
              </p>
            </div>
            <p style="margin: 0 0 20px 0; font-size: 14px; color: #666;">
              This code expires in 10 minutes.
            </p>
            <p style="margin: 0; font-size: 12px; color: #999;">
              If you did not request this code, please ignore this email.
            </p>
          </div>
        </div>
      `;

      if (resend) {
        await resend.emails.send({
          from: 'noreply@universecomputer.edu',
          to: email,
          subject: 'Your Verification Code',
          html: htmlContent,
        });
      }

      return Response.json({ 
        success: true, 
        message: 'OTP sent successfully',
        expiresIn: 600,
        note: resend ? 'Email sent' : 'Email service not configured (check RESEND_API_KEY)'
      });
    } else if (action === 'verify') {
      const { otp } = await req.json();

      if (!otp) {
        return Response.json(
          { error: 'OTP is required' },
          { status: 400 }
        );
      }

      const stored = otpStore.get(email);

      if (!stored) {
        return Response.json(
          { error: 'No OTP found for this email' },
          { status: 400 }
        );
      }

      if (Date.now() > stored.expiresAt) {
        otpStore.delete(email);
        return Response.json(
          { error: 'OTP has expired' },
          { status: 400 }
        );
      }

      if (stored.otp !== otp) {
        return Response.json(
          { error: 'Invalid OTP' },
          { status: 400 }
        );
      }

      otpStore.delete(email);
      return Response.json({ 
        success: true, 
        message: 'OTP verified successfully',
        token: Buffer.from(email).toString('base64')
      });
    }

    return Response.json(
      { error: 'Invalid action' },
      { status: 400 }
    );
  } catch (error) {
    console.error('OTP error:', error);
    return Response.json(
      { error: 'Failed to process OTP', details: error.message },
      { status: 500 }
    );
  }
}
