import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Heart, Users, ArrowRight } from "lucide-react";

export function DualActionTriptych() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-surface-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* 3 Arch-Topped Cards (Exact MTJ Design) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Healthcare & Free Patient Relief (MAKE DONATION) */}
          <div className="relative rounded-t-[140px] sm:rounded-t-[170px] rounded-b-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 group min-h-[460px] flex flex-col justify-end">
            <Image
              src="/images/2ndimg.jpg"
              alt="Healthcare & Free Treatment"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              style={{ objectPosition: "28% 20%" }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            
            {/* Rotated Vertical Badge */}
            <div className="absolute top-16 -start-8 rotate-90 origin-top-left z-20">
              <span className="bg-[#16a34a] text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-b-md shadow-md">
                MAKE DONATION
              </span>
            </div>

            {/* Content at Bottom */}
            <div className="relative z-20 p-6 sm:p-8 flex flex-col items-center text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                Medical Relief
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mb-2">
                Free Patient Surgeries
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                Directly sponsor critical medical surgeries, diagnostic labs, and prescription medicines for destitute families.
              </p>
              <Link
                href="/donate?project=Health%20%26%20Free%20Surgeries"
                className="bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg transition-all hover:scale-105 flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Donate for Healthcare</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Center Arch: Hospital Under Construction (DONATE NOW) */}
          <div className="relative rounded-t-[140px] sm:rounded-t-[170px] rounded-b-3xl overflow-hidden shadow-2xl border-4 border-amber-300/60 bg-slate-900 group min-h-[490px] flex flex-col justify-end -mt-0 md:-mt-4">
            <Image
              src="/images/3rdimg.jpg"
              alt="Hospital Construction Lahore"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
              style={{ objectPosition: "center 20%" }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            {/* Rotated Vertical Badge */}
            <div className="absolute top-16 -start-8 rotate-90 origin-top-left z-20">
              <span className="bg-[#d92525] text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-b-md shadow-md">
                DONATE NOW
              </span>
            </div>

            {/* Content at Bottom */}
            <div className="relative z-20 p-6 sm:p-8 flex flex-col items-center text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                Institutional Sanctuary
              </span>
              <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-white mb-2">
                Charity Hospital Construction
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 mb-6 leading-relaxed">
                Help build our state-of-the-art charitable hospital in Lahore, creating an enduring legacy of zero-fee medical treatment.
              </p>
              <Link
                href="/donate?project=Hospital%20Construction%20Fund"
                className="bg-[#d92525] hover:bg-[#b91c1c] text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-xl transition-all hover:scale-105 flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Support Hospital Brick by Brick</span>
              </Link>
            </div>
          </div>

          {/* Card 3: Volunteer & Ground Engagement (BECOME VOLUNTEER) */}
          <div className="relative rounded-t-[140px] sm:rounded-t-[170px] rounded-b-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 group min-h-[460px] flex flex-col justify-end">
            <Image
              src="/images/5th_portrait.jpg"
              alt="Become a Foundation Volunteer"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              style={{ objectPosition: "center 25%" }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            {/* Rotated Vertical Badge */}
            <div className="absolute top-16 -start-8 rotate-90 origin-top-left z-20">
              <span className="bg-[#005972] text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-b-md shadow-md">
                BECOME VOLUNTEER
              </span>
            </div>

            {/* Content at Bottom */}
            <div className="relative z-20 p-6 sm:p-8 flex flex-col items-center text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-1">
                Join Movement
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mb-2">
                Humanitarian Community
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                Lend your medical expertise, logistics skills, or community time to serve vulnerable patients and animals on the ground.
              </p>
              <Link
                href="/get-involved"
                className="bg-[#005972] hover:bg-[#004356] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg transition-all hover:scale-105 flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                <span>Join Support Community</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
