import { Link } from "@/i18n/routing";
import { ArrowRight, Sparkles, Heart } from "lucide-react";

const INITIATIVES = [
  {
    id: "health",
    title: "Healthcare & Free Surgeries",
    desc: "Direct subsidies for clinical consultations, corrective surgeries, and pharmacy pools for approximately 25–30 destitute patients.",
    icon: "🏥",
    href: "/our-work/medical-assistance",
    accent: "bg-emerald-50 text-[#16a34a] border-emerald-200",
    btnColor: "bg-[#16a34a] hover:bg-[#15803d]",
  },
  {
    id: "hospital",
    title: "Charity Hospital Network",
    desc: "Actively constructing an institutional charity hospital in Lahore to provide round-the-clock emergency care and zero-fee healing.",
    icon: "🏗️",
    href: "/our-work/hospital",
    accent: "bg-sky-50 text-[#009ee2] border-sky-200",
    btnColor: "bg-[#009ee2] hover:bg-[#0085be]",
  },
  {
    id: "animals",
    title: "Animal Welfare & Trauma Rescue",
    desc: "Mobile veterinary treatment for working donkeys, emergency rescue for stray dogs, and injured urban bird rehabilitation.",
    icon: "🐾",
    href: "/our-work/animal-welfare",
    accent: "bg-amber-50 text-amber-600 border-amber-200",
    btnColor: "bg-amber-600 hover:bg-amber-700",
  },
  {
    id: "rations",
    title: "Food & Family Ration Relief",
    desc: "Distributing dignified monthly nutrition packs with flour, oil, and lentils to widowed mothers and families below poverty lines.",
    icon: "🌾",
    href: "/our-work/social-welfare",
    accent: "bg-teal-50 text-[#005972] border-teal-200",
    btnColor: "bg-[#005972] hover:bg-[#004356]",
  },
];

export function CoreInitiativesCarousel() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* MTJ Exact Subtitle Pill / Accent */}
        <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-widest mb-2">
          <span className="w-8 h-[2px] bg-amber-500 inline-block" />
          <span>Make A Donation</span>
          <span className="w-8 h-[2px] bg-amber-500 inline-block" />
        </div>

        <h2 className="font-serif font-extrabold text-2xl sm:text-4xl lg:text-[38px] text-slate-900 tracking-tight leading-tight max-w-2xl">
          Give for the Cause, Save a Life
        </h2>
        
        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl">
          Your donations are directed with zero administrative loss to real beneficiaries, verified medical cases, and active hospital construction.
        </p>

        {/* 4 Circular-Icon Cards in Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-12">
          {INITIATIVES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              {/* Circular Icon with Subtle Ring */}
              <div className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-5 shadow-sm border transition-transform duration-300 group-hover:scale-110 ${item.accent}`}>
                {item.icon}
              </div>

              <h3 className="font-serif font-bold text-lg text-slate-900 mb-2 leading-snug">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                {item.desc}
              </p>

              <Link
                href={item.href}
                className={`${item.btnColor} text-white font-bold text-xs px-5 py-2.5 rounded-full shadow transition-all hover:scale-105 flex items-center gap-1.5`}
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
