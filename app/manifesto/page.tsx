import type { Metadata } from "next";

import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { manifestoPillars, manifestoSource } from "@/data/manifesto";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "My Manifesto",
  description:
    "My manifesto — the Bottom-Up Economic Transformation Agenda, pillar by pillar.",
};

export default function ManifestoPage() {
  return (
    <>
      <PageHero
        kicker="My Manifesto"
        title="The Bottom-Up"
        accent="Economic Transformation Agenda."
        description="Five pillars, one philosophy: channel scarce resources to the base of the economic pyramid first. This is my plan."
      />

      <section className="border-t border-black/10 bg-white py-24 lg:py-32">
        <Container>
          <div className="flex flex-col gap-16">
            {manifestoPillars.map((pillar, i) => (
              <div
                key={pillar.id}
                className="grid grid-cols-[auto_1fr] items-start gap-4 border-b border-black/10 pb-12 last:border-0 last:pb-0 sm:gap-8 sm:pb-16 lg:grid-cols-[auto_1fr] lg:gap-14"
              >
                <span
                  className={
                    "font-display text-4xl font-semibold leading-none sm:text-6xl lg:text-7xl " +
                    (i % 2 === 0 ? "text-party-gold/30" : "text-forest-400/30")
                  }
                >
                  {pillar.number}
                </span>
                <div>
                  <h2 className="font-display text-3xl font-medium leading-tight text-black sm:text-4xl">
                    {pillar.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/55">
                    {pillar.summary}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {pillar.commitments.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-2.5 text-sm text-black/70"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 flex-shrink-0 text-forest-600"
                        />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-16 text-xs text-black/30">{manifestoSource}</p>
        </Container>
      </section>
    </>
  );
}
