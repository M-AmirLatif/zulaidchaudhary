"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import {
  CreditCard,
  MessageCircle,
  Phone,
  Building2,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function OtherWaysToDonate() {
  const [copiedBank, setCopiedBank] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyBank = () => {
    navigator.clipboard.writeText("PK36MEZN0001020304050607");
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+924230000000");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section className="py-20 px-4 bg-zinc-50/70 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header */}
        <div className="flex flex-col gap-2 text-center items-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1A56DB] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Accessible Channels</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-primary-900 tracking-tight">
            Other Ways to Donate
          </h2>
          <p className="text-sm text-charcoal-muted leading-relaxed">
            Choose the method most convenient for you—online card, direct Pakistani bank wire, WhatsApp, or phone.
          </p>
        </div>

        {/* 4 Cards Grid (Exact MTJ 4-Channel Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Online */}
          <div className="bg-white rounded-3xl border border-zinc-200 p-7 flex flex-col justify-between gap-5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all group">
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform">
                <CreditCard className="w-7 h-7" />
              </div>
              <h3 className="font-serif font-bold text-lg text-primary-900">
                Join Online
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Set up your one-time or monthly contribution online in under two minutes with instant receipt generation.
              </p>
            </div>
            <Link
              href="/donate"
              className="text-xs font-bold text-[#1A56DB] hover:text-blue-800 flex items-center gap-1 transition-colors"
            >
              <span>Donate Online Now</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="bg-white rounded-3xl border border-zinc-200 p-7 flex flex-col justify-between gap-5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all group">
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-teal-100 text-[#0F766E] flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7" />
              </div>
              <h3 className="font-serif font-bold text-lg text-primary-900">
                Register on WhatsApp
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Send your name, city, and intended donation cause to our verified WhatsApp support concierge.
              </p>
            </div>
            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#0F766E] hover:text-teal-800 flex items-center gap-1 transition-colors"
            >
              <span>Message on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </a>
          </div>

          {/* Card 3: Phone Helpline */}
          <div className="bg-white rounded-3xl border border-zinc-200 p-7 flex flex-col justify-between gap-5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all group">
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="font-serif font-bold text-lg text-primary-900">
                Call our Helpline
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed font-mono">
                +92 42 30000000
              </p>
            </div>
            <button
              onClick={handleCopyPhone}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition-colors self-start"
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedPhone ? "Copied Helpline" : "Copy Phone Number"}</span>
            </button>
          </div>

          {/* Card 4: Bank Wire Transfer */}
          <div className="bg-white rounded-3xl border border-zinc-200 p-7 flex flex-col justify-between gap-5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all group">
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-[#16A34A] flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="font-serif font-bold text-lg text-primary-900">
                Bank Wire Transfer
              </h3>
              <div className="text-[11px] text-charcoal-muted font-mono leading-tight">
                <div>Meezan Bank Ltd.</div>
                <div className="truncate text-charcoal font-bold mt-0.5">PK36MEZN0001020304050607</div>
              </div>
            </div>
            <button
              onClick={handleCopyBank}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16A34A] hover:text-green-800 transition-colors self-start"
            >
              {copiedBank ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedBank ? "IBAN Copied!" : "Copy Foundation IBAN"}</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
