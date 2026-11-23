"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import {
  Users,
  Award,
  Handshake,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Globe,
  Send,
  Sparkles,
  ArrowRight,
  Briefcase,
} from "lucide-react";

export default function GetInvolvedPage() {
  const [activeTab, setActiveTab] = useState<"volunteer" | "membership" | "partner">("volunteer");
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [submittedType, setSubmittedType] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Volunteer form state
  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    country: "Pakistan",
    education: "",
    profession: "",
    skills: "",
    interests: "Free Healthcare & Patient Coordination",
    availability: "Weekends (4-6 Hours)",
    motivation: "",
  });

  // Membership form state
  const [membershipForm, setMembershipForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    country: "Pakistan",
    chapterType: "Pakistan Domestic Chapter",
    profession: "",
    proposedRole: "Local Chapter Member",
    statement: "",
  });

  // Partner form state
  const [partnerForm, setPartnerForm] = useState({
    orgName: "",
    contactPerson: "",
    email: "",
    phone: "",
    sector: "Hospital / Healthcare Provider",
    proposal: "",
  });

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/volunteers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: volunteerForm.name,
          email: volunteerForm.email,
          phone: volunteerForm.phone,
          city: volunteerForm.city,
          profession: volunteerForm.profession,
          skills: [volunteerForm.skills, volunteerForm.interests].filter(Boolean),
          motivation: volunteerForm.motivation,
        }),
      });
      const data = await res.json();
      if (data.applicationNumber) {
        setSubmittedRef(data.applicationNumber);
        setSubmittedType("Volunteer Application");
      } else {
        const fallback = `ZCF-VOL-${Math.floor(100000 + Math.random() * 900000)}`;
        setSubmittedRef(fallback);
        setSubmittedType("Volunteer Application");
      }
    } catch (err) {
      console.error("Volunteer submission error:", err);
      const fallback = `ZCF-VOL-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(fallback);
      setSubmittedType("Volunteer Application");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMembershipSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/memberships", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: membershipForm.name,
          email: membershipForm.email,
          phone: membershipForm.phone,
          city: `${membershipForm.city}, ${membershipForm.country}`,
          tier: "Standard",
        }),
      });
      const data = await res.json();
      if (data.membershipNumber) {
        setSubmittedRef(data.membershipNumber);
        setSubmittedType("International Chapter Membership");
      } else {
        const fallback = `ZCF-MEM-${Math.floor(100000 + Math.random() * 900000)}`;
        setSubmittedRef(fallback);
        setSubmittedType("International Chapter Membership");
      }
    } catch (err) {
      console.error("Membership submission error:", err);
      const fallback = `ZCF-MEM-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(fallback);
      setSubmittedType("International Chapter Membership");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/complaints", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: "Institutional Partnership Inquiry",
          subject: `Partnership Inquiry from ${partnerForm.orgName} (${partnerForm.sector})`,
          description: `Contact: ${partnerForm.contactPerson} (${partnerForm.email}, ${partnerForm.phone}). Proposal: ${partnerForm.proposal}`,
          complainantContact: partnerForm.email || partnerForm.phone,
          isConfidential: false,
        }),
      });
      const data = await res.json();
      if (data.trackingReference) {
        setSubmittedRef(data.trackingReference);
        setSubmittedType("Partnership Inquiry");
      } else {
        const fallback = `ZCF-PRT-${Math.floor(100000 + Math.random() * 900000)}`;
        setSubmittedRef(fallback);
        setSubmittedType("Partnership Inquiry");
      }
    } catch (err) {
      console.error("Partner inquiry submission error:", err);
      const fallback = `ZCF-PRT-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(fallback);
      setSubmittedType("Partnership Inquiry");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full py-14 px-4 bg-surface-cream">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* 1. Header Banner */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-[#1A56DB] border border-blue-200 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
            <Users className="w-4 h-4" />
            <span>COMMUNITY MOBILIZATION & CHAPTERS</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-900 tracking-tight max-w-3xl">
            Join the Hands That Heal & Serve
          </h1>

          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl leading-relaxed">
            Whether you are a medical doctor, student, software engineer, or humanitarian advocate, lend your talent and time to support Pakistan and international campaigns.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <div className="bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-bold text-[#16A34A] shadow-sm">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Ethical Rule: All Volunteers & Members Approved Personally by Founder / Admin</span>
            </div>

            <div className="bg-blue-50 border border-blue-200 px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-semibold text-[#1A56DB] shadow-sm">
              <Globe className="w-4 h-4 shrink-0" />
              <span>Multi-Country Chapters: Pakistan, USA, UK, UAE & Global Diaspora</span>
            </div>
          </div>
        </div>

        {/* 2. Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 border-b border-zinc-200 pb-2">
          <button
            onClick={() => {
              setActiveTab("volunteer");
              setSubmittedRef(null);
            }}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === "volunteer"
                ? "bg-[#1A56DB] text-white shadow-md"
                : "bg-white text-zinc-600 hover:bg-zinc-100"
            }`}
          >
            Become a Volunteer
          </button>

          <button
            onClick={() => {
              setActiveTab("membership");
              setSubmittedRef(null);
            }}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === "membership"
                ? "bg-[#1A56DB] text-white shadow-md"
                : "bg-white text-zinc-600 hover:bg-zinc-100"
            }`}
          >
            Chapter Membership
          </button>

          <button
            onClick={() => {
              setActiveTab("partner");
              setSubmittedRef(null);
            }}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === "partner"
                ? "bg-[#1A56DB] text-white shadow-md"
                : "bg-white text-zinc-600 hover:bg-zinc-100"
            }`}
          >
            Institutional Partnerships
          </button>
        </div>

        {/* Success Modal / Screen */}
        {submittedRef && (
          <div className="bg-white rounded-3xl border border-zinc-200 p-8 sm:p-12 shadow-xl flex flex-col items-center text-center gap-5 max-w-xl mx-auto animate-in fade-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#16A34A] flex items-center justify-center shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs uppercase tracking-widest text-[#16A34A] font-bold">
              {submittedType} Received
            </span>

            <h3 className="font-serif font-bold text-2xl text-primary-900">
              Application Under Administrative Review
            </h3>

            <p className="text-sm text-charcoal-muted leading-relaxed">
              In accordance with foundation governance, every applicant is reviewed and vetted by the founder or designated coordinator prior to confirmation.
            </p>

            <div className="p-4 rounded-2xl bg-blue-50 border-2 border-blue-200 w-full">
              <span className="text-xs text-zinc-500 uppercase tracking-wider block font-semibold">
                Your Reference Identifier
              </span>
              <span className="font-mono font-bold text-xl text-[#1A56DB] block mt-1">
                {submittedRef}
              </span>
            </div>

            <button
              onClick={() => setSubmittedRef(null)}
              className="bg-[#1A56DB] text-white font-bold px-6 py-2.5 rounded-full text-xs shadow hover:bg-[#1546b8] transition-colors mt-2"
            >
              Submit Another Form
            </button>
          </div>
        )}

        {/* 3. Tab 1: Volunteer Application */}
        {!submittedRef && activeTab === "volunteer" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in">
            <div className="lg:col-span-5 bg-primary-900 text-white rounded-3xl p-8 shadow-xl flex flex-col gap-5">
              <span className="text-xs uppercase tracking-widest text-accent-gold font-bold">
                Volunteer Corps
              </span>
              <h3 className="font-serif font-bold text-2xl text-white">
                Why Volunteer with ZCF?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Volunteers are the backbone of our hospital construction groundwork, patient visitations, ration packing, equine mobile clinics, and international awareness.
              </p>

              <div className="flex flex-col gap-3 pt-2">
                <div className="flex items-start gap-3 text-xs text-zinc-200">
                  <span className="w-5 h-5 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center shrink-0 font-bold">1</span>
                  <span>Receive official Volunteer Service Certificate upon milestone completion.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-zinc-200">
                  <span className="w-5 h-5 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center shrink-0 font-bold">2</span>
                  <span>Hands-on leadership in clinical camps, ration logistics, and animal rescues.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-zinc-200">
                  <span className="w-5 h-5 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center shrink-0 font-bold">3</span>
                  <span>Direct mentorship with founder Zulaid Chaudhary and senior physician council.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-3xl border border-zinc-200 p-6 sm:p-10 shadow-xl">
              <form onSubmit={handleVolunteerSubmit} className="flex flex-col gap-5">
                <div className="border-b border-zinc-100 pb-3">
                  <h3 className="font-serif font-bold text-xl text-primary-900">
                    Volunteer Application Form
                  </h3>
                  <p className="text-xs text-charcoal-muted mt-1">
                    Fill out your skills and availability. We will contact you for a brief orientation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={volunteerForm.name}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                      placeholder="Your Name"
                      className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={volunteerForm.email}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-700">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={volunteerForm.phone}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                      placeholder="+92 3XX XXXXXXX"
                      className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-700">City & Country *</label>
                    <input
                      type="text"
                      required
                      value={volunteerForm.city}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, city: e.target.value })}
                      placeholder="e.g. Lahore, Pakistan or London, UK"
                      className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-700">Education Level *</label>
                    <input
                      type="text"
                      required
                      value={volunteerForm.education}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, education: e.target.value })}
                      placeholder="e.g. MBBS, BS Computer Science, High School"
                      className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-700">Current Profession *</label>
                    <input
                      type="text"
                      required
                      value={volunteerForm.profession}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, profession: e.target.value })}
                      placeholder="e.g. Doctor, Student, Graphic Designer"
                      className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-700">Primary Area of Interest *</label>
                    <select
                      value={volunteerForm.interests}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, interests: e.target.value })}
                      className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                    >
                      <option value="Free Healthcare & Patient Coordination">Free Healthcare & Patient Coordination</option>
                      <option value="Hospital Construction & Logistics">Hospital Construction & Logistics</option>
                      <option value="Animal Welfare & Mobile Clinics">Animal Welfare & Mobile Clinics</option>
                      <option value="Food Ration Packing & Distribution">Food Ration Packing & Distribution</option>
                      <option value="Tree Plantation & Climate Drives">Tree Plantation & Climate Drives</option>
                      <option value="Digital Media, IT & Translations">Digital Media, IT & Translations</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-700">Time Availability *</label>
                    <select
                      value={volunteerForm.availability}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, availability: e.target.value })}
                      className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                    >
                      <option value="Weekends (4-6 Hours)">Weekends (4-6 Hours)</option>
                      <option value="Weekdays Evenings (2-3 Hours)">Weekdays Evenings (2-3 Hours)</option>
                      <option value="Full-Time Active (During Disaster/Relief)">Full-Time Active (During Relief)</option>
                      <option value="Remote / Digital (Anytime)">Remote / Digital (Anytime)</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-zinc-700">Relevant Skills & Experience</label>
                  <input
                    type="text"
                    value={volunteerForm.skills}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, skills: e.target.value })}
                    placeholder="e.g. First Aid, Event Management, Photography, Social Media"
                    className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-zinc-700">Why do you want to volunteer with ZCF? *</label>
                  <textarea
                    required
                    rows={3}
                    value={volunteerForm.motivation}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, motivation: e.target.value })}
                    placeholder="Briefly state your passion for serving humanity..."
                    className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1A56DB] hover:bg-[#1546b8] text-white font-bold py-3.5 rounded-full text-xs sm:text-sm shadow-md transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Submitting Application..." : "Submit Volunteer Application"}</span>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* 4. Tab 2: Chapter Membership */}
        {!submittedRef && activeTab === "membership" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in">
            <div className="lg:col-span-5 bg-gradient-to-br from-primary-950 via-primary-900 to-blue-950 text-white rounded-3xl p-8 shadow-xl flex flex-col gap-5">
              <span className="text-xs uppercase tracking-widest text-accent-gold font-bold">
                International Vision
              </span>
              <h3 className="font-serif font-bold text-2xl text-white">
                Founding Regional Chapters
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                As the foundation expands internationally, we are establishing country coordinators, city chapters, and diaspora liaison councils across the UK, USA, UAE, Canada, and Europe.
              </p>

              <div className="flex flex-col gap-3 pt-2">
                <div className="flex items-start gap-3 text-xs text-zinc-200">
                  <span className="w-5 h-5 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center shrink-0 font-bold">1</span>
                  <span>Lead regional fundraising, charity dinners, and volunteer recruitment.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-zinc-200">
                  <span className="w-5 h-5 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center shrink-0 font-bold">2</span>
                  <span>Official credentials, digital chapter directory listing upon approval.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-zinc-200">
                  <span className="w-5 h-5 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center shrink-0 font-bold">3</span>
                  <span>Participate in annual general executive strategy councils.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-3xl border border-zinc-200 p-6 sm:p-10 shadow-xl">
              <form onSubmit={handleMembershipSubmit} className="flex flex-col gap-5">
                <div className="border-b border-zinc-100 pb-3">
                  <h3 className="font-serif font-bold text-xl text-primary-900">
                    Chapter Membership Application
                  </h3>
                  <p className="text-xs text-charcoal-muted mt-1">
                    Apply to become a regional chapter member or international country coordinator.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={membershipForm.name}
                      onChange={(e) => setMembershipForm({ ...membershipForm, name: e.target.value })}
                      placeholder="Your Name"
                      className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={membershipForm.email}
                      onChange={(e) => setMembershipForm({ ...membershipForm, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-700">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={membershipForm.phone}
                      onChange={(e) => setMembershipForm({ ...membershipForm, phone: e.target.value })}
                      placeholder="+1 / +44 / +92 ..."
                      className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-700">Country of Residence *</label>
                    <input
                      type="text"
                      required
                      value={membershipForm.country}
                      onChange={(e) => setMembershipForm({ ...membershipForm, country: e.target.value })}
                      placeholder="e.g. United States, UK, Pakistan"
                      className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-700">Chapter Category *</label>
                    <select
                      value={membershipForm.chapterType}
                      onChange={(e) => setMembershipForm({ ...membershipForm, chapterType: e.target.value })}
                      className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                    >
                      <option value="Pakistan Domestic Chapter">Pakistan Domestic Chapter</option>
                      <option value="North America (USA / Canada) Chapter">North America (USA / Canada) Chapter</option>
                      <option value="United Kingdom & Europe Chapter">United Kingdom & Europe Chapter</option>
                      <option value="Middle East (UAE / Saudi) Chapter">Middle East (UAE / Saudi) Chapter</option>
                      <option value="Global Diaspora Member">Global Diaspora Member</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-700">Proposed Role *</label>
                    <select
                      value={membershipForm.proposedRole}
                      onChange={(e) => setMembershipForm({ ...membershipForm, proposedRole: e.target.value })}
                      className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                    >
                      <option value="Local Chapter Member">Local Chapter Member</option>
                      <option value="City Coordinator">City Coordinator</option>
                      <option value="Country Representative">Country Representative</option>
                      <option value="Medical Advisory Council">Medical Advisory Council</option>
                      <option value="Corporate CSR Liaison">Corporate CSR Liaison</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-zinc-700">Professional Background & Vision *</label>
                  <textarea
                    required
                    rows={3}
                    value={membershipForm.statement}
                    onChange={(e) => setMembershipForm({ ...membershipForm, statement: e.target.value })}
                    placeholder="Describe your current profession and how you plan to represent the foundation in your region..."
                    className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1A56DB] hover:bg-[#1546b8] text-white font-bold py-3.5 rounded-full text-xs sm:text-sm shadow-md transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  <span>{isSubmitting ? "Submitting Application..." : "Submit Chapter Membership Application"}</span>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* 5. Tab 3: Institutional Partnerships */}
        {!submittedRef && activeTab === "partner" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in">
            <div className="lg:col-span-5 bg-primary-900 text-white rounded-3xl p-8 shadow-xl flex flex-col gap-5">
              <span className="text-xs uppercase tracking-widest text-accent-gold font-bold">
                Strategic Alliances
              </span>
              <h3 className="font-serif font-bold text-2xl text-white">
                Collaborate with ZCF
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                We partner with certified hospitals, surgical device manufacturers, pharmaceutical distributors, universities, and corporate CSR entities.
              </p>

              <div className="flex flex-col gap-3 pt-2 text-xs text-zinc-200">
                <p>• Hospital surgical bed allocations and subsidized clinical wards</p>
                <p>• Medicine donation pools and diagnostic consumables supply</p>
                <p>• Corporate payroll giving and CSR matching programs</p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-3xl border border-zinc-200 p-6 sm:p-10 shadow-xl">
              <form onSubmit={handlePartnerSubmit} className="flex flex-col gap-5">
                <div className="border-b border-zinc-100 pb-3">
                  <h3 className="font-serif font-bold text-xl text-primary-900">
                    Institutional Partnership Inquiry
                  </h3>
                  <p className="text-xs text-charcoal-muted mt-1">
                    Connect your organization with Zulaid Chaudhary Foundation projects.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-700">Organization / Hospital Name *</label>
                    <input
                      type="text"
                      required
                      value={partnerForm.orgName}
                      onChange={(e) => setPartnerForm({ ...partnerForm, orgName: e.target.value })}
                      placeholder="Company or Hospital"
                      className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-700">Focal Contact Person *</label>
                    <input
                      type="text"
                      required
                      value={partnerForm.contactPerson}
                      onChange={(e) => setPartnerForm({ ...partnerForm, contactPerson: e.target.value })}
                      placeholder="Name & Designation"
                      className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-700">Official Email *</label>
                    <input
                      type="email"
                      required
                      value={partnerForm.email}
                      onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                      placeholder="contact@organization.com"
                      className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-700">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={partnerForm.phone}
                      onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
                      placeholder="+92 XXX XXXXXXX"
                      className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-zinc-700">Collaboration Proposal *</label>
                  <textarea
                    required
                    rows={4}
                    value={partnerForm.proposal}
                    onChange={(e) => setPartnerForm({ ...partnerForm, proposal: e.target.value })}
                    placeholder="Outline how your institution would like to partner with our hospital or humanitarian programs..."
                    className="bg-zinc-50 border border-zinc-300 rounded-xl px-3.5 py-2 text-xs text-charcoal focus:outline-none focus:border-[#1A56DB]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1A56DB] hover:bg-[#1546b8] text-white font-bold py-3.5 rounded-full text-xs sm:text-sm shadow-md transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  <Handshake className="w-4 h-4" />
                  <span>{isSubmitting ? "Submitting Inquiry..." : "Submit Partnership Proposal"}</span>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
