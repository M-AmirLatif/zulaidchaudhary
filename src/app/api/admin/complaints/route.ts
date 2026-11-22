import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getComplaints, updateComplaintStatus } from "@/lib/mock-data";
import { logAuditAction } from "@/lib/audit";

export async function GET() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Whistleblower queue accessible only to Super Admin and Admin
  if (!["SUPER_ADMIN", "ADMIN"].includes(session.role)) {
    return NextResponse.json({ error: "Forbidden: Confidential whistleblower queue" }, { status: 403 });
  }

  return NextResponse.json({ complaints: getComplaints() });
}

export async function PATCH(req: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!["SUPER_ADMIN", "ADMIN"].includes(session.role)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json();
  const { id, status, findingsNotes } = body;

  const updated = updateComplaintStatus(id, status, findingsNotes, session.name);
  if (!updated) {
    return NextResponse.json({ error: "Complaint not found" }, { status: 404 });
  }

  await logAuditAction({
    userId: session.id,
    userName: session.name,
    userRole: session.role,
    action: "STATUS_CHANGE",
    entity: "Complaint",
    entityId: id,
    details: `Updated complaint ${updated.trackingReference} to ${status}`,
    newData: { status, findingsNotes, assignedInvestigator: session.name },
    ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
  });

  return NextResponse.json({ success: true, complaint: updated });
}
