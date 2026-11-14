import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ShieldCheck, Heart, AlertCircle, Mail, MapPin } from "lucide-react";

export function Footer() {
  const t = useTranslations("common");

  return (
    <footer className="bg-primary-900 text-surface-cream border-t border-primary-800 pt-16 pb-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-primary-800">
        {/* Col 1: Brand & Mission */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent-gold text-primary-900 flex items-center justify-center font-serif font-bold text-xl shadow">
              ZCF
            </div>
            <span className="font-serif font-bold text-xl text-surface-cream">
              {t("siteName")}
            </span>
          </div>
          <p className="text-zinc-300 text-sm leading-relaxed">
            {t("tagline")}
          </p>
          <div className="bg-primary-800/80 p-3 rounded-lg border border-primary-700/60 text-xs text-zinc-300 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-accent-gold block">{t("legalStatus")}</span>
              <span>{t("legalDisclaimer")}</span>
            </div>
          </div>
        </div>

        {/* Col 2: Humanitarian Pillars */}
        <div className="flex flex-col gap-3">
          <h4 className="font-serif font-semibold text-accent-gold text-base tracking-wide">
            {t("nav.ourWork")}
          </h4>
          <ul className="flex flex-col gap-2 text-sm text-zinc-300">
            <li>
              <Link href="/our-work/medical-assistance" className="hover:text-accent-gold transition-colors">
                {t("nav.medicalAssistance")}
              </Link>
            </li>
            <li>
              <Link href="/our-work/hospital" className="hover:text-accent-gold transition-colors">
                {t("nav.hospital")}
              </Link>
            </li>
            <li>
              <Link href="/our-work/social-welfare" className="hover:text-accent-gold transition-colors">
                {t("nav.socialWelfare")}
              </Link>
            </li>
            <li>
              <Link href="/our-work/education" className="hover:text-accent-gold transition-colors">
                {t("nav.education")}
              </Link>
            </li>
            <li>
              <Link href="/our-work/human-rights" className="hover:text-accent-gold transition-colors">
                {t("nav.humanRights")}
              </Link>
            </li>
            <li>
              <Link href="/our-work/environment" className="hover:text-accent-gold transition-colors">
                {t("nav.environment")}
              </Link>
            </li>
            <li>
              <Link href="/our-work/animal-welfare" className="hover:text-accent-gold transition-colors">
                {t("nav.animalWelfare")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Transparency & Accountability */}
        <div className="flex flex-col gap-3">
          <h4 className="font-serif font-semibold text-accent-gold text-base tracking-wide">
            {t("nav.transparency")}
          </h4>
          <ul className="flex flex-col gap-2 text-sm text-zinc-300">
            <li>
              <Link href="/transparency" className="hover:text-accent-gold transition-colors">
                {t("nav.governance")}
              </Link>
            </li>
            <li>
              <Link href="/about/founder" className="hover:text-accent-gold transition-colors">
                {t("nav.founder")}
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-accent-gold transition-colors">
                {t("nav.projects")}
              </Link>
            </li>
            <li>
              <Link href="/articles" className="hover:text-accent-gold transition-colors">
                {t("nav.articles")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent-gold transition-colors">
                {t("nav.contact")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent-gold transition-colors text-yellow-200/90 font-medium">
                Confidential Whistleblower & Complaints
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Emergency Assistance & Notice */}
        <div className="flex flex-col gap-3">
          <h4 className="font-serif font-semibold text-accent-gold text-base tracking-wide flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-alert-red" />
            <span>{t("nav.emergency")}</span>
          </h4>
          <p className="text-xs text-zinc-300 leading-relaxed bg-red-950/40 border border-red-900/40 p-3 rounded-lg">
            {t("emergencyNotice")}
          </p>
          <div className="flex flex-col gap-2 pt-2 text-sm text-zinc-300">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent-gold shrink-0" />
              <span className="text-xs">info@zulaidchaudharyfoundation.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent-gold shrink-0" />
              <span className="text-xs">Lahore, Pakistan</span>
            </div>
          </div>
          <div className="pt-2">
            <Link
              href="/get-involved"
              className="w-full inline-flex justify-center items-center gap-1.5 bg-accent-gold hover:bg-accent-gold-light text-primary-900 font-bold px-4 py-2 rounded-lg text-xs shadow transition-colors"
            >
              <Heart className="w-3.5 h-3.5 fill-primary-900" />
              <span>{t("donateNow")}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
        <div>
          © {new Date().getFullYear()} {t("siteName")}. {t("rightsReserved")}
        </div>
        <div className="flex items-center gap-4 text-zinc-300">
          <Link href="/transparency" className="hover:text-accent-gold transition-colors">
            Legal & Compliance
          </Link>
          <span>•</span>
          <Link href="/contact" className="hover:text-accent-gold transition-colors">
            Grievance Redressal
          </Link>
          <span>•</span>
          <span>{t("legalStatus")}</span>
        </div>
      </div>
    </footer>
  );
}
