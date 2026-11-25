"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, ShieldCheck, Heart, Sparkles, CheckCircle2 } from "lucide-react";

const STORIES = [
  {
    id: "story-1",
    title: "Overcoming Pediatric Cardiac Illness (Case #28)",
    category: "Clinical Healthcare",
    image: "/images/firstimg.jpg",
    desc: "Facilitated urgent cardiac corrective surgery for a 9-year-old boy in Shorkot after his family faced insurmountable private hospital charges.",
    quote: "Dignity was preserved, and our child received world-class treatment without any financial burden.",
    consent: "Informed Guardian Consent Verified",
  },
  {
    id: "story-2",
    title: "Trauma Recovery for Overburdened Cart Donkey",
    category: "Animal Welfare",
    image: "/images/3rdimg.jpg",
    desc: "Emergency roadside veterinary treatment for a working cart equine suffering deep harness lacerations and leg fracture near Shorkot bypass.",
    quote: "The animal received full splinting, antibiotics, and rest at our partner sanctuary.",
    consent: "Verified Rescue Log #0042",
  },
  {
    id: "story-3",
    title: "Widowed Mother Sustained with Monthly Rations",
    category: "Family Welfare",
    image: "/images/2ndimg.jpg",
    desc: "Enrolled in our monthly food ration initiative, ensuring four school-age children maintain daily balanced nutrition without disruption.",
    quote: "When all hope seemed lost, the foundation provided steady nutritional security.",
    consent: "Consent Archived",
  },
];

export function RealPeopleStories() {
  const [activeStory, setActiveStory] = useState<any | null>(null);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* MTJ Exact Subtitle Pill */}
        <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-widest mb-2">
          <span className="w-8 h-[2px] bg-amber-500 inline-block" />
          <span>Stories of Hope</span>
          <span className="w-8 h-[2px] bg-amber-500 inline-block" />
        </div>

        <h2 className="font-serif font-extrabold text-2xl sm:text-4xl lg:text-[40px] text-slate-900 tracking-tight leading-tight text-center">
          Real People: Real Impact
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl text-center">
          Lives transformed through your generosity, recorded strictly under recorded informed consent.
        </p>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-12">
          {STORIES.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail with Play Icon */}
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/40 transition-colors" />

                  {/* Play Button Overlay */}
                  <button
                    onClick={() => setActiveStory(s)}
                    className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white/95 hover:bg-white text-[#009ee2] shadow-xl flex items-center justify-center transition-transform hover:scale-110"
                    aria-label={`View story ${s.title}`}
                  >
                    <Play className="w-6 h-6 fill-[#009ee2] ms-1 text-[#009ee2]" />
                  </button>

                  <div className="absolute bottom-3 start-3">
                    <span className="text-[10px] font-bold bg-[#009ee2] text-white px-3 py-1 rounded-full uppercase tracking-wider shadow">
                      {s.category}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col gap-3">
                  <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-[#009ee2] transition-colors leading-snug">
                    {s.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>

                  <blockquote className="text-xs italic text-slate-700 bg-slate-50 border-s-2 border-[#16a34a] p-3 rounded-e-lg">
                    &ldquo;{s.quote}&rdquo;
                  </blockquote>
                </div>
              </div>

              {/* Consent Footer */}
              <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-semibold text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a]" />
                <span>{s.consent}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Dialog for Story Video */}
      {activeStory && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 text-center flex flex-col gap-4 shadow-2xl">
            <h3 className="font-serif font-bold text-xl text-slate-900">
              {activeStory.title}
            </h3>
            <p className="text-sm text-slate-600">
              {activeStory.desc}
            </p>
            <div className="p-4 bg-emerald-50 text-[#15803d] rounded-2xl text-xs font-semibold">
              {activeStory.quote}
            </div>
            <button
              onClick={() => setActiveStory(null)}
              className="mt-2 bg-[#009ee2] text-white font-bold py-2.5 px-6 rounded-full self-center hover:bg-[#0085be] transition-colors text-xs"
            >
              Close Story
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
