import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getHospitalUpdates, addHospitalUpdate } from "@/lib/mock-data";
import { logAuditAction } from "@/lib/audit";

export async function GET() {
  return NextResponse.json({ updates: getHospitalUpdates() });
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { phaseNumber, phaseTitleEn, phaseTitleUr, headlineEn, headlineUr, bodyEn, bodyUr } = body;

  const newUpd = addHospitalUpdate({
    phaseNumber: Number(phaseNumber) || 1,
    phaseTitleEn: phaseTitleEn || "Phase Update",
    phaseTitleUr: phaseTitleUr || phaseTitleEn,
    headlineEn,
    headlineUr: headlineUr || headlineEn,
    bodyEn,
    bodyUr: bodyUr || bodyEn,
    isVerifiedMilestone: true,
  });

  await logAuditAction({
    userId: session.id,
    userName: session.name,
    userRole: session.role,
    action: "CREATE",
    entity: "HospitalUpdate",
    entityId: newUpd.id,
    details: `Posted verified hospital update: ${headlineEn}`,
    newData: newUpd as unknown as Record<string, unknown>,
    ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
  });

  return NextResponse.json({ success: true, update: newUpd });
}
