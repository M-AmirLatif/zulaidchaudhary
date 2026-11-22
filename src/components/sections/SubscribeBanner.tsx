"use client";

import { useState } from "react";
import { CheckCircle2, Send, ShieldCheck } from "lucide-react";

export function SubscribeBanner() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <section className="py-16 px-4 bg-[#1A56DB] text-white">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
        
        <div className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-widest text-blue-200 font-bold">
            Stay Connected With Ground Realities
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-white tracking-tight">
            SUBSCRIBE
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto leading-relaxed font-sans">
            Sign up with your email address to receive verified clinical case updates, hospital construction milestones, and quarterly financial reports.
          </p>
        </div>

        {subscribed ? (
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 flex items-center gap-2 text-white text-xs font-semibold animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 text-accent-gold" />
            <span>Thank you for subscribing to Zulaid Chaudhary Foundation dispatches.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-3xl flex flex-col sm:flex-row items-center gap-3 pt-2"
          >
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full sm:w-1/3 py-3 px-4 rounded-full text-xs text-charcoal bg-white placeholder:text-zinc-400 focus:outline-none shadow-md font-medium"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full sm:w-1/3 py-3 px-4 rounded-full text-xs text-charcoal bg-white placeholder:text-zinc-400 focus:outline-none shadow-md font-medium"
            />
            <input
              type="email"
              required
              placeholder="Email Address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-1/3 py-3 px-4 rounded-full text-xs text-charcoal bg-white placeholder:text-zinc-400 focus:outline-none shadow-md font-medium"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#16A34A] hover:bg-[#15803D] text-white font-bold py-3 px-8 rounded-full text-xs shadow-xl transition-all hover:scale-105 whitespace-nowrap"
            >
              SUBSCRIBE
            </button>
          </form>
        )}

        <div className="flex items-center gap-2 text-[11px] text-blue-200">
          <ShieldCheck className="w-3.5 h-3.5 text-accent-gold" />
          <span>We respect your privacy. Data is strictly confidential under GDPR-aligned protocols.</span>
        </div>
      </div>
    </section>
  );
}
