"use client";

import { MessageSquareQuote, ShieldCheck, Clock, Video } from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/badge";
import { AskForm } from "@/components/contact/ask-form";
import { YoutubeEmbed } from "@/components/media/youtube-embed";
import { answeredQuestions } from "@/data/answered";
import { useT } from "@/lib/i18n";

const HOW = [
  {
    icon: ShieldCheck,
    title: "Submit — anonymously if you wish",
    body: "Every question goes into a moderation queue that filters spam and abuse before anything is published.",
  },
  {
    icon: Clock,
    title: "We answer in weekly batches",
    body: "The most-asked and most-important questions are selected and answered every week.",
  },
  {
    icon: Video,
    title: "Real answers — often on video",
    body: "Where it matters, you get a direct video response, not a press release.",
  },
];

export function QaContent() {
  const { t } = useT();
  return (
    <>
      <PageHero
        kicker="Q&A Town Hall"
        title="Your question."
        accent="A real answer."
        description="Ask the President directly. Moderated, answered in the open, and often on video — a town hall that fits in your pocket."
      />

      <section className="border-t border-black/10 bg-white py-20 lg:py-28">
        <Container>
          <div className="grid gap-4 sm:grid-cols-3">
            {HOW.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl border border-black/10 bg-onyx-900 p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-party-yellow/15 text-party-gold">
                  <h.icon size={18} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-black">
                  {t(h.title)}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-black/55">
                  {t(h.body)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <Kicker>Submit a Question</Kicker>
              <h2 className="mt-5 font-display text-3xl font-semibold text-black">
                {t("Ask the President")}
              </h2>
              <p className="mt-3 max-w-md text-sm text-black/55">
                {t(
                  "No question is too small. High-volume topics shape the next town-hall answers."
                )}
              </p>
              <div className="mt-6">
                <AskForm />
              </div>
            </div>

            <div>
              <Kicker>Recently Answered</Kicker>
              <div className="mt-6 flex flex-col gap-5">
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
                        <p className="font-display text-lg font-semibold leading-snug text-black">
                          {t(q.question)}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-widest text-black/40">
                          {q.asker === "Anonymous" ? t("Anonymous") : q.asker}{" "}
                          &middot; {q.county}
                        </p>
                      </div>
                    </div>
                    {q.youtubeId && (
                      <div className="mt-4">
                        <YoutubeEmbed
                          youtubeId={q.youtubeId}
                          title={q.question}
                        />
                      </div>
                    )}
                    <p className="mt-4 border-t border-black/10 pt-4 text-sm leading-relaxed text-black/65">
                      {t(q.answer)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
