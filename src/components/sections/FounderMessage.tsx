import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { UserCheck, ArrowRight } from "lucide-react";

export function FounderMessage() {
  const t = useTranslations("home.founderMessage");
  const tCommon = useTranslations("common");

  return (
    <section className="py-20 px-4 bg-surface-cream">
      <div className="max-w-5xl mx-auto bg-surface-card rounded-3xl border border-zinc-200 overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-12">
        {/* Left Column: Reflective Portrait (firstimg.jpg) */}
        <div className="md:col-span-5 relative min-h-[320px] md:min-h-[440px] bg-zinc-100">
          <Image
            src="/images/firstimg.jpg"
            alt="Zulaid Chaudhary, founder portrait in contemplation"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent md:hidden" />
        </div>

        {/* Right Column: Empty Editable Placeholder Block */}
        <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 self-start bg-amber-50 text-accent-gold-dark border border-amber-200 px-3 py-1 rounded-full text-xs font-semibold">
              <UserCheck className="w-3.5 h-3.5" />
              <span>{t("badge")}</span>
            </div>

            <div className="flex flex-col">
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-primary-900">
                {t("title")}
              </h2>
              <span className="text-sm font-semibold text-accent-gold-dark">
                {t("subtitle")}
              </span>
            </div>

            {/* Empty Editable Placeholder as strictly mandated */}
            <div className="my-2 p-5 rounded-xl border border-dashed border-zinc-300 bg-surface-muted/60 text-charcoal-muted text-sm sm:text-base leading-relaxed italic">
              {t("placeholderText")}
            </div>

            <p className="text-xs text-zinc-500">
              {t("note")}
            </p>
          </div>

          <div className="pt-4 border-t border-zinc-100">
            <Link
              href="/about/founder"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-900 hover:text-accent-gold-dark transition-colors"
            >
              <span>Read Full Founder Biographical Profile</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
