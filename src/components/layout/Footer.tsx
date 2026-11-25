import { Link } from "@/i18n/routing";
import {
  ShieldCheck,
  Search,
  Lock,
  FileText,
  HeartHandshake,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#ebf8ff] text-slate-800 border-t border-[#cbe7f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#c2e2f5]">
          
          {/* Column 1: Brand & Socials (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#009ee2] text-white flex items-center justify-center font-serif font-extrabold text-xl shadow">
                ZCF
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-extrabold text-lg text-slate-900">
                  Zulaid Chaudhary Foundation
                </span>
                <span className="text-[11px] text-[#005972] font-semibold tracking-wide">
                  Humanity • Healthcare • Hope • Justice
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              An emerging international humanitarian organization founded by Zulaid Chaudhary, dedicated to free surgical healthcare access, construction of ZCF General & Welfare Hospital in Shorkot, community relief across District Jhang, working animal equine care, and lawful human rights advocacy.
            </p>

            {/* Live Case & Application Tracking Quick CTA */}
            <div className="mt-2 p-3 rounded-2xl bg-white border border-[#cbe7f7] shadow-sm flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <Search className="w-4 h-4 text-[#009ee2] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900">Track Case or Application</span>
                  <span className="text-[10px] text-slate-500">Real-time status across all foundation modules</span>
                </div>
              </div>
              <Link
                href="/track"
                className="px-3.5 py-1.5 rounded-full bg-[#009ee2] text-white font-bold text-xs hover:bg-[#0085be] transition-colors whitespace-nowrap shadow-sm"
              >
                Track Now
              </Link>
            </div>

            {/* Social Media Circular Links */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
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
                className="w-9 h-9 rounded-full bg-[#CD201F] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                aria-label="YouTube"
              >
                <span className="font-bold text-xs">yt</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                aria-label="LinkedIn"
              >
                <span className="font-bold text-xs">in</span>
              </a>
              <a
                href="https://wa.me/923016242067"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                aria-label="WhatsApp"
              >
                <span className="font-bold text-xs">wa</span>
              </a>
            </div>
          </div>

          {/* Column 2: Legal & Institutional Policies (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-serif font-bold text-sm text-[#005972] uppercase tracking-wider">
              Legal & Transparency
            </h4>
            
            <div className="space-y-3 text-xs text-slate-600 font-sans">
              <div className="bg-white p-3 rounded-2xl border border-[#cbe7f7] shadow-sm flex flex-col gap-1">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#16a34a]" />
                  <span>Legal Status Notice</span>
                </span>
                <span className="text-[11px] text-slate-500">
                  Registration in progress under Companies Act. Groundwork established for full regulatory compliance.
                </span>
              </div>

              <div className="flex flex-col gap-2 pt-1 font-medium">
                <Link href="/policies/privacy" className="flex items-center gap-1.5 hover:text-[#009ee2] transition-colors">
                  <Lock className="w-3.5 h-3.5 text-[#009ee2] shrink-0" />
                  <span>Patient Privacy & Data Protection</span>
                </Link>
                <Link href="/policies/terms" className="flex items-center gap-1.5 hover:text-[#009ee2] transition-colors">
                  <FileText className="w-3.5 h-3.5 text-[#009ee2] shrink-0" />
                  <span>Terms of Service & Legal Jurisdiction</span>
                </Link>
                <Link href="/policies/donation-policy" className="flex items-center gap-1.5 hover:text-[#009ee2] transition-colors">
                  <FileText className="w-3.5 h-3.5 text-[#009ee2] shrink-0" />
                  <span>Donation, Receipt & Refund Policy</span>
                </Link>
                <Link href="/policies/volunteer-code-of-conduct" className="flex items-center gap-1.5 hover:text-[#009ee2] transition-colors">
                  <HeartHandshake className="w-3.5 h-3.5 text-[#009ee2] shrink-0" />
                  <span>Volunteer Code of Conduct</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Column 3: Giving & Core Initiatives (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-serif font-bold text-sm text-[#005972] uppercase tracking-wider">
              Humanitarian Programs
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs font-semibold text-slate-600">
              <li>
                <Link href="/our-work/medical-assistance" className="hover:text-[#009ee2] transition-colors">
                  🏥 Free Medical Treatment & Surgery
                </Link>
              </li>
              <li>
                <Link href="/our-work/hospital" className="hover:text-[#009ee2] transition-colors">
                  🏗️ Charity Hospital Under Construction
                </Link>
              </li>
              <li>
                <Link href="/our-work/animal-welfare" className="hover:text-[#009ee2] transition-colors">
                  🐾 Animal Welfare & Equine Rescue
                </Link>
              </li>
              <li>
                <Link href="/our-work/social-welfare" className="hover:text-[#009ee2] transition-colors">
                  🌾 Food & Monthly Ration Distribution
                </Link>
              </li>
              <li>
                <Link href="/our-work/environment" className="hover:text-[#009ee2] transition-colors">
                  🌱 Clean Water Wells & Tree Plantation
                </Link>
              </li>
              <li>
                <Link href="/our-work/human-rights" className="hover:text-[#009ee2] transition-colors">
                  ⚖️ Human Rights & Palestine Advocacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-serif font-bold text-sm text-[#005972] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs font-semibold text-slate-600">
              <li><Link href="/" className="hover:text-[#009ee2] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#009ee2] transition-colors">About Us</Link></li>
              <li><Link href="/about/founder" className="hover:text-[#009ee2] transition-colors">Founder Profile</Link></li>
              <li><Link href="/articles" className="hover:text-[#009ee2] transition-colors">Founder&apos;s Columns</Link></li>
              <li><Link href="/transparency" className="hover:text-[#009ee2] transition-colors">Transparency Ledger</Link></li>
              <li><Link href="/get-involved" className="hover:text-[#009ee2] transition-colors">Volunteer With Us</Link></li>
              <li><Link href="/track" className="hover:text-[#009ee2] transition-colors">Status Tracker</Link></li>
              <li><Link href="/contact" className="hover:text-[#009ee2] transition-colors">Contact & Complaints</Link></li>
            </ul>
          </div>

        </div>

        {/* Full-Width Multi-City Regional Directory */}
        <div className="py-10 border-b border-[#c2e2f5]">
          <div className="text-center mb-6">
            <h4 className="font-serif font-bold text-sm text-[#005972] uppercase tracking-wider">
              Main Secretariat & Regional Branches
            </h4>
            <p className="text-[11px] text-slate-500 mt-1">
              Serving District Jhang communities through direct clinical, humanitarian, and emergency relief operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-slate-600">
            {/* Shorkot - Main Branch & Head Office */}
            <div className="bg-white p-4 rounded-2xl border-2 border-emerald-300/80 shadow-sm flex flex-col gap-1.5 relative overflow-hidden">
              <span className="text-[9px] uppercase font-bold tracking-widest bg-emerald-600 text-white px-2 py-0.5 rounded-full self-start">
                Head Office & Hospital Site
              </span>
              <span className="font-serif font-bold text-slate-900 text-sm mt-1">
                Shorkot (Main Branch)
              </span>
              <p className="text-[11px] leading-relaxed text-slate-500">
                Opposite Government Elementary School, Mirali Wala, Dabklan Road, Tehsil Shorkot, District Jhang
              </p>
              <div className="mt-auto pt-2 border-t border-slate-100 flex flex-col gap-0.5 text-[11px] font-mono text-[#005972]">
                <span>WhatsApp: 0301-6242067</span>
                <span className="text-[10px] text-emerald-700 font-sans font-semibold">ZCF General & Welfare Hospital</span>
              </div>
            </div>

            {/* Jhang */}
            <div className="bg-white p-4 rounded-2xl border border-[#cbe7f7] shadow-sm flex flex-col gap-1.5">
              <span className="text-[9px] uppercase font-bold tracking-widest bg-blue-100 text-[#005972] px-2 py-0.5 rounded-full self-start">
                Regional Center
              </span>
              <span className="font-serif font-bold text-slate-900 text-sm mt-1">
                Jhang Branch
              </span>
              <p className="text-[11px] leading-relaxed text-slate-500">
                District Headquarters Public Welfare & Healthcare Liaison, Jhang, Punjab
              </p>
              <div className="mt-auto pt-2 border-t border-slate-100 text-[11px] font-mono text-[#005972]">
                <span>Contact: 0301-6242067</span>
              </div>
            </div>

            {/* Athara Hazari */}
            <div className="bg-white p-4 rounded-2xl border border-[#cbe7f7] shadow-sm flex flex-col gap-1.5">
              <span className="text-[9px] uppercase font-bold tracking-widest bg-blue-100 text-[#005972] px-2 py-0.5 rounded-full self-start">
                Regional Center
              </span>
              <span className="font-serif font-bold text-slate-900 text-sm mt-1">
                Athara Hazari Branch
              </span>
              <p className="text-[11px] leading-relaxed text-slate-500">
                Community Outreach & Family Assistance Liaison, Tehsil Athara Hazari, District Jhang
              </p>
              <div className="mt-auto pt-2 border-t border-slate-100 text-[11px] font-mono text-[#005972]">
                <span>Contact: 0301-6242067</span>
              </div>
            </div>

            {/* Ahmedpur Sial */}
            <div className="bg-white p-4 rounded-2xl border border-[#cbe7f7] shadow-sm flex flex-col gap-1.5">
              <span className="text-[9px] uppercase font-bold tracking-widest bg-blue-100 text-[#005972] px-2 py-0.5 rounded-full self-start">
                Regional Center
              </span>
              <span className="font-serif font-bold text-slate-900 text-sm mt-1">
                Ahmedpur Sial Branch
              </span>
              <p className="text-[11px] leading-relaxed text-slate-500">
                Welfare & Emergency Relief Desk, Tehsil Ahmedpur Sial, District Jhang
              </p>
              <div className="mt-auto pt-2 border-t border-slate-100 text-[11px] font-mono text-[#005972]">
                <span>Contact: 0301-6242067</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Payment Methods Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Zulaid Chaudhary Foundation. All rights reserved.
          </div>

          <div className="flex items-center gap-2.5">
            <span className="text-[11px] font-medium text-slate-500">Payment Gateways (Test Mode):</span>
            <span className="font-mono text-[10px] bg-white border border-[#cbe7f7] px-2 py-0.5 rounded text-slate-700 shadow-sm">
              VISA
            </span>
            <span className="font-mono text-[10px] bg-white border border-[#cbe7f7] px-2 py-0.5 rounded text-slate-700 shadow-sm">
              Mastercard
            </span>
            <span className="font-mono text-[10px] bg-white border border-[#cbe7f7] px-2 py-0.5 rounded text-slate-700 shadow-sm">
              Meezan Bank
            </span>
            <span className="font-mono text-[10px] bg-white border border-[#cbe7f7] px-2 py-0.5 rounded text-slate-700 shadow-sm">
              JazzCash
            </span>
            <span className="font-mono text-[10px] bg-white border border-[#cbe7f7] px-2 py-0.5 rounded text-slate-700 shadow-sm">
              Easypaisa
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
