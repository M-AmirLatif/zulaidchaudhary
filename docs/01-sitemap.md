# Comprehensive Sitemap & Information Architecture

This document defines the complete sitemap, URL structures, access tiers, and page specifications for the **Zulaid Chaudhary Foundation** digital platform across both supported locales (`/en` and `/ur`).

---

## 1. Global Routing Architecture

- **Locale Prefixing:** All public and authenticated routes are prefixed with the active locale: `/[locale]/...` (e.g. `/en/about`, `/ur/about`).
- **RTL Handling:** When `locale === 'ur'`, the root layout automatically applies `dir="rtl"` and loads the optimized `Noto Nastaliq Urdu` font.
- **Route Access Levels:**
  - `PUBLIC`: Accessible by any visitor without authentication.
  - `USER`: Requires authenticated user session (Supporters, Volunteers, Members).
  - `ADMIN`: Requires role-based administrative authorization (`Super Admin`, `Admin`, `Content Editor`, `Medical Coordinator`, `Finance Officer`, `Volunteer Coordinator`, `Country Coordinator`).

---

## 2. Public Facing Routes

```
/[locale]
│
├── / (Home)
│
├── /about
│   ├── /about (Mission, Vision, Core Values, The Journey)
│   ├── /about/founder (Founder Profile: Zulaid Chaudhary, Vision & Background)
│   ├── /about/governance (Governance Model, Board, Legal Status Disclaimer)
│   └── /about/team (Confirmed Leadership & Medical Advisory Board)
│
├── /our-work
│   ├── /our-work (Overview of Humanitarian & Advocacy Pillars)
│   ├── /our-work/medical-assistance (Patient Sponsorship, Free Surgery Network, Subsidies)
│   ├── /our-work/hospital (Hospital Construction Project, Department Blueprints, Lahore HQ)
│   ├── /our-work/social-welfare (Food Ration Distribution, Medicine Kits, Financial Aid)
│   ├── /our-work/education (Education Grants, Student Sponsorships)
│   ├── /our-work/human-rights (Human Rights Advocacy, Palestine Solidarity, Justice Initiatives)
│   ├── /our-work/environment (Tree Plantations, Clean Water Wells, Climate Resilience)
│   └── /our-work/animal-welfare (Stray Animal Rescue, Veterinary Camps, Wildlife Protection)
│
├── /projects
│   ├── /projects (Filterable Directory: Planned / Ongoing / Completed)
│   └── /projects/[slug] (Detailed Project Dossier, Budget, Progress Bar, Verified Updates)
│
├── /hospital-tracker
│   └── /hospital-tracker (Dedicated Visual Timeline & Engineering Milestones of Lahore Hospital)
│
├── /stories-of-hope
│   ├── /stories-of-hope (Consent-Verified Beneficiary Transformations)
│   └── /stories-of-hope/[slug] (In-depth Narrative, Anonymized Profile, Verified Case ID)
│
├── /impact
│   └── /impact (Verified Impact Metrics, Live Data Dashboard, Geographic Heatmap)
│
├── /articles (Research & News Hub)
│   ├── /articles (Searchable Archive with Category & Tag Filtering)
│   ├── /articles/category/[category] (Thematic Articles: Health, Advocacy, Reports)
│   ├── /articles/tag/[tag] (Specific Tag Dossiers)
│   └── /articles/[slug] (Full Article/Research Paper, Author, Citations, Share Bar)
│
├── /transparency
│   ├── /transparency (Financial Integrity, Allocation Breakdown, Zero-Waste Policy)
│   ├── /transparency/legal-status (Official Legal Status Disclosure & Regulatory Filings)
│   ├── /transparency/financial-reports (Audited Financial Statements & Annual Reports)
│   └── /transparency/audit-log-summary (Public Summary of Integrity Measures)
│
├── /get-involved
│   ├── /get-involved (Engagement Hub: Ways to Stand with the Foundation)
│   ├── /get-involved/volunteer (Volunteer Registration Form & Chapter Selection)
│   ├── /get-involved/membership (Foundation Membership Application)
│   ├── /get-involved/partnerships (Institutional, Hospital & Corporate Partnerships)
│   └── /donate (Multi-Currency Giving Engine: One-time, Monthly, Specific Programs)
│
├── /emergency-help
│   └── /emergency-help (Medical Assistance Request Portal, Local Emergency Helpline Directory)
│
├── /contact
│   ├── /contact (General Inquiries, Office Locations, WhatsApp Line)
│   ├── /contact/complaint (Formal Grievance Redressal & Misconduct Whistleblower Form)
│   └── /contact/track-complaint (Track Grievance by Tracking Code)
│
├── /newsletter
│   ├── /newsletter (Subscription Landing Page)
│   └── /newsletter/unsubscribe (Automated Unsubscribe Handler)
│
└── /legal
    ├── /legal/privacy-policy (Data Privacy, GDPR/Local Compliance)
    ├── /legal/terms-of-service (Terms & Conditions)
    ├── /legal/donation-policy (Tax Deductibility, Fund Utilization Rules)
    ├── /legal/refund-policy (Donation Dispute & Refund Guidelines)
    ├── /legal/volunteer-code-of-conduct (Ethical Standards for Volunteers)
    └── /legal/data-protection (Medical Data Confidentiality & Consent Protocols)
```

