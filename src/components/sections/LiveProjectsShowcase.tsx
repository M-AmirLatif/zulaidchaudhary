import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Heart, ArrowRight, Sparkles } from "lucide-react";

const PROJECTS = [
  {
    id: "proj-1",
    title: "Free Surgical Care & Cardiac Assistance",
    category: "Healthcare",
    categoryClass: "bg-purple-100 text-purple-800",
    barColor: "bg-purple-600",
    image: "/images/2ndimg.jpg",
    desc: "Subsidizing surgical costs, implants, and pharmacy expenditures for destitute families facing medical insolvency.",
    goal: "PKR 25,00,000",
    achieved: "PKR 14,80,000",
    percentage: 59,
    ctaText: "Support Healthcare Services",
    href: "/our-work/medical-assistance",
  },
  {
    id: "proj-2",
    title: "Charity Hospital Structural Construction",
    category: "Hospital Project",
    categoryClass: "bg-blue-100 text-blue-800",
    barColor: "bg-[#1A56DB]",
    image: "/images/5th.jpg",
    desc: "Funding the foundational concrete work, zoning layout, and civil architecture for our future non-profit hospital.",
    goal: "PKR 1,00,00,000",
    achieved: "PKR 42,50,000",
    percentage: 42,
    ctaText: "Support Hospital Fund",
    href: "/our-work/hospital",
  },
  {
    id: "proj-3",
    title: "Working Donkey & Cart Equine Emergency Care",
    category: "Animal Welfare",
    categoryClass: "bg-emerald-100 text-status-green",
    barColor: "bg-[#16A34A]",
    image: "/images/3rdimg.jpg",
    desc: "Free mobile veterinary clinic for working cart donkeys in markets, hoof dressing, and hit-and-run animal rescue.",
    goal: "PKR 15,00,000",
    achieved: "PKR 9,20,000",
    percentage: 61,
    ctaText: "Sponsor Animal Rescue",
    href: "/our-work/animal-welfare",
  },
  {
    id: "proj-4",
    title: "Monthly Family Ration Bags & Widows Aid",
    category: "Social Relief",
    categoryClass: "bg-amber-100 text-amber-800",
    barColor: "bg-amber-600",
    image: "/images/firstimg.jpg",
    desc: "Supplying dignified staple food packs (flour, oil, lentils, tea) to verified impoverished single-parent households.",
    goal: "PKR 20,00,000",
    achieved: "PKR 16,30,000",
    percentage: 81,
    ctaText: "Donate a Ration Bag",
    href: "/our-work/social-welfare",
  },
];

export function LiveProjectsShowcase() {
  return (
    <section className="py-20 px-4 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1A56DB] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Targeted Impact Campaigns</span>
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-primary-900 tracking-tight">
              Our Projects: Where Your Support Meets Real Impact
            </h2>
            <p className="text-sm text-charcoal-muted leading-relaxed">
              Every project is managed with 100% verified allocation. Select a campaign below to sponsor direct patient treatments or infrastructure.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#1A56DB] hover:text-blue-800 transition-colors shrink-0 group"
          >
            <span>View All Foundation Projects</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image & Category */}
              <div>
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 start-3">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm ${p.categoryClass}`}>
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="font-serif font-bold text-base text-primary-900 leading-snug group-hover:text-[#1A56DB] transition-colors line-clamp-2">
                    {p.title}
                  </h3>

                  <p className="text-xs text-charcoal-muted leading-relaxed line-clamp-2">
                    {p.desc}
                  </p>

                  {/* Progress Bar (Exact MTJ Thematic Color) */}
                  <div className="pt-2">
                    <div className="w-full h-2 rounded-full bg-zinc-100 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${p.barColor}`}
                        style={{ width: `${p.percentage}%` }}
                      />
                    </div>

                    {/* Goal & Achieved in MTJ Notation */}
                    <div className="flex items-center justify-between text-[11px] font-medium text-zinc-500 pt-1.5 font-mono">
                      <span>Goal: {p.goal}</span>
                      <span className="font-bold text-primary-900">{p.percentage}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <Link
                  href="/donate"
                  className="w-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold py-2.5 px-4 rounded-full text-xs shadow-sm transition-all hover:scale-[1.02] flex items-center justify-center gap-1.5 text-center"
                >
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>{p.ctaText}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
