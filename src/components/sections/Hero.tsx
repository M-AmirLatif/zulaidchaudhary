"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import {
  Heart,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Plus,
  Minus,
  HelpCircle,
} from "lucide-react";

const HERO_SLIDES = [
  {
    image: "/images/2ndimg.jpg",
    badge: "HUMANITY • HOPE • JUSTICE",
    title: "A Little From You, A LOT FOR SOMEONE",
    subtitle:
      "Facilitating free clinical surgeries and medicines for approximately 25–30 destitute patients to date, with our charity hospital actively under construction.",
    primaryCtaText: "Support Healthcare Now",
    primaryCtaLink: "/donate",
  },
  {
    image: "/images/5th.jpg",
    badge: "SERVING HUMANITY",
    title: "Restoring Dignity Through Compassion & Healthcare",
    subtitle:
      "Founded by Zulaid Chaudhary with an international vision: bridging medical hardship through ethical direct relief, animal rescue, and environmental care.",
    primaryCtaText: "Join Support Community",
    primaryCtaLink: "/get-involved",
  },
  {
    image: "/images/3rdimg.jpg",
    badge: "GRASSROOTS INTERVENTION",
    title: "Real Ground Impact, 100% Verified Records",
    subtitle:
      "Zero administrative inflation. Every rupee and dollar accounted for with digital audit tracking and direct patient pharmacy subsidies.",
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
    "Hospital Structural Groundwork",
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
    "Emergency Food & Ramadan Relief Packs",
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
  PKR: [1000, 2500, 5000, 10000, 25000, 50000],
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
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState<number>(5000);
  const [customAmount, setCustomAmount] = useState<string>("");

  // Slide autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Update sub-project when project changes
  const handleProjectChange = (proj: string) => {
    setSelectedProject(proj);
    if (PROJECT_OPTIONS[proj]) {
      setSelectedSubProject(PROJECT_OPTIONS[proj][0]);
    }
  };

  const effectiveAmount = (customAmount ? parseFloat(customAmount) || 0 : amount) * quantity;

  return (
    <section className="relative w-full bg-surface-cream pb-16 lg:pb-24">
      {/* 1. MTJ High-Definition Full-Width Hero Carousel */}
      <div className="relative w-full h-[520px] sm:h-[580px] lg:h-[640px] overflow-hidden bg-primary-950">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover object-[center_30%] scale-105 transition-transform duration-[8000ms] ease-out"
              />
              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-950/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent" />

              {/* Slide Content */}
              <div className="relative z-20 max-w-7xl mx-auto h-full flex flex-col justify-center px-4 sm:px-8 pb-20 max-w-2xl text-white">
                <div className="inline-flex items-center gap-2 bg-[#1A56DB]/80 text-white border border-blue-400/40 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4 w-fit shadow">
                  <Sparkles className="w-3.5 h-3.5 text-accent-gold" />
                  <span>{slide.badge}</span>
                </div>

                <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] drop-shadow-md">
                  {slide.title}
                </h1>

                <p className="mt-4 text-sm sm:text-base lg:text-lg text-zinc-200 leading-relaxed font-sans max-w-xl drop-shadow">
                  {slide.subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <Link
                    href={slide.primaryCtaLink}
                    className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold px-6 sm:px-8 py-3.5 rounded-full text-sm sm:text-base shadow-xl transition-all hover:scale-105 flex items-center gap-2"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    <span>{slide.primaryCtaText}</span>
                  </Link>

                  <Link
                    href="/about"
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold px-6 py-3.5 rounded-full text-sm transition-all"
                  >
                    Our Mission & Vision
                  </Link>
                </div>
              </div>
            </div>
          );
        })}

        {/* Carousel Arrow Controls */}
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
          }
          className="absolute start-4 sm:start-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md border border-white/30 flex items-center justify-center transition-all"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
          className="absolute end-4 sm:end-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md border border-white/30 flex items-center justify-center transition-all"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-28 sm:bottom-24 inset-x-0 z-20 flex justify-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentSlide ? "w-8 bg-[#1A56DB]" : "w-2 bg-white/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 2. Flagship Overlaid Quick Donation Box (Exact MTJ 8-Parameter Matrix) */}
      <div className="max-w-7xl mx-auto px-4 -mt-20 sm:-mt-24 relative z-30">
        <div className="bg-white rounded-3xl border border-zinc-200/80 p-6 sm:p-8 shadow-2xl">
          
          {/* Top Row: Frequency Toggles & Islamic Giving Toggles */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-zinc-100">
            {/* Frequency Toggle (Give Once vs Give Monthly) */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider hidden sm:inline">
                Frequency:
              </span>
              <div className="bg-zinc-100 p-1 rounded-full flex text-xs font-bold text-charcoal">
                <button
                  type="button"
                  onClick={() => setFrequency("ONCE")}
                  className={`px-4 py-1.5 rounded-full transition-all ${
                    frequency === "ONCE"
                      ? "bg-[#1A56DB] text-white shadow-sm"
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  Give Once
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency("MONTHLY")}
                  className={`px-4 py-1.5 rounded-full transition-all ${
                    frequency === "MONTHLY"
                      ? "bg-[#1A56DB] text-white shadow-sm"
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  Give Monthly
                </button>
              </div>
            </div>

            {/* Giving Category (General, Sadqa, Zakat) */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider hidden sm:inline">
                Donation Type:
              </span>
              <div className="bg-zinc-100 p-1 rounded-full flex text-xs font-bold text-charcoal">
                {(["General", "Sadqa", "Zakat"] as const).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setGivingType(cat)}
                    className={`px-3 sm:px-4 py-1.5 rounded-full transition-all ${
                      givingType === cat
                        ? "bg-[#0F766E] text-white shadow-sm"
                        : "text-zinc-600 hover:text-zinc-900"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Regulatory Badge */}
            <div className="hidden lg:flex items-center gap-1.5 text-xs text-status-green font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Verified Allocation</span>
            </div>
          </div>

          {/* Form Matrix: 6 Grid Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5 pt-5 items-end">
            
            {/* Field 1: Projects */}
            <div className="lg:col-span-2">
              <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider block mb-1">
                Project Initiative
              </label>
              <select
                value={selectedProject}
                onChange={(e) => handleProjectChange(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-zinc-300 text-xs font-bold text-primary-900 bg-zinc-50/50 focus:outline-none focus:border-[#1A56DB]"
              >
                {Object.keys(PROJECT_OPTIONS).map((proj) => (
                  <option key={proj} value={proj}>
                    {proj}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 2: Contextual Sub-Project */}
            <div className="lg:col-span-2">
              <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider block mb-1">
                Designated Sub-Cause
              </label>
              <select
                value={selectedSubProject}
                onChange={(e) => setSelectedSubProject(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-zinc-300 text-xs font-medium text-charcoal bg-zinc-50/50 focus:outline-none focus:border-[#1A56DB]"
              >
                {PROJECT_OPTIONS[selectedProject]?.map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 3: Currency */}
            <div>
              <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider block mb-1">
                Currency
              </label>
              <select
                value={currency}
                onChange={(e: any) => {
                  setCurrency(e.target.value);
                  setAmount(PRESET_AMOUNTS[e.target.value][2]);
                  setCustomAmount("");
                }}
                className="w-full p-2.5 rounded-xl border border-zinc-300 text-xs font-bold text-charcoal bg-zinc-50/50 focus:outline-none"
              >
                {(["PKR", "USD", "GBP", "EUR", "AED", "CAD"] as const).map((curr) => (
                  <option key={curr} value={curr}>
                    {curr}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 4: Quantity Stepper */}
            <div>
              <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider block mb-1">
                Shares / Quantity
              </label>
              <div className="flex items-center border border-zinc-300 rounded-xl bg-zinc-50/50 p-1">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-7 h-7 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-charcoal hover:bg-zinc-100 text-xs"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="flex-1 text-center font-bold text-xs text-primary-900">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-7 h-7 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-charcoal hover:bg-zinc-100 text-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Preset Amount Chips & Custom Input + CTA */}
          <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Presets Chips */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider hidden sm:inline me-1">
                Quick Amount:
              </span>
              {PRESET_AMOUNTS[currency].map((val) => {
                const isSelected = !customAmount && amount === val;
                return (
                  <button
                    key={val}
                    type="button"
                    onClick={() => {
                      setAmount(val);
                      setCustomAmount("");
                    }}
                    className={`py-1.5 px-3 rounded-full text-xs font-bold border transition-all ${
                      isSelected
                        ? "border-[#1A56DB] bg-[#1A56DB] text-white shadow-sm"
                        : "border-zinc-200 text-charcoal hover:bg-zinc-100"
                    }`}
                  >
                    {val.toLocaleString()}
                  </button>
                );
              })}
            </div>

            {/* Custom Amount Field + Emerald Donate CTA */}
            <div className="flex items-center gap-2 w-full lg:w-auto">
              <input
                type="number"
                placeholder={`Custom (${currency})`}
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full lg:w-40 p-2.5 rounded-xl border border-zinc-300 text-xs font-semibold bg-zinc-50/50 focus:outline-none focus:border-[#1A56DB]"
              />

              {/* MTJ Iconic Emerald Green Pill Button */}
              <Link
                href="/donate"
                className="bg-[#16A34A] hover:bg-[#15803D] text-white font-bold px-6 py-2.5 rounded-full text-xs sm:text-sm shadow-md transition-all hover:scale-105 flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <Heart className="w-4 h-4 fill-white shrink-0" />
                <span>
                  DONATE {currency} {effectiveAmount.toLocaleString()}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
