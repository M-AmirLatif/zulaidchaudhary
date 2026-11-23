"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import {
  Trees,
  Droplets,
  ShieldCheck,
  CheckCircle2,
  Heart,
  Send,
  Leaf,
  Wind,
  Sprout,
  ArrowRight,
} from "lucide-react";

const ECO_PROJECTS = [
  {
    icon: "🌱",
    title: "Urban Tree Plantation & Afforestation",
    badge: "Climate Resilience",
    desc: "Planting native trees (Neem, Peepal, Shisham, Moringa) in urban heat-islands and rural perimeters to combat smog, improve air quality, and restore natural biodiversity.",
    metrics: "1,200+ Native Saplings Planted",
  },
  {
    icon: "💧",
    title: "Deep Bore Community Water Wells",
    badge: "Clean Water Access",
    desc: "Installing heavy-duty solar-powered deep bore water filtration systems in drought-affected and arsenic-heavy rural communities across Punjab and Sindh.",
    metrics: "Clean Potable Water for Thousands",
  },
  {
    icon: "🚯",
    title: "Plastic Waste Reduction & Recycling",
    badge: "Zero Waste Stewardship",
    desc: "Educational community workshops, cloth bag distributions in vegetable markets, and riverside clean-up drives discouraging single-use plastic disposal.",
    metrics: "Community-Led Clean Drives",
  },
  {
    icon: "🐦",
    title: "Wildlife Habitat Conservation",
    badge: "Ecosystem Balance",
    desc: "Creating bird nesting boxes, earthen water bowls in summer heatwaves, and preserving indigenous tree canopies protecting local avian species.",
    metrics: "Urban Bird Sanctuaries",
  },
];

