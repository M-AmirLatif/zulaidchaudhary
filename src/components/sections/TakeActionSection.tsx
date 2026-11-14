import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Megaphone, Heart, FileText, Droplet, ArrowRight } from "lucide-react";

export function TakeActionSection() {
  const t = useTranslations("home.takeAction");
  const tCommon = useTranslations("common");

  const campaigns = [
    {
      title: t("campaign1Title"),
      desc: t("campaign1Desc"),
      cta: t("campaign1Cta"),
      href: "/our-work/medical-assistance",
      icon: Heart,
      tag: "Urgent Care",
    },
    {
      title: t("campaign2Title"),
      desc: t("campaign2Desc"),
      cta: t("campaign2Cta"),
      href: "/our-work/human-rights",
      icon: FileText,
      tag: "Advocacy",
    },
    {
      title: t("campaign3Title"),
      desc: t("campaign3Desc"),
      cta: t("campaign3Cta"),
      href: "/our-work/environment",
      icon: Droplet,
      tag: "Ecology",
    },
  ];

  return (
    <section className="py-20 px-4 bg-surface-cream border-b border-zinc-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-3 mb-14">
        <div className="inline-flex items-center gap-2 bg-amber-50 text-accent-gold-dark border border-amber-200 px-3.5 py-1.5 rounded-full text-xs font-semibold">
          <Megaphone className="w-3.5 h-3.5" />
          <span>{t("badge")}</span>
        </div>
        <h2 className="font-serif font-bold text-2xl sm:text-4xl text-primary-900 tracking-tight">
          {t("title")}
        </h2>
        <p className="text-sm sm:text-base text-charcoal-muted max-w-2xl">
          {t("subtitle")}
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {campaigns.map((camp, idx) => {
          const Icon = camp.icon;
          return (
            <div
              key={idx}
              className="bg-surface-card rounded-2xl border border-zinc-200 p-7 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-1.5 bg-accent-gold group-hover:bg-primary-900 transition-colors" />

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-900 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-primary-900 bg-primary-100/60 px-3 py-1 rounded-full uppercase tracking-wider">
                    {camp.tag}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-primary-900">
                  {camp.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  {camp.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-100 mt-6">
                <Link
                  href={camp.href}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary-900 hover:bg-primary-800 text-surface-cream text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-xl shadow-sm transition-all group-hover:bg-accent-gold group-hover:text-primary-900"
                >
                  <span>{camp.cta}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
