"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import { ShieldCheck, Lock, Mail, KeyRound, AlertCircle, ArrowRight, UserCheck } from "lucide-react";

export default function LoginPage() {
  const t = useTranslations("auth");
  const locale = useLocale();
  const router = useRouter();

  const [email, setEmail] = useState("founder@zulaidchaudharyfoundation.com");
  const [password, setPassword] = useState("Password123!");
  const [totpCode, setTotpCode] = useState("");
  const [needs2FA, setNeeds2FA] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const testAccounts = [
    { label: "Founder (Super Admin)", email: "founder@zulaidchaudharyfoundation.com", role: "SUPER_ADMIN", has2FA: true },
    { label: "Medical Coord", email: "medical@zulaidchaudharyfoundation.com", role: "MEDICAL_COORDINATOR", has2FA: true },
    { label: "Finance Officer", email: "finance@zulaidchaudharyfoundation.com", role: "FINANCE_OFFICER", has2FA: true },
    { label: "Volunteer Coord", email: "volunteer@zulaidchaudharyfoundation.com", role: "VOLUNTEER_COORDINATOR", has2FA: false },
    { label: "CMS Editor", email: "editor@zulaidchaudharyfoundation.com", role: "CONTENT_EDITOR", has2FA: false },
    { label: "Country Lead", email: "uk.coordinator@zulaidchaudharyfoundation.com", role: "COUNTRY_COORDINATOR", has2FA: false },
    { label: "Donor / Supporter", email: "supporter@gmail.com", role: "DONOR_USER", has2FA: false },
    { label: "Volunteer Applicant", email: "volunteer.user@gmail.com", role: "VOLUNTEER_USER", has2FA: false },
    { label: "Founding Member", email: "member.user@gmail.com", role: "MEMBER_USER", has2FA: false },
  ];

  const handleSelectAccount = (accountEmail: string) => {
    setEmail(accountEmail);
    setPassword("Password123!");
    setNeeds2FA(false);
    setTotpCode("");
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, totpCode }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Authentication failed");
        setLoading(false);
        return;
      }

      if (data.requiresTwoFactor) {
        setNeeds2FA(true);
        setTotpCode("123456"); // Pre-fill demo TOTP for testing convenience
        setLoading(false);
        return;
      }

      // Redirect
      window.location.href = `/${locale}${data.redirectTo || "/dashboard"}`;
    } catch {
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-[80vh] py-16 px-4 bg-surface-cream flex items-center justify-center">
      <div className="w-full max-w-md bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-xl flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <div className="w-12 h-12 rounded-2xl bg-primary-900 text-accent-gold flex items-center justify-center font-serif font-bold text-xl shadow">
            ZCF
          </div>
          <h1 className="font-serif font-bold text-2xl text-primary-900">
            {t("signInTitle")}
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
            {t("signInSubtitle")}
          </p>
        </div>

        {/* Interactive Role Quick-Picker */}
        <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-3.5 text-xs text-amber-950 flex flex-col gap-2.5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 font-bold text-accent-gold-dark text-[11px] sm:text-xs">
              <UserCheck className="w-4 h-4 text-accent-gold-dark shrink-0" />
              <span>Select Role to Test Instantly</span>
            </div>
            <span className="text-[10px] text-zinc-500 font-mono">Password123!</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            {testAccounts.map((acc) => {
              const isSelected = email.toLowerCase() === acc.email.toLowerCase();
              return (
                <button
                  key={acc.email}
                  type="button"
                  onClick={() => handleSelectAccount(acc.email)}
                  className={`text-start px-2 py-1.5 rounded-lg text-[10.5px] font-medium transition-all flex flex-col border ${
                    isSelected
                      ? "bg-primary-900 text-accent-gold border-primary-900 shadow-sm"
                      : "bg-white/80 text-zinc-700 border-zinc-200 hover:border-accent-gold hover:bg-white"
                  }`}
                >
                  <span className="font-bold truncate">{acc.label}</span>
                  <span className="text-[9px] opacity-75 truncate">{acc.email.split("@")[0]}</span>
                </button>
              );
            })}
          </div>

          <div className="text-[10px] text-zinc-500 flex items-center justify-between border-t border-amber-100 pt-1.5">
            <span>Admin accounts have 2FA enabled</span>
            <span className="font-semibold text-accent-gold-dark font-mono">2FA: 123456</span>
          </div>
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-alert-red flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs sm:text-sm">
          {!needs2FA ? (
            <>
              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-charcoal flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-accent-gold-dark" />
                  <span>{t("emailLabel")}</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 rounded-xl border border-zinc-300 focus:outline-none focus:border-accent-gold bg-surface-cream text-charcoal"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 rounded-xl border border-zinc-300 focus:outline-none focus:border-accent-gold bg-surface-cream text-charcoal"
                />
              </div>
            </>
          ) : (
            <div className="p-4 bg-primary-900 text-surface-cream rounded-2xl flex flex-col gap-3">
              <div className="flex items-center gap-2 text-accent-gold">
                <KeyRound className="w-5 h-5" />
                <span className="font-serif font-bold text-sm">{t("twoFactorTitle")}</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {t("twoFactorDesc")}
              </p>
              <input
                type="text"
                autoFocus
                maxLength={6}
                placeholder="6-digit code"
                value={totpCode}
                onChange={(e) => setTotpCode(e.target.value)}
                className="p-3 rounded-xl border border-primary-700 bg-primary-800 text-surface-cream text-center text-lg font-mono tracking-widest focus:outline-none focus:border-accent-gold"
              />
              <span className="text-[11px] text-zinc-400 text-center">
                (Enter 123456 for demo authenticator bypass)
              </span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary-900 hover:bg-primary-800 text-surface-cream font-bold py-3 px-6 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 mt-2"
          >
            <span>{loading ? "Verifying..." : needs2FA ? t("verifyBtn") : t("signInBtn")}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </form>

        <div className="pt-4 border-t border-zinc-100 text-center text-xs text-charcoal-muted flex items-center justify-center gap-2">
          <span>{t("noAccount")}</span>
          <Link href="/auth/register" className="text-primary-900 font-bold hover:text-accent-gold-dark">
            {t("registerBtn")}
          </Link>
        </div>
      </div>
    </div>
  );
}
