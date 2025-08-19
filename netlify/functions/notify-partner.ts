import type { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    
    // Handle API key issuance
    if (body.api_key) {
      const { to, subject, html, api_key, webhook_secret, org_name } = body;
      
      // Send to partner
      const partnerEmail = await sendEmail({
        to,
        subject: subject || `CareAI API access for ${org_name}`,
        html: html || `
          <p>Hello ${org_name},</p>
          <p>Your CareAI API access is ready.</p>
          <p><b>API Key (copy and store safely):</b> ${api_key}</p>
          <p><b>Webhook secret:</b> ${webhook_secret}</p>
          <p>Docs: https://www.careai.app/en/integrations/guide</p>
          <p>Regards,<br/>CareAI Support</p>
        `
      });

      // Notify support team
      await sendEmail({
        to: 'support@careai.app',
        subject: `API Key issued for ${org_name}`,
        html: `
          <p>API key has been issued for ${org_name}</p>
          <p>Key prefix: ${api_key.slice(0, 8)}...</p>
          <p>Webhook secret: ${webhook_secret}</p>
        `
      });

      return { statusCode: 200, body: 'API key notification sent' };
    }

    // Handle regular partner inquiries (existing logic)
    const { type, org_name, contact_name, work_email, phone, message, role, locale } = body;

    // Send to partner
    const partnerEmail = await sendEmail({
      to: work_email,
      subject: `Thank you for your interest in CareAI - ${type}`,
      html: `
        <p>Hello ${contact_name},</p>
        <p>Thank you for your interest in partnering with CareAI for ${type}.</p>
        <p>We've received your inquiry and our team will review it within 24 hours.</p>
        <p>In the meantime, if you have any questions, please don't hesitate to reach out.</p>
        <p>Best regards,<br/>CareAI Partnership Team</p>
      `
    });

    // Notify support team
    await sendEmail({
      to: 'support@careai.app',
      subject: `New Partner Inquiry: ${type} - ${org_name}`,
      html: `
        <p><strong>New Partner Inquiry</strong></p>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Organization:</strong> ${org_name}</p>
        <p><strong>Contact:</strong> ${contact_name} (${work_email})</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Locale:</strong> ${locale}</p>
      `
    });

    return { statusCode: 200, body: 'Partner notification sent' };
  } catch (error) {
    console.error('Error sending notification:', error);
    return { statusCode: 500, body: 'Error sending notification' };
  }
};

async function sendEmail({ to, subject, html }: { to: string; subject: string; html: string }) {
  // This would integrate with your email service (Resend, SendGrid, etc.)
  // For now, we'll log the email details
  console.log('Email would be sent:', { to, subject, html });
  
  // TODO: Replace with actual email service integration
  // Example with Resend:
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // return await resend.emails.send({ from: 'CareAI <noreply@careai.app>', to, subject, html });
  
  return { success: true };
}
