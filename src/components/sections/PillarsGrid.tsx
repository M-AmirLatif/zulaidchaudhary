import Image from "next/image";
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
      title: t("humanRightsTitle"),
      desc: t("humanRightsDesc"),
      href: "/our-work/human-rights",
      icon: Scale,
      badge: "Advocacy",
      image: "/images/programs/human_rights.jpg",
    },
    {
      title: t("environmentTitle"),
      desc: t("environmentDesc"),
      href: "/our-work/environment",
      icon: Droplet,
      badge: "Ecology",
      image: "/images/programs/water_environment.jpg",
    },
    {
      title: t("animalWelfareTitle"),
      desc: t("animalWelfareDesc"),
      href: "/our-work/animal-welfare",
      icon: PawPrint,
      badge: "Compassion",
      image: "/images/programs/animal_welfare.jpg",
    },
    {
      title: t("medicalTitle"),
      desc: t("medicalDesc"),
      href: "/our-work/medical-assistance",
      icon: Stethoscope,
      badge: "Healthcare",
      image: "/images/programs/healthcare.jpg",
    },
    {
      title: t("hospitalTitle"),
      desc: t("hospitalDesc"),
      href: "/our-work/hospital",
      icon: Building2,
      badge: "Infrastructure",
      image: "/images/programs/hospital_construction.jpg",
    },
    {
      title: t("socialWelfareTitle"),
      desc: t("socialWelfareDesc"),
      href: "/our-work/social-welfare",
      icon: Utensils,
      badge: "Relief",
      image: "/images/programs/food_relief.jpg",
    },
    {
      title: t("educationTitle"),
      desc: t("educationDesc"),
      href: "/our-work/education",
      icon: GraduationCap,
      badge: "Empowerment",
      image: "/images/programs/education.jpg",
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
              className="bg-surface-card rounded-2xl border border-zinc-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              {/* Card Photo */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="text-[11px] font-bold text-slate-800 bg-white/95 backdrop-blur px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                    {pillar.badge}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white/95 text-primary-900 flex items-center justify-center shadow">
                    <IconComponent className="w-4 h-4 text-[#005972]" />
                  </div>
                  <span className="text-white text-xs font-bold drop-shadow">
                    {pillar.badge}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-primary-900 group-hover:text-[#005972] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100">
                  <Link
                    href={pillar.href}
                    className="text-xs sm:text-sm font-semibold text-[#005972] hover:text-accent-gold-dark flex items-center justify-between transition-colors"
                  >
                    <span>{tCommon("learnMore")}</span>
                    <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
