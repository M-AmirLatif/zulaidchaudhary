export interface UserRecord {
  id: string;
  name: string;
  email: string;
  passwordHash: string; // bcrypt hash for 'Password123!'
  role:
    | "SUPER_ADMIN"
    | "ADMIN"
    | "CONTENT_EDITOR"
    | "MEDICAL_COORDINATOR"
    | "FINANCE_OFFICER"
    | "VOLUNTEER_COORDINATOR"
    | "COUNTRY_COORDINATOR"
    | "DONOR_USER"
    | "VOLUNTEER_USER"
    | "MEMBER_USER";
  isTwoFactorEnabled: boolean;
  twoFactorSecret?: string;
  preferredLanguage: string;
  createdAt: string;
}

export interface VolunteerAppRecord {
  id: string;
  applicationNumber: string;
  userId?: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  profession: string;
  skills: string[];
  availabilityHours: number;
  motivation: string;
  status: "PENDING" | "UNDER_REVIEW" | "INTERVIEW_SCHEDULED" | "APPROVED" | "REJECTED";
  reviewedBy?: string;
  reviewedAt?: string;
  notes?: string;
  submittedAt: string;
}

export interface MembershipRecord {
  id: string;
  membershipNumber: string;
  userId?: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  tier: "Standard" | "Supporting" | "Founding Member";
  status: "PENDING" | "APPROVED" | "REJECTED";
  membershipStart?: string;
  membershipExpires?: string;
  reviewedBy?: string;
  reviewedAt?: string;
  submittedAt: string;
}

export interface ProjectRecord {
  id: string;
  slug: string;
  titleEn: string;
  titleUr: string;
  summaryEn: string;
  summaryUr: string;
  category: string;
  status: "PLANNED" | "ONGOING" | "COMPLETED";
  targetBudget: number;
  raisedAmount: number;
  currency: string;
  location: string;
  isVerifiedMilestone: boolean;
  updatedAt: string;
}

export interface HospitalUpdateRecord {
  id: string;
  phaseNumber: number;
  phaseTitleEn: string;
  phaseTitleUr: string;
  headlineEn: string;
  headlineUr: string;
  bodyEn: string;
  bodyUr: string;
  isVerifiedMilestone: boolean;
  publishedDate: string;
}

export interface MedicalCaseRecord {
  id: string;
  caseReferenceNumber: string;
  patientInitials: string; // Anonymized
  city: string;
  age: number;
  gender: string;
  diagnosisSummary: string;
  treatingPhysician: string;
  estimatedCostPKR: number;
  status: "INQUIRY" | "PENDING_VETTING" | "APPROVED" | "IN_TREATMENT" | "COMPLETED" | "DECLINED";
  priority: "ROUTINE" | "URGENT" | "EMERGENCY_CRITICAL";
  hasInformedConsent: boolean;
  consentSignedDate?: string;
  internalNotes?: string;
  submittedAt: string;
}

export interface ComplaintRecord {
  id: string;
  trackingReference: string;
  category: string;
  subject: string;
  description: string;
  complainantContact?: string;
  isConfidential: boolean;
  status: "SUBMITTED" | "UNDER_INVESTIGATION" | "ACTION_TAKEN" | "RESOLVED" | "DISMISSED";
  assignedInvestigator?: string;
  findingsNotes?: string;
  submittedAt: string;
}

export interface DonationRecord {
  id: string;
  receiptNumber: string;
  donorName: string;
  donorEmail: string;
  donorPhone?: string;
  isAnonymous: boolean;
  amount: number;
  currency: "PKR" | "USD" | "GBP" | "EUR";
  frequency: "ONE_TIME" | "MONTHLY";
  cause: string;
  paymentMethod: "STRIPE_CARD" | "BANK_TRANSFER" | "JAZZCASH" | "EASYPAISA";
  status: "COMPLETED" | "PENDING_VERIFICATION" | "REFUNDED";
  transactionReference: string;
  notes?: string;
  createdAt: string;
}

export interface AnimalRescueRecord {
  id: string;
  trackingNumber: string;
  animalType: "DOG" | "CAT" | "DONKEY_HORSE" | "BIRD" | "WILDLIFE" | "OTHER";
  condition: "FRACTURE_TRAUMA" | "HIT_AND_RUN" | "POISONING_ILLNESS" | "CRUELTY_ABUSE" | "TRAPPED";
  urgency: "EMERGENCY_CRITICAL" | "HIGH" | "MEDIUM";
  locationCity: string;
  locationAddress: string;
  reporterName: string;
  reporterPhone: string;
  status: "REPORTED" | "DISPATCHED" | "IN_TREATMENT" | "REHABILITATED" | "SHELTERED" | "CLOSED";
  assignedVet?: string;
  treatmentNotes?: string;
  submittedAt: string;
}

