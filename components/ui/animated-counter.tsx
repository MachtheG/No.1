"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue } from "framer-motion";

function format(value: number, decimals: number) {
  return value.toLocaleString("en-KE", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function AnimatedCounter({
  value,
  decimals = 0,
  className,
}: {
  value: number;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    // Respect users who prefer reduced motion — leave the SSR value in place.
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const controls = animate(motionValue, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        if (ref.current) ref.current.textContent = format(latest, decimals);
      },
    });
    return () => controls.stop();
  }, [isInView, motionValue, value, decimals]);

  // The real, formatted value is rendered server-side and stays visible until
  // (and unless) JavaScript animates it — so slow/3G loads never show zero.
  return (
    <span ref={ref} className={className} suppressHydrationWarning>
      {format(value, decimals)}
    </span>
  );
}
