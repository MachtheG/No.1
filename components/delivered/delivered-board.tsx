"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Container } from "@/components/ui/container";
import { deliveredItems, sectors, type Sector } from "@/data/delivered";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n";

const EASE = [0.16, 1, 0.3, 1] as const;

export function DeliveredBoard() {
  const { t } = useT();
  const [filter, setFilter] = useState<Sector | "all">("all");

  const filtered = useMemo(
    () =>
      filter === "all"
        ? deliveredItems
        : deliveredItems.filter((i) => i.sector === filter),
    [filter]
  );

  return (
    <Container>
      <div className="flex flex-wrap gap-2.5">
        <button
          onClick={() => setFilter("all")}
          className={cn(
            "rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-widest transition-colors",
            filter === "all"
              ? "border-uda-500 bg-uda-500/10 text-party-gold"
              : "border-black/10 text-black/50 hover:border-black/25 hover:text-black/80"
          )}
        >
          {t("All Sectors")}
        </button>
        {sectors.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-widest transition-colors",
              filter === s
                ? "border-uda-500 bg-uda-500/10 text-party-gold"
                : "border-black/10 text-black/50 hover:border-black/25 hover:text-black/80"
            )}
          >
            {t(s)}
          </button>
        ))}
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((item, i) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: EASE, delay: (i % 6) * 0.04 }}
              className="flex flex-col rounded-2xl border border-black/10 bg-black/[0.02] p-6"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex rounded-full border border-forest-500/30 bg-forest-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-forest-700">
                  {t(item.sector)}
                </span>
                <span className="text-[11px] uppercase tracking-widest text-black/40">
                  {t(item.county)}
                </span>
              </div>
              <p className="mt-5 font-display text-3xl font-semibold text-party-gold">
                {item.metric}
              </p>
              <p className="text-xs uppercase tracking-widest text-black/40">
                {t(item.metricLabel)}
              </p>
              <h3 className="mt-4 font-display text-lg font-medium text-black">
                {t(item.title)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black/50">
                {t(item.blurb)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </Container>
  );
}
