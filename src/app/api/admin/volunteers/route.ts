import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getVolunteers, updateVolunteerStatus } from "@/lib/mock-data";
import { logAuditAction } from "@/lib/audit";

export async function GET() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({ volunteers: getVolunteers() });
}

export async function PATCH(req: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { id, status, notes } = body;

  if (!id || !status) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const updated = updateVolunteerStatus(id, status, notes, session.name);
  if (!updated) {
    return NextResponse.json({ error: "Volunteer application not found" }, { status: 404 });
  }

  await logAuditAction({
    userId: session.id,
    userName: session.name,
    userRole: session.role,
    action: status === "APPROVED" ? "APPROVE" : status === "REJECTED" ? "REJECT" : "STATUS_CHANGE",
    entity: "VolunteerApplication",
    entityId: id,
    details: `Updated application ${updated.applicationNumber} to ${status}. Notes: ${notes || "None"}`,
    newData: { status, notes, reviewedBy: session.name },
    ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
  });

  return NextResponse.json({ success: true, volunteer: updated });
}
