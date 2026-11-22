import { Sparkles } from "lucide-react";

const SDGS = [
  { num: "01", name: "No Poverty", color: "bg-[#E5243B]", desc: "Direct Ration & Financial Aid" },
  { num: "03", name: "Good Health & Well-Being", color: "bg-[#4C9F38]", desc: "Free Surgeries & Hospital Project" },
  { num: "04", name: "Quality Education", color: "bg-[#C5192D]", desc: "Schooling & Youth Literacy Grants" },
  { num: "06", name: "Clean Water & Sanitation", color: "bg-[#26BDE2]", desc: "Community Wells & Safe Aquifers" },
  { num: "10", name: "Reduced Inequalities", color: "bg-[#DD1367]", desc: "Serving Vulnerable Deserving Families" },
  { num: "13", name: "Climate Action", color: "bg-[#3F7E44]", desc: "Tree Plantation & Pollution Awareness" },
  { num: "15", name: "Life on Land", color: "bg-[#56C02B]", desc: "Working Equine & Animal Rescue" },
  { num: "16", name: "Peace, Justice & Human Rights", color: "bg-[#00689D]", desc: "International Lawful Advocacy" },
];

export function GlobalGoalsSDG() {
  return (
    <section className="py-14 px-4 bg-white border-b border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 items-center">
        
        <div className="flex flex-col gap-1.5 text-center items-center">
          <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
            International Alignment
          </span>
          <h3 className="font-serif font-bold text-xl sm:text-2xl text-primary-900">
            Committed to the United Nations Sustainable Development Goals
          </h3>
        </div>

        {/* SDG Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 w-full">
          {SDGS.map((sdg) => (
            <div
              key={sdg.num}
              className={`${sdg.color} text-white rounded-2xl p-3.5 flex flex-col justify-between min-h-[110px] shadow-sm hover:scale-105 hover:shadow-lg transition-transform duration-300`}
            >
              <span className="font-mono font-bold text-lg opacity-80">
                {sdg.num}
              </span>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-[11px] leading-tight">
                  {sdg.name}
                </span>
                <span className="text-[9px] opacity-75 mt-0.5 line-clamp-1">
                  {sdg.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
