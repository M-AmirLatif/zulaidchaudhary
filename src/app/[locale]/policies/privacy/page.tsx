import { Link } from "@/i18n/routing";
import { ShieldCheck, Lock, FileText, CheckCircle2, AlertCircle, ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
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
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-[#166534] border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-bold self-start">
            <Lock className="w-3.5 h-3.5" />
            <span>ETHICAL DATA GOVERNANCE</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-950 tracking-tight">
            Privacy & Patient Data Protection Policy
          </h1>

          <p className="text-sm text-charcoal-muted">
            Last Updated & Verified: November 2026 • Effective for all global digital platforms and clinical intake points of Zulaid Chaudhary Foundation.
          </p>
        </div>

        {/* Ethical Commitment Highlight */}
        <div className="bg-primary-950 text-surface-cream rounded-3xl p-6 sm:p-8 flex flex-col gap-4 shadow-md border border-primary-900">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-accent-gold shrink-0" />
            <h2 className="font-serif font-bold text-lg sm:text-xl text-accent-gold">
              Core Institutional Principle: Dignity Over Publicity
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
            Zulaid Chaudhary Foundation enforces strict medical ethics. Deserving beneficiaries and vulnerable patients seeking surgical or financial relief will never have their personal distress, diagnostic reports, or identifiable imagery broadcast publicly without freely given, written informed consent. Our digital infrastructure is designed to safeguard donor trust and patient dignity above all marketing considerations.
          </p>
        </div>

        {/* Main Content Sections */}
        <div className="bg-white rounded-3xl border border-zinc-200 p-8 sm:p-12 shadow-sm flex flex-col gap-10 text-charcoal text-sm leading-relaxed">
          
          {/* Section 1 */}
          <section className="flex flex-col gap-3">
            <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#16A34A] text-xs font-mono font-bold flex items-center justify-center">01</span>
              <span>Scope & Controller Information</span>
            </h3>
            <p className="text-charcoal-muted text-xs sm:text-sm">
              This Privacy Policy applies to personal, financial, and clinical information collected through <strong>ZulaidChaudharyFoundation.com</strong>, associated subdomains, volunteer registration portals, and clinical liaison offices. The data controller is the Board of Trustees of Zulaid Chaudhary Foundation (Lahore, Pakistan).
            </p>
          </section>

          {/* Section 2 */}
          <section className="flex flex-col gap-3">
            <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#16A34A] text-xs font-mono font-bold flex items-center justify-center">02</span>
              <span>Patient & Medical Data Confidentiality</span>
            </h3>
            <p className="text-charcoal-muted text-xs sm:text-sm">
              In accordance with international biomedical ethics and Pakistani healthcare privacy standards:
            </p>
            <ul className="list-disc ps-5 space-y-2 text-xs sm:text-sm text-charcoal-muted">
              <li><strong>Zero Mandatory Publicity:</strong> Receiving free surgical sponsorship or medical assistance is never contingent upon agreeing to photos, video interviews, or marketing campaigns.</li>
              <li><strong>Informed Consent Protocol:</strong> Diagnostic reports and patient identities submitted for Clinical Advisory Committee vetting are restricted to certified physicians and coordinators.</li>
              <li><strong>De-Identification:</strong> Public progress ledgers (e.g., cases treated) display only non-identifying reference numbers (`ZCF-MED-XXXXXX`), general medical categories, and city of treatment.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="flex flex-col gap-3">
            <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#16A34A] text-xs font-mono font-bold flex items-center justify-center">03</span>
              <span>Donor Privacy & Financial Transactions</span>
            </h3>
            <p className="text-charcoal-muted text-xs sm:text-sm">
              We respect the spiritual and personal sanctity of charitable giving:
            </p>
            <ul className="list-disc ps-5 space-y-2 text-xs sm:text-sm text-charcoal-muted">
              <li><strong>No Card Data Stored:</strong> Credit/debit card transactions are processed through certified PCI-DSS Level 1 payment processors (e.g. Stripe). Our servers never see, store, or transmit full 16-digit card numbers or CVV codes.</li>
              <li><strong>Donor Anonymity:</strong> Donors can elect to keep their contributions confidential. Public audit statements aggregate financial numbers and never publish personal email addresses or contact numbers.</li>
              <li><strong>Zero Data Selling:</strong> We will never sell, rent, or trade donor lists to commercial marketing entities.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="flex flex-col gap-3">
            <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#16A34A] text-xs font-mono font-bold flex items-center justify-center">04</span>
              <span>Volunteer & Member Records</span>
            </h3>
            <p className="text-charcoal-muted text-xs sm:text-sm">
              Information submitted via volunteer or chapter membership forms is reviewed exclusively by the founder and authorized regional coordinators for verification. Contact details are used strictly for humanitarian mobilization, event briefing, and emergency disaster relief response.
            </p>
          </section>

          {/* Section 5 */}
          <section className="flex flex-col gap-3">
            <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#16A34A] text-xs font-mono font-bold flex items-center justify-center">05</span>
              <span>Your Legal Rights & Data Subject Requests</span>
            </h3>
            <p className="text-charcoal-muted text-xs sm:text-sm">
              Regardless of your geographical location, you maintain full authority over your personal information:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col gap-1">
                <span className="font-bold text-primary-950 text-xs">Right to Access & Portability</span>
                <span className="text-[11px] text-charcoal-muted">Request an exported copy of all donation records or application files tied to your email.</span>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col gap-1">
                <span className="font-bold text-primary-950 text-xs">Right to Erasure (&quot;Be Forgotten&quot;)</span>
                <span className="text-[11px] text-charcoal-muted">Request permanent deletion of non-statutory user profiles and contact records.</span>
              </div>
            </div>
          </section>

          {/* Contact Box */}
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col gap-2">
            <span className="font-serif font-bold text-primary-950 text-sm">
              Data Protection & Privacy Officer
            </span>
            <p className="text-xs text-charcoal-muted">
              For privacy inquiries, consent revocations, or data deletion requests, contact our legal oversight desk at:{" "}
              <a href="mailto:privacy@zulaidchaudharyfoundation.com" className="font-semibold text-[#166534] underline">
                privacy@zulaidchaudharyfoundation.com
              </a>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
