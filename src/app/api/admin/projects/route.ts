import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getProjects, addProject } from "@/lib/mock-data";
import { logAuditAction } from "@/lib/audit";

export async function GET() {
  return NextResponse.json({ projects: getProjects() });
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { titleEn, titleUr, summaryEn, summaryUr, category, status, targetBudget, location } = body;

  if (!titleEn || !summaryEn) {
    return NextResponse.json({ error: "Title and summary are required" }, { status: 400 });
  }

  const slug = titleEn.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

  const newProj = addProject({
    slug,
    titleEn,
    titleUr: titleUr || titleEn,
    summaryEn,
    summaryUr: summaryUr || summaryEn,
    category: category || "HEALTHCARE_ASSISTANCE",
    status: status || "PLANNED",
    targetBudget: Number(targetBudget) || 0,
    raisedAmount: 0,
    currency: "PKR",
    location: location || "Pakistan",
    isVerifiedMilestone: true,
  });

  await logAuditAction({
    userId: session.id,
    userName: session.name,
    userRole: session.role,
    action: "CREATE",
    entity: "Project",
    entityId: newProj.id,
    details: `Created new project: ${newProj.titleEn} (${newProj.category})`,
    newData: newProj as unknown as Record<string, unknown>,
    ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
  });

  return NextResponse.json({ success: true, project: newProj });
}
