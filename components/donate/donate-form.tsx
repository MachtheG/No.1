"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Smartphone, CreditCard, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AMOUNTS = [200, 500, 1000, 5000];
const METHODS = [
  { id: "mpesa", label: "M-Pesa", icon: Smartphone },
  { id: "card", label: "Card", icon: CreditCard },
  { id: "paypal", label: "PayPal", icon: Wallet },
] as const;

export function DonateForm() {
  const [amount, setAmount] = useState<number>(500);
  const [custom, setCustom] = useState("");
  const [method, setMethod] = useState<string>("mpesa");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const effectiveAmount = custom ? Number(custom) || 0 : amount;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Payment processing is a later technical phase — this is a UI scaffold only.
    window.setTimeout(() => setStatus("success"), 1000);
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl border border-forest-500/30 bg-forest-500/[0.06] p-8 text-center sm:p-12"
      >
        <CheckCircle2 className="mx-auto text-forest-600" size={44} />
        <h3 className="mt-4 font-display text-2xl font-medium text-black">
          Thank you for your support.
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-black/55">
          This is a demonstration confirmation for a pledged contribution of{" "}
          <span className="font-semibold text-black">
            KES {effectiveAmount.toLocaleString()}
          </span>{" "}
          via {METHODS.find((m) => m.id === method)?.label}. No payment has been
          processed.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Make another pledge
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-black/10 bg-black/[0.02] p-6 sm:p-8"
    >
      {/* Amount */}
      <fieldset>
        <legend className="text-xs uppercase tracking-widest text-black/40">
          Choose an amount (KES)
        </legend>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {AMOUNTS.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => {
                setAmount(a);
                setCustom("");
              }}
              className={cn(
                "rounded-xl border py-3 text-sm font-semibold transition-colors",
                amount === a && !custom
                  ? "border-party-yellow bg-party-yellow/10 text-black"
                  : "border-black/10 text-black/60 hover:border-black/25"
              )}
            >
              {a.toLocaleString()}
            </button>
          ))}
        </div>
        <input
          type="number"
          min={1}
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          placeholder="Or enter a custom amount"
          className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/30 focus:border-party-yellow/60 focus:outline-none"
        />
      </fieldset>

      {/* Method */}
      <fieldset className="mt-6">
        <legend className="text-xs uppercase tracking-widest text-black/40">
          Payment method
        </legend>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {METHODS.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMethod(m.id)}
              className={cn(
                "flex flex-col items-center gap-2 rounded-xl border py-4 text-xs font-medium transition-colors",
                method === m.id
                  ? "border-party-yellow bg-party-yellow/10 text-black"
                  : "border-black/10 text-black/60 hover:border-black/25"
              )}
            >
              <m.icon size={20} strokeWidth={1.6} />
              {m.label}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Donor info + compliance disclosure */}
      <fieldset className="mt-6">
        <legend className="text-xs uppercase tracking-widest text-black/40">
          Your details
        </legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <input
            required
            placeholder="Full name"
            className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/30 focus:border-party-yellow/60 focus:outline-none"
          />
          <input
            required
            placeholder="Phone number"
            className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/30 focus:border-party-yellow/60 focus:outline-none"
          />
          <input
            required
            placeholder="National ID / Passport no."
            className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/30 focus:border-party-yellow/60 focus:outline-none"
          />
          <input
            placeholder="County of residence"
            className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/30 focus:border-party-yellow/60 focus:outline-none"
          />
        </div>
        <p className="mt-3 text-xs leading-relaxed text-black/40">
          Donor details are collected to meet campaign-finance disclosure
          requirements. Fields shown here are a scaffold for legal review — this
          demo does not store or transmit any data.
        </p>
      </fieldset>

      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full"
        disabled={status === "submitting" || effectiveAmount <= 0}
      >
        {status === "submitting"
          ? "Processing…"
          : `Donate KES ${effectiveAmount.toLocaleString()}`}
      </Button>
    </form>
  );
}