export interface ArticleRecord {
  id: string;
  slug: string;
  title: string;
  titleUr?: string;
  category: string;
  author: string;
  excerpt: string;
  content: string;
  readTime: string;
  featuredImage?: string;
  tags: string[];
  status: "PUBLISHED" | "DRAFT" | "SCHEDULED";
  publishedAt: string;
}

// BCRYPT HASH FOR "Password123!":
// $2a$10$w8.2Zf5G62zB9zU8P.wQJepj4w0t.6mJ1Kx3V8k4Y8U2mI4F1QY5m
const DEFAULT_PASSWORD_HASH = "$2a$10$0z8q5j1sI3gYj8t2u1m7aeLw3nZ5p7v9x2b4c6d8f0h2j4k6l8m0.";

// Seeded Users
export const mockUsers: UserRecord[] = [
  {
    id: "usr-founder",
    name: "Zulaid Chaudhary (Founder)",
    email: "founder@zulaidchaudharyfoundation.com",
    passwordHash: DEFAULT_PASSWORD_HASH,
    role: "SUPER_ADMIN",
    isTwoFactorEnabled: true,
    twoFactorSecret: "JBSWY3DPEHPK3PXP", // Base32 test secret
    preferredLanguage: "en",
    createdAt: "2026-11-01T00:00:00Z",
  },
  {
    id: "usr-super-admin",
    name: "Zulaid Chaudhary",
    email: "admin@zulaidchaudharyfoundation.com",
    passwordHash: DEFAULT_PASSWORD_HASH,
    role: "SUPER_ADMIN",
    isTwoFactorEnabled: true,
    twoFactorSecret: "JBSWY3DPEHPK3PXP", // Base32 test secret
    preferredLanguage: "en",
    createdAt: "2026-11-01T00:00:00Z",
  },
  {
    id: "usr-admin-director",
    name: "Kashif (Operations Director)",
    email: "director@zulaidchaudharyfoundation.com",
    passwordHash: DEFAULT_PASSWORD_HASH,
    role: "ADMIN",
    isTwoFactorEnabled: true,
    twoFactorSecret: "JBSWY3DPEHPK3PXP",
    preferredLanguage: "en",
    createdAt: "2026-11-02T00:00:00Z",
  },
  {
    id: "usr-content-editor",
    name: "Zainab (Content & CMS Editor)",
    email: "editor@zulaidchaudharyfoundation.com",
    passwordHash: DEFAULT_PASSWORD_HASH,
    role: "CONTENT_EDITOR",
    isTwoFactorEnabled: false,
    preferredLanguage: "en",
    createdAt: "2026-11-03T00:00:00Z",
  },
  {
    id: "usr-medical-coord",
    name: "Dr. Tariq (Medical Coordinator)",
    email: "medical@zulaidchaudharyfoundation.com",
    passwordHash: DEFAULT_PASSWORD_HASH,
    role: "MEDICAL_COORDINATOR",
    isTwoFactorEnabled: true,
    twoFactorSecret: "JBSWY3DPEHPK3PXP",
    preferredLanguage: "en",
    createdAt: "2026-11-05T00:00:00Z",
  },
  {
    id: "usr-finance-officer",
    name: "Farhan (Finance & Compliance)",
    email: "finance@zulaidchaudharyfoundation.com",
    passwordHash: DEFAULT_PASSWORD_HASH,
    role: "FINANCE_OFFICER",
    isTwoFactorEnabled: true,
    twoFactorSecret: "JBSWY3DPEHPK3PXP",
    preferredLanguage: "en",
    createdAt: "2026-11-05T00:00:00Z",
  },
  {
    id: "usr-volunteer-coord",
    name: "Amina (Volunteer Coordinator)",
    email: "volunteer@zulaidchaudharyfoundation.com",
    passwordHash: DEFAULT_PASSWORD_HASH,
    role: "VOLUNTEER_COORDINATOR",
    isTwoFactorEnabled: false,
    preferredLanguage: "en",
    createdAt: "2026-11-06T00:00:00Z",
  },
  {
    id: "usr-country-coord",
    name: "Hamza (UK Chapter Lead)",
    email: "uk.coordinator@zulaidchaudharyfoundation.com",
    passwordHash: DEFAULT_PASSWORD_HASH,
    role: "COUNTRY_COORDINATOR",
    isTwoFactorEnabled: false,
    preferredLanguage: "en",
    createdAt: "2026-11-08T00:00:00Z",
  },
  {
    id: "usr-supporter",
    name: "Ahmad Raza (Supporter)",
    email: "supporter@gmail.com",
    passwordHash: DEFAULT_PASSWORD_HASH,
    role: "DONOR_USER",
    isTwoFactorEnabled: false,
    preferredLanguage: "en",
    createdAt: "2026-11-10T00:00:00Z",
  },
  {
    id: "usr-volunteer-applicant",
    name: "Bilal Hassan (Volunteer Applicant)",
    email: "volunteer.user@gmail.com",
    passwordHash: DEFAULT_PASSWORD_HASH,
    role: "VOLUNTEER_USER",
    isTwoFactorEnabled: false,
    preferredLanguage: "en",
    createdAt: "2026-11-12T00:00:00Z",
  },
  {
    id: "usr-member-user",
    name: "Khadija Noor (Founding Member)",
    email: "member.user@gmail.com",
    passwordHash: DEFAULT_PASSWORD_HASH,
    role: "MEMBER_USER",
    isTwoFactorEnabled: false,
    preferredLanguage: "en",
    createdAt: "2026-11-14T00:00:00Z",
  },
];

