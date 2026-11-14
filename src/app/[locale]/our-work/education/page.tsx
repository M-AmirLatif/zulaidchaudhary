import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { GraduationCap, BookOpen, Heart, ArrowRight } from "lucide-react";

export default function EducationPage() {
  const t = useTranslations("home.pillars");
  const tCommon = useTranslations("common");

  return (
    <div className="w-full py-16 px-4 bg-surface-cream">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-900 border border-primary-600/20 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education Support</span>
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-900 tracking-tight">
            {t("educationTitle")}
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl leading-relaxed">
            {t("educationDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col gap-4">
            <h3 className="font-serif font-bold text-xl text-primary-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-accent-gold-dark" />
              <span>Direct Tuition Grants</span>
            </h3>
            <p className="text-sm text-charcoal-muted leading-relaxed">
              Covering school and college fees directly with educational institutions to keep bright, underprivileged students in school and prevent child labor.
            </p>
          </div>

          <div className="bg-surface-card rounded-3xl border border-zinc-200 p-8 shadow-sm flex flex-col gap-4">
            <h3 className="font-serif font-bold text-xl text-primary-900 flex items-center gap-2">
              <Heart className="w-5 h-5 text-accent-gold-dark" />
              <span>Academic Supplies & Uniforms</span>
            </h3>
            <p className="text-sm text-charcoal-muted leading-relaxed">
              Equipping students with textbooks, notebooks, school bags, and winter uniforms so they can study with confidence and self-respect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
