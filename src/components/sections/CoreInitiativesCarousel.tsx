import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRight, Sparkles, Heart } from "lucide-react";

const INITIATIVES = [
  {
    id: "human-rights",
    title: "Human Rights Advocacy",
    desc: "Defending fundamental rights, combating illegal bonded labor, and providing pro-bono legal protection to marginalized communities.",
    icon: "⚖️",
    image: "/images/programs/human_rights.jpg",
    href: "/our-work/human-rights",
    accent: "bg-purple-50 text-purple-600 border-purple-200",
    btnColor: "bg-purple-600 hover:bg-purple-700",
  },
  {
    id: "environment",
    title: "Clean Water & Environment",
    desc: "Installing sustainable solar filtration water plants, clean well systems, and massive urban climate afforestation drives across Pakistan.",
    icon: "🌱",
    image: "/images/programs/water_environment.jpg",
    href: "/our-work/environment",
    accent: "bg-emerald-50 text-[#16a34a] border-emerald-200",
    btnColor: "bg-[#16a34a] hover:bg-[#15803d]",
  },
  {
    id: "animals",
    title: "Animal Welfare & Trauma Rescue",
    desc: "Mobile veterinary treatment for working donkeys, emergency rescue for stray dogs, and injured urban bird rehabilitation.",
    icon: "🐾",
    image: "/images/programs/animal_welfare.jpg",
    href: "/our-work/animal-welfare",
    accent: "bg-amber-50 text-amber-600 border-amber-200",
    btnColor: "bg-amber-600 hover:bg-amber-700",
  },
  {
    id: "health",
    title: "Healthcare & Free Surgeries",
    desc: "Direct subsidies for clinical consultations, corrective surgeries, and pharmacy pools for approximately 25–30 destitute patients.",
    icon: "🏥",
    image: "/images/programs/healthcare.jpg",
    href: "/our-work/medical-assistance",
    accent: "bg-teal-50 text-[#005972] border-teal-200",
    btnColor: "bg-[#005972] hover:bg-[#004356]",
  },
  {
    id: "hospital",
    title: "Charity Hospital Network",
    desc: "Actively constructing an institutional charity hospital in Lahore to provide round-the-clock emergency care and zero-fee healing.",
    icon: "🏗️",
    image: "/images/programs/hospital_construction.jpg",
    href: "/our-work/hospital",
    accent: "bg-sky-50 text-[#009ee2] border-sky-200",
    btnColor: "bg-[#009ee2] hover:bg-[#0085be]",
  },
  {
    id: "rations",
    title: "Food & Family Ration Relief",
    desc: "Distributing dignified monthly nutrition packs with flour, oil, and lentils to widowed mothers and families below poverty lines.",
    icon: "🌾",
    image: "/images/programs/food_relief.jpg",
    href: "/our-work/social-welfare",
    accent: "bg-rose-50 text-[#d92525] border-rose-200",
    btnColor: "bg-[#d92525] hover:bg-[#c81e1e]",
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

        {/* 6 Real Photo Cards in Responsive 3-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-12">
          {INITIATIVES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col text-start shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              {/* Photographic Card Thumbnail */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className={`w-9 h-9 rounded-full flex items-center justify-center text-lg shadow-md border ${item.accent}`}>
                    {item.icon}
                  </span>
                  <span className="text-white text-xs font-bold drop-shadow">
                    {item.title}
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif font-bold text-lg text-slate-900 mb-2 leading-snug group-hover:text-[#005972] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                  {item.desc}
                </p>

                <Link
                  href={item.href}
                  className={`${item.btnColor} text-white font-bold text-xs px-5 py-2.5 rounded-full shadow transition-all hover:scale-105 flex items-center justify-center gap-1.5`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