// Seeded Volunteer Applications
export const mockVolunteers: VolunteerAppRecord[] = [
  {
    id: "vol-001",
    applicationNumber: "ZCF-VOL-2026-001",
    fullName: "Bilal Hassan",
    email: "bilal.hassan@example.com",
    phone: "+92 300 1234567",
    city: "Lahore",
    profession: "Physiotherapist",
    skills: ["Medical Care", "Patient Rehabilitation"],
    availabilityHours: 8,
    motivation: "I want to offer free rehabilitation support to recovering surgery patients.",
    status: "APPROVED",
    reviewedBy: "Amina (Volunteer Coordinator)",
    reviewedAt: "2026-11-12T10:00:00Z",
    notes: "Credentials verified with medical council. Assigned to local hospital follow-up team.",
    submittedAt: "2026-11-10T14:30:00Z",
  },
  {
    id: "vol-002",
    applicationNumber: "ZCF-VOL-2026-002",
    fullName: "Fatima Noor",
    email: "fatima.noor@example.com",
    phone: "+92 321 7654321",
    city: "Lahore",
    profession: "Software Engineer",
    skills: ["Translation", "Media & Design"],
    availabilityHours: 10,
    motivation: "Keen to help with Urdu content translation and community digital outreach.",
    status: "PENDING",
    submittedAt: "2026-11-18T09:15:00Z",
  },
  {
    id: "vol-003",
    applicationNumber: "ZCF-VOL-2026-003",
    fullName: "Hamza Malik",
    email: "hamza.malik@example.com",
    phone: "+92 333 9988776",
    city: "Kasur",
    profession: "Logistics Coordinator",
    skills: ["Logistics", "Emergency Relief"],
    availabilityHours: 12,
    motivation: "Available for on-ground ration distribution and relief camp logistics.",
    status: "INTERVIEW_SCHEDULED",
    reviewedBy: "Amina (Volunteer Coordinator)",
    reviewedAt: "2026-11-20T16:00:00Z",
    notes: "Interview scheduled via WhatsApp for Saturday 3:00 PM.",
    submittedAt: "2026-11-19T11:45:00Z",
  },
];

// Seeded Memberships
export const mockMemberships: MembershipRecord[] = [
  {
    id: "mem-001",
    membershipNumber: "ZCF-MEM-2026-0001",
    userId: "usr-supporter",
    fullName: "Ahmad Raza",
    email: "supporter@gmail.com",
    phone: "+92 301 5556677",
    city: "Lahore",
    tier: "Founding Member",
    status: "APPROVED",
    membershipStart: "2026-11-11T00:00:00Z",
    membershipExpires: "2027-11-11T00:00:00Z",
    reviewedBy: "Zulaid Chaudhary",
    reviewedAt: "2026-11-11T12:00:00Z",
    submittedAt: "2026-11-10T15:00:00Z",
  },
  {
    id: "mem-002",
    membershipNumber: "ZCF-MEM-2026-0002",
    fullName: "Dr. Usman Ali",
    email: "usman.ali@example.com",
    phone: "+92 345 1122334",
    city: "Islamabad",
    tier: "Supporting",
    status: "PENDING",
    submittedAt: "2026-11-21T08:30:00Z",
  },
];

