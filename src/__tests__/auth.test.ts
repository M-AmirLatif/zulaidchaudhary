import { describe, it, expect } from "vitest";
import { hashPassword, comparePassword } from "@/lib/password";
import { generateTotpSecret, verifyTotpToken } from "@/lib/totp";

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
});
