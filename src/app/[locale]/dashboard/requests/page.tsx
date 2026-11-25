"use client";

import { useState } from "react";
import { 
  Stethoscope, 
  Search, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  AlertCircle,
  Building2
} from "lucide-react";

export default function HealthcareTrackingPage() {
  const [trackingCode, setTrackingCode] = useState("ZCF-MED-2026-0028");
  const [searched, setSearched] = useState(true);

  const sampleResult = {
    code: "ZCF-MED-2026-0028",
    patientInitials: "M. A.",
    city: "Shorkot",
    category: "Pediatric Cardiac Surgical Care",
    status: "APPROVED FOR SURGERY",
    submitted: "15 Nov 2026",
    reviewed: "19 Nov 2026",
    hospitalCoordination: "Partner Specialized Surgical Center",
    consentVerified: true,
    notes: "Clinical review completed by advisory medical team. Surgery scheduled under free clinical subsidy.",
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 self-start bg-primary-100 text-primary-900 px-3 py-1 rounded-full text-xs font-semibold">
          <Stethoscope className="w-3.5 h-3.5" />
          <span>Patient Support Portal</span>
        </div>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900">
          Healthcare & Surgical Assistance Tracking
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
          Verify the clinical review status and partner hospital coordination for charitable medical applications.
        </p>
      </div>

      {/* Tracking Code Input */}
      <div className="bg-surface-card rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="w-5 h-5 text-zinc-400 absolute start-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Enter tracking code (e.g. ZCF-MED-2026-0028)"
            value={trackingCode}
            onChange={(e) => setTrackingCode(e.target.value)}
            className="w-full p-3 ps-12 rounded-xl border border-zinc-300 focus:outline-none focus:border-accent-gold bg-surface-cream text-charcoal text-xs sm:text-sm font-mono"
          />
        </div>
        <button
          onClick={() => setSearched(true)}
          className="w-full sm:w-auto bg-primary-900 hover:bg-primary-800 text-surface-cream font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow transition-colors"
        >
          Track Dossier
        </button>
      </div>

      {searched && (
        <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-100">
            <div>
              <span className="text-xs text-charcoal-muted block">Medical File Reference</span>
              <span className="font-mono font-bold text-lg text-primary-900">{sampleResult.code}</span>
            </div>
            <span className="self-start sm:self-auto px-3.5 py-1 rounded-full text-xs font-bold bg-green-100 text-status-green flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>{sampleResult.status}</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div>
              <span className="text-charcoal-muted block text-xs">Patient Code</span>
              <span className="font-bold text-primary-900">{sampleResult.patientInitials} (Protected)</span>
            </div>

            <div>
              <span className="text-charcoal-muted block text-xs">Treatment Category</span>
              <span className="font-bold text-primary-900">{sampleResult.category}</span>
            </div>

            <div>
              <span className="text-charcoal-muted block text-xs">Coordinating Facility</span>
              <span className="font-bold text-primary-900">{sampleResult.hospitalCoordination}</span>
            </div>
          </div>

          {/* Stepper Status */}
          <div className="p-5 bg-surface-muted/50 rounded-2xl border border-zinc-200 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-primary-900 font-bold text-xs sm:text-sm">
              <ShieldCheck className="w-4 h-4 text-status-green" />
              <span>Informed Consent Verified & Archived</span>
            </div>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              {sampleResult.notes}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
