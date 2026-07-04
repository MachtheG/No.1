"use client";

import { MapPin } from "lucide-react";

import { type Project, stageLabels } from "@/data/projects";
import { useT } from "@/lib/i18n";

const STAGE_COLOR: Record<string, string> = {
  planning: "bg-black/40",
  procurement: "bg-uda-600",
  construction: "bg-party-yellow",
  commissioning: "bg-forest-500",
};

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useT();
  return (
    <div className="flex flex-col rounded-2xl border border-black/10 bg-black/[0.02] p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-black/40">
          <MapPin size={12} /> {t(project.county)}
        </span>
        <span className="rounded-full border border-black/10 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-black/60">
          {t(stageLabels[project.stage])}
        </span>
      </div>

      <h3 className="mt-4 font-display text-xl font-medium text-black">
        {t(project.name)}
      </h3>
      <p className="mt-1 text-xs uppercase tracking-widest text-party-gold">
        {t(project.sector)} &middot; {t(project.target)}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-black/50">
        {t(project.summary)}
      </p>

      <div className="mt-6">
        <div className="flex items-center justify-between text-xs">
          <span className="uppercase tracking-widest text-black/40">
            {t("Progress")}
          </span>
          <span className="font-mono font-semibold text-black/70">
            {project.progress}%
          </span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/10">
          <div
            className={`h-full rounded-full ${STAGE_COLOR[project.stage]}`}
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
