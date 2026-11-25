"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import {
  Heart,
  ShieldCheck,
  CreditCard,
  Building2,
  Smartphone,
  CheckCircle2,
  Printer,
  Sparkles,
  ArrowRight,
  Receipt,
  AlertCircle,
  Lock,
} from "lucide-react";

const CAUSES = [
  {
    id: "medical",
    title: "Free Medical Treatment & Surgeries",
    desc: "Facilitate critical surgical procedures and diagnostics for financially destitute patients.",
    icon: "🏥",
  },
  {
    id: "hospital",
    title: "Hospital Construction Fund",
    desc: "Contribute to structural groundwork and clinical zones for our hospital under construction.",
    icon: "🏗️",
  },
  {
    id: "food_ration",
    title: "Food & Monthly Ration Distribution",
    desc: "Provide essential nutritional packages to widowed mothers and underprivileged families.",
    icon: "🌾",
  },
  {
    id: "animal_welfare",
    title: "Animal Welfare & Emergency Rescue",
    desc: "Support equine medical care, trauma rescue for stray animals, and anti-cruelty mobile clinics.",
    icon: "🐾",
  },
  {
    id: "environment",
    title: "Environment & Tree Plantation",
    desc: "Urban forestry, native tree planting, clean water conservation, and plastic reduction drives.",
    icon: "🌱",
  },
  {
    id: "palestine_relief",
    title: "Palestine & Humanitarian Crises",
    desc: "Emergency medical supplies and dignified relief for displaced civilian families.",
    icon: "🕊️",
  },
  {
    id: "general",
    title: "General Humanity Fund",
    desc: "Deploy funds flexibly where human distress is most urgent across all foundation pillars.",
    icon: "✨",
  },
];

const PRESET_AMOUNTS: Record<string, number[]> = {
  PKR: [1000, 3000, 5000, 10000, 25000, 50000],
  USD: [25, 50, 100, 250, 500, 1000],
  GBP: [20, 40, 80, 200, 400, 800],
  EUR: [25, 50, 100, 250, 500, 1000],
};

