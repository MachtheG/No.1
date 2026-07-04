"use client";

import { ArrowUpRight } from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { promises } from "@/data/promises";
import { useT } from "@/lib/i18n";

export function PromisesContent() {
  const { t } = useT();
  return (
    <>
      <PageHero
        kicker="My Promises"
        title="What I will"
        accent="deliver next."
        description="Delivery earns the right to promise more. These are my specific, measurable commitments for the chapter ahead."
      />

      <section className="border-t border-black/10 bg-white py-24 lg:py-32">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {promises.map((p) => (
              <div
                key={p.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-black/[0.02] p-7 transition-colors hover:border-party-yellow/40"
              >
                <div>
                  <span className="inline-flex rounded-full border border-party-yellow/30 bg-party-yellow/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-party-gold">
                    {t(p.horizon)}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-medium leading-snug text-black">
                    {t(p.title)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/50">
                    {t(p.pledge)}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="mt-6 text-black/20 transition-colors group-hover:text-party-gold"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
