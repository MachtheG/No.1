"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

import { answerFor } from "@/data/assistant-kb";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n";

interface Msg {
  from: "user" | "bot";
  text: string;
}

const GREETING: Msg = {
  from: "bot",
  text: "Hi! I'm the campaign assistant. Ask me about the record, manifesto, the 2027 election, or how to get involved.",
};

const SUGGESTIONS = ["What is the Hustler Fund?", "When is the election?", "How do I donate?"];

export function CampaignAssistant() {
  const { t } = useT();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, open]);

  function send(text: string) {
    const q = text.trim();
    if (!q) return;
    setMessages((m) => [...m, { from: "user", text: q }]);
    setInput("");
    window.setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: answerFor(q) }]);
    }, 350);
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={
          open ? t("Close assistant") : t("Open campaign assistant")
        }
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-party-yellow text-black shadow-lg transition-transform hover:scale-105"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-5 z-50 flex h-[28rem] w-[min(92vw,22rem)] flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl"
          >
            <div className="flex items-center gap-2 border-b border-black/10 bg-onyx-900 px-4 py-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-party-yellow text-black">
                <MessageCircle size={15} />
              </span>
              <div>
                <p className="text-sm font-semibold text-black">
                  {t("Campaign Assistant")}
                </p>
                <p className="text-[11px] text-black/45">
                  {t("Answers from campaign content")}
                </p>
              </div>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                    m.from === "user"
                      ? "ml-auto bg-party-yellow/20 text-black"
                      : "bg-black/[0.04] text-black/80"
                  )}
                >
                  {m.from === "bot" ? t(m.text) : m.text}
                </div>
              ))}

              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="rounded-full border border-black/10 px-3 py-1.5 text-xs text-black/60 transition-colors hover:border-party-yellow/60 hover:text-black"
                    >
                      {t(s)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-black/10 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("Ask a question…")}
                className="flex-1 rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm text-black placeholder:text-black/30 focus:border-party-yellow/60 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Send"
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-party-yellow text-black transition-transform hover:scale-105"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
