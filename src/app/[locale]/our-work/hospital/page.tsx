import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Building2, ShieldCheck, CheckCircle2, Clock, ArrowRight } from "lucide-react";

export default function HospitalPage() {
  const t = useTranslations("hospital");
  const tCommon = useTranslations("common");

  const departments = [
    t("dep1"),
    t("dep2"),
    t("dep3"),
    t("dep4"),
    t("dep5"),
  ];

  return (
    <div className="w-full py-16 px-4 bg-surface-cream">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-900 border border-primary-600/20 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>Infrastructure Project</span>
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-900 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Narrative & Status Overview */}
        <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 sm:p-10 shadow-sm flex flex-col gap-6 leading-relaxed text-charcoal-muted text-sm sm:text-base">
          <h2 className="font-serif font-bold text-2xl text-primary-900">
            A Permanent Healthcare Anchor
          </h2>
          <p>{t("overview")}</p>

          <div className="bg-primary-900 text-surface-cream rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-accent-gold shrink-0 animate-pulse" />
              <div>
                <span className="font-serif font-bold text-lg text-accent-gold block">
                  Current Status: Hospital Under Construction
                </span>
                <span className="text-xs text-zinc-300">
                  {t("disclaimer")}
                </span>
              </div>
            </div>
            <Link
              href="/get-involved"
              className="bg-accent-gold hover:bg-accent-gold-light text-primary-900 font-bold px-5 py-2.5 rounded-xl text-xs whitespace-nowrap shadow transition-colors"
            >
              Support Hospital Fund
            </Link>
          </div>
        </div>

        {/* Planned Clinical Blueprint */}
        <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 sm:p-10 shadow-sm flex flex-col gap-6">
          <h2 className="font-serif font-bold text-2xl text-primary-900">
            {t("blueprintTitle")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {departments.map((dep, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-zinc-200 bg-surface-muted/40 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-900 flex items-center justify-center font-bold text-xs shrink-0">
                  {idx + 1}
                </div>
                <span className="text-sm font-semibold text-charcoal">
                  {dep}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Transparency Commitment */}
        <div className="bg-surface-muted/60 border border-zinc-300 rounded-2xl p-6 text-xs text-charcoal-muted flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-accent-gold-dark shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            All engineering milestones, architectural blueprints, and facility scale specifications will be officially published with photographic and regulatory verification upon client confirmation.
          </p>
        </div>
      </div>
    </div>
  );
}
