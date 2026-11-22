"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  ShieldCheck, 
  KeyRound, 
  QrCode, 
  CheckCircle2, 
  AlertCircle,
  Copy,
  User,
  Mail,
  Lock
} from "lucide-react";

export default function ProfileSecurityPage() {
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const [secret, setSecret] = useState<string | null>(null);
  const [verificationCode, setVerificationCode] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleStart2FA = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/2fa");
      const data = await res.json();
      if (res.ok) {
        setQrCodeUrl(data.qrCodeUrl);
        setSecret(data.secret);
      } else {
        setError(data.error || "Failed to initiate 2FA");
      }
    } catch {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleVerify2FA = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/2fa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret, code: verificationCode }),
      });
      const data = await res.json();
      if (res.ok) {
        setIs2FAEnabled(true);
        setMessage("Two-Factor Authentication is now actively protecting your account!");
        setQrCodeUrl(null);
      } else {
        setError(data.error || "Failed to verify 2FA code");
      }
    } catch {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 self-start bg-primary-100 text-primary-900 px-3 py-1 rounded-full text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Security & Identity</span>
        </div>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900">
          Account Profile & Multi-Factor Security
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
          Manage your personal credentials, communication preferences, and two-factor authentication (TOTP).
        </p>
      </div>

      {message && (
        <div className="p-4 bg-green-50 border border-status-green/30 rounded-2xl flex items-center gap-3 text-xs sm:text-sm text-status-green font-semibold">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>{message}</span>
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-50 border border-alert-red/30 rounded-2xl flex items-center gap-3 text-xs sm:text-sm text-alert-red font-semibold">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* 2FA Security Module */}
      <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-accent-gold-dark flex items-center justify-center shrink-0">
              <KeyRound className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-xl text-primary-900">
                Two-Factor Authentication (TOTP)
              </h2>
              <span className="text-xs text-charcoal-muted">
                Protects administrative actions and sensitive clinical/financial records.
              </span>
            </div>
          </div>

          <span className={`px-3 py-1 rounded-full text-xs font-bold self-start sm:self-auto flex items-center gap-1.5 ${
            is2FAEnabled ? "bg-green-100 text-status-green" : "bg-zinc-100 text-zinc-600"
          }`}>
            <CheckCircle2 className="w-4 h-4" />
            <span>{is2FAEnabled ? "Active & Enforced" : "Not Enabled"}</span>
          </span>
        </div>

        {!is2FAEnabled && !qrCodeUrl && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-surface-muted/50 rounded-2xl border border-zinc-200">
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed max-w-xl">
              Enable Time-Based One-Time Passwords (TOTP RFC 6238) using Google Authenticator, Microsoft Authenticator, or 1Password.
            </p>
            <button
              onClick={handleStart2FA}
              disabled={loading}
              className="bg-primary-900 hover:bg-primary-800 text-surface-cream font-bold text-xs px-5 py-2.5 rounded-xl shadow transition-colors whitespace-nowrap"
            >
              {loading ? "Generating Secret..." : "Setup Authenticator App"}
            </button>
          </div>
        )}

        {/* QR Code Activation Workflow */}
        {qrCodeUrl && (
          <div className="p-6 bg-primary-900 text-surface-cream rounded-2xl flex flex-col md:flex-row items-center gap-8 shadow-xl">
            <div className="bg-white p-3 rounded-2xl shrink-0">
              <Image
                src={qrCodeUrl}
                alt="Scan 2FA QR Code"
                width={160}
                height={160}
                className="rounded-lg"
              />
            </div>

            <div className="flex-1 flex flex-col gap-4">
              <span className="font-serif font-bold text-lg text-accent-gold">
                Scan QR Code with Authenticator App
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Scan this image using your mobile authenticator app. If you cannot scan the code, enter this secret key manually:
              </p>
              <div className="p-2.5 bg-primary-800 border border-primary-700 rounded-xl font-mono text-xs text-accent-gold select-all flex items-center justify-between">
                <span>{secret}</span>
                <Copy className="w-4 h-4 cursor-pointer text-zinc-400 hover:text-white" />
              </div>

              <form onSubmit={handleVerify2FA} className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <input
                  type="text"
                  maxLength={6}
                  placeholder="Enter 6-digit code (e.g. 123456)"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  className="w-full sm:w-48 p-2.5 rounded-xl border border-primary-700 bg-primary-800 text-surface-cream text-center font-mono text-sm focus:outline-none focus:border-accent-gold"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-accent-gold hover:bg-accent-gold-light text-primary-900 font-bold px-5 py-2.5 rounded-xl text-xs shadow transition-colors whitespace-nowrap"
                >
                  {loading ? "Verifying..." : "Confirm & Activate 2FA"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