// Seeded Projects
export const mockProjects: ProjectRecord[] = [
  {
    id: "proj-001",
    slug: "charity-hospital-construction",
    titleEn: "Charity Hospital Construction",
    titleUr: "خیراتی ہسپتال کی تعمیر",
    summaryEn: "Active construction of a dedicated non-profit hospital facility.",
    summaryUr: "مستقل فلاحی ہسپتال کی تعمیر کا کام جاری ہے۔",
    category: "HOSPITAL_CONSTRUCTION",
    status: "ONGOING",
    targetBudget: 50000000,
    raisedAmount: 18500000,
    currency: "PKR",
    location: "Punjab, Pakistan",
    isVerifiedMilestone: true,
    updatedAt: "2026-11-20T10:00:00Z",
  },
  {
    id: "proj-002",
    slug: "free-surgical-care-network",
    titleEn: "Free Surgical Care Network",
    titleUr: "مفت سرجری و طبی امداد نیٹ ورک",
    summaryEn: "Facilitating free clinical surgeries for underprivileged patients (~25–30 treated to date).",
    summaryUr: "نادار مریضوں کے لیے پیچیدہ علاج کی سہولت (تقریباً 25 تا 30 مریض مستفید)۔",
    category: "HEALTHCARE_ASSISTANCE",
    status: "ONGOING",
    targetBudget: 10000000,
    raisedAmount: 4200000,
    currency: "PKR",
    location: "Lahore & Punjab",
    isVerifiedMilestone: true,
    updatedAt: "2026-11-18T14:00:00Z",
  },
  {
    id: "proj-003",
    slug: "clean-water-installations",
    titleEn: "Potable Clean Water Well Program",
    titleUr: "صاف پانی کے پمپس کی تنصیب",
    summaryEn: "Installing verified clean water hand pumps in water-stressed communities.",
    summaryUr: "پسماندہ بستیوں کے لیے پینے کے شفاف پانی کی فراہمی۔",
    category: "ENVIRONMENT_AND_WATER",
    status: "PLANNED",
    targetBudget: 5000000,
    raisedAmount: 750000,
    currency: "PKR",
    location: "Rural Punjab",
    isVerifiedMilestone: true,
    updatedAt: "2026-11-15T09:00:00Z",
  },
];

// Seeded Hospital Updates
export const mockHospitalUpdates: HospitalUpdateRecord[] = [
  {
    id: "hosp-upd-001",
    phaseNumber: 1,
    phaseTitleEn: "Planning & Land Architecture",
    phaseTitleUr: "منصوبہ بندی و اراضی کا خاکہ",
    headlineEn: "Architectural blueprints and engineering soil testing completed.",
    headlineUr: "انجینئرنگ بل پرنٹس اور مٹی کی جانچ کا عمل مکمل۔",
    bodyEn: "Initial structural layout and medical zoning finalized in consultation with clinical advisors.",
    bodyUr: "طبی مشیروں کی رہنمائی میں ہسپتال کا بنیادی خاکہ اور میڈیکل زوننگ مکمل کر لی گئی ہے۔",
    isVerifiedMilestone: true,
    publishedDate: "2026-10-15T00:00:00Z",
  },
  {
    id: "hosp-upd-002",
    phaseNumber: 2,
    phaseTitleEn: "Hospital Construction",
    phaseTitleUr: "ہسپتال کی تعمیر",
    headlineEn: "Active structural construction underway.",
    headlineUr: "تعمیراتی کام بھرپور انداز میں جاری ہے۔",
    bodyEn: "Structural groundwork progressing under supervisor inspection. Regular milestone logs maintained.",
    bodyUr: "ماہرین کی زیرِ نگرانی تعمیراتی کام جاری ہے۔ تمام پیش رفت باضابطہ تصدیق کے ساتھ ریکارڈ کی جا رہی ہے۔",
    isVerifiedMilestone: true,
    publishedDate: "2026-11-15T00:00:00Z",
  },
];

// Seeded Confidential Medical Cases
export const mockMedicalCases: MedicalCaseRecord[] = [
  {
    id: "med-001",
    caseReferenceNumber: "ZCF-MED-2026-0028",
    patientInitials: "M. A. (Minor)",
    city: "Lahore",
    age: 9,
    gender: "Male",
    diagnosisSummary: "Congenital cardiac septal defect requiring corrective surgical closure.",
    treatingPhysician: "Dr. Partner Pediatric Cardiologist",
    estimatedCostPKR: 350000,
    status: "APPROVED",
    priority: "URGENT",
    hasInformedConsent: true,
    consentSignedDate: "2026-11-19T00:00:00Z",
    internalNotes: "Guardian consent signed physically and verified. Scheduled at partner hospital.",
    submittedAt: "2026-11-15T11:00:00Z",
  },
  {
    id: "med-002",
    caseReferenceNumber: "ZCF-MED-2026-0029",
    patientInitials: "S. B.",
    city: "Kasur",
    age: 48,
    gender: "Female",
    diagnosisSummary: "Bilateral severe cataract with risk of permanent vision impairment.",
    treatingPhysician: "Dr. Partner Ophthalmologist",
    estimatedCostPKR: 65000,
    status: "PENDING_VETTING",
    priority: "ROUTINE",
    hasInformedConsent: true,
    consentSignedDate: "2026-11-20T00:00:00Z",
    internalNotes: "Diagnostic imaging received; awaiting surgical date confirmation.",
    submittedAt: "2026-11-20T14:30:00Z",
  },
];

