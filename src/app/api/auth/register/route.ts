import { NextRequest, NextResponse } from "next/server";
import { mockUsers, UserRecord } from "@/lib/mock-data";
import { hashPassword } from "@/lib/password";
import { setSessionCookie } from "@/lib/auth";
import { logAuditAction } from "@/lib/audit";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters long" },
        { status: 400 }
      );
    }

    const existingUser = mockUsers.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );

    if (existingUser) {
      return NextResponse.json(
        { error: "An account with this email already exists" },
        { status: 409 }
      );
    }

    const passwordHash = await hashPassword(password);

    const newUser: UserRecord = {
      id: `usr-${Date.now().toString(36)}`,
      name,
      email,
      passwordHash,
      role: "DONOR_USER",
      isTwoFactorEnabled: false,
      preferredLanguage: "en",
      createdAt: new Date().toISOString(),
    };

    mockUsers.push(newUser);

    await setSessionCookie({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      isTwoFactorEnabled: false,
    });

    await logAuditAction({
      userId: newUser.id,
      userName: newUser.name,
      userRole: newUser.role,
      action: "CREATE",
      entity: "User",
      entityId: newUser.id,
      details: "New supporter account registered",
      newData: { name: newUser.name, email: newUser.email },
      ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
    });

    return NextResponse.json({
      success: true,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
      redirectTo: "/dashboard",
    });
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json(
      { error: "Failed to create account" },
      { status: 500 }
    );
  }
}
