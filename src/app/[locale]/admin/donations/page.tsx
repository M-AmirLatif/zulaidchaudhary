"use client";

import { useEffect, useState } from "react";
import {
  Heart,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Printer,
  ShieldCheck,
  Building2,
  CreditCard,
  Smartphone,
  Eye,
  RefreshCw,
} from "lucide-react";
import { DonationRecord } from "@/lib/mock-data";

export default function AdminDonationsPage() {
  const [donations, setDonations] = useState<DonationRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [methodFilter, setMethodFilter] = useState<string>("ALL");
  const [selectedReceipt, setSelectedReceipt] = useState<DonationRecord | null>(null);

  const fetchDonations = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/donations");
      const data = await res.json();
      if (data.success && data.donations) {
        setDonations(data.donations);
      }
    } catch {
      console.error("Failed to load donations");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  const filtered = donations.filter((d) => {
    const matchesSearch =
      d.receiptNumber.toLowerCase().includes(search.toLowerCase()) ||
      d.donorName.toLowerCase().includes(search.toLowerCase()) ||
      d.cause.toLowerCase().includes(search.toLowerCase()) ||
      d.transactionReference.toLowerCase().includes(search.toLowerCase());

    const matchesMethod =
      methodFilter === "ALL" || d.paymentMethod === methodFilter;

    return matchesSearch && matchesMethod;
  });

  const totalPKR = donations
    .filter((d) => d.currency === "PKR")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalUSD = donations
    .filter((d) => d.currency === "USD")
    .reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="flex flex-col gap-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-gold-dark bg-amber-50 px-2.5 py-0.5 rounded-full mb-1">
            <Heart className="w-3.5 h-3.5 fill-accent-gold" />
            <span>Contributions & Verified Ledger</span>
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900">
            Donation Management & Receipts
          </h1>
          <p className="text-xs text-charcoal-muted">
            Track incoming donations, audit digital receipts, and verify bank transfers (Rule 9 anonymization compliant).
          </p>
        </div>

        <button
          onClick={fetchDonations}
          className="inline-flex items-center gap-2 bg-surface-card hover:bg-zinc-100 text-charcoal border border-zinc-300 font-semibold text-xs px-4 py-2.5 rounded-xl shadow-sm self-start sm:self-auto transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Refresh Ledger</span>
        </button>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-surface-card border border-zinc-200 rounded-2xl p-5 shadow-sm">
          <span className="text-xs text-zinc-500 font-medium block">Total Receipts Issued</span>
          <span className="font-serif font-bold text-2xl text-primary-900 mt-1 block">
            {donations.length}
          </span>
          <span className="text-[11px] text-status-green flex items-center gap-1 mt-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>100% Audit logged</span>
          </span>
        </div>

        <div className="bg-surface-card border border-zinc-200 rounded-2xl p-5 shadow-sm">
          <span className="text-xs text-zinc-500 font-medium block">PKR Contributions</span>
          <span className="font-serif font-bold text-2xl text-primary-900 mt-1 block">
            Rs. {totalPKR.toLocaleString()}
          </span>
          <span className="text-[11px] text-zinc-400 mt-1 block">
            Across Medical, Hospital & Relief
          </span>
        </div>

        <div className="bg-surface-card border border-zinc-200 rounded-2xl p-5 shadow-sm">
          <span className="text-xs text-zinc-500 font-medium block">USD Pledges</span>
          <span className="font-serif font-bold text-2xl text-accent-gold-dark mt-1 block">
            ${totalUSD.toLocaleString()}
          </span>
          <span className="text-[11px] text-zinc-400 mt-1 block">
            International diaspora support
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-surface-card border border-zinc-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-zinc-400 absolute start-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search receipt, donor, cause, or ref..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full ps-9 pe-4 py-2 rounded-xl border border-zinc-200 text-xs focus:outline-none focus:border-accent-gold bg-surface-cream"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="w-3.5 h-3.5 text-zinc-400" />
          <select
            value={methodFilter}
            onChange={(e) => setMethodFilter(e.target.value)}
            className="p-2 rounded-xl border border-zinc-200 text-xs bg-surface-cream font-medium focus:outline-none"
          >
            <option value="ALL">All Payment Methods</option>
            <option value="STRIPE_CARD">Card (Stripe)</option>
            <option value="BANK_TRANSFER">Bank Wire</option>
            <option value="JAZZCASH">JazzCash</option>
            <option value="EASYPAISA">Easypaisa</option>
          </select>
        </div>
      </div>

      {/* Donations Table */}
      <div className="bg-surface-card border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-start">
            <thead className="bg-surface-muted border-b border-zinc-200 text-zinc-500 font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4 text-start">Receipt #</th>
                <th className="p-4 text-start">Donor (Rule 9)</th>
                <th className="p-4 text-start">Humanitarian Cause</th>
                <th className="p-4 text-start">Amount</th>
                <th className="p-4 text-start">Method</th>
                <th className="p-4 text-start">Date</th>
                <th className="p-4 text-end">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {loading ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-zinc-400">
                    Loading verified donation records...
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-zinc-400">
                    No donations matching your query.
                  </td>
                </tr>
              ) : (
                filtered.map((d) => (
                  <tr key={d.id} className="hover:bg-zinc-50/60 transition-colors">
                    <td className="p-4 font-mono font-bold text-primary-900">
                      {d.receiptNumber}
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <span className="font-semibold text-charcoal flex items-center gap-1">
                          {d.donorName}
                          {d.isAnonymous && (
                            <span className="text-[10px] bg-zinc-200 text-zinc-600 px-1 rounded">
                              Anon
                            </span>
                          )}
                        </span>
                        <span className="text-[11px] text-zinc-400 font-mono">
                          {d.donorEmail}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 font-medium text-primary-950">
                      {d.cause}
                    </td>
                    <td className="p-4">
                      <span className="font-serif font-bold text-primary-900 text-sm">
                        {d.currency} {d.amount.toLocaleString()}
                      </span>
                      <span className="block text-[10px] text-zinc-400 uppercase">
                        {d.frequency}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] bg-zinc-100 text-zinc-700 px-2 py-0.5 rounded">
                        {d.paymentMethod === "STRIPE_CARD" && <CreditCard className="w-3 h-3" />}
                        {d.paymentMethod === "BANK_TRANSFER" && <Building2 className="w-3 h-3" />}
                        {(d.paymentMethod === "JAZZCASH" || d.paymentMethod === "EASYPAISA") && (
                          <Smartphone className="w-3 h-3" />
                        )}
                        <span>{d.paymentMethod.replace("_", " ")}</span>
                      </span>
                    </td>
                    <td className="p-4 text-zinc-500">
                      {new Date(d.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-4 text-end">
                      <button
                        onClick={() => setSelectedReceipt(d)}
                        className="inline-flex items-center gap-1 text-xs bg-primary-100 hover:bg-primary-200 text-primary-900 px-3 py-1.5 rounded-lg font-semibold transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Receipt</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Receipt Inspect Modal */}
      {selectedReceipt && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface-card rounded-3xl border-2 border-accent-gold p-6 sm:p-8 max-w-md w-full shadow-2xl flex flex-col gap-6 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
              <span className="font-serif font-bold text-lg text-primary-900">
                Donation Receipt #{selectedReceipt.receiptNumber}
              </span>
              <button
                onClick={() => setSelectedReceipt(null)}
                className="text-zinc-400 hover:text-zinc-700 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="bg-surface-cream rounded-2xl p-4 border border-zinc-200 flex flex-col gap-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Donor:</span>
                <span className="font-semibold text-charcoal">{selectedReceipt.donorName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Cause:</span>
                <span className="font-semibold text-primary-900">{selectedReceipt.cause}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Amount:</span>
                <span className="font-serif font-bold text-base text-primary-900">
                  {selectedReceipt.currency} {selectedReceipt.amount.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Reference:</span>
                <span className="font-mono text-[11px] text-zinc-600">{selectedReceipt.transactionReference}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Issued On:</span>
                <span>{new Date(selectedReceipt.createdAt).toLocaleString()}</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 bg-primary-900 hover:bg-primary-800 text-surface-cream px-4 py-2 rounded-xl text-xs font-semibold shadow"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Official Receipt</span>
              </button>
              <button
                onClick={() => setSelectedReceipt(null)}
                className="bg-zinc-100 hover:bg-zinc-200 text-charcoal px-4 py-2 rounded-xl text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
