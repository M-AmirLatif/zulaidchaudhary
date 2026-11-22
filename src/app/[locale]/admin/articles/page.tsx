"use client";

import { useEffect, useState } from "react";
import {
  PenTool,
  BookOpen,
  Plus,
  Search,
  Calendar,
  Eye,
  CheckCircle2,
  RefreshCw,
  FileText,
  User,
  Tag,
} from "lucide-react";
import { ArticleRecord } from "@/lib/mock-data";
import { Link } from "@/i18n/routing";

export default function AdminArticlesPage() {
  const [articles, setArticles] = useState<ArticleRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  // New Article Form state
  const [title, setTitle] = useState("");
  const [titleUr, setTitleUr] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("Column by Founder");
  const [author, setAuthor] = useState("Zulaid Chaudhary (Founder)");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [readTime, setReadTime] = useState("5 min read");
  const [featuredImage, setFeaturedImage] = useState("/images/5th.jpg");
  const [tagsInput, setTagsInput] = useState("Humanity, Founder Column, Healthcare");
  const [status, setStatus] = useState<"PUBLISHED" | "DRAFT">("PUBLISHED");
  const [saving, setSaving] = useState(false);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/articles");
      const data = await res.json();
      if (data.success && data.articles) {
        setArticles(data.articles);
      }
    } catch {
      console.error("Failed to load articles");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    setSlug(
      val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
    );
  };

  const handleCreateArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !slug || !content) {
      alert("Title, slug, and content are required.");
      return;
    }

    setSaving(true);
    try {
      const tags = tagsInput.split(",").map((t) => t.trim()).filter(Boolean);
      const res = await fetch("/api/admin/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          titleUr,
          slug,
          category,
          author,
          excerpt: excerpt || title,
          content,
          readTime,
          featuredImage,
          tags,
          status,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setIsEditorOpen(false);
        setTitle("");
        setTitleUr("");
        setSlug("");
        setContent("");
        setExcerpt("");
        fetchArticles();
      } else {
        alert(data.error || "Failed to publish article");
      }
    } catch {
      alert("Error publishing column");
    } finally {
      setSaving(false);
    }
  };

  const filtered = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.author.toLowerCase().includes(search.toLowerCase()) ||
      a.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-gold-dark bg-amber-50 px-2.5 py-0.5 rounded-full mb-1">
            <PenTool className="w-3.5 h-3.5" />
            <span>Editorial Desk & Column CMS</span>
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900">
            Founder&apos;s Columns & Article Publications
          </h1>
          <p className="text-xs text-charcoal-muted">
            Draft and publish op-eds by Founder Zulaid Chaudhary, clinical whitepapers, and international humanitarian reports.
          </p>
        </div>

        <button
          onClick={() => setIsEditorOpen(true)}
          className="inline-flex items-center gap-2 bg-primary-900 hover:bg-primary-800 text-surface-cream font-bold text-xs px-5 py-2.5 rounded-xl shadow transition-colors self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Write New Column / Article</span>
        </button>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-surface-card border border-zinc-200 rounded-2xl p-5 shadow-sm">
          <span className="text-xs text-zinc-500 font-medium block">Total Published</span>
          <span className="font-serif font-bold text-2xl text-primary-900 mt-1 block">
            {articles.length}
          </span>
        </div>
        <div className="bg-surface-card border border-zinc-200 rounded-2xl p-5 shadow-sm">
          <span className="text-xs text-zinc-500 font-medium block">Founder&apos;s Op-Eds</span>
          <span className="font-serif font-bold text-2xl text-accent-gold-dark mt-1 block">
            {articles.filter((a) => a.category === "Column by Founder").length}
          </span>
        </div>
        <div className="bg-surface-card border border-zinc-200 rounded-2xl p-5 shadow-sm">
          <span className="text-xs text-zinc-500 font-medium block">Research & Briefs</span>
          <span className="font-serif font-bold text-2xl text-status-green mt-1 block">
            {articles.filter((a) => a.category !== "Column by Founder").length}
          </span>
        </div>
      </div>

      {/* Search */}
      <div className="bg-surface-card border border-zinc-200 rounded-2xl p-4 flex items-center justify-between gap-4 shadow-sm">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-zinc-400 absolute start-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search publications..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full ps-9 pe-4 py-2 rounded-xl border border-zinc-200 text-xs focus:outline-none focus:border-accent-gold bg-surface-cream"
          />
        </div>

        <button
          onClick={fetchArticles}
          className="text-xs text-charcoal-muted hover:text-charcoal flex items-center gap-1"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reload</span>
        </button>
      </div>

      {/* Articles Table */}
      <div className="bg-surface-card border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-start">
            <thead className="bg-surface-muted border-b border-zinc-200 text-zinc-500 font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4 text-start">Title & Slug</th>
                <th className="p-4 text-start">Category</th>
                <th className="p-4 text-start">Author</th>
                <th className="p-4 text-start">Date</th>
                <th className="p-4 text-start">Status</th>
                <th className="p-4 text-end">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {loading ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-zinc-400">
                    Loading publications...
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-zinc-400">
                    No articles found.
                  </td>
                </tr>
              ) : (
                filtered.map((art) => (
                  <tr key={art.id} className="hover:bg-zinc-50/60 transition-colors">
                    <td className="p-4 max-w-sm">
                      <div className="flex flex-col">
                        <span className="font-bold text-primary-900 text-sm">
                          {art.title}
                        </span>
                        <span className="text-[11px] text-zinc-400 font-mono">
                          /{art.slug}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="bg-amber-50 text-accent-gold-dark font-bold text-[10px] px-2.5 py-1 rounded-full uppercase">
                        {art.category}
                      </span>
                    </td>
                    <td className="p-4 font-medium text-charcoal">
                      {art.author}
                    </td>
                    <td className="p-4 text-zinc-500">
                      {new Date(art.publishedAt).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      <span className="bg-emerald-100 text-status-green font-bold text-[10px] px-2 py-0.5 rounded-full uppercase">
                        {art.status}
                      </span>
                    </td>
                    <td className="p-4 text-end">
                      <Link
                        href={`/articles/${art.slug}`}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-xs bg-primary-100 hover:bg-primary-200 text-primary-900 px-3 py-1.5 rounded-lg font-semibold transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Live</span>
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Write Column / Article Modal */}
      {isEditorOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <form
            onSubmit={handleCreateArticle}
            className="bg-surface-card rounded-3xl border border-zinc-200 p-6 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col gap-5 animate-in fade-in"
          >
            <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
              <div className="flex items-center gap-2">
                <PenTool className="w-5 h-5 text-accent-gold-dark" />
                <span className="font-serif font-bold text-lg sm:text-xl text-primary-900">
                  Write & Publish Column / Article
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsEditorOpen(false)}
                className="text-zinc-400 hover:text-zinc-700 font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="sm:col-span-2">
                <label className="font-bold text-charcoal block mb-1">
                  Article Title (English) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Serving Humanity Without Borders: The Philosophical Grounding"
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-zinc-300 bg-surface-cream text-xs font-semibold"
                />
              </div>

              <div>
                <label className="font-bold text-charcoal block mb-1">
                  Urdu Title (Optional)
                </label>
                <input
                  type="text"
                  placeholder="اردو عنوان"
                  value={titleUr}
                  onChange={(e) => setTitleUr(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-zinc-300 bg-surface-cream text-xs font-urdu"
                />
              </div>

              <div>
                <label className="font-bold text-charcoal block mb-1">
                  URL Slug *
                </label>
                <input
                  type="text"
                  required
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-zinc-300 bg-surface-cream font-mono text-xs"
                />
              </div>

              <div>
                <label className="font-bold text-charcoal block mb-1">
                  Category *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-zinc-300 bg-surface-cream font-medium"
                >
                  <option value="Column by Founder">✍️ Column by Founder</option>
                  <option value="Healthcare & Medical Awareness">🏥 Healthcare & Medical Awareness</option>
                  <option value="Human Rights & Justice">⚖️ Human Rights & Justice</option>
                  <option value="Palestine & Global Issues">🕊️ Palestine & Global Issues</option>
                  <option value="Animal Rights & Wildlife">🐾 Animal Rights & Wildlife</option>
                  <option value="Environment & Climate">🌱 Environment & Climate</option>
                  <option value="Education & Social Welfare">📚 Education & Social Welfare</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-charcoal block mb-1">
                  Author Byline *
                </label>
                <select
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-zinc-300 bg-surface-cream font-medium"
                >
                  <option value="Zulaid Chaudhary (Founder)">Zulaid Chaudhary (Founder)</option>
                  <option value="Medical Advisory Board">Medical Advisory Board</option>
                  <option value="Human Rights Research Desk">Human Rights Research Desk</option>
                  <option value="Editorial Board">Editorial Board</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="font-bold text-charcoal block mb-1">
                  Featured Image Banner URL
                </label>
                <input
                  type="text"
                  value={featuredImage}
                  onChange={(e) => setFeaturedImage(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-zinc-300 bg-surface-cream text-xs font-mono"
                />
                <span className="text-[10px] text-zinc-400 mt-1 block">
                  Defaults to newly added official promotional landscape banner (<code>/images/5th.jpg</code>).
                </span>
              </div>

              <div className="sm:col-span-2">
                <label className="font-bold text-charcoal block mb-1">
                  Short Excerpt / Abstract
                </label>
                <textarea
                  rows={2}
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Summary of the column or research..."
                  className="w-full p-2.5 rounded-xl border border-zinc-300 bg-surface-cream"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="font-bold text-charcoal block mb-1">
                  Full Column Markdown Body *
                </label>
                <textarea
                  rows={8}
                  required
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write the full column or article in markdown format. Use double line breaks between paragraphs..."
                  className="w-full p-3 rounded-xl border border-zinc-300 bg-surface-cream font-sans text-xs leading-relaxed"
                />
              </div>

              <div>
                <label className="font-bold text-charcoal block mb-1">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-zinc-300 bg-surface-cream text-xs"
                />
              </div>

              <div>
                <label className="font-bold text-charcoal block mb-1">
                  Publishing Status
                </label>
                <select
                  value={status}
                  onChange={(e: any) => setStatus(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-zinc-300 bg-surface-cream font-medium"
                >
                  <option value="PUBLISHED">PUBLISHED (Live Immediately)</option>
                  <option value="DRAFT">DRAFT (Internal Review)</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-zinc-200">
              <button
                type="button"
                onClick={() => setIsEditorOpen(false)}
                className="bg-zinc-100 hover:bg-zinc-200 text-charcoal px-5 py-2.5 rounded-xl text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="bg-primary-900 hover:bg-primary-800 text-surface-cream px-6 py-2.5 rounded-xl text-xs font-bold shadow disabled:opacity-50"
              >
                {saving ? "Publishing Column..." : "Publish Column Now"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
