"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

const TOPICS = [
  "Healthcare (SHA)",
  "Housing",
  "Hustler Fund / Economy",
  "Agriculture",
  "Diplomacy",
  "General Feedback",
];

export function AskForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 900);
  }

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-3 rounded-2xl border border-forest-400/30 bg-forest-500/10 px-8 py-16 text-center"
        >
          <CheckCircle2 className="text-forest-600" size={40} />
          <p className="font-display text-xl font-medium text-black">
            Your message has been received.
          </p>
          <p className="max-w-sm text-sm text-black/50">
            The correspondence team reviews every submission. High-volume
            topics inform future Town Hall Q&amp;A sessions.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          className="glass-panel flex flex-col gap-4 rounded-3xl p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-widest text-black/40">
                Full Name
              </label>
              <input
                required
                type="text"
                placeholder="Jane Wanjiku"
                className="w-full rounded-xl border border-black/10 bg-onyx-950/60 px-4 py-3.5 text-sm text-black placeholder:text-black/30 focus:border-party-yellow/60 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-widest text-black/40">
                Email Address
              </label>
              <input
                required
                type="email"
                placeholder="jane@example.com"
                className="w-full rounded-xl border border-black/10 bg-onyx-950/60 px-4 py-3.5 text-sm text-black placeholder:text-black/30 focus:border-party-yellow/60 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-widest text-black/40">
              Topic
            </label>
            <select
              required
              defaultValue=""
              className="w-full rounded-xl border border-black/10 bg-onyx-950/60 px-4 py-3.5 text-sm text-black/70 focus:border-party-yellow/60 focus:outline-none"
            >
              <option value="" disabled>
                Select a topic
              </option>
              {TOPICS.map((t) => (
                <option key={t} value={t} className="bg-onyx-900">
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-widest text-black/40">
              Your Message
            </label>
            <textarea
              required
              rows={5}
              placeholder="Ask a question or share your feedback..."
              className="w-full resize-none rounded-xl border border-black/10 bg-onyx-950/60 px-4 py-3.5 text-sm text-black placeholder:text-black/30 focus:border-party-yellow/60 focus:outline-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="mt-2 w-full sm:w-auto sm:self-start"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
            <ArrowRight size={16} />
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
