"use client";

import { useState, useEffect } from "react";
import { 
  FolderGit2, 
  Plus, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Building2,
  Stethoscope,
  Droplet
} from "lucide-react";

interface Project {
  id: string;
  slug: string;
  titleEn: string;
  titleUr: string;
  summaryEn: string;
  category: string;
  status: "PLANNED" | "ONGOING" | "COMPLETED";
  targetBudget: number;
  raisedAmount: number;
  currency: string;
  location: string;
  isVerifiedMilestone: boolean;
}

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [titleEn, setTitleEn] = useState("");
  const [summaryEn, setSummaryEn] = useState("");
  const [category, setCategory] = useState("HEALTHCARE_ASSISTANCE");
  const [status, setStatus] = useState<Project["status"]>("PLANNED");
  const [targetBudget, setTargetBudget] = useState(1000000);
  const [location, setLocation] = useState("Punjab, Pakistan");
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/admin/projects");
      const data = await res.json();
      if (data.projects) setProjects(data.projects);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          titleEn,
          summaryEn,
          category,
          status,
          targetBudget,
          location,
        }),
      });
      if (res.ok) {
        setActionSuccess("New project created with verified milestone flag.");
        setShowAddModal(false);
        setTitleEn("");
        setSummaryEn("");
        fetchProjects();
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
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Project Oversight</span>
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900">
            Humanitarian Initiatives Management
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
            Rule 2: Every project milestone and budget must be verified and audit-logged prior to public visibility.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="self-start sm:self-auto bg-primary-900 hover:bg-primary-800 text-surface-cream font-bold text-xs px-4 py-2.5 rounded-xl shadow transition-colors flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Create New Project</span>
        </button>
      </div>

      {actionSuccess && (
        <div className="p-3 bg-green-50 border border-status-green/30 rounded-xl text-xs sm:text-sm text-status-green font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{actionSuccess}</span>
        </div>
      )}

      {/* Modal for creating a new project */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-2xl flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
              <h2 className="font-serif font-bold text-xl text-primary-900">
                Create Humanitarian Project
              </h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-zinc-400 hover:text-zinc-600 font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreate} className="flex flex-col gap-4 text-xs sm:text-sm">
              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-charcoal">Project Title (English)</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Free Eye Surgical Camp 2026"
                  value={titleEn}
                  onChange={(e) => setTitleEn(e.target.value)}
                  className="p-3 rounded-xl border border-zinc-300 focus:outline-none focus:border-accent-gold bg-surface-cream"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-charcoal">Summary (English)</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Brief description of the initiative and target beneficiaries..."
                  value={summaryEn}
                  onChange={(e) => setSummaryEn(e.target.value)}
                  className="p-3 rounded-xl border border-zinc-300 focus:outline-none focus:border-accent-gold bg-surface-cream"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-semibold text-charcoal">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="p-3 rounded-xl border border-zinc-300 bg-surface-cream"
                  >
                    <option value="HEALTHCARE_ASSISTANCE">Healthcare Assistance</option>
                    <option value="HOSPITAL_CONSTRUCTION">Hospital Construction</option>
                    <option value="FOOD_AND_RATION">Food & Ration Relief</option>
                    <option value="ENVIRONMENT_AND_WATER">Environment & Water</option>
                    <option value="ANIMAL_WELFARE">Animal Welfare</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-semibold text-charcoal">Status</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as Project["status"])}
                    className="p-3 rounded-xl border border-zinc-300 bg-surface-cream"
                  >
                    <option value="PLANNED">Planned</option>
                    <option value="ONGOING">Ongoing</option>
                    <option value="COMPLETED">Completed</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-semibold text-charcoal">Target Budget (PKR)</label>
                  <input
                    type="number"
                    value={targetBudget}
                    onChange={(e) => setTargetBudget(Number(e.target.value))}
                    className="p-3 rounded-xl border border-zinc-300 bg-surface-cream"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-semibold text-charcoal">Location</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="p-3 rounded-xl border border-zinc-300 bg-surface-cream"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-primary-900 hover:bg-primary-800 text-surface-cream font-bold py-3 px-6 rounded-xl shadow mt-2"
              >
                Save & Publish Project
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="bg-surface-card rounded-2xl border border-zinc-200 p-6 flex flex-col justify-between shadow-sm"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-accent-gold-dark bg-amber-50 px-2.5 py-0.5 rounded uppercase">
                  {proj.category.replace(/_/g, " ")}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-green-100 text-status-green">
                  {proj.status}
                </span>
              </div>

              <h3 className="font-serif font-bold text-xl text-primary-900">
                {proj.titleEn}
              </h3>

              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                {proj.summaryEn}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-100 mt-4 flex items-center justify-between text-xs text-charcoal-muted">
              <span>Target: <strong>PKR {proj.targetBudget.toLocaleString()}</strong></span>
              <span className="inline-flex items-center gap-1 text-status-green font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Milestone</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
