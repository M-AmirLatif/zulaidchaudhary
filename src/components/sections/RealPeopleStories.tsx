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
    desc: "Facilitated urgent cardiac corrective surgery for a 9-year-old boy in Lahore after his family faced insurmountable private hospital charges.",
    quote: "Dignity was preserved, and our child received world-class treatment without any financial burden.",
    consent: "Informed Guardian Consent Verified",
  },
  {
    id: "story-2",
    title: "Trauma Recovery for Overburdened Cart Donkey",
    category: "Animal Welfare",
    image: "/images/3rdimg.jpg",
    desc: "Emergency roadside veterinary treatment for a working cart equine suffering deep harness lacerations and leg fracture near Lahore wholesale fruit market.",
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
    <section className="py-20 px-4 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header */}
        <div className="flex flex-col gap-2 text-center items-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1A56DB] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Testimonials of Hope</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-primary-900 tracking-tight">
            Real People: Real Impact
          </h2>
          <p className="text-sm text-charcoal-muted leading-relaxed">
            Lives transformed through your generosity, recorded strictly under recorded informed consent (Rule 4).
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STORIES.map((s) => (
            <div
              key={s.id}
              className="bg-zinc-50/60 rounded-3xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
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
                  <div className="absolute inset-0 bg-primary-950/30 group-hover:bg-primary-950/40 transition-colors" />

                  {/* Play Button Overlay */}
                  <button
                    onClick={() => setActiveStory(s)}
                    className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-white/90 hover:bg-white text-[#1A56DB] shadow-lg flex items-center justify-center transition-transform hover:scale-110"
                    aria-label={`View story ${s.title}`}
                  >
                    <Play className="w-5 h-5 fill-[#1A56DB] ms-0.5" />
                  </button>

                  <div className="absolute bottom-3 start-3">
                    <span className="text-[10px] font-bold bg-[#1A56DB] text-white px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {s.category}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col gap-3">
                  <h3 className="font-serif font-bold text-lg text-primary-900 group-hover:text-[#1A56DB] transition-colors leading-snug">
                    {s.title}
                  </h3>

                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {s.desc}
                  </p>

                  <div className="bg-white p-3 rounded-2xl border border-zinc-200 text-xs italic text-charcoal font-serif">
                    &quot;{s.quote}&quot;
                  </div>
                </div>
              </div>

              {/* Consent Badge */}
              <div className="p-6 pt-0">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-status-green bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{s.consent}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video / Story Modal */}
      {activeStory && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border-2 border-accent-gold p-6 sm:p-8 max-w-lg w-full shadow-2xl flex flex-col gap-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
              <span className="font-serif font-bold text-lg text-primary-900">
                {activeStory.title}
              </span>
              <button
                onClick={() => setActiveStory(null)}
                className="text-zinc-400 hover:text-zinc-700 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-charcoal-muted leading-relaxed">
              {activeStory.desc}
            </p>

            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-primary-900 font-serif italic">
              &quot;{activeStory.quote}&quot;
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveStory(null)}
                className="bg-primary-900 text-white font-semibold text-xs px-5 py-2 rounded-xl"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
