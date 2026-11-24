import { requireAuth } from "@/lib/auth";
import { Link } from "@/i18n/routing";
import { 
  LayoutDashboard, 
  Users, 
  Award, 
  Stethoscope, 
  ShieldCheck, 
  LogOut, 
  User, 
  ChevronRight,
  ShieldAlert,
  Heart
} from "lucide-react";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const session = await requireAuth(locale);

  const isStaff = [
    "SUPER_ADMIN",
    "ADMIN",
    "CONTENT_EDITOR",
    "MEDICAL_COORDINATOR",
    "FINANCE_OFFICER",
    "VOLUNTEER_COORDINATOR",
    "COUNTRY_COORDINATOR",
  ].includes(session.role);

  return (
    <div className="w-full min-h-screen bg-surface-muted/40 flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-surface-card border-b md:border-b-0 md:border-e border-zinc-200 p-6 flex flex-col justify-between shrink-0">
        <div className="flex flex-col gap-6">
          {/* User Profile Snippet */}
          <div className="flex items-center gap-3 pb-6 border-b border-zinc-100">
            <div className="w-11 h-11 rounded-2xl bg-primary-900 text-accent-gold flex items-center justify-center font-bold text-sm shadow">
              {session.name.substring(0, 2).toUpperCase()}
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="font-serif font-bold text-sm text-primary-900 truncate">
                {session.name}
              </span>
              <span className="text-[11px] font-semibold text-accent-gold-dark bg-amber-50 px-2 py-0.5 rounded-full self-start truncate">
                {session.role}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1.5 text-xs sm:text-sm font-medium">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-surface-muted text-charcoal hover:text-primary-900 transition-colors"
            >
              <LayoutDashboard className="w-4 h-4 text-accent-gold-dark" />
              <span>Overview</span>
            </Link>

            <Link
              href="/dashboard/volunteer"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-surface-muted text-charcoal hover:text-primary-900 transition-colors"
            >
              <Users className="w-4 h-4 text-accent-gold-dark" />
              <span>Volunteer Application</span>
            </Link>

            <Link
              href="/dashboard/membership"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-surface-muted text-charcoal hover:text-primary-900 transition-colors"
            >
              <Award className="w-4 h-4 text-accent-gold-dark" />
              <span>Membership Card</span>
            </Link>

            <Link
              href="/dashboard/donations"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-surface-muted text-charcoal hover:text-primary-900 transition-colors"
            >
              <Heart className="w-4 h-4 text-accent-gold-dark" />
              <span>Donations & Receipts</span>
            </Link>

            <Link
              href="/dashboard/requests"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-surface-muted text-charcoal hover:text-primary-900 transition-colors"
            >
              <Stethoscope className="w-4 h-4 text-accent-gold-dark" />
              <span>Healthcare Tracking</span>
            </Link>

            <Link
              href="/dashboard/profile"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-surface-muted text-charcoal hover:text-primary-900 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-accent-gold-dark" />
              <span>Security & 2FA</span>
            </Link>
          </nav>

          {/* Staff Switcher */}
          {isStaff && (
            <div className="pt-4 border-t border-zinc-100">
              <Link
                href="/admin"
                className="flex items-center justify-between p-3 rounded-xl bg-primary-900 text-accent-gold font-bold text-xs shadow hover:bg-primary-800 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Admin Back-Office</span>
                </div>
                <ChevronRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </div>
          )}
        </div>

        {/* Logout Form */}
        <div className="pt-6 border-t border-zinc-100">
          <form action="/api/auth/logout" method="POST">
            <button
              type="submit"
              className="w-full flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-alert-red hover:bg-red-50 rounded-xl transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content Pane */}
      <main className="flex-1 p-6 md:p-10 max-w-6xl">
        {children}
      </main>
    </div>
  );
}
