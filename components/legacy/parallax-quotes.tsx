"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";

import { legacyQuotes } from "@/data/gallery";

function ParallaxQuote({
  quote,
  attribution,
  index,
}: {
  quote: string;
  attribution: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    index % 2 === 0 ? [80, -80] : [-80, 80]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [0.15, 1, 1, 0.15]
  );

  return (
    <div ref={ref} className="py-16 lg:py-24">
      <motion.div
        style={{ y, opacity }}
        className="mx-auto max-w-4xl px-6 text-center lg:px-10"
      >
        <Quote className="mx-auto mb-6 text-party-gold/50" size={32} />
        <p className="text-balance font-display text-2xl font-medium italic leading-snug text-black sm:text-3xl lg:text-4xl">
          &ldquo;{quote}&rdquo;
        </p>
        <p className="mt-6 font-mono text-xs uppercase tracking-widest text-black/40">
          &mdash; {attribution}
        </p>
      </motion.div>
    </div>
  );
}

export function ParallaxQuotes() {
  return (
    <div className="relative">
      {legacyQuotes.map((q, i) => (
        <ParallaxQuote
          key={q.id}
          quote={q.quote}
          attribution={q.attribution}
          index={i}
        />
      ))}
    </div>
  );
}
