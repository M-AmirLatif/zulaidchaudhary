import { requireAuth } from "@/lib/auth";
import { Link } from "@/i18n/routing";
import { mockVolunteers, mockMemberships } from "@/lib/mock-data";
import { 
  Users, 
  Award, 
  Stethoscope, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Heart,
  ChevronRight
} from "lucide-react";

export default async function DashboardOverviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const session = await requireAuth(locale);

  // Check user volunteer and membership records
  const userVol = mockVolunteers.find((v) => v.email.toLowerCase() === session.email.toLowerCase()) || mockVolunteers[0];
  const userMem = mockMemberships.find((m) => m.email.toLowerCase() === session.email.toLowerCase()) || mockMemberships[0];

  return (
    <div className="flex flex-col gap-8">
      {/* Welcome Banner */}
      <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 self-start bg-amber-50 text-accent-gold-dark border border-amber-200 px-3 py-1 rounded-full text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Authenticated Portal Access</span>
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900">
            Welcome back, {session.name}
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
            Manage your volunteer engagement, membership status, and humanitarian tracking in one verified hub.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/volunteer"
            className="bg-primary-900 hover:bg-primary-800 text-surface-cream text-xs font-bold px-4 py-2.5 rounded-xl shadow transition-colors flex items-center gap-1.5"
          >
            <Users className="w-4 h-4" />
            <span>Volunteer Dashboard</span>
          </Link>
          <Link
            href="/dashboard/membership"
            className="bg-accent-gold hover:bg-accent-gold-light text-primary-900 text-xs font-bold px-4 py-2.5 rounded-xl shadow transition-colors flex items-center gap-1.5"
          >
            <Award className="w-4 h-4" />
            <span>View Card</span>
          </Link>
        </div>
      </div>

      {/* Grid of Status Dossiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Volunteer Application */}
        <div className="bg-surface-card rounded-3xl border border-zinc-200 p-6 flex flex-col justify-between shadow-sm">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-900 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                userVol?.status === "APPROVED" 
                  ? "bg-green-100 text-status-green" 
                  : "bg-amber-100 text-accent-gold-dark"
              }`}>
                {userVol ? userVol.status : "NOT APPLIED"}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="font-serif font-bold text-lg text-primary-900">
                Volunteer Status
              </h2>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                {userVol 
                  ? `Application ${userVol.applicationNumber} is ${userVol.status.toLowerCase().replace('_', ' ')}.` 
                  : "Contribute your skills to healthcare and community aid."}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-100 mt-4">
            <Link
              href="/dashboard/volunteer"
              className="text-xs font-bold text-primary-900 hover:text-accent-gold-dark flex items-center justify-between transition-colors"
            >
              <span>{userVol ? "Inspect Application Dossier" : "Apply as Volunteer"}</span>
              <ChevronRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>

        {/* Card 2: Membership Card */}
        <div className="bg-surface-card rounded-3xl border border-zinc-200 p-6 flex flex-col justify-between shadow-sm">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-accent-gold-dark flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-green-100 text-status-green">
                {userMem ? userMem.status : "ACTIVE"}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="font-serif font-bold text-lg text-primary-900">
                Foundation Membership
              </h2>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                {userMem 
                  ? `${userMem.tier} (${userMem.membershipNumber}) active.` 
                  : "Apply for official Foundation membership credential."}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-100 mt-4">
            <Link
              href="/dashboard/membership"
              className="text-xs font-bold text-primary-900 hover:text-accent-gold-dark flex items-center justify-between transition-colors"
            >
              <span>View Digital Membership Card</span>
              <ChevronRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>

        {/* Card 3: Healthcare Assistance Intake */}
        <div className="bg-surface-card rounded-3xl border border-zinc-200 p-6 flex flex-col justify-between shadow-sm">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-900 flex items-center justify-center">
                <Stethoscope className="w-5 h-5" />
              </div>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-primary-100 text-primary-900">
                24/7 TRACKING
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="font-serif font-bold text-lg text-primary-900">
                Healthcare Tracking
              </h2>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Track confidential medical surgery or welfare requests via tracking code.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-100 mt-4">
            <Link
              href="/dashboard/requests"
              className="text-xs font-bold text-primary-900 hover:text-accent-gold-dark flex items-center justify-between transition-colors"
            >
              <span>Track Assistance Status</span>
              <ChevronRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
