"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import {
  Heart,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Plus,
  Minus,
  CheckCircle2,
} from "lucide-react";

const HERO_SLIDES = [
  {
    image: "/images/2ndimg.jpg",
    objectPosition: "28% 20%",
    badge: "HUMANITY • HOPE • JUSTICE",
    taglineUrdu: "تشخیص سے علاج تک",
    subtitleUrdu: "ہر مستحق کے ساتھ",
    titleEn: "A Little From You, A LOT FOR SOMEONE",
    subtitleEn:
      "Facilitating free clinical surgeries and medicines for approximately 25–30 destitute patients to date, with ZCF General & Welfare Hospital actively under construction in Shorkot.",
    primaryCtaText: "Support Healthcare Now",
    primaryCtaLink: "/donate",
  },
  {
    image: "/images/firstimg.jpg",
    objectPosition: "center 20%",
    badge: "SERVING HUMANITY",
    taglineUrdu: "امید اور خدمت خلق",
    subtitleUrdu: "بلا تفریق انسانیت کی خدمت",
    titleEn: "Restoring Dignity Through Compassion & Healthcare",
    subtitleEn:
      "Founded by Zulaid Chaudhary with an international humanitarian vision: free medical treatment, animal welfare, and clean water for underserved communities.",
    primaryCtaText: "Join Support Community",
    primaryCtaLink: "/get-involved",
  },
  {
    image: "/images/5th_portrait.jpg",
    objectPosition: "center 25%",
    badge: "GRASSROOTS INTERVENTION",
    taglineUrdu: "شفافیت اور دیانت داری",
    subtitleUrdu: "ہر پائی کا مکمل حساب",
    titleEn: "Real Ground Impact, 100% Verified Records",
    subtitleEn:
      "Zero administrative inflation. Direct pharmacy subsidies, ethical healthcare, and community empowerment with complete digital transparency.",
    primaryCtaText: "Explore Projects",
    primaryCtaLink: "/projects",
  },
];

const PROJECT_OPTIONS: Record<string, string[]> = {
  "Health & Free Surgeries": [
    "Free Patient Surgery & OPD Care",
    "Critical Pediatric Cardiac Subsidies",
    "Prescription Medicine & Pharmacy Pool",
  ],
  "Hospital Construction Fund": [
    "ZCF General & Welfare Hospital Groundwork (Shorkot)",
    "Future Emergency & Clinical Zones",
    "Charity Dialysis & Diagnostic Ward",
  ],
  "Animal Welfare & Emergency Rescue": [
    "Equine & Working Donkey Mobile Clinics",
    "Stray Dog Trauma Rescue & Shelter",
    "Wildlife & Injured Bird Care",
  ],
  "Food & Monthly Ration Relief": [
    "Monthly Family Ration Bag (Deserving Widows)",
    "Emergency Food & Ration Relief Packs",
  ],
  "Clean Water & Environment": [
    "Deep Bore Community Water Well",
    "Native Tree Plantation Drives",
  ],
  "Palestine & Emergency Crises": [
    "Civilian Emergency Medical Aid",
    "Emergency Food & Clean Water Consignment",
  ],
};

