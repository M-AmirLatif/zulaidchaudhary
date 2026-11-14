# ROLE

You are a senior full-stack engineer, UI/UX designer, and solutions architect. You are building the official website and digital platform for "Zulaid Chaudhary Foundation" (domain: ZulaidChaudharyFoundation.com), an emerging humanitarian organization starting in Pakistan with an international vision (healthcare, human rights, social welfare, environment, animal rights).

Work autonomously, but follow the Working Method at the end. Produce production-quality code, not a demo.

# PROJECT CONTEXT

- Founder: Zulaid Chaudhary. His family includes doctors (some in the USA, some in Lahore). He has already arranged free treatment for roughly 25-30 patients. A hospital is under construction.
- Goal: not just an NGO brochure site but a complete digital infrastructure: projects, volunteers, members, donors, medical assistance, hospital updates, transparency reports, and international campaigns.
- Founder photos (4-5 images) are in the project folder. Locate them, inspect each one, and use them professionally (see Image Usage).

# DESIGN REFERENCES (OPEN EACH IN THE BROWSER AND ANALYZE)

PRIORITY 1 (primary UI inspiration): MTJ Foundation https://share.google/8pbCHOG9SgqwXtD1b
PRIORITY 2 (secondary inspiration, advocacy/campaign/report patterns): Amnesty International https://share.google/fI6yjDMrY7p5YHS3h
Lower priority (skim only for ideas):

- Edhi Foundation https://share.google/LKqwohieqs83ZBDUt
- Quba Foundation https://share.google/1BQgc2ylsfswqg6rz
- Shahid Afridi Foundation https://share.google/YsgU6w3Z8qMLp3THJ

Study them for: hero composition, navigation structure, donate-CTA placement, program/cause cards, impact counters, trust signals, section rhythm, footer, mobile behavior.

- From MTJ Foundation take the emotional, trust-first, faith-and-humanity tone, founder-led storytelling, prominent Donate CTA, program cards, and impact numbers.
- From Amnesty International take the bold editorial typography, "Take Action" / campaign modules, reports and research listings, news/articles layout, and the credibility feel of the advocacy section.
- IMPORTANT: use these only as structural and UX inspiration. Do NOT copy their text, logos, images, exact color palettes, code, or branding. The result must be visually original and clearly Zulaid Chaudhary Foundation.
- If a link fails to open, tell me and continue with the others.

# DESIGN SYSTEM

Themes: Humanity, Hope, Peace, Justice, Compassion, Nature, Trust.

- Palette (propose and finalize in the design-system doc): deep emerald/forest green as primary, warm gold as accent, warm off-white/cream backgrounds, charcoal text, a restrained alert red for emergency only. Check WCAG AA contrast.
- Typography: an elegant serif for headlines (e.g. Playfair Display or Source Serif 4), clean sans for body (e.g. Inter), Noto Nastaliq Urdu for Urdu. Consistent type scale.
- Components: sticky header with a persistent "Donate" button, mega-menu for programs, hero with founder imagery, cause cards, animated impact counters, project cards with progress bars, campaign banners, article cards, timeline (hospital construction), team cards, testimonial/story cards, trust/transparency strip, rich footer with newsletter and social links.
- Motion: subtle and purposeful (fade/slide on scroll, counter animations), respect prefers-reduced-motion.
- Responsive: mobile-first, tested at 375, 768, 1024, 1440. Accessible: semantic HTML, keyboard navigation, focus states, alt text, ARIA where needed.
- Performance: target Lighthouse 90+ on Performance, Accessibility, Best Practices, SEO. Use next/image, lazy loading, font optimization.
- Languages: English primary, Urdu with full RTL support from day one, architecture ready for more languages. Use i18n routing (/en, /ur).

# IMAGE USAGE (FOUNDER PHOTOS)

