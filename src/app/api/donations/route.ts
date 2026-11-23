import { NextRequest, NextResponse } from "next/server";
import { getDonations, addDonation } from "@/lib/mock-data";
import { logAuditAction } from "@/lib/audit";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Currency, PaymentMethod, PaymentStatus } from "@prisma/client";

function mapPaymentMethod(method: string): PaymentMethod {
  const m = String(method).toUpperCase();
  if (m.includes("BANK") || m.includes("WIRE")) return PaymentMethod.BANK_TRANSFER;
  if (m.includes("JAZZ")) return PaymentMethod.JAZZCASH;
  if (m.includes("EASY")) return PaymentMethod.EASYPAISA;
  if (m.includes("RAAST")) return PaymentMethod.RAAST_INSTANT;
  return PaymentMethod.STRIPE_CARD;
}

function mapCurrency(curr: string): Currency {
  const c = String(curr).toUpperCase();
  if (c === "USD") return Currency.USD;
  if (c === "GBP") return Currency.GBP;
  if (c === "EUR") return Currency.EUR;
  if (c === "AED") return Currency.AED;
  if (c === "CAD") return Currency.CAD;
  return Currency.PKR;
}

export async function GET(req: NextRequest) {
  try {
    let dbDonations = null;
    try {
      dbDonations = await prisma.donation.findMany({
        orderBy: { createdAt: "desc" },
        include: { receipt: true },
      });
    } catch {
      // Prisma fallback
    }

    if (dbDonations && dbDonations.length > 0) {
      return NextResponse.json({ success: true, donations: dbDonations });
    }

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

    // Persist to Neon Postgres
    try {
      await prisma.donation.create({
        data: {
          receiptNumber: newDonation.receiptNumber,
          userId: sessionUser?.id || null,
          donorName: newDonation.donorName,
          donorEmail: newDonation.donorEmail,
          donorPhone: newDonation.donorPhone,
          isAnonymous: newDonation.isAnonymous,
          amount: newDonation.amount,
          currency: mapCurrency(newDonation.currency),
          causeTag: newDonation.cause,
          paymentMethod: mapPaymentMethod(newDonation.paymentMethod),
          paymentStatus: PaymentStatus.SUCCEEDED,
          providerReference: newDonation.transactionReference,
          receipt: {
            create: {
              receiptNumber: newDonation.receiptNumber,
              taxExemptDeductible: false,
              disclaimerText: "Electronic receipt issued in compliant preview/test mode.",
            },
          },
        },
      });
    } catch (dbErr) {
      console.warn("Prisma donation creation fallback:", dbErr);
    }

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
