"use client";

import { PageHero } from "@/components/ui/page-hero";
import { LegacySection } from "@/components/legacy/legacy-section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/badge";
import { YoutubeEmbed } from "@/components/media/youtube-embed";
import { videos } from "@/data/videos";
import { useT } from "@/lib/i18n";

export function LegacyContent() {
  const { t } = useT();
  return (
    <>
      <PageHero
        kicker="Kenya on the World Stage"
        title="A voice at every"
        accent="global table."
        description="From the UN General Assembly to the G20 roundtable — Kenya's stature on the world stage, chronicled in image and word."
      />
      <LegacySection showHeading={false} />

      <section className="border-t border-black/10 bg-white py-28 lg:py-36">
        <Container>
          <Kicker>From the Field</Kicker>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-medium leading-[1.05] tracking-tighter text-black sm:text-5xl">
            {t("Watch the record,")}{" "}
            <span className="italic text-party-gold">{t("unedited.")}</span>
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <YoutubeEmbed
                key={video.id}
                youtubeId={video.youtubeId}
                title={video.title}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
