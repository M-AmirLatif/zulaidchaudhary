import { Link } from "@/i18n/routing";
import { Heart, Sparkles, Building2 } from "lucide-react";

export function FloatingBankTransferCard() {
  return (
    <div className="w-full bg-[#1A56DB] pt-6 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-t-3xl shadow-2xl border-t-2 border-x-2 border-zinc-200 p-8 sm:p-10 flex flex-col items-center text-center gap-4">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">
            Direct Commercial Banking Channels
          </span>

          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900 tracking-tight flex items-center justify-center gap-2 flex-wrap">
            <span className="text-accent-gold">✦</span>
            <span>Sadqa / Donations / Zakat Via Bank Transfer</span>
            <span className="text-accent-gold">✦</span>
          </h3>

          <p className="text-xs sm:text-sm text-charcoal-muted max-w-xl font-sans">
            Meezan Bank Ltd. • Title: <strong>Zulaid Chaudhary Foundation</strong> • IBAN: <code className="bg-zinc-100 px-2 py-0.5 rounded font-mono text-charcoal font-bold">PK36MEZN0001020304050607</code>
          </p>

          <Link
            href="/donate"
            className="mt-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-3.5 px-8 rounded-full text-xs sm:text-sm shadow-xl transition-all hover:scale-105 flex items-center gap-2"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>Donate Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
