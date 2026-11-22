import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Heart, ArrowRight, ShieldCheck, CheckCircle2, Stethoscope, Sparkles } from "lucide-react";

export function FounderLegacySection() {
  return (
    <section className="py-20 px-4 bg-white border-b border-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Narrative & Legacy */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 self-start bg-blue-50 text-[#1A56DB] border border-blue-200 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-accent-gold" />
            <span>A Legacy of Compassion</span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-primary-900 tracking-tight leading-[1.2]">
            A Future of Hope, Zulaid Chaudhary Foundation
          </h2>

          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-sans">
            Every human life possesses an inviolable right to dignity, health, and relief in moments of distress. Founded by <strong>Zulaid Chaudhary</strong>, our foundation was established not as a distant charity, but as a direct, boots-on-the-ground sanctuary for the vulnerable.
          </p>

          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans">
            Supported by a family of dedicated medical doctors serving in both the USA and Lahore, the founder has already facilitated free clinical consultations, critical surgeries, and prescription medications for <strong>approximately 25–30 destitute patients</strong> to date. Today, our <strong>charity hospital is under active construction</strong>, designed to institutionalize free, compassionate healthcare for generations to come.
          </p>

          {/* 3 Value Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#1A56DB] flex items-center justify-center shrink-0">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-sm text-primary-900">~25–30 Treated</span>
                <span className="text-[11px] text-zinc-500">Free Patient Surgeries</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-accent-gold-dark flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-sm text-primary-900">Hospital Project</span>
                <span className="text-[11px] text-zinc-500">Under Construction</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-status-green flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-sm text-primary-900">100% Verified</span>
                <span className="text-[11px] text-zinc-500">Direct Pharmacy Aid</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/about/founder"
              className="bg-[#1A56DB] hover:bg-[#1546b8] text-white font-bold px-7 py-3 rounded-full text-xs sm:text-sm shadow-md transition-all hover:scale-105 flex items-center gap-2"
            >
              <span>Read Founder&apos;s Full Story</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>

            <Link
              href="/about/governance"
              className="bg-zinc-100 hover:bg-zinc-200 text-charcoal font-semibold px-6 py-3 rounded-full text-xs sm:text-sm transition-colors"
            >
              Governance & Legal Status
            </Link>
          </div>
        </div>

        {/* Right Column: Framed Founder Portrait (Exact MTJ Presentation) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
            <Image
              src="/images/2ndimg.jpg"
              alt="Zulaid Chaudhary, Founder of Zulaid Chaudhary Foundation"
              fill
              className="object-cover object-[25%_center] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-5 inset-x-5 text-white">
              <span className="text-xs uppercase tracking-widest text-accent-gold font-bold block mb-1">
                Founder & Humanitarian
              </span>
              <span className="font-serif font-bold text-2xl block">
                Zulaid Chaudhary
              </span>
              <span className="text-xs text-zinc-300 block mt-1 font-sans">
                Serving humanity with empathy, direct accountability, and compassion.
              </span>
            </div>
          </div>

          {/* Trust Floating Strip */}
          <div className="w-full max-w-md -mt-5 z-10 bg-white border border-zinc-200 rounded-2xl p-4 shadow-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-status-green/10 text-status-green flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-primary-900">
                Ethical Groundwork
              </span>
              <span className="text-[11px] text-zinc-500">
                Registration in progress • Backed by certified physician network.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
