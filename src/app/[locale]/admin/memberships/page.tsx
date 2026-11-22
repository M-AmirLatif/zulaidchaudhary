"use client";

import { useState, useEffect } from "react";
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  Search, 
  Calendar, 
  Sparkles,
  ShieldCheck
} from "lucide-react";

interface Membership {
  id: string;
  membershipNumber: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  tier: "Standard" | "Supporting" | "Founding Member";
  status: "PENDING" | "APPROVED" | "REJECTED";
  membershipStart?: string;
  membershipExpires?: string;
  submittedAt: string;
}

export default function AdminMembershipsPage() {
  const [memberships, setMemberships] = useState<Membership[]>([]);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  const fetchMemberships = async () => {
    try {
      const res = await fetch("/api/admin/memberships");
      const data = await res.json();
      if (data.memberships) setMemberships(data.memberships);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchMemberships();
  }, []);

  const handleUpdate = async (id: string, status: Membership["status"]) => {
    try {
      const res = await fetch("/api/admin/memberships", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      if (res.ok) {
        setActionSuccess(`Membership status updated to ${status}`);
        fetchMemberships();
        setTimeout(() => setActionSuccess(null), 3000);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col gap-1.5">
        <div className="inline-flex items-center gap-2 self-start bg-amber-50 text-accent-gold-dark px-3 py-1 rounded-full text-xs font-semibold">
          <Award className="w-3.5 h-3.5" />
          <span>Membership Governance</span>
        </div>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900">
          Foundation Membership Management
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
          Rule 6: Official Foundation Memberships require documented administrative review and annual renewal tracking.
        </p>
      </div>

      {actionSuccess && (
        <div className="p-3 bg-green-50 border border-status-green/30 rounded-xl text-xs sm:text-sm text-status-green font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{actionSuccess}</span>
        </div>
      )}

      {/* Table of Memberships */}
      <div className="bg-surface-card rounded-2xl border border-zinc-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-start text-xs sm:text-sm">
            <thead className="bg-surface-muted/60 border-b border-zinc-200 text-charcoal font-bold">
              <tr>
                <th className="p-4 text-start">Member Name</th>
                <th className="p-4 text-start">Membership ID</th>
                <th className="p-4 text-start">Tier</th>
                <th className="p-4 text-start">Location</th>
                <th className="p-4 text-start">Status</th>
                <th className="p-4 text-end">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {memberships.map((mem) => (
                <tr key={mem.id} className="hover:bg-surface-cream/50">
                  <td className="p-4">
                    <span className="font-bold text-primary-900 block">{mem.fullName}</span>
                    <span className="text-[11px] text-zinc-500">{mem.email}</span>
                  </td>
                  <td className="p-4 font-mono text-xs font-bold text-accent-gold-dark">
                    {mem.membershipNumber}
                  </td>
                  <td className="p-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-accent-gold-dark">
                      {mem.tier}
                    </span>
                  </td>
                  <td className="p-4 text-zinc-600">{mem.city}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      mem.status === "APPROVED" 
                        ? "bg-green-100 text-status-green" 
                        : mem.status === "REJECTED"
                        ? "bg-red-100 text-alert-red"
                        : "bg-amber-100 text-amber-800"
                    }`}>
                      {mem.status}
                    </span>
                  </td>
                  <td className="p-4 text-end">
                    {mem.status === "PENDING" && (
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleUpdate(mem.id, "APPROVED")}
                          className="bg-status-green hover:bg-green-700 text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow transition-colors"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleUpdate(mem.id, "REJECTED")}
                          className="bg-red-100 hover:bg-red-200 text-alert-red font-bold text-xs px-3 py-1.5 rounded-lg transition-colors"
                        >
                          Decline
                        </button>
                      </div>
                    )}
                    {mem.status === "APPROVED" && (
                      <span className="text-xs text-status-green font-semibold">Active Credential</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
