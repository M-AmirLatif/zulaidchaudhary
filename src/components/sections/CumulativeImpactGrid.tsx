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
  Sparkles,
} from "lucide-react";

const STATS = [
  {
    value: "~25–30",
    label: "Deserving Patients Treated",
    desc: "Facilitated free surgical interventions & critical diagnostics to date.",
    icon: Stethoscope,
    color: "text-[#1A56DB] bg-blue-50",
  },
  {
    value: "1",
    label: "Charity Hospital Facility",
    desc: "Active structural groundwork underway for free institutional care.",
    icon: Building2,
    color: "text-accent-gold-dark bg-amber-50",
  },
  {
    value: "4",
    label: "Animal Rescue Wings",
    desc: "Equine draught clinic, stray trauma rescue, bird rehab, and anti-cruelty.",
    icon: PawPrint,
    color: "text-[#16A34A] bg-emerald-50",
  },
  {
    value: "1,200 +",
    label: "Native Trees Planted",
    desc: "Urban forestry and clean groundwater environmental drives.",
    icon: Trees,
    color: "text-emerald-700 bg-emerald-50",
  },
  {
    value: "100 +",
    label: "Family Ration Kits",
    desc: "Monthly dignified food packages distributed to widowed mothers.",
    icon: ShoppingBag,
    color: "text-amber-700 bg-amber-50",
  },
  {
    value: "100 %",
    label: "Direct Pharmacy Aid",
    desc: "Strictly zero administrative deduction on clinical patient donations.",
    icon: ShieldCheck,
    color: "text-[#0F766E] bg-teal-50",
  },
  {
    value: "2",
    label: "Languages from Day One",
    desc: "Comprehensive English & Urdu Nastaliq RTL across all public & admin views.",
    icon: Languages,
    color: "text-blue-700 bg-blue-50",
  },
  {
    value: "100 %",
    label: "Immutable Audit Log",
    desc: "Every administrative mutation recorded with full JSON state diffs.",
    icon: FileCheck,
    color: "text-purple-700 bg-purple-50",
  },
  {
    value: "24/7",
    label: "Emergency Inquiries",
    desc: "Priority healthcare casework and emergency animal rescue triage.",
    icon: Clock,
    color: "text-red-700 bg-red-50",
  },
];

export function CumulativeImpactGrid() {
  return (
    <section className="py-20 px-4 bg-zinc-50/70 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto flex flex-col gap-14 items-center">
        
        {/* Header */}
        <div className="flex flex-col gap-3 text-center items-center max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1A56DB] uppercase tracking-wider">
            <span className="w-8 h-[2px] bg-[#1A56DB]" />
            <span>Since Inception We Have</span>
            <span className="w-8 h-[2px] bg-[#1A56DB]" />
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-primary-900 tracking-tight">
            Brought Hope to Communities with Your Help
          </h2>

          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
            Every counter is governed by admin-verified records. No fabricated statistics or unverified marketing figures.
          </p>
        </div>

        {/* 3x3 Responsive Grid of 9 Counters (Exact MTJ Grid Pattern) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {STATS.map((s, idx) => {
            const IconComponent = s.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-zinc-200/90 p-8 flex flex-col items-center text-center gap-4 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${s.color} shadow-sm group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-7 h-7" />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-serif font-bold text-3xl sm:text-4xl text-primary-900 tracking-tight">
                    {s.value}
                  </span>
                  <span className="font-sans font-bold text-sm text-charcoal">
                    {s.label}
                  </span>
                </div>

                <p className="text-xs text-charcoal-muted leading-relaxed max-w-xs font-sans">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
