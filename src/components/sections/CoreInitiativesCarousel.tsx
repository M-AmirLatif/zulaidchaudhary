import { Link } from "@/i18n/routing";
import { ArrowRight, Sparkles } from "lucide-react";

const INITIATIVES = [
  {
    id: "health",
    title: "Healthcare & Free Surgeries",
    badge: "Medical Assistance",
    desc: "Facilitating free clinical consultations, corrective surgeries, and prescription medications for approximately 25–30 destitute patients to date.",
    icon: "🏥",
    href: "/our-work/medical-assistance",
    bgClass: "from-blue-50/80 to-white border-blue-100",
    accentColor: "text-[#1A56DB]",
  },
  {
    id: "hospital",
    title: "Charity Hospital Network",
    badge: "Under Construction",
    desc: "Actively constructing an institutional charity hospital to provide 24/7 emergency care, clinical zoning, and zero-fee healing for families in poverty.",
    icon: "🏗️",
    href: "/our-work/hospital",
    bgClass: "from-amber-50/80 to-white border-amber-100",
    accentColor: "text-accent-gold-dark",
  },
  {
    id: "animals",
    title: "Animal Welfare & Rescue",
    badge: "Voiceless Protection",
    desc: "Mobile veterinary treatment for overburdened cart donkeys, emergency trauma rescue for street strays, and injured urban bird rehabilitation.",
    icon: "🐾",
    href: "/our-work/animal-welfare",
    bgClass: "from-emerald-50/80 to-white border-emerald-100",
    accentColor: "text-status-green",
  },
  {
    id: "rations",
    title: "Food & Ration Relief",
    badge: "Family Welfare",
    desc: "Distributing dignified monthly nutrition packs with flour, oil, and lentils to widowed mothers and families living below the subsistence threshold.",
    icon: "🌾",
    href: "/our-work/social-welfare",
    bgClass: "from-orange-50/80 to-white border-orange-100",
    accentColor: "text-amber-700",
  },
  {
    id: "water_env",
    title: "Clean Water & Ecology",
    badge: "Climate & Health",
    desc: "Installing deep-bore community clean water wells to eradicate waterborne diseases and leading urban tree plantation drives.",
    icon: "🌱",
    href: "/our-work/environment",
    bgClass: "from-teal-50/80 to-white border-teal-100",
    accentColor: "text-[#0F766E]",
  },
  {
    id: "human_rights",
    title: "Human Rights & Palestine",
    badge: "Advocacy & Law",
    desc: "Peaceful, lawful advocacy for civilian protections under international humanitarian law, with direct civilian relief for Palestine.",
    icon: "⚖️",
    href: "/our-work/human-rights",
    bgClass: "from-purple-50/80 to-white border-purple-100",
    accentColor: "text-purple-700",
  },
];

export function CoreInitiativesCarousel() {
  return (
    <section className="py-20 px-4 bg-zinc-50/60 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1A56DB] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Program Areas</span>
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-primary-900 tracking-tight">
              Changing Lives Through These Initiatives
            </h2>
            <p className="text-sm text-charcoal-muted leading-relaxed">
              Every initiative addresses deep structural vulnerabilities in healthcare, social welfare, environment, and animal cruelty.
            </p>
          </div>

          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#1A56DB] hover:text-blue-800 transition-colors shrink-0 group"
          >
            <span>Explore All 6 Program Pillars</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Grid Initiative Cards (Exact MTJ Pastel Elevation) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INITIATIVES.map((item) => (
            <div
              key={item.id}
              className={`bg-gradient-to-b ${item.bgClass} rounded-3xl border p-7 sm:p-8 flex flex-col justify-between gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl p-3 rounded-2xl bg-white shadow-sm border border-zinc-100 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white border border-zinc-200/80 ${item.accentColor}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-primary-900 group-hover:text-[#1A56DB] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-200/50 flex items-center justify-between">
                <Link
                  href={item.href}
                  className="text-xs font-bold text-primary-900 hover:text-[#1A56DB] flex items-center gap-1 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </Link>

                <Link
                  href="/donate"
                  className="bg-[#16A34A] hover:bg-[#15803D] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full shadow-sm transition-all hover:scale-105"
                >
                  Donate
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
