import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Heart, ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    id: "proj-1",
    title: "Support Healthcare Services",
    subtitle: "Free Surgical & Clinical Patient Care",
    category: "Medical Assistance",
    image: "/images/2ndimg.jpg",
    imagePosition: "object-[center_top]",
    desc: "Facilitating surgeries, hospital OPD, and pharmacy prescriptions for approximately 25–30 destitute patients to date.",
    raised: "PKR 14,80,000",
    goal: "PKR 25,00,000",
    percentage: 59,
    ctaText: "Support Healthcare Services",
    href: "/our-work/medical-assistance",
  },
  {
    id: "proj-2",
    title: "Hospital Construction Fund",
    subtitle: "Building ZCF General & Welfare Hospital (Shorkot)",
    category: "Infrastructure",
    image: "/images/3rdimg.jpg",
    imagePosition: "object-[center_top]",
    desc: "Civil groundwork, emergency trauma units, and future charitable diagnostic wings for underserved families.",
    raised: "PKR 42,50,000",
    goal: "PKR 1,00,00,000",
    percentage: 42,
    ctaText: "Help in Hospital Construction",
    href: "/our-work/hospital",
  },
  {
    id: "proj-3",
    title: "Animal Welfare & Trauma Rescue",
    subtitle: "Mobile Clinics for Cart Donkeys & Strays",
    category: "Animal Welfare",
    image: "/images/4th.jpg",
    imagePosition: "object-[center_top]",
    desc: "Providing veterinary wounds treatment for working equines, shelter for street animals, and injured bird care.",
    raised: "PKR 9,20,000",
    goal: "PKR 15,00,000",
    percentage: 61,
    ctaText: "Sponsor Animal Rescue",
    href: "/our-work/animal-welfare",
  },
];

export function LiveProjectsShowcase() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* MTJ Exact Subtitle Pill */}
        <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-widest mb-2">
          <span className="w-8 h-[2px] bg-amber-500 inline-block" />
          <span>Our Projects</span>
          <span className="w-8 h-[2px] bg-amber-500 inline-block" />
        </div>

        <h2 className="font-serif font-extrabold text-2xl sm:text-4xl lg:text-[38px] text-slate-900 tracking-tight leading-tight text-center">
          Support Our Humanitarian Projects
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl text-center">
          Every project is managed with 100% verified allocation and direct ground tracking.
        </p>

        {/* 3 Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-12">
          {PROJECTS.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image & Category Pill */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className={`object-cover group-hover:scale-105 transition-transform duration-500 ${
                    p.imagePosition || "object-[center_top]"
                  }`}
                />
                <div className="absolute top-4 start-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#005972] shadow-sm">
                  {p.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif font-bold text-xl text-slate-900 mb-1 group-hover:text-[#009ee2] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#16a34a] mb-3">
                    {p.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>

                {/* Progress Bar & Financials */}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-4">
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                      <span className="text-slate-500">Raised: <strong className="text-slate-900">{p.raised}</strong></span>
                      <span className="text-[#16a34a]">{p.percentage}%</span>
                    </div>
                    {/* Progress Track */}
                    <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#16a34a] transition-all duration-1000"
                        style={{ width: `${p.percentage}%` }}
                      />
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Goal: {p.goal}
                    </div>
                  </div>

                  {/* MTJ Exact Emerald Green Action Button */}
                  <Link
                    href={`/donate?project=${encodeURIComponent(p.title)}`}
                    className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-xs sm:text-sm py-3 rounded-full shadow transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    <span>{p.ctaText}</span>
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#009ee2] hover:text-[#007cb0] transition-colors"
          >
            <span>View All Active Foundation Projects</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>

      </div>
    </section>
  );
}
