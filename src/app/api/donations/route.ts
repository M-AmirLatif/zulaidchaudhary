import { NextRequest, NextResponse } from "next/server";
import { getDonations, addDonation } from "@/lib/mock-data";
import { logAuditAction } from "@/lib/audit";
import { getSession } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const donations = getDonations();
    return NextResponse.json({ success: true, donations });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      donorName,
      donorEmail,
      donorPhone,
      isAnonymous,
      amount,
      currency,
      frequency,
      cause,
      paymentMethod,
      transactionReference,
      notes,
    } = body;

    if (!amount || amount <= 0 || !cause) {
      return NextResponse.json(
        { error: "Amount and cause are required." },
        { status: 400 }
      );
    }

    const sessionUser = await getSession();

    const newDonation = addDonation({
      donorName: isAnonymous ? "Anonymous Donor" : donorName || "Kind Supporter",
      donorEmail: donorEmail || "supporter@example.com",
      donorPhone: donorPhone || "",
      isAnonymous: Boolean(isAnonymous),
      amount: Number(amount),
      currency: currency || "PKR",
      frequency: frequency || "ONE_TIME",
      cause,
      paymentMethod: paymentMethod || "STRIPE_CARD",
      status: "COMPLETED",
      transactionReference:
        transactionReference || `TXN-${Date.now().toString(36).toUpperCase()}`,
      notes: notes || "Online portal donation in compliant test mode.",
    });

    await logAuditAction({
      userId: sessionUser?.id || "public-supporter",
      userName: sessionUser?.name || "Kind Supporter",
      userRole: sessionUser?.role || "DONOR_USER",
      action: "CREATE",
      entity: "DonationRecord",
      entityId: newDonation.id,
      details: `Received donation of ${newDonation.currency} ${newDonation.amount} for ${newDonation.cause}`,
      newData: {
        receiptNumber: newDonation.receiptNumber,
        amount: newDonation.amount,
        currency: newDonation.currency,
        cause: newDonation.cause,
        paymentMethod: newDonation.paymentMethod,
      },
    });

    return NextResponse.json({
      success: true,
      donation: newDonation,
      receiptNumber: newDonation.receiptNumber,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to record donation";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
