import { describe, it, expect } from "vitest";
import { sendEmail, sendDonationReceiptEmail, sendVolunteerConfirmationEmail } from "@/lib/email";

describe("Email Delivery Layer", () => {
  it("should successfully deliver email via console fallback in test mode", async () => {
    const result = await sendEmail({
      to: "donor@example.com",
      subject: "Test Contribution Confirmation",
      html: "<p>Thank you for your donation.</p>",
    });

    expect(result.success).toBe(true);
    expect(result.provider).toBe("console");
    expect(result.messageId).toBeDefined();
    expect(result.messageId?.startsWith("msg-")).toBe(true);
  });

  it("should format and dispatch donation receipt email", async () => {
    const result = await sendDonationReceiptEmail({
      donorEmail: "supporter@example.com",
      donorName: "Kind Supporter",
      amount: 15000,
      currency: "PKR",
      cause: "Emergency Patient Surgery",
      receiptNumber: "ZCF-2026-TEST",
      paymentMethod: "STRIPE_CARD",
    });

    expect(result.success).toBe(true);
    expect(result.messageId).toBeDefined();
  });

  it("should dispatch volunteer application receipt", async () => {
    const result = await sendVolunteerConfirmationEmail({
      fullName: "Ali Khan",
      email: "ali@example.com",
      applicationNumber: "V-2026-TEST",
      city: "Shorkot",
    });

    expect(result.success).toBe(true);
    expect(result.messageId).toBeDefined();
  });
});
