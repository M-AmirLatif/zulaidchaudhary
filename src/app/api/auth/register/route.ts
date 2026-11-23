import { NextRequest, NextResponse } from "next/server";
import { mockUsers, UserRecord } from "@/lib/mock-data";
import { hashPassword } from "@/lib/password";
import { setSessionCookie } from "@/lib/auth";
import { logAuditAction } from "@/lib/audit";
import { prisma } from "@/lib/prisma";

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

    const passwordHash = await hashPassword(password);

    // 1. Persist to live PostgreSQL database if available
    let createdUser = null;
    try {
      const existing = await prisma.user.findUnique({
        where: { email: email.toLowerCase() },
      });
      if (existing) {
        return NextResponse.json(
          { error: "An account with this email already exists" },
          { status: 409 }
        );
      }
      createdUser = await prisma.user.create({
        data: {
          name,
          email: email.toLowerCase(),
          passwordHash,
          role: "DONOR_USER",
          isActive: true,
        },
      });
    } catch {
      // Fallback to in-memory store
    }

    const existingUser = mockUsers.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );

    if (!createdUser && existingUser) {
      return NextResponse.json(
        { error: "An account with this email already exists" },
        { status: 409 }
      );
    }

    const userId = createdUser?.id || `usr-${Date.now().toString(36)}`;

    const newUser: UserRecord = {
      id: userId,
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
      details: `User account registered: ${newUser.email}`,
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
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
