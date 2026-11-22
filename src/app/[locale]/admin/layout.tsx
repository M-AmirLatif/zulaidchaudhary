import { requireRole } from "@/lib/auth";
import { Link } from "@/i18n/routing";
import { 
  LayoutDashboard, 
  Users, 
  Award, 
  FolderGit2, 
  Building2, 
  Stethoscope, 
  ShieldAlert, 
  FileText, 
  LogOut, 
  ShieldCheck, 
  ArrowLeft,
  ChevronRight
} from "lucide-react";

export default async function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const session = await requireRole(
    [
      "SUPER_ADMIN",
      "ADMIN",
      "CONTENT_EDITOR",
      "MEDICAL_COORDINATOR",
      "FINANCE_OFFICER",
      "VOLUNTEER_COORDINATOR",
      "COUNTRY_COORDINATOR",
    ],
    locale
  );

  return (
    <div className="w-full min-h-screen bg-surface-muted/60 flex flex-col md:flex-row">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 bg-primary-900 text-surface-cream p-6 flex flex-col justify-between shrink-0 shadow-2xl">
        <div className="flex flex-col gap-6">
          {/* Admin Header */}
          <div className="flex items-center gap-3 pb-6 border-b border-primary-800">
            <div className="w-11 h-11 rounded-2xl bg-accent-gold text-primary-900 flex items-center justify-center font-serif font-bold text-xl shadow">
              ZCF
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="font-serif font-bold text-sm text-surface-cream truncate">
                Admin Command
              </span>
              <span className="text-[11px] font-bold text-accent-gold bg-primary-800 px-2 py-0.5 rounded-full self-start truncate">
                {session.role}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1 text-xs font-semibold">
            <Link
              href="/admin"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary-800 text-zinc-300 hover:text-accent-gold transition-colors"
            >
              <LayoutDashboard className="w-4 h-4 text-accent-gold" />
              <span>Executive Dashboard</span>
            </Link>

            <Link
              href="/admin/volunteers"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary-800 text-zinc-300 hover:text-accent-gold transition-colors"
            >
              <Users className="w-4 h-4 text-accent-gold" />
              <span>Volunteer Approvals</span>
            </Link>

            <Link
              href="/admin/memberships"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary-800 text-zinc-300 hover:text-accent-gold transition-colors"
            >
              <Award className="w-4 h-4 text-accent-gold" />
              <span>Membership Queue</span>
            </Link>

            <Link
              href="/admin/projects"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary-800 text-zinc-300 hover:text-accent-gold transition-colors"
            >
              <FolderGit2 className="w-4 h-4 text-accent-gold" />
              <span>Project Management</span>
            </Link>

            <Link
              href="/admin/hospital"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary-800 text-zinc-300 hover:text-accent-gold transition-colors"
            >
              <Building2 className="w-4 h-4 text-accent-gold" />
              <span>Hospital Construction</span>
            </Link>

            <Link
              href="/admin/medical-cases"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary-800 text-zinc-300 hover:text-accent-gold transition-colors"
            >
              <Stethoscope className="w-4 h-4 text-accent-gold" />
              <span>Medical Cases Vault</span>
            </Link>

            <Link
              href="/admin/complaints"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary-800 text-zinc-300 hover:text-accent-gold transition-colors"
            >
              <ShieldAlert className="w-4 h-4 text-alert-red" />
              <span>Grievance Redressal</span>
            </Link>

            <Link
              href="/admin/audit-logs"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary-800 text-zinc-300 hover:text-accent-gold transition-colors"
            >
              <FileText className="w-4 h-4 text-accent-gold" />
              <span>Immutable Audit Log</span>
            </Link>
          </nav>

          <div className="pt-4 border-t border-primary-800 flex flex-col gap-2">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-zinc-400 hover:text-surface-cream transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" />
              <span>Switch to User View</span>
            </Link>
          </div>
        </div>

        {/* Logout */}
        <div className="pt-6 border-t border-primary-800">
          <form action="/api/auth/logout" method="POST">
            <button
              type="submit"
              className="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold text-red-400 hover:bg-red-950/40 rounded-xl transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out Admin</span>
            </button>
          </form>
        </div>
      </aside>

      {/* Main Admin View */}
      <main className="flex-1 p-6 md:p-10 max-w-6xl">
        {children}
      </main>
    </div>
  );
}
