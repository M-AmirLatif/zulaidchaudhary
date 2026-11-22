"use client";

import { useState, useEffect } from "react";
import { 
  Stethoscope, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Lock, 
  AlertTriangle,
  FileText
} from "lucide-react";

interface MedicalCase {
  id: string;
  caseReferenceNumber: string;
  patientInitials: string;
  city: string;
  age: number;
  gender: string;
  diagnosisSummary: string;
  treatingPhysician: string;
  estimatedCostPKR: number;
  status: "INQUIRY" | "PENDING_VETTING" | "APPROVED" | "IN_TREATMENT" | "COMPLETED" | "DECLINED";
  priority: "ROUTINE" | "URGENT" | "EMERGENCY_CRITICAL";
  hasInformedConsent: boolean;
  internalNotes?: string;
}

export default function AdminMedicalCasesPage() {
  const [cases, setCases] = useState<MedicalCase[]>([]);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  const fetchCases = async () => {
    try {
      const res = await fetch("/api/admin/medical-cases");
      const data = await res.json();
      if (data.cases) setCases(data.cases);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchCases();
  }, []);

  const handleUpdate = async (id: string, status: MedicalCase["status"], hasConsent: boolean) => {
    try {
      const res = await fetch("/api/admin/medical-cases", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status, hasConsent }),
      });
      if (res.ok) {
        setActionSuccess(`Medical case updated to ${status}. Informed consent verified.`);
        fetchCases();
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
        <div className="inline-flex items-center gap-2 self-start bg-red-100 text-alert-red px-3 py-1 rounded-full text-xs font-semibold">
          <Lock className="w-3.5 h-3.5" />
          <span>Confidential Clinical Vault</span>
        </div>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900">
          Medical Assistance Intake & Patient Vetting
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
          Rule 4: Clinical records are strictly confidential. No patient story or public assistance is published without verified signed informed consent.
        </p>
      </div>

      {actionSuccess && (
        <div className="p-3 bg-green-50 border border-status-green/30 rounded-xl text-xs sm:text-sm text-status-green font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{actionSuccess}</span>
        </div>
      )}

      {/* Cases List */}
      <div className="flex flex-col gap-4">
        {cases.map((cs) => (
          <div
            key={cs.id}
            className="bg-surface-card rounded-2xl border border-zinc-200 p-6 flex flex-col gap-4 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-alert-red flex items-center justify-center font-bold text-sm">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-primary-900">
                    Patient {cs.patientInitials} ({cs.age}y, {cs.gender}) • {cs.city}
                  </h3>
                  <span className="font-mono text-xs text-charcoal-muted">
                    {cs.caseReferenceNumber} • Treating Physician: {cs.treatingPhysician}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                  cs.priority === "URGENT" || cs.priority === "EMERGENCY_CRITICAL"
                    ? "bg-red-100 text-alert-red"
                    : "bg-zinc-100 text-zinc-600"
                }`}>
                  {cs.priority}
                </span>

                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                  cs.status === "APPROVED" || cs.status === "IN_TREATMENT"
                    ? "bg-green-100 text-status-green"
                    : "bg-amber-100 text-amber-800"
                }`}>
                  {cs.status}
                </span>
              </div>
            </div>

            {/* Diagnosis Summary */}
            <div className="p-4 bg-surface-muted/50 rounded-xl text-xs sm:text-sm text-charcoal flex flex-col gap-1.5">
              <span className="font-bold text-primary-900">Diagnosis & Clinical Recommendation:</span>
              <p className="leading-relaxed">{cs.diagnosisSummary}</p>
              <div className="text-xs text-charcoal-muted mt-1">
                Estimated Hospital & Surgical Cost: <strong>PKR {cs.estimatedCostPKR.toLocaleString()}</strong>
              </div>
            </div>

            {/* Informed Consent Status & Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold">
                {cs.hasInformedConsent ? (
                  <span className="text-status-green flex items-center gap-1.5 bg-green-50 px-2.5 py-1 rounded-lg border border-green-200">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Informed Consent Verified & Archived in Vault</span>
                  </span>
                ) : (
                  <span className="text-amber-700 flex items-center gap-1.5 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Awaiting Signed Consent Form</span>
                  </span>
                )}
              </div>

              {cs.status === "PENDING_VETTING" && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleUpdate(cs.id, "APPROVED", true)}
                    className="bg-status-green hover:bg-green-700 text-white font-bold text-xs px-4 py-2 rounded-xl shadow transition-colors flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Approve Surgery & Grant</span>
                  </button>
                  <button
                    onClick={() => handleUpdate(cs.id, "DECLINED", false)}
                    className="bg-red-50 hover:bg-red-100 text-alert-red font-bold text-xs px-3 py-2 rounded-xl transition-colors"
                  >
                    Decline
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
