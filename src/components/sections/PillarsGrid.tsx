import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { 
  Stethoscope, 
  Building2, 
  Scale, 
  Utensils, 
  GraduationCap, 
  Droplet, 
  PawPrint,
  ArrowRight
} from "lucide-react";

export function PillarsGrid() {
  const t = useTranslations("home.pillars");
  const tCommon = useTranslations("common");

  const pillars = [
    {
      title: t("medicalTitle"),
      desc: t("medicalDesc"),
      href: "/our-work/medical-assistance",
      icon: Stethoscope,
      badge: "Healthcare",
    },
    {
      title: t("hospitalTitle"),
      desc: t("hospitalDesc"),
      href: "/our-work/hospital",
      icon: Building2,
      badge: "Infrastructure",
    },
    {
      title: t("humanRightsTitle"),
      desc: t("humanRightsDesc"),
      href: "/our-work/human-rights",
      icon: Scale,
      badge: "Advocacy",
    },
    {
      title: t("socialWelfareTitle"),
      desc: t("socialWelfareDesc"),
      href: "/our-work/social-welfare",
      icon: Utensils,
      badge: "Relief",
    },
    {
      title: t("educationTitle"),
      desc: t("educationDesc"),
      href: "/our-work/education",
      icon: GraduationCap,
      badge: "Empowerment",
    },
    {
      title: t("environmentTitle"),
      desc: t("environmentDesc"),
      href: "/our-work/environment",
      icon: Droplet,
      badge: "Ecology",
    },
    {
      title: t("animalWelfareTitle"),
      desc: t("animalWelfareDesc"),
      href: "/our-work/animal-welfare",
      icon: PawPrint,
      badge: "Compassion",
    },
  ];

  return (
    <section className="py-20 px-4 bg-surface-muted/60 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-3 mb-14">
        <h2 className="font-serif font-bold text-2xl sm:text-4xl text-primary-900 tracking-tight">
          {t("title")}
        </h2>
        <p className="text-sm sm:text-base text-charcoal-muted max-w-2xl">
          {t("subtitle")}
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((pillar, idx) => {
          const IconComponent = pillar.icon;
          return (
            <div
              key={idx}
              className="bg-surface-card rounded-2xl border border-zinc-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-900 flex items-center justify-center group-hover:bg-primary-900 group-hover:text-accent-gold transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold text-accent-gold-dark bg-amber-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg sm:text-xl text-primary-900">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-100 mt-6">
                <Link
                  href={pillar.href}
                  className="text-xs sm:text-sm font-semibold text-primary-900 hover:text-accent-gold-dark flex items-center justify-between transition-colors"
                >
                  <span>{tCommon("learnMore")}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
