"use client";

import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/badge";
import { MasonryGallery } from "@/components/legacy/masonry-gallery";
import { ParallaxQuotes } from "@/components/legacy/parallax-quotes";
import { useT } from "@/lib/i18n";

export function LegacySection({
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
  const { t } = useT();
  return (
    <section id="legacy" className="relative bg-onyx-950 py-28 lg:py-36">
      {showHeading && (
        <Container>
          <div className="max-w-2xl">
            <Kicker>Kenya on the World Stage</Kicker>
            <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.05] tracking-tighter text-black sm:text-5xl lg:text-6xl">
              {t("A voice at every")}{" "}
              <span className="italic text-party-gold">
                {t("global table.")}
              </span>
            </h2>
            <p className="mt-5 max-w-lg text-balance text-base leading-relaxed text-black/50">
              {t(
                "From the UN General Assembly to the G20 roundtable — Kenya's stature on the world stage, chronicled."
              )}
            </p>
          </div>
        </Container>
      )}

      <div className="mt-16">
        <MasonryGallery />
      </div>

      <div className="mt-24 lg:mt-32">
        <ParallaxQuotes />
      </div>
    </section>
  );
}
