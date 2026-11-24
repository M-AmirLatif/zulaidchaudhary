# Zulaid Chaudhary Foundation — Complete A-to-Z Verification & Testing Guide

## 1. Overview of Completed Digital Infrastructure

The digital platform is fully live at **[https://zulaidchaudharyfoundation.vercel.app](https://zulaidchaudharyfoundation.vercel.app)** and incorporates:

1. **Frontend Experience (MTJ Foundation 1:1 Design System)**:
   - **Typography**: Montserrat (bold, geometric headings) + Poppins (rounded body copy) + Noto Nastaliq Urdu (with custom kashaf vertical clearance and RTL typography rules).
   - **Color Palette**: Deep Emerald Green (`#0c3b2e`), Rich Forest (`#144a3c`), Warm Gold (`#c99738`), Soft Cream (`#fdfbf7`), Charcoal Body (`#22252a`), Restrained Emergency Alert Red (`#dc2626`).
   - **Bilingual & RTL**: Full dynamic English (`/en`) and Urdu (`/ur`) routing with zero layout breaking.
   - **6 Ordered Core Initiatives**:
     1. Human Rights Advocacy
     2. Clean Water & Environment
     3. Animal Welfare & Trauma Rescue
     4. Healthcare & Free Surgeries
     5. Charity Hospital Network
     6. Food & Family Ration Relief
     *(Plus Education Support on `/our-work`)*

2. **Backend & Architecture**:
   - Next.js 15 App Router with TypeScript strict mode.
   - Fully abstracted Email Delivery Layer (console/mock fallback in test + Resend/SMTP ready).
   - Provider-agnostic Donation & Payment Layer (Stripe test-mode cards, Pakistani Bank Transfer, JazzCash, Easypaisa).
   - Public Reference Code Tracker (`/en/track`) for complaints, volunteer applications, memberships, and donations.
   - OpenAPI v1 REST Specification (`/api/v1/openapi.json`).

3. **Security, Auth & RBAC**:
   - JOSE-signed JWT HTTP-only session cookies (`zcf_session`).
   - Two-Factor Authentication (TOTP 2FA) required on high-privilege staff accounts.
   - Complete Role-Based Access Control (RBAC) enforced on layouts, pages, and API endpoints.
   - Immutable Audit Log recording every administrative action with timestamp, user ID, role, action, and IP.

---

## 2. Test Accounts & Role Access Matrix

All test accounts share the common demo password: **`Password123!`**
For any account requiring Two-Factor Authentication (2FA), the universal demo code is: **`123456`**.

| # | Role | Email | Password | 2FA | Default Destination | Key Permissions & Responsibilities |
| :--- | :--- | :--- | :--- | :---: | :--- | :--- |
| **1** | **Super Admin (Founder)** | `founder@zulaidchaudharyfoundation.com` | `Password123!` | `123456` | `/admin` | Complete global authority: projects, hospital, vetting, audit logs, financials |
| **2** | **Admin (Director)** | `director@zulaidchaudharyfoundation.com` | `Password123!` | `123456` | `/admin` | Operational administration, approvals, complaint assignment, review queue |
| **3** | **Medical Coordinator** | `medical@zulaidchaudharyfoundation.com` | `Password123!` | `123456` | `/admin` | Medical Cases Vault, patient vetting, hospital milestones, clinical queues |
| **4** | **Finance Officer** | `finance@zulaidchaudharyfoundation.com` | `Password123!` | `123456` | `/admin` | Donations verification, tax receipts, bank transfer clearance, financial reports |
| **5** | **Volunteer Coordinator**| `volunteer@zulaidchaudharyfoundation.com`| `Password123!`| None | `/admin` | Volunteer vetting, interview scheduling, membership approval |
| **6** | **Content Editor** | `editor@zulaidchaudharyfoundation.com` | `Password123!` | None | `/admin` | Founder columns, articles CMS, news releases, media updates |
| **7** | **Country Coordinator** | `uk.coordinator@zulaidchaudharyfoundation.com`| `Password123!`| None | `/admin` | Scoped international chapter administration (UK/Diaspora campaigns) |
| **8** | **Donor / Supporter** | `supporter@gmail.com` | `Password123!` | None | `/dashboard` | User dashboard, donation history, PDF tax receipts, personal profile |
| **9** | **Volunteer Applicant** | `volunteer.user@gmail.com` | `Password123!` | None | `/dashboard` | Volunteer status tracking, interview updates, orientation handbook |
| **10**| **Founding Member** | `member.user@gmail.com` | `Password123!` | None | `/dashboard` | Digital membership card, badge status, annual community assembly access |

---

## 3. Step-by-Step Testing Procedure (A to Z)

### Step 1: Public Homepage & Language Switcher
1. Open **[https://zulaidchaudharyfoundation.vercel.app/en](https://zulaidchaudharyfoundation.vercel.app/en)** in any browser.
2. Verify the sticky header, MTJ-styled top bar with **"Donate Globally"**, contact email, and **"اردو"** toggle.
3. Click **"اردو"**:
   - Verify smooth RTL layout shift.
   - Inspect the Hero calligraphy block (`شفافیت اور دیانت داری` / `ہر پائی کا مکمل حساب`) — verify lines have comfortable vertical spacing and do not merge.
4. Switch back to **"English"**.
5. Scroll down to **"Our Core Initiatives"**:
   - Verify the sequence: Human Rights Advocacy → Clean Water & Environment → Animal Welfare & Trauma Rescue → Healthcare & Free Surgeries → Charity Hospital Network → Food & Family Ration Relief.
   - Verify that **Clean Water & Environment** displays the authentic community water pump photograph.
   - Verify that **Animal Welfare** displays the veterinary clinical stethoscope examination.

### Step 2: Test Staff Login & 2FA Flow
1. Navigate to **[https://zulaidchaudharyfoundation.vercel.app/en/auth/login](https://zulaidchaudharyfoundation.vercel.app/en/auth/login)**.
2. In the **"Select Role to Test Instantly"** box, click the **Founder (Super Admin)** button.
   - The email field instantly populates with `founder@zulaidchaudharyfoundation.com` and password `Password123!`.
3. Click **"Sign In"**.
4. The 2FA step will appear:
   - Notice the demo code `123456` is pre-filled for convenience.
5. Click **"Verify & Proceed"**.
6. **Result**: You are immediately authenticated and redirected to **`/en/admin`** (Executive Operations Dashboard).

### Step 3: Explore the Admin Command Center (`/en/admin`)
While logged in as Founder / Super Admin, test the sub-sections using the left sidebar:
1. **Donations & Receipts (`/en/admin/donations`)**:
   - View mock transactions, donor names, payment methods (Stripe, Bank Transfer), and verified receipts.
2. **Animal Rescue Dispatch (`/en/admin/animal-rescues`)**:
   - View urgent rescue cases, triage priority, injury types, and status updates (Dispatched, In Treatment).
3. **Founder Columns & CMS (`/en/admin/articles`)**:
   - Manage articles, editorial drafts, and publication schedules.
4. **Volunteer Approvals (`/en/admin/volunteers`)**:
   - Review applicant profiles, change statuses between Pending, Interview Scheduled, and Approved.
5. **Membership Queue (`/en/admin/memberships`)**:
   - Review tier levels (Standard, Supporting, Founding Member) and grant digital memberships.
6. **Project Management (`/en/admin/projects`)**:
   - Inspect target budgets, raised sums, milestone progress bars, and verified badges.
7. **Hospital Construction Tracker (`/en/admin/hospital`)**:
   - View chronological phases of the Lahore Hospital project (Foundation, Ground Floor, ICU Ward).
8. **Medical Cases Vault (`/en/admin/medical-cases`)**:
   - Inspect anonymized patient assistance cases (25-30 treated patients) with verified consent flags.
9. **Grievance Redressal (`/en/admin/complaints`)**:
   - Track whistleblower and community complaints with anonymous tracking codes.
10. **Immutable Audit Log (`/en/admin/audit-logs`)**:
    - Observe automated audit entries logged with user IDs, timestamps, and IP addresses.

### Step 4: Seamless Role Switching & User Dashboard View
1. While in the Admin Command sidebar, click **"Switch to User View"** (or open `/en/dashboard`).
2. Notice the top banner displaying your active Super Admin badge, and the quick **"Admin Back-Office"** return button.
3. Click **"Sign Out"** at the bottom of the sidebar.

### Step 5: Test Non-Privileged User Flow (Donor / Supporter)
1. Go back to **[https://zulaidchaudharyfoundation.vercel.app/en/auth/login](https://zulaidchaudharyfoundation.vercel.app/en/auth/login)**.
2. In the quick-picker, click **"Donor / Supporter"** (`supporter@gmail.com`).
3. Click **"Sign In"** (no 2FA required for standard supporters).
4. **Result**: You are redirected to **`/en/dashboard`**:
   - Displays Ahmad Raza (`DONOR_USER`).
   - Notice the **"Admin Back-Office"** link is completely hidden.
   - If this user attempts to access `/en/admin` directly in the URL bar, the server-side RBAC guard (`requireRole`) automatically intercepts and redirects them back to `/dashboard`.

### Step 6: Public Forms & Reference Code Tracking
1. Open `/en/contact` and submit a test inquiry or complaint.
2. Open `/en/donate` and test the donation selection interface.
3. Open `/en/track` and enter a sample tracking code (e.g. `ZCF-CMP-2026-001` or `ZCF-VOL-2026-001`) to see real-time verification status without logging in.
