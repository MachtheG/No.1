"use client";

import { Container } from "@/components/ui/container";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { quickStats } from "@/data/stats";
import { useT } from "@/lib/i18n";

export function QuickStatsBar() {
  const { t } = useT();
  return (
    <Container className="pb-10">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {quickStats.map((stat) => (
          <div
            key={stat.id}
            className="min-w-0 rounded-xl border border-party-yellow/20 bg-white/[0.04] px-4 py-4 backdrop-blur-sm sm:px-5 sm:py-5 lg:px-6 lg:py-6"
          >
            <div className="flex items-baseline gap-0.5 font-display text-[clamp(1.5rem,7vw,2.25rem)] font-bold leading-none tracking-tight tabular-nums text-party-yellow lg:text-5xl">
              <AnimatedCounter
                value={stat.value}
                decimals={stat.value % 1 !== 0 ? 1 : 0}
              />
              <span>{stat.suffix}</span>
            </div>
            <p className="mt-2 text-sm font-semibold text-white">
              {t(stat.label)}
            </p>
            <p className="text-xs text-white/50">{t(stat.sublabel)}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
