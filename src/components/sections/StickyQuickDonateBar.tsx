"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { Heart, Sparkles, X } from "lucide-react";

export function StickyQuickDonateBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [project, setProject] = useState("Health & Free Surgeries");
  const [donationType, setDonationType] = useState("General");
  const [amount, setAmount] = useState("5000");
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="hidden md:flex fixed bottom-5 inset-x-0 z-40 justify-center px-4 animate-in slide-in-from-bottom duration-300 pointer-events-none">
      <div className="pointer-events-auto bg-white border border-[#cbe7f7] text-slate-800 rounded-full shadow-2xl p-2 sm:p-2.5 flex items-center gap-2.5 max-w-4xl backdrop-blur-md">
        
        {/* Label */}
        <div className="flex items-center gap-1.5 ps-3">
          <Sparkles className="w-4 h-4 text-[#16a34a] shrink-0" />
          <span className="font-bold text-[#005972] text-xs uppercase tracking-wider whitespace-nowrap">
            Quick Donate:
          </span>
        </div>

        {/* Project Dropdown */}
        <select
          value={project}
          onChange={(e) => setProject(e.target.value)}
          className="bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold rounded-full px-3 py-1.5 focus:outline-none cursor-pointer"
        >
          <option value="Health & Free Surgeries">🏥 Free Medical & Surgeries</option>
          <option value="Hospital Construction Fund">🏗️ ZCF Hospital Construction (Shorkot)</option>
          <option value="Animal Welfare & Rescue">🐾 Animal Welfare & Rescue</option>
          <option value="Food & Monthly Ration Relief">🌾 Family Ration Bags</option>
          <option value="Clean Water & Environment">🌱 Clean Water Wells</option>
        </select>

        {/* Giving Type */}
        <select
          value={donationType}
          onChange={(e) => setDonationType(e.target.value)}
          className="bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold rounded-full px-3 py-1.5 focus:outline-none hidden lg:block cursor-pointer"
        >
          <option value="General">General</option>
          <option value="Sadqa">Sadqa</option>
          <option value="Zakat">Zakat</option>
        </select>

        {/* Amount Input */}
        <div className="relative w-36 sm:w-44">
          <span className="absolute start-3 top-1/2 -translate-y-1/2 text-[11px] font-bold text-slate-400 pointer-events-none">
            PKR
          </span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="5000"
            className="w-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 rounded-full ps-11 pe-3 py-1.5 focus:outline-none focus:border-[#009ee2] focus:ring-1 focus:ring-[#009ee2] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>

        {/* Donate Action Button */}
        <Link
          href={`/donate?amount=${amount}&project=${encodeURIComponent(project)}&type=${donationType}`}
          className="bg-[#d92525] hover:bg-[#b91c1c] text-white font-bold px-5 py-1.5 rounded-full text-xs shadow-md transition-all hover:scale-105 flex items-center gap-1.5 whitespace-nowrap"
        >
          <Heart className="w-3.5 h-3.5 fill-white" />
          <span>Donate</span>
        </Link>

        {/* Dismiss Button */}
        <button
          onClick={() => {
            setIsDismissed(true);
            setIsVisible(false);
          }}
          className="w-6 h-6 rounded-full text-slate-400 hover:text-slate-600 flex items-center justify-center transition-colors pe-1"
          aria-label="Dismiss quick donate"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
