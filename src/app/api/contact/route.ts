import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    // Check if Resend is configured
    if (!resend || !process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { success: false, message: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;
    const phone = formData.get('phone') as string || 'Not provided';
    const resume = formData.get('resume') as File | null;
    const formSource = formData.get('formSource') as string || 'Contact Form';

    // Validate required fields
    if (!name || !email || !company || !service || !message) {
      return NextResponse.json(
        { success: false, message: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Convert resume to base64 if present
    let resumeAttachment = null;
    if (resume && resume.size > 0) {
      const bytes = await resume.arrayBuffer();
      const buffer = Buffer.from(bytes);
      resumeAttachment = {
        filename: resume.name,
        content: buffer,
      };
    }

    // Service label mapping
    const serviceLabels: Record<string, string> = {
      'custom-dev': 'Custom App Development',
      'legacy-mod': 'Legacy Modernization',
      'managed-adm': 'Managed ADM',
      'consultation': 'General Consultation',
      'career': 'Career',
    };

    const serviceLabel = serviceLabels[service] || service;

    // Prepare email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1D9689 0%, #193F75 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #1D9689; margin-bottom: 5px; display: block; }
            .value { color: #333; }
            .message-box { background: white; padding: 15px; border-left: 4px solid #1D9689; margin-top: 10px; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Form Source: ${formSource}</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <span class="value">${name}</span>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <span class="value"><a href="mailto:${email}">${email}</a></span>
              </div>
              <div class="field">
                <span class="label">Phone:</span>
                <span class="value">${phone}</span>
              </div>
              <div class="field">
                <span class="label">Company:</span>
                <span class="value">${company}</span>
              </div>
              <div class="field">
                <span class="label">Service Interest:</span>
                <span class="value">${serviceLabel}</span>
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
              ${resumeAttachment ? '<div class="field"><span class="label">Resume:</span><span class="value">Attached (PDF)</span></div>' : ''}
              <div class="footer">
                <p>This email was sent from the Aplict Solutions website contact form.</p>
                <p>Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email
    // Note: For production, verify your domain in Resend and change the 'from' address
    // For testing, Resend allows using 'onboarding@resend.dev'
    // After domain verification, use: 'Aplict Solutions <noreply@aplictsolutions.com>'
    const emailData: any = {
      from: process.env.RESEND_FROM_EMAIL || 'Aplict Solutions <onboarding@resend.dev>',
      to: 'contact@aplictsolutions.com',
      subject: `New ${formSource} Submission: ${serviceLabel} - ${name}`,
      html: emailHtml,
      replyTo: email,
    };

    // Add resume attachment if present
    if (resumeAttachment) {
      emailData.attachments = [resumeAttachment];
    }

    if (!resend) {
      throw new Error('Resend is not initialized');
    }

    const { data, error } = await resend.emails.send(emailData);

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully. We will get back to you soon!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
