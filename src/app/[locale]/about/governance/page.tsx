import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ShieldCheck, Scale, FileText, CheckCircle2, ArrowRight } from "lucide-react";

export default function GovernancePage() {
  const tCommon = useTranslations("common");

  return (
    <div className="w-full py-16 px-4 bg-surface-cream">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-900 border border-primary-600/20 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Scale className="w-3.5 h-3.5" />
            <span>Integrity & Stewardship</span>
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-900 tracking-tight">
            Governance, Ethics & Legal Framework
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl leading-relaxed">
            The foundation operates under strict institutional oversight, ensuring clinical independence, financial transparency, and ethical accountability.
          </p>
        </div>

        {/* Legal Status Card */}
        <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-accent-gold-dark flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-xl text-primary-900">
                Regulatory Status Disclosure
              </h2>
              <span className="text-xs text-status-green font-semibold">
                Status: {tCommon("legalStatus")}
              </span>
            </div>
          </div>
          <p className="text-sm text-charcoal-muted leading-relaxed">
            The Zulaid Chaudhary Foundation has initiated formal non-profit registration dossiers with regulatory authorities in Pakistan. Until official registration certification numbers are formally issued and verified, all public interfaces prominently display &ldquo;Registration in progress&rdquo; to maintain complete transparency with our supporters and donors.
          </p>
        </div>

        {/* Governance Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col gap-4">
            <h3 className="font-serif font-bold text-xl text-primary-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-status-green" />
              <span>Medical & Clinical Stewardship</span>
            </h3>
            <p className="text-sm text-charcoal-muted leading-relaxed">
              All healthcare interventions, patient sponsorships, and hospital clinical designs are reviewed in consultation with qualified physicians. Clinical decisions remain strictly separate from fundraising concerns.
            </p>
          </div>

          <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col gap-4">
            <h3 className="font-serif font-bold text-xl text-primary-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-status-green" />
              <span>Confirmed Appointments Policy</span>
            </h3>
            <p className="text-sm text-charcoal-muted leading-relaxed">
              In accordance with our ethical operating constitution, team members, advisory physicians, and board directors are publicly displayed only after formal, documented written confirmation has been completed.
            </p>
          </div>

          <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col gap-4">
            <h3 className="font-serif font-bold text-xl text-primary-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-status-green" />
              <span>Patient Privacy & Consent Vault</span>
            </h3>
            <p className="text-sm text-charcoal-muted leading-relaxed">
              Patient dignity is sacrosanct. Medical records and treatment histories are treated with strict confidentiality. No beneficiary details or photos are ever published without documented informed consent.
            </p>
          </div>

          <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col gap-4">
            <h3 className="font-serif font-bold text-xl text-primary-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-status-green" />
              <span>Zero-Unverified-Claim Principle</span>
            </h3>
            <p className="text-sm text-charcoal-muted leading-relaxed">
              We prohibit the invention of donation totals, patient statistics, or awards. Every number published on this platform is backed by verifiable administrative and banking records.
            </p>
          </div>
        </div>

        {/* Navigation CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-zinc-200">
          <Link
            href="/transparency"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary-900 hover:text-accent-gold-dark transition-colors"
          >
            <span>View Full Transparency Portal</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal-muted hover:text-primary-900 transition-colors"
          >
            <span>File a Whistleblower / Misconduct Report</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
