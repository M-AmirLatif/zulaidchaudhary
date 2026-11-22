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
  ChevronDown 
} from "lucide-react";

export function Header() {
  const t = useTranslations("common");
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);

  const isRtl = locale === "ur";
  const otherLocale = locale === "en" ? "ur" : "en";
  const otherLocaleLabel = locale === "en" ? "اردو" : "English";

  const workItems = [
    { href: "/our-work/medical-assistance", label: t("nav.medicalAssistance") },
    { href: "/our-work/hospital", label: t("nav.hospital") },
    { href: "/our-work/social-welfare", label: t("nav.socialWelfare") },
    { href: "/our-work/education", label: t("nav.education") },
    { href: "/our-work/human-rights", label: t("nav.humanRights") },
    { href: "/our-work/environment", label: t("nav.environment") },
    { href: "/our-work/animal-welfare", label: t("nav.animalWelfare") },
  ];

  return (
    <header className="w-full sticky top-0 z-50 shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-primary-900 text-surface-cream text-xs py-2 px-4 border-b border-primary-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-gold" />
              <span>{t("legalStatus")}</span>
            </span>
            <span className="hidden sm:inline text-primary-600">|</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-zinc-300">
              <Phone className="w-3.5 h-3.5 text-accent-gold" />
              <span>{t("helpline")}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/emergency-help"
              className="text-red-300 hover:text-red-200 transition-colors font-medium flex items-center gap-1"
            >
              <span className="w-2 h-2 rounded-full bg-alert-red animate-pulse inline-block" />
              <span>{t("nav.emergency")}</span>
            </Link>

            {/* Language Switcher */}
            <Link
              href={pathname}
              locale={otherLocale}
              className="inline-flex items-center gap-1.5 bg-primary-800 hover:bg-primary-700 text-accent-gold px-2.5 py-1 rounded transition-colors font-medium"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{otherLocaleLabel}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-surface-cream/95 backdrop-blur-md border-b border-zinc-200 text-charcoal py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo & Brand Wordmark */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-primary-900 text-accent-gold flex items-center justify-center font-serif font-bold text-xl shadow group-hover:scale-105 transition-transform shrink-0">
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
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-5 text-xs xl:text-sm font-medium whitespace-nowrap">
            <Link href="/" className="hover:text-accent-gold-dark transition-colors">
              {t("nav.home")}
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <Link href="/about" className="hover:text-accent-gold-dark transition-colors inline-flex items-center gap-1">
                <span>{t("nav.about")}</span>
                <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-accent-gold-dark transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full start-0 hidden group-hover:block pt-2 z-50">
                <div className="bg-surface-card border border-zinc-200 shadow-xl rounded-xl py-2 min-w-[200px] flex flex-col">
                  <Link href="/about" className="px-4 py-2 hover:bg-surface-muted hover:text-accent-gold-dark text-xs font-semibold">
                    {t("nav.about")}
                  </Link>
                  <Link href="/about/founder" className="px-4 py-2 hover:bg-surface-muted hover:text-accent-gold-dark text-xs">
                    {t("nav.founder")}
                  </Link>
                  <Link href="/about/governance" className="px-4 py-2 hover:bg-surface-muted hover:text-accent-gold-dark text-xs">
                    {t("nav.governance")}
                  </Link>
                </div>
              </div>
            </div>

            {/* Our Work Dropdown */}
            <div className="relative group">
              <Link href="/our-work" className="hover:text-accent-gold-dark transition-colors inline-flex items-center gap-1">
                <span>{t("nav.ourWork")}</span>
                <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-accent-gold-dark transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full start-0 hidden group-hover:block pt-2 z-50">
                <div className="bg-surface-card border border-zinc-200 shadow-xl rounded-xl py-2 min-w-[240px] flex flex-col">
                  {workItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="px-4 py-2 hover:bg-surface-muted hover:text-accent-gold-dark text-xs transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/projects" className="hover:text-accent-gold-dark transition-colors">
              {t("nav.projects")}
            </Link>

            <Link href="/articles" className="hover:text-accent-gold-dark transition-colors">
              {t("nav.articles")}
            </Link>

            <Link href="/transparency" className="hover:text-accent-gold-dark transition-colors">
              {t("nav.transparency")}
            </Link>

            <Link href="/get-involved" className="hover:text-accent-gold-dark transition-colors">
              {t("nav.getInvolved")}
            </Link>

            <Link href="/contact" className="hover:text-accent-gold-dark transition-colors">
              {t("nav.contact")}
            </Link>
          </div>

          {/* Direct CTA */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              href="/donate"
              className="bg-accent-gold hover:bg-accent-gold-light text-primary-900 font-bold px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm shadow transition-all hover:scale-[1.02] flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <Heart className="w-4 h-4 fill-primary-900 shrink-0" />
              <span className="whitespace-nowrap">{t("donateNow")}</span>
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
              className="bg-accent-gold text-primary-900 font-bold px-4 py-2.5 rounded-xl text-center shadow flex items-center justify-center gap-2 mb-2"
            >
              <Heart className="w-4 h-4 fill-primary-900" />
              <span>{t("donateNow")}</span>
            </Link>

            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-surface-muted"
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-surface-muted font-semibold"
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/about/founder"
              onClick={() => setMobileMenuOpen(false)}
              className="ps-6 py-1.5 text-xs text-charcoal-muted hover:text-accent-gold-dark"
            >
              — {t("nav.founder")}
            </Link>
            <Link
              href="/about/governance"
              onClick={() => setMobileMenuOpen(false)}
              className="ps-6 py-1.5 text-xs text-charcoal-muted hover:text-accent-gold-dark"
            >
              — {t("nav.governance")}
            </Link>

            <div className="px-3 py-1 text-xs font-bold text-accent-gold-dark uppercase tracking-wider pt-2">
              {t("nav.ourWork")}
            </div>
            {workItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="ps-6 py-1.5 text-xs hover:text-accent-gold-dark"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-surface-muted"
            >
              {t("nav.projects")}
            </Link>
            <Link
              href="/articles"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-surface-muted"
            >
              {t("nav.articles")}
            </Link>
            <Link
              href="/transparency"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-surface-muted"
            >
              {t("nav.transparency")}
            </Link>
            <Link
              href="/get-involved"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-surface-muted"
            >
              {t("nav.getInvolved")}
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-surface-muted"
            >
              {t("nav.contact")}
            </Link>
            <Link
              href="/emergency-help"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-alert-red font-bold rounded hover:bg-red-50"
            >
              {t("nav.emergency")}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