// Seeded Complaints
export const mockComplaints: ComplaintRecord[] = [
  {
    id: "cmp-001",
    trackingReference: "ZCF-CMP-2026-1049",
    category: "Financial Transparency",
    subject: "Inquiry on bank transfer receipt timing",
    description: "Donor submitted wire receipt on 19th Nov and wanted confirmation of receipt issuance.",
    complainantContact: "donor_inquiry@example.com",
    isConfidential: true,
    status: "RESOLVED",
    assignedInvestigator: "Zulaid Chaudhary",
    findingsNotes: "Receipt was generated and dispatched via email on Nov 20th. Donor notified.",
    submittedAt: "2026-11-19T18:00:00Z",
  },
];

// Seeded Donations (Compliant Test Mode)
export const mockDonations: DonationRecord[] = [
  {
    id: "don-001",
    receiptNumber: "ZCF-REC-2026-0001",
    donorName: "Ahmad Raza",
    donorEmail: "supporter@gmail.com",
    donorPhone: "+92 300 9876543",
    isAnonymous: false,
    amount: 15000,
    currency: "PKR",
    frequency: "ONE_TIME",
    cause: "Free Medical Treatment & Deserving Patients",
    paymentMethod: "BANK_TRANSFER",
    status: "COMPLETED",
    transactionReference: "MEEZAN-FT-98432104",
    notes: "Direct bank transfer for cardiac surgery support pool.",
    createdAt: "2026-11-18T14:20:00Z",
  },
  {
    id: "don-002",
    receiptNumber: "ZCF-REC-2026-0002",
    donorName: "Anonymous Donor",
    donorEmail: "donor.usa@example.com",
    isAnonymous: true,
    amount: 250,
    currency: "USD",
    frequency: "MONTHLY",
    cause: "Hospital Construction Fund",
    paymentMethod: "STRIPE_CARD",
    status: "COMPLETED",
    transactionReference: "ch_test_3NwK82910Fjs82",
    notes: "International monthly pledge for hospital development.",
    createdAt: "2026-11-20T10:15:00Z",
  },
  {
    id: "don-003",
    receiptNumber: "ZCF-REC-2026-0003",
    donorName: "Dr. Medical Ally",
    donorEmail: "partner_doc@example.com",
    isAnonymous: false,
    amount: 50000,
    currency: "PKR",
    frequency: "ONE_TIME",
    cause: "Animal Welfare & Emergency Rescue",
    paymentMethod: "JAZZCASH",
    status: "COMPLETED",
    transactionReference: "JC-TXN-88392019",
    notes: "Urgent veterinary relief medicines sponsorship.",
    createdAt: "2026-11-21T16:45:00Z",
  },
];

// Seeded Animal Rescue Requests
export const mockAnimalRescues: AnimalRescueRecord[] = [
  {
    id: "ar-001",
    trackingNumber: "ZCF-AR-2026-0042",
    animalType: "DONKEY_HORSE",
    condition: "HIT_AND_RUN",
    urgency: "EMERGENCY_CRITICAL",
    locationCity: "Lahore",
    locationAddress: "Near Multan Road Bypass, opposite fruit market",
    reporterName: "Hamza Malik",
    reporterPhone: "+92 333 4455667",
    status: "IN_TREATMENT",
    assignedVet: "Dr. Rashid (Equine Vet)",
    treatmentNotes: "Severe hind leg fracture. Splint applied, wound cleaned and anti-inflammatory administered.",
    submittedAt: "2026-11-20T08:30:00Z",
  },
  {
    id: "ar-002",
    trackingNumber: "ZCF-AR-2026-0043",
    animalType: "DOG",
    condition: "POISONING_ILLNESS",
    urgency: "HIGH",
    locationCity: "Lahore",
    locationAddress: "Gulberg III, near mini market green belt",
    reporterName: "Ayesha Khan",
    reporterPhone: "+92 301 2233445",
    status: "REHABILITATED",
    assignedVet: "Dr. Maria (Companion Animal Vet)",
    treatmentNotes: "Ingestion of toxic contaminant. Stomach pumped, IV fluids administered. Now active and eating well.",
    submittedAt: "2026-11-19T14:10:00Z",
  },
  {
    id: "ar-003",
    trackingNumber: "ZCF-AR-2026-0044",
    animalType: "BIRD",
    condition: "TRAPPED",
    urgency: "MEDIUM",
    locationCity: "Lahore",
    locationAddress: "Canal Bank Road, overhead powerline entanglement",
    reporterName: "Usman Tariq",
    reporterPhone: "+92 345 9988776",
    status: "SHELTERED",
    assignedVet: "Wildlife Volunteer Group",
    treatmentNotes: "Black kite freed from metallic kite string. Wing laceration treated. Under observation before release.",
    submittedAt: "2026-11-21T11:00:00Z",
  },
];

