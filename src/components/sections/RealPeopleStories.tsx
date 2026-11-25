"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, ShieldCheck, Heart, Sparkles, CheckCircle2 } from "lucide-react";

const STORIES = [
  {
    id: "story-1",
    title: "Free Patient Clinical Care & Surgical Relief (Case #28)",
    category: "Clinical Healthcare",
    image: "/images/firstimg.jpg",
    video: "/videos/patient-case-1.mp4",
    desc: "Facilitated clinical care and surgical assistance in Shorkot for a patient whose family faced insurmountable private hospital fees.",
    quote: "Dignity was preserved, and world-class clinical attention was provided without any financial strain on our family.",
    consent: "Informed Patient & Guardian Consent Verified",
  },
  {
    id: "story-2",
    title: "Post-Operative Recovery & Medical Support (Case #19)",
    category: "Clinical Healthcare",
    image: "/images/2ndimg.jpg",
    video: "/videos/patient-case-2.mp4",
    desc: "Direct clinical care sponsorship and surgical post-operative monitoring arranged through our physician advisory network in District Jhang.",
    quote: "When medical costs were completely out of reach, Zulaid Chaudhary arranged free doctor consultations and medicine.",
    consent: "Verified Patient Video & Medical Consent",
  },
  {
    id: "story-3",
    title: "Trauma Recovery for Overburdened Cart Donkey",
    category: "Animal Welfare",
    image: "/images/3rdimg.jpg",
    video: null,
    desc: "Emergency roadside veterinary treatment for a working cart equine suffering deep harness lacerations and leg fracture near Shorkot bypass.",
    quote: "The animal received full splinting, antibiotics, and rest at our partner sanctuary.",
    consent: "Verified Rescue Log #0042",
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

                  <div className="absolute bottom-3 start-3 flex items-center gap-2">
                    <span className="text-[10px] font-bold bg-[#009ee2] text-white px-3 py-1 rounded-full uppercase tracking-wider shadow">
                      {s.category}
                    </span>
                    {s.video && (
                      <span className="text-[10px] font-bold bg-rose-600 text-white px-2.5 py-1 rounded-full uppercase tracking-wider shadow flex items-center gap-1 animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-white inline-block"></span>
                        Watch Video
                      </span>
                    )}
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
        <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 text-center flex flex-col gap-4 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 text-start">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#009ee2]">
                  {activeStory.category} • Authentic Case Record
                </span>
                <h3 className="font-serif font-bold text-xl text-slate-900 mt-0.5">
                  {activeStory.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveStory(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm shrink-0 transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Video Player */}
            {activeStory.video ? (
              <div className="w-full rounded-2xl overflow-hidden bg-black aspect-[16/10] sm:aspect-video flex items-center justify-center shadow-inner relative border border-slate-200">
                <video
                  src={activeStory.video}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                >
                  Your browser does not support HTML5 video playback.
                </video>
              </div>
            ) : null}

            <p className="text-xs sm:text-sm text-slate-600 text-start leading-relaxed">
              {activeStory.desc}
            </p>
            
            <div className="p-3.5 bg-emerald-50 text-[#15803d] rounded-2xl text-xs font-semibold text-start border border-emerald-200">
              &ldquo;{activeStory.quote}&rdquo;
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
              <span className="font-medium text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{activeStory.consent}</span>
              </span>
              <button
                onClick={() => setActiveStory(null)}
                className="bg-[#009ee2] text-white font-bold py-2 px-6 rounded-full hover:bg-[#0085be] transition-colors text-xs shadow-sm"
              >
                Close Video
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
