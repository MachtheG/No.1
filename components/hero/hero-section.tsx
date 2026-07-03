"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Kicker } from "@/components/ui/badge";
import { QuickStatsBar } from "@/components/hero/quick-stats-bar";
import { unsplash } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-onyx-950 noise-overlay"
    >
      {/* Cinematic background layer — swap this div's background for a <video> element in production */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10 scale-110"
      >
        <Image
          src={unsplash("photo-1741991110666-88115e724741", 2400)}
          alt="Nairobi skyline"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,rgba(255,215,0,0.14),transparent_60%),radial-gradient(ellipse_100%_60%_at_85%_100%,rgba(0,100,0,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx-950/40 via-onyx-950/70 to-onyx-950" />
      </motion.div>

      <Container className="flex flex-1 flex-col justify-center pt-28 pb-16 sm:pt-32 sm:pb-24">
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="flex flex-col items-start"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          >
            <Kicker>The Fifth President of the Republic of Kenya</Kicker>
          </motion.div>

          <h1 className="mt-8 max-w-5xl text-balance font-display text-[clamp(2.75rem,7vw,7.5rem)] font-medium leading-[0.95] tracking-tightest text-black">
            {["THE ARCHITECT", "OF MODERN"].map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 0.2 + i * 0.12 }}
                className="block overflow-hidden"
              >
                {line}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.44 }}
              className="block bg-gradient-to-r from-uda-300 via-uda-500 to-uda-600 bg-clip-text italic text-transparent"
            >
              KENYA.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
            className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-black/60"
          >
            A bottom-up economic revolution. Universal healthcare for every
            household. Dignified homes for the working class. His Excellency
            Dr. William Samoei Ruto is rewriting what a nation can deliver for
            its people — measured in results, not rhetoric.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.75 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button size="lg" asChild>
              <a href="#pledge">Join the Movement</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#ledger">Explore the Ledger</a>
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
        className="relative z-10"
      >
        <QuickStatsBar />
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-[7.5rem] left-1/2 hidden -translate-x-1/2 text-black/30 lg:block"
      >
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
