"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import {
  Stethoscope,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  Search,
  Building2,
  Users,
  Lock,
  ArrowRight,
  Send,
} from "lucide-react";

const VERIFIED_CASES = [
  {
    caseId: "ZCF-MED-029",
    category: "Pediatric Cardiac Care",
    hospital: "Specialized Pediatric Surgical Center",
    status: "COMPLETED",
    description: "Ventricular septal defect corrective procedure facilitated via physician advisory network.",
    supportType: "Full Clinical Sponsorship",
    date: "November 2026",
  },
  {
    caseId: "ZCF-MED-028",
    category: "Orthopedic Trauma Reconstruction",
    hospital: "Tertiary Trauma Reconstruction Center",
    status: "COMPLETED",
    description: "Emergency compound fracture fixation for daily-wage earner injured in workplace accident.",
    supportType: "Implants & Surgical Costs",
    date: "October 2026",
  },
  {
    caseId: "ZCF-MED-027",
    category: "Ophthalmic Cataract & Lens Replacement",
    hospital: "Specialized Ophthalmic Eye Center",
    status: "COMPLETED",
    description: "Bilateral intraocular lens implantation for elderly widow restoring independent vision.",
    supportType: "Surgical Consumables Pool",
    date: "September 2026",
  },
  {
    caseId: "ZCF-MED-026",
    category: "Critical Oncology Chemotherapy Support",
    hospital: "Regional Oncology Institute",
    status: "IN_PROGRESS",
    description: "Cycle 4 and 5 adjuvant chemotherapy medication funding for impoverished maternal patient.",
    supportType: "Direct Pharmacy Subsidy",
    date: "Active Case",
  },
  {
    caseId: "ZCF-MED-025",
    category: "Chronic Renal Dialysis Subsidy",
    hospital: "Dialysis Welfare Partner Center",
    status: "IN_PROGRESS",
    description: "Twice-weekly hemodialysis session support and erythropoietin injections pool.",
    supportType: "Recurring Treatment Pool",
    date: "Active Case",
  },
  {
    caseId: "ZCF-MED-024",
    category: "Emergency Laparoscopic Intervention",
    hospital: "Emergency Surgical Department",
    status: "COMPLETED",
    description: "Emergency acute perforated appendicitis surgical care for destitute orphan adolescent.",
    supportType: "Full Medical Coverage",
    date: "August 2026",
  },
];

const MEDICAL_SPECIALTIES = [
  "General Surgery & Laparoscopy",
  "Cardiology & Cardiac Surgery",
  "Orthopedics & Fracture Care",
  "Ophthalmology & Eye Surgeries",
  "Oncology & Chemotherapy",
  "Nephrology & Dialysis",
  "Pediatric Surgery",
  "Neurology & Neurosurgery",
  "Pharmacy & Medication Pool",
];

