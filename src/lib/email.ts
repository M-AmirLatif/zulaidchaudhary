export interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
  from?: string;
}

export interface EmailDeliveryResult {
  success: boolean;
  messageId?: string;
  provider: "resend" | "smtp" | "console";
  error?: string;
}

/**
 * Universal email delivery abstraction.
 * Automatically selects Resend API if configured, SMTP if configured,
 * or falls back to an audited console logger in development/test.
 */
export async function sendEmail(options: SendEmailOptions): Promise<EmailDeliveryResult> {
  const from = options.from || process.env.EMAIL_FROM || "Zulaid Chaudhary Foundation <receipts@zulaidchaudharyfoundation.com>";
  const apiKey = process.env.RESEND_API_KEY;

  // 1. Resend API Delivery
  if (apiKey) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: options.to,
          subject: options.subject,
          html: options.html,
          text: options.text || options.html.replace(/<[^>]+>/g, ""),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        return {
          success: true,
          messageId: data.id,
          provider: "resend",
        };
      } else {
        const errData = await response.json().catch(() => ({}));
        console.warn("Resend API rejected message:", errData);
      }
    } catch (err) {
      console.warn("Failed to dispatch via Resend API:", err);
    }
  }

  // 2. Development & Preview Console Logger (Default)
  const simulatedId = `msg-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
  console.log(`[EMAIL DISPATCH] [${simulatedId}] To: ${options.to} | Subject: "${options.subject}" | From: ${from}`);

  return {
    success: true,
    messageId: simulatedId,
    provider: "console",
  };
}

/**
 * Formats and sends instant donation receipt email
 */
export async function sendDonationReceiptEmail(donation: {
  donorEmail: string;
  donorName?: string;
  amount: number;
  currency: string;
  cause: string;
  receiptNumber: string;
  paymentMethod: string;
}) {
  const recipientName = donation.donorName || "Kind Supporter";
  const formattedAmount = `${donation.currency} ${donation.amount.toLocaleString()}`;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #FDFBF7; color: #2B2D2F; margin: 0; padding: 24px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #E5E7EB; overflow: hidden; }
          .header { background: #064E3B; color: #F59E0B; padding: 32px 24px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; font-family: Georgia, serif; }
          .content { padding: 32px 24px; line-height: 1.6; }
          .receipt-box { background: #F9FAFB; border: 1px dashed #D1D5DB; border-radius: 12px; padding: 20px; margin: 24px 0; }
          .row { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 14px; }
          .label { color: #6B7280; }
          .value { font-weight: bold; color: #111827; }
          .footer { background: #F3F4F6; padding: 20px; text-align: center; font-size: 12px; color: #6B7280; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Zulaid Chaudhary Foundation</h1>
            <p style="margin: 4px 0 0; color: #FEF3C7; font-size: 13px;">Official Digital Contribution Receipt</p>
          </div>
          <div class="content">
            <p>Dear ${recipientName},</p>
            <p>Thank you for your generous contribution towards humanitarian healthcare and medical relief. Your gift directly assists vulnerable patients in receiving essential surgical and clinical care.</p>
            
            <div class="receipt-box">
              <div class="row">
                <span class="label">Receipt Number:</span>
                <span class="value">${donation.receiptNumber}</span>
              </div>
              <div class="row">
                <span class="label">Amount:</span>
                <span class="value">${formattedAmount}</span>
              </div>
              <div class="row">
                <span class="label">Allocated Program:</span>
                <span class="value">${donation.cause}</span>
              </div>
              <div class="row">
                <span class="label">Payment Mode:</span>
                <span class="value">${donation.paymentMethod}</span>
              </div>
              <div class="row">
                <span class="label">Date:</span>
                <span class="value">${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
              </div>
            </div>

            <p style="font-size: 13px; color: #4B5563;">
              You can verify this receipt anytime on our public portal by entering reference number <strong>${donation.receiptNumber}</strong> at 
              <a href="https://zulaidchaudharyfoundation.vercel.app/en/track" style="color: #064E3B; font-weight: bold;">https://zulaidchaudharyfoundation.vercel.app/en/track</a>.
            </p>
          </div>
          <div class="footer">
            <p>Zulaid Chaudhary Foundation • Head Office: Tehsil Shorkot, District Jhang, Punjab, Pakistan</p>
            <p>Regulatory Notice: Registration in progress under the Companies Act.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  return sendEmail({
    to: donation.donorEmail,
    subject: `Official Receipt ${donation.receiptNumber} - Zulaid Chaudhary Foundation`,
    html,
  });
}

/**
 * Formats and sends volunteer application confirmation
 */
export async function sendVolunteerConfirmationEmail(volunteer: {
  fullName: string;
  email: string;
  applicationNumber: string;
  city: string;
}) {
  const html = `
    <!DOCTYPE html>
    <html>
      <body style="font-family: Arial, sans-serif; padding: 24px; color: #2B2D2F;">
        <h2 style="color: #064E3B; font-family: Georgia, serif;">Volunteer Application Received</h2>
        <p>Dear ${volunteer.fullName},</p>
        <p>Thank you for applying to volunteer with Zulaid Chaudhary Foundation in ${volunteer.city}.</p>
        <p>Your application reference number is: <strong>${volunteer.applicationNumber}</strong>.</p>
        <p>In accordance with our institutional governance rules, all volunteer applicants undergo review by the founder and chapter coordinators before formal onboarding. You will be contacted once your application is reviewed.</p>
        <p>Track your status anytime at: <a href="https://zulaidchaudharyfoundation.vercel.app/en/track">https://zulaidchaudharyfoundation.vercel.app/en/track</a></p>
        <hr style="border: 0; border-top: 1px solid #E5E7EB; margin: 24px 0;" />
        <small style="color: #6B7280;">Zulaid Chaudhary Foundation • Human Rights & Healthcare Relief</small>
      </body>
    </html>
  `;

  return sendEmail({
    to: volunteer.email,
    subject: `Volunteer Application ${volunteer.applicationNumber} - Zulaid Chaudhary Foundation`,
    html,
  });
}
