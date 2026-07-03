import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/badge";
import { MasonryGallery } from "@/components/legacy/masonry-gallery";
import { ParallaxQuotes } from "@/components/legacy/parallax-quotes";

export function LegacySection({
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
  return (
    <section id="legacy" className="relative bg-onyx-950 py-28 lg:py-36">
      {showHeading && (
        <Container>
          <div className="max-w-2xl">
            <Kicker>The Ego &amp; Legacy Vault</Kicker>
            <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.05] tracking-tighter text-black sm:text-5xl lg:text-6xl">
              A voice at every{" "}
              <span className="italic text-party-gold">global table.</span>
            </h2>
            <p className="mt-5 max-w-lg text-balance text-base leading-relaxed text-black/50">
              From the UN General Assembly to the G20 roundtable — Kenya&apos;s
              stature on the world stage, chronicled.
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
