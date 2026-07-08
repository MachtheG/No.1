"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sprout,
  Bike,
  Store,
  GraduationCap,
  Hammer,
  Stethoscope,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { Kicker } from "@/components/ui/badge";
import { demographics, type Demographic } from "@/data/demographics";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n";

const EASE = [0.16, 1, 0.3, 1] as const;

const ICONS: Record<Demographic["icon"], typeof Sprout> = {
  sprout: Sprout,
  bike: Bike,
  store: Store,
  "graduation-cap": GraduationCap,
  hammer: Hammer,
  stethoscope: Stethoscope,
};

export function FutureCalculator() {
  const { t } = useT();
  // Default to the first persona so differentiated content is always visible
  // and the selector visibly changes when a new persona is picked.
  const [selectedId, setSelectedId] = useState<string>(demographics[0]!.id);
  const selected = demographics.find((d) => d.id === selectedId)!;

  return (
    <div className="rounded-3xl border-2 border-black/10 bg-white p-6 lg:p-12">
      <div className="max-w-2xl">
        <Kicker>See Your Future in the Vision</Kicker>
        <h3 className="mt-6 text-balance font-display text-3xl font-semibold leading-tight text-black sm:text-4xl">
          {t("Select who you are. See what the administration delivers for you.")}
        </h3>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {demographics.map((demo) => {
          const Icon = ICONS[demo.icon];
          const active = demo.id === selectedId;
          return (
            <button
              key={demo.id}
              aria-pressed={active}
              onClick={() => setSelectedId(demo.id)}
              className={cn(
                "flex flex-col items-center gap-3 rounded-2xl border-2 px-4 py-6 text-center transition-all duration-300",
                active
                  ? "border-party-yellow bg-party-yellow/15 text-black shadow-[0_4px_20px_-6px_rgba(255,199,0,0.6)]"
                  : "border-black/10 text-black/60 hover:border-black/25 hover:text-black/90"
              )}
            >
              <Icon size={24} strokeWidth={1.8} />
              <span className="text-xs font-semibold leading-tight">
                {t(demo.label)}
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <p className="mt-10 border-t border-black/10 pt-8 text-sm font-semibold uppercase tracking-widest text-party-gold">
            {t("For a")} {t(selected.label)}:
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {selected.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-black/10 bg-onyx-900 p-5"
              >
                <CheckCircle2 className="text-forest-600" size={20} />
                <p className="mt-3 font-display text-base font-semibold text-black">
                  {t(benefit.title)}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-black/55">
                  {t(benefit.detail)}
                </p>
              </div>
            ))}
          </div>
          <a
            href="#pledge"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-party-gold transition-colors hover:text-forest-600"
          >
            {t("Claim your place in this vision")}
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
