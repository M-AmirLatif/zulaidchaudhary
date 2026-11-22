import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ShieldCheck, Heart, Eye, Target, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("about");
  const tCommon = useTranslations("common");

  return (
    <div className="w-full py-16 px-4 bg-surface-cream">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-900 border border-primary-600/20 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{tCommon("legalStatus")}</span>
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-900 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Official Foundation Vision Banner (5th.jpg) */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-xl border-2 border-primary-900/10 aspect-[21/9] sm:aspect-[24/8] flex items-center">
          <Image
            src="/images/5th.jpg"
            alt="Zulaid Chaudhary Foundation - Serving Humanity Banner"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 via-primary-950/40 to-transparent" />
          <div className="relative z-10 p-6 sm:p-10 flex flex-col gap-2 max-w-md text-surface-cream">
            <span className="text-xs uppercase tracking-widest text-accent-gold font-bold">
              Founding Creed
            </span>
            <span className="font-serif font-bold text-xl sm:text-2xl text-surface-cream">
              Serving Humanity With Dignity, Compassion & Justice
            </span>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-900 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="font-serif font-bold text-2xl text-primary-900">
              {t("missionTitle")}
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
              {t("missionDesc")}
            </p>
          </div>

          <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent-gold/20 text-accent-gold-dark flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="font-serif font-bold text-2xl text-primary-900">
              {t("visionTitle")}
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
              {t("visionDesc")}
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 sm:p-10 shadow-sm flex flex-col gap-6">
          <h2 className="font-serif font-bold text-2xl text-primary-900 border-b border-zinc-100 pb-4">
            {t("valuesTitle")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent-gold mt-2 shrink-0" />
              <p className="text-sm text-charcoal leading-relaxed">{t("value1")}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent-gold mt-2 shrink-0" />
              <p className="text-sm text-charcoal leading-relaxed">{t("value2")}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent-gold mt-2 shrink-0" />
              <p className="text-sm text-charcoal leading-relaxed">{t("value3")}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent-gold mt-2 shrink-0" />
              <p className="text-sm text-charcoal leading-relaxed">{t("value4")}</p>
            </div>
          </div>
        </div>

        {/* Legal Status Notice */}
        <div className="bg-primary-900 text-surface-cream rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-accent-gold font-bold">
              {t("legalSectionTitle")}
            </span>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {t("legalText")}
            </p>
          </div>
          <Link
            href="/about/founder"
            className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-light text-primary-900 font-bold px-6 py-3 rounded-xl text-sm whitespace-nowrap shadow transition-colors"
          >
            <span>{tCommon("nav.founder")}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}
