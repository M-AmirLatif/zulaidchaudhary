"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { FolderGit2, CheckCircle2, Clock, Calendar, ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const tCommon = useTranslations("common");
  const [filter, setFilter] = useState<"ALL" | "ONGOING" | "PLANNED" | "COMPLETED">("ALL");

  const projects = [
    {
      id: "clean-water",
      title: t("waterProjectTitle"),
      desc: t("waterProjectDesc"),
      status: "PLANNED",
      statusLabel: t("statusPlanned"),
      category: "Clean Water & Environment",
      href: "/our-work/environment",
    },
    {
      id: "animal-rescue",
      title: t("animalRescueProjectTitle"),
      desc: t("animalRescueProjectDesc"),
      status: "ONGOING",
      statusLabel: t("statusOngoing"),
      category: "Animal Welfare",
      href: "/our-work/animal-welfare",
    },
    {
      id: "patient-aid",
      title: t("patientAidProjectTitle"),
      desc: t("patientAidProjectDesc"),
      status: "ONGOING",
      statusLabel: t("statusOngoing"),
      category: "Medical Assistance",
      href: "/our-work/medical-assistance",
    },
    {
      id: "hospital",
      title: t("hospitalProjectTitle"),
      desc: t("hospitalProjectDesc"),
      status: "ONGOING",
      statusLabel: t("statusOngoing"),
      category: "Charity Hospital",
      href: "/our-work/hospital",
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === "ALL") return true;
    return p.status === filter;
  });

  return (
    <div className="w-full py-16 px-4 bg-surface-cream">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-900 border border-primary-600/20 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Humanitarian Initiatives</span>
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-primary-900 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {(["ALL", "ONGOING", "PLANNED", "COMPLETED"] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === cat
                  ? "bg-primary-900 text-surface-cream shadow-md"
                  : "bg-surface-card border border-zinc-200 text-charcoal hover:bg-zinc-100"
              }`}
            >
              {cat === "ALL" && t("filterAll")}
              {cat === "ONGOING" && t("filterOngoing")}
              {cat === "PLANNED" && t("filterPlanned")}
              {cat === "COMPLETED" && t("filterCompleted")}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-surface-card rounded-2xl border border-zinc-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-accent-gold-dark bg-amber-50 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                      project.status === "ONGOING"
                        ? "bg-green-100 text-status-green"
                        : "bg-zinc-100 text-zinc-600"
                    }`}
                  >
                    {project.statusLabel}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-primary-900 group-hover:text-accent-gold-dark transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  {project.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-100 mt-6">
                <Link
                  href={project.href}
                  className="text-xs sm:text-sm font-semibold text-primary-900 hover:text-accent-gold-dark flex items-center justify-between transition-colors"
                >
                  <span>{tCommon("learnMore")}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
