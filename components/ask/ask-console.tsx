"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles, ExternalLink, BadgeCheck } from "lucide-react";

import { Container } from "@/components/ui/container";
import { answerFor, type KBSource } from "@/data/assistant-kb";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n";

interface Msg {
  from: "user" | "bot";
  text: string;
  source?: KBSource;
}

const SUGGESTIONS = [
  "What is the Hustler Fund?",
  "How does SHA work?",
  "What is the housing plan?",
  "What are the manifesto pillars?",
  "When is the 2027 election?",
];

export function AskConsole() {
  const { t, lang } = useT();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  function send(text: string) {
    const q = text.trim();
    if (!q) return;
    setMessages((m) => [...m, { from: "user", text: q }]);
    setInput("");
    window.setTimeout(() => {
      const res = answerFor(q, lang);
      setMessages((m) => [
        ...m,
        { from: "bot", text: res.answer, source: res.source },
      ]);
    }, 400);
  }

  return (
    <Container className="pb-24">
      <div className="mx-auto max-w-3xl">
        <div className="flex min-h-[24rem] flex-col gap-4 rounded-3xl border-2 border-black/10 bg-white p-5 sm:p-8">
          <div
            ref={scrollRef}
            className="flex max-h-[50vh] flex-1 flex-col gap-4 overflow-y-auto"
          >
            {messages.length === 0 && (
              <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-party-yellow text-black">
                  <Sparkles size={22} />
                </span>
                <p className="mt-4 max-w-md text-sm text-black/55">
                  {t(
                    "Ask any question about the manifesto or the record. Answers come only from published campaign content, with a source you can check."
                  )}
                </p>
              </div>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className={cn(
                  "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                  m.from === "user"
                    ? "ml-auto bg-black text-white"
                    : "bg-onyx-800 text-black"
                )}
              >
                <p>{m.text}</p>
                {m.source && (
                  <a
                    href={m.source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-party-yellow/50 bg-party-yellow/10 px-3 py-1.5 text-xs font-semibold text-party-gold transition-colors hover:bg-party-yellow/20"
                  >
                    <BadgeCheck size={13} />
                    {m.source.label}
                    <ExternalLink size={11} />
                  </a>
                )}
              </div>
            ))}
          </div>

          {messages.length === 0 && (
            <div className="flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-black/10 px-3 py-1.5 text-xs font-medium text-black/60 transition-colors hover:border-party-yellow hover:text-black"
                >
                  {t(s)}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-black/10 pt-4"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t("Ask about the plan…")}
              className="min-w-0 flex-1 rounded-full border-2 border-black/10 bg-white px-5 py-3 text-sm text-black placeholder:text-black/30 focus:border-party-yellow focus:outline-none"
            />
            <motion.button
              type="submit"
              aria-label={t("Send")}
              whileTap={{ scale: 0.92 }}
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-party-yellow text-black"
            >
              <Send size={18} />
            </motion.button>
          </form>
        </div>

        <p className="mt-4 text-center text-xs text-black/40">
          {t(
            "This assistant answers only from published campaign material and cites its source. It does not use open web knowledge."
          )}
        </p>
      </div>
    </Container>
  );
}
