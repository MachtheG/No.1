"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/badge";

const EASE = [0.16, 1, 0.3, 1] as const;

export function PageHero({
  kicker,
  title,
  accent,
  description,
}: {
  kicker: string;
  title: string;
  accent?: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-black/10 bg-white pb-12 pt-28 sm:pb-16 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_100%_60%_at_50%_-10%,rgba(255,215,0,0.10),transparent_60%)]" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-party-yellow via-party-yellow to-party-green" />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <Kicker>{kicker}</Kicker>
          <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-medium leading-[1.05] tracking-tighter text-black sm:text-5xl lg:text-6xl">
            {title}
            {accent && (
              <span className="italic text-forest-600"> {accent}</span>
            )}
          </h1>
          <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-black/55">
            {description}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
