import { NextRequest, NextResponse } from "next/server";
import { addComplaint, getComplaints } from "@/lib/mock-data";
import { logAuditAction } from "@/lib/audit";
import { prisma } from "@/lib/prisma";
import { ComplaintCategory } from "@prisma/client";

function mapComplaintCategory(cat: string): ComplaintCategory {
  const normalized = cat.toLowerCase();
  if (normalized.includes("financ") || normalized.includes("money") || normalized.includes("audit")) {
    return ComplaintCategory.FINANCIAL_TRANSPARENCY;
  }
  if (normalized.includes("volunt")) {
    return ComplaintCategory.VOLUNTEER_CONDUCT;
  }
  if (normalized.includes("medic") || normalized.includes("doctor") || normalized.includes("hospital")) {
    return ComplaintCategory.MEDICAL_DISBURSEMENT;
  }
  if (normalized.includes("staff") || normalized.includes("employee")) {
    return ComplaintCategory.STAFF_MISCONDUCT;
  }
  if (normalized.includes("privac") || normalized.includes("data") || normalized.includes("consent")) {
    return ComplaintCategory.DONOR_PRIVACY;
  }
  return ComplaintCategory.GENERAL_FEEDBACK;
}

export async function GET() {
  try {
    let dbComplaints = null;
    try {
      dbComplaints = await prisma.complaint.findMany({
        orderBy: { createdAt: "desc" },
      });
    } catch {
      // Prisma fallback
    }

    if (dbComplaints && dbComplaints.length > 0) {
      return NextResponse.json({ success: true, complaints: dbComplaints });
    }

    return NextResponse.json({ success: true, complaints: getComplaints() });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch complaints" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      category = "General Inquiry",
      subject,
      description,
      complainantContact,
      isConfidential = true,
    } = body;

    if (!subject || !description) {
      return NextResponse.json(
        { error: "Subject and detailed description are required." },
        { status: 400 }
      );
    }

    const newComplaint = addComplaint({
      category: String(category).trim(),
      subject: String(subject).trim(),
      description: String(description).trim(),
      complainantContact: complainantContact ? String(complainantContact).trim() : undefined,
      isConfidential: Boolean(isConfidential),
    });

    // Persist to Neon Postgres
    try {
      await prisma.complaint.create({
        data: {
          trackingReference: newComplaint.trackingReference,
          category: mapComplaintCategory(category),
          subject: newComplaint.subject,
          description: newComplaint.description,
          complainantEmail: complainantContact ? String(complainantContact).trim() : null,
          isConfidential: Boolean(isConfidential),
          status: "SUBMITTED",
        },
      });
    } catch (dbErr) {
      console.warn("Prisma complaint creation fallback:", dbErr);
    }

    await logAuditAction({
      userId: "public-inquiry-user",
      userName: complainantContact || "Confidential Complainant",
      userRole: "DONOR_USER",
      action: "CREATE",
      entity: "Complaint",
      entityId: newComplaint.id,
      details: `New confidential inquiry/complaint logged: ${newComplaint.trackingReference} under category '${newComplaint.category}'`,
      newData: { trackingReference: newComplaint.trackingReference, category: newComplaint.category },
      ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
    });

    return NextResponse.json({
      success: true,
      trackingReference: newComplaint.trackingReference,
      message: "Your submission has been logged securely under strict confidentiality standards.",
      complaint: newComplaint,
    });
  } catch (error) {
    console.error("Failed to submit inquiry/complaint:", error);
    return NextResponse.json(
      { error: "Internal server error while logging submission." },
      { status: 500 }
    );
  }
}
