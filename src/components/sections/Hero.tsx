"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Heart, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export function Hero() {
  const t = useTranslations("home.hero");
  const tCommon = useTranslations("common");
  const [selectedCause, setSelectedCause] = useState("general");
  const [selectedAmount, setSelectedAmount] = useState<string>("custom");
  const [customAmount, setCustomAmount] = useState<string>("");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-cream to-surface-muted pt-8 pb-16 lg:py-20 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Mission & Quick Contribution */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 self-start bg-primary-100 text-primary-900 border border-primary-600/20 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent-gold" />
            <span>{t("badge")}</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-primary-900 tracking-tight leading-[1.2]">
            {t("headline")}
          </h1>

          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-sans max-w-2xl">
            {t("subheadline")}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/our-work/medical-assistance"
              className="bg-primary-900 hover:bg-primary-800 text-surface-cream font-semibold px-6 py-3 rounded-xl shadow-md transition-all hover:scale-[1.02] flex items-center gap-2 text-sm"
            >
              <span>{t("ctaPrimary")}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>

            <Link
              href="/about"
              className="bg-surface-card hover:bg-zinc-100 text-charcoal border border-zinc-300 font-semibold px-6 py-3 rounded-xl shadow-sm transition-all text-sm"
            >
              {t("ctaSecondary")}
            </Link>
          </div>

          {/* Quick Contribution Module (No unverified preset amounts or fees) */}
          <div className="mt-4 bg-surface-card rounded-2xl border border-zinc-200 p-5 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
              <span className="font-serif font-semibold text-primary-900 text-sm flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-accent-gold fill-accent-gold" />
                <span>{t("quickDonateTitle")}</span>
              </span>
              <span className="text-[11px] text-zinc-500 font-medium">
                {tCommon("legalStatus")}
              </span>
            </div>

            <p className="text-xs text-charcoal-muted py-2">
              {t("quickDonateDesc")}
            </p>

            {/* Cause Selection */}
            <div className="grid grid-cols-2 gap-2 my-2 text-xs font-medium">
              <button
                type="button"
                onClick={() => setSelectedCause("general")}
                className={`p-2.5 rounded-lg border text-start transition-all ${
                  selectedCause === "general"
                    ? "border-accent-gold bg-accent-gold/10 text-primary-900 font-bold"
                    : "border-zinc-200 text-charcoal hover:bg-zinc-50"
                }`}
              >
                {t("causeGeneral")}
              </button>
              <button
                type="button"
                onClick={() => setSelectedCause("hospital")}
                className={`p-2.5 rounded-lg border text-start transition-all ${
                  selectedCause === "hospital"
                    ? "border-accent-gold bg-accent-gold/10 text-primary-900 font-bold"
                    : "border-zinc-200 text-charcoal hover:bg-zinc-50"
                }`}
              >
                {t("causeHospital")}
              </button>
            </div>

            {/* Custom Support Input (No unverified fixed prices) */}
            <div className="flex items-center gap-2 pt-2">
              <input
                type="number"
                placeholder="Enter contribution amount (PKR / USD)"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-zinc-300 focus:outline-none focus:border-accent-gold bg-surface-cream"
              />
              <Link
                href="/donate"
                className="bg-accent-gold hover:bg-accent-gold-light text-primary-900 font-bold text-xs px-4 py-2.5 rounded-lg whitespace-nowrap transition-colors shadow-sm"
              >
                {t("proceedBtn")}
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Founder Photography (Concept 1: 2ndimg.jpg) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-surface-card group">
            <Image
              src="/images/2ndimg.jpg"
              alt="Zulaid Chaudhary, founder of Zulaid Chaudhary Foundation"
              fill
              priority
              className="object-cover object-[25%_center] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent" />
            
            <div className="absolute bottom-4 inset-x-4 text-surface-cream">
              <span className="text-xs uppercase tracking-widest text-accent-gold font-semibold block">
                Founder Leadership
              </span>
              <span className="font-serif font-bold text-lg sm:text-xl block">
                Zulaid Chaudhary
              </span>
            </div>
          </div>

          {/* Floating Verified Milestone Card (Only confirmed fact: approx 25-30 patients) */}
          <div className="w-full max-w-md -mt-6 z-10 bg-surface-card border border-zinc-200 rounded-2xl p-4 shadow-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-status-green/10 text-status-green flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-primary-900">
                Verified Medical Care Record
              </span>
              <span className="text-[12px] text-charcoal-muted">
                Free treatment arranged for approximately 25–30 patients to date.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
