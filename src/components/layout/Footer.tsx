import { Link } from "@/i18n/routing";
import {
  ShieldCheck,
  Heart,
  Phone,
  Mail,
  MapPin,
  Globe,
  ExternalLink,
  CreditCard,
  Building2,
  Smartphone,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#EBF8FF] text-charcoal border-t border-blue-200">
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-blue-200/80">
          
          {/* Column 1: Brand & Socials (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary-900 to-blue-900 text-accent-gold flex items-center justify-center font-serif font-bold text-xl shadow">
                ZCF
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg text-primary-900">
                  Zulaid Chaudhary Foundation
                </span>
                <span className="text-[11px] text-zinc-500 font-sans">
                  Humanity • Healthcare • Hope • Justice
                </span>
              </div>
            </Link>

            <p className="text-xs text-charcoal-muted leading-relaxed font-sans">
              An emerging international humanitarian organization founded by Zulaid Chaudhary, dedicated to healthcare access, hospital construction, animal welfare, and lawful human rights advocacy.
            </p>

            {/* Social Media Circular Links */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                aria-label="Facebook"
              >
                <span className="font-bold text-xs">f</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                aria-label="Instagram"
              >
                <span className="font-bold text-xs">ig</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                aria-label="YouTube"
              >
                <span className="font-bold text-xs">yt</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-700 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                aria-label="LinkedIn"
              >
                <span className="font-bold text-xs">in</span>
              </a>
              <a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                aria-label="WhatsApp"
              >
                <span className="font-bold text-xs">wa</span>
              </a>
            </div>
          </div>

          {/* Column 2: Legal & Regulatory Transparency (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-serif font-bold text-sm text-primary-900 uppercase tracking-wider">
              Legal & Compliance
            </h4>
            
            <div className="space-y-2 text-xs text-charcoal-muted font-sans">
              <div className="bg-white/80 p-3 rounded-xl border border-blue-200/60 flex flex-col gap-1">
                <span className="font-bold text-primary-900 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-gold-dark" />
                  <span>Legal Status Notice</span>
                </span>
                <span className="text-[11px] text-zinc-600">
                  Registration in progress with regulatory authorities under Companies Act.
                </span>
              </div>

              <div>
                <strong className="text-charcoal">Taxation Status:</strong> Official tax filings and exempt status documents will be published upon final regulatory issuance.
              </div>

              <div>
                <strong className="text-charcoal">Audit Commitment:</strong> 100% of medical donations are logged with transparent state diff audit entries.
              </div>
            </div>
          </div>

          {/* Column 3: Giving & Core Initiatives (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-serif font-bold text-sm text-primary-900 uppercase tracking-wider">
              Humanitarian Programs
            </h4>
            <ul className="flex flex-col gap-2 text-xs font-medium text-charcoal-muted">
              <li>
                <Link href="/our-work/medical-assistance" className="hover:text-[#1A56DB] transition-colors">
                  🏥 Free Medical Treatment & Surgery
                </Link>
              </li>
              <li>
                <Link href="/our-work/hospital" className="hover:text-[#1A56DB] transition-colors">
                  🏗️ Charity Hospital Under Construction
                </Link>
              </li>
              <li>
                <Link href="/our-work/animal-welfare" className="hover:text-[#1A56DB] transition-colors">
                  🐾 Animal Welfare & Equine Rescue
                </Link>
              </li>
              <li>
                <Link href="/our-work/social-welfare" className="hover:text-[#1A56DB] transition-colors">
                  🌾 Food & Monthly Ration Distribution
                </Link>
              </li>
              <li>
                <Link href="/our-work/environment" className="hover:text-[#1A56DB] transition-colors">
                  🌱 Clean Water Wells & Tree Plantation
                </Link>
              </li>
              <li>
                <Link href="/our-work/human-rights" className="hover:text-[#1A56DB] transition-colors">
                  ⚖️ Human Rights & Palestine Advocacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-serif font-bold text-sm text-primary-900 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 text-xs font-medium text-charcoal-muted">
              <li><Link href="/" className="hover:text-[#1A56DB] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#1A56DB] transition-colors">About Us</Link></li>
              <li><Link href="/about/founder" className="hover:text-[#1A56DB] transition-colors">Founder Profile</Link></li>
              <li><Link href="/articles" className="hover:text-[#1A56DB] transition-colors">Founder&apos;s Columns</Link></li>
              <li><Link href="/transparency" className="hover:text-[#1A56DB] transition-colors">Transparency Ledger</Link></li>
              <li><Link href="/get-involved" className="hover:text-[#1A56DB] transition-colors">Volunteer With Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#1A56DB] transition-colors">Contact & Complaints</Link></li>
            </ul>
          </div>

        </div>

        {/* Full-Width Multi-City Regional Directory (Exact MTJ Directory Component) */}
        <div className="py-10 border-b border-blue-200/80">
          <h4 className="font-serif font-bold text-sm text-primary-900 uppercase tracking-wider mb-6 text-center">
            Regional Secretariats & Chapter Liaison
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-charcoal-muted">
            {/* Lahore */}
            <div className="bg-white/70 p-4 rounded-2xl border border-blue-200/60 flex flex-col gap-1.5">
              <span className="font-serif font-bold text-primary-900 text-sm">
                Lahore (Headquarters)
              </span>
              <p className="text-[11px] leading-relaxed">
                Gulberg III, Main Boulevard, Lahore, Punjab, Pakistan
              </p>
              <span className="text-[11px] font-mono font-semibold text-charcoal">
                Tel: +92 42 30000000
              </span>
            </div>

            {/* Karachi */}
            <div className="bg-white/70 p-4 rounded-2xl border border-blue-200/60 flex flex-col gap-1.5">
              <span className="font-serif font-bold text-primary-900 text-sm">
                Karachi Chapter
              </span>
              <p className="text-[11px] leading-relaxed">
                PECHS Block 2, Shahrah-e-Faisal, Karachi, Sindh
              </p>
              <span className="text-[11px] font-mono font-semibold text-charcoal">
                Tel: +92 21 30000000
              </span>
            </div>

            {/* Islamabad */}
            <div className="bg-white/70 p-4 rounded-2xl border border-blue-200/60 flex flex-col gap-1.5">
              <span className="font-serif font-bold text-primary-900 text-sm">
                Islamabad / Rawalpindi
              </span>
              <p className="text-[11px] leading-relaxed">
                Blue Area, Jinnah Avenue, Islamabad, Capital Territory
              </p>
              <span className="text-[11px] font-mono font-semibold text-charcoal">
                Tel: +92 51 30000000
              </span>
            </div>

            {/* International Diaspora */}
            <div className="bg-white/70 p-4 rounded-2xl border border-blue-200/60 flex flex-col gap-1.5">
              <span className="font-serif font-bold text-primary-900 text-sm">
                International (USA / UK Desk)
              </span>
              <p className="text-[11px] leading-relaxed">
                Liaison via Physician Advisory Council, New York / London
              </p>
              <span className="text-[11px] font-mono font-semibold text-[#1A56DB]">
                global@zulaidchaudharyfoundation.com
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Payment Methods Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} Zulaid Chaudhary Foundation. All rights reserved.
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-medium text-zinc-400">Supported Gateways:</span>
            <span className="font-mono text-[10px] bg-white border border-zinc-200 px-2 py-0.5 rounded text-charcoal">
              VISA
            </span>
            <span className="font-mono text-[10px] bg-white border border-zinc-200 px-2 py-0.5 rounded text-charcoal">
              Mastercard
            </span>
            <span className="font-mono text-[10px] bg-white border border-zinc-200 px-2 py-0.5 rounded text-charcoal">
              Meezan Bank
            </span>
            <span className="font-mono text-[10px] bg-white border border-zinc-200 px-2 py-0.5 rounded text-charcoal">
              JazzCash
            </span>
            <span className="font-mono text-[10px] bg-white border border-zinc-200 px-2 py-0.5 rounded text-charcoal">
              Easypaisa
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
