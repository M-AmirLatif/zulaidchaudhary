import { NextRequest, NextResponse } from "next/server";
import { addMedicalCase, getMedicalCases } from "@/lib/mock-data";
import { logAuditAction } from "@/lib/audit";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    let dbCases = null;
    try {
      dbCases = await prisma.medicalCase.findMany({
        orderBy: { createdAt: "desc" },
      });
    } catch {
      // Prisma fallback
    }

    if (dbCases && dbCases.length > 0) {
      return NextResponse.json({ success: true, cases: dbCases });
    }

    return NextResponse.json({ success: true, cases: getMedicalCases() });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch medical cases" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      patientInitials,
      city,
      age,
      gender,
      diagnosisSummary,
      treatingPhysician,
      estimatedCostPKR,
      priority = "URGENT",
      hasInformedConsent,
    } = body;

    // Ethical & Medical Consent Gate
    if (!hasInformedConsent) {
      return NextResponse.json(
        { error: "Informed patient or guardian consent is mandatory before submitting medical assistance requests." },
        { status: 400 }
      );
    }

    if (!patientInitials || !city || !diagnosisSummary || !estimatedCostPKR) {
      return NextResponse.json(
        { error: "Please provide all required patient and clinical details." },
        { status: 400 }
      );
    }

    const newCase = addMedicalCase({
      patientInitials: String(patientInitials).slice(0, 5).toUpperCase(),
      city: String(city).trim(),
      age: Number(age) || 0,
      gender: String(gender || "Unspecified"),
      diagnosisSummary: String(diagnosisSummary).trim(),
      treatingPhysician: String(treatingPhysician || "Designated Hospital Consultant").trim(),
      estimatedCostPKR: Number(estimatedCostPKR) || 0,
      priority: priority === "EMERGENCY_CRITICAL" ? "EMERGENCY_CRITICAL" : "URGENT",
      hasInformedConsent: true,
      consentSignedDate: new Date().toISOString(),
      internalNotes: "Submitted via public medical assistance portal. Awaiting Clinical Vetting Committee review.",
    });

    // Persist to Neon Postgres
    try {
      const adminUser = await prisma.user.findFirst({
        where: { role: "SUPER_ADMIN" },
      });

      if (adminUser) {
        await prisma.medicalCase.create({
          data: {
            caseReferenceNumber: newCase.caseReferenceNumber,
            patientFullName: `Patient ${newCase.patientInitials}`,
            contactPhone: "Protected Patient Record",
            city: newCase.city,
            age: newCase.age,
            gender: newCase.gender,
            diagnosisSummary: newCase.diagnosisSummary,
            treatingPhysician: newCase.treatingPhysician,
            estimatedCost: newCase.estimatedCostPKR,
            priority: newCase.priority === "EMERGENCY_CRITICAL" ? "EMERGENCY_CRITICAL" : "URGENT",
            status: "INQUIRY",
            hasInformedConsent: true,
            consentSignedDate: new Date(),
            internalNotes: newCase.internalNotes,
            createdById: adminUser.id,
          },
        });
      }
    } catch (dbErr) {
      console.warn("Prisma medical case creation fallback:", dbErr);
    }

    await logAuditAction({
      userId: "public-medical-applicant",
      userName: `Patient ${newCase.patientInitials} (${newCase.city})`,
      userRole: "DONOR_USER",
      action: "CREATE",
      entity: "MedicalCase",
      entityId: newCase.id,
      details: `New medical assistance inquiry registered: ${newCase.caseReferenceNumber} (${newCase.city}) for estimated PKR ${newCase.estimatedCostPKR.toLocaleString()}`,
      newData: { caseReferenceNumber: newCase.caseReferenceNumber, city: newCase.city, estimatedCostPKR: newCase.estimatedCostPKR },
      ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
    });

    return NextResponse.json({
      success: true,
      caseReferenceNumber: newCase.caseReferenceNumber,
      message: "Medical assistance case registered successfully for administrative and clinical vetting.",
      case: newCase,
    });
  } catch (error) {
    console.error("Failed to register medical case:", error);
    return NextResponse.json(
      { error: "Internal server error while registering medical case." },
      { status: 500 }
    );
  }
}
