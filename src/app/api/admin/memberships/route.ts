import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getMemberships, updateMembershipStatus } from "@/lib/mock-data";
import { logAuditAction } from "@/lib/audit";

export async function GET() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({ memberships: getMemberships() });
}

export async function PATCH(req: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { id, status } = body;

  if (!id || !status) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const updated = updateMembershipStatus(id, status, session.name);
  if (!updated) {
    return NextResponse.json({ error: "Membership not found" }, { status: 404 });
  }

  await logAuditAction({
    userId: session.id,
    userName: session.name,
    userRole: session.role,
    action: status === "APPROVED" ? "APPROVE" : "REJECT",
    entity: "Membership",
    entityId: id,
    details: `Updated membership ${updated.membershipNumber} to ${status}`,
    newData: { status, reviewedBy: session.name },
    ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
  });

  return NextResponse.json({ success: true, membership: updated });
}
