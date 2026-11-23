"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import {
  Search,
  CheckCircle2,
  Clock,
  ShieldCheck,
  AlertCircle,
  ArrowRight,
  FileText,
  Activity,
  Heart,
  HelpCircle,
} from "lucide-react";

export default function TrackStatusPage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<any | null>(null);

  const handleSearch = async (e?: React.FormEvent, directRef?: string) => {
    if (e) e.preventDefault();
    const searchRef = directRef || query.trim();
    if (!searchRef) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch(`/api/track?ref=${encodeURIComponent(searchRef)}`);
      const data = await res.json();
      if (res.ok && data.found) {
        setResult(data);
        if (directRef) setQuery(directRef);
      } else {
        setError(data.error || "No record found matching this reference number.");
      }
    } catch {
      setError("Unable to connect to verification server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const sampleRefs = [
    { label: "Pediatric Surgery Case", ref: "ZCF-MED-029" },
    { label: "Approved Volunteer", ref: "ZCF-VOL-001" },
    { label: "Equine Rescue", ref: "ZCF-AR-001" },
    { label: "Charitable Receipt", ref: "ZCF-2026-0001" },
  ];

  return (
    <div className="w-full py-16 px-4 bg-surface-cream min-h-[80vh]">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        
        {/* Page Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-[#1A56DB] border border-blue-200 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
            <Activity className="w-4 h-4" />
            <span>TRANSPARENT VERIFICATION PORTAL</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-950 tracking-tight max-w-2xl">
            Live Beneficiary & Application Status Tracker
          </h1>

          <p className="text-base text-charcoal-muted max-w-xl leading-relaxed">
            Verify the progress of submitted surgical sponsorships, volunteer applications, animal rescues, and official donation receipts in real time.
          </p>
        </div>

        {/* Search Input Box */}
        <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-sm flex flex-col gap-6">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-zinc-400 absolute start-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter Tracking Reference (e.g., ZCF-MED-029, ZCF-VOL-001)"
                className="w-full ps-12 pe-4 py-3.5 bg-surface-cream border border-zinc-300 rounded-2xl text-sm font-semibold text-charcoal placeholder:text-zinc-400 focus:outline-none focus:border-accent-gold"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="bg-primary-950 hover:bg-primary-900 disabled:opacity-50 text-accent-gold font-bold px-8 py-3.5 rounded-2xl text-sm shadow transition-all flex items-center justify-center gap-2 shrink-0"
            >
              {loading ? (
                <span>Searching...</span>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>Track Status</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Click Samples */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-100 text-xs">
            <span className="text-zinc-400 font-medium">Try Sample References:</span>
            {sampleRefs.map((sample) => (
              <button
                key={sample.ref}
                type="button"
                onClick={() => handleSearch(undefined, sample.ref)}
                className="bg-zinc-100 hover:bg-zinc-200 text-primary-900 font-mono text-[11px] font-bold px-2.5 py-1 rounded-lg transition-colors"
              >
                {sample.ref}
              </button>
            ))}
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="p-6 rounded-3xl bg-red-50 border border-red-200 flex items-start gap-3.5 animate-in fade-in">
            <AlertCircle className="w-5 h-5 text-alert-red shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1 text-xs sm:text-sm">
              <span className="font-bold text-red-950">Record Not Found</span>
              <p className="text-red-900">{error}</p>
            </div>
          </div>
        )}

        {/* Result Card */}
        {result && (
          <div className="bg-white rounded-3xl border border-zinc-200 shadow-lg overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-300 flex flex-col">
            
            {/* Result Header */}
            <div className="bg-primary-950 text-surface-cream p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4 border-b border-primary-900">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-accent-gold uppercase tracking-wider font-bold">
                  {result.title}
                </span>
                <span className="font-mono font-bold text-xl sm:text-2xl text-white">
                  {result.reference}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 text-accent-gold border border-accent-gold/40">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Status: {result.status}</span>
                </span>
              </div>
            </div>

            {/* Details Strip */}
            <div className="p-6 sm:p-8 flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-zinc-100 text-xs">
                <div>
                  <span className="text-zinc-400 block mb-1">Registered Date</span>
                  <span className="font-bold text-charcoal">{new Date(result.date).toLocaleDateString()}</span>
                </div>
                {result.city && (
                  <div>
                    <span className="text-zinc-400 block mb-1">Region / City</span>
                    <span className="font-bold text-charcoal">{result.city}</span>
                  </div>
                )}
                <div>
                  <span className="text-zinc-400 block mb-1">Summary Description</span>
                  <span className="font-bold text-charcoal">{result.summary}</span>
                </div>
              </div>

              {/* Milestones Timeline */}
              <div className="flex flex-col gap-4">
                <h3 className="font-serif font-bold text-base text-primary-950">
                  Verification & Execution Timeline
                </h3>

                <div className="flex flex-col gap-3">
                  {result.milestones.map((milestone: any, idx: number) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl flex items-center justify-between gap-3 border ${
                        milestone.status === "COMPLETED"
                          ? "bg-emerald-50/70 border-emerald-200 text-[#166534]"
                          : milestone.status === "ACTIVE"
                          ? "bg-blue-50/70 border-blue-200 text-[#1A56DB]"
                          : "bg-zinc-50 border-zinc-200 text-zinc-400"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {milestone.status === "COMPLETED" ? (
                          <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0" />
                        ) : milestone.status === "ACTIVE" ? (
                          <Clock className="w-5 h-5 text-[#1A56DB] animate-spin shrink-0" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-zinc-300 shrink-0" />
                        )}
                        <span className="text-xs sm:text-sm font-semibold">{milestone.label}</span>
                      </div>

                      <span className="text-[11px] font-mono font-bold uppercase">
                        {milestone.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Protection Footer */}
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-between gap-2 text-xs text-charcoal-muted">
                <span>Identifiable patient details and donor records are restricted for privacy.</span>
                <Link href="/contact" className="font-semibold text-primary-900 underline shrink-0">
                  Contact Support
                </Link>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
