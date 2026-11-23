import { Link } from "@/i18n/routing";
import { Scale, FileText, ArrowLeft, ShieldAlert } from "lucide-react";

export default function TermsOfServicePage() {
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
          <div className="inline-flex items-center gap-2 bg-blue-100 text-[#1A56DB] border border-blue-200 px-3.5 py-1.5 rounded-full text-xs font-bold self-start">
            <Scale className="w-3.5 h-3.5" />
            <span>LEGAL FRAMEWORK & USER AGREEMENT</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-950 tracking-tight">
            Terms & Conditions of Service
          </h1>

          <p className="text-sm text-charcoal-muted">
            Last Revised: November 2026 • Governs usage of ZulaidChaudharyFoundation.com and associated humanitarian services.
          </p>
        </div>

        {/* Emergency Notice Card */}
        <div className="bg-red-50 border border-red-200 rounded-3xl p-6 sm:p-8 flex items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-alert-red shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1.5">
            <span className="font-serif font-bold text-base text-red-950">
              Crucial Emergency Medical Disclaimer
            </span>
            <p className="text-xs sm:text-sm text-red-900 leading-relaxed font-sans">
              Zulaid Chaudhary Foundation provides charitable sponsorship, financial assistance, and scheduled healthcare facilitation. <strong>This platform does not replace municipal 1122 rescue services, fire brigades, or acute hospital emergency rooms.</strong> In the event of immediate, life-threatening trauma or medical crises, always contact local emergency services directly.
            </p>
          </div>
        </div>

        {/* Main Terms Sections */}
        <div className="bg-white rounded-3xl border border-zinc-200 p-8 sm:p-12 shadow-sm flex flex-col gap-10 text-charcoal text-sm leading-relaxed">
          
          <section className="flex flex-col gap-3">
            <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1A56DB] text-xs font-mono font-bold flex items-center justify-center">01</span>
              <span>Acceptance & Lawful Use</span>
            </h3>
            <p className="text-charcoal-muted text-xs sm:text-sm">
              By accessing ZulaidChaudharyFoundation.com, registering as a volunteer, submitting assistance requests, or contributing charitable funds, you agree to comply with all applicable local and international laws. All interactions must be lawful, peaceful, and aligned with our humanitarian values.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1A56DB] text-xs font-mono font-bold flex items-center justify-center">02</span>
              <span>Factual Accuracy of Submissions</span>
            </h3>
            <p className="text-charcoal-muted text-xs sm:text-sm">
              Applicants seeking patient surgery sponsorship, student education grants, or family ration packages warrant that all diagnostic documents, hospital estimates, and household circumstances submitted are authentic and truthful. Submitting fraudulent hospital bills, falsified doctor prescriptions, or altered identity documents will result in immediate disqualification and referral to relevant oversight bodies.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1A56DB] text-xs font-mono font-bold flex items-center justify-center">03</span>
              <span>Intellectual Property & Brand Integrity</span>
            </h3>
            <p className="text-charcoal-muted text-xs sm:text-sm">
              All branding emblems, founder photographs, research whitepapers, and digital software infrastructure are the intellectual property of Zulaid Chaudhary Foundation. No individual or entity may solicit donations, launch campaigns, or issue public statements in the name of the foundation without express written authorization from Founder Zulaid Chaudhary.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1A56DB] text-xs font-mono font-bold flex items-center justify-center">04</span>
              <span>Governing Law & Legal Jurisdiction</span>
            </h3>
            <p className="text-charcoal-muted text-xs sm:text-sm">
              These terms are governed by the laws of the Islamic Republic of Pakistan. Any legal proceedings or disputes arising from foundation operations or website usage shall be subject to the exclusive jurisdiction of the competent courts in Lahore, Punjab, Pakistan.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
