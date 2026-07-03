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
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = demographics.find((d) => d.id === selectedId) ?? null;

  return (
    <div className="rounded-3xl border border-black/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 lg:p-12">
      <div className="max-w-2xl">
        <Kicker>See Your Future in the Vision</Kicker>
        <h3 className="mt-6 text-balance font-display text-3xl font-medium leading-tight text-black sm:text-4xl">
          Select who you are. See what the administration delivers for you.
        </h3>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {demographics.map((demo) => {
          const Icon = ICONS[demo.icon];
          const active = demo.id === selectedId;
          return (
            <button
              key={demo.id}
              onClick={() => setSelectedId(active ? null : demo.id)}
              className={cn(
                "flex flex-col items-center gap-3 rounded-2xl border px-4 py-6 text-center transition-all duration-300",
                active
                  ? "border-uda-500 bg-uda-500/10 text-party-gold"
                  : "border-black/10 text-black/60 hover:border-black/25 hover:text-black/90"
              )}
            >
              <Icon size={24} strokeWidth={1.6} />
              <span className="text-xs font-medium leading-tight">
                {demo.label}
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="mt-10 grid gap-4 border-t border-black/10 pt-10 sm:grid-cols-3">
              {selected.benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE, delay: i * 0.08 }}
                  className="rounded-xl border border-black/10 bg-onyx-950/40 p-5"
                >
                  <CheckCircle2 className="text-forest-600" size={20} />
                  <p className="mt-3 font-display text-base font-medium text-black">
                    {benefit.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-black/50">
                    {benefit.detail}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.a
              href="#pledge"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-party-gold transition-colors hover:text-party-gold"
            >
              Claim your place in this vision
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
