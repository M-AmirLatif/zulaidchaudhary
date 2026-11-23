"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import {
  GraduationCap,
  BookOpen,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Send,
  School,
  Backpack,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const EDUCATION_PROGRAMS = [
  {
    icon: "🎓",
    title: "Direct School & College Fee Sponsorship",
    badge: "Anti-Drop-Out",
    desc: "Paying tuition fees directly to accredited public and private schools on behalf of bright, impoverished students facing forced dropouts due to inflation.",
  },
  {
    icon: "🎒",
    title: "Student Academic Kits & Backpacks",
    badge: "Learning Essentials",
    desc: "Equipping children with complete textbook sets, exercise notebooks, geometry boxes, school bags, and durable shoes so they attend school with dignity.",
  },
  {
    icon: "❄️",
    title: "Winter School Uniforms & Sweaters",
    badge: "Health & Dignity",
    desc: "Providing warm sweaters, socks, and seasonal uniforms to prevent children from skipping classes during cold winter months.",
  },
  {
    icon: "📖",
    title: "Orphan Education Welfare Stipends",
    badge: "Vulnerable Youth",
    desc: "Dedicated monthly academic stipends supporting single-mother and guardian households to prioritize continued education over child labor.",
  },
];

export default function EducationPage() {
  const [activeTab, setActiveTab] = useState<"programs" | "apply">("programs");
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    studentName: "",
    guardianName: "",
    gradeOrClass: "Class 6",
    schoolName: "",
    city: "",
    contactNumber: "",
    annualFees: "",
    academicPerformance: "Above 75% marks",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const ref = `ZCF-EDU-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(ref);
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <div className="w-full py-14 px-4 bg-surface-cream">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* 1. Header Banner */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-[#1A56DB] border border-blue-200 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
            <GraduationCap className="w-4 h-4" />
            <span>EDUCATION & SCHOLARSHIP SUPPORT</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-900 tracking-tight max-w-3xl">
            Empowering Deserving Minds Through Education
          </h1>

          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl leading-relaxed">
            Eliminating financial barriers so bright children from disadvantaged families can remain in school, complete their education, and break the cycle of generational poverty.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <div className="bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-bold text-[#16A34A] shadow-sm">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Fees Disbursed Directly to Verified Educational Institutions</span>
            </div>

            <div className="bg-blue-50 border border-blue-200 px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-semibold text-[#1A56DB] shadow-sm">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Zero Child Labor Commitment</span>
            </div>
          </div>
        </div>

        {/* 2. Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 border-b border-zinc-200 pb-2">
          <button
            onClick={() => setActiveTab("programs")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === "programs"
                ? "bg-[#1A56DB] text-white shadow-md"
                : "bg-white text-zinc-600 hover:bg-zinc-100"
            }`}
          >
            Education Initiatives
          </button>

          <button
            onClick={() => setActiveTab("apply")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === "apply"
                ? "bg-[#1A56DB] text-white shadow-md"
                : "bg-white text-zinc-600 hover:bg-zinc-100"
            }`}
          >
            Apply for Fee Sponsorship
          </button>
        </div>

        {/* 3. Tab 1: Education Initiatives */}
        {activeTab === "programs" && (
          <div className="flex flex-col gap-10 animate-in fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {EDUCATION_PROGRAMS.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-3xl border border-zinc-200/80 p-8 shadow-sm flex flex-col justify-between gap-6 hover:shadow-md transition-shadow group"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-blue-50 text-[#1A56DB]">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-xl text-primary-900 mt-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="border-t border-zinc-100 pt-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-400">Institutional Grants</span>
                    <Link
                      href="/donate"
                      className="text-xs font-bold text-[#1A56DB] hover:underline flex items-center gap-1"
                    >
                      <span>Sponsor a Student</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Donation Banner */}
            <div className="bg-gradient-to-r from-primary-900 to-blue-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-widest text-accent-gold font-bold">
                  Sponsor an Orphan Student
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl">
                  Cover a Child&apos;s School Year and Transform Their Future
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-lg leading-relaxed">
                  Every rupee of education sponsorship directly pays verified school invoices, protecting bright students from being pulled out into child labor.
                </p>
              </div>

              <Link
                href="/donate"
                className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold px-8 py-3.5 rounded-full text-xs sm:text-sm shadow-xl transition-all hover:scale-105 whitespace-nowrap flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Sponsor Student Fees</span>
              </Link>
            </div>
          </div>
        )}

        {/* 4. Tab 2: Apply for Fee Sponsorship */}
        {activeTab === "apply" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in">
            <div className="lg:col-span-5 bg-primary-900 text-white rounded-3xl p-8 shadow-xl flex flex-col gap-5">
              <span className="text-xs uppercase tracking-widest text-accent-gold font-bold">
                Scholarship Criteria
              </span>
              <h3 className="font-serif font-bold text-2xl text-white">
                Who Is Eligible for Fee Grants?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Zulaid Chaudhary Foundation sponsors students whose families cannot afford monthly tuition fees due to low income, illness of the primary earner, or orphan status.
              </p>

              <div className="flex flex-col gap-3 pt-2">
                <div className="flex items-start gap-3 text-xs text-zinc-200">
                  <span className="w-5 h-5 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center shrink-0 font-bold">1</span>
                  <span>Enrolled in recognized public or private school/college.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-zinc-200">
                  <span className="w-5 h-5 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center shrink-0 font-bold">2</span>
                  <span>Satisfactory academic attendance and minimum passing grades.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-zinc-200">
                  <span className="w-5 h-5 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center shrink-0 font-bold">3</span>
                  <span>Payment transferred straight to school administration.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-3xl border border-zinc-200 p-6 sm:p-10 shadow-xl">
              {submittedRef ? (
                <div className="flex flex-col items-center text-center gap-5 py-8 animate-in fade-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#16A34A] flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h3 className="font-serif font-bold text-2xl text-primary-900">
                    Scholarship Application Logged
                  </h3>

                  <p className="text-sm text-charcoal-muted max-w-md leading-relaxed">
                    Thank you. The student scholarship application has been submitted to our Education Welfare Desk for fee verification with the school.
                  </p>

                  <div className="p-4 rounded-2xl bg-blue-50 border-2 border-blue-200 text-center w-full max-w-sm">
                    <span className="text-xs text-zinc-500 uppercase tracking-wider block font-semibold">
                      Your Application Reference
                    </span>
                    <span className="font-mono font-bold text-xl text-[#1A56DB] block mt-1">
                      {submittedRef}
                    </span>
                  </div>

                  <button
                    onClick={() => setSubmittedRef(null)}
                    className="bg-[#1A56DB] text-white font-bold px-6 py-2.5 rounded-full text-xs shadow hover:bg-[#1546b8] transition-colors mt-2"
                  >
                    Submit Another Student
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="border-b border-zinc-100 pb-3">
                    <h3 className="font-serif font-bold text-xl text-primary-900">
                      Student Scholarship Registration
                    </h3>
                    <p className="text-xs text-charcoal-muted mt-1">
                      Provide current school and fee details for institutional verification.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-700">Student Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        placeholder="Student Name"
                        className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-700">Father / Guardian Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.guardianName}
                        onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                        placeholder="Parent / Guardian"
                        className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-700">Class / Grade *</label>
                      <input
                        type="text"
                        required
                        value={formData.gradeOrClass}
                        onChange={(e) => setFormData({ ...formData, gradeOrClass: e.target.value })}
                        placeholder="e.g. Class 8 or Matric Part 1"
                        className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-700">School / College Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.schoolName}
                        onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                        placeholder="School Name & Branch"
                        className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-700">City / District *</label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Lahore, Sheikhupura"
                        className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                      />
                    </div>

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
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-700">Monthly / Annual Fees Needed (PKR) *</label>
                    <input
                      type="number"
                      required
                      value={formData.annualFees}
                      onChange={(e) => setFormData({ ...formData, annualFees: e.target.value })}
                      placeholder="e.g. 25000"
                      className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-700">Academic Standing / Recent Results</label>
                    <input
                      type="text"
                      value={formData.academicPerformance}
                      onChange={(e) => setFormData({ ...formData, academicPerformance: e.target.value })}
                      placeholder="e.g. 82% in previous annual exams"
                      className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1A56DB] hover:bg-[#1546b8] text-white font-bold py-3.5 rounded-full text-xs sm:text-sm shadow-md transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Submitting Scholarship Application..." : "Submit Scholarship Application"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
