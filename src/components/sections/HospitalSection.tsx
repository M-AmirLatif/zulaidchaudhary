import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Building2, ShieldCheck, CheckCircle2, Clock, ArrowRight } from "lucide-react";

export function HospitalSection() {
  const t = useTranslations("home.hospitalSection");
  const tCommon = useTranslations("common");

  const milestones = [
    { title: t("phase1"), status: t("phase1Status"), isDone: true },
    { title: t("phase2"), status: t("phase2Status"), isCurrent: true },
    { title: t("phase3"), status: t("phase3Status") },
    { title: t("phase4"), status: t("phase4Status") },
  ];

  return (
    <section className="py-20 px-4 bg-primary-900 text-surface-cream">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Narrative & Status */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 self-start bg-primary-800 text-accent-gold border border-primary-700 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>{t("badge")}</span>
          </div>

          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-surface-cream tracking-tight leading-snug">
            {t("title")}
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
            {t("description")}
          </p>

          <div className="bg-primary-800/80 border border-primary-700/80 rounded-xl p-4 text-xs text-zinc-300 flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
            <span>{t("statusNotice")}</span>
          </div>

          <div className="pt-2">
            <Link
              href="/our-work/hospital"
              className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-light text-primary-900 font-bold px-6 py-3 rounded-xl text-sm shadow transition-all hover:scale-[1.02]"
            >
              <span>{tCommon("learnMore")}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>

        {/* Right Column: Milestone Stepper (Non-presumptuous) */}
        <div className="lg:col-span-6 bg-primary-800/60 border border-primary-700 rounded-3xl p-6 sm:p-8 backdrop-blur-sm">
          <h3 className="font-serif font-bold text-lg sm:text-xl text-accent-gold mb-6 pb-3 border-b border-primary-700">
            {t("milestoneTitle")}
          </h3>

          <div className="flex flex-col gap-6">
            {milestones.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="pt-0.5">
                  {step.isDone ? (
                    <div className="w-7 h-7 rounded-full bg-status-green/20 text-status-green flex items-center justify-center border border-status-green">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  ) : step.isCurrent ? (
                    <div className="w-7 h-7 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center border border-accent-gold animate-pulse">
                      <Clock className="w-4 h-4" />
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-primary-900 text-zinc-500 flex items-center justify-center border border-primary-700 text-xs">
                      {idx + 1}
                    </div>
                  )}
                </div>

                <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className={`text-sm font-semibold ${step.isCurrent ? 'text-surface-cream' : step.isDone ? 'text-zinc-200' : 'text-zinc-400'}`}>
                    {step.title}
                  </span>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full self-start sm:self-auto font-medium ${
                    step.isCurrent 
                      ? 'bg-accent-gold text-primary-900 font-bold' 
                      : step.isDone 
                      ? 'bg-green-900/60 text-green-300' 
                      : 'bg-primary-900 text-zinc-400'
                  }`}>
                    {step.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
