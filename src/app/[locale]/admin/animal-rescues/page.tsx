"use client";

import { useEffect, useState } from "react";
import {
  PawPrint,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Filter,
  Search,
  Activity,
  UserCheck,
  RefreshCw,
  Phone,
  MapPin,
} from "lucide-react";
import { AnimalRescueRecord } from "@/lib/mock-data";

export default function AdminAnimalRescuesPage() {
  const [rescues, setRescues] = useState<AnimalRescueRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [editingRescue, setEditingRescue] = useState<AnimalRescueRecord | null>(null);
  const [vetName, setVetName] = useState("");
  const [treatmentNotes, setTreatmentNotes] = useState("");
  const [statusSelect, setStatusSelect] = useState<AnimalRescueRecord["status"]>("REPORTED");
  const [saving, setSaving] = useState(false);

  const fetchRescues = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/animal-rescues");
      const data = await res.json();
      if (data.success && data.rescues) {
        setRescues(data.rescues);
      }
    } catch {
      console.error("Failed to load rescues");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRescues();
  }, []);

  const handleOpenEdit = (r: AnimalRescueRecord) => {
    setEditingRescue(r);
    setVetName(r.assignedVet || "");
    setTreatmentNotes(r.treatmentNotes || "");
    setStatusSelect(r.status);
  };

  const handleSaveRescue = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingRescue) return;

    setSaving(true);
    try {
      const res = await fetch("/api/animal-rescues", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingRescue.id,
          status: statusSelect,
          assignedVet: vetName,
          treatmentNotes,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setEditingRescue(null);
        fetchRescues();
      } else {
        alert(data.error || "Update failed");
      }
    } catch {
      alert("Error saving rescue update");
    } finally {
      setSaving(false);
    }
  };

  const filtered = rescues.filter((r) => {
    const matchesSearch =
      r.trackingNumber.toLowerCase().includes(search.toLowerCase()) ||
      r.locationAddress.toLowerCase().includes(search.toLowerCase()) ||
      r.animalType.toLowerCase().includes(search.toLowerCase()) ||
      r.condition.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === "ALL" || r.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-status-green bg-emerald-50 px-2.5 py-0.5 rounded-full mb-1">
            <PawPrint className="w-3.5 h-3.5" />
            <span>Animal Welfare Dispatch</span>
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900">
            Emergency Animal Rescue Operations
          </h1>
          <p className="text-xs text-charcoal-muted">
            Manage distress calls for street strays, cart equines, and urban wildlife; assign veterinary teams and log recovery.
          </p>
        </div>

        <button
          onClick={fetchRescues}
          className="inline-flex items-center gap-2 bg-surface-card hover:bg-zinc-100 text-charcoal border border-zinc-300 font-semibold text-xs px-4 py-2 rounded-xl shadow-sm self-start sm:self-auto transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Refresh Queue</span>
        </button>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-surface-card border border-zinc-200 rounded-2xl p-5 shadow-sm">
          <span className="text-xs text-zinc-500 font-medium block">Total Rescue Reports</span>
          <span className="font-serif font-bold text-2xl text-primary-900 mt-1 block">
            {rescues.length}
          </span>
        </div>
        <div className="bg-surface-card border border-zinc-200 rounded-2xl p-5 shadow-sm">
          <span className="text-xs text-zinc-500 font-medium block">In Treatment</span>
          <span className="font-serif font-bold text-2xl text-accent-gold-dark mt-1 block">
            {rescues.filter((r) => r.status === "IN_TREATMENT").length}
          </span>
        </div>
        <div className="bg-surface-card border border-zinc-200 rounded-2xl p-5 shadow-sm">
          <span className="text-xs text-zinc-500 font-medium block">Rehabilitated / Sheltered</span>
          <span className="font-serif font-bold text-2xl text-status-green mt-1 block">
            {rescues.filter((r) => r.status === "REHABILITATED" || r.status === "SHELTERED").length}
          </span>
        </div>
        <div className="bg-surface-card border border-zinc-200 rounded-2xl p-5 shadow-sm">
          <span className="text-xs text-zinc-500 font-medium block">Urgent Pending Dispatch</span>
          <span className="font-serif font-bold text-2xl text-alert-red mt-1 block">
            {rescues.filter((r) => r.status === "REPORTED").length}
          </span>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="bg-surface-card border border-zinc-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-zinc-400 absolute start-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search tracking #, species, or landmark..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full ps-9 pe-4 py-2 rounded-xl border border-zinc-200 text-xs focus:outline-none focus:border-accent-gold bg-surface-cream"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="w-3.5 h-3.5 text-zinc-400" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="p-2 rounded-xl border border-zinc-200 text-xs bg-surface-cream font-medium focus:outline-none"
          >
            <option value="ALL">All Statuses</option>
            <option value="REPORTED">Reported (New)</option>
            <option value="DISPATCHED">Dispatched</option>
            <option value="IN_TREATMENT">In Treatment</option>
            <option value="REHABILITATED">Rehabilitated</option>
            <option value="SHELTERED">Sheltered</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-surface-card border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-start">
            <thead className="bg-surface-muted border-b border-zinc-200 text-zinc-500 font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4 text-start">Tracking #</th>
                <th className="p-4 text-start">Animal & Condition</th>
                <th className="p-4 text-start">Urgency</th>
                <th className="p-4 text-start">Location Coordinates</th>
                <th className="p-4 text-start">Attending Vet</th>
                <th className="p-4 text-start">Status</th>
                <th className="p-4 text-end">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {loading ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-zinc-400">
                    Loading animal rescue ledger...
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-zinc-400">
                    No animal rescue records match your criteria.
                  </td>
                </tr>
              ) : (
                filtered.map((r) => (
                  <tr key={r.id} className="hover:bg-zinc-50/60 transition-colors">
                    <td className="p-4 font-mono font-bold text-primary-900">
                      {r.trackingNumber}
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-charcoal">
                          {r.animalType}
                        </span>
                        <span className="text-[11px] text-zinc-500">
                          {r.condition.replace(/_/g, " ")}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold ${
                          r.urgency === "EMERGENCY_CRITICAL"
                            ? "bg-red-100 text-alert-red"
                            : r.urgency === "HIGH"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {r.urgency.replace("_", " ")}
                      </span>
                    </td>
                    <td className="p-4 text-zinc-600 max-w-xs">
                      <div className="flex items-start gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">
                          {r.locationAddress}, {r.locationCity}
                        </span>
                      </div>
                      <span className="text-[10px] text-zinc-400 font-mono block mt-0.5">
                        Reporter: {r.reporterPhone}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="font-medium text-charcoal">
                        {r.assignedVet || "Unassigned"}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          r.status === "REPORTED"
                            ? "bg-red-100 text-alert-red"
                            : r.status === "DISPATCHED"
                            ? "bg-blue-100 text-blue-800"
                            : r.status === "IN_TREATMENT"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-emerald-100 text-status-green"
                        }`}
                      >
                        {r.status.replace("_", " ")}
                      </span>
                    </td>
                    <td className="p-4 text-end">
                      <button
                        onClick={() => handleOpenEdit(r)}
                        className="inline-flex items-center gap-1 text-xs bg-primary-100 hover:bg-primary-200 text-primary-900 px-3 py-1.5 rounded-lg font-semibold transition-colors"
                      >
                        <span>Update Log</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Update Rescue Modal */}
      {editingRescue && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <form
            onSubmit={handleSaveRescue}
            className="bg-surface-card rounded-3xl border border-zinc-200 p-6 sm:p-8 max-w-lg w-full shadow-2xl flex flex-col gap-5 animate-in fade-in"
          >
            <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
              <span className="font-serif font-bold text-lg text-primary-900">
                Update Rescue Log: {editingRescue.trackingNumber}
              </span>
              <button
                type="button"
                onClick={() => setEditingRescue(null)}
                className="text-zinc-400 hover:text-zinc-700 font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-charcoal block mb-1">
                  Rescue Status *
                </label>
                <select
                  value={statusSelect}
                  onChange={(e: any) => setStatusSelect(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-zinc-300 bg-surface-cream font-medium"
                >
                  <option value="REPORTED">REPORTED (Awaiting Triage)</option>
                  <option value="DISPATCHED">DISPATCHED (Ambulance / Team en route)</option>
                  <option value="IN_TREATMENT">IN_TREATMENT (Under Veterinary Care)</option>
                  <option value="REHABILITATED">REHABILITATED (Healed / Released)</option>
                  <option value="SHELTERED">SHELTERED (In Long-Term Care)</option>
                  <option value="CLOSED">CLOSED</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-charcoal block mb-1">
                  Attending Veterinary Surgeon / Rescue Team
                </label>
                <input
                  type="text"
                  placeholder="e.g. Dr. Rashid (Equine Vet)"
                  value={vetName}
                  onChange={(e) => setVetName(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-zinc-300 bg-surface-cream font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-charcoal block mb-1">
                  Clinical & Recovery Log Notes
                </label>
                <textarea
                  rows={4}
                  placeholder="Record treatment procedures, medication administered, and rehabilitation milestones..."
                  value={treatmentNotes}
                  onChange={(e) => setTreatmentNotes(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-zinc-300 bg-surface-cream"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setEditingRescue(null)}
                className="bg-zinc-100 hover:bg-zinc-200 text-charcoal px-4 py-2 rounded-xl text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="bg-primary-900 hover:bg-primary-800 text-surface-cream px-5 py-2 rounded-xl text-xs font-bold shadow"
              >
                {saving ? "Saving..." : "Save Rescue Record"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
