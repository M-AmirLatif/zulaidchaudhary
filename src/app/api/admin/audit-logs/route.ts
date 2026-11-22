import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getAuditLogs } from "@/lib/audit";

export async function GET() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Immutable audit logs accessible to Super Admin and Admin
  if (!["SUPER_ADMIN", "ADMIN"].includes(session.role)) {
    return NextResponse.json({ error: "Forbidden: Audit log access restricted" }, { status: 403 });
  }

  const logs = await getAuditLogs();
  return NextResponse.json({ logs });
}
