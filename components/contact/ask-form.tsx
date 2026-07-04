"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";

const TOPICS = [
  "Healthcare (SHA)",
  "Housing",
  "Hustler Fund / Economy",
  "Agriculture",
  "Diplomacy",
  "General Feedback",
];

export function AskForm() {
  const { t } = useT();
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const [anonymous, setAnonymous] = useState(false);

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
            {t("Your message has been received.")}
          </p>
          <p className="max-w-sm text-sm text-black/50">
            {t(
              "The correspondence team reviews every submission. High-volume topics inform future Town Hall Q&A sessions."
            )}
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
                {t("Full Name")}
              </label>
              <input
                required={!anonymous}
                disabled={anonymous}
                type="text"
                placeholder={
                  anonymous ? t("Hidden — anonymous") : "Jane Wanjiku"
                }
                className="w-full rounded-xl border border-black/10 bg-onyx-950/60 px-4 py-3.5 text-sm text-black placeholder:text-black/30 focus:border-party-yellow/60 focus:outline-none disabled:opacity-40"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-widest text-black/40">
                {t("Email Address")}
              </label>
              <input
                required={!anonymous}
                disabled={anonymous}
                type="email"
                placeholder={
                  anonymous ? t("Hidden — anonymous") : "jane@example.com"
                }
                className="w-full rounded-xl border border-black/10 bg-onyx-950/60 px-4 py-3.5 text-sm text-black placeholder:text-black/30 focus:border-party-yellow/60 focus:outline-none disabled:opacity-40"
              />
            </div>
          </div>

          <label className="flex items-center gap-2.5 text-sm text-black/60">
            <input
              type="checkbox"
              checked={anonymous}
              onChange={(e) => setAnonymous(e.target.checked)}
              className="h-4 w-4 rounded border-black/20 accent-party-yellow"
            />
            {t("Submit anonymously (your name and email will not be shown)")}
          </label>

          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-widest text-black/40">
              {t("Topic")}
            </label>
            <select
              required
              defaultValue=""
              className="w-full rounded-xl border border-black/10 bg-onyx-950/60 px-4 py-3.5 text-sm text-black/70 focus:border-party-yellow/60 focus:outline-none"
            >
              <option value="" disabled>
                {t("Select a topic")}
              </option>
              {TOPICS.map((topic) => (
                <option key={topic} value={topic} className="bg-onyx-900">
                  {t(topic)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-widest text-black/40">
              {t("Your Message")}
            </label>
            <textarea
              required
              rows={5}
              placeholder={t("Ask a question or share your feedback...")}
              className="w-full resize-none rounded-xl border border-black/10 bg-onyx-950/60 px-4 py-3.5 text-sm text-black placeholder:text-black/30 focus:border-party-yellow/60 focus:outline-none"
            />
          </div>

          <p className="text-xs leading-relaxed text-black/40">
            {t(
              "Every submission passes through a moderation queue before it can appear in the public Q&A. Selected questions are answered in regular batches."
            )}
          </p>

          <Button
            type="submit"
            size="lg"
            className="mt-2 w-full sm:w-auto sm:self-start"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? t("Sending...") : t("Send Message")}
            <ArrowRight size={16} />
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
