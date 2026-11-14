"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, ShieldAlert, CheckCircle2, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const tCommon = useTranslations("common");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [complaintSubmitted, setComplaintSubmitted] = useState(false);
  const [complaintRef, setComplaintRef] = useState("");

  const handleComplaintSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `ZCF-CMP-${Math.floor(100000 + Math.random() * 900000)}`;
    setComplaintRef(ref);
    setComplaintSubmitted(true);
  };

  return (
    <div className="w-full py-16 px-4 bg-surface-cream">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-900 border border-primary-600/20 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-900 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Contact Information & General Inquiries Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-primary-900 text-surface-cream rounded-3xl p-8 flex flex-col gap-8 shadow-lg">
            <div>
              <h2 className="font-serif font-bold text-2xl text-accent-gold mb-2">
                Official Foundation Desk
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Reach out to our administrative or community coordination team for general questions or volunteer inquiries.
              </p>
            </div>

            <div className="flex flex-col gap-6 text-xs sm:text-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-primary-800 text-accent-gold flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-zinc-400 block text-[11px] uppercase tracking-wider font-semibold">
                    Phone & WhatsApp
                  </span>
                  <span className="font-medium text-surface-cream">
                    +92 42 3XXXXXXX
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-primary-800 text-accent-gold flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-zinc-400 block text-[11px] uppercase tracking-wider font-semibold">
                    Email Inquiries
                  </span>
                  <span className="font-medium text-surface-cream">
                    info@zulaidchaudharyfoundation.com
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-primary-800 text-accent-gold flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-zinc-400 block text-[11px] uppercase tracking-wider font-semibold">
                    Location
                  </span>
                  <span className="font-medium text-surface-cream">
                    Lahore, Punjab, Pakistan
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* General Message Form */}
          <div className="lg:col-span-7 bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm">
            <h2 className="font-serif font-bold text-xl text-primary-900 mb-6 pb-3 border-b border-zinc-100">
              {t("formTitle")}
            </h2>

            {formSubmitted ? (
              <div className="p-8 bg-green-50 border border-status-green/30 rounded-2xl flex flex-col items-center text-center gap-3">
                <CheckCircle2 className="w-12 h-12 text-status-green" />
                <h3 className="font-serif font-bold text-lg text-primary-900">
                  Thank You for Reaching Out
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted">
                  Your message has been received. Our team will review your inquiry and respond shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
                className="flex flex-col gap-4 text-xs sm:text-sm"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-charcoal">{t("nameLabel")}</label>
                    <input
                      type="text"
                      required
                      className="p-3 rounded-xl border border-zinc-300 focus:outline-none focus:border-accent-gold bg-surface-cream"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-charcoal">{t("emailLabel")}</label>
                    <input
                      type="email"
                      required
                      className="p-3 rounded-xl border border-zinc-300 focus:outline-none focus:border-accent-gold bg-surface-cream"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-semibold text-charcoal">{t("subjectLabel")}</label>
                  <input
                    type="text"
                    required
                    className="p-3 rounded-xl border border-zinc-300 focus:outline-none focus:border-accent-gold bg-surface-cream"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-semibold text-charcoal">{t("messageLabel")}</label>
                  <textarea
                    rows={4}
                    required
                    className="p-3 rounded-xl border border-zinc-300 focus:outline-none focus:border-accent-gold bg-surface-cream"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-primary-900 hover:bg-primary-800 text-surface-cream font-bold py-3 px-6 rounded-xl shadow transition-colors text-sm self-start mt-2"
                >
                  {t("sendBtn")}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Confidential Whistleblower & Misconduct Channel */}
        <div className="bg-surface-card rounded-3xl border border-amber-200 p-8 sm:p-10 shadow-sm flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-accent-gold-dark flex items-center justify-center shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-primary-900">
                {t("complaintNoticeTitle")}
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed mt-1">
                {t("complaintNoticeDesc")}
              </p>
            </div>
          </div>

          {complaintSubmitted ? (
            <div className="p-6 bg-amber-50 border border-amber-300 rounded-2xl flex flex-col gap-2">
              <span className="text-sm font-bold text-primary-900">
                Confidential Report Filed Successfully
              </span>
              <p className="text-xs text-charcoal-muted">
                Your tracking reference number is: <strong className="font-mono text-accent-gold-dark text-sm">{complaintRef}</strong>. Please record this reference to track your inquiry status.
              </p>
            </div>
          ) : (
            <form onSubmit={handleComplaintSubmit} className="flex flex-col gap-4 text-xs sm:text-sm pt-2 border-t border-zinc-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-semibold text-charcoal">Report Category</label>
                  <select className="p-3 rounded-xl border border-zinc-300 bg-surface-cream focus:outline-none focus:border-accent-gold">
                    <option>Financial Transparency Concern</option>
                    <option>Volunteer or Staff Misconduct</option>
                    <option>Medical Assistance Disbursement Issue</option>
                    <option>Donor Privacy Violation</option>
                    <option>General Ethical Feedback</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-semibold text-charcoal">Complainant Contact (Optional)</label>
                  <input
                    type="text"
                    placeholder="Leave blank to remain completely anonymous"
                    className="p-3 rounded-xl border border-zinc-300 focus:outline-none focus:border-accent-gold bg-surface-cream"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-charcoal">Detailed Description of Incident / Concern</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Provide objective dates, locations, and factual descriptions of the concern..."
                  className="p-3 rounded-xl border border-zinc-300 focus:outline-none focus:border-accent-gold bg-surface-cream"
                />
              </div>

              <button
                type="submit"
                className="bg-accent-gold hover:bg-accent-gold-light text-primary-900 font-bold py-3 px-6 rounded-xl shadow transition-colors text-sm self-start"
              >
                {t("complaintBtn")}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

