import { NextRequest, NextResponse } from "next/server";
import { mockUsers } from "@/lib/mock-data";
import { comparePassword } from "@/lib/password";
import { setSessionCookie } from "@/lib/auth";
import { verifyTotpToken } from "@/lib/totp";
import { logAuditAction } from "@/lib/audit";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password, totpCode } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = mockUsers.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Check password: allow standard 'Password123!' or hashed comparison
    const isPasswordValid =
      password === "Password123!" ||
      (await comparePassword(password, user.passwordHash));

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // If 2FA is enabled on this administrative account
    if (user.isTwoFactorEnabled) {
      if (!totpCode) {
        return NextResponse.json({
          requiresTwoFactor: true,
          message: "Please enter your 6-digit authenticator code (or use 123456 for demo)",
        });
      }

      // Verify TOTP code (allow 123456 as bypass for dev/demo, or verify actual secret)
      const isValidTotp =
        totpCode === "123456" ||
        (user.twoFactorSecret && verifyTotpToken(user.twoFactorSecret, totpCode));

      if (!isValidTotp) {
        return NextResponse.json(
          { error: "Invalid two-factor authentication code" },
          { status: 401 }
        );
      }
    }

    // Set session cookie
    await setSessionCookie({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      isTwoFactorEnabled: user.isTwoFactorEnabled,
      twoFactorVerified: true,
    });

    // Record login in audit log
    await logAuditAction({
      userId: user.id,
      userName: user.name,
      userRole: user.role,
      action: "STATUS_CHANGE",
      entity: "UserSession",
      entityId: user.id,
      details: `User signed in successfully with role ${user.role}`,
      newData: { email: user.email, role: user.role },
      ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
    });

    const isStaff = [
      "SUPER_ADMIN",
      "ADMIN",
      "MEDICAL_COORDINATOR",
      "FINANCE_OFFICER",
      "VOLUNTEER_COORDINATOR",
    ].includes(user.role);

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      redirectTo: isStaff ? "/admin" : "/dashboard",
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
