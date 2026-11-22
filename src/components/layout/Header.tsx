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
  Mail,
  ShieldCheck,
  ChevronDown,
  Users,
  Compass,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function Header() {
  const t = useTranslations("common");
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isRtl = locale === "ur";
  const otherLocale = locale === "en" ? "ur" : "en";
  const otherLocaleLabel = locale === "en" ? "اردو" : "English";

  const workItems = [
    { href: "/our-work/medical-assistance", label: t("nav.medicalAssistance"), icon: "🏥" },
    { href: "/our-work/hospital", label: t("nav.hospital"), icon: "🏗️" },
    { href: "/our-work/animal-welfare", label: t("nav.animalWelfare"), icon: "🐾" },
    { href: "/our-work/social-welfare", label: t("nav.socialWelfare"), icon: "🌾" },
    { href: "/our-work/human-rights", label: t("nav.humanRights"), icon: "⚖️" },
    { href: "/our-work/environment", label: t("nav.environment"), icon: "🌱" },
    { href: "/our-work/education", label: t("nav.education"), icon: "📚" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 shadow-sm">
      {/* 1. MTJ-Inspired Vibrant Top Utility Bar */}
      <div className="bg-[#1A56DB] text-white text-xs py-2 px-4 border-b border-blue-600/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Left: Contact Credentials & Trust Status */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="mailto:info@zulaidchaudharyfoundation.com"
              className="inline-flex items-center gap-1.5 hover:text-blue-100 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-200" />
              <span className="hidden sm:inline">info@zulaidchaudharyfoundation.com</span>
              <span className="sm:hidden">Email Us</span>
            </a>

            <span className="text-blue-300">|</span>

            <a
              href="tel:+924230000000"
              className="inline-flex items-center gap-1.5 hover:text-blue-100 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-blue-200" />
              <span>+92 42 30000000</span>
            </a>

            <span className="hidden md:inline text-blue-300">|</span>

            <span className="hidden md:inline-flex items-center gap-1.5 bg-blue-700/60 text-blue-100 px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-blue-500/40">
              <ShieldCheck className="w-3 h-3 text-accent-gold" />
              <span>{t("legalStatus")}</span>
            </span>
          </div>

          {/* Right: Emergency, Socials, Language & Global Giving Pill */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/emergency-help"
              className="text-red-200 hover:text-white transition-colors font-semibold flex items-center gap-1 text-[11px]"
            >
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse inline-block" />
              <span>{t("nav.emergency")}</span>
            </Link>

            {/* Language Switcher */}
            <Link
              href={pathname}
              locale={otherLocale}
              className="inline-flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white px-2 py-0.5 rounded text-[11px] font-medium transition-colors"
            >
              <Globe className="w-3 h-3" />
              <span>{otherLocaleLabel}</span>
            </Link>

            {/* MTJ Iconic "Donate Globally" White Pill Button */}
            <Link
              href="/donate"
              className="inline-flex items-center gap-1.5 bg-white hover:bg-blue-50 text-primary-900 font-bold px-3 py-1 rounded-full text-[11px] shadow-sm transition-all hover:scale-105"
            >
              <span className="text-xs">🌍</span>
              <span>Donate Globally</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Navigation Header */}
      <nav className="bg-white/98 backdrop-blur-md border-b border-zinc-200 text-charcoal py-3 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
          
          {/* Logo & Brand Wordmark */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-accent-gold flex items-center justify-center font-serif font-bold text-xl shadow-md group-hover:scale-105 transition-transform shrink-0 border border-primary-700">
              ZCF
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg xl:text-xl text-primary-900 leading-tight whitespace-nowrap">
                {t("siteName")}
              </span>
              <span className="hidden sm:inline-block text-[10px] xl:text-[11px] text-charcoal-muted tracking-wide font-sans line-clamp-1 max-w-[210px] xl:max-w-none">
                {t("tagline")}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-5 text-xs xl:text-sm font-semibold text-zinc-700 whitespace-nowrap">
            <Link
              href="/"
              className={`hover:text-[#1A56DB] transition-colors py-1 ${
                pathname === "/" ? "text-[#1A56DB] border-b-2 border-[#1A56DB]" : ""
              }`}
            >
              {t("nav.home")}
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <Link href="/about" className="hover:text-[#1A56DB] transition-colors inline-flex items-center gap-1 py-1">
                <span>{t("nav.about")}</span>
                <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#1A56DB] transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full start-0 hidden group-hover:block pt-2 z-50">
                <div className="bg-white border border-zinc-200 shadow-2xl rounded-2xl py-2 min-w-[220px] flex flex-col">
                  <Link href="/about" className="px-4 py-2 hover:bg-blue-50 hover:text-[#1A56DB] text-xs font-semibold">
                    {t("nav.about")}
                  </Link>
                  <Link href="/about/founder" className="px-4 py-2 hover:bg-blue-50 hover:text-[#1A56DB] text-xs">
                    {t("nav.founder")}
                  </Link>
                  <Link href="/about/governance" className="px-4 py-2 hover:bg-blue-50 hover:text-[#1A56DB] text-xs">
                    {t("nav.governance")}
                  </Link>
                </div>
              </div>
            </div>

            {/* Programs / Our Work Dropdown */}
            <div className="relative group">
              <Link href="/our-work" className="hover:text-[#1A56DB] transition-colors inline-flex items-center gap-1 py-1">
                <span>Our Programs</span>
                <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#1A56DB] transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full start-0 hidden group-hover:block pt-2 z-50">
                <div className="bg-white border border-zinc-200 shadow-2xl rounded-2xl py-2 min-w-[260px] flex flex-col divide-y divide-zinc-100">
                  {workItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="px-4 py-2.5 hover:bg-blue-50 hover:text-[#1A56DB] text-xs transition-colors flex items-center gap-2.5 font-medium"
                    >
                      <span className="text-base">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/projects" className="hover:text-[#1A56DB] transition-colors py-1">
              {t("nav.projects")}
            </Link>

            <Link href="/articles" className="hover:text-[#1A56DB] transition-colors py-1">
              {t("nav.articles")}
            </Link>

            <Link href="/transparency" className="hover:text-[#1A56DB] transition-colors py-1">
              {t("nav.transparency")}
            </Link>

            <Link href="/contact" className="hover:text-[#1A56DB] transition-colors py-1">
              {t("nav.contact")}
            </Link>
          </div>

          {/* MTJ-Inspired Dual Action Buttons (Right) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* 1. "Join Our Community" / Volunteer Pill */}
            <Link
              href="/get-involved"
              className="hidden md:inline-flex items-center gap-1.5 bg-[#0F766E] hover:bg-[#0D625C] text-white font-semibold px-3.5 py-2 rounded-full text-xs shadow-sm transition-all hover:scale-[1.02] whitespace-nowrap"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Join Community</span>
            </Link>

            {/* 2. "Donate Now" MTJ Crimson Red Pill Button */}
            <Link
              href="/donate"
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm shadow-md transition-all hover:scale-105 flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <Heart className="w-4 h-4 fill-white shrink-0" />
              <span>Donate Now</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-primary-900 hover:bg-zinc-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-zinc-200 flex flex-col gap-2 pb-4 text-sm font-medium">
            <Link
              href="/donate"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#DC2626] text-white font-bold px-4 py-2.5 rounded-full text-center shadow flex items-center justify-center gap-2 mb-2"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate Now</span>
            </Link>

            <Link
              href="/get-involved"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#0F766E] text-white font-semibold px-4 py-2 rounded-full text-center shadow-sm flex items-center justify-center gap-1.5 mb-2 text-xs"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Join Support Community</span>
            </Link>

            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded hover:bg-zinc-100">
              {t("nav.home")}
            </Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded hover:bg-zinc-100 font-semibold">
              {t("nav.about")}
            </Link>
            <Link href="/about/founder" onClick={() => setMobileMenuOpen(false)} className="ps-6 py-1 text-xs text-charcoal-muted">
              — {t("nav.founder")}
            </Link>
            <Link href="/about/governance" onClick={() => setMobileMenuOpen(false)} className="ps-6 py-1 text-xs text-charcoal-muted">
              — {t("nav.governance")}
            </Link>

            <div className="px-3 py-1 text-xs font-bold text-[#1A56DB] uppercase tracking-wider pt-2">
              Our Programs
            </div>
            {workItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="ps-6 py-1.5 text-xs hover:text-[#1A56DB] flex items-center gap-2"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}

            <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded hover:bg-zinc-100">
              {t("nav.projects")}
            </Link>
            <Link href="/articles" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded hover:bg-zinc-100">
              {t("nav.articles")}
            </Link>
            <Link href="/transparency" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded hover:bg-zinc-100">
              {t("nav.transparency")}
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded hover:bg-zinc-100">
              {t("nav.contact")}
            </Link>
            <Link href="/emergency-help" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-alert-red font-bold rounded hover:bg-red-50">
              {t("nav.emergency")}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
