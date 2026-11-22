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
      // Show when scrolled past hero (~450px)
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
    <div className="fixed bottom-4 inset-x-0 z-40 flex justify-center px-4 animate-in slide-in-from-bottom duration-300 pointer-events-none">
      <div className="pointer-events-auto bg-[#EAF7EC] border-2 border-[#C8E6C9] rounded-full shadow-2xl p-2 sm:p-2.5 flex flex-wrap items-center gap-2 sm:gap-3 max-w-4xl backdrop-blur-md">
        
        {/* Label */}
        <div className="flex items-center gap-1.5 ps-2">
          <Sparkles className="w-4 h-4 text-[#16A34A] shrink-0" />
          <span className="font-bold text-[#166534] text-xs uppercase tracking-wider whitespace-nowrap">
            Quick Donate :
          </span>
        </div>

        {/* Project Dropdown */}
        <select
          value={project}
          onChange={(e) => setProject(e.target.value)}
          className="bg-white border border-green-300 text-charcoal text-xs font-semibold rounded-full px-3 py-1.5 focus:outline-none"
        >
          <option value="Health & Free Surgeries">🏥 Free Medical & Surgeries</option>
          <option value="Hospital Construction Fund">🏗️ Hospital Construction</option>
          <option value="Animal Welfare & Rescue">🐾 Animal Welfare & Equine Care</option>
          <option value="Food & Ration Relief">🌾 Family Ration Bags</option>
          <option value="Clean Water & Environment">🌱 Clean Water & Wells</option>
          <option value="Palestine Relief">🕊️ Palestine Crises Relief</option>
        </select>

        {/* Giving Type */}
        <select
          value={donationType}
          onChange={(e) => setDonationType(e.target.value)}
          className="bg-white border border-green-300 text-charcoal text-xs font-semibold rounded-full px-3 py-1.5 focus:outline-none hidden sm:block"
        >
          <option value="General">General</option>
          <option value="Sadqa">Sadqa</option>
          <option value="Zakat">Zakat</option>
        </select>

        {/* Amount Input */}
        <div className="relative w-24 sm:w-28">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="PKR"
            className="w-full bg-white border border-green-300 text-xs font-bold text-charcoal rounded-full px-3 py-1.5 focus:outline-none"
          />
        </div>

        {/* Donate Action Button */}
        <Link
          href={`/donate`}
          className="bg-[#16A34A] hover:bg-[#15803D] text-white font-bold px-5 py-1.5 rounded-full text-xs shadow-md transition-all hover:scale-105 flex items-center gap-1.5 whitespace-nowrap"
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
          className="w-6 h-6 rounded-full text-zinc-400 hover:text-zinc-700 flex items-center justify-center transition-colors pe-1"
          aria-label="Dismiss quick donate"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
