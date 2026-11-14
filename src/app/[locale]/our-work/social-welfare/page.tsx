import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Utensils, Heart, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function SocialWelfarePage() {
  const t = useTranslations("home.pillars");
  const tCommon = useTranslations("common");

  return (
    <div className="w-full py-16 px-4 bg-surface-cream">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-900 border border-primary-600/20 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Utensils className="w-3.5 h-3.5" />
            <span>Relief & Welfare</span>
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-900 tracking-tight">
            {t("socialWelfareTitle")}
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl leading-relaxed">
            {t("socialWelfareDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-card rounded-2xl border border-zinc-200 p-6 flex flex-col gap-3 shadow-sm">
            <h3 className="font-serif font-bold text-lg text-primary-900">
              Essential Food Rations
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              Distributing dignified ration packages containing essential staples (flour, rice, pulses, cooking oil) to impoverished families facing acute inflation.
            </p>
          </div>

          <div className="bg-surface-card rounded-2xl border border-zinc-200 p-6 flex flex-col gap-3 shadow-sm">
            <h3 className="font-serif font-bold text-lg text-primary-900">
              Critical Medication Aid
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              Providing monthly prescriptions for chronic conditions (hypertension, diabetes, cardiac care) to vulnerable seniors who cannot afford pharmacy costs.
            </p>
          </div>

          <div className="bg-surface-card rounded-2xl border border-zinc-200 p-6 flex flex-col gap-3 shadow-sm">
            <h3 className="font-serif font-bold text-lg text-primary-900">
              Emergency Hardship Grants
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              Discretionary micro-assistance for families facing sudden bereavement, homelessness, or catastrophic loss, verified through local community coordinators.
            </p>
          </div>
        </div>

        <div className="bg-primary-900 text-surface-cream rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif font-bold text-xl text-accent-gold">Support Food & Medicine Relief</h3>
            <p className="text-xs sm:text-sm text-zinc-300">Directly fund food packs and pharmacy subsidies with verified accountability.</p>
          </div>
          <Link
            href="/get-involved"
            className="bg-accent-gold hover:bg-accent-gold-light text-primary-900 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm whitespace-nowrap shadow transition-colors"
          >
            {tCommon("donateNow")}
          </Link>
        </div>
      </div>
    </div>
  );
}
