"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import {
  Heart,
  Menu,
  X,
  Globe,
  Phone,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

export function Header() {
  const t = useTranslations("common");
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const isRtl = locale === "ur";
  const otherLocale = locale === "en" ? "ur" : "en";
  const otherLocaleLabel = locale === "en" ? "اردو" : "English";

  const workItems = [
    { href: "/our-work/medical-assistance", label: t("nav.medicalAssistance"), icon: "🏥" },
    { href: "/our-work/hospital", label: t("nav.hospital"), icon: "🏗️" },
    { href: "/our-work/social-welfare", label: t("nav.socialWelfare"), icon: "🌾" },
    { href: "/our-work/education", label: t("nav.education"), icon: "📚" },
    { href: "/our-work/human-rights", label: t("nav.humanRights"), icon: "⚖️" },
    { href: "/our-work/environment", label: t("nav.environment"), icon: "🌱" },
    { href: "/our-work/animal-welfare", label: t("nav.animalWelfare"), icon: "🐾" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 shadow-sm overflow-x-clip bg-white">
      {/* 1. Official Top Utility Bar - Deep Emerald Brand Palette */}
      <div className="bg-primary-950 text-surface-cream text-xs py-2 px-3 sm:px-6 lg:px-8 border-b border-primary-900/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Left: Registration Status & Helpline */}
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
            <span className="inline-flex items-center gap-1.5 font-medium shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-gold shrink-0" />
              <span className="truncate max-w-[140px] xs:max-w-none">{t("legalStatus")}</span>
            </span>

            <span className="hidden sm:inline text-primary-800">|</span>

            <a
              href="tel:+924230000000"
              className="hidden sm:inline-flex items-center gap-1.5 text-zinc-300 hover:text-accent-gold transition-colors font-medium shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-accent-gold shrink-0" />
              <span>{t("helpline")}</span>
            </a>
          </div>

          {/* Right: Emergency Help & Language Switcher */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <Link
              href="/emergency-help"
              className="text-red-300 hover:text-red-200 transition-colors font-semibold flex items-center gap-1 text-[11px] sm:text-xs shrink-0"
            >
              <span className="w-2 h-2 rounded-full bg-alert-red animate-pulse inline-block" />
              <span>{t("nav.emergency")}</span>
            </Link>

            <span className="text-primary-800">|</span>

            {/* Language Switcher */}
            <Link
              href={pathname}
              locale={otherLocale}
              className="inline-flex items-center gap-1.5 bg-primary-900 hover:bg-primary-800 text-accent-gold px-2 py-0.5 rounded text-[11px] font-medium border border-primary-800/80 transition-colors shrink-0"
            >
              <Globe className="w-3 h-3 text-accent-gold" />
              <span>{otherLocaleLabel}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Navigation Header - Pure Clean Design */}
      <nav className="bg-white/98 backdrop-blur-md border-b border-zinc-200 text-charcoal py-2 sm:py-2.5 lg:py-3 px-3 sm:px-6 lg:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 lg:gap-3 xl:gap-4">
          
          {/* Logo & Brand Wordmark (with responsive truncation so it never pushes the right side off-screen) */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary-950 text-accent-gold flex items-center justify-center font-serif font-bold text-base sm:text-lg shadow group-hover:scale-105 transition-transform shrink-0 border border-primary-900">
              ZCF
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-serif font-bold text-sm sm:text-base lg:text-[15px] xl:text-lg 2xl:text-xl text-primary-950 leading-tight truncate max-w-[135px] xs:max-w-[185px] sm:max-w-none">
                {t("siteName")}
              </span>
              <span className="hidden xl:inline-block text-[10px] 2xl:text-[11px] text-zinc-500 tracking-wide font-sans line-clamp-1 max-w-[280px]">
                {t("tagline")}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Visible on desktop lg: 1024px+, perfectly spaced and fitted) */}
          <div className="hidden lg:flex items-center gap-0.5 lg:gap-1 xl:gap-2 2xl:gap-3 text-xs xl:text-[13px] 2xl:text-sm font-semibold text-zinc-700 whitespace-nowrap">
            <Link
              href="/"
              className={`px-1.5 lg:px-2 py-1.5 rounded-lg hover:text-accent-gold-dark hover:bg-zinc-100 transition-colors ${
                pathname === "/" ? "text-primary-950 font-bold bg-zinc-100/80" : ""
              }`}
            >
              {t("nav.home")}
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <Link
                href="/about"
                className="px-1.5 lg:px-2 py-1.5 rounded-lg hover:text-accent-gold-dark hover:bg-zinc-100 transition-colors inline-flex items-center gap-1"
              >
                <span>{t("nav.about")}</span>
                <ChevronDown className="w-3 h-3 text-zinc-400 group-hover:text-accent-gold-dark transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full start-0 hidden group-hover:block pt-1.5 z-50 animate-in fade-in slide-in-from-top-1">
                <div className="bg-white border border-zinc-200 shadow-xl rounded-xl py-2 min-w-[210px] flex flex-col">
                  <Link href="/about" className="px-4 py-2 hover:bg-zinc-50 hover:text-accent-gold-dark text-xs font-semibold">
                    {t("nav.about")}
                  </Link>
                  <Link href="/about/founder" className="px-4 py-2 hover:bg-zinc-50 hover:text-accent-gold-dark text-xs">
                    {t("nav.founder")}
                  </Link>
                  <Link href="/about/governance" className="px-4 py-2 hover:bg-zinc-50 hover:text-accent-gold-dark text-xs">
                    {t("nav.governance")}
                  </Link>
                </div>
              </div>
            </div>

            {/* Programs / Our Work Dropdown */}
            <div className="relative group">
              <Link
                href="/our-work"
                className="px-1.5 lg:px-2 py-1.5 rounded-lg hover:text-accent-gold-dark hover:bg-zinc-100 transition-colors inline-flex items-center gap-1"
              >
                <span>{t("nav.ourWork")}</span>
                <ChevronDown className="w-3 h-3 text-zinc-400 group-hover:text-accent-gold-dark transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full start-0 hidden group-hover:block pt-1.5 z-50 animate-in fade-in slide-in-from-top-1">
                <div className="bg-white border border-zinc-200 shadow-xl rounded-xl py-2 min-w-[240px] flex flex-col divide-y divide-zinc-100">
                  {workItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="px-4 py-2 hover:bg-zinc-50 hover:text-accent-gold-dark text-xs transition-colors flex items-center gap-2.5 font-medium"
                    >
                      <span className="text-sm">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/projects"
              className="px-1.5 lg:px-2 py-1.5 rounded-lg hover:text-accent-gold-dark hover:bg-zinc-100 transition-colors"
            >
              {t("nav.projects")}
            </Link>

            <Link
              href="/articles"
              className="px-1.5 lg:px-2 py-1.5 rounded-lg hover:text-accent-gold-dark hover:bg-zinc-100 transition-colors"
            >
              <span className="hidden xl:inline">{t("nav.articles")}</span>
              <span className="xl:hidden">{isRtl ? "مضامین" : "Articles"}</span>
            </Link>

            <Link
              href="/transparency"
              className="px-1.5 lg:px-2 py-1.5 rounded-lg hover:text-accent-gold-dark hover:bg-zinc-100 transition-colors"
            >
              {t("nav.transparency")}
            </Link>

            <Link
              href="/get-involved"
              className="px-1.5 lg:px-2 py-1.5 rounded-lg hover:text-accent-gold-dark hover:bg-zinc-100 transition-colors"
            >
              {t("nav.getInvolved")}
            </Link>

            <Link
              href="/contact"
              className="px-1.5 lg:px-2 py-1.5 rounded-lg hover:text-accent-gold-dark hover:bg-zinc-100 transition-colors"
            >
              <span className="hidden xl:inline">{t("nav.contact")}</span>
              <span className="xl:hidden">{isRtl ? "رابطہ" : "Contact"}</span>
            </Link>
          </div>

          {/* Right Action: Donate Now Button & Mobile Hamburger Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Warm Gold "Donate Now" Button - Always visible, never cut off */}
            <Link
              href="/donate"
              className="bg-accent-gold hover:bg-accent-gold-light text-primary-950 font-bold px-2.5 xs:px-3 sm:px-4 py-1.5 lg:py-2 rounded-xl text-xs sm:text-xs xl:text-sm shadow-sm transition-all hover:scale-[1.02] flex items-center gap-1 sm:gap-1.5 whitespace-nowrap shrink-0"
            >
              <Heart className="w-3.5 h-3.5 fill-primary-950 shrink-0" />
              <span className="hidden xs:inline whitespace-nowrap">{t("donateNow")}</span>
              <span className="xs:hidden font-bold">Donate</span>
            </Link>

            {/* Mobile Hamburger Toggle (Always visible and easily tappable on mobile & tablet < 1024px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 text-primary-950 hover:bg-zinc-100 active:bg-zinc-200 rounded-xl transition-colors shrink-0 flex items-center justify-center border border-zinc-200/80 bg-zinc-50 shadow-sm"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-primary-950 shrink-0" />
              ) : (
                <Menu className="w-5 h-5 text-primary-950 shrink-0" />
              )}
            </button>
          </div>
        </div>

        {/* 3. Comprehensive Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2.5 pt-3 border-t border-zinc-200 flex flex-col gap-1 pb-4 text-sm font-medium animate-in slide-in-from-top-2 duration-200">
            {/* Quick Action Donate Banner inside mobile drawer */}
            <Link
              href="/donate"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-accent-gold hover:bg-accent-gold-light text-primary-950 font-bold px-4 py-3 rounded-xl text-center shadow-sm flex items-center justify-center gap-2 mb-2 font-serif text-base"
            >
              <Heart className="w-4 h-4 fill-primary-950" />
              <span>{t("donateNow")}</span>
            </Link>

            {/* Home */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg hover:bg-zinc-100 flex items-center justify-between text-zinc-800 font-semibold"
            >
              <span>{t("nav.home")}</span>
            </Link>
            
            {/* About (Collapsible accordion on mobile) */}
            <div className="flex flex-col">
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full px-3.5 py-2.5 rounded-lg hover:bg-zinc-100 flex items-center justify-between text-zinc-800 font-semibold text-start"
              >
                <span>{t("nav.about")}</span>
                <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileAboutOpen && (
                <div className="ps-4 flex flex-col border-s-2 border-accent-gold ms-3 my-1 gap-1">
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-xs rounded hover:bg-zinc-100 text-zinc-700 font-medium"
                  >
                    {t("nav.about")} Overview
                  </Link>
                  <Link
                    href="/about/founder"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-xs rounded hover:bg-zinc-100 text-zinc-700"
                  >
                    — {t("nav.founder")}
                  </Link>
                  <Link
                    href="/about/governance"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-xs rounded hover:bg-zinc-100 text-zinc-700"
                  >
                    — {t("nav.governance")}
                  </Link>
                </div>
              )}
            </div>

            {/* Our Programs (Collapsible accordion on mobile) */}
            <div className="flex flex-col">
              <button
                onClick={() => setMobileWorkOpen(!mobileWorkOpen)}
                className="w-full px-3.5 py-2.5 rounded-lg hover:bg-zinc-100 flex items-center justify-between text-zinc-800 font-semibold text-start"
              >
                <span>{t("nav.ourWork")}</span>
                <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${mobileWorkOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileWorkOpen && (
                <div className="ps-4 flex flex-col border-s-2 border-accent-gold ms-3 my-1 gap-1">
                  {workItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2 text-xs rounded hover:bg-zinc-100 text-zinc-700 flex items-center gap-2 font-medium"
                    >
                      <span className="text-base">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg hover:bg-zinc-100 text-zinc-800 font-semibold"
            >
              {t("nav.projects")}
            </Link>

            <Link
              href="/articles"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg hover:bg-zinc-100 text-zinc-800 font-semibold"
            >
              {t("nav.articles")}
            </Link>

            <Link
              href="/transparency"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg hover:bg-zinc-100 text-zinc-800 font-semibold"
            >
              {t("nav.transparency")}
            </Link>

            <Link
              href="/get-involved"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg hover:bg-zinc-100 text-zinc-800 font-semibold"
            >
              {t("nav.getInvolved")}
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg hover:bg-zinc-100 text-zinc-800 font-semibold"
            >
              {t("nav.contact")}
            </Link>

            {/* Emergency Help */}
            <Link
              href="/emergency-help"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 text-alert-red font-bold rounded-lg hover:bg-red-50 flex items-center gap-2 border border-red-200 mt-2 bg-red-50/50"
            >
              <span className="w-2 h-2 rounded-full bg-alert-red animate-pulse inline-block" />
              <span>{t("nav.emergency")}</span>
            </Link>

            {/* Language Switcher inside mobile drawer */}
            <div className="pt-3 mt-2 border-t border-zinc-200 flex items-center justify-between px-3 text-xs text-zinc-500">
              <span>Language / زبان:</span>
              <Link
                href={pathname}
                locale={otherLocale}
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 bg-primary-950 text-accent-gold px-3 py-1.5 rounded-lg font-bold"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Switch to {otherLocaleLabel}</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
