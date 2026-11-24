"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import {
  Scale,
  Globe,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Heart,
  BookOpen,
  ArrowRight,
  Download,
  AlertTriangle,
} from "lucide-react";

const ADVOCACY_PILLARS = [
  {
    icon: "🕊️",
    title: "Palestine & Global Civilian Relief",
    badge: "Humanitarian Crises",
    desc: "Advocating through peaceful, lawful, and fact-based humanitarian channels for the immediate protection of displaced families, innocent children, and medical personnel in conflict zones.",
    topics: ["Emergency Medical Logistics", "Civilian Water Access", "International Law Respect"],
  },
  {
    icon: "⚖️",
    title: "Protection of Vulnerable Minorities",
    badge: "Equality & Law",
    desc: "Upholding constitutional safeguards and legal protections for religious and ethnic minorities, brick-kiln workers, and marginalized communities facing socio-economic deprivation.",
    topics: ["Anti-Exploitation", "Access to Fair Justice", "Legal Rights Awareness"],
  },
  {
    icon: "👩‍👧",
    title: "Women's & Children's Rights",
    badge: "Dignity & Safety",
    desc: "Combatting domestic abuse, child labor in hazardous sectors, and promoting equal access to maternal healthcare, primary education, and female legal protection desks.",
    topics: ["Child Protection", "Maternal Care Rights", "Safe Educational Spaces"],
  },
  {
    icon: "📚",
    title: "Research, Policy & Transparency",
    badge: "Fact-Based Advocacy",
    desc: "Publishing well-researched human rights whitepapers, humanitarian policy briefings, and legal analysis grounded in verified ground facts rather than rhetoric.",
    topics: ["Policy Briefings", "Sourced Research", "Humanitarian Transparency"],
  },
];

const RESEARCH_BRIEFINGS = [
  {
    ref: "ZCF-HR-2026-01",
    title: "Healthcare As a Fundamental Human Right: Barriers Facing Destitute Patients",
    category: "Healthcare Equity",
    date: "October 2026",
    summary: "An empirical analysis into the catastrophic financial impact of out-of-pocket surgical costs on daily-wage families in Pakistan.",
  },
  {
    ref: "ZCF-HR-2026-02",
    title: "Civilian Medical Infrastructure Under International Humanitarian Law",
    category: "Global Crises & Palestine",
    date: "September 2026",
    summary: "Reviewing the Geneva Conventions and international legal duties to protect hospitals, ambulances, and clinical doctors during armed conflict.",
  },
  {
    ref: "ZCF-HR-2026-03",
    title: "Animal Welfare as an Ethical Imperative: Legal Reforms for Working Equines",
    category: "Animal Rights",
    date: "August 2026",
    summary: "Recommendations for strengthening anti-cruelty enforcement and municipal veterinary mobile clinics in wholesale markets.",
  },
];

