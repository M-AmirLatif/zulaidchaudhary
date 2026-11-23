import { NextRequest, NextResponse } from "next/server";
import { addMembership } from "@/lib/mock-data";
import { logAuditAction } from "@/lib/audit";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      city,
      tier = "Standard",
    } = body;

    if (!fullName || !email || !phone || !city) {
      return NextResponse.json(
        { error: "Name, email, phone number, and city are mandatory." },
        { status: 400 }
      );
    }

    const validTiers = ["Standard", "Supporting", "Founding Member"] as const;
    const selectedTier = validTiers.includes(tier) ? tier : "Standard";

    const newMembership = addMembership({
      fullName: String(fullName).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      city: String(city).trim(),
      tier: selectedTier,
    });

    await logAuditAction({
      userId: "public-membership-applicant",
      userName: newMembership.fullName,
      userRole: "MEMBER_USER",
      action: "CREATE",
      entity: "Membership",
      entityId: newMembership.id,
      details: `New chapter membership application: ${newMembership.membershipNumber} by ${newMembership.fullName} (${newMembership.tier})`,
      newData: { membershipNumber: newMembership.membershipNumber, tier: newMembership.tier },
      ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
    });

    return NextResponse.json({
      success: true,
      membershipNumber: newMembership.membershipNumber,
      message: "Membership registration submitted successfully. Awaiting administrative vetting.",
      membership: newMembership,
    });
  } catch (error) {
    console.error("Failed to submit membership:", error);
    return NextResponse.json(
      { error: "Internal server error while submitting membership application." },
      { status: 500 }
    );
  }
}
