"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { AlertCircle, Phone, FileCheck, CheckCircle2, ShieldAlert } from "lucide-react";

export default function EmergencyHelpPage() {
  const t = useTranslations("emergency");
  const tCommon = useTranslations("common");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="w-full py-16 px-4 bg-surface-cream">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {/* Critical Disclaimer Banner */}
        <div className="bg-red-50 border-2 border-alert-red rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-5 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-alert-red text-white flex items-center justify-center shrink-0">
            <ShieldAlert className="w-7 h-7" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-red-950">
              {t("disclaimerTitle")}
            </h2>
            <p className="text-xs sm:text-sm text-red-900 leading-relaxed font-sans">
              {t("disclaimerDesc")}
            </p>
            <div className="mt-2 p-3 bg-red-100/70 rounded-xl text-xs sm:text-sm font-bold text-red-950 flex items-center gap-2">
              <Phone className="w-4 h-4 text-alert-red shrink-0" />
              <span>{t("localEmergencyNumbers")}</span>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-col gap-3 text-center items-center">
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-primary-900 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-sm sm:text-base text-charcoal-muted max-w-xl">
            {t("subtitle")}
          </p>
        </div>

        {/* Assistance Intake Guidelines & Form */}
        <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 sm:p-10 shadow-sm flex flex-col gap-6">
          <div className="flex flex-col gap-2 border-b border-zinc-100 pb-4">
            <h3 className="font-serif font-bold text-xl text-primary-900">
              {t("intakeFormTitle")}
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-muted">
              {t("intakeDesc")}
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-green-50 border border-status-green/30 rounded-2xl flex flex-col items-center text-center gap-3">
              <CheckCircle2 className="w-12 h-12 text-status-green" />
              <h4 className="font-serif font-bold text-xl text-primary-900">
                Application Received for Clinical Vetting
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-muted max-w-md leading-relaxed">
                Our medical coordination team will review the submitted diagnostic documentation and contact the treating hospital.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm"
            >
              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-charcoal">Patient Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter patient name"
                  className="p-3 rounded-xl border border-zinc-300 focus:outline-none focus:border-accent-gold bg-surface-cream"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-charcoal">Contact Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+92 3XX XXXXXXX"
                  className="p-3 rounded-xl border border-zinc-300 focus:outline-none focus:border-accent-gold bg-surface-cream"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-charcoal">City / District</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Shorkot, Jhang, Athara Hazari, Ahmedpur Sial"
                  className="p-3 rounded-xl border border-zinc-300 focus:outline-none focus:border-accent-gold bg-surface-cream"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-charcoal">Treating Hospital / Clinic</label>
                <input
                  type="text"
                  placeholder="Current treating hospital name"
                  className="p-3 rounded-xl border border-zinc-300 focus:outline-none focus:border-accent-gold bg-surface-cream"
                />
              </div>

              <div className="sm:col-span-2 flex flex-col gap-1.5">
                <label className="font-semibold text-charcoal">Clinical Diagnosis & Urgency Summary</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe the medical condition, recommended surgical procedure, and estimated hospital cost..."
                  className="p-3 rounded-xl border border-zinc-300 focus:outline-none focus:border-accent-gold bg-surface-cream"
                />
              </div>

              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full bg-primary-900 hover:bg-primary-800 text-surface-cream font-bold py-3 px-6 rounded-xl shadow-md transition-colors text-sm"
                >
                  Submit for Medical Review
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

