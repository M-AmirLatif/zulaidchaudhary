import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Heart, Users, ArrowRight, Sparkles, Coins } from "lucide-react";

export function DualActionTriptych() {
  return (
    <section className="py-16 px-4 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* 1. Left Capsule: Make Donation */}
          <div className="bg-gradient-to-br from-amber-500/10 via-amber-50/50 to-white rounded-3xl border-2 border-amber-200/80 p-8 flex flex-col justify-between gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform">
                🪙
              </div>

              <div>
                <span className="text-xs font-bold text-accent-gold-dark uppercase tracking-wider block mb-1">
                  Direct Financial Support
                </span>
                <h3 className="font-serif font-bold text-2xl text-primary-900 leading-tight">
                  Make a Meaningful Contribution
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Your Sadqa, Zakat, and humanitarian donations directly subsidize surgical operating theatre fees, pharmacy bills, and emergency animal trauma relief.
              </p>
            </div>

            <Link
              href="/donate"
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-3 px-6 rounded-full text-xs sm:text-sm shadow-md transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate Now</span>
            </Link>
          </div>

          {/* 2. Center Capsule: Real Human Connection */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white min-h-[320px] md:min-h-full group">
            <Image
              src="/images/firstimg.jpg"
              alt="Humanitarian care and dignity"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/85 via-primary-950/30 to-transparent" />
            <div className="absolute bottom-6 inset-x-6 text-white text-center flex flex-col items-center gap-1.5">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-gold">
                Grassroots Sanctuary
              </span>
              <h4 className="font-serif font-bold text-xl sm:text-2xl text-white">
                &quot;Where Pain Finds Relief&quot;
              </h4>
              <p className="text-xs text-zinc-300 max-w-xs font-sans">
                Real patient care verified directly on the ground.
              </p>
            </div>
          </div>

          {/* 3. Right Capsule: Become a Volunteer */}
          <div className="bg-gradient-to-br from-blue-500/10 via-blue-50/50 to-white rounded-3xl border-2 border-blue-200/80 p-8 flex flex-col justify-between gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-[#1A56DB] flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform">
                🤝
              </div>

              <div>
                <span className="text-xs font-bold text-[#1A56DB] uppercase tracking-wider block mb-1">
                  Active Ground Engagement
                </span>
                <h3 className="font-serif font-bold text-2xl text-primary-900 leading-tight">
                  Become a Foundation Volunteer
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Join our medical advisory pool, logistics team, translation desk, or emergency animal rescue units across Pakistan and international chapters.
              </p>
            </div>

            <Link
              href="/get-involved"
              className="bg-[#0F766E] hover:bg-[#0D625C] text-white font-bold py-3 px-6 rounded-full text-xs sm:text-sm shadow-md transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Users className="w-4 h-4" />
              <span>Join as Volunteer</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
