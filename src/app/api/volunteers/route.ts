import { NextRequest, NextResponse } from "next/server";
import { addVolunteer } from "@/lib/mock-data";
import { logAuditAction } from "@/lib/audit";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      city,
      profession,
      skills = [],
      availabilityHours = 4,
      motivation,
    } = body;

    if (!fullName || !email || !phone || !city) {
      return NextResponse.json(
        { error: "Name, email, phone number, and city are mandatory." },
        { status: 400 }
      );
    }

    const newVolunteer = addVolunteer({
      fullName: String(fullName).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      city: String(city).trim(),
      profession: String(profession || "Professional / Student").trim(),
      skills: Array.isArray(skills) ? skills : [String(skills)],
      availabilityHours: Number(availabilityHours) || 4,
      motivation: String(motivation || "Committed to humanitarian and healthcare service.").trim(),
    });

    await logAuditAction({
      userId: "public-volunteer-applicant",
      userName: newVolunteer.fullName,
      userRole: "VOLUNTEER_USER",
      action: "CREATE",
      entity: "VolunteerApplication",
      entityId: newVolunteer.id,
      details: `New volunteer application submitted: ${newVolunteer.applicationNumber} by ${newVolunteer.fullName} (${newVolunteer.city})`,
      newData: { applicationNumber: newVolunteer.applicationNumber, city: newVolunteer.city },
      ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
    });

    return NextResponse.json({
      success: true,
      applicationNumber: newVolunteer.applicationNumber,
      message: "Volunteer application submitted successfully. Founder / Admin review required before approval.",
      volunteer: newVolunteer,
    });
  } catch (error) {
    console.error("Failed to submit volunteer application:", error);
    return NextResponse.json(
      { error: "Internal server error while submitting volunteer application." },
      { status: 500 }
    );
  }
}
