import { NextRequest, NextResponse } from "next/server";
import { logAuditAction } from "@/lib/audit";

// In-memory registry for assistance requests
export interface AssistanceRecord {
  id: string;
  trackingNumber: string;
  type: "RATION_SUPPORT" | "WATER_WELL" | "EDUCATION_SCHOLARSHIP" | "EMERGENCY_AID";
  applicantName: string;
  contactNumber: string;
  city: string;
  details: string;
  status: "SUBMITTED" | "VERIFICATION_IN_PROGRESS" | "APPROVED" | "DISBURSED";
  submittedAt: string;
}

const mockAssistanceRequests: AssistanceRecord[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      type = "RATION_SUPPORT",
      applicantName,
      contactNumber,
      city,
      details,
    } = body;

    if (!applicantName || !contactNumber || !city) {
      return NextResponse.json(
        { error: "Applicant name, contact number, and city are required." },
        { status: 400 }
      );
    }

    const typePrefix =
      type === "WATER_WELL"
        ? "WELL"
        : type === "EDUCATION_SCHOLARSHIP"
        ? "EDU"
        : "AST";

    const trackingNumber = `ZCF-${typePrefix}-${Math.floor(100000 + Math.random() * 900000)}`;

    const newRequest: AssistanceRecord = {
      id: `ast-${Date.now().toString(36)}`,
      trackingNumber,
      type,
      applicantName: String(applicantName).trim(),
      contactNumber: String(contactNumber).trim(),
      city: String(city).trim(),
      details: String(details || "Direct assistance application").trim(),
      status: "SUBMITTED",
      submittedAt: new Date().toISOString(),
    };

    mockAssistanceRequests.unshift(newRequest);

    await logAuditAction({
      userId: "public-assistance-applicant",
      userName: newRequest.applicantName,
      userRole: "DONOR_USER",
      action: "CREATE",
      entity: "AssistanceRequest",
      entityId: newRequest.id,
      details: `New ${type} assistance request registered: ${newRequest.trackingNumber} by ${newRequest.applicantName} (${newRequest.city})`,
      newData: { trackingNumber: newRequest.trackingNumber, type: newRequest.type, city: newRequest.city },
      ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
    });

    return NextResponse.json({
      success: true,
      trackingNumber: newRequest.trackingNumber,
      message: "Assistance request logged successfully for verification.",
      request: newRequest,
    });
  } catch (error) {
    console.error("Failed to submit assistance request:", error);
    return NextResponse.json(
      { error: "Internal server error while logging assistance request." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ requests: mockAssistanceRequests });
}
