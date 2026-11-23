import { Link } from "@/i18n/routing";
import { Heart, FileCheck, ArrowLeft, RefreshCw, ShieldCheck } from "lucide-react";

export default function DonationPolicyPage() {
  return (
    <div className="w-full py-16 px-4 bg-surface-cream">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-primary-900 hover:text-accent-gold-dark transition-colors self-start"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-accent-gold-dark border border-amber-200 px-3.5 py-1.5 rounded-full text-xs font-bold self-start">
            <Heart className="w-3.5 h-3.5 fill-accent-gold-dark" />
            <span>FINANCIAL TRANSPARENCY & GIVING INTEGRITY</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-950 tracking-tight">
            Donation, Receipt & Refund Policy
          </h1>

          <p className="text-sm text-charcoal-muted">
            Effective Date: November 2026 • Governing all domestic and international charitable contributions to Zulaid Chaudhary Foundation.
          </p>
        </div>

        {/* 100% Accountability Banner */}
        <div className="bg-primary-950 text-surface-cream rounded-3xl p-6 sm:p-8 flex flex-col gap-3 shadow-md border border-primary-900">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-6 h-6 text-accent-gold shrink-0" />
            <h2 className="font-serif font-bold text-lg text-accent-gold">
              Fiduciary Responsibility to Donors
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
            Every rupee, dollar, or pound donated to Zulaid Chaudhary Foundation is a sacred trust (Amanah). In keeping with our strict ethics rules, all public numbers and metrics are verified by administrative records, and every donor receives an instant verifiable digital receipt.
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="bg-white rounded-3xl border border-zinc-200 p-8 sm:p-12 shadow-sm flex flex-col gap-10 text-charcoal text-sm leading-relaxed">
          
          <section className="flex flex-col gap-3">
            <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-amber-50 text-accent-gold-dark text-xs font-mono font-bold flex items-center justify-center">01</span>
              <span>Designated & Restricted Contributions</span>
            </h3>
            <p className="text-charcoal-muted text-xs sm:text-sm">
              Donors may specify the precise purpose of their giving:
            </p>
            <ul className="list-disc ps-5 space-y-1.5 text-xs sm:text-sm text-charcoal-muted">
              <li><strong>Free Medical & Surgery Fund:</strong> Allocated directly to hospital pharmacy pools and surgical consumables for vetted patients.</li>
              <li><strong>Hospital Construction Network:</strong> Allocated exclusively to infrastructure, bricks, civil engineering, and diagnostic equipment.</li>
              <li><strong>Zakat Allocation:</strong> Disbursed strictly to eligible Mustahiq beneficiaries under Shariah and transparent guidelines.</li>
              <li><strong>Sadaqah Jariyah / Isaal-e-Sawab:</strong> Dedicated giving on behalf of parents or deceased loved ones.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-amber-50 text-accent-gold-dark text-xs font-mono font-bold flex items-center justify-center">02</span>
              <span>Verifiable Digital Receipts (ZCF-2026-XXXX)</span>
            </h3>
            <p className="text-charcoal-muted text-xs sm:text-sm">
              Upon successful processing through our payment gateways (Stripe, direct wire transfer, or mobile wallets), the system immediately issues an official digital receipt. This document contains a unique alphanumeric tracking reference, donation timestamp, payment channel verification, and non-profit allocation notes. Donors may download a formatted PDF or access their complete transaction ledger inside the authenticated personal dashboard.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-amber-50 text-accent-gold-dark text-xs font-mono font-bold flex items-center justify-center">03</span>
              <span>Dispute Resolution & Refund Guidelines</span>
            </h3>
            <p className="text-charcoal-muted text-xs sm:text-sm">
              Because charitable contributions are deployed promptly to clinical interventions and emergency relief:
            </p>
            <ul className="list-disc ps-5 space-y-1.5 text-xs sm:text-sm text-charcoal-muted">
              <li><strong>Accidental Duplicate Charges:</strong> If an electronic processing error results in double billing, notify our finance desk within 14 business days. The duplicate charge will be refunded promptly to the original payment instrument.</li>
              <li><strong>Unauthorized Card Usage:</strong> If your card was used fraudulently, contact your issuing bank immediately. We fully cooperate with financial fraud units to reverse unauthorized transactions.</li>
              <li><strong>Voluntary Donations:</strong> Once funds have been verified and disbursed to a hospital or relief campaign, charitable donations are generally non-refundable.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-amber-50 text-accent-gold-dark text-xs font-mono font-bold flex items-center justify-center">04</span>
              <span>Regulatory Compliance & Anti-Money Laundering</span>
            </h3>
            <p className="text-charcoal-muted text-xs sm:text-sm">
              Zulaid Chaudhary Foundation strictly complies with Financial Action Task Force (FATF) standards, SECP regulations, and Pakistani anti-money laundering (AML) laws. We do not accept anonymous cash transfers above statutory limits, and all high-value corporate contributions undergo Know Your Donor (KYD) verification.
            </p>
          </section>

          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col gap-2">
            <span className="font-serif font-bold text-primary-950 text-sm">
              Finance & Donor Accounts Desk
            </span>
            <p className="text-xs text-charcoal-muted">
              For receipt inquiries, bank wire proof-of-payment verifications, or refund questions, email:{" "}
              <a href="mailto:finance@zulaidchaudharyfoundation.com" className="font-semibold text-primary-900 underline">
                finance@zulaidchaudharyfoundation.com
              </a>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
