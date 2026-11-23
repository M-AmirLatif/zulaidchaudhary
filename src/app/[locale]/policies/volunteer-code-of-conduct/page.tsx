import { Link } from "@/i18n/routing";
import { Users, Award, Shield, ArrowLeft, CheckCircle2, AlertTriangle } from "lucide-react";

export default function VolunteerCodeOfConductPage() {
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
            <Users className="w-3.5 h-3.5" />
            <span>COMMUNITY STANDARDS & ETHICS</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-950 tracking-tight">
            Volunteer & Member Code of Conduct
          </h1>

          <p className="text-sm text-charcoal-muted">
            Mandatory Charter for all domestic and international chapter volunteers, student ambassadors, and coordinators of Zulaid Chaudhary Foundation.
          </p>
        </div>

        {/* Mandatory Rule Banner */}
        <div className="bg-primary-950 text-surface-cream rounded-3xl p-6 sm:p-8 flex flex-col gap-3 shadow-md border border-primary-900">
          <div className="flex items-center gap-2.5">
            <Shield className="w-6 h-6 text-accent-gold shrink-0" />
            <h2 className="font-serif font-bold text-lg text-accent-gold">
              Fundamental Governance Rule
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
            Under foundation bylaws, <strong>no individual becomes an official volunteer or accredited member without formal vetting and approval by Founder Zulaid Chaudhary or designated executive coordinators</strong>. Membership cards and volunteer status cannot be self-claimed or delegated.
          </p>
        </div>

        {/* Code of Conduct Sections */}
        <div className="bg-white rounded-3xl border border-zinc-200 p-8 sm:p-12 shadow-sm flex flex-col gap-10 text-charcoal text-sm leading-relaxed">
          
          <section className="flex flex-col gap-3">
            <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#16A34A] text-xs font-mono font-bold flex items-center justify-center">01</span>
              <span>Dignity & Beneficiary Protection</span>
            </h3>
            <p className="text-charcoal-muted text-xs sm:text-sm">
              Volunteers interact with families experiencing acute economic or clinical vulnerability. Every volunteer must treat every patient, elderly citizen, orphan, and distressed family with the highest degree of gentleness, patience, and humility. Demeaning language, condescension, or unauthorized mobile photography of beneficiaries during ration distribution or hospital visits is strictly prohibited.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#16A34A] text-xs font-mono font-bold flex items-center justify-center">02</span>
              <span>Zero Tolerance for Unauthorized Collections</span>
            </h3>
            <p className="text-charcoal-muted text-xs sm:text-sm">
              All financial donations must pass directly through official foundation bank accounts or verified online gateways. <strong>Volunteers, regional coordinators, and student ambassadors are strictly forbidden from accepting personal cash, collecting charity into private personal bank accounts, or issuing self-printed receipts in the name of Zulaid Chaudhary Foundation.</strong> Any violation constitutes criminal fraud and will be reported to legal authorities.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#16A34A] text-xs font-mono font-bold flex items-center justify-center">03</span>
              <span>Child & Vulnerable Person Safeguarding</span>
            </h3>
            <p className="text-charcoal-muted text-xs sm:text-sm">
              When volunteering at pediatric medical centers, schools, or distribution sites:
            </p>
            <ul className="list-disc ps-5 space-y-1.5 text-xs sm:text-sm text-charcoal-muted">
              <li>No volunteer may be alone in an unmonitored room with an unaccompanied minor.</li>
              <li>Under no circumstances may a volunteer solicit personal social media contact with minor beneficiaries.</li>
              <li>Any observation or suspicion of child neglect or abuse must be reported immediately to the Child Protection Bureau and the foundation executive council.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#16A34A] text-xs font-mono font-bold flex items-center justify-center">04</span>
              <span>Public Statements & Media Representation</span>
            </h3>
            <p className="text-charcoal-muted text-xs sm:text-sm">
              Only authorized foundation spokespersons may issue formal press releases, policy statements, or television interviews. While volunteers are encouraged to share their personal community service experiences on personal social media, they may not speak on behalf of the foundation on political, controversial, or foreign policy matters.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h3 className="font-serif font-bold text-xl text-primary-950 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#16A34A] text-xs font-mono font-bold flex items-center justify-center">05</span>
              <span>Disciplinary Procedures & Whistleblowing</span>
            </h3>
            <p className="text-charcoal-muted text-xs sm:text-sm">
              Failure to adhere to this Code of Conduct will result in immediate suspension, revocation of membership credentials, and removal from chapter registries. If you observe any volunteer or staff misconduct, file a confidential report through our Whistleblower channel on the Contact page or email:{" "}
              <a href="mailto:conduct@zulaidchaudharyfoundation.com" className="font-semibold text-primary-900 underline">
                conduct@zulaidchaudharyfoundation.com
              </a>.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
