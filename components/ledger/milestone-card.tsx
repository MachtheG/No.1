"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink, Newspaper, PlayCircle } from "lucide-react";

import { PillarBadge } from "@/components/ui/badge";
import { YoutubeEmbed } from "@/components/media/youtube-embed";
import { pillarMeta, type Milestone } from "@/data/milestones";
import { useT } from "@/lib/i18n";

const EASE = [0.16, 1, 0.3, 1] as const;

export function MilestoneCard({
  milestone,
  index,
}: {
  milestone: Milestone;
  index: number;
}) {
  const { t } = useT();
  const meta = pillarMeta[milestone.pillar];
  const color = meta.color as "uda" | "forest";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE, delay: (index % 3) * 0.06 }}
      className="group flex flex-col rounded-2xl border border-black/10 bg-black/[0.02] p-5 transition-colors hover:border-black/20"
    >
      {milestone.youtubeId ? (
        <YoutubeEmbed youtubeId={milestone.youtubeId} title={milestone.title} />
      ) : milestone.image ? (
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-black/10 bg-onyx-900">
          <Image
            src={milestone.image}
            alt={milestone.title}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
          />
          <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest text-white">
            {milestone.year}
          </span>
        </div>
      ) : (
        <div className="relative flex aspect-[16/10] flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-black/10 bg-onyx-900 p-6 text-center">
          <Newspaper size={28} className="text-black/25" />
          <p className="font-mono text-xs uppercase tracking-widest text-black/40">
            {milestone.year}
          </p>
        </div>
      )}

      <div className="mt-5 flex flex-1 flex-col">
        <PillarBadge color={color}>{meta.label}</PillarBadge>
        <h3 className="mt-3 text-balance font-display text-xl font-medium leading-tight text-black">
          {t(milestone.title)}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-black/50">
          {t(milestone.description)}
        </p>
        <div className="mt-5 flex items-baseline gap-2">
          <span
            className={
              "font-display text-3xl font-bold " +
              (color === "uda" ? "text-party-gold" : "text-forest-700")
            }
          >
            {milestone.metric.value}
          </span>
          <span className="text-xs uppercase tracking-widest text-black/40">
            {t(milestone.metric.label)}
          </span>
        </div>
        <a
          href={milestone.source.url}
          target="_blank"
          rel="noreferrer"
          className="mt-4 flex items-center gap-1.5 border-t border-black/10 pt-4 text-xs font-semibold text-party-gold transition-colors hover:text-black"
        >
          <BadgeCheck size={14} className="flex-shrink-0" />
          <span className="flex-shrink-0">{t("Verified")}</span>
          {milestone.source.type === "video" ? (
            <PlayCircle size={12} className="flex-shrink-0 text-black/40" />
          ) : (
            <Newspaper size={12} className="flex-shrink-0 text-black/40" />
          )}
          <span className="line-clamp-1 text-black/45">
            {milestone.source.title}
          </span>
          <ExternalLink size={11} className="flex-shrink-0 text-black/40" />
        </a>
      </div>
    </motion.article>
  );
}