---

## 3. Authenticated User Dashboard Routes (`/dashboard`)

Available to registered supporters, volunteers, and members after secure authentication.

```
/[locale]/dashboard
│
├── /dashboard (Overview: Summary of Contributions, Applications & Badges)
│
├── /dashboard/profile (Personal Details, Password, Multi-Factor Authentication, Language)
│
├── /dashboard/applications
│   ├── /dashboard/applications/volunteer (Volunteer Application Status & Assigned Chapter)
│   └── /dashboard/applications/membership (Membership ID Card, Status & Voting Rights)
│
├── /dashboard/donations
│   ├── /dashboard/donations (Complete History of Contributions)
│   ├── /dashboard/donations/[receiptNumber] (View & Download Official PDF Receipt)
│   └── /dashboard/donations/recurring (Manage Active Monthly Recurring Sponsorships)
│
├── /dashboard/supported-projects (Live Status & Milestone Updates for Sponsored Projects)
│
├── /dashboard/medical-requests (Track Status of Submitted Assistance Applications)
│
├── /dashboard/notifications (Personal Activity & Announcement Feed)
│
└── /dashboard/data-privacy (Download Account Data / Request Account Deletion)
```

---

## 4. Administrative Management Portal (`/admin`)

Strictly role-gated. Every action is authenticated, verified server-side, and recorded in the immutable audit log.

