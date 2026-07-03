import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/badge";
import { StoriesCarousel } from "@/components/persuasion/stories-carousel";
import { FutureCalculator } from "@/components/persuasion/future-calculator";
import { PledgeCta } from "@/components/persuasion/pledge-cta";

export function PersuasionSection({
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
  return (
    <section id="voices" className="relative bg-onyx-900 py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {showHeading && (
        <Container>
          <div className="max-w-2xl">
            <Kicker>Voices of Kenya</Kicker>
            <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.05] tracking-tighter text-black sm:text-5xl lg:text-6xl">
              Policy, felt in the{" "}
              <span className="italic text-forest-600">household.</span>
            </h2>
            <p className="mt-5 max-w-lg text-balance text-base leading-relaxed text-black/50">
              Behind every statistic is a name. This is what transformation
              looks like on the ground, in the words of the Kenyans living it.
            </p>
          </div>
        </Container>
      )}

      <div className="mt-16">
        <StoriesCarousel />
      </div>

      <Container className="mt-28 lg:mt-36">
        <FutureCalculator />
      </Container>

      <Container className="mt-28 lg:mt-36" id="pledge">
        <PledgeCta />
      </Container>
    </section>
  );
}
