"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Search, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { countyResults } from "@/data/elections";
import { useT } from "@/lib/i18n";

const COUNTIES = [...countyResults]
  .map((c) => c.county)
  .sort((a, b) => a.localeCompare(b));

export function VoterCheck() {
  const { t } = useT();
  const [status, setStatus] = useState<"idle" | "checking" | "done">("idle");
  const [county, setCounty] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("checking");
    window.setTimeout(() => setStatus("done"), 1200);
  }

  return (
    <div className="rounded-3xl border-2 border-party-yellow/30 bg-black p-6 sm:p-8 lg:p-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="min-w-0">
          <span className="inline-flex rounded-full border border-party-yellow/40 bg-party-yellow/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-party-yellow">
            {t("IEBC Voter Check")}
          </span>
          <h3 className="mt-5 font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-4xl">
            {t("Are you ready to vote in")}{" "}
            <span className="text-party-yellow">2027?</span>
          </h3>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            {t(
              "Confirm your registration status in seconds. Not registered yet? It only takes a few minutes at any IEBC centre."
            )}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {status === "done" ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-forest-500/40 bg-forest-500/10 p-6 text-center"
            >
              <CheckCircle2 className="mx-auto text-forest-500" size={36} />
              <p className="mt-3 font-display text-lg font-semibold text-white">
                {t("You appear to be registered.")}
              </p>
              <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-white/60">
                <MapPin size={13} /> {county || t("Your county")}
              </p>
              <p className="mx-auto mt-4 max-w-xs text-xs text-white/40">
                {t(
                  "Demonstration result. Always confirm your details on the official IEBC portal before election day."
                )}
              </p>
              <Button
                variant="outline"
                className="mt-5 border-white/20 text-white hover:border-party-yellow"
                onClick={() => setStatus("idle")}
              >
                {t("Check another")}
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
                inputMode="numeric"
                placeholder={t("National ID number")}
                className="w-full min-w-0 rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:border-party-yellow focus:outline-none"
              />
              <select
                required
                value={county}
                onChange={(e) => setCounty(e.target.value)}
                className="w-full min-w-0 rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-sm text-white/80 focus:border-party-yellow focus:outline-none"
              >
                <option value="" disabled className="bg-onyx-900">
                  {t("Select your county")}
                </option>
                {COUNTIES.map((c) => (
                  <option key={c} value={c} className="bg-onyx-900">
                    {c}
                  </option>
                ))}
              </select>
              <Button
                type="submit"
                size="lg"
                className="w-full min-w-0 whitespace-normal px-4 text-center leading-tight sm:px-9"
                disabled={status === "checking"}
              >
                {status === "checking" ? (
                  t("Checking…")
                ) : (
                  <>
                    <Search size={16} />
                    {t("Check my registration")}
                  </>
                )}
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
