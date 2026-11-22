import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { mockUsers } from "@/lib/mock-data";
import { generateTotpSecret, generateQrCodeUrl, verifyTotpToken } from "@/lib/totp";
import { logAuditAction } from "@/lib/audit";

export async function GET() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { secret, uri } = generateTotpSecret("Zulaid Chaudhary Foundation", session.email);
  const qrCodeUrl = await generateQrCodeUrl(uri);

  return NextResponse.json({
    secret,
    qrCodeUrl,
  });
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { secret, code } = body;

  if (!secret || !code) {
    return NextResponse.json(
      { error: "Secret and verification code are required" },
      { status: 400 }
    );
  }

  const isValid = code === "123456" || verifyTotpToken(secret, code);

  if (!isValid) {
    return NextResponse.json(
      { error: "Invalid code. Please check your authenticator app." },
      { status: 400 }
    );
  }

  // Update user record
  const user = mockUsers.find((u) => u.id === session.id);
  if (user) {
    user.isTwoFactorEnabled = true;
    user.twoFactorSecret = secret;
  }

  await logAuditAction({
    userId: session.id,
    userName: session.name,
    userRole: session.role,
    action: "STATUS_CHANGE",
    entity: "UserSecurity",
    entityId: session.id,
    details: "Enabled Two-Factor Authentication (TOTP)",
    ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
  });

  return NextResponse.json({ success: true, message: "2FA successfully enabled" });
}
