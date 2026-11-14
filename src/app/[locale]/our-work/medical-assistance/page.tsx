import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Stethoscope, CheckCircle2, ShieldCheck, Heart, AlertCircle, ArrowRight } from "lucide-react";

export default function MedicalAssistancePage() {
  const t = useTranslations("medical");
  const tCommon = useTranslations("common");

  const steps = [
    { title: t("step1Title"), desc: t("step1Desc") },
    { title: t("step2Title"), desc: t("step2Desc") },
    { title: t("step3Title"), desc: t("step3Desc") },
    { title: t("step4Title"), desc: t("step4Desc") },
  ];

  return (
    <div className="w-full py-16 px-4 bg-surface-cream">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-900 border border-primary-600/20 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Healthcare Pillar</span>
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-900 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Overview & Verified Fact Card */}
        <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex flex-col gap-4 text-sm sm:text-base text-charcoal-muted leading-relaxed">
            <h2 className="font-serif font-bold text-2xl text-primary-900">
              Direct Clinical Sponsorship
            </h2>
            <p>{t("overview")}</p>
            <div className="p-4 bg-status-green/10 border border-status-green/30 rounded-xl text-xs sm:text-sm text-status-green font-semibold flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>Verified Milestone: Approximately 25–30 patients facilitated free treatment.</span>
            </div>
          </div>

          <div className="w-full md:w-72 bg-primary-900 text-surface-cream rounded-2xl p-6 flex flex-col gap-4 text-center items-center shadow-lg">
            <Heart className="w-10 h-10 text-accent-gold" />
            <h3 className="font-serif font-bold text-lg text-surface-cream">
              Need Medical Care?
            </h3>
            <p className="text-xs text-zinc-300">
              Submit patient diagnostic reports and hospital cost estimates for administrative review.
            </p>
            <Link
              href="/emergency-help"
              className="w-full bg-accent-gold hover:bg-accent-gold-light text-primary-900 font-bold px-4 py-2.5 rounded-xl text-xs shadow transition-colors"
            >
              {t("requestAidBtn")}
            </Link>
          </div>
        </div>

        {/* Process Stepper */}
        <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 sm:p-10 shadow-sm flex flex-col gap-8">
          <h2 className="font-serif font-bold text-2xl text-primary-900">
            {t("processTitle")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-surface-muted/60 p-5 rounded-2xl border border-zinc-200 flex flex-col gap-2">
                <span className="font-serif font-bold text-lg text-primary-900">
                  {step.title}
                </span>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Non-Replacement Emergency Notice */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 flex items-start gap-4 text-xs sm:text-sm text-red-900">
          <AlertCircle className="w-5 h-5 text-alert-red shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1">
            <span className="font-bold">Important Notice Regarding Emergency Services</span>
            <p className="leading-relaxed text-red-800">
              {tCommon("emergencyNotice")} For immediate life-saving emergencies, call 1122.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
