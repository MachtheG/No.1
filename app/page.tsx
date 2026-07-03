import { HeroSection } from "@/components/hero/hero-section";
import { CountdownBanner } from "@/components/home/countdown-banner";
import { LedgerSection } from "@/components/ledger/ledger-section";
import { PersuasionSection } from "@/components/persuasion/persuasion-section";
import { LegacySection } from "@/components/legacy/legacy-section";
import { ExploreGrid } from "@/components/home/explore-grid";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CountdownBanner />
      <LedgerSection />
      <PersuasionSection />
      <LegacySection />
      <ExploreGrid />
    </>
  );
}
