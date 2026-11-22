"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { User, Mail, Lock, AlertCircle, ArrowRight, CheckCircle2 } from "lucide-react";

export default function RegisterPage() {
  const t = useTranslations("auth");
  const locale = useLocale();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to register");
        setLoading(false);
        return;
      }

      window.location.href = `/${locale}/dashboard`;
    } catch {
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-[80vh] py-16 px-4 bg-surface-cream flex items-center justify-center">
      <div className="w-full max-w-md bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-xl flex flex-col gap-6">
        <div className="flex flex-col items-center text-center gap-2">
          <div className="w-12 h-12 rounded-2xl bg-accent-gold text-primary-900 flex items-center justify-center font-serif font-bold text-xl shadow">
            ZCF
          </div>
          <h1 className="font-serif font-bold text-2xl text-primary-900">
            {t("registerTitle")}
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
            {t("registerSubtitle")}
          </p>
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-alert-red flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs sm:text-sm">
          <div className="flex flex-col gap-1.5">
            <label className="font-semibold text-charcoal flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-accent-gold-dark" />
              <span>{t("nameLabel")}</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Tariq Mehmood"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 rounded-xl border border-zinc-300 focus:outline-none focus:border-accent-gold bg-surface-cream"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-semibold text-charcoal flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-accent-gold-dark" />
              <span>{t("emailLabel")}</span>
            </label>
            <input
              type="email"
              required
              placeholder="user@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded-xl border border-zinc-300 focus:outline-none focus:border-accent-gold bg-surface-cream"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-semibold text-charcoal flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-accent-gold-dark" />
              <span>{t("passwordLabel")}</span>
            </label>
            <input
              type="password"
              required
              minLength={8}
              placeholder="Minimum 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 rounded-xl border border-zinc-300 focus:outline-none focus:border-accent-gold bg-surface-cream"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary-900 hover:bg-primary-800 text-surface-cream font-bold py-3 px-6 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 mt-2"
          >
            <span>{loading ? "Creating..." : t("registerBtn")}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </form>

        <div className="pt-4 border-t border-zinc-100 text-center text-xs text-charcoal-muted flex items-center justify-center gap-2">
          <span>{t("haveAccount")}</span>
          <Link href="/auth/login" className="text-primary-900 font-bold hover:text-accent-gold-dark">
            {t("signInBtn")}
          </Link>
        </div>
      </div>
    </div>
  );
}
