"use client";

import { Link } from "@/i18n/routing";
import {
  ShieldCheck,
  Scale,
  FileCheck,
  Lock,
  Eye,
  AlertTriangle,
  Building2,
  CheckCircle2,
  ArrowRight,
  Receipt,
  FileText,
} from "lucide-react";

const ETHICAL_PILLARS = [
  {
    icon: "⚖️",
    title: "Zero Claims of Premature Registration",
    desc: "We strictly state that legal registration is currently in progress with regulatory authorities. Official filings and compliance documents will be displayed publicly upon final government issuance.",
  },
  {
    icon: "🔍",
    title: "100% Verified Administrative Metrics",
    desc: "Every milestone, patient count, and expenditure counter displayed on our website is backed by verified clinical records. We strictly prohibit invented numbers or unverified donation claims.",
  },
  {
    icon: "🏥",
    title: "Direct Third-Party Institutional Payments",
    desc: "Donations for medical surgeries, patient pharmacy prescriptions, and school tuition are remitted directly to hospital and institutional accounts—never handed to intermediaries in cash.",
  },
  {
    icon: "🔒",
    title: "Patient & Beneficiary Anonymity",
    desc: "No patient photo, diagnosis, or distress story is published publicly without signed informed consent. Beneficiary dignity is sacred and non-negotiable.",
  },
  {
    icon: "📜",
    title: "Immutable Digital Audit Trails",
    desc: "All administrative actions, volunteer approvals, and project budget updates are logged on an immutable audit ledger with timestamps and admin user IDs.",
  },
  {
    icon: "🛡️",
    title: "Whistleblower & Misconduct Protection",
    desc: "We provide an anonymous, confidential reporting channel for any member of the public to flag irregularities or unethical conduct with a trackable case number.",
  },
];

export default function TransparencyPage() {
  return (
    <div className="w-full py-14 px-4 bg-surface-cream">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* 1. Header Banner */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-[#166534] border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
            <ShieldCheck className="w-4 h-4" />
            <span>TRANSPARENCY, ETHICS & PUBLIC ACCOUNTABILITY</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-900 tracking-tight max-w-3xl">
            Accountability Before God & Humanity
          </h1>

          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl leading-relaxed">
            Humanitarian aid is a sacred trust. Discover the ethical guidelines, legal disclosure policies, and clinical governance protocols governing the Zulaid Chaudhary Foundation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <div className="bg-amber-50 border border-amber-200 px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-bold text-amber-900 shadow-sm">
              <Scale className="w-4 h-4 shrink-0" />
              <span>Legal Disclosure: Registration In Progress with Regulatory Authorities</span>
            </div>

            <div className="bg-blue-50 border border-blue-200 px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-semibold text-[#1A56DB] shadow-sm">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Verified Milestone: Approximately 25–30 Treated Patients</span>
            </div>
          </div>
        </div>

        {/* 2. Legal Status Detailed Disclosure Card */}
        <div className="bg-white rounded-3xl border-2 border-accent-gold/40 p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-4 flex-1 text-charcoal-muted text-sm sm:text-base leading-relaxed">
            <span className="text-xs uppercase tracking-widest text-accent-gold font-bold">
              Mandatory Legal Disclosure
            </span>
            <h2 className="font-serif font-bold text-2xl text-primary-900">
              Regulatory Status & Compliance Covenant
            </h2>
            <p>
              In strict adherence to the law and our foundational ethics, Zulaid Chaudhary Foundation does not claim to be a registered charity until official government notifications are formally completed. The foundation is currently fulfilling all SECP (Securities and Exchange Commission of Pakistan) requirements and corporate filings.
            </p>
            <p className="text-xs text-zinc-500">
              Until official registration certificates are uploaded to this portal, all charitable expenditures are coordinated directly through verified personal and family physician contributions, direct pharmacy bills, and lawful mutual assistance.
            </p>
          </div>

          <div className="w-full md:w-80 bg-surface-cream border border-zinc-200 rounded-2xl p-6 flex flex-col gap-3 text-xs text-charcoal">
            <span className="font-serif font-bold text-sm text-primary-900 border-b border-zinc-200 pb-2">
              Compliance Factsheet
            </span>
            <div className="flex justify-between py-1 border-b border-zinc-100">
              <span className="text-zinc-500">Proposed Domain:</span>
              <span className="font-bold text-primary-900">ZCF.com</span>
            </div>
            <div className="flex justify-between py-1 border-b border-zinc-100">
              <span className="text-zinc-500">Legal Status:</span>
              <span className="font-bold text-amber-700">In Progress</span>
            </div>
            <div className="flex justify-between py-1 border-b border-zinc-100">
              <span className="text-zinc-500">Auditing Policy:</span>
              <span className="font-bold text-[#16A34A]">Immutable Log</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-zinc-500">Card Data:</span>
              <span className="font-bold text-zinc-700">Never Stored</span>
            </div>
          </div>
        </div>

        {/* 3. Ethical Standards Grid */}
        <div className="flex flex-col gap-6">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900">
              Our 6 Pillars of Institutional Integrity
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-muted mt-2">
              Non-negotiable ethical guidelines that safeguard every donor and beneficiary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ETHICAL_PILLARS.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl border border-zinc-200/80 p-6 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-2xl bg-blue-50 text-2xl flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="font-serif font-bold text-lg text-primary-900">
                  {item.title}
                </h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Whistleblower & Complaints Card */}
        <div className="bg-primary-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-accent-gold" />
              <span className="text-xs uppercase tracking-widest text-accent-gold font-bold">
                Public Oversight & Whistleblower Desk
              </span>
            </div>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl">
              Report Misconduct or Financial Irregularities
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-lg leading-relaxed">
              If you observe any discrepancy, unauthorized representation, or ethical violation by anyone claiming association with the foundation, report it anonymously with trackable case confirmation.
            </p>
          </div>

          <Link
            href="/contact"
            className="bg-accent-gold hover:bg-accent-gold-light text-primary-900 font-bold px-7 py-3 rounded-full text-xs sm:text-sm shadow-xl transition-all hover:scale-105 whitespace-nowrap flex items-center gap-2"
          >
            <span>File Confidential Report</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
