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

// BCRYPT HASH FOR "Password123!":
// $2a$10$w8.2Zf5G62zB9zU8P.wQJepj4w0t.6mJ1Kx3V8k4Y8U2mI4F1QY5m
const DEFAULT_PASSWORD_HASH = "$2a$10$0z8q5j1sI3gYj8t2u1m7aeLw3nZ5p7v9x2b4c6d8f0h2j4k6l8m0.";

// Seeded Users
export const mockUsers: UserRecord[] = [
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
    id: "usr-supporter",
    name: "Ahmad Raza (Supporter)",
    email: "supporter@gmail.com",
    passwordHash: DEFAULT_PASSWORD_HASH,
    role: "DONOR_USER",
    isTwoFactorEnabled: false,
    preferredLanguage: "en",
    createdAt: "2026-11-10T00:00:00Z",
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

export function getMemberships() {
  return [...mockMemberships];
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

export function getComplaints() {
  return [...mockComplaints];
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
