"use client";

import { useState } from "react";
import Image from "next/image";
import {
  PawPrint,
  Heart,
  Shield,
  AlertTriangle,
  Send,
  CheckCircle2,
  PhoneCall,
  Search,
  Activity,
  ArrowRight,
  Eye,
} from "lucide-react";

const RESCUE_TYPES = [
  {
    id: "stray_animals",
    title: "Stray Dogs & Street Cats Care",
    badge: "Urban Companion Animals",
    desc: "Emergency trauma response for hit-and-run victims, mass street animal feeding, wound dressing, anti-rabies vaccination, and compassionate community shelter.",
    icon: "🐕",
  },
  {
    id: "equine_welfare",
    title: "Equine & Working Draught Animals",
    badge: "Donkeys & Cart Horses",
    desc: "Targeting the thousands of overburdened cart donkeys and working horses in wholesale markets with free veterinary inspection, hoof trimming, wound treatments, and harness welfare.",
    icon: "🐎",
  },
  {
    id: "wildlife_birds",
    title: "Wildlife & Avian Rescue",
    badge: "Birds & Native Fauna",
    desc: "Rescuing black kites, raptors, and migratory birds injured by chemical kite string or power line entanglements, rehabilitating and releasing them back into natural habitats.",
    icon: "🦅",
  },
  {
    id: "anti_cruelty",
    title: "Cruelty Reporting & Anti-Poaching",
    badge: "Advocacy & Lawful Protection",
    desc: "Investigating severe animal abuse cases, raising legal awareness against dog fighting and illegal hunting, and partnering with certified animal welfare authorities.",
    icon: "⚖️",
  },
];

