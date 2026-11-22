"use client";

import { useState, useEffect } from "react";
import { 
  ShieldAlert, 
  CheckCircle2, 
  Clock, 
  Search, 
  Lock,
  MessageSquare,
  AlertCircle
} from "lucide-react";

interface Complaint {
  id: string;
  trackingReference: string;
  category: string;
  subject: string;
  description: string;
  complainantContact?: string;
  isConfidential: boolean;
  status: "SUBMITTED" | "UNDER_INVESTIGATION" | "ACTION_TAKEN" | "RESOLVED" | "DISMISSED";
  assignedInvestigator?: string;
  findingsNotes?: string;
  submittedAt: string;
}

export default function AdminComplaintsPage() {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  const fetchComplaints = async () => {
    try {
      const res = await fetch("/api/admin/complaints");
      const data = await res.json();
      if (data.complaints) setComplaints(data.complaints);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const handleUpdate = async (id: string, status: Complaint["status"], findingsNotes: string) => {
    try {
      const res = await fetch("/api/admin/complaints", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status, findingsNotes }),
      });
      if (res.ok) {
        setActionSuccess(`Grievance ${status.toLowerCase().replace('_', ' ')}.`);
        fetchComplaints();
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
        <div className="inline-flex items-center gap-2 self-start bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-semibold">
          <Lock className="w-3.5 h-3.5" />
          <span>Confidential Whistleblower Inbox</span>
        </div>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900">
          Grievance Redressal & Misconduct Reports
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
          Grievance tracking ensures complete non-retaliation, independent administrative inquiry, and verified resolution.
        </p>
      </div>

      {actionSuccess && (
        <div className="p-3 bg-green-50 border border-status-green/30 rounded-xl text-xs sm:text-sm text-status-green font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{actionSuccess}</span>
        </div>
      )}

      {/* Complaints List */}
      <div className="flex flex-col gap-4">
        {complaints.map((cmp) => (
          <div
            key={cmp.id}
            className="bg-surface-card rounded-2xl border border-zinc-200 p-6 flex flex-col gap-4 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-100">
              <div>
                <span className="text-[11px] font-bold text-accent-gold-dark bg-amber-50 px-2.5 py-0.5 rounded uppercase">
                  {cmp.category}
                </span>
                <h3 className="font-serif font-bold text-lg text-primary-900 mt-1">
                  {cmp.subject}
                </h3>
                <span className="font-mono text-xs text-charcoal-muted">
                  Reference: {cmp.trackingReference} • Filed: {new Date(cmp.submittedAt).toLocaleDateString()}
                </span>
              </div>

              <span className={`self-start sm:self-auto px-3 py-1 rounded-full text-xs font-bold ${
                cmp.status === "RESOLVED" 
                  ? "bg-green-100 text-status-green" 
                  : "bg-amber-100 text-accent-gold-dark"
              }`}>
                {cmp.status}
              </span>
            </div>

            <div className="p-4 bg-surface-muted/50 rounded-xl text-xs sm:text-sm text-charcoal leading-relaxed">
              <span className="font-semibold text-charcoal block mb-1">Grievance Description:</span>
              <p>{cmp.description}</p>
            </div>

            {cmp.findingsNotes && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-xl text-xs text-status-green">
                <span className="font-bold block mb-0.5">Resolution Findings & Action:</span>
                <p>{cmp.findingsNotes}</p>
              </div>
            )}

            {cmp.status !== "RESOLVED" && (
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => handleUpdate(cmp.id, "RESOLVED", "Investigation concluded; issue resolved to complainant satisfaction.")}
                  className="bg-status-green hover:bg-green-700 text-white font-bold text-xs px-4 py-2 rounded-xl shadow transition-colors flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Mark Resolved</span>
                </button>
                <button
                  onClick={() => handleUpdate(cmp.id, "UNDER_INVESTIGATION", "Investigator assigned to examine audit logs.")}
                  className="bg-amber-100 hover:bg-amber-200 text-accent-gold-dark font-bold text-xs px-4 py-2 rounded-xl transition-colors"
                >
                  Set Under Investigation
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
