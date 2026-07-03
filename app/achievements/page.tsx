import type { Metadata } from "next";

import { PageHero } from "@/components/ui/page-hero";
import { LedgerSection } from "@/components/ledger/ledger-section";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "The Transformation Ledger — every milestone of the Ruto administration, audited by pillar.",
};

export default function AchievementsPage() {
  return (
    <>
      <PageHero
        kicker="The Transformation Ledger"
        title="Every milestone,"
        accent="verified."
        description="A running record of policy converted into outcomes — audited across the pillars defining this administration's legacy."
      />
      <LedgerSection showHeading={false} />
    </>
  );
}
