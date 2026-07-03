import type { Metadata } from "next";

import { PageHero } from "@/components/ui/page-hero";
import { LedgerSection } from "@/components/ledger/ledger-section";

export const metadata: Metadata = {
  title: "My Record",
  description:
    "My record in office — every milestone, audited by pillar and backed by a verified source.",
};

export default function AchievementsPage() {
  return (
    <>
      <PageHero
        kicker="My Record"
        title="Every milestone,"
        accent="verified."
        description="A running record of my policies converted into outcomes — each one backed by a verified source, audited across the pillars defining this administration's work."
      />
      <LedgerSection showHeading={false} />
    </>
  );
}
