# Security, Privacy & Data Protection Architecture

This document outlines the defense-in-depth security model, patient confidentiality safeguards, encryption standards, and compliance policies implemented across the **Zulaid Chaudhary Foundation** digital platform.

---

## 1. Threat Modeling & Core Defense Principles

Humanitarian platforms handle high-risk data: medical records of vulnerable patients, personal identification of donors and volunteers, whistleblower complaints, and financial transactions. Our architecture assumes an adversarial internet environment:
- **Zero Trust Network:** No internal network or service is trusted implicitly. Every request must be authenticated, authorized, and rate-limited.
- **Principle of Least Privilege:** Database accounts, API tokens, and administrative roles possess only the minimum permissions necessary for their defined tasks.
- **Defense in Depth:** Security controls exist at the edge (Cloudflare/Vercel Middleware), application layer (Zod validation, RBAC guards), and data layer (encryption at rest, signed object URLs).

---

## 2. HTTP Security Headers & Transport Security

All traffic is strictly encrypted in transit via TLS 1.3. The application enforces strict headers on every response:

```typescript
// next.config.ts header security configuration

const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload', // 2 years HSTS
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY', // Prevent clickjacking
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(self)',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://js.stripe.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob: https://*.amazonaws.com https://*.cloudinary.com",
      "frame-src 'self' https://js.stripe.com https://hooks.stripe.com",
      "connect-src 'self' https://api.stripe.com https://*.neon.tech",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join('; '),
  },
];
```

---

## 3. Authentication & Access Control

### 3.1. Password Hashing & Key Derivation
- Passwords are encrypted using **Argon2id** (memory cost: 65,536 KB, iterations: 3, parallelism: 4) or Bcrypt with a work factor of 12.
- Plaintext passwords never touch application logs or persistent storage.

### 3.2. Administrative Multi-Factor Authentication (2FA)
- Time-based One-Time Passwords (TOTP RFC 6238) are mandatory for all administrative roles (`SUPER_ADMIN`, `ADMIN`, `MEDICAL_COORDINATOR`, `FINANCE_OFFICER`).
- TOTP secrets are encrypted at rest using AES-256-GCM prior to database storage.
- Single-use recovery backup codes are generated and cryptographically hashed upon 2FA setup.

### 3.3. Server-Side RBAC Enforcement
Client-side UI gating is treated purely as a visual convenience. All authorization is strictly enforced on the server in every Server Action and Route Handler:

```typescript
// Example: Server-side RBAC Guard
export async function requireRole(allowedRoles: Role[]) {
  const session = await auth();
  if (!session?.user) {
    throw new UnauthorizedError('Authentication required');
  }
  if (!allowedRoles.includes(session.user.role)) {
    await logSecurityIncident('UNAUTHORIZED_ACCESS_ATTEMPT', session.user.id);
    throw new ForbiddenError('Insufficient administrative privileges');
  }
  return session.user;
}
```

---

## 4. Patient Confidentiality & Medical Data Vault

In strict compliance with medical ethics and the project rules:
1. **Never Stored Unencrypted:** Personally identifiable medical information (patient full names, national identity numbers/CNIC, personal phone numbers) is encrypted at rest using application-managed AES-256-GCM.
2. **Private File Storage:** Medical reports, lab prescriptions, and diagnostic imaging are uploaded with `isPrivate: true` into access-controlled storage buckets. Direct public URLs do not exist; access requires a temporary signed URL valid for a maximum of 15 minutes, accessible only by verified Medical Coordinators.
3. **Mandatory Informed Consent Verification:**
   - No patient story, photo, or clinical detail can be published or associated with public stories without a verified physical or digital consent record (`isConsentVerified = true`).
   - Even when consent is provided, all public case studies anonymize names (e.g. "Patient M. from Lahore") to protect patient dignity.

---

## 5. Zero Cardholder Data & Financial Security

- **No Card Data:** The foundation never collects, transmits, or stores credit or debit card numbers, expiration dates, or security codes.
- **Client-Side Tokenization:** Credit card input is hosted inside secure Stripe Elements iframes. The foundation server receives only an opaque token or PaymentIntent reference.
- **Public Anonymity:** Public donor listings and reports never expose personal donor identities unless the donor explicitly opts in. Public donor ledgers default to "Anonymous Supporter".
- **Regulatory Gate / Feature Flag:** Online payment collection is gated behind an administrative feature flag (`PAYMENTS_ENABLED = false`), ensuring live processing is never enabled before formal legal registration and provider approvals are granted.

---

## 6. Abuse Prevention & Spam Defense

1. **Honeypot Fields:** Invisible decoy fields on all public contact, volunteer, and emergency forms to immediately trap automated bots.
2. **Cryptographic Turnstile / Captcha Adapter:** Optional pluggable challenge adapter for high-risk submission endpoints without degrading human user experience.
3. **Edge Rate Limiting:**
   - Public forms (Contact, Newsletter, Volunteer Application): Maximum 5 submissions per IP per 10 minutes.
   - Authentication endpoints: Maximum 5 failed attempts per 15 minutes before temporary lockout.
   - API endpoints: Maximum 100 requests per minute per IP.

---

## 7. Data Privacy & GDPR-Style User Rights

- **Data Portability:** Authenticated users can request a full machine-readable JSON archive of all personal data, volunteer applications, and donation history via `/dashboard/data-privacy`.
- **Right to Erasure:** Users can submit an account deletion request. Personal identifiers are permanently scrubbed from the active database while retaining anonymized financial ledger references as required by tax record-keeping regulations.
- **Whistleblower Confidentiality:** Complaints submitted via `/contact/complaint` can be filed completely anonymously without collecting IP addresses, ensuring safe reporting of misconduct.
