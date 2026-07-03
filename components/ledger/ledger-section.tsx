"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/badge";
import { milestones, pillarMeta, type Pillar } from "@/data/milestones";
import { MilestoneCard } from "@/components/ledger/milestone-card";
import { cn } from "@/lib/utils";

const FILTERS: { id: Pillar | "all"; label: string }[] = [
  { id: "all", label: "All Pillars" },
  { id: "economy", label: pillarMeta.economy.label },
  { id: "health", label: pillarMeta.health.label },
  { id: "housing", label: pillarMeta.housing.label },
  { id: "diplomacy", label: pillarMeta.diplomacy.label },
];

export function LedgerSection({
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
  const [filter, setFilter] = useState<Pillar | "all">("all");

  const filtered = useMemo(
    () =>
      filter === "all"
        ? milestones
        : milestones.filter((m) => m.pillar === filter),
    [filter]
  );

  return (
    <section
      id="ledger"
      className={cn(
        "relative bg-onyx-950",
        showHeading ? "py-28 lg:py-36" : "pb-28 pt-4 lg:pb-36"
      )}
    >
      <Container>
        {showHeading && (
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <Kicker>The Transformation Ledger</Kicker>
              <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.05] tracking-tighter text-black sm:text-5xl lg:text-6xl">
                Every milestone,{" "}
                <span className="italic text-party-gold">verified.</span>
              </h2>
              <p className="mt-5 max-w-lg text-balance text-base leading-relaxed text-black/50">
                A running record of policy converted into outcomes — audited
                across the four pillars defining this administration&apos;s
                legacy.
              </p>
            </div>
          </div>
        )}

        <div className={cn("flex flex-wrap gap-2.5", showHeading ? "mt-12 lg:mt-16" : "mt-0")}>
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "relative rounded-full border px-5 py-2.5 text-xs font-medium uppercase tracking-widest transition-colors",
                filter === f.id
                  ? "border-uda-500/60 bg-uda-500/10 text-party-gold"
                  : "border-black/10 text-black/50 hover:border-black/25 hover:text-black/80"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-12">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((milestone, index) => (
                <MilestoneCard
                  key={milestone.id}
                  milestone={milestone}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