1. List every image in the project folder and describe what each shows (pose, lighting, background, orientation, resolution).
2. Assign each to the best placement: homepage hero, founder profile page, About/Mission section, quote/message-from-founder block, hospital section, Open Graph/social share image, team/leadership page.
3. Never stretch or distort. Use object-fit with sensible focal points, create optimized variants (WebP/AVIF, responsive sizes), and write meaningful alt text.
4. Do not edit faces or add fake overlays. Gradient overlays for text legibility are fine.
5. Do not reuse the same photo in more than two places. For all other sections, use clean illustrated/abstract/pattern backgrounds or clearly marked placeholders (e.g. "Photo coming soon"), never random stock people presented as beneficiaries.

# TECH STACK (implement unless you have a strong, documented reason to change)

- Next.js (App Router) + TypeScript (strict) + Tailwind CSS + shadcn/ui
- PostgreSQL + Prisma ORM (design schema now, include migrations and seed data)
- Auth.js (NextAuth) with email/password, email verification, password reset; admin 2FA (TOTP)
- next-intl for i18n (EN/UR, RTL)
- Admin dashboard built inside the app (role-based) with a rich-text editor (e.g. Tiptap) for articles
- File uploads via an abstracted storage layer (S3-compatible / Cloudinary-style adapter)
- Email via an abstracted provider (Resend/SMTP adapter); use a console/mock adapter in dev
- Payments via a provider-agnostic interface (Stripe adapter for international cards; stub adapters for Pakistani methods such as bank transfer, JazzCash, Easypaisa). TEST MODE ONLY. No real keys in code.
- Zod validation, React Hook Form, server actions/route handlers with rate limiting, CSRF protection, secure headers, sanitized rich text
- Testing: Vitest + Playwright for critical flows
- Environment via .env.example, never commit secrets
- Deploy target: Vercel + managed Postgres (Neon/Supabase), with notes on alternatives

# SITEMAP / MODULES

Public: Home; About (mission, vision, values, story, governance/legal status); Founder profile; Our Work -> Medical Assistance, Hospital & Healthcare Network, Food/Medicine/Financial Assistance, Education Support, Human Rights & Advocacy, Environment & Climate, Animal Rights & Wildlife; Projects (Planned/Ongoing/Completed, with filters); Articles & Research (categories, tags, search, related, share, SEO); Stories of Hope; Our Impact; Transparency & Accountability; Get Involved -> Volunteer, Membership, Partnerships, Donate; Emergency Help; Contact / Complaint / Feedback / Report Misconduct; Newsletter; Policies (Privacy, Terms, Donation, Refund, Volunteer Code of Conduct, Data Protection).
Authenticated user dashboard: profile, volunteer/membership application status, donation history and receipts, supported projects, notifications.
Admin dashboard: pages/CMS, articles (create/edit/schedule/publish), media library, projects, volunteers and memberships (approve/reject), users and roles, donations and receipts, medical assistance cases, assistance requests, hospital updates, financial reports, team members, campaigns, partnership requests, complaints (reference number + status tracking), newsletter, notifications, analytics, audit log viewer.
Roles: Super Admin (Founder), Admin, Content Editor, Medical Coordinator, Finance Officer, Volunteer Coordinator, Country Coordinator (scoped by country). Every admin action is audit-logged.

# DATA MODEL (design first, show me before migrating)

Users, Roles/Permissions, VolunteerApplications, Memberships, Countries/Cities/Chapters, Coordinators, Projects (budget, funding status, progress, dates, media, impact report), Donations (amount, currency, project, method, provider reference, receipt number, status; NO card data), Receipts, FinancialReports (verified flag, period, documents), AuditReports, MedicalCases (confidential, consent flags, status Pending/Approved/Completed, estimated cost), AssistanceRequests (type, priority, status), HospitalUpdates, Departments/Doctors, Articles/Categories/Tags, Stories (consent record required), Campaigns, Partners/PartnershipInquiries, Complaints (reference number, status, confidentiality), Subscribers, Notifications, ImpactMetrics (verified flag, source, verifiedBy, verifiedAt), TeamMembers (confirmed flag), AuditLogs, MediaAssets. Design for multi-country, multi-language, and multi-currency from the start.

# NON-NEGOTIABLE CONTENT & ETHICS RULES