```
/[locale]/admin
│
├── /admin (Executive Overview Dashboard: Key KPI Widgets, Pending Queue, Quick Actions)
│
├── /admin/cms
│   ├── /admin/cms/pages (Static & Landing Page Content Editor)
│   ├── /admin/cms/articles (Article Management: Create, Edit, Schedule, Publish)
│   ├── /admin/cms/articles/new (Rich-Text Editor with Citations, Categories, Tags)
│   ├── /admin/cms/categories (Article Category Taxonomy)
│   └── /admin/cms/media (Asset Library: Image Compression, Alt-Text, CDN URLs)
│
├── /admin/hospital-tracker
│   ├── /admin/hospital-tracker (Phase Milestones: Planning, Groundwork, Construction, Fitout)
│   ├── /admin/hospital-tracker/updates (Post New Construction Progress Photo/Video Update)
│   └── /admin/hospital-tracker/departments (Planned Medical Departments & Equipment Needs)
│
├── /admin/medical-assistance
│   ├── /admin/medical-assistance (Confidential Patient Queue: Pending, Approved, Completed)
│   ├── /admin/medical-assistance/[id] (Case Dossier: Medical History, Doctor Estimate, Cost)
│   └── /admin/medical-assistance/consent-vault (Consent Records & Patient Privacy Controls)
│
├── /admin/assistance-requests
│   ├── /admin/assistance-requests (Social Welfare / Food / Medicine Requests)
│   └── /admin/assistance-requests/[id] (Vetting Workflow & Disbursement Verification)
│
├── /admin/projects
│   ├── /admin/projects (All Projects: Active, Upcoming, Completed)
│   ├── /admin/projects/new (Create New Project with Budget, Milestones, Location)
│   └── /admin/projects/[id] (Edit Project Details, Upload Impact Report, Adjust Progress)
│
├── /admin/stories-of-hope
│   ├── /admin/stories-of-hope (Beneficiary Stories CMS)
│   └── /admin/stories-of-hope/new (Story Creator with Mandatory Consent Verification Attachment)
│
├── /admin/donations
│   ├── /admin/donations (Real-time Donation Ledger: Online & Manual Bank Slips)
│   ├── /admin/donations/verify-bank-transfers (Approve/Reject Offline Bank Wire Slips)
│   └── /admin/donations/receipts (Generate & Resend Official Signed PDF Receipts)
│
├── /admin/financials
│   ├── /admin/financials/reports (Upload Audited Statements & Period Disclosures)
│   └── /admin/financials/allocations (Set Transparent Fund Utilization Breakdown)
│
├── /admin/volunteers
│   ├── /admin/volunteers (Volunteer Applications Review Queue)
│   └── /admin/volunteers/[id] (Vetting, Interview Notes, Approve/Decline, Role Assignment)
│
├── /admin/memberships
│   ├── /admin/memberships (Membership Applications Review Queue)
│   └── /admin/memberships/[id] (Approve/Decline, Issue Official Member ID Number)
│
├── /admin/complaints
│   ├── /admin/complaints (Grievance Redressal Inbox: Confidential Whistleblower Queue)
│   └── /admin/complaints/[id] (Investigation Status, Internal Notes, Resolution Dispatch)
│
├── /admin/campaigns
│   └── /admin/campaigns (Advocacy & Special Emergency Relief Campaign Modules)
│
├── /admin/partnerships
│   └── /admin/partnerships (Corporate & NGO Collaboration Inquiries)
│
├── /admin/team-members
│   └── /admin/team-members (Manage Displayed Leadership, Board & Doctors with Confirmed Flag)
│
├── /admin/impact-metrics
│   └── /admin/impact-metrics (Admin-Managed Verified Counters: Lives Touched, Surgeries, etc.)
│
├── /admin/newsletter
│   ├── /admin/newsletter/subscribers (Subscriber List, Export, Growth Metrics)
│   └── /admin/newsletter/broadcast (Draft & Dispatch Newsletter Broadcasts)
│
├── /admin/users
│   ├── /admin/users (User Directory, Role Assignment, 2FA Status)
│   └── /admin/users/[id] (User Profile, Permissions, Activity History)
│
├── /admin/audit-logs
│   └── /admin/audit-logs (Immutable System Log: Who changed what, IP, timestamp, diff)
│
└── /admin/settings
    ├── /admin/settings/general (Foundation Name, Taglines, Contact Info, Social Links)
    ├── /admin/settings/legal-status (Configurable Legal Status Setting & Public Disclaimer)
    ├── /admin/settings/payments (Payment Gateway Feature Flags: Stripe, Raast, Manual Bank)
    ├── /admin/settings/security (Session Timeouts, Password Policy, Rate Limiting)
    └── /admin/settings/emergency (Configurable Emergency Helplines & Hospital Numbers)
```

---

## 5. Role-Based Access Control (RBAC) Matrix

| Portal Module | Super Admin | Admin | Content Editor | Medical Coordinator | Finance Officer | Volunteer Coordinator | Country Coordinator |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **CMS & Articles** | Full | Full | Full | Read | Read | Read | Region Read |
| **Hospital Tracker** | Full | Full | Edit Content | Clinical Update | Budget View | Read | Read |
| **Medical Cases** | Full | Full | None | **Full (Strict)** | View Costs Only | None | Region View |
| **Assistance Requests** | Full | Full | None | Medical Only | View Costs Only | Welfare Only | Region View |
| **Donations & Receipts** | Full | Full | None | None | **Full** | None | Region View |
| **Financial Reports** | Full | Full | None | None | **Full** | None | Read |
| **Volunteers & Members** | Full | Full | None | None | None | **Full** | Region Manage |
| **Complaints/Grievances**| Full | Full | None | None | None | None | None |
| **Impact Metrics** | Full | Full | None | Propose Metric | Propose Metric | Propose Metric | Propose Metric |
| **User & Role Admin** | **Full** | View/Assign | None | None | None | None | None |
| **Audit Log Viewer** | **Full** | **Full** | None | None | Financial Logs | None | None |
| **Global Settings** | **Full** | Edit General| None | None | None | None | None |

---

## 6. Page Metadata, SEO & Social Share Architecture

- Every page dynamically generates Open Graph (`og:image`, `og:title`, `og:description`) and Twitter Card tags based on the active locale.
- Canonical URLs are mapped symmetrically: `https://zulaidchaudharyfoundation.com/en/about` $\leftrightarrow$ `https://zulaidchaudharyfoundation.com/ur/about` with `hreflang` headers.
- Structured data (`Schema.org` JSON-LD):
  - `Organization` (Name, Founder, Legal Status Disclaimer, Contact, Logo).
  - `MedicalOrganization` / `Hospital` for the upcoming Lahore Healthcare facility.
  - `Article` for research papers and news.
  - `FAQPage` for donation and volunteer FAQs.
  - `BreadcrumbList` for all nested routes.
