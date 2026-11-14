import { useTranslations } from "next-intl";
import { CheckCircle2, AlertCircle, Clock } from "lucide-react";

export function ImpactCounters() {
  const t = useTranslations("home.impact");

  return (
    <section className="py-16 px-4 bg-surface-card border-b border-zinc-200">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center gap-3 mb-12">
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900 tracking-tight">
          {t("title")}
        </h2>
        <p className="text-sm sm:text-base text-charcoal-muted max-w-2xl">
          {t("subtitle")}
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Metric 1: Verified Free Treatments */}
        <div className="bg-surface-cream border border-zinc-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
          <div className="inline-flex items-center gap-1.5 text-status-green bg-green-50 px-2.5 py-1 rounded-full text-xs font-semibold mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{t("stat1Badge")}</span>
          </div>
          <span className="font-serif font-bold text-3xl sm:text-4xl text-primary-900 mb-2">
            {t("stat1Value")}
          </span>
          <span className="text-sm text-charcoal font-medium">
            {t("stat1Label")}
          </span>
        </div>

        {/* Metric 2: Hospital Project */}
        <div className="bg-surface-cream border border-zinc-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
          <div className="inline-flex items-center gap-1.5 text-accent-gold-dark bg-amber-50 px-2.5 py-1 rounded-full text-xs font-semibold mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>{t("stat2Badge")}</span>
          </div>
          <span className="font-serif font-bold text-2xl sm:text-3xl text-primary-900 mb-2">
            {t("stat2Value")}
          </span>
          <span className="text-sm text-charcoal font-medium">
            {t("stat2Label")}
          </span>
        </div>

        {/* Metric 3: Neutral Placeholder for Unverified Data */}
        <div className="bg-surface-cream/60 border border-dashed border-zinc-300 rounded-2xl p-6 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-full text-xs font-medium mb-3">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{t("stat3Badge")}</span>
          </div>
          <span className="font-serif font-medium text-xl sm:text-2xl text-zinc-500 mb-2">
            {t("stat3Value")}
          </span>
          <span className="text-xs text-zinc-500 leading-relaxed">
            {t("stat3Label")}
          </span>
        </div>

        {/* Metric 4: Clinical Review Queue */}
        <div className="bg-surface-cream border border-zinc-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
          <div className="inline-flex items-center gap-1.5 text-primary-800 bg-primary-100 px-2.5 py-1 rounded-full text-xs font-semibold mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{t("stat4Badge")}</span>
          </div>
          <span className="font-serif font-bold text-2xl sm:text-3xl text-primary-900 mb-2">
            {t("stat4Value")}
          </span>
          <span className="text-sm text-charcoal font-medium">
            {t("stat4Label")}
          </span>
        </div>
      </div>
    </section>
  );
}