export default function HumanRightsPage() {
  const [activeTab, setActiveTab] = useState<"pillars" | "briefings">("pillars");

  return (
    <div className="w-full py-14 px-4 bg-surface-cream">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* 1. Header Banner */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="inline-flex items-center gap-2 bg-red-100 text-alert-red border border-red-200 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
            <Scale className="w-4 h-4" />
            <span>HUMAN RIGHTS, JUSTICE & PEACEFUL ADVOCACY</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-900 tracking-tight max-w-3xl">
            Standing for Justice, Equality & Civilian Dignity
          </h1>

          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl leading-relaxed">
            Advancing human rights, justice, and humanity through peaceful, lawful, and evidence-based advocacy both within Pakistan and on international humanitarian platforms.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <div className="bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-bold text-[#16A34A] shadow-sm">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Strictly Lawful, Peaceful & Sourced Human Rights Policy</span>
            </div>

            <div className="bg-blue-50 border border-blue-200 px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-semibold text-[#1A56DB] shadow-sm">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Universal Declaration of Human Rights (UDHR) Aligned</span>
            </div>
          </div>
        </div>

        {/* Visual Hero Feature */}
        <div className="relative w-full h-64 sm:h-80 rounded-3xl overflow-hidden shadow-lg border border-slate-200">
          <Image
            src="/images/programs/human_rights.jpg"
            alt="Human Rights, Justice & Civilian Dignity"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider bg-white/20 backdrop-blur px-3 py-1 rounded-full inline-block mb-2">
                Documented Ground Advocacy
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-white">
                Defending Fundamental Freedoms & Legal Due Process
              </h2>
            </div>
          </div>
        </div>

        {/* 2. Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 border-b border-zinc-200 pb-2">
          <button
            onClick={() => setActiveTab("pillars")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === "pillars"
                ? "bg-[#1A56DB] text-white shadow-md"
                : "bg-white text-zinc-600 hover:bg-zinc-100"
            }`}
          >
            Core Focus Areas
          </button>

          <button
            onClick={() => setActiveTab("briefings")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === "briefings"
                ? "bg-[#1A56DB] text-white shadow-md"
                : "bg-white text-zinc-600 hover:bg-zinc-100"
            }`}
          >
            Research Briefings & Reports
          </button>
        </div>

        {/* 3. Tab 1: Core Focus Areas */}
        {activeTab === "pillars" && (
          <div className="flex flex-col gap-10 animate-in fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ADVOCACY_PILLARS.map((p) => (
                <div
                  key={p.title}
                  className="bg-white rounded-3xl border border-zinc-200/80 p-8 shadow-sm flex flex-col justify-between gap-6 hover:shadow-md transition-shadow group"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-red-50 text-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        {p.icon}
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-zinc-100 text-zinc-700">
                        {p.badge}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-xl text-primary-900 mt-2">
                      {p.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                      {p.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {p.topics.map((t) => (
                        <span key={t} className="text-[11px] font-semibold text-[#1A56DB] bg-blue-50 px-2.5 py-1 rounded-lg">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-zinc-100 pt-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-400">Peaceful Advocacy</span>
                    <Link
                      href="/articles"
                      className="text-xs font-bold text-[#1A56DB] hover:underline flex items-center gap-1"
                    >
                      <span>Read Articles</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Palestine Emergency Appeal Banner */}
            <div className="bg-gradient-to-r from-red-950 via-primary-950 to-primary-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-red-900/50">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping inline-block" />
                  <span className="text-xs uppercase tracking-widest text-red-300 font-bold">
                    Emergency Civilian Crisis
                  </span>
                </div>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl">
                  Palestine Medical & Clean Water Relief Fund
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-lg leading-relaxed">
                  Support verified emergency consignments of sterile surgical dressings, child antibiotics, and clean water canisters to displaced civilian encampments.
                </p>
              </div>

              <Link
                href="/donate"
                className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold px-8 py-3.5 rounded-full text-xs sm:text-sm shadow-xl transition-all hover:scale-105 whitespace-nowrap flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Support Palestine Relief</span>
              </Link>
            </div>
          </div>
        )}

        {/* 4. Tab 2: Research Briefings */}
        {activeTab === "briefings" && (
          <div className="flex flex-col gap-8 animate-in fade-in">
            <div className="text-center max-w-xl mx-auto">
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900">
                Foundation Research & Policy Briefings
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted mt-2">
                Fact-based analysis informing public policy, legal awareness, and healthcare equity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {RESEARCH_BRIEFINGS.map((b) => (
                <div
                  key={b.ref}
                  className="bg-white rounded-3xl border border-zinc-200/80 p-6 shadow-sm flex flex-col justify-between gap-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                      <span className="font-mono font-bold text-xs text-[#1A56DB] bg-blue-50 px-2 py-0.5 rounded">
                        {b.ref}
                      </span>
                      <span className="text-[11px] text-zinc-400 font-semibold">{b.date}</span>
                    </div>

                    <span className="text-[11px] uppercase tracking-wider font-bold text-accent-gold">
                      {b.category}
                    </span>

                    <h4 className="font-serif font-bold text-base text-primary-900 leading-snug">
                      {b.title}
                    </h4>

                    <p className="text-xs text-charcoal-muted leading-relaxed">
                      {b.summary}
                    </p>
                  </div>

                  <Link
                    href="/articles"
                    className="w-full bg-zinc-100 hover:bg-zinc-200 text-charcoal font-bold py-2 rounded-xl text-xs text-center flex items-center justify-center gap-2 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Read Briefing Online</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
