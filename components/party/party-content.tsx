"use client";

import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { partyProfile, partyValues } from "@/data/party";
import { useT } from "@/lib/i18n";

export function PartyContent() {
  const { t } = useT();
  return (
    <>
      <PageHero
        kicker="The Party"
        title="United Democratic"
        accent="Alliance."
        description={`${t(partyProfile.sloganMeaning)} — the political vehicle of the bottom-up movement, built on the symbol of the wheelbarrow.`}
      />

      <section className="border-t border-black/10 bg-white py-24 lg:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <Kicker>Party Profile</Kicker>
              <dl className="mt-8 space-y-6">
                {[
                  ["Full Name", `${partyProfile.name} (${partyProfile.abbreviation})`],
                  ["Founded", partyProfile.founded],
                  ["Symbol", t(partyProfile.symbol)],
                  ["Slogan", `"${partyProfile.slogan}" — ${t(partyProfile.sloganMeaning)}`],
                  ["Party Leader", partyProfile.leader],
                  ["Coalition", partyProfile.coalition],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="border-b border-black/10 pb-5 last:border-0"
                  >
                    <dt className="text-xs uppercase tracking-widest text-black/40">
                      {t(label!)}
                    </dt>
                    <dd className="mt-2 text-base text-black/90">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <Kicker>Party Colors</Kicker>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {partyProfile.colors.map((c) => (
                  <div
                    key={c.name}
                    className="overflow-hidden rounded-2xl border border-black/10"
                  >
                    <div
                      className="h-24 w-full"
                      style={{ backgroundColor: c.hex }}
                    />
                    <div className="bg-black/[0.02] px-4 py-3">
                      <p className="text-sm font-medium text-black">
                        {t(c.name)}
                      </p>
                      <p className="font-mono text-xs text-black/40">
                        {c.hex}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-party-yellow/20 bg-party-yellow/[0.05] p-6">
                <p className="text-sm leading-relaxed text-black/70">
                  {t(partyProfile.symbolMeaning)}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-black/10 bg-onyx-900 py-24 lg:py-32">
        <Container>
          <Kicker>What We Stand For</Kicker>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-medium leading-[1.05] tracking-tighter text-black sm:text-5xl">
            {t("A philosophy, not just")}{" "}
            <span className="italic text-forest-600">{t("a manifesto.")}</span>
          </h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {partyValues.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-black/10 bg-black/[0.02] p-7"
              >
                <h3 className="font-display text-xl font-medium text-black">
                  {t(v.title)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-black/50">
                  {t(v.description)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start gap-6 rounded-3xl border border-black/10 bg-gradient-to-br from-party-yellow/[0.08] to-transparent p-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-2xl font-medium text-black">
                {t("Become a card-carrying member.")}
              </h3>
              <p className="mt-2 max-w-md text-sm text-black/50">
                {t(
                  "Join the grassroots structure that put the wheelbarrow on the national ballot."
                )}
              </p>
            </div>
            <Button size="lg" asChild>
              <a href="/why-ruto#pledge">{t("Join UDA")}</a>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
