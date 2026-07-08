"use client";

import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/badge";
import { CountdownTimer } from "@/components/elections/countdown-timer";
import { ElectionHeatmap } from "@/components/elections/election-heatmap";
import { VoterCheck } from "@/components/elections/voter-check";
import {
  nextElectionDate,
  nextElectionLabel,
  nationalResult2022,
} from "@/data/elections";
import { useT } from "@/lib/i18n";

export function ElectionsContent() {
  const { t } = useT();
  return (
    <>
      <PageHero
        kicker="Election Center"
        title="The next chapter"
        accent="is being written."
        description={`IEBC has confirmed ${nextElectionLabel} for Tuesday, 10 August 2027. Here is the countdown, and the full record of how Kenya voted last time.`}
      />

      <section className="border-t border-black/10 bg-white py-20 lg:py-28">
        <Container>
          <div className="flex flex-col items-center gap-6 rounded-3xl border border-party-yellow/20 bg-gradient-to-b from-party-yellow/[0.06] to-transparent p-5 text-center sm:gap-8 sm:p-10 lg:p-16">
            <Kicker>
              {t("Countdown to")} {nextElectionLabel}
            </Kicker>
            <CountdownTimer target={nextElectionDate} />
            <p className="max-w-md text-sm text-black/45">
              {t(
                "Election Day: Tuesday, 10 August 2027 — as confirmed by the Independent Electoral and Boundaries Commission (IEBC)."
              )}
            </p>
          </div>

          <div className="mt-8">
            <VoterCheck />
          </div>
        </Container>
      </section>

      <section className="border-t border-black/10 bg-onyx-900 py-24 lg:py-32">
        <Container>
          <Kicker>The 2022 Result</Kicker>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-medium leading-[1.05] tracking-tighter text-black sm:text-5xl">
            {t("A mandate, county by")}{" "}
            <span className="italic text-party-gold">{t("county.")}</span>
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-party-yellow/30 bg-party-yellow/[0.06] p-7">
              <p className="text-xs uppercase tracking-widest text-party-gold/80">
                William Ruto — Kenya Kwanza
              </p>
              <p className="mt-3 font-display text-4xl font-semibold text-black">
                {nationalResult2022.ruto.pct}%
              </p>
              <p className="mt-1 text-sm text-black/50">
                {nationalResult2022.ruto.votes.toLocaleString()} {t("votes")}
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-7">
              <p className="text-xs uppercase tracking-widest text-black/50">
                The Late Raila Odinga (Baba) — Azimio
              </p>
              <p className="mt-3 font-display text-4xl font-semibold text-black">
                {nationalResult2022.odinga.pct}%
              </p>
              <p className="mt-1 text-sm text-black/50">
                {nationalResult2022.odinga.votes.toLocaleString()} {t("votes")}
              </p>
            </div>
          </div>
          <p className="mt-4 text-xs text-black/30">
            {t("Declared")} {nationalResult2022.date}. {t("Source:")}{" "}
            {nationalResult2022.source}.
          </p>

          <div className="mt-16">
            <ElectionHeatmap />
          </div>
        </Container>
      </section>
    </>
  );
}
