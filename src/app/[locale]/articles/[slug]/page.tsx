import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowLeft, Calendar, BookOpen, ShieldCheck, Share2 } from "lucide-react";
import { notFound } from "next/navigation";

const articlesData: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    content: string[];
    citations: string[];
  }
> = {
  "catastrophic-health-expenditures": {
    title: "Catastrophic Health Expenditures: The Reality of Surgical Access in Pakistan",
    category: "Healthcare Economics",
    date: "2026-11-10",
    content: [
      "In many developing nations, out-of-pocket medical expenditures remain the primary driver of sudden impoverishment. When a family breadwinner requires specialized surgical intervention—whether cardiac stenting, orthopedic reconstruction, or oncological resection—the requisite fees frequently exceed the entire household's annual earnings.",
      "The Zulaid Chaudhary Foundation was established in direct response to this systemic failure. Facilitating free surgical care for approximately 25-30 patients to date, the foundation has witnessed firsthand how direct clinical intervention prevents family insolvency.",
      "However, ad-hoc charity sponsorships cannot match the scale of national need. The construction of a dedicated charity hospital represents an essential structural transition: moving from emergency patient-by-patient referrals to an institutional center of healing where inpatient and outpatient services are provided free of financial hardship.",
    ],
    citations: [
      "World Health Organization (WHO), Global Spending on Health: A World in Transition, 2023.",
      "Pakistan National Health Accounts (NHA), Out-of-Pocket Health Expenditures Survey, 2022-2024.",
    ],
  },
  "international-humanitarian-law-health": {
    title: "International Humanitarian Law & the Right to Health in Conflict Zones",
    category: "Human Rights & Law",
    date: "2026-10-28",
    content: [
      "International Humanitarian Law (IHL), principally encoded within the Geneva Conventions of 1949 and their Additional Protocols, establishes unequivocal prohibitions against the targeting of civilian healthcare facilities, ambulances, and clinical personnel during armed conflict.",
      "In modern conflicts, most acutely observed in Palestine, civilian populations experience devastating deprivations of basic medical care, potable water, and anesthesia. Defending the right to health requires consistent, evidence-based documentation and unyielding adherence to international legal norms.",
      "The Zulaid Chaudhary Foundation upholds peaceful, lawful advocacy grounded in verified documentation, calling for unrestricted humanitarian aid corridors and civilian protection under international jurisprudence.",
    ],
    citations: [
      "Geneva Convention IV relative to the Protection of Civilian Persons in Time of War, Article 18.",
      "United Nations Office for the Coordination of Humanitarian Affairs (OCHA), Humanitarian Field Bulletins, 2024-2026.",
    ],
  },
  "nutritional-security-clean-water": {
    title: "Nutritional Security & Clean Water: Baseline Studies in Under-Resourced Districts",
    category: "Social Welfare & Ecology",
    date: "2026-10-15",
    content: [
      "Field studies conducted in water-scarce rural belts reveal that waterborne pathogens are directly linked to chronic pediatric stunting and severe malabsorption of dietary nutrients.",
      "Installing deep-bore community hand pumps with tested water aquifers transforms communal public health within months, drastically reducing clinic visit frequencies for waterborne gastrointestinal illnesses.",
      "The foundation's ecological initiatives unite water well installations with seasonal tree plantations to restore micro-climates and safeguard community groundwater reserves.",
    ],
    citations: [
      "Pakistan Council of Research in Water Resources (PCRWR), Water Quality Monitoring Reports, 2023.",
      "UNICEF, The State of the World's Children: Children, Food and Nutrition, 2024.",
    ],
  },
};

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articlesData[slug];

  if (!article) {
    notFound();
  }

  return (
    <div className="w-full py-16 px-4 bg-surface-cream">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        {/* Back Link */}
        <div>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-xs font-semibold text-primary-900 hover:text-accent-gold-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="flex flex-col gap-4 border-b border-zinc-200 pb-8">
          <div className="flex items-center gap-3 text-xs text-charcoal-muted">
            <span className="font-bold text-accent-gold-dark bg-amber-50 px-3 py-1 rounded uppercase tracking-wider">
              {article.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </span>
          </div>

          <h1 className="font-serif font-bold text-2xl sm:text-4xl text-primary-900 tracking-tight leading-snug">
            {article.title}
          </h1>
        </header>

        {/* Article Body */}
        <div className="flex flex-col gap-6 text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Citations & Sources */}
        <div className="bg-surface-card rounded-2xl border border-zinc-200 p-6 flex flex-col gap-3 shadow-sm">
          <h3 className="font-serif font-bold text-base text-primary-900 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-accent-gold-dark" />
            <span>Academic & Institutional Citations</span>
          </h3>
          <ul className="list-disc list-inside text-xs text-charcoal-muted flex flex-col gap-1">
            {article.citations.map((cite, idx) => (
              <li key={idx}>{cite}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
