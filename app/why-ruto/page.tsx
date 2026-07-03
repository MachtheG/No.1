import type { Metadata } from "next";

import { PageHero } from "@/components/ui/page-hero";
import { PersuasionSection } from "@/components/persuasion/persuasion-section";

export const metadata: Metadata = {
  title: "Why Ruto",
  description:
    "The case for a second term — policy felt in the household, told through the Kenyans living it.",
};

export default function WhyRutoPage() {
  return (
    <>
      <PageHero
        kicker="Why Ruto"
        title="Policy, felt in the"
        accent="household."
        description="Behind every statistic is a name. This is what the bottom-up model looks like on the ground — and what it means for you, specifically."
      />
      <PersuasionSection showHeading={false} />
    </>
  );
}
