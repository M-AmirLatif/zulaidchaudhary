import { useTranslations } from "next-intl";
import { ShieldCheck, Building2, CheckCircle } from "lucide-react";

export function TrustStrip() {
  const t = useTranslations("home.trustStrip");

  return (
    <div className="w-full bg-primary-900 text-surface-cream py-6 border-y border-primary-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Signal 1: Legal Status */}
        <div className="flex items-center gap-3.5 bg-primary-800/40 p-3.5 rounded-xl border border-primary-700/50">
          <div className="w-10 h-10 rounded-lg bg-accent-gold/15 text-accent-gold flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-accent-gold font-semibold uppercase tracking-wider">
              {t("statusTitle")}
            </span>
            <span className="text-sm font-medium text-surface-cream">
              {t("statusDesc")}
            </span>
          </div>
        </div>

        {/* Signal 2: Hospital Project */}
        <div className="flex items-center gap-3.5 bg-primary-800/40 p-3.5 rounded-xl border border-primary-700/50">
          <div className="w-10 h-10 rounded-lg bg-accent-gold/15 text-accent-gold flex items-center justify-center shrink-0">
            <Building2 className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-accent-gold font-semibold uppercase tracking-wider">
              {t("hospitalTitle")}
            </span>
            <span className="text-sm font-medium text-surface-cream">
              {t("hospitalDesc")}
            </span>
          </div>
        </div>

        {/* Signal 3: Patient Care Milestone */}
        <div className="flex items-center gap-3.5 bg-primary-800/40 p-3.5 rounded-xl border border-primary-700/50">
          <div className="w-10 h-10 rounded-lg bg-accent-gold/15 text-accent-gold flex items-center justify-center shrink-0">
            <CheckCircle className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-accent-gold font-semibold uppercase tracking-wider">
              {t("patientTitle")}
            </span>
            <span className="text-sm font-medium text-surface-cream">
              {t("patientDesc")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
