import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Heart, ArrowRight, ShieldCheck, CheckCircle2, Stethoscope, Sparkles } from "lucide-react";

export function FounderLegacySection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-surface-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* MTJ Exact 3-Segment Horizontal Pill Banner (bg-[#dff0fa]) */}
        <div className="bg-[#dff0fa] border border-[#cae4f5] rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading & Badge */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 self-start bg-white/80 text-[#005972] border border-[#b8ddf2] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Our Founder&apos;s Pledge</span>
              </div>

              <h2 className="font-serif font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#005972] tracking-tight leading-tight">
                A Legacy of Compassion, A Future of Hope
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 font-sans">
                &ldquo;Every human being deserves health, dignity, and sanctuary. Our mission is direct, verified action on the ground.&rdquo;
              </p>

              <div className="pt-2">
                <span className="font-serif font-bold text-base text-slate-900 block">Zulaid Chaudhary</span>
                <span className="text-xs text-slate-500 block">Founder & Chief Patron</span>
              </div>
            </div>

            {/* Middle Column: Core Impact Facts */}
            <div className="lg:col-span-5 flex flex-col gap-4 border-t lg:border-t-0 lg:border-s lg:border-e border-[#c2e2f5] py-4 lg:py-0 lg:px-8">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                Supported by a dedicated family of medical doctors in the USA and Lahore, Zulaid Chaudhary has personally arranged and facilitated free clinical surgeries, OPD consultations, and life-saving medicines for <strong>approximately 25–30 destitute patients</strong> to date.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-white/90 rounded-xl p-3 border border-[#cae4f5] shadow-sm">
                  <div className="text-xl font-bold font-serif text-[#16a34a]">~25–30</div>
                  <div className="text-[11px] font-semibold text-slate-600">Free Surgeries Arranged</div>
                </div>
                <div className="bg-white/90 rounded-xl p-3 border border-[#cae4f5] shadow-sm">
                  <div className="text-xl font-bold font-serif text-[#005972]">Under Construction</div>
                  <div className="text-[11px] font-semibold text-slate-600">Community Hospital (Lahore)</div>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 italic">
                * Zero administrative overhead deducted from direct medical sponsorships. Every case verified with full medical consent.
              </p>
            </div>

            {/* Right Column: Flush Founder Photo + Link */}
            <div className="lg:col-span-3 flex flex-col items-center gap-4">
              <div className="relative w-36 h-44 sm:w-44 sm:h-52 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/firstimg.jpg"
                  alt="Zulaid Chaudhary"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              <Link
                href="/about/founder"
                className="bg-[#005972] hover:bg-[#004356] text-white font-bold text-xs px-5 py-2.5 rounded-full shadow transition-all hover:scale-105 flex items-center gap-1.5"
              >
                <span>Read Full Biography</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
