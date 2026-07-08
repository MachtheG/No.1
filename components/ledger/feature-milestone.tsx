"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink, PlayCircle } from "lucide-react";

import { PillarBadge } from "@/components/ui/badge";
import { YoutubeEmbed } from "@/components/media/youtube-embed";
import { pillarMeta, type Milestone } from "@/data/milestones";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export function FeatureMilestone({
  milestone,
  flip,
}: {
  milestone: Milestone;
  flip?: boolean;
}) {
  const { t } = useT();
  const meta = pillarMeta[milestone.pillar];
  const color = meta.color as "uda" | "forest";

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className="grid overflow-hidden rounded-3xl border-2 border-black/10 bg-black lg:grid-cols-2"
    >
      {/* Media */}
      <div className={cn("relative min-h-[280px]", flip && "lg:order-2")}>
        {milestone.youtubeId ? (
          <div className="absolute inset-0">
            <YoutubeEmbed
              youtubeId={milestone.youtubeId}
              title={milestone.title}
            />
          </div>
        ) : milestone.image ? (
          <Image
            src={milestone.image}
            alt={milestone.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-onyx-800" />
        )}
      </div>

      {/* Copy */}
      <div className="flex flex-col justify-center gap-4 p-8 lg:p-12">
        <PillarBadge color={color}>{meta.label}</PillarBadge>

        <div>
          <p className="font-display text-6xl font-bold leading-none text-party-yellow lg:text-7xl">
            {milestone.metric.value}
          </p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-white/60">
            {t(milestone.metric.label)}
          </p>
        </div>

        <h3 className="font-display text-2xl font-semibold leading-tight text-white lg:text-3xl">
          {t(milestone.title)}
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-white/60">
          {t(milestone.description)}
        </p>

        <a
          href={milestone.source.url}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-party-yellow/40 bg-party-yellow/10 px-4 py-2 text-xs font-semibold text-party-yellow transition-colors hover:bg-party-yellow/20"
        >
          <BadgeCheck size={15} />
          {t("Verified")}
          {milestone.source.type === "video" && <PlayCircle size={13} />}
          <span className="max-w-[16rem] truncate text-party-yellow/80">
            {milestone.source.title}
          </span>
          <ExternalLink size={12} />
        </a>
      </div>
    </motion.article>
  );
}