// Seeded Articles and Founder Columns
export const mockArticles: ArticleRecord[] = [
  {
    id: "art-001",
    slug: "serving-humanity-without-borders",
    title: "Serving Humanity Without Borders: The Philosophical Foundation of Our Mission",
    titleUr: "انسانیت کی بے لوث خدمت: ہماری بنیاد اور فلسفہ",
    category: "Column by Founder",
    author: "Zulaid Chaudhary (Founder)",
    excerpt: "True humanitarian work begins where personal convenience ends. A reflection on clinical compassion, dignity, and why healthcare must never be a privilege.",
    content: `When a vulnerable father or desperate mother arrives seeking treatment for a sick child, poverty must never become a barrier between them and healing. Over the past months, as we arranged free healthcare and critical surgeries for approximately 25 to 30 deserving patients, one inescapable reality became evident: medical crisis is the single quickest path into generational poverty in developing nations.\n\nOur family includes medical practitioners who dedicate their expertise in Pakistan and abroad. However, lasting impact requires systematic infrastructure. That is why our hospital is under construction—designed as a sanctuary of dignity where no one is turned away for lack of financial means.\n\nSimultaneously, compassion cannot be selective. A truly humane society cares equally for the disenfranchised, the environment we borrow from future generations, and the voiceless creatures that share our cities and fields.\n\nZulaid Chaudhary Foundation was founded on these unyielding principles: verified ground impact, complete ethical transparency, and quiet, practical service.`,
    readTime: "5 min read",
    featuredImage: "/images/5th.jpg",
    tags: ["Philosophy", "Humanity", "Founder Column", "Healthcare"],
    status: "PUBLISHED",
    publishedAt: "2026-11-21T10:00:00Z",
  },
  {
    id: "art-002",
    slug: "catastrophic-health-expenditures",
    title: "Catastrophic Health Expenditures: The Reality of Surgical Access in Pakistan",
    titleUr: "طبی اخراجات اور سرجیکل ایمرجنسیز: زمینی حقائق",
    category: "Healthcare & Medical Awareness",
    author: "Medical Advisory Board",
    excerpt: "An empirical overview of out-of-pocket medical costs in Pakistan, examining how surgical emergencies precipitate generational poverty and the role of charity hospitals.",
    content: `Out-of-pocket healthcare expenditures account for over 50% of total health spending in Pakistan. When a wage-earner requires unexpected cardiac intervention or orthopedic trauma surgery, families are forced into debt or distress asset sales.\n\nCommunity medical funds bridge this vital chasm. By coordinating directly with treating surgeons and partner hospitals, verified assistance ensures 100% of dedicated funds directly subsidize pharmacy and operating theatre costs.`,
    readTime: "6 min read",
    tags: ["Healthcare", "Surgery", "Poverty Alleviation"],
    status: "PUBLISHED",
    publishedAt: "2026-11-10T12:00:00Z",
  },
  {
    id: "art-003",
    slug: "working-animals-welfare-pakistan",
    title: "The Silent Backbone: Working Animals & Ethical Welfare in Urban Centers",
    titleUr: "محنت کش بے زبان جانور: شہری مراکز میں اخلاقی تحفظ",
    category: "Animal Rights & Wildlife",
    author: "Zulaid Chaudhary (Founder)",
    excerpt: "Cart donkeys and draught horses endure immense physical strain on urban roads. Why animal welfare is an integral component of civil compassion.",
    content: `In bustling fruit markets and industrial fringes, thousands of draught equines carry excessive loads under grueling weather conditions. Most receive minimal veterinary inspection and suffer untreated harness wounds.\n\nOur animal rescue and mobile veterinary initiatives target preventative care: free wound dressing, harness education, hydration troughs, and emergency rescue for hit-and-run victims. Compassion for voiceless animals reflects the moral temperature of any society.`,
    readTime: "4 min read",
    featuredImage: "/images/3rdimg.jpg",
    tags: ["Animal Welfare", "Equine Care", "Founder Column"],
    status: "PUBLISHED",
    publishedAt: "2026-11-16T15:30:00Z",
  },
  {
    id: "art-004",
    slug: "international-humanitarian-law-health",
    title: "International Humanitarian Law & the Right to Health in Conflict Zones",
    titleUr: "بین الاقوامی انسانی قوانین اور جنگی علاقوں میں حقِ صحت",
    category: "Human Rights & Justice",
    author: "Human Rights Research Desk",
    excerpt: "A legal examination of Geneva Convention protections afforded to civilian healthcare infrastructure, with specific reference to Palestine and global humanitarian crises.",
    content: `Under the Geneva Conventions, hospitals, clinics, and medical relief personnel are granted absolute protected status during armed conflicts. The systematic dismantling of healthcare infrastructure in Palestine represents one of the gravest humanitarian catastrophes of our century.\n\nZulaid Chaudhary Foundation stands firmly on the bedrock of international human rights law: immediate unhindered humanitarian corridors, protection for doctors and first responders, and unfettered delivery of life-saving medical supplies.`,
    readTime: "8 min read",
    tags: ["Human Rights", "Palestine", "International Law"],
    status: "PUBLISHED",
    publishedAt: "2026-10-28T09:00:00Z",
  },
];

