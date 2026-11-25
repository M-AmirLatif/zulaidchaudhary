import {
  Stethoscope,
  Building2,
  PawPrint,
  Trees,
  ShoppingBag,
  ShieldCheck,
  Languages,
  FileCheck,
  Clock,
} from "lucide-react";

const STATS = [
  {
    value: "~25–30",
    label: "Deserving Patients Treated",
    desc: "Facilitated free surgical interventions & critical diagnostics to date.",
    icon: Stethoscope,
    bgCircle: "bg-orange-100 text-orange-600",
  },
  {
    value: "1",
    label: "Charity Hospital Facility",
    desc: "Active structural groundwork underway in Shorkot for free institutional care.",
    icon: Building2,
    bgCircle: "bg-sky-100 text-[#009ee2]",
  },
  {
    value: "4",
    label: "Animal Rescue Wings",
    desc: "Equine draught clinic, stray trauma rescue, bird rehab, and anti-cruelty.",
    icon: PawPrint,
    bgCircle: "bg-red-100 text-red-600",
  },
  {
    value: "1,200 +",
    label: "Native Trees Planted",
    desc: "Urban forestry and clean groundwater environmental drives.",
    icon: Trees,
    bgCircle: "bg-emerald-100 text-[#16a34a]",
  },
  {
    value: "100 +",
    label: "Family Ration Kits",
    desc: "Monthly dignified food packages distributed to widowed mothers.",
    icon: ShoppingBag,
    bgCircle: "bg-amber-100 text-amber-600",
  },
  {
    value: "100 %",
    label: "Direct Pharmacy Aid",
    desc: "Strictly zero administrative deduction on clinical patient donations.",
    icon: ShieldCheck,
    bgCircle: "bg-teal-100 text-[#005972]",
  },
  {
    value: "2",
    label: "Languages from Day One",
    desc: "Comprehensive English & Urdu Nastaliq RTL across all public & admin views.",
    icon: Languages,
    bgCircle: "bg-indigo-100 text-indigo-600",
  },
  {
    value: "100 %",
    label: "Immutable Audit Log",
    desc: "Every administrative donation mutation recorded with full JSON state diffs.",
    icon: FileCheck,
    bgCircle: "bg-purple-100 text-purple-600",
  },
  {
    value: "24/7",
    label: "Emergency Inquiries",
    desc: "Priority healthcare casework and emergency animal rescue triage.",
    icon: Clock,
    bgCircle: "bg-rose-100 text-rose-600",
  },
];

export function CumulativeImpactGrid() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* MTJ Exact Subtitle Pill */}
        <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-widest mb-2">
          <span className="w-8 h-[2px] bg-amber-500 inline-block" />
          <span>Since Inception We Have</span>
          <span className="w-8 h-[2px] bg-amber-500 inline-block" />
        </div>

        <h2 className="font-serif font-extrabold text-2xl sm:text-4xl lg:text-[40px] text-slate-900 tracking-tight leading-tight text-center max-w-3xl">
          Brought Hope to Communities with Your Help
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl text-center">
          Every counter is governed by admin-verified records. No fabricated statistics or unverified marketing figures.
        </p>

        {/* 9 White Rounded Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-12">
          {STATS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 flex items-start gap-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Circular Icon with Color */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform ${s.bgCircle}`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Number & Text */}
                <div className="flex flex-col">
                  <div className="font-serif font-extrabold text-2xl sm:text-3xl text-slate-900 group-hover:text-[#009ee2] transition-colors leading-none mb-1.5">
                    {s.value}
                  </div>
                  <div className="font-bold text-sm text-slate-800 mb-1 leading-snug">
                    {s.label}
                  </div>
                  <div className="text-xs text-slate-500 leading-relaxed font-sans">
                    {s.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
