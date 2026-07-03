"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { LayoutGrid, Table2 } from "lucide-react";

import { countyResults, type CountyResult } from "@/data/elections";
import { cn } from "@/lib/utils";

// Validated sequential ramp (dataviz skill: node scripts/validate_palette.js
// --mode light --surface #fcfcfb --ordinal → ALL CHECKS PASS). Low share reads
// as a pale gold; high share reads as a deep, saturated gold-brown — all
// steps carry black text at sufficient contrast.
const RAMP = ["#D4B054", "#C29A00", "#A07E00", "#7A6100", "#4D3D00"];
const BUCKETS = ["0–20%", "20–40%", "40–60%", "60–80%", "80–100%"];

function rutoShare(c: CountyResult) {
  return (c.ruto / (c.ruto + c.odinga)) * 100;
}

function bucketIndex(share: number) {
  return Math.min(4, Math.floor(share / 20));
}

function abbreviate(name: string) {
  return name
    .split(/[\s-]/)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

export function ElectionHeatmap() {
  const [view, setView] = useState<"grid" | "table">("grid");
  const [hovered, setHovered] = useState<string | null>(null);

  const sorted = useMemo(
    () => [...countyResults].sort((a, b) => rutoShare(b) - rutoShare(a)),
    []
  );

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-black">
            Presidential result share by county — 2022
          </p>
          <p className="mt-1 text-xs text-black/40">
            Share of the two-way vote (Ruto vs. the Late Raila Odinga) won by
            William Ruto.
            Source: IEBC county returns.
          </p>
        </div>
        <div className="flex gap-1 rounded-full border border-black/10 bg-black/[0.02] p-1">
          <button
            onClick={() => setView("grid")}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
              view === "grid"
                ? "bg-party-yellow text-black"
                : "text-black/50 hover:text-black"
            )}
          >
            <LayoutGrid size={13} /> Grid
          </button>
          <button
            onClick={() => setView("table")}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
              view === "table"
                ? "bg-party-yellow text-black"
                : "text-black/50 hover:text-black"
            )}
          >
            <Table2 size={13} /> Table
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="text-xs uppercase tracking-widest text-black/40">
          Ruto vote share
        </span>
        {RAMP.map((color, i) => (
          <div key={color} className="flex items-center gap-1.5">
            <span
              className="h-3 w-3 rounded-sm border border-black/10"
              style={{ backgroundColor: color }}
            />
            <span className="text-[11px] text-black/50">{BUCKETS[i]}</span>
          </div>
        ))}
      </div>

      {view === "grid" ? (
        <div className="relative mt-6 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8">
          {sorted.map((c, i) => {
            const share = rutoShare(c);
            const bucket = bucketIndex(share);
            const color = RAMP[bucket];
            const onDark = bucket >= 3;
            const isHovered = hovered === c.county;
            return (
              <motion.div
                key={c.county}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.3, delay: (i % 16) * 0.015 }}
                className="group relative"
                onMouseEnter={() => setHovered(c.county)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="flex aspect-square cursor-default flex-col items-center justify-center rounded-lg border border-black/10 text-center transition-transform group-hover:scale-105"
                  style={{ backgroundColor: color }}
                >
                  <span
                    className={cn(
                      "font-mono text-[10px] font-semibold sm:text-xs",
                      onDark ? "text-white/90" : "text-black/80"
                    )}
                  >
                    {abbreviate(c.county)}
                  </span>
                  <span
                    className={cn(
                      "text-[9px] sm:text-[10px]",
                      onDark ? "text-white/70" : "text-black/60"
                    )}
                  >
                    {share.toFixed(0)}%
                  </span>
                </div>

                {isHovered && (
                  <div className="absolute bottom-full left-1/2 z-20 mb-2 w-44 -translate-x-1/2 rounded-lg border border-black/15 bg-black px-3 py-2.5 shadow-xl">
                    <p className="text-xs font-semibold text-white">
                      {c.county}
                    </p>
                    <p className="mt-1 text-[11px] text-party-yellow">
                      Ruto: {c.ruto.toLocaleString()} ({share.toFixed(1)}%)
                    </p>
                    <p className="text-[11px] text-white/50">
                      The Late Raila (Baba): {c.odinga.toLocaleString()}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-xl border border-black/10">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead>
              <tr className="border-b border-black/10 bg-black/[0.03] text-xs uppercase tracking-widest text-black/40">
                <th className="px-4 py-3 font-medium">County</th>
                <th className="px-4 py-3 font-medium">Region</th>
                <th className="px-4 py-3 text-right font-medium">Ruto</th>
                <th className="px-4 py-3 text-right font-medium">
                  Raila (Baba)
                </th>
                <th className="px-4 py-3 text-right font-medium">Ruto Share</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((c) => {
                const share = rutoShare(c);
                return (
                  <tr
                    key={c.county}
                    className="border-b border-black/5 last:border-0 hover:bg-black/[0.03]"
                  >
                    <td className="px-4 py-2.5 font-medium text-black">
                      {c.county}
                    </td>
                    <td className="px-4 py-2.5 text-black/50">{c.region}</td>
                    <td className="px-4 py-2.5 text-right text-black/70">
                      {c.ruto.toLocaleString()}
                    </td>
                    <td className="px-4 py-2.5 text-right text-black/70">
                      {c.odinga.toLocaleString()}
                    </td>
                    <td className="px-4 py-2.5 text-right font-mono text-party-gold">
                      {share.toFixed(1)}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