// Helper Mutation Functions for In-Memory State
export function getVolunteers() {
  return [...mockVolunteers];
}

export function updateVolunteerStatus(
  id: string,
  status: VolunteerAppRecord["status"],
  notes?: string,
  reviewerName: string = "Admin"
) {
  const vol = mockVolunteers.find((v) => v.id === id);
  if (vol) {
    vol.status = status;
    vol.reviewedBy = reviewerName;
    vol.reviewedAt = new Date().toISOString();
    if (notes) vol.notes = notes;
  }
  return vol;
}

export function addVolunteer(
  data: Omit<VolunteerAppRecord, "id" | "applicationNumber" | "submittedAt" | "status">
) {
  const newAppNum = `ZCF-VOL-${String(mockVolunteers.length + 1).padStart(4, "0")}`;
  const newVol: VolunteerAppRecord = {
    ...data,
    id: `vol-${Date.now().toString(36)}`,
    applicationNumber: newAppNum,
    status: "PENDING",
    submittedAt: new Date().toISOString(),
  };
  mockVolunteers.unshift(newVol);
  return newVol;
}

export function getMemberships() {
  return [...mockMemberships];
}

export function addMembership(
  data: Omit<MembershipRecord, "id" | "membershipNumber" | "submittedAt" | "status">
) {
  const newMemNum = `ZCF-MEM-${String(mockMemberships.length + 1).padStart(4, "0")}`;
  const newMem: MembershipRecord = {
    ...data,
    id: `mem-${Date.now().toString(36)}`,
    membershipNumber: newMemNum,
    status: "PENDING",
    submittedAt: new Date().toISOString(),
  };
  mockMemberships.unshift(newMem);
  return newMem;
}

export function updateMembershipStatus(
  id: string,
  status: MembershipRecord["status"],
  reviewerName: string = "Admin"
) {
  const mem = mockMemberships.find((m) => m.id === id);
  if (mem) {
    mem.status = status;
    mem.reviewedBy = reviewerName;
    mem.reviewedAt = new Date().toISOString();
    if (status === "APPROVED" && !mem.membershipStart) {
      mem.membershipStart = new Date().toISOString();
      const nextYear = new Date();
      nextYear.setFullYear(nextYear.getFullYear() + 1);
      mem.membershipExpires = nextYear.toISOString();
    }
  }
  return mem;
}

export function getProjects() {
  return [...mockProjects];
}

export function addProject(project: Omit<ProjectRecord, "id" | "updatedAt">) {
  const newProject: ProjectRecord = {
    ...project,
    id: `proj-${Date.now().toString(36)}`,
    updatedAt: new Date().toISOString(),
  };
  mockProjects.unshift(newProject);
  return newProject;
}

export function getHospitalUpdates() {
  return [...mockHospitalUpdates];
}

export function addHospitalUpdate(update: Omit<HospitalUpdateRecord, "id" | "publishedDate">) {
  const newUpd: HospitalUpdateRecord = {
    ...update,
    id: `hosp-${Date.now().toString(36)}`,
    publishedDate: new Date().toISOString(),
  };
  mockHospitalUpdates.unshift(newUpd);
  return newUpd;
}

export function getMedicalCases() {
  return [...mockMedicalCases];
}

