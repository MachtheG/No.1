import type { Metadata } from "next";

import { PageHero } from "@/components/ui/page-hero";
import { RoadmapExplorer } from "@/components/roadmap/roadmap-explorer";

export const metadata: Metadata = {
  title: "Campaign Roadmap",
  description:
    "Where we've been and where we're going — the campaign trail across all 47 counties.",
};

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        kicker="Campaign Roadmap"
        title="Meeting Kenyans,"
        accent="county by county."
        description="Tap a county to see where the movement has been and where it's headed next — the campaign trail, mapped."
      />
      <section className="border-t border-black/10 bg-white py-20 lg:py-28">
        <RoadmapExplorer />
      </section>
    </>
  );
}
