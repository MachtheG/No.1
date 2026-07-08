"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { QuickStatsBar } from "@/components/hero/quick-stats-bar";
import { useT } from "@/lib/i18n";
import { CAMPAIGN } from "@/data/campaign";

const EASE = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  const { t } = useT();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-black"
    >
      {/* Background: campaign banner, with a scrim so the copy stays legible */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 scale-105 sm:scale-110">
        <Image
          src="/images/banner3.jpg"
          alt="President William Ruto campaign banner"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[center_20%] sm:object-center"
        />
        {/* On mobile the headline sits over the subject, so darken the whole frame a
            little and lean on the bottom gradient. On larger screens, darken the left
            (behind the headline) and keep the right of the banner clearly visible. */}
        <div className="absolute inset-0 bg-black/40 sm:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 sm:via-black/40 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent sm:via-black/10" />
      </motion.div>

      <Container className="relative z-10 flex flex-1 flex-col justify-center pt-32 pb-14 sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col items-start"
        >
          {/* Slogan badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-party-yellow/40 bg-party-yellow/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-party-yellow">
            {CAMPAIGN.slogan}
            <span className="hidden text-party-yellow/60 sm:inline">
              &middot; {t(CAMPAIGN.sloganEn)}
            </span>
          </span>

          {/* One sharp headline */}
          <h1 className="mt-7 max-w-4xl font-display text-[clamp(3rem,9vw,7rem)] font-semibold uppercase leading-[0.9] tracking-tighter text-white">
            {t("Promises made.")}
            <br />
            <span className="text-party-yellow">{t("Promises kept.")}</span>
          </h1>

          {/* One supporting line */}
          <p className="mt-6 max-w-xl text-lg font-medium text-white/70">
            {t("Re-elect President William Ruto — 2027.")}
          </p>

          {/* One primary action */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button size="lg" asChild>
              <Link href="/why-ruto#pledge">
                {t("Join the Movement")}
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Link
              href="/achievements"
              className="text-sm font-semibold uppercase tracking-widest text-white/70 underline-offset-4 transition-colors hover:text-party-yellow hover:underline"
            >
              {t("See the record")}
            </Link>
          </div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
        className="relative z-10"
      >
        <QuickStatsBar />
      </motion.div>
    </section>
  );
}
