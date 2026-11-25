import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { CheckCircle2, ShieldCheck, Heart, Building2, ArrowRight } from "lucide-react";

export default function FounderPage() {
  const t = useTranslations("founder");
  const tCommon = useTranslations("common");

  return (
    <div className="w-full py-16 px-4 bg-surface-cream">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-900 border border-primary-600/20 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Leadership & Vision</span>
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-900 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Section 1: Grassroots Reality (3rdimg.jpg) + Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-surface-card rounded-3xl border border-zinc-200 p-6 sm:p-10 shadow-sm">
          <div className="md:col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/3rdimg.jpg"
              alt="Zulaid Chaudhary in community streetscape of Pakistan"
              fill
              className="object-cover object-bottom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 inset-x-3 text-surface-cream text-xs font-medium">
              Ground-level community presence in Pakistan
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col gap-4 text-charcoal-muted text-sm sm:text-base leading-relaxed">
            <h2 className="font-serif font-bold text-2xl text-primary-900">
              Roots in Compassion & Healthcare Access
            </h2>
            <p>{t("bio1")}</p>
            <p>{t("bio2")}</p>
          </div>
        </div>

        {/* Verified Facts Card */}
        <div className="bg-primary-900 text-surface-cream rounded-3xl p-8 sm:p-10 flex flex-col gap-6 shadow-xl">
          <h2 className="font-serif font-bold text-2xl text-accent-gold border-b border-primary-800 pb-4">
            {t("verifiedFactsTitle")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3 bg-primary-800/50 p-4 rounded-xl border border-primary-700">
              <CheckCircle2 className="w-5 h-5 text-status-green shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-zinc-200">{t("fact1")}</span>
            </div>

            <div className="flex items-start gap-3 bg-primary-800/50 p-4 rounded-xl border border-primary-700">
              <Building2 className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-zinc-200">{t("fact2")}</span>
            </div>

            <div className="flex items-start gap-3 bg-primary-800/50 p-4 rounded-xl border border-primary-700">
              <Heart className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-zinc-200">{t("fact3")}</span>
            </div>
          </div>
        </div>

        {/* Section 2: Formal Governance & Vision (4th.jpg) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-surface-card rounded-3xl border border-zinc-200 p-6 sm:p-10 shadow-sm">
          <div className="md:col-span-7 flex flex-col gap-4 text-charcoal-muted text-sm sm:text-base leading-relaxed order-2 md:order-1">
            <h2 className="font-serif font-bold text-2xl text-primary-900">
              Expanding Humanitarian Responsibility
            </h2>
            <p>{t("bio3")}</p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/our-work/hospital"
                className="inline-flex items-center gap-2 bg-primary-900 hover:bg-primary-800 text-surface-cream font-semibold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow transition-colors"
              >
                <span>Track Hospital Project</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>

              <Link
                href="/about/governance"
                className="inline-flex items-center gap-2 bg-surface-muted hover:bg-zinc-200 text-charcoal font-semibold px-5 py-2.5 rounded-xl text-xs sm:text-sm border border-zinc-300 transition-colors"
              >
                <span>Governance & Transparency</span>
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 relative aspect-[1/1] rounded-2xl overflow-hidden shadow-md order-1 md:order-2">
            <Image
              src="/images/4th.jpg"
              alt="Zulaid Chaudhary, founder official portrait"
              fill
              className="object-cover object-[25%_center]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
