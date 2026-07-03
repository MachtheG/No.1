import type { Metadata } from "next";

import { PageHero } from "@/components/ui/page-hero";
import { DeliveredBoard } from "@/components/delivered/delivered-board";

export const metadata: Metadata = {
  title: "What We've Delivered",
  description:
    "A scorecard of completed initiatives, filterable by sector — the record of delivery.",
};

export default function DeliveredPage() {
  return (
    <>
      <PageHero
        kicker="What We've Delivered"
        title="Promises kept,"
        accent="counted."
        description="A scorecard of what the bottom-up agenda has delivered on the ground. Filter by sector to see the work in each area."
      />
      <section className="border-t border-black/10 bg-white py-20 lg:py-28">
        <DeliveredBoard />
      </section>
    </>
  );
}
