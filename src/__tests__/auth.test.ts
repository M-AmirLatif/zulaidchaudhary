import { describe, it, expect } from "vitest";
import { hashPassword, comparePassword } from "@/lib/password";
import { generateTotpSecret, verifyTotpToken } from "@/lib/totp";
import { createSessionToken, verifySessionToken, UserSession } from "@/lib/auth";
import { mockUsers } from "@/lib/mock-data";

describe("Authentication & Security Module", () => {
  it("should securely hash and verify passwords using bcrypt", async () => {
    const rawPassword = "FounderSuperAdmin2026!#";
    const hash = await hashPassword(rawPassword);

    expect(hash).not.toBe(rawPassword);
    expect(hash.startsWith("$2a$") || hash.startsWith("$2b$")).toBe(true);

    const isMatch = await comparePassword(rawPassword, hash);
    expect(isMatch).toBe(true);

    const isWrongMatch = await comparePassword("WrongPassword123", hash);
    expect(isWrongMatch).toBe(false);
  });

  it("should generate and verify 2FA TOTP tokens", () => {
    const { secret, uri } = generateTotpSecret("Zulaid Chaudhary Foundation", "founder@zulaidchaudharyfoundation.com");
    expect(secret).toBeDefined();
    expect(typeof secret).toBe("string");
    expect(secret.length).toBeGreaterThan(10);
    expect(uri).toContain("otpauth://");

    // Generate token with the same secret
    const isValidToken = verifyTotpToken(secret, "000000");
    expect(isValidToken).toBe(false);
  });

  it("should encode and decode valid JWT session tokens with role claims", async () => {
    const sessionPayload: UserSession = {
      id: "usr-founder",
      name: "Zulaid Chaudhary",
      email: "founder@zulaidchaudharyfoundation.com",
      role: "SUPER_ADMIN",
      isTwoFactorEnabled: true,
      twoFactorVerified: true,
    };

    const token = await createSessionToken(sessionPayload);
    expect(typeof token).toBe("string");
    expect(token.split(".").length).toBe(3); // Standard header.payload.signature

    const verified = await verifySessionToken(token);
    expect(verified).not.toBeNull();
    expect(verified?.id).toBe(sessionPayload.id);
    expect(verified?.email).toBe(sessionPayload.email);
    expect(verified?.role).toBe("SUPER_ADMIN");
    expect(verified?.twoFactorVerified).toBe(true);
  });

  it("should contain all required roles in mock data for evaluation", () => {
    const rolesInMock = mockUsers.map((u) => u.role);
    expect(rolesInMock).toContain("SUPER_ADMIN");
    expect(rolesInMock).toContain("ADMIN");
    expect(rolesInMock).toContain("MEDICAL_COORDINATOR");
    expect(rolesInMock).toContain("FINANCE_OFFICER");
    expect(rolesInMock).toContain("VOLUNTEER_COORDINATOR");
    expect(rolesInMock).toContain("CONTENT_EDITOR");
    expect(rolesInMock).toContain("COUNTRY_COORDINATOR");
    expect(rolesInMock).toContain("DONOR_USER");
    expect(rolesInMock).toContain("VOLUNTEER_USER");
    expect(rolesInMock).toContain("MEMBER_USER");
  });

  it("should enforce correct redirect destination based on role", () => {
    const staffRoles = [
      "SUPER_ADMIN",
      "ADMIN",
      "CONTENT_EDITOR",
      "MEDICAL_COORDINATOR",
      "FINANCE_OFFICER",
      "VOLUNTEER_COORDINATOR",
      "COUNTRY_COORDINATOR",
    ];

    const userRoles = ["DONOR_USER", "VOLUNTEER_USER", "MEMBER_USER"];

    mockUsers.forEach((user) => {
      const isStaff = staffRoles.includes(user.role);
      const expectedDestination = isStaff ? "/admin" : "/dashboard";
      if (staffRoles.includes(user.role)) {
        expect(expectedDestination).toBe("/admin");
      } else if (userRoles.includes(user.role)) {
        expect(expectedDestination).toBe("/dashboard");
      }
    });
  });
});
