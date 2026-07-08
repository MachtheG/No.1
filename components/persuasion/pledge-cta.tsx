"use client";

import { useEffect, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";
import { CAMPAIGN, whatsappLink } from "@/data/campaign";

function useLiveSupporterCount() {
  const [count, setCount] = useState(CAMPAIGN.supporterBase);
  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => clearInterval(id);
  }, []);
  return count;
}

export function PledgeCta() {
  const { t } = useT();
  const supporters = useLiveSupporterCount();
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 900);
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border-2 border-party-yellow/30 bg-black p-6 sm:p-8 lg:p-14">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-party-yellow" />

      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          {/* Live supporter count */}
          <div className="inline-flex items-center gap-2 rounded-full border border-party-yellow/40 bg-party-yellow/10 px-4 py-1.5">
            <Users size={15} className="text-party-yellow" />
            <span className="font-mono text-sm font-bold tabular-nums text-party-yellow">
              {supporters.toLocaleString("en-KE")}
            </span>
            <span className="text-xs font-medium uppercase tracking-widest text-white/60">
              {t("supporters and counting")}
            </span>
          </div>

          <h3 className="mt-6 text-balance font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t("Pledge your vote.")}
            <br />
            <span className="text-party-yellow">{t("Join the movement.")}</span>
          </h3>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/60">
            {t(
              "Add your name to a nationwide coalition standing behind a proven record of delivery — and be the first to hear where the movement gathers next."
            )}
          </p>
        </div>

        <div>
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border border-party-yellow/30 bg-white/[0.04] px-6 py-8 text-center"
              >
                <CheckCircle2 className="mx-auto text-party-yellow" size={40} />
                <p className="mt-4 font-display text-xl font-semibold text-white">
                  {t("Karibu! You're in.")}
                </p>
                <ul className="mx-auto mt-4 max-w-xs space-y-2 text-left text-sm text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-party-yellow" />
                    {t("You'll get a message when the movement comes to your county.")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-party-yellow" />
                    {t("Confirm on WhatsApp to get updates first.")}
                  </li>
                </ul>
                <Button className="mt-6 w-full" asChild>
                  <a
                    href={whatsappLink(
                      "I've pledged my vote for President Ruto — 2027. Add me to updates."
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("Confirm on WhatsApp")}
                    <ArrowRight size={16} />
                  </a>
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex min-w-0 flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <input
                  required
                  type="text"
                  placeholder={t("Full name")}
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:border-party-yellow focus:outline-none"
                />
                <input
                  required
                  type="tel"
                  placeholder={t("Phone number (WhatsApp)")}
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:border-party-yellow focus:outline-none"
                />
                <select
                  required
                  defaultValue=""
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-sm text-white/80 focus:border-party-yellow focus:outline-none"
                >
                  <option value="" disabled className="bg-onyx-900">
                    {t("Select your county")}
                  </option>
                  {[
                    "Nairobi",
                    "Mombasa",
                    "Kisumu",
                    "Nakuru",
                    "Eldoret",
                    "Other",
                  ].map((c) => (
                    <option key={c} value={c} className="bg-onyx-900">
                      {c === "Other" ? t("Other") : c}
                    </option>
                  ))}
                </select>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status === "submitting"}
                >
                  {status === "submitting"
                    ? t("Submitting...")
                    : t("Pledge My Vote")}
                  <ArrowRight size={16} />
                </Button>
                <p className="text-center text-xs text-white/40">
                  {t("Free. Takes 10 seconds. No spam.")}
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
