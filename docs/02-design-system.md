# Design System & Homepage Concept Mockups

This document establishes the official visual language, token architecture, component specifications, founder imagery assignments, and 3 comprehensive homepage concept mockups for the **Zulaid Chaudhary Foundation** (`ZulaidChaudharyFoundation.com`).

---

## 1. Brand Identity & Thematic Pillars

The foundation's design language reflects seven core values:
**Humanity, Hope, Peace, Justice, Compassion, Nature, and Trust.**

It strikes a harmonious balance between:
1. **Dignified Islamic & Humanitarian Warmth** (reverence, empathy, selfless service, community care).
2. **Modern Institutional & Legal Rigor** (evidence-based research, transparency, WCAG AAA accessibility, international donor credibility).

---

## 2. Color Palette & WCAG AA/AAA Contrast Analysis

The palette pairs a sovereign deep forest emerald with an illuminating warm gold and gentle parchment creams, avoiding the sterile clinical feel of pure `#ffffff` and `#000000`.

### 2.1. Color Tokens

| Token Name | Hex Code | RGB | HSL | Semantic Role | Contrast Ratio on Warm Cream (`#FDFBF7`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `primary-900` | `#0C2B1E` | `12, 43, 30` | `155°, 56%, 11%` | Deep Forest Emerald (Headings, primary brand anchors) | **14.2:1 (Passes AAA)** |
| `primary-800` | `#143D2B` | `20, 61, 43` | `154°, 51%, 16%` | Forest Green (Navbar background, primary buttons) | **10.8:1 (Passes AAA)** |
| `primary-700` | `#1C523B` | `28, 82, 59` | `154°, 49%, 22%` | Forest Hover & Active States | **7.6:1 (Passes AAA)** |
| `primary-100` | `#E8F2EC` | `232, 242, 236`| `144°, 29%, 93%` | Pale Emerald Tint (Card badges, active tab backgrounds) | *Background role* |
| `accent-gold` | `#C69234` | `198, 146, 52` | `39°, 58%, 49%` | Warm Amber Gold (CTAs, highlighted stats, stars, accents)| **3.2:1 against dark; 4.8:1 text on dark** |
| `accent-gold-light`|`#E5B55D` | `229, 181, 93` | `39°, 73%, 63%` | Warm Amber Gold Light (Highlights, badges, borders) | *Used on dark backgrounds* (9.4:1) |
| `accent-gold-dark` |`#94681E` | `148, 104, 30` | `38°, 66%, 35%` | Deep Bronze Gold (High-contrast text on light surfaces) | **5.3:1 (Passes AA)** |
| `surface-cream` | `#FDFBF7` | `253, 251, 247`| `40°, 43%, 98%` | Primary Warm Off-White / Parchment Page Surface | Base canvas |
| `surface-muted` | `#F4F0E8` | `244, 240, 232`| `40°, 31%, 93%` | Secondary Card & Module Background | Base secondary canvas |
| `surface-card` | `#FFFFFF` | `255, 255, 255`| `0°, 0%, 100%` | Pure White Surface for elevated cards & forms | Base elevated canvas |
| `text-charcoal` | `#1A201C` | `26, 32, 28` | `140°, 10%, 11%` | High-legibility Body Text | **16.1:1 (Passes AAA)** |
| `text-muted` | `#4B554E` | `75, 85, 78` | `138°, 6%, 31%` | Secondary Labels, Timestamps, Captions | **6.7:1 (Passes AAA)** |
| `border-subtle` | `#E2DDD2` | `226, 221, 210`| `41°, 23%, 85%` | Card Dividers, Table Borders, Form Inputs | 1.3:1 (Non-text decorative) |
| `alert-red` | `#B91C1C` | `185, 28, 28` | `0°, 74%, 42%` | Restrained Emergency Red (Helplines, Urgent Cases) | **5.4:1 (Passes AA)** |
| `status-green` | `#15803D` | `21, 128, 61` | `142°, 72%, 29%` | Verified Status Flag, Success Feedback | **5.2:1 (Passes AA)** |

---

## 3. Typography System & Type Scale

The typography uses an authoritative, elegant Serif for headlines and narrative storytelling, a clean, high-performance Sans-Serif for body copy and administrative dashboards, and authentic Nastaliq calligraphy for the Urdu locale.

### 3.1. Font Families
1. **Headlines (English):** `Playfair Display` or `Source Serif 4` (Google Fonts, `font-serif`).
   - Weights: `600 (SemiBold)`, `700 (Bold)`, `italic`.
   - Character: Dignified, historic, trustworthy, humanistic.
2. **Body & UI (English):** `Inter` (Google Fonts, `font-sans`).
   - Weights: `400 (Regular)`, `500 (Medium)`, `600 (SemiBold)`.
   - Character: Hyper-legible, crisp at micro-scales, exceptional numeric glyphs (`tabular-nums`).
3. **Urdu Native (RTL):** `Noto Nastaliq Urdu` (Google Fonts, `font-urdu`).
   - Line height adjusted with `leading-[2.2]` to ensure Nastaliq diacritics and ligatures render without vertical clipping.
4. **Monospace / Code / IDs:** `JetBrains Mono` (Reference numbers, transaction hashes, receipt IDs).

### 3.2. Type Scale (Fluid & Rem-based)

```css
/* Typography Scale (Tailwind mapping) */
--text-xs:    0.75rem;   /* 12px - Timestamps, badges, legal disclaimers */
--text-sm:    0.875rem;  /* 14px - UI labels, form captions, metadata */
--text-base:  1.000rem;  /* 16px - Standard paragraph body */
--text-lg:    1.125rem;  /* 18px - Lead paragraphs, prominent quotes */
--text-xl:    1.250rem;  /* 20px - Card titles, sub-section headings */
--text-2xl:   1.500rem;  /* 24px - Section sub-headers, modal headings */
--text-3xl:   1.875rem;  /* 30px - Major section headers */
--text-4xl:   2.250rem;  /* 36px - Hero subheadings, milestone counters */
--text-5xl:   3.000rem;  /* 48px - Primary page titles, hero displays */
--text-6xl:   3.750rem;  /* 60px - Display metrics & hero impact stats */
```

---

## 4. Founder Imagery: Catalog, Inspection & Strategic Assignment

The foundation repository contains four original, authentic black-and-white portraits of founder **Zulaid Chaudhary**. Below is the exhaustive visual inspection and strict placement strategy compliant with the mandate that **no single photo is reused in more than two places**, faces are never distorted, and focal points are respected.

### 4.1. Image Catalog & Analysis

| File Name | Resolution | Format | Pose & Expression | Lighting & Atmosphere | Background Setting | Orientation & Aspect Ratio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `firstimg.jpg` | `1086 x 1448` | JPEG (104.8 KB) | Profile / three-quarter tilt looking down, deeply contemplative, humble, compassionate, focused downward. | High-key soft natural diffused daylight from above; clean edge definition. | Minimalist architectural frame, clean out-of-focus daylight backdrop. | Portrait (3:4 ratio) |
| `2ndimg.jpg` | `1600 x 1200` | JPEG (137.9 KB) | Direct eye contact with the viewer, thoughtful hand resting at chin/lips, wearing traditional Pakistani collar kurta. Empathetic and engaging. | Soft outdoor diffused overcast daylight; natural texture. | Authentic rustic brickwork wall; ground-level community reality. | Landscape (4:3 ratio) |
| `3rdimg.jpg` | `1086 x 1448` | JPEG (145.3 KB) | Seated at outdoor café table in Lahore, arms resting on table, gaze directed slightly right into the community; relaxed, approachable, relatable. | Evening street ambience, ambient glow from storefronts and streetlamps. | Authentic Pakistani urban streetscape with commercial building signage in Urdu/English ("M. SABZI FRUIT MANDI", "NADIA"). | Portrait (3:4 ratio) |
| `4th.jpg` | `1523 x 1600` | JPEG (73.7 KB) | Direct forward gaze, gentle reassuring smile, hands calmly clasped at wrist/watch, dark crewneck shirt; poised, resolute, responsible. | Studio-style vignette lighting with soft illumination on subject; subtle film grain. | Neutral dark grey vignette background with vertical date watermark on left margin. | Near-Square (0.95:1 ratio) |

### 4.2. Placement Matrix & Implementation Rules

```
+----------------------------------------------------------------------------------------------------------------+
| Photo        | Primary Placement                         | Secondary Placement              | Object-Fit / Focus|
+----------------------------------------------------------------------------------------------------------------+
| firstimg.jpg | "Message from Founder" / Quote Block      | Mission & Values Dossier         | object-cover      |
|              | (Homepage & About Us narrative)           | (About page sub-hero)            | focal: center-top |
+----------------------------------------------------------------------------------------------------------------+
| 2ndimg.jpg   | Homepage Hero Option A (Editorial Lead)   | Free Medical Assistance Overview | object-cover      |
|              | or Hospital Construction Leadership Block | (/our-work/medical-assistance)   | focal: center-left|
+----------------------------------------------------------------------------------------------------------------+
| 3rdimg.jpg   | Founder Bio / Ground Reality Story        | Community & Grassroots Action    | object-cover      |
|              | (/about/founder main narrative)           | (/get-involved/volunteer banner) | focal: center-bottom
+----------------------------------------------------------------------------------------------------------------+
| 4th.jpg      | Official Governance & Leadership Profile  | Open Graph / Social Meta Card    | object-cover      |
|              | (/about/governance board overview)        | (Cropped past left watermark)    | focal: center     |
+----------------------------------------------------------------------------------------------------------------+
```

#### Image Rules:
- **No Stretching / Distortion:** Always render via `<Image fill className="object-cover" style={{ objectPosition: '...' }} />`.
- **Responsive Variants:** Generated automatically at build/request time in `.webp` and `.avif` formats at `[375, 640, 768, 1024, 1280, 1600]` widths.
- **Alt Text Standards:** Meaningful, respectful descriptive text (e.g. `alt="Zulaid Chaudhary, founder of the Zulaid Chaudhary Foundation, in a moment of reflection"`).
- **Watermark Treatment:** For `4th.jpg`, apply `object-position: 15% center` or crop the left margin via CSS `clip-path` to conceal the timestamp cleanly without altering facial geometry.

---

## 5. UI Component Library Specifications

### 5.1. Navigation & Sticky Header
- **Top Utility Strip:** Deep emerald (`#0C2B1E`) bar with:
  - Phone helpline: `+92 42 3XXXXXXX` (configurable via CMS).
  - Urgent Medical Assistance link with pulse dot (`alert-red`).
  - Multi-Currency Selector (`PKR`, `USD`, `GBP`, `EUR`, `CAD`, `AED`).
  - Bilingual Switcher button (`English` / `اردو`).
- **Main Navbar:** Sticky white/cream translucent bar (`bg-surface-cream/95 backdrop-blur-md border-b border-border-subtle`).
  - Foundation Emblem & Bilingual Wordmark.
  - Dropdown Menus: `Our Work`, `Projects`, `Hospital Tracker`, `About Us`, `Transparency`.
  - Action Controls: Search button, `Volunteer` link, and persistent **"Donate Now"** (`bg-accent-gold text-primary-900 font-bold shadow-md hover:bg-accent-gold-light`).

### 5.2. Hero Section Modules
- **Variant 1 (Split Editorial):** Headline, value proposition, quick donate widget on left; large founder portrait (`2ndimg.jpg`) on right.
- **Variant 2 (Institutional Grid):** Bold humanitarian mission statement, 3 pillar highlight cards (Healthcare, Hospital, Human Rights), and floating action drawer.
- **Variant 3 (Urgent Healthcare Focus):** Live hospital construction tracker bar, founder quote (`firstimg.jpg`), and direct patient sponsorship trigger.

### 5.3. Program & Cause Cards
- Card container with `rounded-2xl border border-border-subtle bg-surface-card shadow-sm hover:shadow-lg transition-all`.
- High-contrast category pill badge (`Healthcare`, `Hospital`, `Social Welfare`, `Human Rights`, `Environment`, `Animal Welfare`).
- Target Progress Bar: Displays verified funds needed vs raised with animated fill.
- Direct CTA: `"Support This Program"` linking directly to pre-selected donation drawer.

### 5.4. Verified Impact Counter Strip
- Minimalist parchment strip with 4 prominent metrics:
  - **"25–30"**: Patients Arranged Free Treatment (accompanied by badge: `"Verified Milestone"`).
  - **"Phase 1"**: Hospital Construction Progress in Lahore (accompanied by badge: `"In Progress"`).
  - **"100%"**: Direct Public Donation Policy (verified medical disbursements).
  - **"0"**: Administrative deductions from dedicated patient funds.
- All numbers driven by database values with `verified: true`. If `verified: false`, the metric shows a neutral progress placeholder.

### 5.5. Hospital Construction Timeline Component
- Interactive horizontal/vertical stepper:
  1. *Land & Architectural Planning* (Completed).
  2. *Groundbreaking & Foundation Pouring* (Completed).
  3. *Structural Grey-Structure Construction* (**Current Active Phase**).
  4. *Interior Clinical Fitout & Medical Gas Piping* (Planned).
  5. *Diagnostic Machinery Installation & Operational Launch* (Planned).
- Each step features date stamps, verified engineering photos, and doctor advisory notes.

### 5.6. Transparency & Compliance Strip
- Grid of regulatory trust seals:
  - **Legal Status:** `"Registration In Progress - Document Dossier Submitted"` (Dynamic badge).
  - **Independent Audit:** Link to downloadable audited financial reports.
  - **Patient Privacy:** Encrypted Medical Data & Informed Consent Verified.
  - **Governance:** Non-partisan, humanitarian charter.

### 5.7. Global Persistent Footer
- 4-column rich structure:
  - Col 1: Foundation Mission, Legal Status Disclaimer, Social Media Icons.
  - Col 2: Humanitarian Programs (Medical, Hospital, Education, Human Rights, Animals).
  - Col 3: Transparency & Governance (Financial Reports, Audit Logs, Whistleblower/Complaint Redressal).
  - Col 4: Newsletter Subscription ("Receive Verified Impact Dispatches"), Emergency Contact, WhatsApp Support.
- Sub-footer: Copyright `© 2026 Zulaid Chaudhary Foundation`, Privacy Policy, Terms of Service, Donation Policy, Volunteer Code of Conduct.

---

## 6. Homepage Concept Mockups (Detailed Wireframes)

Here are three distinct, fully realized concepts for the homepage architecture.

### Concept 1: "The Founder's Trust & Impact First" (Recommended)
*Focus: Emotional trust, founder credibility, transparent healthcare milestones, and an immediate quick-donate engine.*

```
+---------------------------------------------------------------------------------------------------------------+
| TOP BAR: [Urgent Medical Aid: +92 42 3XXXXXXX]              [PKR | USD | GBP]  [English | اردو] [Volunteer]   |
+---------------------------------------------------------------------------------------------------------------+
| NAVBAR: [ZCF EMBLEM] Zulaid Chaudhary Foundation    About ▾  Our Work ▾  Hospital ▾  Transparency  [DONATE NOW]  |
+---------------------------------------------------------------------------------------------------------------+
| HERO (SPLIT 55/45):                                                                                           |
|                                                     |                                                         |
|  [Pill: Hope • Dignity • Healthcare for All]        |  FOUNDER PORTRAIT (2ndimg.jpg)                          |
|                                                     |  Authentic outdoor portrait with traditional kurta,     |
|  Restoring Dignity Through Compassion,              |  direct engaging eye contact.                           |
|  Healthcare & Justice.                              |                                                         |
|                                                     |  +---------------------------------------------------+  |
|  Founded by Zulaid Chaudhary, establishing free     |  | Floating Badge:                                   |  |
|  medical treatments and constructing a modern       |  | "Free Care Arranged for ~25-30 Patients"          |  |
|  charity hospital in Lahore.                        |  +---------------------------------------------------+  |
|                                                     |                                                         |
|  [ QUICK DONATION WIDGET ]                          |                                                         |
|  Choose: (•) General Care  ( ) Hospital Brick  ( ) Patient Fund                                               |
|  Amount: [ PKR 2,500 ]  [ PKR 5,000 ]  [ PKR 10,000 ]  [ Custom: _____ ]                                       |
|  [ → DONATE WITH INTEGRITY ]    [ ▷ Watch Founder's Message ]                                                 |
|                                                                                                               |
+---------------------------------------------------------------------------------------------------------------+
| TRUST STRIP:                                                                                                  |
| [Status: Registration In Progress] | [Lahore Hospital: Under Construction] | [100% Verified Medical Aid]      |
+---------------------------------------------------------------------------------------------------------------+
| VERIFIED IMPACT COUNTERS:                                                                                     |
|   ~25–30                    PHASE 1                   100%                   24/7                             |
|   Patients Facilitated      Hospital Construction     Donations to Care      Medical Assistance               |
|   Free Surgical Care        Underway in Lahore        Zero Overhead Policy   Grievance Redressal              |
+---------------------------------------------------------------------------------------------------------------+
| OUR CORE PILLARS (Interactive Cards with Progress):                                                           |
| +-------------------------+ +-------------------------+ +-------------------------+ +-----------------------+ |
| | FREE MEDICAL ASSISTANCE | | LAHORE CHARITY HOSPITAL | | HUMAN RIGHTS & ADVOCACY | | ENVIRONMENT & ANIMALS | |
| | Arranging free complex  | | Multi-specialty center  | | Peaceful, evidence-based| | Clean water wells,    | |
| | surgeries for the poor. | | under active construction| research & legal support.| stray rescue & greenery | |
| | [Learn More →]          | | [Track Blueprint →]     | | [View Campaigns →]      | | [Read Initiatives →]  | |
| +-------------------------+ +-------------------------+ +-------------------------+ +-----------------------+ |
+---------------------------------------------------------------------------------------------------------------+
| HOSPITAL IN FOCUS (Visual Progress Bar & Milestone Timeline):                                                 |
| "A Sanctuary of Healing in Lahore: Bridging Healthcare Inequality"                                            |
| Stepper: [✓ Land & Design] === [✓ Foundation] === [● GREY STRUCTURE: 45%] === [○ Fitout] === [○ Launch]       |
| [Download Architectural Plans PDF]              [Sponsor a Hospital Bed / Equipment]                          |
+---------------------------------------------------------------------------------------------------------------+
| FOUNDER'S MESSAGE / REFLECTION BLOCK:                                                                         |
| +-----------------------------------------------------------------------------------------------------------+ |
| | [Image: firstimg.jpg - Profile looking down in deep thought]                                              | |
| | "True humanitarian work begins not in grand speeches, but at the bedside of a suffering human being who  | |
| | cannot afford medicine. With our family of physicians in Pakistan and the United States, we are building  | |
| | an institution that will never turn away a person in need."                                               | |
| | — Zulaid Chaudhary, Founder                                                                               | |
| +-----------------------------------------------------------------------------------------------------------+ |
+---------------------------------------------------------------------------------------------------------------+
| LATEST ARTICLES & RESEARCH (Editorial Grid inspired by Amnesty):                                              |
| [Card 1: Healthcare Inequality in Punjab]  [Card 2: Pediatric Care Gaps]  [Card 3: Animal Welfare in Cities]  |
+---------------------------------------------------------------------------------------------------------------+
| TRANSPARENCY & GOVERNANCE:                                                                                    |
| [Audited Financials PDF]  [Legal Status Disclosure]  [Donor Privacy Covenant]  [File a Complaint / Report]   |
+---------------------------------------------------------------------------------------------------------------+
| FOOTER: Directory, Newsletter, WhatsApp Channel (+92 3XX XXXXXXX), Copyright © 2026 ZCF                       |
+---------------------------------------------------------------------------------------------------------------+
```

---

### Concept 2: "The Institutional Human Rights & Global Healthcare Dossier"
*Focus: Modeled after Amnesty International’s investigative authority and public advocacy rigor; appeals strongly to international diaspora, institutional grantors, and human rights supporters.*

```
+---------------------------------------------------------------------------------------------------------------+
| NAV: [ZCF EMBLEM] ZULAID CHAUDHARY FOUNDATION   Campaigns  Research  Hospital  Accountability  [TAKE ACTION]  |
+---------------------------------------------------------------------------------------------------------------+
| HERO (EDITORIAL INVESTIGATION HEADLINE):                                                                      |
|                                                                                                               |
|  ADVOCACY & HEALTHCARE DOSSIER | VOL. 2026                                                                    |
|  ===========================================================================================================  |
|  HEALTHCARE IS A UNIVERSAL HUMAN RIGHT, NOT A PRIVILEGE.                                                      |
|                                                                                                               |
|  In Pakistan, tens of millions face catastrophic health expenditure every year. Zulaid Chaudhary Foundation   |
|  is confronting this crisis through direct clinical intervention, hospital construction, and evidence-based   |
|  advocacy for the vulnerable.                                                                                 |
|                                                                                                               |
|  [READ THE 2026 HEALTHCARE BRIEF]               [JOIN THE HUMAN RIGHTS ADVOCACY NETWORK]                      |
|                                                                                                               |
+---------------------------------------------------------------------------------------------------------------+
| THREE URGENT ACTION DOSSIERS:                                                                                 |
| +-----------------------------------+ +-----------------------------------+ +-------------------------------+ |
| | DOSSIER 01: EMERGENCY HEALTHCARE  | | DOSSIER 02: LAHORE HOSPITAL BUILD | | DOSSIER 03: VULNERABLE VOICES | |
| | 25-30 Complex surgical cases      | | Ongoing construction of a 100-bed | | Defending fundamental rights  | |
| | arranged free across Lahore.      | | charity hospital in Punjab.       | | and animal welfare in cities. | |
| | [Examine Patient Dossier →]       | | [Inspect Engineering Status →]    | | [View Legal Research →]       | |
| +-----------------------------------+ +-----------------------------------+ +-------------------------------+ |
+---------------------------------------------------------------------------------------------------------------+
| FOUNDER'S OFFICIAL CHARTER (Image: 4th.jpg - Frontal, Poised, Studio Setting):                                |
| "Our governance model separates clinical care from financial profit. Every rupee donated to a patient        |
| is accounted for with verifiable clinical invoices." — Zulaid Chaudhary                                       |
| [View Governance Structure]           [Download Independent Audit Framework]                                  |
+---------------------------------------------------------------------------------------------------------------+
| GLOBAL ACTION & SUSTAINABLE DONATIONS (Recurring Default):                                                    |
| (•) Monthly Solidarity Partner  ( ) One-Time Contribution                                                     |
| [$25/mo: Sustained Medicine]  [$50/mo: Clinical Equipment]  [$100/mo: Hospital Construction Fund]             |
| Supported: Visa, Mastercard, AMEX, Stripe, Direct International Wire (SWIFT).                                 |
+---------------------------------------------------------------------------------------------------------------+
| RESEARCH, POLICY & ARTICLES REPOSITORY:                                                                       |
| Filter by: [All Research] [Healthcare Economics] [Human Rights & Palestine] [Climate & Nature]               |
+---------------------------------------------------------------------------------------------------------------+
```

---

### Concept 3: "The Tangible Community & Grassroots Action Model"
*Focus: Modeled after Quba Foundation’s itemized giving transparency; emphasizes direct sponsorship of concrete packages (patient surgeries, hospital construction bricks, water pumps, animal rescue kits).*

```
+---------------------------------------------------------------------------------------------------------------+
| NAV: [ZCF EMBLEM] Zulaid Chaudhary Foundation    Sponsorships  Hospital  Community  Contact  [SPONSOR A NEED] |
+---------------------------------------------------------------------------------------------------------------+
| HERO:                                                                                                         |
| "ONE FOUNDATION. TANGIBLE IMPACT. EVERY SINGLE NEED VERIFIED."                                                |
| See exactly where your contribution heals a life.                                                             |
|                                                                                                               |
| [FEATURED PHOTO: 3rdimg.jpg - Founder seated in community streetscape of Lahore]                              |
| "Rooted in our communities. Serving where the need is greatest."                                              |
+---------------------------------------------------------------------------------------------------------------+
| ITEMISED SPONSORSHIP CATALOG:                                                                                 |
| +--------------------------------+ +--------------------------------+ +-------------------------------------+|
| | SPONSOR SURGICAL TREATMENT     | | SPONSOR HOSPITAL SQUARE FOOT   | | CLEAN WATER WELL SPONSORSHIP        ||
| | PKR 35,000 / $125              | | PKR 15,000 / $55               | | PKR 45,000 / $160                   ||
| | Direct sponsorship of free     | | Dedicated brick/sq.ft in the   | | Hand pump installed in arid Punjab  ||
| | clinical procedure in Lahore.  | | new Lahore hospital facility.  | | with custom name dedication plaque. ||
| | [Sponsor Patient →]            | | [Sponsor Square Footage →]     | | [Dedicate a Well →]                 |
| +--------------------------------+ +--------------------------------+ +-------------------------------------+|
+---------------------------------------------------------------------------------------------------------------+
| HOW DEDICATION & FEEDBACK WORKS:                                                                              |
| 1. Select Sponsorship  ==>  2. Add Dedication Name (Esaal-e-Sawab)  ==>  3. Receive Photo & GPS Proof in 30 Days|
+---------------------------------------------------------------------------------------------------------------+
| GOOGLE REVIEWS & DONOR TESTIMONIALS STRIP:                                                                    |
| Rating: 5.0 ★★★★★ Verified Feedback from Supporters & Community Leaders                                      |
+---------------------------------------------------------------------------------------------------------------+
| EMERGENCY HELP DIRECTORY:                                                                                     |
| In medical emergency? View our direct assistance vetting requirements and government ambulance contacts.      |
+---------------------------------------------------------------------------------------------------------------+
```

---

## 7. Responsive Breakpoint Rules & Accessibility Standards

- **Breakpoints (Tailwind CSS standard):**
  - `sm: 640px` (Large mobile phones, landscape)
  - `md: 768px` (Tablets, iPads)
  - `lg: 1024px` (Small laptops, desktop standard)
  - `xl: 1280px` (Desktop widescreen)
  - `2xl: 1536px` (Ultra-wide displays)
- **Touch Targets:** Minimum `48px x 48px` for all clickable/tappable elements on mobile devices.
- **Color Contrast:** All body text meets WCAG AAA standards ($> 7:1$); all UI components and large text meet WCAG AA standards ($> 4.5:1$).
- **Reduced Motion:** All transitions and animations respect `prefers-reduced-motion: reduce`.
- **Keyboard Navigation:** Explicit visible focus rings (`focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2`).
