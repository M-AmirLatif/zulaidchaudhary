"use client";

import { useState, useEffect } from "react";
import { 
  Users, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Calendar, 
  Search, 
  MapPin, 
  Briefcase,
  AlertCircle
} from "lucide-react";

interface Volunteer {
  id: string;
  applicationNumber: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  profession: string;
  skills: string[];
  availabilityHours: number;
  motivation: string;
  status: "PENDING" | "UNDER_REVIEW" | "INTERVIEW_SCHEDULED" | "APPROVED" | "REJECTED";
  reviewedBy?: string;
  notes?: string;
  submittedAt: string;
}

export default function AdminVolunteersPage() {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("ALL");
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  const fetchVolunteers = async () => {
    try {
      const res = await fetch("/api/admin/volunteers");
      const data = await res.json();
      if (data.volunteers) {
        setVolunteers(data.volunteers);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVolunteers();
  }, []);

  const handleUpdateStatus = async (id: string, status: Volunteer["status"], notes: string) => {
    try {
      const res = await fetch("/api/admin/volunteers", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status, notes }),
      });
      if (res.ok) {
        setActionSuccess(`Application updated to ${status}`);
        fetchVolunteers();
        setTimeout(() => setActionSuccess(null), 3000);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const filtered = volunteers.filter((v) => {
    if (filter === "ALL") return true;
    return v.status === filter;
  });

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <div className="inline-flex items-center gap-2 self-start bg-primary-100 text-primary-900 px-3 py-1 rounded-full text-xs font-semibold">
            <Users className="w-3.5 h-3.5" />
            <span>Human Resource Approvals</span>
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900">
            Volunteer Applications Review Queue
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
            Rule 6: No volunteer is approved without verified administrative authorization and audit log recording.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 text-xs">
          {["ALL", "PENDING", "APPROVED", "REJECTED"].map((st) => (
            <button
              key={st}
              onClick={() => setFilter(st)}
              className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
                filter === st
                  ? "bg-primary-900 text-surface-cream"
                  : "bg-surface-card border border-zinc-200 text-charcoal hover:bg-zinc-100"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {actionSuccess && (
        <div className="p-3 bg-green-50 border border-status-green/30 rounded-xl text-xs sm:text-sm text-status-green font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{actionSuccess}</span>
        </div>
      )}

      {/* Applications List */}
      <div className="flex flex-col gap-4">
        {filtered.map((vol) => (
          <div
            key={vol.id}
            className="bg-surface-card rounded-2xl border border-zinc-200 p-6 flex flex-col gap-4 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-900 flex items-center justify-center font-bold text-sm">
                  {vol.fullName.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-primary-900">
                    {vol.fullName}
                  </h3>
                  <span className="font-mono text-xs text-charcoal-muted">
                    {vol.applicationNumber} • {vol.city}
                  </span>
                </div>
              </div>

              <span
                className={`self-start sm:self-auto px-3 py-1 rounded-full text-xs font-bold ${
                  vol.status === "APPROVED"
                    ? "bg-green-100 text-status-green"
                    : vol.status === "REJECTED"
                    ? "bg-red-100 text-alert-red"
                    : "bg-amber-100 text-accent-gold-dark"
                }`}
              >
                {vol.status}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-charcoal-muted">
              <div>
                <span className="block font-semibold text-charcoal">Profession:</span>
                <span>{vol.profession}</span>
              </div>
              <div>
                <span className="block font-semibold text-charcoal">Contact:</span>
                <span>{vol.email} • {vol.phone}</span>
              </div>
              <div>
                <span className="block font-semibold text-charcoal">Availability:</span>
                <span>{vol.availabilityHours} hrs/week</span>
              </div>
            </div>

            <div className="p-3 bg-surface-muted/40 rounded-xl text-xs text-charcoal-muted">
              <span className="font-semibold text-charcoal block mb-0.5">Motivation Statement:</span>
              <p className="italic">&ldquo;{vol.motivation}&rdquo;</p>
            </div>

            {/* Registered Skills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-charcoal-muted font-semibold">Skills:</span>
              {vol.skills.map((sk, idx) => (
                <span key={idx} className="bg-primary-100 text-primary-900 text-[11px] font-medium px-2.5 py-0.5 rounded-full">
                  {sk}
                </span>
              ))}
            </div>

            {/* Approval Action Controls */}
            {vol.status !== "APPROVED" && (
              <div className="pt-3 border-t border-zinc-100 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleUpdateStatus(vol.id, "APPROVED", "Approved after verification")}
                  className="bg-status-green hover:bg-green-700 text-white font-bold text-xs px-4 py-2 rounded-xl shadow transition-colors flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Approve Volunteer</span>
                </button>

                <button
                  onClick={() => handleUpdateStatus(vol.id, "INTERVIEW_SCHEDULED", "Contacted for WhatsApp interview")}
                  className="bg-amber-100 hover:bg-amber-200 text-accent-gold-dark font-bold text-xs px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <Clock className="w-4 h-4" />
                  <span>Schedule Interview</span>
                </button>

                <button
                  onClick={() => handleUpdateStatus(vol.id, "REJECTED", "Did not meet current chapter criteria")}
                  className="bg-red-50 hover:bg-red-100 text-alert-red font-bold text-xs px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <XCircle className="w-4 h-4" />
                  <span>Decline</span>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