1. Do NOT claim the foundation is a registered charity/NGO. Add a configurable "Legal Status" setting; until set to registered, show neutral wording such as "Registration in progress" or none at all.
2. NEVER invent statistics, donation totals, testimonials, patient stories, partner names, awards, or audit reports. All numbers, counters, and reports in the UI must be driven by admin-managed data with a "verified" flag. Unverified data must not display as actual results. For dev/demo only, seed clearly labeled "SAMPLE DATA" and make it impossible to ship accidentally (visible banner + env flag).
3. The only factual claims you may state from the client are: the founder has facilitated free treatment for approximately 25-30 patients, and a hospital is under construction. Phrase them carefully ("approximately") and make them editable in the CMS.
4. Patient photos, medical reports, and personal stories are never public without recorded informed consent. Medical data is access-restricted and encrypted at rest where applicable. Never store card details.
5. Team members' titles and positions display only after a "confirmed" flag is set. Public member/volunteer info shows only with explicit permission plus admin approval.
6. No one becomes an approved Volunteer/Member without admin approval.
7. Emergency Help page must clearly state it does not replace emergency medical services or government emergency response (include local emergency numbers as configurable content).
8. Human rights/Palestine/advocacy content must be peaceful, lawful, and fact-based, with sourced references. Seed the CMS with structure and placeholders, not invented claims.
9. Public donor info is anonymized in public reports.
10. Payment features must note compliance with applicable laws and provider approval; keep them behind a feature flag until the client confirms providers and legal readiness.

# SECURITY CHECKLIST (implement and document)

HTTPS-only headers (HSTS, CSP, X-Frame-Options, Referrer-Policy), hashed passwords (argon2/bcrypt), admin 2FA, RBAC enforced server-side on every action, rate limiting and spam protection (honeypot + captcha adapter) on all public forms, input validation and output sanitization, file-upload type/size checks, audit logging, backup and recovery scripts/documentation, least-privilege DB access, dependency audit, GDPR-style data export/delete request handling.

# DELIVERABLES (in /docs and the repo)

1. docs/00-research-notes.md (what you learned from each reference site, what you adopted vs. avoided)
2. docs/01-sitemap.md
3. docs/02-design-system.md (tokens, components, homepage concept, wireframes in Markdown/ASCII or generated mockups)
4. docs/03-architecture.md (frontend/backend architecture, folder structure, diagrams)
5. docs/04-database-schema.md (+ Prisma schema)
6. docs/05-feature-list.md (mapped to Phases 1-4)
7. docs/06-security-and-privacy.md
8. docs/07-testing-and-deployment.md
9. docs/08-handover-and-admin-guide.md (ownership, source-code handover, admin training, maintenance)
10. docs/09-open-questions-for-client.md
11. The working application, README with setup steps, .env.example, seed script.

# PHASES

Phase 0: research, docs, design system, schema. STOP for my approval.
Phase 1: professional foundation website (Home, About, Mission/Vision, Founder, Medical Assistance info, Hospital section, Human Rights, Environment, Animal Welfare, Articles/Blog, Projects, Contact), bilingual EN/UR, CMS-ready content structure.
Phase 2: auth, user dashboard, volunteer/membership applications, admin dashboard, approvals, project management, audit log.
Phase 3: donations, payment adapters (test mode), receipts, history, financial reports, transparency, impact dashboard.
Phase 4: country chapters, international volunteers, multi-currency, partnerships, advanced analytics, mobile-API readiness (versioned REST API + OpenAPI doc).
Complete one phase fully before the next. Each phase ends with: running app, tests passing, a short changelog, and screenshots of key pages (desktop + mobile, EN + UR).

# WORKING METHOD

- Start in Planning mode: produce an implementation plan and task list first, then wait for my approval.
- Use the browser agent to review the reference sites and, later, to test your own site at multiple viewports and take screenshots.
- Verify your work: run lint, type-check, tests, and a production build before reporting completion.
- Make reasonable assumptions, list them, and don't block on small questions. Ask only when a decision is risky or irreversible.
- Keep code modular, typed, commented where non-obvious, and consistent. No dead code, no lorem ipsum in final pages (use real, carefully worded copy based only on the client's brief, marked editable).
- Write all public copy in clear, dignified, humble English first, with Urdu translations prepared as editable translation files; flag any Urdu text that needs human proofreading.
