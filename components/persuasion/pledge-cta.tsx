"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export function PledgeCta() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 900);
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-onyx-900 p-8 lg:p-16">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-party-yellow to-party-green" />

      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <h3 className="text-balance font-display text-3xl font-medium leading-tight text-black sm:text-4xl lg:text-5xl">
            Pledge your vote.
            <br />
            <span className="italic text-party-gold">Join the movement.</span>
          </h3>
          <p className="mt-5 max-w-md text-balance text-base leading-relaxed text-black/60">
            Add your name to a nationwide coalition standing behind a proven
            record of delivery — and be the first to hear where the movement
            gathers next.
          </p>
        </div>

        <div>
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-forest-400/30 bg-forest-500/10 px-6 py-10 text-center"
              >
                <CheckCircle2 className="text-forest-600" size={36} />
                <p className="font-display text-lg font-medium text-black">
                  Pledge received.
                </p>
                <p className="text-sm text-black/50">
                  Karibu to the movement — watch your inbox for what&apos;s
                  next.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="glass-panel flex flex-col gap-3 rounded-2xl p-3"
              >
                <input
                  required
                  type="text"
                  placeholder="Full name"
                  className="rounded-xl border border-black/10 bg-onyx-950/60 px-4 py-3.5 text-sm text-black placeholder:text-black/30 focus:border-uda-500/60 focus:outline-none"
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone number"
                  className="rounded-xl border border-black/10 bg-onyx-950/60 px-4 py-3.5 text-sm text-black placeholder:text-black/30 focus:border-uda-500/60 focus:outline-none"
                />
                <select
                  required
                  defaultValue=""
                  className="rounded-xl border border-black/10 bg-onyx-950/60 px-4 py-3.5 text-sm text-black/70 focus:border-uda-500/60 focus:outline-none"
                >
                  <option value="" disabled>
                    Select your county
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
                      {c}
                    </option>
                  ))}
                </select>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Submitting..." : "Pledge My Vote"}
                  <ArrowRight size={16} />
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
