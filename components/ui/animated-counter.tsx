"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue } from "framer-motion";

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
    const controls = animate(motionValue, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [isInView, motionValue, value]);

  useEffect(
    () =>
      motionValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = latest.toFixed(decimals);
        }
      }),
    [motionValue, decimals]
  );

  return (
    <span ref={ref} className={className}>
      0
    </span>
  );
}
