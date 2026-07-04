"use client";

import { Mail, MapPin, Twitter, MessageSquareQuote } from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/badge";
import { AskForm } from "@/components/contact/ask-form";
import { answeredQuestions } from "@/data/answered";
import { useT } from "@/lib/i18n";

const CHANNELS = [
  {
    icon: Mail,
    label: "Correspondence",
    value: "Submit via the form below",
  },
  {
    icon: Twitter,
    label: "Social",
    value: "@WilliamsRuto",
  },
  {
    icon: MapPin,
    label: "State House",
    value: "Nairobi, Kenya",
  },
];

export function ContactContent() {
  const { t } = useT();
  return (
    <>
      <PageHero
        kicker="Ask the President"
        title="Have your"
        accent="say."
        description="Every household has a story or a question for this administration. Send yours directly — high-volume topics shape future Town Hall sessions."
      />

      <section className="border-t border-black/10 bg-white py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <div className="flex flex-col gap-5">
                {CHANNELS.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-4 rounded-2xl border border-black/10 bg-black/[0.02] p-5"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-party-yellow/10 text-party-gold">
                      <c.icon size={18} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-black/40">
                        {t(c.label)}
                      </p>
                      <p className="mt-0.5 text-sm text-black/85">
                        {t(c.value)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <AskForm />
          </div>
        </Container>
      </section>

      <section className="border-t border-black/10 bg-onyx-900 py-20 lg:py-28">
        <Container>
          <Kicker>Answered Questions</Kicker>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-medium leading-[1.05] tracking-tighter text-black sm:text-5xl">
            {t("Straight answers,")}{" "}
            <span className="italic text-party-gold">{t("on the record.")}</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm text-black/50">
            {t("A selection of moderated questions from Kenyans, answered directly.")}
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {answeredQuestions.map((q) => (
              <div
                key={q.id}
                className="rounded-2xl border border-black/10 bg-white p-6"
              >
                <div className="flex items-start gap-3">
                  <MessageSquareQuote
                    size={18}
                    className="mt-0.5 flex-shrink-0 text-party-gold"
                  />
                  <div>
                    <p className="font-display text-lg font-medium leading-snug text-black">
                      {t(q.question)}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-black/40">
                      {q.asker === "Anonymous" ? t("Anonymous") : q.asker}
                      &middot; {q.county}
                    </p>
                  </div>
                </div>
                <p className="mt-4 border-t border-black/10 pt-4 text-sm leading-relaxed text-black/65">
                  {t(q.answer)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
