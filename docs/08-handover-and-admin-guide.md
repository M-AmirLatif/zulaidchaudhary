# Handover, Client Ownership & Administrative Operating Manual

This guide outlines source code ownership, administrative operating workflows, daily platform maintenance, and role-based training procedures for the **Zulaid Chaudhary Foundation** leadership and administrative team.

---

## 1. Full Client Ownership & Digital Sovereignty

The **Zulaid Chaudhary Foundation** holds 100% intellectual property, legal ownership, and administrative sovereignty over:
1. **Source Code & Git Repository:** The complete codebase, TypeScript definitions, Prisma schemas, and configuration files.
2. **Database & Beneficiary Records:** All donor records, medical case histories, volunteer databases, and audit logs.
3. **Domain & DNS Control:** `ZulaidChaudharyFoundation.com` and associated records.
4. **Third-Party Provider Accounts:** Stripe merchant accounts, Neon/Supabase databases, AWS S3/Cloudflare storage buckets, and Resend email domains.
5. **Brand Assets & Media:** All original photography of founder Zulaid Chaudhary, architectural plans, and video assets.

---

## 2. Administrative Role Hierarchy & Responsibilities

The administrative portal (`/admin`) enforces strict segregation of duties to ensure transparency, compliance, and clinical confidentiality:

```
+-----------------------------------------------------------------------------------+
|                           SUPER ADMIN (Founder)                                  |
|               Global platform control, user roles, security, 2FA                   |
+-----------------------------------------------------------------------------------+
       |                        |                         |
       v                        v                         v
+------------------+  +--------------------+  +----------------------+
| MEDICAL COORD.   |  | FINANCE OFFICER    |  | CONTENT & VOLUNTEERS |
| Patient intake,  |  | Donations ledger,  |  | Articles, hospital   |
| clinical vetting,|  | offline wire slips,|  | updates, volunteer   |
| doctor liaison   |  | financial audits   |  | vetting, media       |
+------------------+  +--------------------+  +----------------------+
```

### 2.1. Super Admin (Founder: Zulaid Chaudhary)
- Grants and revokes administrative roles.
- Manages global settings: **Legal Status disclaimer**, payment gateway feature flags, and emergency hotline numbers.
- Holds final authority over board member displays and official foundation policy disclaimers.

### 2.2. Medical Coordinator
- Accesses confidential medical assistance applications (`/admin/medical-assistance`).
- Reviews patient diagnostic reports, doctor estimates, and treatment urgency.
- Verifies and archives physical/digital **Informed Consent Forms** before any case study or story can be published.
- Coordinates with partner physicians in Lahore and the United States.

### 2.3. Finance Officer
- Audits online donation logs and reviews uploaded Pakistani bank wire slips (`/admin/donations/verify-bank-transfers`).
- Approves verified deposits to automatically trigger official PDF receipts to donors.
- Uploads certified annual financial statements and manages public fund allocation percentages.

### 2.4. Content Editor & Volunteer Coordinator
- Drafts, edits, and schedules bilingual articles, news releases, and human rights research papers (`/admin/cms/articles`).
- Publishes verified engineering and photo updates for the Lahore Hospital construction tracker.
- Reviews and approves volunteer and membership applications (`/admin/volunteers`).

---

## 3. Step-by-Step Administrative Workflows

### 3.1. How to Update the Lahore Hospital Construction Tracker
1. Log in to the administrative portal at `/admin` and authenticate with 2FA TOTP.
2. Navigate to **Hospital Tracker** $\rightarrow$ **Post New Update**.
3. Select the active construction phase (e.g., `Phase 2: Structural Grey Work`).
4. Enter the updated percentage completion (e.g., `45%`).
5. Provide symmetrical English and Urdu titles and progress descriptions.
6. Upload verified on-site construction photos or engineering diagrams.
7. Click **Publish Update**. The update immediately reflects on the public `/hospital-tracker` and homepage timeline.

### 3.2. How to Process an Urgent Medical Assistance Case
1. Navigate to **Medical Assistance** $\rightarrow$ **Pending Queue**.
2. Click on the patient case reference (e.g., `ZCF-MED-2026-0042`).
3. Review medical prescriptions, diagnostic test reports, and the hospital estimate.
4. Contact the treating hospital/physician to confirm clinical legitimacy.
5. Upload the signed **Informed Consent Form** to the secure vault and toggle `hasInformedConsent = true`.
6. Set status to `Approved` and allocate the approved assistance budget.
7. Note: The case remains private and encrypted. It will **never** display on the public website unless a dedicated anonymized Story is explicitly drafted and approved.

### 3.3. How to Update Foundation Legal Status
1. Navigate to **Settings** $\rightarrow$ **Legal Status**.
2. When the foundation's official registration with the regulatory authorities is approved:
   - Change `Registration Status` from `IN_PROGRESS` to `REGISTERED`.
   - Enter the official Registration Number and issuing authority (e.g., *Charities Commission*).
   - Upload the certified registration certificate PDF.
3. Save changes. The website header, footer, and donation receipt disclaimers automatically update dynamically.

---

## 4. Routine Maintenance & Health Checklist

| Frequency | Task | Owner | Action |
| :--- | :--- | :--- | :--- |
| **Daily** | Offline Wire Verification | Finance Officer | Audit uploaded bank slips; approve valid donations so donors receive receipts promptly. |
| **Daily** | Emergency Intake Check | Medical Coordinator | Review pending patient assistance requests; escalate critical surgical emergencies. |
| **Weekly** | Complaint / Misconduct Review | Super Admin | Review anonymous grievance queue; assign investigative follow-up. |
| **Monthly** | Audit Log Review | Super Admin / Auditor | Inspect administrative audit logs for unusual access spikes or unauthorized permission attempts. |
| **Quarterly** | Database Snapshot & Dependency Audit | Technical Lead | Run `npm audit`, update npm packages, test disaster recovery database restores. |
| **Annual** | Independent Financial Audit | Finance Officer & Auditor | Publish verified financial statements and update public allocation charts. |
