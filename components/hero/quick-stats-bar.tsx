"use client";

import { Container } from "@/components/ui/container";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { quickStats } from "@/data/stats";
import { useT } from "@/lib/i18n";

export function QuickStatsBar() {
  const { t } = useT();
  return (
    <Container className="pb-10">
      <div className="glass-panel grid grid-cols-2 gap-px overflow-hidden rounded-2xl lg:grid-cols-4">
        {quickStats.map((stat, i) => (
          <div
            key={stat.id}
            className="group relative flex flex-col gap-1.5 bg-onyx-950/40 px-6 py-6 transition-colors hover:bg-black/[0.04] lg:px-8 lg:py-7"
          >
            {i > 0 && (
              <span className="absolute inset-y-0 left-0 hidden w-px bg-black/10 lg:block" />
            )}
            <div className="flex items-baseline gap-0.5 font-display text-3xl font-medium text-black lg:text-4xl">
              <AnimatedCounter
                value={stat.value}
                decimals={stat.value % 1 !== 0 ? 1 : 0}
              />
              <span className="text-party-gold">{stat.suffix}</span>
            </div>
            <p className="text-sm font-medium text-black/80">{t(stat.label)}</p>
            <p className="text-xs text-black/40">{t(stat.sublabel)}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
