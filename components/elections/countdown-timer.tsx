"use client";

import { useEffect, useState } from "react";

function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const UNITS: { key: "days" | "hours" | "minutes" | "seconds"; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export function CountdownTimer({
  target,
  size = "default",
}: {
  target: string;
  size?: "default" | "compact";
}) {
  const targetDate = new Date(target);
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft> | null>(
    null
  );

  useEffect(() => {
    setTimeLeft(getTimeLeft(targetDate));
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  const display = timeLeft ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
      {UNITS.map((unit) => (
        <div
          key={unit.key}
          className={
            size === "compact"
              ? "flex flex-col items-center rounded-xl border border-black/10 bg-black/[0.03] px-2.5 py-2 sm:px-3 sm:py-2.5"
              : "flex flex-col items-center rounded-2xl border border-party-yellow/20 bg-party-yellow/[0.04] px-3 py-3 sm:px-6 sm:py-5"
          }
        >
          <span
            className={
              size === "compact"
                ? "font-mono text-base font-semibold tabular-nums text-black sm:text-lg"
                : "font-display text-2xl font-semibold tabular-nums text-party-gold sm:text-5xl"
            }
            suppressHydrationWarning
          >
            {String(display[unit.key]).padStart(2, "0")}
          </span>
          <span className="mt-1 text-[9px] uppercase tracking-widest text-black/40 sm:text-xs">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
