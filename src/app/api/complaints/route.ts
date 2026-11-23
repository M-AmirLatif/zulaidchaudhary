import { NextRequest, NextResponse } from "next/server";
import { addComplaint } from "@/lib/mock-data";
import { logAuditAction } from "@/lib/audit";

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
