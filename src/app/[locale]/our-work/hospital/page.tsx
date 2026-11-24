"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import {
  Building2,
  Clock,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Stethoscope,
  Activity,
  ArrowRight,
  Sparkles,
  Users,
  Compass,
} from "lucide-react";

const PLANNED_FACILITIES = [
  {
    icon: "🚨",
    title: "24/7 Emergency & Triage",
    desc: "Dedicated trauma response, rapid resuscitation beds, and emergency stabilization for critical patients regardless of ability to pay.",
  },
  {
    icon: "🔬",
    title: "Diagnostic Pathology & Radiology",
    desc: "State-of-the-art diagnostic imaging, ultrasound, X-ray, and clinical laboratory testing for accurate and prompt disease identification.",
  },
  {
    icon: "🩺",
    title: "Outpatient Clinics (OPD)",
    desc: "Specialist consultation clinics spanning internal medicine, general surgery, pediatrics, gynecology, and chronic disease management.",
  },
  {
    icon: "✂️",
    title: "Operation Theatres & Surgical Suites",
    desc: "Equipped surgical suites for general, orthopedic, and emergency procedures adhering to strict sterilization protocols.",
  },
  {
    icon: "🩸",
    title: "Charity Dialysis Unit",
    desc: "Dedicated hemodialysis stations providing subsidized and free sessions for underprivileged patients suffering from end-stage renal disease.",
  },
  {
    icon: "💊",
    title: "Free Pharmacy Dispensary",
    desc: "On-site pharmacy supplying genuine life-saving prescription medicines directly to registered destitute patients at zero cost.",
  },
];

const DEVELOPMENT_UPDATES = [
  {
    phase: "Milestone 01",
    title: "Vision & Architectural Planning",
    status: "COMPLETED",
    desc: "Conceptual blueprint finalized under guidance from physician family council members in Lahore and the United States.",
    date: "Groundwork Phase",
  },
  {
    phase: "Milestone 02",
    title: "Structural Civil Construction",
    status: "IN_PROGRESS",
    desc: "Foundations, civil concrete framework, and physical building construction actively underway.",
    date: "Current Active Stage",
  },
  {
    phase: "Milestone 03",
    title: "MEP & Clinical Infrastructure",
    status: "PLANNED",
    desc: "Installation of specialized medical gas pipelines, HVAC clean rooms, power backup, and surgical air filtration.",
    date: "Upcoming Phase",
  },
  {
    phase: "Milestone 04",
    title: "Equipment Procurement & Commissioning",
    status: "PLANNED",
    desc: "Acquisition of diagnostic imaging machines, surgical lights, patient monitors, and sterilization autoclaves.",
    date: "Upcoming Phase",
  },
  {
    phase: "Milestone 05",
    title: "Inauguration & Free Clinical Operations",
    status: "PLANNED",
    desc: "Official opening and rollout of free healthcare programs, patient welfare desk, and doctor staffing.",
    date: "Target Milestone",
  },
];

