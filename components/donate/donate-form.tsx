"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Smartphone,
  CreditCard,
  Wallet,
  Loader2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n";

const AMOUNTS = [200, 500, 1000, 5000];
const METHODS = [
  { id: "mpesa", label: "M-Pesa", icon: Smartphone },
  { id: "card", label: "Card", icon: CreditCard },
  { id: "paypal", label: "PayPal", icon: Wallet },
] as const;

type Status = "idle" | "stk" | "processing" | "success";

export function DonateForm() {
  const { t } = useT();
  const [amount, setAmount] = useState<number>(500);
  const [custom, setCustom] = useState("");
  const [method, setMethod] = useState<string>("mpesa");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const effectiveAmount = custom ? Number(custom) || 0 : amount;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Payment processing is a later technical phase — this is a UI scaffold.
    if (method === "mpesa") {
      // Simulate a Safaricom Daraja STK push to the handset.
      setStatus("stk");
      window.setTimeout(() => setStatus("processing"), 3200);
      window.setTimeout(() => setStatus("success"), 5000);
    } else {
      setStatus("processing");
      window.setTimeout(() => setStatus("success"), 1200);
    }
  }

  // --- M-Pesa STK push waiting screen ---
  if (status === "stk" || (status === "processing" && method === "mpesa")) {
    return (
      <div className="rounded-3xl border-2 border-party-yellow/40 bg-onyx-900 p-8 text-center sm:p-12">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest-500/10 text-forest-600">
          <Smartphone size={26} />
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold text-black">
          {status === "stk"
            ? t("Check your phone")
            : t("Confirming payment…")}
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-black/60">
          {status === "stk"
            ? t(
                "An M-Pesa prompt has been sent to your phone. Enter your M-Pesa PIN to confirm your contribution."
              )
            : t("Waiting for M-Pesa to confirm the transaction…")}
        </p>
        <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-black/[0.04] px-4 py-2 text-sm font-semibold text-black">
          <span className="text-black/50">{phone || "07XX XXX XXX"}</span>
          <span className="text-party-gold">
            KES {effectiveAmount.toLocaleString()}
          </span>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-black/45">
          <Loader2 size={14} className="animate-spin" />
          {t("Do not close this window")}
        </div>
      </div>
    );
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl border-2 border-forest-500/30 bg-forest-500/[0.06] p-8 text-center sm:p-12"
      >
        <CheckCircle2 className="mx-auto text-forest-600" size={44} />
        <h3 className="mt-4 font-display text-2xl font-semibold text-black">
          {t("Thank you for your support.")}
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-black/55">
          {t("This is a demonstration confirmation for a pledged contribution of")}{" "}
          <span className="font-semibold text-black">
            KES {effectiveAmount.toLocaleString()}
          </span>{" "}
          {t("via")} {t(METHODS.find((m) => m.id === method)?.label ?? "")}.{" "}
          {t("No payment has been processed.")}
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          {t("Make another contribution")}
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border-2 border-black/10 bg-white p-6 sm:p-8"
    >
      {/* Amount */}
      <fieldset>
        <legend className="text-xs uppercase tracking-widest text-black/40">
          {t("Choose an amount (KES)")}
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
                "rounded-xl border-2 py-3 text-sm font-bold transition-colors",
                amount === a && !custom
                  ? "border-party-yellow bg-party-yellow/15 text-black"
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
          placeholder={t("Or enter a custom amount")}
          className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/30 focus:border-party-yellow focus:outline-none"
        />
      </fieldset>

      {/* Method */}
      <fieldset className="mt-6">
        <legend className="text-xs uppercase tracking-widest text-black/40">
          {t("Payment method")}
        </legend>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {METHODS.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMethod(m.id)}
              className={cn(
                "flex flex-col items-center gap-2 rounded-xl border-2 py-4 text-xs font-semibold transition-colors",
                method === m.id
                  ? "border-party-yellow bg-party-yellow/15 text-black"
                  : "border-black/10 text-black/60 hover:border-black/25"
              )}
            >
              <m.icon size={20} strokeWidth={1.8} />
              {m.label}
            </button>
          ))}
        </div>
      </fieldset>

      {/* M-Pesa phone (Daraja STK push) */}
      {method === "mpesa" && (
        <fieldset className="mt-6">
          <legend className="text-xs uppercase tracking-widest text-black/40">
            {t("Safaricom number for the M-Pesa prompt")}
          </legend>
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="0712 345 678"
            className="mt-3 w-full rounded-xl border-2 border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/30 focus:border-party-yellow focus:outline-none"
          />
          <p className="mt-2 text-xs text-black/40">
            {t("You'll get an M-Pesa prompt on this number to confirm with your PIN.")}
          </p>
        </fieldset>
      )}

      {/* Donor info + compliance disclosure */}
      <fieldset className="mt-6">
        <legend className="text-xs uppercase tracking-widest text-black/40">
          {t("Your details")}
        </legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <input
            required
            placeholder={t("Full name")}
            className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/30 focus:border-party-yellow focus:outline-none"
          />
          <input
            required
            placeholder={t("National ID / Passport no.")}
            className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/30 focus:border-party-yellow focus:outline-none"
          />
          <input
            placeholder={t("County of residence")}
            className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/30 focus:border-party-yellow focus:outline-none sm:col-span-2"
          />
        </div>
        <p className="mt-3 text-xs leading-relaxed text-black/40">
          {t(
            "Donor details are collected to meet campaign-finance disclosure requirements. Fields shown here are a scaffold for legal review — this demo does not store or transmit any data."
          )}
        </p>
      </fieldset>

      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full min-w-0 whitespace-normal px-4 text-center leading-tight sm:px-9"
        disabled={effectiveAmount <= 0}
      >
        {method === "mpesa"
          ? `${t("Send M-Pesa prompt")} · KES ${effectiveAmount.toLocaleString()}`
          : `${t("Donate KES")} ${effectiveAmount.toLocaleString()}`}
      </Button>
    </form>
  );
}
