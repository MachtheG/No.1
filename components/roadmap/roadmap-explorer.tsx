"use client";

import { useMemo, useState } from "react";
import { CalendarClock, CalendarCheck, MapPin } from "lucide-react";

import { Container } from "@/components/ui/container";
import { KenyaMap } from "@/components/map/kenya-map";
import { visits, type Visit } from "@/data/roadmap";
import { cn } from "@/lib/utils";

const PAST_FILL = "#FFD700"; // party yellow — where we've been
const UPCOMING_FILL = "#008000"; // party green — where we're going
const NEUTRAL_FILL = "#E2E2DF";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-KE", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function RoadmapExplorer() {
  const [selected, setSelected] = useState<string | null>(null);

  const byCounty = useMemo(() => {
    const m = new Map<string, Visit>();
    for (const v of visits) m.set(v.county, v);
    return m;
  }, []);

  const past = visits
    .filter((v) => v.status === "past")
    .sort((a, b) => b.date.localeCompare(a.date));
  const upcoming = visits
    .filter((v) => v.status === "upcoming")
    .sort((a, b) => a.date.localeCompare(b.date));

  const selectedVisit = selected ? byCounty.get(selected) : null;

  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-black/50">
              <span className="h-3 w-3 rounded-sm bg-party-yellow" /> Where we&apos;ve
              been
            </span>
            <span className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-black/50">
              <span className="h-3 w-3 rounded-sm bg-party-green" /> Where we&apos;re
              going
            </span>
          </div>

          <div className="mt-4">
            <KenyaMap
              ariaLabel="Campaign roadmap by county"
              selected={selected}
              onSelect={(c) => setSelected(byCounty.has(c) ? c : null)}
              fill={(county) => {
                const v = byCounty.get(county);
                if (!v) return NEUTRAL_FILL;
                return v.status === "past" ? PAST_FILL : UPCOMING_FILL;
              }}
              tooltip={(county) => {
                const v = byCounty.get(county);
                return (
                  <>
                    <p className="text-xs font-semibold text-white">{county}</p>
                    {v ? (
                      <p className="mt-1 text-[11px] text-white/70">
                        {v.theme} &middot; {formatDate(v.date)}
                      </p>
                    ) : (
                      <p className="mt-1 text-[11px] text-white/50">
                        No visit scheduled
                      </p>
                    )}
                  </>
                );
              }}
            />
          </div>

          {selectedVisit && (
            <div className="mt-4 rounded-2xl border border-black/10 bg-black/[0.02] p-5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-party-gold">
                <MapPin size={13} /> {selectedVisit.town}, {selectedVisit.county}
              </div>
              <p className="mt-2 font-display text-lg font-medium text-black">
                {selectedVisit.theme}
              </p>
              <p className="mt-1 text-sm text-black/55">
                {selectedVisit.summary}
              </p>
              <p className="mt-2 text-xs text-black/40">
                {formatDate(selectedVisit.date)}
              </p>
            </div>
          )}
        </div>

        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2">
              <CalendarClock size={16} className="text-party-green" />
              <h3 className="font-display text-lg font-medium text-black">
                Where We&apos;re Going
              </h3>
            </div>
            <div className="mt-4 space-y-2.5">
              {upcoming.map((v) => (
                <VisitRow key={v.id} v={v} onClick={() => setSelected(v.county)} active={selected === v.county} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <CalendarCheck size={16} className="text-party-gold" />
              <h3 className="font-display text-lg font-medium text-black">
                Where We&apos;ve Been
              </h3>
            </div>
            <div className="mt-4 space-y-2.5">
              {past.map((v) => (
                <VisitRow key={v.id} v={v} onClick={() => setSelected(v.county)} active={selected === v.county} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

function VisitRow({
  v,
  onClick,
  active,
}: {
  v: Visit;
  onClick: () => void;
  active: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-colors",
        active
          ? "border-party-yellow/60 bg-party-yellow/[0.06]"
          : "border-black/10 hover:border-black/25"
      )}
    >
      <div>
        <p className="text-sm font-medium text-black">
          {v.town}, {v.county}
        </p>
        <p className="text-xs text-black/45">{v.theme}</p>
      </div>
      <span className="flex-shrink-0 text-xs text-black/40">
        {formatDate(v.date)}
      </span>
    </button>
  );
}
