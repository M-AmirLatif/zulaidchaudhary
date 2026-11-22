import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type UserRole =
  | "SUPER_ADMIN"
  | "ADMIN"
  | "CONTENT_EDITOR"
  | "MEDICAL_COORDINATOR"
  | "FINANCE_OFFICER"
  | "VOLUNTEER_COORDINATOR"
  | "COUNTRY_COORDINATOR"
  | "DONOR_USER"
  | "VOLUNTEER_USER"
  | "MEMBER_USER";

export interface UserSession {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  isTwoFactorEnabled: boolean;
  twoFactorVerified?: boolean;
}

const JWT_SECRET = new TextEncoder().encode(
  process.env.NEXTAUTH_SECRET || "zcf_foundation_secure_key_2026_super_secret_jwt"
);

const COOKIE_NAME = "zcf_session";

export async function createSessionToken(session: UserSession): Promise<string> {
  return new SignJWT({ ...session })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(JWT_SECRET);
}

export async function verifySessionToken(token: string): Promise<UserSession | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as unknown as UserSession;
  } catch {
    return null;
  }
}

export async function getSession(): Promise<UserSession | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifySessionToken(token);
}

export async function setSessionCookie(session: UserSession) {
  const token = await createSessionToken(session);
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  });
}

export async function clearSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function requireAuth(locale: string = "en"): Promise<UserSession> {
  const session = await getSession();
  if (!session) {
    redirect(`/${locale}/auth/login`);
  }
  return session;
}

export async function requireRole(
  allowedRoles: UserRole[],
  locale: string = "en"
): Promise<UserSession> {
  const session = await requireAuth(locale);
  if (!allowedRoles.includes(session.role)) {
    redirect(`/${locale}/dashboard`);
  }
  return session;
}
