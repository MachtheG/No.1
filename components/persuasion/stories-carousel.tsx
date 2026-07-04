"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { Container } from "@/components/ui/container";
import { stories } from "@/data/stories";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n";

const EASE = [0.16, 1, 0.3, 1] as const;

export function StoriesCarousel() {
  const { t } = useT();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const story = stories[index]!;

  function go(delta: number) {
    setDirection(delta);
    setIndex((prev) => (prev + delta + stories.length) % stories.length);
  }

  return (
    <Container>
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-black/10 bg-black/[0.02] p-8 sm:p-12 lg:p-16">
        <Quote className="text-party-gold/40" size={40} />

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={story.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 24 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-party-gold">
              {story.name} &middot; {t(story.role)}, {story.location}
            </p>
            <p className="mt-4 text-balance font-display text-2xl font-medium italic leading-snug text-black sm:text-3xl">
              &ldquo;{t(story.quote)}&rdquo;
            </p>
            <div className="mt-8 flex items-start gap-3 rounded-xl border border-forest-400/20 bg-forest-500/[0.06] p-4">
              <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-forest-500" />
              <p className="text-sm leading-relaxed text-black/70">
                {t(story.outcome)}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex items-center justify-between">
          <div className="flex gap-2">
            {stories.map((s, i) => (
              <button
                key={s.id}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`Go to story ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index ? "w-8 bg-uda-500" : "w-1.5 bg-black/20"
                )}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-black/60 transition-colors hover:border-uda-500/50 hover:text-party-gold"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-black/60 transition-colors hover:border-uda-500/50 hover:text-party-gold"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
