import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ImpactCounters } from "@/components/sections/ImpactCounters";
import { PillarsGrid } from "@/components/sections/PillarsGrid";
import { HospitalSection } from "@/components/sections/HospitalSection";
import { TakeActionSection } from "@/components/sections/TakeActionSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { FounderMessage } from "@/components/sections/FounderMessage";
import { Link } from "@/i18n/routing";
import { Heart, ArrowRight, ShieldCheck } from "lucide-react";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Sovereign Split Hero (Concept 1) */}
      <Hero />

      {/* 2. Trust & Status Strip */}
      <TrustStrip />

      {/* 3. Verified Impact Milestone Counters */}
      <ImpactCounters />

      {/* 4. Core Humanitarian Pillars */}
      <PillarsGrid />

      {/* 5. Hospital Under Construction Milestone Section */}
      <HospitalSection />

      {/* 6. Amnesty-Inspired "Take Action" Campaigns */}
      <TakeActionSection />

      {/* 7. Amnesty-Inspired Research & Policy Reports */}
      <ResearchSection />

      {/* 8. Founder's Contemplative Reflection & Editable Placeholder */}
      <FounderMessage />

      {/* 9. Direct Call to Stand with the Foundation */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary-900 to-primary-800 text-surface-cream text-center border-t border-primary-700">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 bg-primary-800/80 px-3.5 py-1.5 rounded-full text-xs text-accent-gold border border-primary-700">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Ethical • Verified • Transparent</span>
          </div>

          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-surface-cream tracking-tight">
            Stand With Us to Bring Dignity & Healthcare to Vulnerable Lives
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed">
            Whether by supporting clinical cases, volunteering your professional skills, or joining as a member, your participation changes lives.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/get-involved"
              className="bg-accent-gold hover:bg-accent-gold-light text-primary-900 font-bold px-7 py-3 rounded-xl shadow-lg transition-all hover:scale-105 flex items-center gap-2 text-sm"
            >
              <Heart className="w-4 h-4 fill-primary-900" />
              <span>Support Our Mission</span>
            </Link>

            <Link
              href="/get-involved"
              className="bg-primary-800/80 hover:bg-primary-700 text-surface-cream border border-primary-600 font-semibold px-6 py-3 rounded-xl transition-colors text-sm flex items-center gap-2"
            >
              <span>Join as Volunteer / Member</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
