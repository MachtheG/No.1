"use client";

import { motion } from "framer-motion";
import { ExternalLink, Newspaper, PlayCircle } from "lucide-react";

import { PillarBadge } from "@/components/ui/badge";
import { YoutubeEmbed } from "@/components/media/youtube-embed";
import { pillarMeta, type Milestone } from "@/data/milestones";

const EASE = [0.16, 1, 0.3, 1] as const;

export function MilestoneCard({
  milestone,
  index,
}: {
  milestone: Milestone;
  index: number;
}) {
  const meta = pillarMeta[milestone.pillar];
  const color = meta.color as "uda" | "forest";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE, delay: (index % 4) * 0.06 }}
      className="group relative grid gap-6 rounded-2xl border border-black/10 bg-black/[0.02] p-5 transition-colors hover:border-black/20 lg:ml-14 lg:grid-cols-[1.1fr_1.4fr] lg:gap-8 lg:p-6"
    >
      <span
        className={
          "absolute -left-[3.05rem] top-8 hidden h-3 w-3 rounded-full ring-4 ring-onyx-950 lg:block " +
          (color === "uda" ? "bg-uda-500" : "bg-forest-400")
        }
      />

      <div className="flex flex-col justify-center gap-3">
        {milestone.youtubeId ? (
          <YoutubeEmbed youtubeId={milestone.youtubeId} title={milestone.title} />
        ) : (
          <div className="relative flex aspect-[16/10] flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-black/10 bg-onyx-900 p-6 text-center lg:aspect-auto">
            <Newspaper size={28} className="text-black/25" />
            <p className="font-mono text-xs uppercase tracking-widest text-black/40">
              {milestone.year}
            </p>
          </div>
        )}
        <a
          href={milestone.source.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-xs font-medium text-black/50 transition-colors hover:text-party-gold"
        >
          {milestone.source.type === "video" ? (
            <PlayCircle size={13} />
          ) : (
            <Newspaper size={13} />
          )}
          <span className="line-clamp-1">Source: {milestone.source.title}</span>
          <ExternalLink size={11} className="flex-shrink-0" />
        </a>
      </div>

      <div className="flex flex-col justify-center py-2">
        <PillarBadge color={color}>{meta.label}</PillarBadge>
        <h3 className="mt-4 text-balance font-display text-2xl font-medium leading-tight text-black lg:text-3xl">
          {milestone.title}
        </h3>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-black/50">
          {milestone.description}
        </p>
        <div className="mt-6 flex items-baseline gap-2">
          <span
            className={
              "font-display text-2xl font-semibold " +
              (color === "uda" ? "text-party-gold" : "text-forest-700")
            }
          >
            {milestone.metric.value}
          </span>
          <span className="text-xs uppercase tracking-widest text-black/40">
            {milestone.metric.label}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
