import { getSession } from "@/lib/auth";
import { Link } from "@/i18n/routing";
import { 
  getVolunteers, 
  getMemberships, 
  getProjects, 
  getMedicalCases, 
  getComplaints 
} from "@/lib/mock-data";
import { getAuditLogs } from "@/lib/audit";
import { 
  Users, 
  Award, 
  FolderGit2, 
  Stethoscope, 
  ShieldAlert, 
  FileText, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  Building2
} from "lucide-react";

export default async function AdminExecutiveDashboardPage() {
  const session = await getSession();
  const volunteers = getVolunteers();
  const memberships = getMemberships();
  const projects = getProjects();
  const medicalCases = getMedicalCases();
  const complaints = getComplaints();
  const auditLogs = await getAuditLogs();

  const pendingVolunteers = volunteers.filter((v) => v.status === "PENDING" || v.status === "INTERVIEW_SCHEDULED").length;
  const pendingMemberships = memberships.filter((m) => m.status === "PENDING").length;
  const pendingMedical = medicalCases.filter((c) => c.status === "PENDING_VETTING" || c.status === "INQUIRY").length;
  const openComplaints = complaints.filter((c) => c.status !== "RESOLVED" && c.status !== "DISMISSED").length;

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <div className="inline-flex items-center gap-2 self-start bg-amber-50 text-accent-gold-dark border border-amber-200 px-3 py-1 rounded-full text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Administrative Command Portal</span>
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900">
            Executive Operations Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
            Real-time management of volunteer approvals, clinical patient dossiers, projects, and regulatory compliance.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-primary-100 text-primary-900 border border-primary-600/20 px-3.5 py-2 rounded-xl text-xs font-semibold self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-status-green animate-pulse" />
          <span>System Verified • Phase 2 Active</span>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* KPI 1: Pending Volunteers */}
        <div className="bg-surface-card rounded-2xl border border-zinc-200 p-6 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-charcoal-muted uppercase tracking-wider">
              Volunteers Queue
            </span>
            <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-900 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-serif font-bold text-3xl text-primary-900">
              {pendingVolunteers}
            </span>
            <span className="text-xs text-charcoal-muted">Pending Review</span>
          </div>
          <div className="pt-4 border-t border-zinc-100 mt-4">
            <Link
              href="/admin/volunteers"
              className="text-xs font-bold text-primary-900 hover:text-accent-gold-dark flex items-center justify-between"
            >
              <span>Process Approvals</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>
          </div>
        </div>

        {/* KPI 2: Medical Cases Queue */}
        <div className="bg-surface-card rounded-2xl border border-zinc-200 p-6 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-charcoal-muted uppercase tracking-wider">
              Clinical Cases
            </span>
            <div className="w-10 h-10 rounded-xl bg-red-100 text-alert-red flex items-center justify-center">
              <Stethoscope className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-serif font-bold text-3xl text-primary-900">
              {pendingMedical}
            </span>
            <span className="text-xs text-charcoal-muted">Under Clinical Vetting</span>
          </div>
          <div className="pt-4 border-t border-zinc-100 mt-4">
            <Link
              href="/admin/medical-cases"
              className="text-xs font-bold text-primary-900 hover:text-accent-gold-dark flex items-center justify-between"
            >
              <span>Examine Vault</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>
          </div>
        </div>

        {/* KPI 3: Active Projects */}
        <div className="bg-surface-card rounded-2xl border border-zinc-200 p-6 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-charcoal-muted uppercase tracking-wider">
              Projects Active
            </span>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-accent-gold-dark flex items-center justify-center">
              <FolderGit2 className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-serif font-bold text-3xl text-primary-900">
              {projects.length}
            </span>
            <span className="text-xs text-charcoal-muted">Verified Initiatives</span>
          </div>
          <div className="pt-4 border-t border-zinc-100 mt-4">
            <Link
              href="/admin/projects"
              className="text-xs font-bold text-primary-900 hover:text-accent-gold-dark flex items-center justify-between"
            >
              <span>Manage Projects</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>
          </div>
        </div>

        {/* KPI 4: Whistleblower Complaints */}
        <div className="bg-surface-card rounded-2xl border border-zinc-200 p-6 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-charcoal-muted uppercase tracking-wider">
              Whistleblower
            </span>
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-accent-gold-dark flex items-center justify-center">
              <ShieldAlert className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-serif font-bold text-3xl text-primary-900">
              {openComplaints}
            </span>
            <span className="text-xs text-charcoal-muted">Unresolved Items</span>
          </div>
          <div className="pt-4 border-t border-zinc-100 mt-4">
            <Link
              href="/admin/complaints"
              className="text-xs font-bold text-primary-900 hover:text-accent-gold-dark flex items-center justify-between"
            >
              <span>Review Grievances</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hospital Construction Milestone Tracker Card */}
      <div className="bg-primary-900 text-surface-cream rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-accent-gold text-primary-900 flex items-center justify-center shrink-0">
            <Building2 className="w-6 h-6" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wider text-accent-gold font-bold">
              Verified Project Status
            </span>
            <h2 className="font-serif font-bold text-xl text-surface-cream">
              Charity Hospital Facility Under Construction
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-xl">
              Phase 1 architecture and land layout completed. Active structural construction progressing. Manage public construction updates and engineering milestones.
            </p>
          </div>
        </div>

        <Link
          href="/admin/hospital"
          className="bg-accent-gold hover:bg-accent-gold-light text-primary-900 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm whitespace-nowrap shadow transition-colors"
        >
          Post Verified Update
        </Link>
      </div>

      {/* Recent Audit Log Feed */}
      <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col gap-6">
        <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-accent-gold-dark" />
            <h2 className="font-serif font-bold text-lg text-primary-900">
              Immutable System Audit Activity
            </h2>
          </div>
          <Link
            href="/admin/audit-logs"
            className="text-xs font-bold text-primary-900 hover:text-accent-gold-dark"
          >
            View All Audit Logs →
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          {auditLogs.slice(0, 4).map((log) => (
            <div
              key={log.id}
              className="p-4 rounded-xl border border-zinc-100 bg-surface-muted/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
            >
              <div className="flex items-center gap-3">
                <span className="font-bold text-primary-900 bg-primary-100 px-2 py-0.5 rounded text-[11px]">
                  {log.action}
                </span>
                <span className="font-mono text-zinc-500 text-[11px]">{log.entity}</span>
                <span className="text-charcoal font-medium">{log.details}</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-500 shrink-0">
                <span>By: {log.userName}</span>
                <span>•</span>
                <span>{new Date(log.timestamp).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