const PRESET_AMOUNTS: Record<string, number[]> = {
  PKR: [2500, 5000, 10000, 25000, 50000, 100000],
  USD: [25, 50, 100, 250, 500, 1000],
  GBP: [20, 40, 80, 200, 400, 800],
  EUR: [25, 50, 100, 250, 500, 1000],
  AED: [100, 200, 400, 1000, 2000, 4000],
  CAD: [35, 70, 150, 350, 700, 1500],
};

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Quick Donation Matrix state (Exact MTJ 8 Parameters)
  const [frequency, setFrequency] = useState<"ONCE" | "MONTHLY">("ONCE");
  const [givingType, setGivingType] = useState<"General" | "Sadqa" | "Zakat">("General");
  const [selectedProject, setSelectedProject] = useState("Health & Free Surgeries");
  const [selectedSubProject, setSelectedSubProject] = useState(
    PROJECT_OPTIONS["Health & Free Surgeries"][0]
  );
  const [currency, setCurrency] = useState<"PKR" | "USD" | "GBP" | "EUR" | "AED" | "CAD">("PKR");
  const [amount, setAmount] = useState<number>(10000);
  const [customAmount, setCustomAmount] = useState<string>("");

  // Slide autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handleProjectChange = (proj: string) => {
    setSelectedProject(proj);
    if (PROJECT_OPTIONS[proj]) {
      setSelectedSubProject(PROJECT_OPTIONS[proj][0]);
    }
  };

  const effectiveAmount = customAmount ? parseFloat(customAmount) || 0 : amount;

  const current = HERO_SLIDES[currentSlide];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#d9f1fc] via-[#edf7fd] to-[#f8fbfd] pt-6 pb-16 lg:pb-24 overflow-hidden">
      {/* 1. MTJ Signature Hero Banner Composition */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-white/70 backdrop-blur-md border border-[#cbe7f7] p-6 sm:p-10 lg:p-12 shadow-xl shadow-sky-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Founder Photo & Visual Collage with Circular Arrows */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src={current.image}
                  alt={current.titleEn}
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
                  style={{ objectPosition: (current as any).objectPosition || "center 20%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 start-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#005972] shadow flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>{current.badge}</span>
                </div>

                {/* Bottom Photo Caption */}
                <div className="absolute bottom-4 start-4 end-4 text-white">
                  <p className="text-xs uppercase tracking-wider text-sky-200 font-semibold">Founder & Patron</p>
                  <p className="text-base sm:text-lg font-bold font-serif">Zulaid Chaudhary</p>
                  <p className="text-[11px] text-zinc-300">~25-30 Free Patient Surgeries • ZCF General & Welfare Hospital (Shorkot)</p>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center justify-between mt-4 px-2">
                <div className="flex items-center gap-2">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Slide ${idx + 1}`}
                      className={`h-2.5 rounded-full transition-all ${
                        idx === currentSlide ? "w-8 bg-[#009ee2]" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
                    }
                    className="w-9 h-9 rounded-full bg-white shadow-md border border-slate-200 text-slate-700 hover:bg-[#009ee2] hover:text-white flex items-center justify-center transition-all"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
                    }
                    className="w-9 h-9 rounded-full bg-white shadow-md border border-slate-200 text-slate-700 hover:bg-[#009ee2] hover:text-white flex items-center justify-center transition-all"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Nastaliq Urdu Calligraphy + Emotional English Copy */}
            <div className="lg:col-span-7 flex flex-col justify-center text-start">
              
              {/* Nastaliq Urdu Calligraphy Block */}
              <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-[#f0f8fd] border border-[#d6ecfa]" dir="rtl">
                <div className="font-urdu text-2xl sm:text-3xl lg:text-4xl font-bold text-[#005972] leading-[1.65]">
                  {current.taglineUrdu}
                </div>
                <div className="font-urdu text-lg sm:text-2xl lg:text-3xl font-semibold text-[#16a34a] leading-[1.65] mt-6 sm:mt-7">
                  {current.subtitleUrdu}
                </div>
              </div>

              {/* Bold English Headline */}
              <h1 className="font-serif font-extrabold text-2xl sm:text-4xl lg:text-[42px] text-slate-900 leading-[1.2] tracking-tight">
                {current.titleEn}
              </h1>

              {/* Dignified Subtitle */}
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-2xl">
                {current.subtitleEn}
              </p>

              {/* Verified Trust Badges */}
              <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-slate-200/80">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#005972]">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a]" />
                  <span>100% Direct Medical Care</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#005972]">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a]" />
                  <span>Audit-Tracked Subsidies</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#005972]">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a]" />
                  <span>Animal Trauma Rescue</span>
                </div>
              </div>

              {/* Quick Action CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mt-6">
                <Link
                  href={current.primaryCtaLink}
                  className="bg-[#d92525] hover:bg-[#b91c1c] text-white font-bold px-6 sm:px-8 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105 flex items-center gap-2 text-sm"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>{current.primaryCtaText}</span>
                </Link>
                <Link
                  href="/projects"
                  className="bg-[#005972] hover:bg-[#004356] text-white font-semibold px-6 py-3.5 rounded-xl shadow transition-all text-sm"
                >
                  View Live Projects
                </Link>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* 2. MTJ Iconic Mint-Green Quick Donation Matrix (bg-[#eaf5ed]) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 relative z-30">
        <div className="bg-[#eaf5ed] rounded-3xl border border-[#cbe7d3] p-6 sm:p-8 shadow-xl">
          
          {/* Top Row: Heading + 4 Dropdowns */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-[#c2e4cc]">
            
            {/* Title */}
            <div className="flex items-center shrink-0">
              <span className="font-serif font-extrabold text-2xl sm:text-3xl text-[#16a34a] tracking-tight">
                Donate
              </span>
            </div>

            {/* 4 Form Selectors */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full lg:w-auto lg:flex-1 lg:justify-end">
              
              {/* Frequency */}
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Frequency
                </label>
                <select
                  value={frequency}
                  onChange={(e: any) => setFrequency(e.target.value)}
                  className="w-full bg-white text-slate-800 text-xs font-bold py-2 px-3 rounded-lg border border-[#badfc4] focus:outline-none focus:ring-2 focus:ring-[#16a34a]"
                >
                  <option value="ONCE">Give Once</option>
                  <option value="MONTHLY">Give Monthly</option>
                </select>
              </div>

              {/* Category */}
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Category
                </label>
                <select
                  value={givingType}
                  onChange={(e: any) => setGivingType(e.target.value)}
                  className="w-full bg-white text-slate-800 text-xs font-bold py-2 px-3 rounded-lg border border-[#badfc4] focus:outline-none focus:ring-2 focus:ring-[#16a34a]"
                >
                  <option value="General">General</option>
                  <option value="Sadqa">Sadqa</option>
                  <option value="Zakat">Zakat</option>
                </select>
              </div>

              {/* Projects */}
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Projects
                </label>
                <select
                  value={selectedProject}
                  onChange={(e) => handleProjectChange(e.target.value)}
                  className="w-full bg-white text-slate-800 text-xs font-bold py-2 px-3 rounded-lg border border-[#badfc4] focus:outline-none focus:ring-2 focus:ring-[#16a34a]"
                >
                  {Object.keys(PROJECT_OPTIONS).map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sub Project */}
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Sub Project
                </label>
                <select
                  value={selectedSubProject}
                  onChange={(e) => setSelectedSubProject(e.target.value)}
                  className="w-full bg-white text-slate-800 text-xs font-bold py-2 px-3 rounded-lg border border-[#badfc4] focus:outline-none focus:ring-2 focus:ring-[#16a34a]"
                >
                  {PROJECT_OPTIONS[selectedProject]?.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

            </div>

          </div>

          {/* Bottom Row: Currency, Stepper, Custom Input, and RED Donate Button */}
          <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Currency selector & Presets */}
            <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
              
              {/* Currency Selector */}
              <div className="flex items-center gap-1.5 bg-white border border-[#badfc4] rounded-lg px-2.5 py-1.5">
                <span className="text-[11px] font-bold text-slate-500 uppercase">Currency:</span>
                <select
                  value={currency}
                  onChange={(e: any) => {
                    const c = e.target.value;
                    setCurrency(c);
                    setAmount(PRESET_AMOUNTS[c][2]);
                    setCustomAmount("");
                  }}
                  className="bg-transparent text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
                >
                  {(["PKR", "USD", "GBP", "EUR", "AED", "CAD"] as const).map((curr) => (
                    <option key={curr} value={curr}>
                      {curr}
                    </option>
                  ))}
                </select>
              </div>

              {/* Stepper Amount [-] PKR 10,000 [+] */}
              <div className="flex items-center bg-white border border-[#badfc4] rounded-lg p-1">
                <button
                  type="button"
                  onClick={() => {
                    const presets = PRESET_AMOUNTS[currency];
                    const currentIndex = presets.indexOf(amount);
                    if (currentIndex > 0) {
                      setAmount(presets[currentIndex - 1]);
                      setCustomAmount("");
                    } else if (amount > 500) {
                      setAmount(Math.max(500, amount - 1000));
                      setCustomAmount("");
                    }
                  }}
                  className="w-7 h-7 rounded bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 font-bold transition-all"
                  aria-label="Decrease amount"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 font-bold text-sm text-[#005972]">
                  {currency} {effectiveAmount.toLocaleString()}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const presets = PRESET_AMOUNTS[currency];
                    const currentIndex = presets.indexOf(amount);
                    if (currentIndex >= 0 && currentIndex < presets.length - 1) {
                      setAmount(presets[currentIndex + 1]);
                      setCustomAmount("");
                    } else {
                      setAmount(amount + 5000);
                      setCustomAmount("");
                    }
                  }}
                  className="w-7 h-7 rounded bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 font-bold transition-all"
                  aria-label="Increase amount"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Quick Presets */}
              <div className="hidden xl:flex items-center gap-1.5">
                {PRESET_AMOUNTS[currency].slice(0, 4).map((val) => {
                  const active = !customAmount && amount === val;
                  return (
                    <button
                      key={val}
                      type="button"
                      onClick={() => {
                        setAmount(val);
                        setCustomAmount("");
                      }}
                      className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all ${
                        active
                          ? "bg-[#16a34a] text-white shadow"
                          : "bg-white text-slate-700 border border-[#badfc4] hover:bg-emerald-50"
                      }`}
                    >
                      {val.toLocaleString()}
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Custom Amount + Red Donate Button */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <input
                type="number"
                placeholder={`Other Amount (${currency})`}
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-36 sm:w-44 bg-white text-xs font-bold text-slate-800 p-2.5 rounded-lg border border-[#badfc4] focus:outline-none focus:ring-2 focus:ring-[#16a34a]"
              />

              {/* MTJ Exact Solid Red Donate Button */}
              <Link
                href={`/donate?amount=${effectiveAmount}&currency=${currency}&project=${encodeURIComponent(
                  selectedProject
                )}&type=${givingType}&freq=${frequency}`}
                className="bg-[#d92525] hover:bg-[#b91c1c] text-white font-extrabold px-8 py-3 rounded-xl text-sm sm:text-base shadow-lg transition-all hover:scale-105 flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Donate</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
