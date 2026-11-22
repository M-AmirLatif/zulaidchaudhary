import { Hero } from "@/components/sections/Hero";
import { FounderLegacySection } from "@/components/sections/FounderLegacySection";
import { CoreInitiativesCarousel } from "@/components/sections/CoreInitiativesCarousel";
import { DualActionTriptych } from "@/components/sections/DualActionTriptych";
import { LiveProjectsShowcase } from "@/components/sections/LiveProjectsShowcase";
import { CumulativeImpactGrid } from "@/components/sections/CumulativeImpactGrid";
import { GlobalGoalsSDG } from "@/components/sections/GlobalGoalsSDG";
import { RealPeopleStories } from "@/components/sections/RealPeopleStories";
import { OtherWaysToDonate } from "@/components/sections/OtherWaysToDonate";
import { SubscribeBanner } from "@/components/sections/SubscribeBanner";
import { FloatingBankTransferCard } from "@/components/sections/FloatingBankTransferCard";
import { StickyQuickDonateBar } from "@/components/sections/StickyQuickDonateBar";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col bg-surface-cream">
      {/* 1. Hero Carousel & Overlaid Quick Donation Matrix */}
      <Hero />

      {/* 2. Founder Section: "A Legacy of Compassion / A Future of Hope" */}
      <FounderLegacySection />

      {/* 3. Core Program Initiatives Grid */}
      <CoreInitiativesCarousel />

      {/* 4. Dual Action Triptych (Make Donation / Real Human Connection / Become Volunteer) */}
      <DualActionTriptych />

      {/* 5. Live Impact Projects with Progress Bars & Action Verbs */}
      <LiveProjectsShowcase />

      {/* 6. Cumulative Verified Impact Statistics (9 Counters Grid) */}
      <CumulativeImpactGrid />

      {/* 7. UN Sustainable Development Goals Alignment */}
      <GlobalGoalsSDG />

      {/* 8. "Real People: Real Impact" (Verified Patient & Recovery Stories) */}
      <RealPeopleStories />

      {/* 9. "Other Ways to Donate" (Online, WhatsApp, Phone, Bank Wire) */}
      <OtherWaysToDonate />

      {/* 10. "SUBSCRIBE" Newsletter Banner */}
      <SubscribeBanner />

      {/* 11. Floating Bank Wire Card Overlap */}
      <FloatingBankTransferCard />

      {/* 12. Persistent Sticky Quick Donate Floating Pill Bar */}
      <StickyQuickDonateBar />
    </div>
  );
}
