"use client";

import { useState, type ReactNode } from "react";

import {
  countyShapes,
  MAP_WIDTH,
  MAP_HEIGHT,
} from "@/data/county-shapes";
import { cn } from "@/lib/utils";

export interface KenyaMapProps {
  /** Returns the fill color for a county. */
  fill: (county: string) => string;
  /** Currently selected county (drawn with an emphasized outline). */
  selected?: string | null;
  onSelect?: (county: string) => void;
  /** Tooltip content shown while hovering a county. */
  tooltip?: (county: string) => ReactNode;
  className?: string;
  ariaLabel?: string;
}

export function KenyaMap({
  fill,
  selected,
  onSelect,
  tooltip,
  className,
  ariaLabel = "Map of Kenya's 47 counties",
}: KenyaMapProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  return (
    <div
      className={cn("relative w-full", className)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
    >
      <svg
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        className="h-auto w-full"
        role="img"
        aria-label={ariaLabel}
      >
        {countyShapes.map((c) => {
          const isActive = hovered === c.name || selected === c.name;
          return (
            <path
              key={c.name}
              d={c.d}
              fill={fill(c.name)}
              stroke={isActive ? "#000000" : "#FFFFFF"}
              strokeWidth={isActive ? 1.6 : 0.6}
              tabIndex={onSelect ? 0 : -1}
              role={onSelect ? "button" : undefined}
              aria-label={c.name}
              onMouseEnter={() => setHovered(c.name)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(c.name)}
              onBlur={() => setHovered(null)}
              onClick={() => onSelect?.(c.name)}
              onKeyDown={(e) => {
                if (onSelect && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  onSelect(c.name);
                }
              }}
              className={cn(
                "outline-none transition-[stroke,opacity] duration-150",
                onSelect && "cursor-pointer",
                hovered && hovered !== c.name && "opacity-90"
              )}
            />
          );
        })}
      </svg>

      {hovered && tooltip && (
        <div
          className="pointer-events-none absolute z-20 w-max max-w-[220px] -translate-x-1/2 -translate-y-full rounded-lg border border-black/15 bg-black px-3 py-2 text-white shadow-xl"
          style={{ left: pos.x, top: pos.y - 10 }}
        >
          {tooltip(hovered)}
        </div>
      )}
    </div>
  );
}
