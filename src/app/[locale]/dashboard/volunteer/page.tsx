"use client";

import { useState } from "react";
import { 
  Users, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  MapPin, 
  Briefcase,
  AlertCircle
} from "lucide-react";

export default function VolunteerDashboardPage() {
  const [hasApplied, setHasApplied] = useState(true);
  const [status, setStatus] = useState<"PENDING" | "UNDER_REVIEW" | "INTERVIEW_SCHEDULED" | "APPROVED">("APPROVED");
  const [skills, setSkills] = useState(["Medical Care", "Patient Rehabilitation"]);
  const [hours, setHours] = useState(8);
  const [profession, setProfession] = useState("Physiotherapist");
  const [city, setCity] = useState("Shorkot");
  const [notes, setNotes] = useState("Credentials verified with medical council. Assigned to local hospital follow-up team.");
  const [appNumber, setAppNumber] = useState("ZCF-VOL-2026-001");

  const steps = [
    { title: "Application Submitted", done: true, date: "10 Nov 2026" },
    { title: "Under Compliance Review", done: true, date: "11 Nov 2026" },
    { title: "Interview / Skills Check", done: true, date: "12 Nov 2026" },
    { title: "Approved & Assigned", done: status === "APPROVED", current: status === "APPROVED", date: "12 Nov 2026" },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 self-start bg-primary-100 text-primary-900 px-3 py-1 rounded-full text-xs font-semibold">
          <Users className="w-3.5 h-3.5" />
          <span>Volunteer Corps</span>
        </div>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900">
          Volunteer Application & Deployment Status
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
          Track the formal administrative review of your volunteer application and chapter assignments.
        </p>
      </div>

      {hasApplied ? (
        <div className="flex flex-col gap-6">
          {/* Status Stepper Card */}
          <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-100">
              <div>
                <span className="text-xs text-charcoal-muted block">Application Tracking Number</span>
                <span className="font-mono font-bold text-lg text-primary-900">{appNumber}</span>
              </div>
              <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-status-green flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Status: {status}</span>
              </span>
            </div>

            {/* Stepper Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-2">
              {steps.map((st, idx) => (
                <div key={idx} className="flex flex-col gap-2 p-4 rounded-2xl bg-surface-muted/40 border border-zinc-200">
                  <div className="flex items-center gap-2">
                    {st.done ? (
                      <CheckCircle2 className="w-5 h-5 text-status-green" />
                    ) : (
                      <Clock className="w-5 h-5 text-zinc-400" />
                    )}
                    <span className="text-xs font-bold text-primary-900">{st.title}</span>
                  </div>
                  <span className="text-[11px] text-charcoal-muted">{st.date}</span>
                </div>
              ))}
            </div>

            {notes && (
              <div className="p-4 bg-primary-100/50 border border-primary-600/20 rounded-2xl text-xs sm:text-sm text-primary-900 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-accent-gold-dark shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-0.5">Coordinator Review Remarks:</span>
                  <p className="leading-relaxed">{notes}</p>
                </div>
              </div>
            )}
          </div>

          {/* Application Details Summary */}
          <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col gap-6">
            <h2 className="font-serif font-bold text-xl text-primary-900">
              Verified Volunteer Dossier
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-accent-gold-dark shrink-0" />
                <div>
                  <span className="text-charcoal-muted block text-xs">Profession</span>
                  <span className="font-bold text-primary-900">{profession}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-gold-dark shrink-0" />
                <div>
                  <span className="text-charcoal-muted block text-xs">Assigned Chapter / City</span>
                  <span className="font-bold text-primary-900">{city}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent-gold-dark shrink-0" />
                <div>
                  <span className="text-charcoal-muted block text-xs">Weekly Availability</span>
                  <span className="font-bold text-primary-900">{hours} Hours / Week</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-100 flex flex-col gap-2">
              <span className="text-xs text-charcoal-muted font-semibold">Registered Skills & Tags:</span>
              <div className="flex flex-wrap gap-2">
                {skills.map((sk, idx) => (
                  <span key={idx} className="bg-primary-900 text-surface-cream text-xs px-3 py-1 rounded-full font-medium">
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm">
          {/* New Application Form */}
          <h2 className="font-serif font-bold text-xl text-primary-900 mb-4">
            Submit Volunteer Registration
          </h2>
          <p className="text-xs text-charcoal-muted mb-6">
            Join our on-ground medical and welfare initiatives. Every application is reviewed by our Volunteer Coordinator.
          </p>
        </div>
      )}
    </div>
  );
}