export default function AnimalWelfarePage() {
  // Rescue form states
  const [animalType, setAnimalType] = useState<"DOG" | "CAT" | "DONKEY_HORSE" | "BIRD" | "WILDLIFE" | "OTHER">("DOG");
  const [condition, setCondition] = useState<"FRACTURE_TRAUMA" | "HIT_AND_RUN" | "POISONING_ILLNESS" | "CRUELTY_ABUSE" | "TRAPPED">("HIT_AND_RUN");
  const [urgency, setUrgency] = useState<"EMERGENCY_CRITICAL" | "HIGH" | "MEDIUM">("EMERGENCY_CRITICAL");
  const [locationCity, setLocationCity] = useState("Lahore");
  const [locationAddress, setLocationAddress] = useState("");
  const [reporterName, setReporterName] = useState("");
  const [reporterPhone, setReporterPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submittedRescue, setSubmittedRescue] = useState<{
    trackingNumber: string;
    animalType: string;
    condition: string;
  } | null>(null);

  // Tracking inquiry state
  const [searchTracking, setSearchTracking] = useState("");
  const [trackedStatus, setTrackedStatus] = useState<any | null>(null);
  const [trackingLoading, setTrackingLoading] = useState(false);

  const handleSubmitRescue = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!locationAddress || !reporterPhone) {
      alert("Please provide the exact location and a callback contact number.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/animal-rescues", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          animalType,
          condition,
          urgency,
          locationCity,
          locationAddress,
          reporterName: reporterName || "Concerned Citizen",
          reporterPhone,
        }),
      });

      const data = await res.json();
      if (data.success && data.rescue) {
        setSubmittedRescue({
          trackingNumber: data.rescue.trackingNumber,
          animalType: data.rescue.animalType,
          condition: data.rescue.condition,
        });
        setLocationAddress("");
      } else {
        alert(data.error || "Unable to file rescue report.");
      }
    } catch {
      alert("Network error reporting animal rescue.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleTrackRescue = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTracking.trim()) return;

    setTrackingLoading(true);
    try {
      const res = await fetch("/api/animal-rescues");
      const data = await res.json();
      if (data.success && data.rescues) {
        const match = data.rescues.find(
          (r: any) =>
            r.trackingNumber.toLowerCase() === searchTracking.trim().toLowerCase()
        );
        setTrackedStatus(match || "NOT_FOUND");
      }
    } catch {
      setTrackedStatus("ERROR");
    } finally {
      setTrackingLoading(false);
    }
  };

  return (
    <div className="w-full py-16 px-4 bg-surface-cream">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col gap-4 text-center items-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-status-green border border-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <PawPrint className="w-3.5 h-3.5" />
            <span>Voice for the Voiceless</span>
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-900 tracking-tight">
            Animal Welfare & Emergency Rescue
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            From overburdened cart equines and injured street strays to trapped urban wildlife, our humanitarian commitment extends to all living creatures that share our cities and soil.
          </p>
        </div>

        {/* Visual Dual Photo Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-md border border-slate-200">
            <Image
              src="/images/programs/animal_welfare.jpg"
              alt="Veterinary Treatment & Emergency Animal Care"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[11px] uppercase font-bold tracking-wider bg-white/20 backdrop-blur px-2.5 py-1 rounded-full inline-block mb-1.5">
                Compassionate Aid
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-serif text-white">
                Veterinary Treatment & Rehabilitation
              </h3>
            </div>
          </div>

          <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-md border border-slate-200">
            <Image
              src="/images/4th.jpg"
              alt="Active Field Animal Rescue & Care"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[11px] uppercase font-bold tracking-wider bg-white/20 backdrop-blur px-2.5 py-1 rounded-full inline-block mb-1.5">
                Ground Care
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-serif text-white">
                Equine & Street Stray Rescue Services
              </h3>
            </div>
          </div>
        </div>

        {/* 4 Dedicated Rescue Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESCUE_TYPES.map((type) => (
            <div
              key={type.id}
              className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl p-2.5 rounded-2xl bg-amber-50 group-hover:scale-110 transition-transform">
                  {type.icon}
                </span>
                <span className="text-[11px] font-bold text-accent-gold-dark bg-amber-50/80 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {type.badge}
                </span>
              </div>

              <h2 className="font-serif font-bold text-xl text-primary-900 group-hover:text-accent-gold-dark transition-colors">
                {type.title}
              </h2>

              <p className="text-sm text-charcoal-muted leading-relaxed">
                {type.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Rescue Action: Report an Injured Animal & Track Rescue */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 7 Cols: Emergency Animal Rescue Form */}
          <div className="lg:col-span-7 bg-surface-card rounded-3xl border-2 border-primary-900/10 p-6 sm:p-10 shadow-lg flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
              <div className="flex items-center gap-2 text-primary-900">
                <AlertTriangle className="w-5 h-5 text-alert-red" />
                <h3 className="font-serif font-bold text-xl sm:text-2xl">
                  Report an Injured Animal in Distress
                </h3>
              </div>
              <span className="text-[11px] font-bold text-status-green bg-emerald-50 px-2.5 py-1 rounded-full">
                Active Volunteer Dispatch
              </span>
            </div>

            <p className="text-xs text-charcoal-muted leading-relaxed">
              If you spot a hit-and-run animal, an overburdened injured donkey/horse, or trapped wildlife in Lahore or surrounding areas, submit immediate coordinates below.
            </p>

            {submittedRescue ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex flex-col items-center text-center gap-4 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-status-green flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-status-green">
                    Rescue Report Lodged Successfully
                  </span>
                  <span className="font-serif font-bold text-lg text-primary-900">
                    Tracking Code: {submittedRescue.trackingNumber}
                  </span>
                  <p className="text-xs text-charcoal-muted max-w-md mt-1">
                    Our nearest volunteer rescue unit and veterinary partners have been alerted for triage and on-site dispatch.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmittedRescue(null)}
                  className="bg-primary-900 text-surface-cream text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-primary-800 transition-colors shadow"
                >
                  Report Another Case
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitRescue} className="flex flex-col gap-4 text-xs">
                
                {/* Animal Species & Urgency */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-charcoal block mb-1">
                      Animal Category *
                    </label>
                    <select
                      value={animalType}
                      onChange={(e: any) => setAnimalType(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-zinc-300 bg-surface-cream font-medium focus:outline-none focus:border-accent-gold"
                    >
                      <option value="DOG">🐕 Stray / Abandoned Dog</option>
                      <option value="CAT">🐈 Street Cat / Kitten</option>
                      <option value="DONKEY_HORSE">🐎 Working Donkey / Cart Horse</option>
                      <option value="BIRD">🦅 Wild Bird / Injured Raptor</option>
                      <option value="WILDLIFE">🦊 Native Wildlife / Mammal</option>
                      <option value="OTHER">🐾 Other Animal</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-charcoal block mb-1">
                      Injury / Distress Condition *
                    </label>
                    <select
                      value={condition}
                      onChange={(e: any) => setCondition(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-zinc-300 bg-surface-cream font-medium focus:outline-none focus:border-accent-gold"
                    >
                      <option value="HIT_AND_RUN">Hit & Run Road Accident</option>
                      <option value="FRACTURE_TRAUMA">Limb Fracture / Deep Bleeding</option>
                      <option value="POISONING_ILLNESS">Poisoning / Severe Disease</option>
                      <option value="CRUELTY_ABUSE">Severe Neglect / Cruelty Case</option>
                      <option value="TRAPPED">Trapped / Wire Entangled</option>
                    </select>
                  </div>
                </div>

                {/* Urgency */}
                <div>
                  <label className="font-bold text-charcoal block mb-1">
                    Emergency Urgency Level
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "EMERGENCY_CRITICAL", label: "Critical (Life Threatening)" },
                      { id: "HIGH", label: "High (Severe Pain)" },
                      { id: "MEDIUM", label: "Moderate (Stable)" },
                    ].map((lvl) => (
                      <button
                        key={lvl.id}
                        type="button"
                        onClick={() => setUrgency(lvl.id as any)}
                        className={`p-2 rounded-xl border text-center transition-all ${
                          urgency === lvl.id
                            ? "border-alert-red bg-red-50 text-alert-red font-bold"
                            : "border-zinc-200 text-charcoal hover:bg-zinc-50"
                        }`}
                      >
                        {lvl.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="font-bold text-charcoal block mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      value={locationCity}
                      onChange={(e) => setLocationCity(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-zinc-300 bg-surface-cream"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="font-bold text-charcoal block mb-1">
                      Precise Landmark / Street Location *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Near Ravi Bridge toll, beside green tea stall"
                      value={locationAddress}
                      onChange={(e) => setLocationAddress(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-zinc-300 bg-surface-cream"
                    />
                  </div>
                </div>

                {/* Reporter Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-charcoal block mb-1">
                      Reporter Name (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={reporterName}
                      onChange={(e) => setReporterName(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-zinc-300 bg-surface-cream"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-charcoal block mb-1">
                      Callback Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0300 1234567"
                      value={reporterPhone}
                      onChange={(e) => setReporterPhone(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-zinc-300 bg-surface-cream"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-alert-red hover:bg-red-700 text-surface-cream font-bold py-3 px-6 rounded-2xl shadow-md transition-all hover:scale-[1.01] flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {submitting ? "Dispatching Emergency Notice..." : "Dispatch Emergency Rescue Team"}
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Right 5 Cols: Rescue Tracker & Helpline */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Live Rescue Tracking Box */}
            <div className="bg-surface-card rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-sm flex flex-col gap-4">
              <div className="flex items-center gap-2 text-primary-900">
                <Search className="w-4 h-4 text-accent-gold-dark" />
                <h3 className="font-serif font-bold text-lg">
                  Track Rescue Request Status
                </h3>
              </div>

              <p className="text-xs text-charcoal-muted leading-relaxed">
                Enter your issued reference number (e.g. <code>ZCF-AR-2026-0042</code>) to view live triage status and veterinary updates.
              </p>

              <form onSubmit={handleTrackRescue} className="flex gap-2">
                <input
                  type="text"
                  placeholder="ZCF-AR-2026-XXXX"
                  value={searchTracking}
                  onChange={(e) => setSearchTracking(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-zinc-300 font-mono text-xs bg-surface-cream uppercase focus:outline-none focus:border-accent-gold"
                />
                <button
                  type="submit"
                  disabled={trackingLoading}
                  className="bg-primary-900 hover:bg-primary-800 text-surface-cream px-4 rounded-xl text-xs font-semibold shrink-0 transition-colors"
                >
                  {trackingLoading ? "..." : "Track"}
                </button>
              </form>

              {trackedStatus === "NOT_FOUND" && (
                <div className="p-3 rounded-xl bg-amber-50 text-amber-800 text-xs">
                  No rescue file found with tracking number <strong>{searchTracking}</strong>. Please verify the code.
                </div>
              )}

              {trackedStatus && trackedStatus !== "NOT_FOUND" && trackedStatus !== "ERROR" && (
                <div className="bg-surface-cream border border-zinc-200 rounded-2xl p-4 flex flex-col gap-2.5 text-xs animate-in fade-in">
                  <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
                    <span className="font-mono font-bold text-primary-900">
                      {trackedStatus.trackingNumber}
                    </span>
                    <span className="bg-emerald-100 text-status-green font-bold px-2 py-0.5 rounded text-[10px] uppercase">
                      {trackedStatus.status.replace("_", " ")}
                    </span>
                  </div>

                  <div className="space-y-1 text-charcoal text-[11px]">
                    <div><strong>Animal:</strong> {trackedStatus.animalType}</div>
                    <div><strong>Condition:</strong> {trackedStatus.condition.replace("_", " ")}</div>
                    <div><strong>Location:</strong> {trackedStatus.locationAddress}, {trackedStatus.locationCity}</div>
                    {trackedStatus.assignedVet && (
                      <div><strong>Attending Vet:</strong> {trackedStatus.assignedVet}</div>
                    )}
                    {trackedStatus.treatmentNotes && (
                      <div className="bg-surface-card p-2 rounded border border-zinc-200 mt-1">
                        <strong>Clinical Log:</strong> {trackedStatus.treatmentNotes}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Helpline Box */}
            <div className="bg-[#0A2318] text-white border border-[#143D2B] rounded-3xl p-6 sm:p-8 flex flex-col gap-4 shadow-xl">
              <div className="flex items-center gap-2 text-accent-gold">
                <PhoneCall className="w-4 h-4 text-accent-gold" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Emergency Animal Hotline
                </span>
              </div>
              <h4 className="font-serif font-bold text-xl text-white">
                Immediate Urgent Assistance
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                For critically bleeding horses or active hit-and-run emergencies, call our animal emergency line directly.
              </p>
              <a
                href="tel:+923000000000"
                className="font-mono font-bold text-accent-gold hover:text-accent-gold-light text-xl transition-colors inline-block"
              >
                +92 300 000 0000
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