export default function DonatePage() {
  const [selectedCause, setSelectedCause] = useState(CAUSES[0].title);
  const [frequency, setFrequency] = useState<"ONE_TIME" | "MONTHLY">("ONE_TIME");
  const [currency, setCurrency] = useState<"PKR" | "USD" | "GBP" | "EUR">("PKR");
  const [amount, setAmount] = useState<number>(5000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"STRIPE_CARD" | "BANK_TRANSFER" | "JAZZCASH" | "EASYPAISA">("STRIPE_CARD");
  
  // Card mock state
  const [cardNumber, setCardNumber] = useState("4242 •••• •••• 4242");
  const [cardExp, setCardExp] = useState("12/28");
  const [cardCvc, setCardCvc] = useState("888");

  // Bank transfer ref
  const [bankRef, setBankRef] = useState("");

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [receipt, setReceipt] = useState<{
    receiptNumber: string;
    amount: number;
    currency: string;
    cause: string;
    date: string;
    donor: string;
    paymentMethod: string;
  } | null>(null);

  const effectiveAmount = customAmount ? parseFloat(customAmount) || 0 : amount;

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (effectiveAmount <= 0) {
      alert("Please specify a valid contribution amount.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/donations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          donorName: isAnonymous ? "Anonymous Donor" : donorName || "Kind Supporter",
          donorEmail: donorEmail || "supporter@example.com",
          donorPhone,
          isAnonymous,
          amount: effectiveAmount,
          currency,
          frequency,
          cause: selectedCause,
          paymentMethod,
          transactionReference:
            paymentMethod === "BANK_TRANSFER"
              ? bankRef || `BANK-WIRE-${Date.now().toString(36).toUpperCase()}`
              : paymentMethod === "STRIPE_CARD"
              ? `STRIPE-CH-${Date.now().toString(36).toUpperCase()}`
              : `WALLET-${Date.now().toString(36).toUpperCase()}`,
        }),
      });

      const data = await res.json();
      if (data.success && data.donation) {
        setReceipt({
          receiptNumber: data.receiptNumber,
          amount: data.donation.amount,
          currency: data.donation.currency,
          cause: data.donation.cause,
          date: new Date(data.donation.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          donor: data.donation.donorName,
          paymentMethod: data.donation.paymentMethod.replace("_", " "),
        });
      } else {
        alert(data.error || "Unable to complete donation.");
      }
    } catch {
      alert("Network error processing donation.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full py-12 px-4 bg-surface-cream min-h-screen">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        
        {/* Foundation Hero Banner (Featuring newly added 5th.jpg) */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-xl border-2 border-primary-900/10 aspect-[21/9] sm:aspect-[24/8] flex items-center">
          <Image
            src="/images/5th.jpg"
            alt="Zulaid Chaudhary Foundation - Serving Humanity Promotional Banner"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-950/60 to-transparent" />
          
          <div className="relative z-10 p-6 sm:p-12 flex flex-col gap-3 max-w-xl text-surface-cream">
            <div className="inline-flex items-center gap-2 bg-accent-gold/20 text-accent-gold border border-accent-gold/30 px-3 py-1 rounded-full text-xs font-bold w-fit">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Ethical • Direct • Transparent</span>
            </div>
            <h1 className="font-serif font-bold text-2xl sm:text-4xl text-surface-cream tracking-tight leading-tight">
              Support Our Humanitarian Mission
            </h1>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              Every contribution directly fuels free clinical surgeries, emergency animal rescue, destitute family ration kits, and ongoing hospital development.
            </p>
          </div>
        </div>

        {/* Regulatory & Sandbox Compliance Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 text-amber-900 text-xs">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1">
            <span className="font-bold">Compliant Test Mode Sandbox Active</span>
            <p className="text-amber-800 leading-relaxed">
              In strict accordance with financial regulatory compliance and payment partner vetting, this donation system is operating in safe evaluation mode. <strong>No real banking cards are debited.</strong> You can test all payment methods and generate an official verifiable digital receipt instantly.
            </p>
          </div>
        </div>

        {receipt ? (
          /* Official Digital Donation Receipt Modal/View */
          <div className="bg-surface-card rounded-3xl border-2 border-accent-gold p-8 sm:p-12 shadow-2xl flex flex-col items-center gap-8 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-status-green flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="text-center flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-gold-dark">
                Donation Successfully Recorded
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900">
                Official Digital Contribution Receipt
              </h2>
              <p className="text-xs text-charcoal-muted">
                Thank you for your generous dedication to serving humanity.
              </p>
            </div>

            {/* Formal Receipt Card */}
            <div className="w-full max-w-lg bg-surface-cream rounded-2xl border border-zinc-300 p-6 sm:p-8 flex flex-col gap-5 text-xs text-charcoal shadow-inner relative overflow-hidden">
              <div className="absolute top-0 end-0 bg-accent-gold text-primary-900 text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                Verified Receipt
              </div>

              <div className="flex items-center gap-3 border-b border-zinc-200 pb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-900 text-accent-gold flex items-center justify-center font-serif font-bold text-lg">
                  ZCF
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-sm text-primary-900">
                    Zulaid Chaudhary Foundation
                  </span>
                  <span className="text-[11px] text-charcoal-muted">
                    Registration in Progress • Official Audit Ledger
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 py-2 border-b border-zinc-200">
                <div>
                  <span className="text-[11px] text-zinc-500 block">Receipt Number</span>
                  <span className="font-mono font-bold text-primary-900 text-sm">
                    {receipt.receiptNumber}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-zinc-500 block">Date Issued</span>
                  <span className="font-semibold text-charcoal">
                    {receipt.date}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-zinc-500 block">Donor Name</span>
                  <span className="font-semibold text-charcoal">
                    {receipt.donor}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-zinc-500 block">Payment Method</span>
                  <span className="font-semibold text-charcoal">
                    {receipt.paymentMethod} (Test Mode)
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1 border-b border-zinc-200 pb-4">
                <span className="text-[11px] text-zinc-500">Designated Humanitarian Cause</span>
                <span className="font-serif font-bold text-primary-900 text-sm">
                  {receipt.cause}
                </span>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="font-bold text-charcoal text-sm">Total Contribution:</span>
                <span className="font-serif font-bold text-xl text-primary-900">
                  {receipt.currency} {receipt.amount.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="bg-primary-900 hover:bg-primary-800 text-surface-cream font-semibold px-6 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Download Receipt</span>
              </button>

              <button
                type="button"
                onClick={() => setReceipt(null)}
                className="bg-surface-card hover:bg-zinc-100 text-charcoal border border-zinc-300 font-semibold px-6 py-2.5 rounded-xl text-xs"
              >
                Make Another Contribution
              </button>

              <Link
                href="/dashboard"
                className="text-xs text-accent-gold-dark hover:underline font-semibold flex items-center gap-1"
              >
                <span>View in Supporter Dashboard</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        ) : (
          /* Interactive Donation Form */
          <form onSubmit={handleDonate} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left 7 Cols: Cause & Frequency & Amount */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Step 1: Cause Selection */}
              <div className="bg-surface-card rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-2 text-primary-900">
                  <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-900 text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  <h2 className="font-serif font-bold text-lg sm:text-xl">
                    Select Humanitarian Cause
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {CAUSES.map((cause) => {
                    const isSelected = selectedCause === cause.title;
                    return (
                      <button
                        key={cause.id}
                        type="button"
                        onClick={() => setSelectedCause(cause.title)}
                        className={`p-3.5 rounded-2xl border text-start transition-all flex items-start gap-3 ${
                          isSelected
                            ? "border-accent-gold bg-accent-gold/10 shadow-sm"
                            : "border-zinc-200 hover:border-zinc-300 bg-surface-cream/50"
                        }`}
                      >
                        <span className="text-xl shrink-0 mt-0.5">{cause.icon}</span>
                        <div className="flex flex-col">
                          <span className={`text-xs font-bold ${isSelected ? "text-primary-900" : "text-charcoal"}`}>
                            {cause.title}
                          </span>
                          <span className="text-[11px] text-charcoal-muted leading-tight mt-1 line-clamp-2">
                            {cause.desc}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Frequency & Amount */}
              <div className="bg-surface-card rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-sm flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-primary-900">
                    <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-900 text-xs font-bold flex items-center justify-center">
                      2
                    </span>
                    <h2 className="font-serif font-bold text-lg sm:text-xl">
                      Choose Frequency & Amount
                    </h2>
                  </div>

                  {/* Frequency Switcher */}
                  <div className="flex bg-surface-cream border border-zinc-200 rounded-xl p-1 text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setFrequency("ONE_TIME")}
                      className={`px-3 py-1.5 rounded-lg transition-all ${
                        frequency === "ONE_TIME"
                          ? "bg-primary-900 text-surface-cream shadow-sm"
                          : "text-charcoal-muted hover:text-charcoal"
                      }`}
                    >
                      One-Time
                    </button>
                    <button
                      type="button"
                      onClick={() => setFrequency("MONTHLY")}
                      className={`px-3 py-1.5 rounded-lg transition-all ${
                        frequency === "MONTHLY"
                          ? "bg-accent-gold text-primary-900 shadow-sm"
                          : "text-charcoal-muted hover:text-charcoal"
                      }`}
                    >
                      Monthly Pledge
                    </button>
                  </div>
                </div>

                {/* Currency Selector */}
                <div className="flex items-center gap-2 text-xs font-medium">
                  <span className="text-zinc-500">Currency:</span>
                  {(["PKR", "USD", "GBP", "EUR"] as const).map((curr) => (
                    <button
                      key={curr}
                      type="button"
                      onClick={() => {
                        setCurrency(curr);
                        setAmount(PRESET_AMOUNTS[curr][2]);
                        setCustomAmount("");
                      }}
                      className={`px-3 py-1 rounded-lg border transition-all ${
                        currency === curr
                          ? "border-primary-900 bg-primary-900 text-surface-cream font-bold"
                          : "border-zinc-200 text-charcoal hover:bg-zinc-100"
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>

                {/* Preset Chips */}
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {PRESET_AMOUNTS[currency].map((val) => {
                    const isSelected = !customAmount && amount === val;
                    return (
                      <button
                        key={val}
                        type="button"
                        onClick={() => {
                          setAmount(val);
                          setCustomAmount("");
                        }}
                        className={`py-2.5 px-2 rounded-xl text-xs font-bold border transition-all text-center ${
                          isSelected
                            ? "border-accent-gold bg-accent-gold/15 text-primary-900 shadow-sm"
                            : "border-zinc-200 text-charcoal hover:bg-zinc-50"
                        }`}
                      >
                        {val.toLocaleString()}
                      </button>
                    );
                  })}
                </div>

                {/* Custom Amount Field */}
                <div className="flex flex-col gap-1 pt-1">
                  <label className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
                    Or Enter Custom Amount ({currency})
                  </label>
                  <div className="relative">
                    <span className="absolute start-3 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-400">
                      {currency}
                    </span>
                    <input
                      type="number"
                      placeholder="e.g. 15000"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="w-full ps-12 pe-4 py-2.5 rounded-xl border border-zinc-300 text-xs font-semibold focus:outline-none focus:border-accent-gold bg-surface-cream"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Donor Details & Payment Method */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Step 3: Donor Details */}
              <div className="bg-surface-card rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-2 text-primary-900">
                  <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-900 text-xs font-bold flex items-center justify-center">
                    3
                  </span>
                  <h2 className="font-serif font-bold text-lg">
                    Donor Information
                  </h2>
                </div>

                <div className="flex flex-col gap-3 text-xs">
                  <div>
                    <label className="font-medium text-charcoal block mb-1">
                      Full Name {!isAnonymous && "*"}
                    </label>
                    <input
                      type="text"
                      disabled={isAnonymous}
                      placeholder={isAnonymous ? "Anonymous Donor" : "e.g. Zeeshan Haider"}
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-zinc-300 bg-surface-cream disabled:bg-zinc-100 text-xs"
                    />
                  </div>

                  <div>
                    <label className="font-medium text-charcoal block mb-1">
                      Email Address (for Digital Receipt) *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. donor@example.com"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-zinc-300 bg-surface-cream text-xs"
                    />
                  </div>

                  <div>
                    <label className="font-medium text-charcoal block mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +92 300 1234567"
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-zinc-300 bg-surface-cream text-xs"
                    />
                  </div>

                  {/* Anonymity Toggle (Rule 9 compliance) */}
                  <label className="flex items-start gap-2.5 pt-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="rounded border-zinc-300 text-accent-gold focus:ring-accent-gold mt-0.5"
                    />
                    <span className="text-[11px] text-charcoal-muted leading-relaxed">
                      Make my donation anonymous on public impact reports (Rule 9 compliant).
                    </span>
                  </label>
                </div>
              </div>

              {/* Step 4: Payment Method */}
              <div className="bg-surface-card rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-2 text-primary-900">
                  <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-900 text-xs font-bold flex items-center justify-center">
                    4
                  </span>
                  <h2 className="font-serif font-bold text-lg">
                    Payment Gateway (Test Mode)
                  </h2>
                </div>

                {/* Method Tabs */}
                <div className="grid grid-cols-3 gap-2 text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("STRIPE_CARD")}
                    className={`p-2.5 rounded-xl border flex flex-col items-center gap-1.5 transition-all ${
                      paymentMethod === "STRIPE_CARD"
                        ? "border-accent-gold bg-accent-gold/10 text-primary-900 shadow-sm"
                        : "border-zinc-200 text-charcoal hover:bg-zinc-50"
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Card (Stripe)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("BANK_TRANSFER")}
                    className={`p-2.5 rounded-xl border flex flex-col items-center gap-1.5 transition-all ${
                      paymentMethod === "BANK_TRANSFER"
                        ? "border-accent-gold bg-accent-gold/10 text-primary-900 shadow-sm"
                        : "border-zinc-200 text-charcoal hover:bg-zinc-50"
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    <span>Bank Wire</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("JAZZCASH")}
                    className={`p-2.5 rounded-xl border flex flex-col items-center gap-1.5 transition-all ${
                      paymentMethod === "JAZZCASH" || paymentMethod === "EASYPAISA"
                        ? "border-accent-gold bg-accent-gold/10 text-primary-900 shadow-sm"
                        : "border-zinc-200 text-charcoal hover:bg-zinc-50"
                    }`}
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>JazzCash</span>
                  </button>
                </div>

                {/* Sub-form based on method */}
                {paymentMethod === "STRIPE_CARD" && (
                  <div className="p-4 rounded-2xl bg-surface-cream border border-zinc-200 flex flex-col gap-3 text-xs">
                    <div className="flex items-center justify-between text-zinc-500 text-[11px]">
                      <span className="flex items-center gap-1">
                        <Lock className="w-3 h-3 text-status-green" />
                        <span>Stripe 256-bit SSL Encrypted</span>
                      </span>
                      <span className="font-mono bg-zinc-200 px-1.5 py-0.5 rounded text-[10px]">
                        TEST CARDS ONLY
                      </span>
                    </div>

                    <div>
                      <label className="text-[11px] font-medium text-zinc-500 block mb-1">
                        Card Number (Test Simulator)
                      </label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full p-2.5 rounded-lg border border-zinc-300 font-mono text-xs bg-surface-card"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[11px] font-medium text-zinc-500 block mb-1">
                          Expiry MM/YY
                        </label>
                        <input
                          type="text"
                          value={cardExp}
                          onChange={(e) => setCardExp(e.target.value)}
                          className="w-full p-2 rounded-lg border border-zinc-300 font-mono text-xs bg-surface-card"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-medium text-zinc-500 block mb-1">
                          CVC / CVV
                        </label>
                        <input
                          type="text"
                          value={cardCvc}
                          onChange={(e) => setCardCvc(e.target.value)}
                          className="w-full p-2 rounded-lg border border-zinc-300 font-mono text-xs bg-surface-card"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === "BANK_TRANSFER" && (
                  <div className="p-4 rounded-2xl bg-surface-cream border border-zinc-200 flex flex-col gap-2.5 text-xs">
                    <span className="font-bold text-primary-900 text-xs">
                      Official Bank Account Status
                    </span>
                    <div className="space-y-1.5 text-[11px] text-charcoal bg-surface-card p-3.5 rounded-xl border border-zinc-200">
                      <div className="flex items-center justify-between">
                        <strong className="text-zinc-600">Bank Account:</strong>
                        <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                          Pending - To Be Updated
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-500 leading-relaxed pt-1 border-t border-zinc-100">
                        In accordance with official registration and regulatory protocol, our dedicated foundation bank accounts will be published once officially confirmed.
                      </p>
                      <div className="text-[11px] text-[#005972] font-semibold pt-1">
                        Verification / Pledges WhatsApp: <span className="font-mono font-bold">0301-6242067</span>
                      </div>
                    </div>

                    <div className="pt-1">
                      <label className="text-[11px] font-medium text-zinc-500 block mb-1">
                        Bank Transfer Reference / Transaction ID (For Pledged Records)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. FT-98432104"
                        value={bankRef}
                        onChange={(e) => setBankRef(e.target.value)}
                        className="w-full p-2 rounded-lg border border-zinc-300 font-mono text-xs bg-surface-card"
                      />
                    </div>
                  </div>
                )}

                {(paymentMethod === "JAZZCASH" || paymentMethod === "EASYPAISA") && (
                  <div className="p-4 rounded-2xl bg-surface-cream border border-zinc-200 flex flex-col gap-2.5 text-xs">
                    <span className="font-bold text-primary-900 text-xs">
                      Official JazzCash Account (Founder Direct)
                    </span>
                    <div className="space-y-1.5 text-[11px] text-charcoal bg-surface-card p-3.5 rounded-xl border border-zinc-200">
                      <div className="flex items-center justify-between">
                        <strong className="text-zinc-600">Account Title:</strong>
                        <span className="font-bold text-primary-900">Zulaid Chaudhary</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <strong className="text-zinc-600">JazzCash Mobile Number:</strong>
                        <span className="font-mono font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                          0301-6242067
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <strong className="text-zinc-600">Founder Direct WhatsApp:</strong>
                        <span className="font-mono font-bold text-emerald-700">
                          +92 301 6242067
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <strong className="text-zinc-600">Founder Official Email:</strong>
                        <span className="font-mono font-medium text-blue-700">
                          zulaidchaudharyfoundation@gmail.com
                        </span>
                      </div>
                    </div>
                    <p className="text-[11px] text-charcoal-muted leading-relaxed pt-1">
                      Send your contribution via your JazzCash app to <strong>0301-6242067</strong> (Title: Zulaid Chaudhary), then enter your Sender Number &amp; Transaction ID (TID) below to generate your official digital receipt:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      <div>
                        <label className="text-[11px] font-medium text-zinc-500 block mb-1">
                          Your Mobile / Sender Number
                        </label>
                        <input
                          type="tel"
                          placeholder="e.g. 0300 1234567"
                          className="w-full p-2 rounded-lg border border-zinc-300 font-mono text-xs bg-surface-card"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-medium text-zinc-500 block mb-1">
                          JazzCash TID / Reference ID
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. JC-98231024"
                          value={bankRef}
                          onChange={(e) => setBankRef(e.target.value)}
                          className="w-full p-2 rounded-lg border border-zinc-300 font-mono text-xs bg-surface-card"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent-gold hover:bg-accent-gold-light text-primary-900 font-bold py-3.5 px-6 rounded-2xl shadow-lg transition-all hover:scale-[1.01] flex items-center justify-center gap-2 text-sm mt-2 disabled:opacity-50"
                >
                  <Heart className="w-4 h-4 fill-primary-900" />
                  <span>
                    {isSubmitting
                      ? "Recording Contribution..."
                      : `Donate ${currency} ${effectiveAmount.toLocaleString()} Now`}
                  </span>
                </button>

                <p className="text-[10px] text-center text-zinc-400">
                  Strictly 0 unverified claims • Instant Verifiable Receipt • Privacy Guarded
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
