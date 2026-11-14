# Feature Roadmap & Phase Mapping

This document provides the definitive breakdown of features, user capabilities, administrative controls, and acceptance criteria across Phases 1 through 4 for the **Zulaid Chaudhary Foundation** digital platform.

---

## Phase 1: Core Foundation Web Presence & Content Engine

*Objective: Establish a production-grade, dignified, bilingual (English/Urdu with native RTL) public web platform conveying the foundation's vision, healthcare milestones, hospital construction updates, and humanitarian pillars.*

### 1.1. Public Experience & Content
- **Responsive Layout & Navigation:**
  - Sticky dual-tier header with phone helpline, currency switcher, and bilingual locale toggle (`/en` $\leftrightarrow$ `/ur`).
  - Mobile bottom quick-action bar for immediate navigation and donation triggers.
  - Full RTL layout support for Urdu, with typography dynamically optimized for `Noto Nastaliq Urdu`.
- **Homepage:**
  - Concept 1 layout: Sovereign split-hero with authentic founder portrait (`2ndimg.jpg`), value proposition, and quick-donate drawer trigger.
  - Verified impact counter strip displaying verified milestone: ~25-30 patients facilitated free care, hospital under construction.
  - Core humanitarian pillar showcase (Healthcare, Hospital, Human Rights, Environment, Animal Welfare).
  - Lahore Hospital construction milestone teaser.
  - Founder's personal reflection block with reflective portrait (`firstimg.jpg`).
  - Editorial research & articles grid inspired by Amnesty International.
- **About & Founder Profile:**
  - Dedicated Founder Bio page (`/about/founder`) showcasing the founder's vision, family background in medicine (Pakistan & USA), and grassroots photos (`3rdimg.jpg` and `4th.jpg`).
  - Governance, mission, and legal status transparency page stating clear registration status ("Registration in progress").
- **Our Work (Thematic Pillars):**
  - **Medical Assistance:** Comprehensive overview of free surgeries, clinical subsidies, and patient intake process.
  - **Lahore Charity Hospital Tracker:** Dedicated interactive visual timeline tracking Phase 1 (Planning & Foundation), Phase 2 (Grey Structure), Phase 3 (Fitout).
  - **Human Rights & Advocacy:** Fact-based, peaceful, sourced research dossiers on human rights, dignity, and Palestine solidarity.
  - **Environment & Water:** Clean water hand pumps, community filtration, and urban reforestation.
  - **Animal Welfare:** Stray animal rescue, street animal feeding drives, and veterinary care camps.
- **Projects Directory:**
  - Filterable directory (Planned, Ongoing, Completed) with progress bars and location tags.
- **Articles & Research Hub:**
  - Full article view with categories, tags, author bio, social sharing, and related papers.
- **Emergency Help & Contact:**
  - Dedicated Emergency Assistance page with explicit disclaimer (does not replace state emergency services) and verified local ambulance numbers.
  - Contact form, WhatsApp direct channel, and confidential grievance/misconduct whistleblower submission.
- **Static CMS-Ready Data Architecture:**
  - Content structured in typed JSON dictionaries and database seeds, ready for dynamic CMS integration in Phase 2.

---

## Phase 2: Authentication, User Dashboard & Role-Based Admin Portal

*Objective: Deploy enterprise authentication, self-service portals for volunteers and members, and a comprehensive, audit-logged administrative back-office.*

### 2.1. Authentication & Security
- **Auth.js Integration:**
  - Secure credential login with email/password, Argon2 password hashing.
  - Email verification workflow and secure password reset tokens.
  - Mandatory TOTP Two-Factor Authentication (2FA) for administrative roles (`Super Admin`, `Admin`, `Medical Coordinator`, `Finance Officer`).
- **Role-Based Access Control (RBAC):**
  - Server-side enforcement on all server actions and route handlers.

### 2.2. Supporter & Volunteer Dashboard (`/dashboard`)
- **Self-Service Overview:**
  - Profile management, password updates, and communication preferences (EN/UR).
- **Volunteer & Membership Tracking:**
  - Submit volunteer applications with skill tags and chapter selection.
  - Track application review status (Pending $\rightarrow$ Review $\rightarrow$ Approved).
  - Digital membership card display with unique ID for approved members.
