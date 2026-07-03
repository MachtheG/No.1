import type { Metadata } from "next";

import { PageHero } from "@/components/ui/page-hero";
import { JourneyTimeline } from "@/components/journey/journey-timeline";

export const metadata: Metadata = {
  title: "Journey to Presidency",
  description:
    "From a roadside chicken stall in Sambut to State House — the story of William Samoei Ruto.",
};

export default function JourneyPage() {
  return (
    <>
      <PageHero
        kicker="Journey to Presidency"
        title="From Sugoi"
        accent="to State House."
        description="A self-made path through classrooms, cabinet offices, and grassroots politics — built one elected office at a time, never inherited."
      />
      <JourneyTimeline />
    </>
  );
}
