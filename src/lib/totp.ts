import * as OTPAuth from "otpauth";
import QRCode from "qrcode";

export function generateTotpSecret(issuer: string, userEmail: string) {
  const totp = new OTPAuth.TOTP({
    issuer: issuer || "Zulaid Chaudhary Foundation",
    label: userEmail,
    algorithm: "SHA1",
    digits: 6,
    period: 30,
    secret: new OTPAuth.Secret({ size: 20 }),
  });

  return {
    secret: totp.secret.base32,
    uri: totp.toString(),
  };
}

export async function generateQrCodeUrl(otpauthUri: string): Promise<string> {
  return QRCode.toDataURL(otpauthUri);
}

export function verifyTotpToken(secretBase32: string, token: string): boolean {
  const totp = new OTPAuth.TOTP({
    issuer: "Zulaid Chaudhary Foundation",
    algorithm: "SHA1",
    digits: 6,
    period: 30,
    secret: OTPAuth.Secret.fromBase32(secretBase32),
  });

  // window = 1 allows 1 period backward or forward to tolerate clock drift
  const delta = totp.validate({ token, window: 1 });
  return delta !== null;
}
