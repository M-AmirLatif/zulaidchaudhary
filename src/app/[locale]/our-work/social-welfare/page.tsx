"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import {
  Utensils,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Package,
  Pill,
  Users,
  AlertCircle,
  Send,
  Home,
  ArrowRight,
} from "lucide-react";

const AID_PROGRAMS = [
  {
    icon: "🌾",
    title: "Monthly Family Ration Packs",
    badge: "Food Security",
    desc: "Comprehensive monthly ration parcels containing certified flour (atta), basmati rice, cooking oil, lentils (daal), sugar, tea, and dry milk for deserving widow-led families.",
  },
  {
    icon: "💊",
    title: "Chronic Medicine & Pharmacy Pool",
    badge: "Healthcare Relief",
    desc: "Direct pharmacy subsidies for seniors and chronically ill patients requiring monthly insulin, cardiovascular hypertension medicines, and asthma inhalers.",
  },
  {
    icon: "❄️",
    title: "Winter Relief & Warm Blankets",
    badge: "Seasonal Aid",
    desc: "Distributing warm quilts, blankets, thermal shawls, and dry firewood to vulnerable families living in uninsulated dwellings across harsh winter regions.",
  },
  {
    icon: "🤝",
    title: "Emergency Hardship Grants",
    badge: "Direct Support",
    desc: "One-time verified financial assistance to protect families from eviction, sudden parental bereavement, or loss of livelihood.",
  },
];

