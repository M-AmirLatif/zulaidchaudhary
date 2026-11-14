import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { BookOpen, FileText, ArrowRight, Calendar, User } from "lucide-react";

export default function ArticlesArchivePage() {
  const t = useTranslations("articles");
  const tCommon = useTranslations("common");

  const articles = [
    {
      slug: "catastrophic-health-expenditures",
      title: "Catastrophic Health Expenditures: The Reality of Surgical Access in Pakistan",
      category: "Healthcare Economics",
      date: "2026-11-10",
      excerpt: "An empirical overview of out-of-pocket medical costs in Pakistan, examining how surgical emergencies precipitate generational poverty among working-class families and the indispensable role of charity hospitals.",
      readTime: "6 min read",
    },
    {
      slug: "international-humanitarian-law-health",
      title: "International Humanitarian Law & the Right to Health in Conflict Zones",
      category: "Human Rights & Law",
      date: "2026-10-28",
      excerpt: "A legal examination of Geneva Convention protections afforded to civilian healthcare infrastructure, medical personnel, and humanitarian relief corridors, with specific reference to Palestine and global humanitarian crises.",
      readTime: "8 min read",
    },
    {
      slug: "nutritional-security-clean-water",
      title: "Nutritional Security & Clean Water: Baseline Studies in Under-Resourced Districts",
      category: "Social Welfare & Ecology",
      date: "2026-10-15",
      excerpt: "Analyzing field data on the interconnectedness of water contamination, pediatric malnutrition, and maternal mortality in semi-arid rural communities.",
      readTime: "5 min read",
    },
  ];

  return (
    <div className="w-full py-16 px-4 bg-surface-cream">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-900 border border-primary-600/20 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Research & Policy</span>
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-900 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Articles List */}
        <div className="flex flex-col gap-6">
          {articles.map((art) => (
            <article
              key={art.slug}
              className="bg-surface-card rounded-2xl border border-zinc-200 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex flex-col gap-3 max-w-2xl">
                <div className="flex items-center gap-3 text-xs text-charcoal-muted">
                  <span className="font-bold text-accent-gold-dark bg-amber-50 px-2.5 py-0.5 rounded uppercase tracking-wider">
                    {art.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{art.date}</span>
                  </span>
                  <span>•</span>
                  <span>{art.readTime}</span>
                </div>

                <h2 className="font-serif font-bold text-xl sm:text-2xl text-primary-900 group-hover:text-accent-gold-dark transition-colors leading-snug">
                  <Link href={`/articles/${art.slug}`}>
                    {art.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="shrink-0 self-start md:self-auto">
                <Link
                  href={`/articles/${art.slug}`}
                  className="inline-flex items-center gap-2 bg-primary-900 hover:bg-primary-800 text-surface-cream text-xs font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-colors whitespace-nowrap"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{t("readMore")}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
