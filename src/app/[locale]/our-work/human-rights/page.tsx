import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Scale, FileText, Globe, Shield, ArrowRight } from "lucide-react";

export default function HumanRightsPage() {
  const t = useTranslations("humanRights");
  const tCommon = useTranslations("common");

  return (
    <div className="w-full py-16 px-4 bg-surface-cream">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-900 border border-primary-600/20 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Scale className="w-3.5 h-3.5" />
            <span>Advocacy & Justice</span>
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-900 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Foundations of Advocacy */}
        <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 sm:p-10 shadow-sm flex flex-col gap-4 leading-relaxed text-charcoal-muted text-sm sm:text-base">
          <h2 className="font-serif font-bold text-2xl text-primary-900">
            Principled, Lawful & Evidence-Based Advocacy
          </h2>
          <p>{t("overview")}</p>
        </div>

        {/* Action Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Module 1: Palestine Solidarity */}
          <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-alert-red flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-primary-900">
                {t("palestineTitle")}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                {t("palestineDesc")}
              </p>
            </div>
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-xs font-bold text-primary-900 hover:text-accent-gold-dark transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Read Legal Briefings & Articles</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>

          {/* Module 2: Defending Vulnerable Communities */}
          <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-900 flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-primary-900">
                {t("justiceTitle")}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                {t("justiceDesc")}
              </p>
            </div>
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 text-xs font-bold text-primary-900 hover:text-accent-gold-dark transition-colors"
            >
              <span>Join Human Rights Network</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
