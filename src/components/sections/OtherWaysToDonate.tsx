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
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* MTJ Exact Subtitle Pill */}
        <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-widest mb-2">
          <span className="w-8 h-[2px] bg-amber-500 inline-block" />
          <span>Other Ways to Donate</span>
          <span className="w-8 h-[2px] bg-amber-500 inline-block" />
        </div>

        <h2 className="font-serif font-extrabold text-2xl sm:text-4xl lg:text-[40px] text-slate-900 tracking-tight leading-tight text-center">
          Multiple Convenient Giving Channels
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl text-center">
          Choose the method most convenient for you: online card, direct Pakistani bank wire, WhatsApp, or phone.
        </p>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-12">
          
          {/* Card 1: Online (Yellow/Gold) */}
          <div className="bg-white rounded-3xl border border-slate-200 p-7 flex flex-col justify-between gap-5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all group">
            <div className="flex flex-col gap-4">
              <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform">
                <CreditCard className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-amber-600 transition-colors">
                Join Online
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Set up your one-time or monthly contribution online in under two minutes with instant receipt generation.
              </p>
            </div>
            <Link
              href="/donate"
              className="text-xs font-bold text-[#009ee2] hover:text-[#007cb0] flex items-center gap-1 transition-colors"
            >
              <span>Donate Online Now</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>
          </div>

          {/* Card 2: WhatsApp (Green) */}
          <div className="bg-white rounded-3xl border border-slate-200 p-7 flex flex-col justify-between gap-5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all group">
            <div className="flex flex-col gap-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#16a34a] flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-[#16a34a] transition-colors">
                Register on WhatsApp
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Send your name, city, and intended donation cause to our verified WhatsApp support concierge.
              </p>
            </div>
            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#16a34a] hover:text-[#15803d] flex items-center gap-1 transition-colors"
            >
              <span>Message on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </a>
          </div>

          {/* Card 3: Phone Helpline (Red) */}
          <div className="bg-white rounded-3xl border border-slate-200 p-7 flex flex-col justify-between gap-5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all group">
            <div className="flex flex-col gap-4">
              <div className="w-16 h-16 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-rose-600 transition-colors">
                Call our Helpline
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Speak directly with our donor services team for guidance on bank transfers, patient files, or Zakat calculation.
              </p>
            </div>
            <button
              onClick={handleCopyPhone}
              className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 transition-colors text-start"
            >
              <span>{copiedPhone ? "Phone Copied!" : "+92 42 3000 0000"}</span>
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Card 4: Bank Transfer (Sky Blue) */}
          <div className="bg-white rounded-3xl border border-slate-200 p-7 flex flex-col justify-between gap-5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all group">
            <div className="flex flex-col gap-4">
              <div className="w-16 h-16 rounded-full bg-sky-100 text-[#009ee2] flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-[#009ee2] transition-colors">
                Direct Bank Transfer
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct RTGS, Raast ID, and wire transfers directly into the dedicated institutional foundation accounts.
              </p>
            </div>
            <Link
              href="/donate#bank"
              className="text-xs font-bold text-[#009ee2] hover:text-[#007cb0] flex items-center gap-1 transition-colors"
            >
              <span>View IBAN Details</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
