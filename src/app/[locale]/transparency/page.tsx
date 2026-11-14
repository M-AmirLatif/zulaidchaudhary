import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ShieldCheck, Scale, FileCheck, AlertTriangle, ArrowRight } from "lucide-react";

export default function TransparencyPage() {
  const t = useTranslations("transparency");
  const tCommon = useTranslations("common");

  return (
    <div className="w-full py-16 px-4 bg-surface-cream">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-900 border border-primary-600/20 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Public Accountability</span>
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-900 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Legal Status Notice */}
        <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 sm:p-10 shadow-sm flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-accent-gold-dark flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-xl text-primary-900">
                {t("legalBadge")}
              </h2>
              <span className="text-xs text-zinc-500">
                Regulatory Transparency Covenant
              </span>
            </div>
          </div>
          <p className="text-sm text-charcoal-muted leading-relaxed">
            {t("legalDesc")}
          </p>
        </div>

        {/* Ethical Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-green-50 text-status-green flex items-center justify-center">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-xl text-primary-900">
              {t("ethicsTitle")}
            </h3>
            <p className="text-sm text-charcoal-muted leading-relaxed">
              {t("ethicsDesc")}
            </p>
          </div>

          <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-900 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-xl text-primary-900">
              {t("auditTitle")}
            </h3>
            <p className="text-sm text-charcoal-muted leading-relaxed">
              {t("auditDesc")}
            </p>
          </div>
        </div>

        {/* Whistleblower Link */}
        <div className="bg-primary-900 text-surface-cream rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 max-w-xl">
            <h3 className="font-serif font-bold text-xl text-accent-gold">
              Report an Ethical Concern or Misconduct
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300">
              Our confidential whistleblower channel guarantees complete protection and independent investigation of all reported grievances.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-light text-primary-900 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm whitespace-nowrap shadow transition-colors"
          >
            <span>Submit Confidential Report</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}