export default function EnvironmentPage() {
  const [activeTab, setActiveTab] = useState<"programs" | "water_request">("programs");
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    villageOrArea: "",
    district: "",
    populationServed: "500",
    currentWaterSource: "Contaminated Canal / Broken Handpump",
    contactPerson: "",
    contactPhone: "",
    additionalDetails: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const ref = `ZCF-WELL-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(ref);
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <div className="w-full py-14 px-4 bg-surface-cream">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* 1. Header Banner */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-[#166534] border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
            <Trees className="w-4 h-4" />
            <span>ENVIRONMENT, CLIMATE PROTECTION & CLEAN WATER</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-900 tracking-tight max-w-3xl">
            Protecting Our Planet, Restoring Clean Water
          </h1>

          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl leading-relaxed">
            Practical ecological interventions: massive native tree planting, clean water access for remote villages, and responsible stewardship for future generations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <div className="bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-bold text-[#16A34A] shadow-sm">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Native Tree Saplings with Ongoing Survival Care</span>
            </div>

            <div className="bg-blue-50 border border-blue-200 px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-semibold text-[#1A56DB] shadow-sm">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>WHO Potable Water Safety Standards Tested</span>
            </div>
          </div>
        </div>

        {/* 2. Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 border-b border-zinc-200 pb-2">
          <button
            onClick={() => setActiveTab("programs")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === "programs"
                ? "bg-[#1A56DB] text-white shadow-md"
                : "bg-white text-zinc-600 hover:bg-zinc-100"
            }`}
          >
            Ecological Initiatives
          </button>

          <button
            onClick={() => setActiveTab("water_request")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === "water_request"
                ? "bg-[#1A56DB] text-white shadow-md"
                : "bg-white text-zinc-600 hover:bg-zinc-100"
            }`}
          >
            Request Community Water Well
          </button>
        </div>

        {/* 3. Tab 1: Ecological Initiatives */}
        {activeTab === "programs" && (
          <div className="flex flex-col gap-10 animate-in fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ECO_PROJECTS.map((p) => (
                <div
                  key={p.title}
                  className="bg-white rounded-3xl border border-zinc-200/80 p-8 shadow-sm flex flex-col justify-between gap-6 hover:shadow-md transition-shadow group"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        {p.icon}
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-emerald-100 text-[#166534]">
                        {p.badge}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-xl text-primary-900 mt-2">
                      {p.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                      {p.desc}
                    </p>

                    <div className="pt-2 text-xs font-bold text-[#16A34A] flex items-center gap-1.5">
                      <Sprout className="w-4 h-4" />
                      <span>{p.metrics}</span>
                    </div>
                  </div>

                  <div className="border-t border-zinc-100 pt-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-400">Green Stewardship</span>
                    <Link
                      href="/donate"
                      className="text-xs font-bold text-[#1A56DB] hover:underline flex items-center gap-1"
                    >
                      <span>Sponsor a Tree / Well</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Donation Banner */}
            <div className="bg-gradient-to-r from-emerald-950 via-primary-950 to-primary-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-emerald-900/50">
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-widest text-accent-gold font-bold">
                  Sadaqah Jariyah in Clean Water
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl">
                  Fund a Solar Deep Water Well or Community Tree Drive
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-lg leading-relaxed">
                  Water is life. Providing clean drinking water protects vulnerable children from water-borne diseases like cholera and hepatitis.
                </p>
              </div>

              <Link
                href="/donate"
                className="bg-[#16A34A] hover:bg-[#15803D] text-white font-bold px-8 py-3.5 rounded-full text-xs sm:text-sm shadow-xl transition-all hover:scale-105 whitespace-nowrap flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Donate to Water & Tree Fund</span>
              </Link>
            </div>
          </div>
        )}

        {/* 4. Tab 2: Request Community Water Well */}
        {activeTab === "water_request" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in">
            <div className="lg:col-span-5 bg-primary-900 text-white rounded-3xl p-8 shadow-xl flex flex-col gap-5">
              <span className="text-xs uppercase tracking-widest text-accent-gold font-bold">
                Water Well Eligibility
              </span>
              <h3 className="font-serif font-bold text-2xl text-white">
                How We Select Well Locations
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Foundation water wells are constructed in communal locations (near village schools, clinics, or communal squares) ensuring free public access for everyone without discrimination.
              </p>

              <div className="flex flex-col gap-3 pt-2">
                <div className="flex items-start gap-3 text-xs text-zinc-200">
                  <span className="w-5 h-5 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center shrink-0 font-bold">1</span>
                  <span>Groundwater depth and hydrological feasibility survey conducted by engineering teams.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-zinc-200">
                  <span className="w-5 h-5 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center shrink-0 font-bold">2</span>
                  <span>Water sample sent for laboratory chemical and bacteriological purity certification.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-zinc-200">
                  <span className="w-5 h-5 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center shrink-0 font-bold">3</span>
                  <span>Community water committee established for ongoing pump maintenance.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-3xl border border-zinc-200 p-6 sm:p-10 shadow-xl">
              {submittedRef ? (
                <div className="flex flex-col items-center text-center gap-5 py-8 animate-in fade-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#16A34A] flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h3 className="font-serif font-bold text-2xl text-primary-900">
                    Water Well Request Logged
                  </h3>

                  <p className="text-sm text-charcoal-muted max-w-md leading-relaxed">
                    Thank you. Your request for a community water well has been routed to our rural engineering survey desk.
                  </p>

                  <div className="p-4 rounded-2xl bg-blue-50 border-2 border-blue-200 text-center w-full max-w-sm">
                    <span className="text-xs text-zinc-500 uppercase tracking-wider block font-semibold">
                      Your Request Reference
                    </span>
                    <span className="font-mono font-bold text-xl text-[#1A56DB] block mt-1">
                      {submittedRef}
                    </span>
                  </div>

                  <button
                    onClick={() => setSubmittedRef(null)}
                    className="bg-[#1A56DB] text-white font-bold px-6 py-2.5 rounded-full text-xs shadow hover:bg-[#1546b8] transition-colors mt-2"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="border-b border-zinc-100 pb-3">
                    <h3 className="font-serif font-bold text-xl text-primary-900">
                      Community Water System Request Form
                    </h3>
                    <p className="text-xs text-charcoal-muted mt-1">
                      Help us evaluate the water crisis in your village or community.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-700">Village / Town Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.villageOrArea}
                        onChange={(e) => setFormData({ ...formData, villageOrArea: e.target.value })}
                        placeholder="e.g. Chak 42-RB"
                        className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-700">District / Province *</label>
                      <input
                        type="text"
                        required
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        placeholder="e.g. Kasur, Punjab"
                        className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-700">Approximate Population Served *</label>
                      <input
                        type="number"
                        required
                        value={formData.populationServed}
                        onChange={(e) => setFormData({ ...formData, populationServed: e.target.value })}
                        placeholder="e.g. 500"
                        className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-700">Current Water Source *</label>
                      <input
                        type="text"
                        required
                        value={formData.currentWaterSource}
                        onChange={(e) => setFormData({ ...formData, currentWaterSource: e.target.value })}
                        placeholder="e.g. Brackish canal water"
                        className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-700">Community Liaison Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        placeholder="Focal Person Name"
                        className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-700">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.contactPhone}
                        onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                        placeholder="+92 3XX XXXXXXX"
                        className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-700">Additional Water Quality Details *</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.additionalDetails}
                      onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                      placeholder="Explain if villagers are falling ill due to contaminated water or walking miles to fetch water..."
                      className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1A56DB] hover:bg-[#1546b8] text-white font-bold py-3.5 rounded-full text-xs sm:text-sm shadow-md transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Submitting Well Request..." : "Submit Water Well Request"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
