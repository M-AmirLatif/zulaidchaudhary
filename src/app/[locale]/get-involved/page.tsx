import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Heart, Users, Award, Handshake, ArrowRight, ShieldCheck } from "lucide-react";

export default function GetInvolvedPage() {
  const t = useTranslations("getInvolved");
  const tCommon = useTranslations("common");

  return (
    <div className="w-full py-16 px-4 bg-surface-cream">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-900 border border-primary-600/20 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Heart className="w-3.5 h-3.5" />
            <span>Community Action</span>
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-900 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Action Pathways */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pathway 1: Volunteer */}
          <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-900 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="font-serif font-bold text-xl text-primary-900">
                {t("volunteerTitle")}
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                {t("volunteerDesc")}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-900 hover:bg-primary-800 text-surface-cream font-semibold text-xs py-2.5 px-4 rounded-xl shadow-sm transition-colors"
            >
              <span>{t("volunteerBtn")}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>
          </div>

          {/* Pathway 2: Membership */}
          <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-accent-gold-dark flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="font-serif font-bold text-xl text-primary-900">
                {t("membershipTitle")}
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                {t("membershipDesc")}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-900 hover:bg-primary-800 text-surface-cream font-semibold text-xs py-2.5 px-4 rounded-xl shadow-sm transition-colors"
            >
              <span>{t("membershipBtn")}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>
          </div>

          {/* Pathway 3: Partnerships */}
          <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-50 text-status-green flex items-center justify-center">
                <Handshake className="w-6 h-6" />
              </div>
              <h2 className="font-serif font-bold text-xl text-primary-900">
                {t("partnershipTitle")}
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                {t("partnershipDesc")}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-900 hover:bg-primary-800 text-surface-cream font-semibold text-xs py-2.5 px-4 rounded-xl shadow-sm transition-colors"
            >
              <span>{t("partnershipBtn")}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>
          </div>
        </div>

        {/* Direct Donation Banner */}
        <div className="bg-primary-900 text-surface-cream rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-xl">
            <div className="flex items-center gap-2 text-accent-gold text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Direct Philanthropic Support</span>
            </div>
            <h3 className="font-serif font-bold text-2xl text-surface-cream">
              Contribute Directly to Verified Patient Care
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Online card gateways will be activated upon official regulatory certificate issuance. In the interim, supporters can coordinate verified bank transfers or medical sponsorships through our office.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-light text-primary-900 font-bold px-7 py-3 rounded-xl text-sm whitespace-nowrap shadow transition-colors"
          >
            <Heart className="w-4 h-4 fill-primary-900" />
            <span>Inquire About Giving</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
