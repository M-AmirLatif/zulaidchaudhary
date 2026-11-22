"use client";

import { useState } from "react";
import { 
  Award, 
  ShieldCheck, 
  Calendar, 
  QrCode, 
  CheckCircle2, 
  Printer, 
  Download,
  Sparkles
} from "lucide-react";

export default function MembershipDashboardPage() {
  const [member] = useState({
    name: "Ahmad Raza",
    membershipNumber: "ZCF-MEM-2026-0001",
    tier: "Founding Member",
    status: "APPROVED",
    chapter: "Lahore Central",
    issued: "11 Nov 2026",
    validThru: "11 Nov 2027",
  });

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 self-start bg-amber-50 text-accent-gold-dark px-3 py-1 rounded-full text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Official Credential</span>
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900">
            Digital Foundation Membership Card
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
            Your official accredited membership card for the Zulaid Chaudhary Foundation.
          </p>
        </div>

        <button
          onClick={() => window.print()}
          className="self-start sm:self-auto bg-surface-card hover:bg-zinc-100 text-charcoal border border-zinc-300 font-semibold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-colors flex items-center gap-2"
        >
          <Printer className="w-4 h-4 text-accent-gold-dark" />
          <span>Print / Save PDF</span>
        </button>
      </div>

      {/* Sovereign Membership Card Display */}
      <div className="flex justify-center py-4">
        <div className="w-full max-w-lg bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-surface-cream rounded-3xl border-2 border-accent-gold/60 p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between gap-8 min-h-[300px]">
          {/* Subtle Decorative Holographic Ring */}
          <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-accent-gold/10 blur-2xl pointer-events-none" />
          <div className="absolute -left-12 -top-12 w-48 h-48 rounded-full bg-accent-gold/10 blur-2xl pointer-events-none" />

          {/* Card Top: Monogram & Tier Badge */}
          <div className="flex items-start justify-between relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-accent-gold text-primary-900 flex items-center justify-center font-serif font-bold text-xl shadow-md border border-amber-300">
                ZCF
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-base tracking-wide text-surface-cream">
                  Zulaid Chaudhary Foundation
                </span>
                <span className="text-[11px] text-accent-gold tracking-widest uppercase font-medium">
                  Official Member Credential
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 bg-accent-gold/20 text-accent-gold border border-accent-gold/40 px-3 py-1 rounded-full text-[11px] font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{member.tier}</span>
            </div>
          </div>

          {/* Card Center: Member Name & ID */}
          <div className="flex flex-col gap-1 relative z-10 pt-2">
            <span className="text-xs text-zinc-300 uppercase tracking-wider font-medium">
              Accredited Member
            </span>
            <span className="font-serif font-bold text-2xl text-surface-cream tracking-tight">
              {member.name}
            </span>
            <span className="font-mono text-xs sm:text-sm text-accent-gold font-bold tracking-widest mt-1">
              ID: {member.membershipNumber}
            </span>
          </div>

          {/* Card Bottom: Chapter, Dates, QR & Verified Seal */}
          <div className="flex items-end justify-between border-t border-primary-700/80 pt-4 relative z-10 text-[11px]">
            <div className="flex flex-col gap-0.5 text-zinc-300">
              <span>Chapter: <strong className="text-surface-cream">{member.chapter}</strong></span>
              <span>Issued: <strong className="text-surface-cream">{member.issued}</strong></span>
              <span>Valid Thru: <strong className="text-surface-cream">{member.validThru}</strong></span>
            </div>

            <div className="flex items-center gap-2 bg-primary-800/80 border border-primary-700 px-3 py-1.5 rounded-xl text-status-green">
              <CheckCircle2 className="w-4 h-4" />
              <span className="font-bold text-xs uppercase tracking-wider">Status: {member.status}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Member Rights & Charter Accordion */}
      <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col gap-4">
        <h2 className="font-serif font-bold text-xl text-primary-900">
          Membership Charter & Governance Rights
        </h2>
        <ul className="text-xs sm:text-sm text-charcoal-muted leading-relaxed flex flex-col gap-2.5 list-disc list-inside">
          <li>Participation in regional volunteer drives and humanitarian program consultation.</li>
          <li>Receipt of quarterly independently audited financial summaries and healthcare case updates.</li>
          <li>Direct access to community coordination forums and volunteer leadership committees.</li>
          <li>Accreditation in our international diaspora directory with verified standing.</li>
        </ul>
      </div>
    </div>
  );
}