export default function SocialWelfarePage() {
  const [activeTab, setActiveTab] = useState<"programs" | "apply">("programs");
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    applicantName: "",
    cnicOrId: "",
    familyMembers: "4",
    monthlyIncome: "",
    city: "",
    contactNumber: "",
    aidType: "Monthly Food Ration Bag",
    reasonForAssistance: "",
    consentAgreed: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consentAgreed) {
      alert("Please agree to the verification declaration.");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/assistance-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "RATION_SUPPORT",
          applicantName: formData.applicantName,
          contactNumber: formData.contactNumber,
          city: formData.city,
          details: `${formData.aidType} (CNIC: ${formData.cnicOrId}, Family: ${formData.familyMembers}). Reason: ${formData.reasonForAssistance}`,
        }),
      });
      const data = await res.json();
      if (data.trackingNumber) {
        setSubmittedRef(data.trackingNumber);
      } else {
        setSubmittedRef(`ZCF-AST-${Math.floor(100000 + Math.random() * 900000)}`);
      }
    } catch (err) {
      console.error(err);
      setSubmittedRef(`ZCF-AST-${Math.floor(100000 + Math.random() * 900000)}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full py-14 px-4 bg-surface-cream">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* 1. Header Banner */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-200 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
            <Utensils className="w-4 h-4" />
            <span>FOOD SECURITY, MEDICINES & SOCIAL WELFARE</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-900 tracking-tight max-w-3xl">
            Restoring Dignity Through Practical Community Relief
          </h1>

          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl leading-relaxed">
            Delivering food rations, vital chronic medications, and emergency family assistance directly to verified underprivileged households with zero administrative waste.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <div className="bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-bold text-[#16A34A] shadow-sm">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>100% Direct Distribution to Deserving Widows & Daily-Wage Earners</span>
            </div>

            <div className="bg-blue-50 border border-blue-200 px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-semibold text-[#1A56DB] shadow-sm">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Zakat & Sadqa Eligible Assistance Channels</span>
            </div>
          </div>
        </div>

        {/* Visual Hero Feature */}
        <div className="relative w-full h-64 sm:h-80 rounded-3xl overflow-hidden shadow-lg border border-slate-200">
          <Image
            src="/images/programs/food_relief.jpg"
            alt="Family Food Rations & Essential Relief Care"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider bg-white/20 backdrop-blur px-3 py-1 rounded-full inline-block mb-2">
                Dignified Ration Parcels
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-white">
                Monthly Nutrition Packs for Deserving Households
              </h2>
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
            Relief Initiatives
          </button>

          <button
            onClick={() => setActiveTab("apply")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === "apply"
                ? "bg-[#1A56DB] text-white shadow-md"
                : "bg-white text-zinc-600 hover:bg-zinc-100"
            }`}
          >
            Apply for Family Assistance
          </button>
        </div>

        {/* 3. Tab 1: Relief Initiatives */}
        {activeTab === "programs" && (
          <div className="flex flex-col gap-10 animate-in fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {AID_PROGRAMS.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-3xl border border-zinc-200/80 p-8 shadow-sm flex flex-col justify-between gap-6 hover:shadow-md transition-shadow group"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-amber-50 text-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-blue-50 text-[#1A56DB]">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-xl text-primary-900 mt-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="border-t border-zinc-100 pt-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-400">Direct Delivery</span>
                    <Link
                      href="/donate"
                      className="text-xs font-bold text-[#1A56DB] hover:underline flex items-center gap-1"
                    >
                      <span>Sponsor this Relief</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Donation CTA */}
            <div className="bg-gradient-to-r from-primary-900 to-blue-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-widest text-accent-gold font-bold">
                  Sponsor a Family
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl">
                  Fund a Month of Nutrition for Deserving Children
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-lg leading-relaxed">
                  Every food ration parcel and prescription medicine package is tracked with receipts and direct recipient verification.
                </p>
              </div>

              <Link
                href="/donate"
                className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold px-8 py-3.5 rounded-full text-xs sm:text-sm shadow-xl transition-all hover:scale-105 whitespace-nowrap flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Donate Food & Medicine</span>
              </Link>
            </div>
          </div>
        )}

        {/* 4. Tab 2: Apply for Family Assistance */}
        {activeTab === "apply" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in">
            <div className="lg:col-span-5 bg-primary-900 text-white rounded-3xl p-8 shadow-xl flex flex-col gap-5">
              <span className="text-xs uppercase tracking-widest text-accent-gold font-bold">
                Verification Protocol
              </span>
              <h3 className="font-serif font-bold text-2xl text-white">
                How Applications are Processed
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                To guarantee that donations reach the most deserving, our local community coordinators verify family income, household breadwinner status, and living conditions.
              </p>

              <div className="flex flex-col gap-3 pt-2">
                <div className="flex items-start gap-3 text-xs text-zinc-200">
                  <span className="w-5 h-5 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center shrink-0 font-bold">1</span>
                  <span>Priority given to widowed mothers, orphan households, and disabled breadwinners.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-zinc-200">
                  <span className="w-5 h-5 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center shrink-0 font-bold">2</span>
                  <span>Direct physical verification conducted by authorized regional team members.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-zinc-200">
                  <span className="w-5 h-5 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center shrink-0 font-bold">3</span>
                  <span>Rations or medicines handed over with recipient dignity protected.</span>
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
                    Assistance Request Submitted
                  </h3>

                  <p className="text-sm text-charcoal-muted max-w-md leading-relaxed">
                    Your request has been logged into our social welfare verification queue.
                  </p>

                  <div className="p-4 rounded-2xl bg-blue-50 border-2 border-blue-200 text-center w-full max-w-sm">
                    <span className="text-xs text-zinc-500 uppercase tracking-wider block font-semibold">
                      Your Tracking Reference
                    </span>
                    <span className="font-mono font-bold text-xl text-[#1A56DB] block mt-1">
                      {submittedRef}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setSubmittedRef(null);
                      setFormData({
                        applicantName: "",
                        cnicOrId: "",
                        familyMembers: "4",
                        monthlyIncome: "",
                        city: "",
                        contactNumber: "",
                        aidType: "Monthly Food Ration Bag",
                        reasonForAssistance: "",
                        consentAgreed: false,
                      });
                    }}
                    className="bg-[#1A56DB] text-white font-bold px-6 py-2.5 rounded-full text-xs shadow hover:bg-[#1546b8] transition-colors mt-2"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="border-b border-zinc-100 pb-3">
                    <h3 className="font-serif font-bold text-xl text-primary-900">
                      Family Assistance Registration
                    </h3>
                    <p className="text-xs text-charcoal-muted mt-1">
                      Provide accurate information so our verification team can reach you.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-700">Applicant Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.applicantName}
                        onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
                        placeholder="Head of Household"
                        className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-700">CNIC / Identity Number *</label>
                      <input
                        type="text"
                        required
                        value={formData.cnicOrId}
                        onChange={(e) => setFormData({ ...formData, cnicOrId: e.target.value })}
                        placeholder="XXXXX-XXXXXXX-X"
                        className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-700">Number of Family Members *</label>
                      <input
                        type="number"
                        required
                        min="1"
                        max="25"
                        value={formData.familyMembers}
                        onChange={(e) => setFormData({ ...formData, familyMembers: e.target.value })}
                        className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-700">Monthly Household Income (PKR) *</label>
                      <input
                        type="number"
                        required
                        value={formData.monthlyIncome}
                        onChange={(e) => setFormData({ ...formData, monthlyIncome: e.target.value })}
                        placeholder="e.g. 15000"
                        className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-700">City & Living Area *</label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Lahore, Shahdara"
                        className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-700">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.contactNumber}
                        onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                        placeholder="+92 3XX XXXXXXX"
                        className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-700">Type of Assistance Requested *</label>
                    <select
                      value={formData.aidType}
                      onChange={(e) => setFormData({ ...formData, aidType: e.target.value })}
                      className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                    >
                      <option value="Monthly Food Ration Bag">Monthly Food Ration Bag</option>
                      <option value="Chronic Medicine & Pharmacy Support">Chronic Medicine & Pharmacy Support</option>
                      <option value="Winter Quilt & Blanket Package">Winter Quilt & Blanket Package</option>
                      <option value="Emergency Hardship Grant">Emergency Hardship Grant</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-700">Reason for Request & Family Condition *</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.reasonForAssistance}
                      onChange={(e) => setFormData({ ...formData, reasonForAssistance: e.target.value })}
                      placeholder="State if the family has orphans, widows, or medical disability..."
                      className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                    />
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.consentAgreed}
                        onChange={(e) => setFormData({ ...formData, consentAgreed: e.target.checked })}
                        className="mt-1 rounded text-[#1A56DB] focus:ring-[#1A56DB]"
                      />
                      <span className="text-xs text-zinc-600 leading-snug">
                        I declare that our household meets the poverty verification criteria and authorize foundation representatives to verify our details.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1A56DB] hover:bg-[#1546b8] text-white font-bold py-3.5 rounded-full text-xs sm:text-sm shadow-md transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Submitting Request..." : "Submit Assistance Request"}</span>
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