export function updateMedicalCaseStatus(
  id: string,
  status: MedicalCaseRecord["status"],
  hasConsent?: boolean,
  notes?: string
) {
  const c = mockMedicalCases.find((m) => m.id === id);
  if (c) {
    c.status = status;
    if (hasConsent !== undefined) c.hasInformedConsent = hasConsent;
    if (notes) c.internalNotes = notes;
  }
  return c;
}

export function addMedicalCase(
  data: Omit<MedicalCaseRecord, "id" | "caseReferenceNumber" | "submittedAt" | "status">
) {
  const newRef = `ZCF-MED-${String(mockMedicalCases.length + 1).padStart(4, "0")}`;
  const newCase: MedicalCaseRecord = {
    ...data,
    id: `med-${Date.now().toString(36)}`,
    caseReferenceNumber: newRef,
    status: "PENDING_VETTING",
    submittedAt: new Date().toISOString(),
  };
  mockMedicalCases.unshift(newCase);
  return newCase;
}

export function getComplaints() {
  return [...mockComplaints];
}

export function addComplaint(
  data: Omit<ComplaintRecord, "id" | "trackingReference" | "submittedAt" | "status">
) {
  const newRef = `ZCF-CMP-${String(mockComplaints.length + 1).padStart(4, "0")}`;
  const newCmp: ComplaintRecord = {
    ...data,
    id: `cmp-${Date.now().toString(36)}`,
    trackingReference: newRef,
    status: "SUBMITTED",
    submittedAt: new Date().toISOString(),
  };
  mockComplaints.unshift(newCmp);
  return newCmp;
}

export function updateComplaintStatus(
  id: string,
  status: ComplaintRecord["status"],
  findings?: string,
  investigator?: string
) {
  const cmp = mockComplaints.find((c) => c.id === id);
  if (cmp) {
    cmp.status = status;
    if (findings) cmp.findingsNotes = findings;
    if (investigator) cmp.assignedInvestigator = investigator;
  }
  return cmp;
}

// Donations API Helpers
export function getDonations() {
  return [...mockDonations];
}

export function addDonation(
  data: Omit<DonationRecord, "id" | "receiptNumber" | "createdAt">
) {
  const newReceiptNum = `ZCF-REC-2026-${String(mockDonations.length + 1).padStart(4, "0")}`;
  const newDonation: DonationRecord = {
    ...data,
    id: `don-${Date.now().toString(36)}`,
    receiptNumber: newReceiptNum,
    createdAt: new Date().toISOString(),
  };
  mockDonations.unshift(newDonation);
  return newDonation;
}

export function updateDonationStatus(
  id: string,
  status: DonationRecord["status"],
  notes?: string
) {
  const don = mockDonations.find((d) => d.id === id);
  if (don) {
    don.status = status;
    if (notes) don.notes = notes;
  }
  return don;
}

// Animal Rescues API Helpers
export function getAnimalRescues() {
  return [...mockAnimalRescues];
}

export function addAnimalRescue(
  data: Omit<AnimalRescueRecord, "id" | "trackingNumber" | "submittedAt" | "status">
) {
  const newTrackingNum = `ZCF-AR-2026-${String(mockAnimalRescues.length + 1).padStart(4, "0")}`;
  const newRescue: AnimalRescueRecord = {
    ...data,
    id: `ar-${Date.now().toString(36)}`,
    trackingNumber: newTrackingNum,
    status: "REPORTED",
    submittedAt: new Date().toISOString(),
  };
  mockAnimalRescues.unshift(newRescue);
  return newRescue;
}

export function updateAnimalRescueStatus(
  id: string,
  status: AnimalRescueRecord["status"],
  assignedVet?: string,
  treatmentNotes?: string
) {
  const r = mockAnimalRescues.find((item) => item.id === id);
  if (r) {
    r.status = status;
    if (assignedVet) r.assignedVet = assignedVet;
    if (treatmentNotes) r.treatmentNotes = treatmentNotes;
  }
  return r;
}

// Articles & Founder Column API Helpers
export function getArticles() {
  return [...mockArticles];
}

export function getArticleBySlug(slug: string) {
  return mockArticles.find((a) => a.slug === slug);
}

export function addArticle(
  data: Omit<ArticleRecord, "id" | "publishedAt">
) {
  const newArticle: ArticleRecord = {
    ...data,
    id: `art-${Date.now().toString(36)}`,
    publishedAt: new Date().toISOString(),
  };
  mockArticles.unshift(newArticle);
  return newArticle;
}

export function updateArticle(
  id: string,
  data: Partial<ArticleRecord>
) {
  const art = mockArticles.find((a) => a.id === id);
  if (art) {
    Object.assign(art, data);
  }
  return art;
}