- **Assistance Request Tracking:**
  - Confidential tracking of submitted healthcare requests using tracking codes.

### 2.3. Administrative Back-Office (`/admin`)
- **Executive KPI Dashboard:** Real-time summary of pending volunteer reviews, clinical cases, complaints, and recent system actions.
- **Content Management System (CMS):**
  - Article creator with rich text (Tiptap), category tags, bilingual inputs, and scheduled publishing.
  - Media asset manager with image compression, alt-text tagging, and S3-compatible storage.
- **Hospital Progress Manager:**
  - Add engineering updates, upload construction photos, update completion percentages.
- **Medical Case Intake Vault:**
  - Role-gated clinical dossier management with mandatory informed consent verification.
- **Volunteer & Membership Review Queue:**
  - Approve or decline applicants, add private interview notes, assign chapters.
- **Grievance & Whistleblower Redressal Portal:**
  - Review confidential complaints, assign investigators, and dispatch resolution updates.
- **Immutable Audit Log Viewer:**
  - View searchable, filterable logs of who performed what action, timestamp, IP, and state diffs.

---

## Phase 3: Donation Engine, Payment Adapters, Receipts & Financial Transparency

*Objective: Implement a multi-currency donation infrastructure with test-mode payment adapters, automatic PDF receipts, and public transparency dashboards.*

### 3.1. Donation Processing (Test Mode & Feature-Flagged)
- **Multi-Currency Giving:**
  - Support for PKR, USD, GBP, EUR, CAD, AED with real-time conversion references.
  - One-time vs. monthly recurring contributions.
- **Provider-Agnostic Payment Adapters:**
  - **Stripe Adapter (Test Mode):** Card payments for international diaspora with SCA/3D-Secure.
  - **Pakistani Bank Wire Adapter:** Generates official foundation IBAN and reference codes; allows donors to upload bank transfer slip screenshots.
  - **Raast Instant QR Adapter:** Mock/test QR generation for instant domestic mobile transfers.
  - **JazzCash & Easypaisa Adapters:** Modular stubs ready for production merchant keys.
- **Itemized Sponsorships:**
  - Dedicated package sponsorships (Hospital Brick, Patient Surgery, Water Hand Pump).
  - Optional dedication name (*Esaal-e-Sawab*) recorded for digital plaque delivery.

### 3.2. Automated Receipts & Donor Management
- **PDF Receipt Generation:**
  - Cryptographically signed PDF receipts with unique serial numbers (`ZCF-REC-YYYY-XXXXX`).
  - Clear legal disclosure regarding charitable tax deductibility status.
  - Instant email dispatch via transactional email adapter.

### 3.3. Financial Transparency & Impact Dashboards
- **Public Transparency Hub:**
  - Downloadable audited financial statements and annual balance sheets.
  - Visual fund allocation chart (e.g., 90% direct program care, 10% operational reserve).
- **Verified Impact Metrics System:**
  - Admin-managed counter updates (`isVerified` flag mandatory) feeding public counters.

---

## Phase 4: International Chapters, Advanced Analytics & Mobile-Ready API

*Objective: Expand the foundation's reach globally with regional chapters, multi-currency accounting, and an OpenAPI-documented REST API for future mobile apps.*

### 4.1. Country Chapters & Regional Governance
- **Global Chapters Directory:**
  - Dedicated landing hubs for regional chapters (Pakistan, USA Diaspora, UK Diaspora).
  - Scoped `Country Coordinator` roles with regional administrative permissions.
- **International Volunteer Mobilization:**
  - Regional volunteer drives, virtual volunteer tasks (translation, medical advisory).

### 4.2. Institutional Partnerships & Grants
- **Corporate & Hospital Partnerships:**
  - Formal intake portal for partner hospitals offering discounted surgical slots.
  - CSR collaboration dossiers for international philanthropic trusts.

### 4.3. Advanced Analytics & Compliance
- **Anonymized Donor Insights:**
  - Retention curves, recurring contribution stability, geographic distribution.
- **GDPR & Local Data Compliance Suite:**
  - Automated user data export tool and self-service account deletion request workflow.

### 4.4. Mobile API Readiness
- **Versioned REST API (`/api/v1/...`):**
  - Fully authenticated endpoints for mobile app integration.
  - Auto-generated OpenAPI / Swagger documentation (`/api/docs`).