export default function HospitalPage() {
  const [activeTab, setActiveTab] = useState<"vision" | "facilities" | "updates">("vision");

  return (
    <div className="w-full py-14 px-4 bg-surface-cream">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* 1. Header Banner */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-[#166534] border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
            <Building2 className="w-4 h-4" />
            <span>OUR FUTURE HOSPITAL & HEALTHCARE NETWORK</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-900 tracking-tight max-w-3xl">
            A Permanent Sanctuary of Healing & Free Healthcare
          </h1>

          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl leading-relaxed">
            Transitioning from individual medical sponsorships to a permanent healthcare institution. The founder is actively constructing a dedicated charity hospital to provide comprehensive, dignified treatment to those in need.
          </p>

          {/* Status Badge */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <div className="bg-amber-50 border-2 border-amber-300 px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-bold text-amber-900 shadow-sm animate-pulse">
              <Clock className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Current Status: Hospital Actively Under Construction</span>
            </div>

            <div className="bg-blue-50 border border-blue-200 px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-semibold text-[#1A56DB] shadow-sm">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Ethical Governance: Separate Financial & Operational Ledgers</span>
            </div>
          </div>
        </div>

        {/* Visual Dual Photo Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-md border border-slate-200">
            <Image
              src="/images/programs/hospital_construction.jpg"
              alt="Charity Hospital Construction in Lahore"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[11px] uppercase font-bold tracking-wider bg-white/20 backdrop-blur px-2.5 py-1 rounded-full inline-block mb-1.5">
                Lahore Medical Facility
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-serif text-white">
                Modern Charitable Healthcare Infrastructure
              </h3>
            </div>
          </div>

          <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-md border border-slate-200">
            <Image
              src="/images/3rdimg.jpg"
              alt="Hospital Groundwork & Vision"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[11px] uppercase font-bold tracking-wider bg-white/20 backdrop-blur px-2.5 py-1 rounded-full inline-block mb-1.5">
                Active Groundwork
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-serif text-white">
                Under Active Construction in Lahore
              </h3>
            </div>
          </div>
        </div>

        {/* 2. Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 border-b border-zinc-200 pb-2">
          <button
            onClick={() => setActiveTab("vision")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === "vision"
                ? "bg-[#1A56DB] text-white shadow-md"
                : "bg-white text-zinc-600 hover:bg-zinc-100"
            }`}
          >
            Hospital Vision & Network
          </button>

          <button
            onClick={() => setActiveTab("facilities")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === "facilities"
                ? "bg-[#1A56DB] text-white shadow-md"
                : "bg-white text-zinc-600 hover:bg-zinc-100"
            }`}
          >
            Planned Facilities & Specialties
          </button>

          <button
            onClick={() => setActiveTab("updates")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === "updates"
                ? "bg-[#1A56DB] text-white shadow-md"
                : "bg-white text-zinc-600 hover:bg-zinc-100"
            }`}
          >
            Construction Milestones
          </button>
        </div>

        {/* 3. Tab 1: Hospital Vision & Network */}
        {activeTab === "vision" && (
          <div className="flex flex-col gap-10 animate-in fade-in">
            {/* Overview Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-zinc-200/80 p-8 sm:p-10 shadow-xl">
              <div className="lg:col-span-7 flex flex-col gap-5 text-charcoal-muted text-sm sm:text-base leading-relaxed">
                <span className="text-xs uppercase tracking-widest text-[#1A56DB] font-bold">
                  Founder-Led Healthcare Mission
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900 leading-snug">
                  From Temporary Aid to an Enduring Hospital Infrastructure
                </h3>
                <p>
                  Having already facilitated free surgical treatments for approximately 25–30 destitute patients, founder Zulaid Chaudhary identified the critical need for a permanent, self-sustaining clinical facility.
                </p>
                <p>
                  This hospital is envisioned as an anchor of humanitarian hope where no destitute human is turned away due to poverty. With brothers, sisters, and extended family serving as qualified medical doctors in both Lahore and the United States, the project blends grassroots compassion with international clinical expertise.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-zinc-700">
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span>Free treatment for deserving patients</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span>Subsidized care for low-income families</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span>Transparent clinical ledgers</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span>Independent audit & operational records</span>
                  </div>
                </div>
              </div>

              {/* Right: Hospital Project Card */}
              <div className="lg:col-span-5 bg-gradient-to-br from-primary-950 via-primary-900 to-blue-950 text-white rounded-3xl p-8 shadow-2xl flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-accent-gold" />
                    <span className="font-serif font-bold text-lg">Hospital Project</span>
                  </div>
                  <span className="bg-amber-400/20 text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-amber-400/30">
                    Under Construction
                  </span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  Construction updates, photographs, and verified milestones will be published directly through our admin portal as each phase reaches verified completion.
                </p>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-2">
                  <span className="text-[11px] uppercase tracking-wider text-accent-gold font-bold">
                    Future Digital Capabilities
                  </span>
                  <ul className="text-xs text-zinc-300 flex flex-col gap-1.5">
                    <li>• Online appointment booking with volunteer doctors</li>
                    <li>• Digital patient registration and electronic health record</li>
                    <li>• Appointment management & clinical scheduling system</li>
                  </ul>
                </div>

                <Link
                  href="/donate"
                  className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-3.5 rounded-full text-xs shadow-xl transition-all hover:scale-[1.02] text-center flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Support Hospital Construction Fund</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 4. Tab 2: Planned Facilities & Specialties */}
        {activeTab === "facilities" && (
          <div className="flex flex-col gap-8 animate-in fade-in">
            <div className="text-center max-w-xl mx-auto">
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900">
                Core Clinical Departments & Services
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted mt-2">
                Designed to deliver modern medical diagnostics and patient care with absolute dignity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PLANNED_FACILITIES.map((fac) => (
                <div
                  key={fac.title}
                  className="bg-white rounded-3xl border border-zinc-200/80 p-6 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {fac.icon}
                  </div>
                  <h4 className="font-serif font-bold text-lg text-primary-900">
                    {fac.title}
                  </h4>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {fac.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
              <div>
                <h4 className="font-serif font-bold text-lg text-primary-900">
                  Medical Professionals & Doctors
                </h4>
                <p className="text-xs text-charcoal-muted mt-1">
                  Are you a physician or surgeon interested in offering pro-bono consultation clinics or advisory support?
                </p>
              </div>

              <Link
                href="/get-involved"
                className="bg-[#1A56DB] hover:bg-[#1546b8] text-white font-bold px-6 py-2.5 rounded-full text-xs shadow whitespace-nowrap transition-colors"
              >
                Join Medical Advisory Circle
              </Link>
            </div>
          </div>
        )}

        {/* 5. Tab 3: Construction Milestones */}
        {activeTab === "updates" && (
          <div className="flex flex-col gap-8 animate-in fade-in">
            <div className="text-center max-w-xl mx-auto">
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900">
                Development Roadmap & Construction Stages
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted mt-2">
                Every phase is executed in accordance with engineering and medical zoning standards.
              </p>
            </div>

            <div className="relative border-s-2 border-blue-200 ms-4 sm:ms-8 flex flex-col gap-8 py-4">
              {DEVELOPMENT_UPDATES.map((item, idx) => (
                <div key={item.phase} className="relative ps-6 sm:ps-8">
                  {/* Dot */}
                  <div
                    className={`absolute -start-[11px] top-1.5 w-5 h-5 rounded-full border-4 border-white ${
                      item.status === "COMPLETED"
                        ? "bg-[#16A34A]"
                        : item.status === "IN_PROGRESS"
                        ? "bg-amber-500 animate-ping"
                        : "bg-zinc-300"
                    }`}
                  />
                  <div
                    className={`absolute -start-[11px] top-1.5 w-5 h-5 rounded-full border-4 border-white ${
                      item.status === "COMPLETED"
                        ? "bg-[#16A34A]"
                        : item.status === "IN_PROGRESS"
                        ? "bg-amber-500"
                        : "bg-zinc-300"
                    }`}
                  />

                  <div className="bg-white rounded-3xl border border-zinc-200 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] uppercase tracking-wider font-bold text-accent-gold">
                          {item.phase}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                            item.status === "COMPLETED"
                              ? "bg-emerald-100 text-[#16A34A]"
                              : item.status === "IN_PROGRESS"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-zinc-100 text-zinc-500"
                          }`}
                        >
                          {item.status === "COMPLETED"
                            ? "✓ Completed"
                            : item.status === "IN_PROGRESS"
                            ? "🔨 Actively Under Construction"
                            : "Upcoming Phase"}
                        </span>
                      </div>

                      <h4 className="font-serif font-bold text-lg text-primary-900">
                        {item.title}
                      </h4>

                      <p className="text-xs text-charcoal-muted leading-relaxed max-w-2xl">
                        {item.desc}
                      </p>
                    </div>

                    <div className="shrink-0 text-xs font-semibold text-zinc-400 bg-zinc-50 px-3 py-1.5 rounded-xl border border-zinc-200 self-start sm:self-center">
                      {item.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Donation Banner */}
            <div className="bg-gradient-to-r from-primary-900 to-blue-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-widest text-accent-gold font-bold">
                  Sadaqah Jariyah Opportunity
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl">
                  Dedicate a Hospital Brick or Medical Wing
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-lg leading-relaxed">
                  Every contribution towards the foundation hospital construction stands as an enduring perpetual charity (Sadaqah Jariyah) benefiting countless future generations.
                </p>
              </div>

              <Link
                href="/donate"
                className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold px-8 py-3.5 rounded-full text-xs sm:text-sm shadow-xl transition-all hover:scale-105 whitespace-nowrap flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Contribute to Hospital Fund</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
