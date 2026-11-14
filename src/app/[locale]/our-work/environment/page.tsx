import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Droplet, Trees, CheckCircle2, ArrowRight } from "lucide-react";

export default function EnvironmentPage() {
  const t = useTranslations("environment");
  const tCommon = useTranslations("common");

  return (
    <div className="w-full py-16 px-4 bg-surface-cream">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-900 border border-primary-600/20 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Droplet className="w-3.5 h-3.5" />
            <span>Ecological Stewardship</span>
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-900 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <Droplet className="w-6 h-6" />
            </div>
            <h2 className="font-serif font-bold text-2xl text-primary-900">
              {t("waterTitle")}
            </h2>
            <p className="text-sm text-charcoal-muted leading-relaxed">
              {t("waterDesc")}
            </p>
          </div>

          <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-50 text-status-green flex items-center justify-center">
              <Trees className="w-6 h-6" />
            </div>
            <h2 className="font-serif font-bold text-2xl text-primary-900">
              {t("greenTitle")}
            </h2>
            <p className="text-sm text-charcoal-muted leading-relaxed">
              {t("greenDesc")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
