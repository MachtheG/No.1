"use client";

import { motion } from "framer-motion";
import { ExternalLink, Newspaper, PlayCircle } from "lucide-react";

import { Container } from "@/components/ui/container";
import { YoutubeEmbed } from "@/components/media/youtube-embed";
import { journeyMilestones } from "@/data/journey";
import { useT } from "@/lib/i18n";

const EASE = [0.16, 1, 0.3, 1] as const;

export function JourneyTimeline() {
  const { t } = useT();
  return (
    <section className="relative bg-white py-28 lg:py-36">
      <Container>
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-party-yellow via-black/15 to-transparent sm:left-[11px]" />
          <div className="flex flex-col gap-14">
            {journeyMilestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: EASE, delay: (i % 5) * 0.06 }}
                className="relative pl-8 sm:pl-12"
              >
                <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-party-yellow bg-white sm:h-6 sm:w-6" />
                <span className="font-mono text-xs uppercase tracking-widest text-party-gold">
                  {m.year}
                </span>
                <h3 className="mt-2 font-display text-2xl font-medium text-black sm:text-3xl">
                  {t(m.title)}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-black/55">
                  {t(m.description)}
                </p>

                {m.youtubeId ? (
                  <div className="mt-5 max-w-md">
                    <YoutubeEmbed youtubeId={m.youtubeId} title={m.title} />
                  </div>
                ) : null}

                <a
                  href={m.source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-black/50 transition-colors hover:text-party-gold"
                >
                  {m.source.type === "video" ? (
                    <PlayCircle size={13} />
                  ) : (
                    <Newspaper size={13} />
                  )}
                  <span>
                    {t("Source:")} {m.source.title}
                  </span>
                  <ExternalLink size={11} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