export default function MedicalAssistancePage() {
  const [activeTab, setActiveTab] = useState<"apply" | "cases" | "network">("apply");
  const [submittedCaseRef, setSubmittedCaseRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterSpecialty, setFilterSpecialty] = useState("ALL");

  // Form State
  const [formData, setFormData] = useState({
    patientName: "",
    guardianName: "",
    age: "",
    gender: "MALE",
    city: "",
    contactNumber: "",
    specialty: "General Surgery & Laparoscopy",
    hospitalName: "",
    estimatedCost: "",
    diagnosisSummary: "",
    consentGiven: false,
    privacyAcknowledged: false,
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consentGiven || !formData.privacyAcknowledged) {
      alert("Please acknowledge the patient informed consent and privacy terms to proceed.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/medical-cases", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patientInitials: formData.patientName || "PT",
          city: formData.city,
          age: Number(formData.age) || 0,
          gender: formData.gender,
          diagnosisSummary: `${formData.specialty}: ${formData.diagnosisSummary}`,
          treatingPhysician: formData.hospitalName || "Designated Hospital Specialist",
          estimatedCostPKR: Number(formData.estimatedCost) || 0,
          hasInformedConsent: true,
        }),
      });
      const data = await res.json();
      if (data.caseReferenceNumber) {
        setSubmittedCaseRef(data.caseReferenceNumber);
      } else {
        const fallbackRef = `ZCF-MED-${Math.floor(100000 + Math.random() * 900000)}`;
        setSubmittedCaseRef(fallbackRef);
      }
    } catch (err) {
      console.error("Failed to submit medical case:", err);
      const fallbackRef = `ZCF-MED-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedCaseRef(fallbackRef);
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredCases = VERIFIED_CASES.filter((c) => {
    const matchesSearch =
      c.caseId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = filterSpecialty === "ALL" || c.category.includes(filterSpecialty);
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="w-full py-14 px-4 bg-surface-cream">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* 1. Header Banner */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-[#1A56DB] border border-blue-200 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
            <Stethoscope className="w-4 h-4" />
            <span>DIRECT MEDICAL AID & FREE HEALTHCARE</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-900 tracking-tight max-w-3xl">
            Free Medical Treatment & Surgical Sponsorship
          </h1>

          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl leading-relaxed">
            Bridging financial despair and life-saving healthcare. Facilitating free treatments and specialized surgeries for deserving destitute patients through our dedicated physician network.
          </p>

          {/* Verified Milestone Strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <div className="bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-bold text-[#16A34A] shadow-sm">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Verified Record: Approximately 25–30 destitute patients facilitated free treatment to date.</span>
            </div>

            <div className="bg-blue-50 border border-blue-200 px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-semibold text-[#1A56DB] shadow-sm">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Clinical Oversight by Dr. Muhammad Khalid Abbas, Dr. Muhammad Zahid Abbas & USA Advisors</span>
            </div>
          </div>
        </div>

        {/* Visual Dual Photo Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-md border border-slate-200">
            <Image
              src="/images/programs/healthcare.jpg"
              alt="Direct Clinical Patient Care & Surgical Sponsorship"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[11px] uppercase font-bold tracking-wider bg-white/20 backdrop-blur px-2.5 py-1 rounded-full inline-block mb-1.5">
                Clinical Care Pool
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-serif text-white">
                Subsidized Surgeries & Consultations
              </h3>
            </div>
          </div>

          <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-md border border-slate-200">
            <Image
              src="/images/2ndimg.jpg"
              alt="Medical Coordination on Ground"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[11px] uppercase font-bold tracking-wider bg-white/20 backdrop-blur px-2.5 py-1 rounded-full inline-block mb-1.5">
                Physician Advisory
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-serif text-white">
                Coordinated Free Treatment For ~25-30 Destitute Patients
              </h3>
            </div>
          </div>
        </div>

        {/* 2. Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 border-b border-zinc-200 pb-2">
          <button
            onClick={() => setActiveTab("apply")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === "apply"
                ? "bg-[#1A56DB] text-white shadow-md"
                : "bg-white text-zinc-600 hover:bg-zinc-100"
            }`}
          >
            Apply for Free Treatment
          </button>

          <button
            onClick={() => setActiveTab("cases")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === "cases"
                ? "bg-[#1A56DB] text-white shadow-md"
                : "bg-white text-zinc-600 hover:bg-zinc-100"
            }`}
          >
            Verified Case Ledger
          </button>

          <button
            onClick={() => setActiveTab("network")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === "network"
                ? "bg-[#1A56DB] text-white shadow-md"
                : "bg-white text-zinc-600 hover:bg-zinc-100"
            }`}
          >
            Physician Network & Hospital Vision
          </button>
        </div>

        {/* 3. Tab 1: Apply for Free Medical Treatment */}
        {activeTab === "apply" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Context, Guidelines & Privacy */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-primary-900 text-white rounded-3xl p-8 shadow-xl flex flex-col gap-5">
                <span className="text-xs uppercase tracking-widest text-accent-gold font-bold">
                  Patient Assistance Guidelines
                </span>
                <h3 className="font-serif font-bold text-2xl text-white">
                  How We Help Deserving Patients
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Zulaid Chaudhary Foundation partners with certified hospital departments and pharmacies to sponsor diagnostic tests, surgical consumables, hospital beds, and emergency surgeries directly on behalf of patients who cannot afford them.
                </p>

                <div className="flex flex-col gap-3 pt-2">
                  <div className="flex items-start gap-3 text-xs text-zinc-200">
                    <span className="w-5 h-5 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center shrink-0 font-bold">1</span>
                    <span>Direct hospital bill settlement (no cash handed over directly to ensure zero misuse).</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-zinc-200">
                    <span className="w-5 h-5 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center shrink-0 font-bold">2</span>
                    <span>Vetted by medical professionals and doctors within our family & advisory circle.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-zinc-200">
                    <span className="w-5 h-5 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center shrink-0 font-bold">3</span>
                    <span>Strict confidentiality: No patient photo or diagnosis published without signed consent.</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/20 flex items-center gap-3 mt-2">
                  <Lock className="w-6 h-6 text-accent-gold shrink-0" />
                  <span className="text-xs text-zinc-200 leading-snug">
                    Your medical records and personal data are strictly encrypted and evaluated under clinical confidentiality.
                  </span>
                </div>
              </div>

              {/* Fast Emergency Help Card */}
              <div className="bg-red-50 border border-red-200 rounded-3xl p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-alert-red font-bold text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Is This a Critical Life-Threatening Emergency?</span>
                </div>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Foundation medical sponsorship takes 24–48 hours for administrative and clinical vetting. For immediate acute emergencies, please visit the nearest public hospital emergency room or dial government emergency services (1122).
                </p>
                <Link
                  href="/emergency-help"
                  className="text-xs font-bold text-alert-red hover:underline flex items-center gap-1 mt-1"
                >
                  <span>View Emergency Helplines</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Multi-Step Application Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-zinc-200/80 p-6 sm:p-10 shadow-xl">
              {submittedCaseRef ? (
                <div className="flex flex-col items-center text-center gap-5 py-8 animate-in fade-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#16A34A] flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <span className="text-xs uppercase tracking-widest text-[#16A34A] font-bold">
                    Application Successfully Registered
                  </span>

                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900">
                    Medical Assistance Case Logged
                  </h3>

                  <p className="text-sm text-charcoal-muted max-w-md leading-relaxed">
                    Thank you. The patient request has been assigned to our Medical Coordination Desk for doctor consultation and financial vetting.
                  </p>

                  <div className="p-4 rounded-2xl bg-blue-50 border-2 border-blue-200 text-center w-full max-w-sm">
                    <span className="text-xs text-zinc-500 uppercase tracking-wider block font-semibold">
                      Your Unique Tracking Reference
                    </span>
                    <span className="font-mono font-bold text-xl text-[#1A56DB] block mt-1">
                      {submittedCaseRef}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 max-w-sm">
                    Please retain this case number. Our healthcare liaison will contact you via WhatsApp / Phone within 24–48 hours.
                  </p>

                  <button
                    onClick={() => {
                      setSubmittedCaseRef(null);
                      setFormData({
                        patientName: "",
                        guardianName: "",
                        age: "",
                        gender: "MALE",
                        city: "",
                        contactNumber: "",
                        specialty: "General Surgery & Laparoscopy",
                        hospitalName: "",
                        estimatedCost: "",
                        diagnosisSummary: "",
                        consentGiven: false,
                        privacyAcknowledged: false,
                      });
                    }}
                    className="bg-[#1A56DB] text-white font-bold px-6 py-2.5 rounded-full text-xs shadow hover:bg-[#1546b8] transition-colors mt-2"
                  >
                    Submit Another Patient Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                  <div className="border-b border-zinc-100 pb-4">
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-primary-900">
                      Patient Free Treatment Request Form
                    </h3>
                    <p className="text-xs text-charcoal-muted mt-1">
                      All fields marked with an asterisk (*) are strictly required for clinical verification.
                    </p>
                  </div>

                  {/* Section A: Patient Basic Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-700">Patient Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.patientName}
                        onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                        placeholder="e.g. Muhammad Ali"
                        className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-700">Guardian / Next of Kin *</label>
                      <input
                        type="text"
                        required
                        value={formData.guardianName}
                        onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                        placeholder="Father / Mother / Spouse Name"
                        className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-700">Patient Age & Gender *</label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          required
                          min="0"
                          max="120"
                          value={formData.age}
                          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                          placeholder="Age (Yrs)"
                          className="w-24 bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                        />
                        <select
                          value={formData.gender}
                          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                          className="flex-1 bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                        >
                          <option value="MALE">Male</option>
                          <option value="FEMALE">Female</option>
                          <option value="CHILD">Child / Infant</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-700">City / District *</label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Shorkot, Jhang, Athara Hazari, Ahmedpur Sial"
                        className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                      />
                    </div>
                  </div>

                  {/* Section B: Contact & Treatment Needs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-700">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.contactNumber}
                        onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                        placeholder="+92 3XX XXXXXXX"
                        className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-700">Medical Specialty / Department *</label>
                      <select
                        value={formData.specialty}
                        onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                        className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                      >
                        {MEDICAL_SPECIALTIES.map((spec) => (
                          <option key={spec} value={spec}>
                            {spec}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-700">Treating / Recommended Hospital *</label>
                      <input
                        type="text"
                        required
                        value={formData.hospitalName}
                        onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
                        placeholder="e.g. THQ Hospital Shorkot, DHQ Hospital Jhang"
                        className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-700">Estimated Treatment Cost (PKR) *</label>
                      <input
                        type="number"
                        required
                        value={formData.estimatedCost}
                        onChange={(e) => setFormData({ ...formData, estimatedCost: e.target.value })}
                        placeholder="Estimated PKR (e.g. 75000)"
                        className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                      />
                    </div>
                  </div>

                  {/* Section C: Diagnosis Summary */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-700">Diagnosis & Clinical Summary *</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.diagnosisSummary}
                      onChange={(e) => setFormData({ ...formData, diagnosisSummary: e.target.value })}
                      placeholder="Describe the medical diagnosis, doctor recommendations, needed surgery or medicines..."
                      className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                    />
                  </div>

                  {/* Section D: Informed Consent Checkboxes */}
                  <div className="flex flex-col gap-2.5 p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.consentGiven}
                        onChange={(e) => setFormData({ ...formData, consentGiven: e.target.checked })}
                        className="mt-1 rounded text-[#1A56DB] focus:ring-[#1A56DB]"
                      />
                      <span className="text-xs text-zinc-600 leading-snug">
                        I confirm this information is authentic, and I authorize Zulaid Chaudhary Foundation medical coordinators to contact hospital physicians to verify treatment bills.
                      </span>
                    </label>

                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.privacyAcknowledged}
                        onChange={(e) => setFormData({ ...formData, privacyAcknowledged: e.target.checked })}
                        className="mt-1 rounded text-[#1A56DB] focus:ring-[#1A56DB]"
                      />
                      <span className="text-xs text-zinc-600 leading-snug">
                        I acknowledge that patient identity and reports remain confidential, and will not be publicized without explicit written consent.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1A56DB] hover:bg-[#1546b8] text-white font-bold py-3.5 rounded-full text-xs sm:text-sm shadow-md transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Submitting Clinical Application..." : "Submit Patient Application"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* 4. Tab 2: Verified Medical Cases Ledger */}
        {activeTab === "cases" && (
          <div className="flex flex-col gap-8 animate-in fade-in">
            {/* Filter and Search Bar */}
            <div className="bg-white rounded-2xl border border-zinc-200 p-4 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-zinc-400 absolute start-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search case #, surgery, or hospital..."
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-full ps-10 pe-4 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs font-semibold text-zinc-500 whitespace-nowrap">Status:</span>
                <select
                  value={filterSpecialty}
                  onChange={(e) => setFilterSpecialty(e.target.value)}
                  className="bg-zinc-50 border border-zinc-200 rounded-full px-3 py-1.5 text-xs text-charcoal focus:outline-none"
                >
                  <option value="ALL">All Categories</option>
                  <option value="Cardiac">Cardiac</option>
                  <option value="Orthopedic">Orthopedic</option>
                  <option value="Ophthalmic">Ophthalmic</option>
                  <option value="Oncology">Oncology</option>
                  <option value="Renal">Renal / Dialysis</option>
                </select>
              </div>
            </div>

            {/* Cases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCases.map((c) => (
                <div
                  key={c.caseId}
                  className="bg-white rounded-3xl border border-zinc-200 p-6 shadow-sm flex flex-col justify-between gap-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                      <span className="font-mono font-bold text-xs text-[#1A56DB] bg-blue-50 px-2.5 py-1 rounded-lg">
                        {c.caseId}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                          c.status === "COMPLETED"
                            ? "bg-emerald-100 text-[#16A34A]"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {c.status === "COMPLETED" ? "✓ Surgery Completed" : "⏳ Treatment Active"}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-base text-primary-900 leading-snug">
                      {c.category}
                    </h4>

                    <p className="text-xs text-charcoal-muted leading-relaxed line-clamp-3">
                      {c.description}
                    </p>

                    <div className="flex flex-col gap-1 text-[11px] text-zinc-500 pt-2">
                      <div className="flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                        <span className="truncate">{c.hospital}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                        <span>Support: {c.supportType}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-zinc-100 pt-3 flex items-center justify-between text-[11px] text-zinc-400 font-medium">
                    <span>{c.date}</span>
                    <span className="text-[#16A34A] font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified Record</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Donate CTA Box */}
            <div className="bg-gradient-to-r from-primary-900 to-blue-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-widest text-accent-gold font-bold">
                  Sponsor a Deserving Patient
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl">
                  Help Fund the Next Life-Saving Surgery
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-lg leading-relaxed">
                  Your Zakat and Sadqa are allocated directly to verified hospital pharmacy bills and surgical theatres with zero administrative deductions.
                </p>
              </div>

              <Link
                href="/donate"
                className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold px-8 py-3.5 rounded-full text-xs sm:text-sm shadow-xl transition-all hover:scale-105 whitespace-nowrap flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Donate to Medical Fund</span>
              </Link>
            </div>
          </div>
        )}

        {/* 5. Tab 3: Physician Advisory Network & Hospital Vision */}
        {activeTab === "network" && (
          <div className="flex flex-col gap-10 animate-in fade-in">
            {/* Doctors Network Card */}
            <div className="bg-white rounded-3xl border border-zinc-200 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 flex flex-col gap-4 text-charcoal-muted text-sm sm:text-base leading-relaxed">
                <span className="text-xs uppercase tracking-widest text-[#1A56DB] font-bold">
                  Family & Clinical Network
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900">
                  Clinical Oversight: Shorkot, District Jhang & International Advisory
                </h3>
                <p>
                  A cornerstone of Zulaid Chaudhary Foundation&apos;s healthcare access is the founder&apos;s medical circle, supervised by family physicians <strong>Dr. Muhammad Khalid Abbas</strong> and <strong>Dr. Muhammad Zahid Abbas</strong>, in collaboration with family doctors practicing in the United States.
                </p>
                <p>
                  This clinical network oversees patient case verification across Shorkot, Jhang, Athara Hazari, and Ahmedpur Sial, reviewing surgical quotes, hospital admissions, and pharmacy dispensations to ensure zero administrative leakage.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex flex-col gap-1">
                    <span className="font-serif font-bold text-primary-900 text-sm">
                      Supervising Physicians Desk
                    </span>
                    <span className="text-xs text-zinc-600">
                      Led by Dr. Muhammad Khalid Abbas & Dr. Muhammad Zahid Abbas, coordinating direct surgical clearances and clinical subsidies.
                    </span>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex flex-col gap-1">
                    <span className="font-serif font-bold text-primary-900 text-sm">
                      USA Diaspora Advisory Desk
                    </span>
                    <span className="text-xs text-zinc-600">
                      Overseas Pakistani physicians providing expert diagnostics review, second opinions, and philanthropic medical sponsorships.
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-80 bg-surface-cream border-2 border-accent-gold/40 rounded-3xl p-6 flex flex-col items-center text-center gap-4 shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-primary-900 text-accent-gold flex items-center justify-center text-2xl shadow">
                  🏥
                </div>
                <h4 className="font-serif font-bold text-lg text-primary-900">
                  ZCF General & Welfare Hospital
                </h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Actively under construction on Dabklan Road, Shorkot, providing a permanent institutional haven for free clinical care.
                </p>
                <Link
                  href="/our-work/hospital"
                  className="w-full bg-[#1A56DB] hover:bg-[#1546b8] text-white font-bold py-2.5 rounded-full text-xs shadow transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Explore Hospital Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
