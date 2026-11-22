import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getMedicalCases, updateMedicalCaseStatus } from "@/lib/mock-data";
import { logAuditAction } from "@/lib/audit";

export async function GET() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Access restricted to Super Admin, Admin, and Medical Coordinator
  if (!["SUPER_ADMIN", "ADMIN", "MEDICAL_COORDINATOR"].includes(session.role)) {
    return NextResponse.json({ error: "Forbidden: Confidential medical data" }, { status: 403 });
  }

  return NextResponse.json({ cases: getMedicalCases() });
}

export async function PATCH(req: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!["SUPER_ADMIN", "ADMIN", "MEDICAL_COORDINATOR"].includes(session.role)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json();
  const { id, status, hasConsent, notes } = body;

  const updated = updateMedicalCaseStatus(id, status, hasConsent, notes);
  if (!updated) {
    return NextResponse.json({ error: "Case not found" }, { status: 404 });
  }

  await logAuditAction({
    userId: session.id,
    userName: session.name,
    userRole: session.role,
    action: "STATUS_CHANGE",
    entity: "MedicalCase",
    entityId: id,
    details: `Updated medical case ${updated.caseReferenceNumber} to ${status}. Informed consent: ${updated.hasInformedConsent}`,
    newData: { status, hasInformedConsent: updated.hasInformedConsent, notes },
    ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
  });

  return NextResponse.json({ success: true, case: updated });
}
