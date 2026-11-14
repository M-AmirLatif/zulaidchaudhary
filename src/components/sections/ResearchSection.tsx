import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { FileText, BookOpen, ArrowRight } from "lucide-react";

export function ResearchSection() {
  const t = useTranslations("home.research");
  const tCommon = useTranslations("common");

  const reports = [
    {
      category: t("report1Category"),
      title: t("report1Title"),
      summary: t("report1Summary"),
      slug: "catastrophic-health-expenditures",
    },
    {
      category: t("report2Category"),
      title: t("report2Title"),
      summary: t("report2Summary"),
      slug: "international-humanitarian-law-health",
    },
    {
      category: t("report3Category"),
      title: t("report3Summary"),
      summary: t("report3Summary"),
      slug: "nutritional-security-clean-water",
    },
  ];

  return (
    <section className="py-20 px-4 bg-surface-muted/40 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 self-start bg-primary-100 text-primary-900 border border-primary-600/20 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t("badge")}</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-primary-900 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted max-w-xl">
            {t("subtitle")}
          </p>
        </div>

        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary-900 hover:text-accent-gold-dark self-start md:self-auto transition-colors"
        >
          <span>{tCommon("viewAll")}</span>
          <ArrowRight className="w-4 h-4 rtl:rotate-180" />
        </Link>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {reports.map((report, idx) => (
          <article
            key={idx}
            className="bg-surface-card rounded-2xl border border-zinc-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex flex-col gap-3">
              <span className="text-[11px] font-bold text-accent-gold-dark bg-amber-50 self-start px-2.5 py-1 rounded-md uppercase tracking-wider">
                {report.category}
              </span>

              <h3 className="font-serif font-bold text-base sm:text-lg text-primary-900 group-hover:text-accent-gold-dark transition-colors leading-snug">
                {report.title}
              </h3>

              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                {report.summary}
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-100 mt-6">
              <Link
                href={`/articles`}
                className="text-xs font-semibold text-primary-900 hover:text-accent-gold-dark flex items-center gap-1.5 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{tCommon("readReport")}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
