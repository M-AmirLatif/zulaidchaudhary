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
  ChevronDown,
  Users,
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
    { href: "/our-work/human-rights", label: "Human Rights Advocacy", icon: "⚖️" },
    { href: "/our-work/environment", label: "Clean Water & Environment", icon: "🌱" },
    { href: "/our-work/animal-welfare", label: "Animal Welfare", icon: "🐾" },
    { href: "/our-work/medical-assistance", label: "Medical Assistance", icon: "🏥" },
    { href: "/our-work/hospital", label: "Charity Hospital", icon: "🏗️" },
    { href: "/our-work/social-welfare", label: "Food & Rations", icon: "🌾" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 shadow-sm overflow-x-clip bg-white">
      {/* 1. Official Top Utility Bar - MTJ Bright Sky Blue Palette (#009ee2) */}
      <div className="bg-[#009ee2] text-white text-xs py-1.5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Left: Email & Phone */}
          <div className="flex items-center gap-3 sm:gap-6 min-w-0">
            <a
              href="mailto:info@zulaidchaudharyfoundation.com"
              className="inline-flex items-center gap-1.5 hover:text-white/80 transition-colors font-sans text-[11px] sm:text-xs"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="truncate">info@zulaidchaudharyfoundation.com</span>
            </a>

            <a
              href="tel:+924230000000"
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-white/80 transition-colors font-sans text-[11px] sm:text-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>042-30000000</span>
            </a>
          </div>

          {/* Right: Social Media Icons + Donate Globally Pill + Language */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* Social Icons */}
            <div className="hidden md:flex items-center gap-2.5 text-white/90">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.7 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="YouTube">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>

            {/* Donate Globally Pill */}
            <Link
              href="/donate"
              className="inline-flex items-center gap-1.5 bg-white text-[#009ee2] hover:bg-white/90 px-3 py-0.5 rounded-full text-[11px] font-bold shadow-sm transition-all"
            >
              <Globe className="w-3 h-3 text-[#009ee2]" />
              <span>Donate Globally</span>
            </Link>

            <span className="text-white/40">|</span>

            {/* Language Switcher */}
            <Link
              href={pathname}
              locale={otherLocale}
              className="inline-flex items-center gap-1 text-white hover:text-white/80 text-[11px] font-medium transition-colors"
            >
              <span>{otherLocaleLabel}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Header - MTJ Exact White Header & Clean Nav */}
      <nav className="bg-white border-b border-gray-100 text-slate-800 py-2.5 sm:py-3 px-3 sm:px-6 lg:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          
          {/* Logo & Brand Wordmark */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#009ee2] to-[#005972] text-white flex items-center justify-center font-bold text-base sm:text-lg shadow shrink-0">
              ZCF
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg lg:text-xl text-[#1e293b] leading-tight font-sans">
                Zulaid Chaudhary Foundation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6 text-xs xl:text-[13px] font-semibold text-slate-700 shrink min-w-0">
            <Link
              href="/"
              className={`hover:text-[#009ee2] transition-colors whitespace-nowrap ${
                pathname === "/" ? "text-[#009ee2]" : ""
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`hover:text-[#009ee2] transition-colors whitespace-nowrap ${
                pathname.includes("/about") ? "text-[#009ee2]" : ""
              }`}
            >
              About
            </Link>

            {/* Programs Dropdown */}
            <div className="relative group shrink-0">
              <Link
                href="/our-work"
                className="hover:text-[#009ee2] transition-colors inline-flex items-center gap-1 py-1 whitespace-nowrap"
              >
                <span>Programs</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#009ee2] transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full start-0 hidden group-hover:block pt-1.5 z-50">
                <div className="bg-white border border-gray-100 shadow-xl rounded-xl py-2 min-w-[240px] flex flex-col divide-y divide-gray-50">
                  {workItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="px-4 py-2 hover:bg-blue-50 hover:text-[#009ee2] text-xs transition-colors flex items-center gap-2.5 font-medium"
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
              className="hover:text-[#009ee2] transition-colors whitespace-nowrap"
            >
              Projects
            </Link>

            <Link
              href="/get-involved"
              className="hover:text-[#009ee2] transition-colors whitespace-nowrap"
            >
              Volunteer
            </Link>

            <Link
              href="/transparency"
              className="hover:text-[#009ee2] transition-colors whitespace-nowrap hidden 2xl:inline-block"
            >
              Transparency
            </Link>

            <Link
              href="/contact"
              className="hover:text-[#009ee2] transition-colors whitespace-nowrap"
            >
              Contact
            </Link>
          </div>

          {/* Right Action CTAs: Join Our Support Community + Donate Now */}
          <div className="hidden sm:flex items-center gap-2 shrink-0 ms-2">
            <Link
              href="/get-involved"
              className="bg-[#005972] hover:bg-[#00475b] text-white px-3 xl:px-4 py-2 sm:py-2.5 rounded-lg text-xs xl:text-[13px] font-semibold flex items-center gap-1.5 transition-all shadow-sm whitespace-nowrap shrink-0"
            >
              <Users className="w-3.5 h-3.5 xl:w-4 xl:h-4 shrink-0" />
              <span className="hidden xl:inline">Join Our Support Community</span>
              <span className="xl:hidden">Join Community</span>
            </Link>

            <Link
              href="/donate"
              className="bg-[#d92525] hover:bg-[#c81e1e] text-white px-3.5 xl:px-4 py-2 sm:py-2.5 rounded-lg text-xs xl:text-[13px] font-bold flex items-center gap-1.5 transition-all shadow-sm whitespace-nowrap shrink-0"
            >
              <Heart className="w-3.5 h-3.5 xl:w-4 xl:h-4 fill-white shrink-0" />
              <span>Donate Now</span>
            </Link>
          </div>

          {/* Mobile Right Controls: Donate Button + Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              href="/donate"
              className="bg-[#d92525] hover:bg-[#c81e1e] text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Donate</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* 3. Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2.5 pt-3 border-t border-slate-200 flex flex-col gap-1 pb-4 text-sm font-medium animate-in slide-in-from-top-2 duration-200">
            <Link
              href="/donate"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#d92525] hover:bg-[#c81e1e] text-white font-bold px-4 py-2.5 rounded-xl text-center shadow-sm flex items-center justify-center gap-2 mb-2 text-sm"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate Now</span>
            </Link>

            <Link
              href="/get-involved"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#005972] text-white font-semibold px-4 py-2.5 rounded-xl text-center shadow-sm flex items-center justify-center gap-2 mb-2 text-sm"
            >
              <Users className="w-4 h-4" />
              <span>Join Support Community</span>
            </Link>

            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2 rounded-lg hover:bg-slate-100 flex items-center justify-between text-slate-800 font-semibold"
            >
              <span>Home</span>
            </Link>
            
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2 rounded-lg hover:bg-slate-100 flex items-center justify-between text-slate-800 font-semibold"
            >
              <span>About Us</span>
            </Link>

            {/* Programs Collapsible Accordion */}
            <div className="flex flex-col">
              <button
                onClick={() => setMobileWorkOpen(!mobileWorkOpen)}
                className="w-full px-3.5 py-2 rounded-lg hover:bg-slate-100 flex items-center justify-between text-slate-800 font-semibold text-start"
              >
                <span>Programs</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileWorkOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileWorkOpen && (
                <div className="ps-4 flex flex-col border-s-2 border-[#009ee2] ms-3 my-1 gap-1">
                  {workItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-1.5 text-xs rounded hover:bg-slate-100 text-slate-700 flex items-center gap-2 font-medium"
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
              className="px-3.5 py-2 rounded-lg hover:bg-slate-100 text-slate-800 font-semibold"
            >
              Projects
            </Link>

            <Link
              href="/transparency"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2 rounded-lg hover:bg-slate-100 text-slate-800 font-semibold"
            >
              Transparency
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2 rounded-lg hover:bg-slate-100 text-slate-800 font-semibold"
            >
              Contact
            </Link>

            {/* Language Switcher inside mobile drawer */}
            <div className="pt-3 mt-2 border-t border-slate-200 flex items-center justify-between px-3 text-xs text-slate-500">
              <span>Language:</span>
              <Link
                href={pathname}
                locale={otherLocale}
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 bg-[#009ee2] text-white px-3 py-1.5 rounded-lg font-bold"
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
