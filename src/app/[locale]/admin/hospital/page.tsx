"use client";

import { useState, useEffect } from "react";
import { 
  Building2, 
  CheckCircle2, 
  Clock, 
  Plus, 
  ShieldCheck, 
  Calendar 
} from "lucide-react";

interface HospitalUpdate {
  id: string;
  phaseNumber: number;
  phaseTitleEn: string;
  headlineEn: string;
  bodyEn: string;
  isVerifiedMilestone: boolean;
  publishedDate: string;
}

export default function AdminHospitalPage() {
  const [updates, setUpdates] = useState<HospitalUpdate[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [phaseNumber, setPhaseNumber] = useState(2);
  const [phaseTitleEn, setPhaseTitleEn] = useState("Hospital Construction");
  const [headlineEn, setHeadlineEn] = useState("");
  const [bodyEn, setBodyEn] = useState("");
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  const fetchUpdates = async () => {
    try {
      const res = await fetch("/api/admin/hospital");
      const data = await res.json();
      if (data.updates) setUpdates(data.updates);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUpdates();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/hospital", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phaseNumber, phaseTitleEn, headlineEn, bodyEn }),
      });
      if (res.ok) {
        setActionSuccess("Hospital construction milestone posted.");
        setShowModal(false);
        setHeadlineEn("");
        setBodyEn("");
        fetchUpdates();
        setTimeout(() => setActionSuccess(null), 3000);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <div className="inline-flex items-center gap-2 self-start bg-primary-100 text-primary-900 px-3 py-1 rounded-full text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>Infrastructure Oversight</span>
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900">
            Charity Hospital Construction Tracker
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
            Rule 3: Publish factual engineering milestones without unverified claims regarding bed capacity or launch dates.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="self-start sm:self-auto bg-primary-900 hover:bg-primary-800 text-surface-cream font-bold text-xs px-4 py-2.5 rounded-xl shadow transition-colors flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Post Milestone Update</span>
        </button>
      </div>

      {actionSuccess && (
        <div className="p-3 bg-green-50 border border-status-green/30 rounded-xl text-xs sm:text-sm text-status-green font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{actionSuccess}</span>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-2xl flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
              <h2 className="font-serif font-bold text-xl text-primary-900">
                Post Construction Milestone
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-zinc-400 hover:text-zinc-600 font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreate} className="flex flex-col gap-4 text-xs sm:text-sm">
              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-charcoal">Phase Title</label>
                <input
                  type="text"
                  required
                  value={phaseTitleEn}
                  onChange={(e) => setPhaseTitleEn(e.target.value)}
                  className="p-3 rounded-xl border border-zinc-300 bg-surface-cream"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-charcoal">Headline</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Structural ground foundation concrete poured"
                  value={headlineEn}
                  onChange={(e) => setHeadlineEn(e.target.value)}
                  className="p-3 rounded-xl border border-zinc-300 bg-surface-cream"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-charcoal">Milestone Verification Notes</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Detailed engineering status verified by site supervisor..."
                  value={bodyEn}
                  onChange={(e) => setBodyEn(e.target.value)}
                  className="p-3 rounded-xl border border-zinc-300 bg-surface-cream"
                />
              </div>

              <button
                type="submit"
                className="bg-primary-900 hover:bg-primary-800 text-surface-cream font-bold py-3 px-6 rounded-xl shadow mt-2"
              >
                Publish Milestone Update
              </button>
            </form>
          </div>
        </div>
      )}

      {/* List of updates */}
      <div className="flex flex-col gap-4">
        {updates.map((upd) => (
          <div
            key={upd.id}
            className="bg-surface-card rounded-2xl border border-zinc-200 p-6 flex flex-col gap-3 shadow-sm"
          >
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
              <div className="flex items-center gap-2">
                <span className="font-bold text-accent-gold-dark bg-amber-50 px-2.5 py-0.5 rounded text-xs">
                  Phase {upd.phaseNumber}: {upd.phaseTitleEn}
                </span>
                <span className="text-xs text-zinc-400">•</span>
                <span className="text-xs text-zinc-500">{new Date(upd.publishedDate).toLocaleDateString()}</span>
              </div>
              <span className="inline-flex items-center gap-1 text-status-green font-semibold text-xs">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Status</span>
              </span>
            </div>

            <h3 className="font-serif font-bold text-lg text-primary-900">
              {upd.headlineEn}
            </h3>

            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              {upd.bodyEn}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
