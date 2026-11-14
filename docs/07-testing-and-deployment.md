# Testing Strategy & Deployment Operations

This document establishes the testing protocols, CI/CD pipeline, backup/disaster recovery procedures, and infrastructure deployment topology for the **Zulaid Chaudhary Foundation** digital platform (`ZulaidChaudharyFoundation.com`).

---

## 1. Testing Strategy & Quality Assurance Pyramid

We follow a rigorous three-tiered testing strategy ensuring all critical humanitarian flows, RBAC gates, and medical consent verifications are bulletproof.

```
       / \
      / E2E \        Playwright (Critical donor journeys, admin approvals, mobile viewports)
     /-------\
    /  Integ  \      Integration tests (API routes, Prisma mutations, RBAC server actions)
   /-----------\
  /    Unit     \    Vitest (Validators, currency conversions, i18n dictionary parity)
 /---------------\
```

### 1.1. Unit Testing (Vitest)
- **Scope:**
  - Input validation schemas (Zod schemas for medical assistance, donations, volunteer applications).
  - Currency conversion and formatted locale output (PKR, USD, GBP formatting).
  - Translation key parity (verifying that all keys in `en.json` exist symmetrically in `ur.json`).
  - Security utilities (TOTP validation, token generation, rate limiters).
- **Execution:** Fast, parallel in-memory testing executed prior to any build.

### 1.2. Integration & Server Action Testing (Vitest + Test DB)
- **Scope:**
  - Administrative role authorization checks (verifying that non-admins cannot mutate `MedicalCase` or publish `Article`).
  - Consent verification guard (confirming `Story` creation fails if `isConsentVerified` is false).
  - Donation receipt creation and deterministic receipt number generation.
  - Audit log event dispatching on sensitive record mutations.

### 1.3. End-to-End Testing (Playwright)
- **Scope:**
  - Complete donation workflow in test mode across desktop and mobile viewports.
  - Multi-language switching (English to Urdu RTL) checking visual element alignment and font rendering.
  - Admin login with 2FA TOTP simulation, navigating to the patient queue and approving a volunteer application.
  - Complaint tracking workflow using tracking codes.
- **Viewports Tested:**
  - Mobile Small: `375 x 667` (iPhone SE)
  - Mobile Standard: `390 x 844` (iPhone 14)
  - Tablet: `768 x 1024` (iPad portrait)
  - Desktop Standard: `1440 x 900`
  - High-Resolution Desktop: `1920 x 1080`

---

## 2. Continuous Integration & Pre-Commit Verification

Every pull request or commit to `main` must pass the following automated gate:

```bash
# Verification Pipeline
npm run lint         # ESLint check for TypeScript & Next.js rules
npm run type-check   # Strict tsc verification (zero any/untyped code)
npm run test:unit    # Vitest suite for schemas & business logic
npm run build        # Production Next.js build verification
npm run test:e2e     # Playwright headless browser test run
```

---

## 3. Infrastructure & Deployment Topology

### 3.1. Primary Deployment Stack
- **Web Application Host:** **Vercel Pro**
  - Next.js Edge Middleware for geo-routing, security headers, and internationalization.
  - Incremental Static Regeneration (ISR) with Edge caching for static pages.
  - Serverless functions for dynamic API routes, webhooks, and administrative actions.
- **Relational Database:** **Neon Serverless PostgreSQL** (or **Supabase**)
  - Managed PostgreSQL 16+ with automated connection pooling via PgBouncer.
  - Zero-maintenance auto-scaling storage and compute.
  - Branching capabilities: Instant copy-on-write preview databases for staging environments.
- **Media & File Storage:** **AWS S3 / Cloudflare R2**
  - Private bucket for confidential medical records and signed audit PDFs.
  - Public bucket with Cloudflare CDN caching for optimized web images and media assets.

### 3.2. Alternative Deployment Architecture (Self-Hosted / VPS)
For organizations requiring sovereignty or independent hosting in Pakistan:
- **Dockerized Container:** Multi-stage `Dockerfile` with standalone Next.js server output.
- **Reverse Proxy:** Nginx or Caddy with automatic Let's Encrypt TLS certificates.
- **Database:** Dedicated PostgreSQL instance with automated daily `pg_dump` cron jobs.

---

## 4. Database Migrations & Seeding Protocol

### 4.1. Migration Safety Rules
- Migrations are managed strictly through Prisma: `npx prisma migrate deploy` in production CI/CD.
- Zero destructive migrations (no column drops or type mutations on live production tables without phased deprecation).
- All new database columns on existing tables must be nullable or carry explicit default values.

### 4.2. Database Seeding & Development Isolation
- Running `npx prisma db seed` seeds the database with initial structural categories, chapter locations, and system settings.
- **Safety Banner:** Seed data includes a visible, unambiguous `"SAMPLE DATA / TEST ENVIRONMENT"` banner in dev mode to eliminate any possibility of test records being mistaken for real clinical beneficiaries.

---

## 5. Backup, Disaster Recovery & High Availability

| Layer | Backup Strategy | Retention Period | Recovery Objective (RTO / RPO) |
| :--- | :--- | :--- | :--- |
| **PostgreSQL Database** | Automated continuous Point-in-Time Recovery (PITR) + Daily snapshots | 30 days continuous; 12 monthly snapshots | **RTO < 30 mins; RPO < 5 mins** |
| **Encrypted File Vault** | S3 cross-region replication (CRR) with Object Versioning enabled | Indefinite with lifecycle rules | **RTO < 1 hour; RPO = 0** |
| **Code & Config** | Git repository mirrored across GitHub & offline encrypted backup | Permanent version control | **RTO < 15 mins** |

### 5.1. Disaster Recovery Script (`scripts/backup-db.sh`)
```bash
#!/bin/bash
# Automated database snapshot script
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_DIR="/var/backups/zcf_db"
mkdir -p $BACKUP_DIR
pg_dump $DATABASE_URL -F c -b -v -f "$BACKUP_DIR/zcf_prod_$TIMESTAMP.dump"
# Encrypt snapshot with GPG
gpg --symmetric --cipher-algo AES256 "$BACKUP_DIR/zcf_prod_$TIMESTAMP.dump"
rm "$BACKUP_DIR/zcf_prod_$TIMESTAMP.dump"
echo "Encrypted backup created: zcf_prod_$TIMESTAMP.dump.gpg"
```
