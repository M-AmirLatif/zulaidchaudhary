import Image from "next/image";
import { Link } from "@/i18n/routing";
import {
  ArrowLeft,
  Calendar,
  BookOpen,
  ShieldCheck,
  Share2,
  PenTool,
  Clock,
  User,
} from "lucide-react";
import { notFound } from "next/navigation";
import { getArticleBySlug } from "@/lib/mock-data";

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const isFounder = article.author.includes("Founder") || article.author.includes("Zulaid Chaudhary");

  return (
    <div className="w-full py-16 px-4 bg-surface-cream min-h-screen">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        
        {/* Back Link */}
        <div>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-xs font-semibold text-primary-900 hover:text-accent-gold-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            <span>Back to All Publications</span>
          </Link>
        </div>

        {/* Featured Image if Available */}
        {article.featuredImage && (
          <div className="relative w-full aspect-[21/9] sm:aspect-[24/10] rounded-3xl overflow-hidden shadow-xl border border-zinc-200">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 start-6 bg-accent-gold text-primary-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {article.category}
            </div>
          </div>
        )}

        {/* Article Header */}
        <header className="flex flex-col gap-4 border-b border-zinc-200 pb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs text-charcoal-muted">
            <span className="font-bold text-accent-gold-dark bg-amber-50 px-3 py-1 rounded-full uppercase tracking-wider text-[10px]">
              {article.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <h1 className="font-serif font-bold text-2xl sm:text-4xl text-primary-900 tracking-tight leading-snug">
            {article.title}
          </h1>

          {/* Author Byline */}
          <div className="flex items-center gap-3 pt-2">
            <div className="w-10 h-10 rounded-full bg-primary-900 text-accent-gold flex items-center justify-center font-bold text-sm">
              ZC
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-primary-900 text-sm">
                {article.author}
              </span>
              <span className="text-[11px] text-zinc-500">
                {isFounder ? "Founder & Humanitarian Columnist • ZCF" : "Policy & Medical Advisory Board • ZCF"}
              </span>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <div className="flex flex-col gap-6 text-sm sm:text-base text-charcoal leading-relaxed font-sans prose prose-green max-w-none">
          {article.content.split("\n\n").map((para, idx) => (
            <p key={idx} className="leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* Author Columnist Bio Card */}
        {isFounder && (
          <div className="bg-surface-card rounded-3xl border border-accent-gold/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-accent-gold shadow">
              <Image
                src="/images/2ndimg.jpg"
                alt="Zulaid Chaudhary"
                fill
                className="object-cover object-[25%_center]"
              />
            </div>
            <div className="flex flex-col gap-1 text-center sm:text-start">
              <span className="text-xs uppercase font-bold tracking-wider text-accent-gold-dark">
                About the Columnist
              </span>
              <h3 className="font-serif font-bold text-lg text-primary-900">
                Zulaid Chaudhary
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed font-sans">
                Founder of Zulaid Chaudhary Foundation. Dedicated to grassroots humanitarian intervention, free healthcare coordination, and the development of accessible charity healthcare infrastructure.
              </p>
            </div>
          </div>
        )}

        {/* Disclaimer & Citation Policy */}
        <div className="bg-surface-card rounded-2xl border border-zinc-200 p-6 flex flex-col gap-2 text-xs text-charcoal-muted">
          <span className="font-bold text-primary-900 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-accent-gold-dark" />
            <span>Editorial Integrity & Sourced Advocacy</span>
          </span>
          <p className="leading-relaxed">
            All opinions and columns reflect verified ground experience and adhere to peaceful, lawful humanitarian principles. Citations are cross-referenced with accredited medical and human rights conventions.
          </p>
        </div>
      </div>
    </div>
  );
}
