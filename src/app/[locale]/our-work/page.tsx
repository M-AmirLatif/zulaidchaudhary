import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { PillarsGrid } from "@/components/sections/PillarsGrid";
import { ShieldCheck, Heart, ArrowRight } from "lucide-react";

export default function OurWorkOverviewPage() {
  const tCommon = useTranslations("common");

  return (
    <div className="w-full flex flex-col">
      {/* Header Banner */}
      <section className="py-16 px-4 bg-primary-900 text-surface-cream text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 bg-primary-800 text-accent-gold border border-primary-700 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Heart className="w-3.5 h-3.5" />
            <span>Humanitarian & Advocacy Pillars</span>
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-surface-cream tracking-tight">
            Our Work: A Multi-Disciplinary Mission
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed">
            From free surgical care and hospital construction to defending fundamental human rights, preserving the environment, and caring for animal welfare.
          </p>
        </div>
      </section>

      {/* Pillars Grid */}
      <PillarsGrid />

      {/* Call to Support */}
      <section className="py-16 px-4 bg-surface-cream text-center border-t border-zinc-200">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900">
            Support a Verified Humanitarian Cause
          </h2>
          <p className="text-sm text-charcoal-muted leading-relaxed">
            Every contribution directly aids verified patients and community initiatives. We maintain complete transparency in our allocation records.
          </p>
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-light text-primary-900 font-bold px-7 py-3 rounded-xl shadow-md transition-all hover:scale-105 text-sm"
          >
            <span>{tCommon("donateNow")}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
}
