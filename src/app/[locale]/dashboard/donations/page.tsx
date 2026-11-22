"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/routing";
import {
  Heart,
  Receipt,
  Printer,
  CheckCircle2,
  Calendar,
  CreditCard,
  Building2,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { DonationRecord } from "@/lib/mock-data";

export default function UserDonationsPage() {
  const [donations, setDonations] = useState<DonationRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedReceipt, setSelectedReceipt] = useState<DonationRecord | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/donations");
        const data = await res.json();
        if (data.success && data.donations) {
          setDonations(data.donations);
        }
      } catch (err) {
        console.error("Error loading supporter donations", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-gold-dark bg-amber-50 px-2.5 py-0.5 rounded-full mb-1">
            <Heart className="w-3.5 h-3.5 fill-accent-gold" />
            <span>Verified Supporter History</span>
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900">
            My Donations & Official Receipts
          </h1>
          <p className="text-xs text-charcoal-muted">
            Inspect your humanitarian contributions, download audit-compliant digital receipts, and track supported causes.
          </p>
        </div>

        <Link
          href="/donate"
          className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-light text-primary-900 font-bold text-xs px-5 py-2.5 rounded-xl shadow transition-all hover:scale-105 self-start sm:self-auto"
        >
          <Heart className="w-4 h-4 fill-primary-900" />
          <span>Make a Contribution</span>
        </Link>
      </div>

      {/* Receipts Table */}
      <div className="bg-surface-card border border-zinc-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-start">
            <thead className="bg-surface-muted border-b border-zinc-200 text-zinc-500 font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4 text-start">Receipt #</th>
                <th className="p-4 text-start">Designated Cause</th>
                <th className="p-4 text-start">Amount</th>
                <th className="p-4 text-start">Payment Method</th>
                <th className="p-4 text-start">Date</th>
                <th className="p-4 text-end">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {loading ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-zinc-400">
                    Loading your contribution receipts...
                  </td>
                </tr>
              ) : donations.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-zinc-400">
                    No contributions recorded yet. Your future donations will appear here with instant printable receipts.
                  </td>
                </tr>
              ) : (
                donations.map((d) => (
                  <tr key={d.id} className="hover:bg-zinc-50/60 transition-colors">
                    <td className="p-4 font-mono font-bold text-primary-900">
                      {d.receiptNumber}
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
                        <Printer className="w-3.5 h-3.5" />
                        <span>View / Print</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Receipt Modal */}
      {selectedReceipt && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface-card rounded-3xl border-2 border-accent-gold p-6 sm:p-8 max-w-md w-full shadow-2xl flex flex-col gap-6 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
              <span className="font-serif font-bold text-lg text-primary-900">
                Official Contribution Receipt
              </span>
              <button
                onClick={() => setSelectedReceipt(null)}
                className="text-zinc-400 hover:text-zinc-700 font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="bg-surface-cream rounded-2xl p-4 border border-zinc-200 flex flex-col gap-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Receipt ID:</span>
                <span className="font-mono font-bold text-primary-900">{selectedReceipt.receiptNumber}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Donor Name:</span>
                <span className="font-semibold text-charcoal">{selectedReceipt.donorName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Humanitarian Cause:</span>
                <span className="font-semibold text-primary-900">{selectedReceipt.cause}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Total Contribution:</span>
                <span className="font-serif font-bold text-base text-primary-900">
                  {selectedReceipt.currency} {selectedReceipt.amount.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Date Issued:</span>
                <span>{new Date(selectedReceipt.createdAt).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 bg-primary-900 hover:bg-primary-800 text-surface-cream px-4 py-2 rounded-xl text-xs font-semibold shadow"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Receipt</span>
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
