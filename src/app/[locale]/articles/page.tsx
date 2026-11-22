"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import {
  BookOpen,
  FileText,
  ArrowRight,
  Calendar,
  User,
  Search,
  Sparkles,
  PenTool,
  Share2,
} from "lucide-react";
import { mockArticles, ArticleRecord } from "@/lib/mock-data";

const CATEGORIES = [
  "ALL",
  "Column by Founder",
  "Healthcare & Medical Awareness",
  "Human Rights & Justice",
  "Animal Rights & Wildlife",
];

export default function ArticlesArchivePage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [search, setSearch] = useState("");

  const filtered = mockArticles.filter((art) => {
    const matchesCategory =
      selectedCategory === "ALL" || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(search.toLowerCase()) ||
      art.author.toLowerCase().includes(search.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const founderColumns = mockArticles.filter(
    (art) => art.category === "Column by Founder"
  );

  return (
    <div className="w-full py-16 px-4 bg-surface-cream">
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        
        {/* Header */}
        <div className="flex flex-col gap-4 text-center items-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-900 border border-primary-600/20 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Thought Leadership & Research</span>
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-900 tracking-tight">
            Articles, Research & Founder&apos;s Columns
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Direct columns by Founder Zulaid Chaudhary, clinical policy studies, and international advocacy briefs reflecting our ground humanitarian realities.
          </p>
        </div>

        {/* Featured Column Banner (Featuring 5th.jpg) */}
        {founderColumns.length > 0 && (
          <div className="bg-surface-card rounded-3xl border-2 border-accent-gold/40 p-6 sm:p-10 shadow-lg flex flex-col md:flex-row items-center gap-8 group">
            <div className="relative w-full md:w-5/12 aspect-[16/10] rounded-2xl overflow-hidden shrink-0 shadow-md">
              <Image
                src={founderColumns[0].featuredImage || "/images/5th.jpg"}
                alt={founderColumns[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 start-3 bg-accent-gold text-primary-900 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow">
                <PenTool className="w-3 h-3" />
                <span>Founder&apos;s Column</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-xs text-charcoal-muted">
                <span className="font-bold text-accent-gold-dark bg-amber-50 px-2.5 py-0.5 rounded uppercase">
                  {founderColumns[0].author}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{new Date(founderColumns[0].publishedAt).toLocaleDateString()}</span>
                </span>
                <span>•</span>
                <span>{founderColumns[0].readTime}</span>
              </div>

              <h2 className="font-serif font-bold text-xl sm:text-3xl text-primary-900 group-hover:text-accent-gold-dark transition-colors leading-snug">
                <Link href={`/articles/${founderColumns[0].slug}`}>
                  {founderColumns[0].title}
                </Link>
              </h2>

              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                {founderColumns[0].excerpt}
              </p>

              <div className="pt-2">
                <Link
                  href={`/articles/${founderColumns[0].slug}`}
                  className="inline-flex items-center gap-2 bg-primary-900 hover:bg-primary-800 text-surface-cream font-bold text-xs px-5 py-2.5 rounded-xl shadow transition-colors"
                >
                  <span>Read Full Column</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Filter and Search Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-zinc-200 pb-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-primary-900 text-surface-cream shadow-sm"
                    : "bg-surface-card border border-zinc-200 text-charcoal hover:bg-zinc-100"
                }`}
              >
                {cat === "Column by Founder" ? "✍️ Founder's Columns" : cat === "ALL" ? "All Publications" : cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute start-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles or topics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full ps-9 pe-4 py-2 rounded-xl border border-zinc-200 text-xs focus:outline-none focus:border-accent-gold bg-surface-card"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((art) => (
            <article
              key={art.slug}
              className="bg-surface-card rounded-3xl border border-zinc-200 p-6 sm:p-8 flex flex-col justify-between gap-5 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-bold text-accent-gold-dark bg-amber-50 px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider">
                    {art.category}
                  </span>
                  <span className="text-[11px] text-zinc-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(art.publishedAt).toLocaleDateString()}</span>
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg sm:text-xl text-primary-900 group-hover:text-accent-gold-dark transition-colors leading-snug">
                  <Link href={`/articles/${art.slug}`}>
                    {art.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed line-clamp-3">
                  {art.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-100 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary-900 text-accent-gold flex items-center justify-center font-bold text-[10px]">
                    ZC
                  </div>
                  <span className="font-medium text-charcoal text-[11px]">
                    {art.author}
                  </span>
                </div>

                <Link
                  href={`/articles/${art.slug}`}
                  className="font-bold text-primary-900 hover:text-accent-gold-dark flex items-center gap-1 transition-colors"
                >
                  <span>Read Article</span>
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
