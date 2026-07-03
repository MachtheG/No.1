"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { Container } from "@/components/ui/container";
import { stories } from "@/data/stories";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export function StoriesCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const story = stories[index]!;

  function go(delta: number) {
    setDirection(delta);
    setIndex((prev) => (prev + delta + stories.length) % stories.length);
  }

  return (
    <Container>
      <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-black/[0.02]">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden bg-onyx-800 lg:aspect-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-forest-900/50 via-onyx-900 to-onyx-950" />
            <AnimatePresence mode="wait">
              <motion.div
                key={story.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="absolute inset-0"
              >
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover opacity-0 transition-opacity duration-700"
                  onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-onyx-950 to-transparent p-8">
              <p className="font-display text-xl font-medium text-black">
                {story.name}
              </p>
              <p className="text-sm text-black/50">
                {story.role} &middot; {story.location}
              </p>
            </div>
          </div>

          <div className="relative flex flex-col justify-center p-8 lg:p-14">
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
                <p className="mt-6 text-balance font-display text-2xl font-medium italic leading-snug text-black lg:text-3xl">
                  &ldquo;{story.quote}&rdquo;
                </p>
                <div className="mt-8 flex items-start gap-3 rounded-xl border border-forest-400/20 bg-forest-500/[0.06] p-4">
                  <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-forest-400" />
                  <p className="text-sm leading-relaxed text-black/70">
                    {story.outcome}
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
                      i === index ? "w-8 bg-uda-500" : "w-1.5 bg-white/20"
                    )}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous story"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-black/60 transition-colors hover:border-uda-500/50 hover:text-party-gold"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Next story"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-black/60 transition-colors hover:border-uda-500/50 hover:text-party-gold"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
