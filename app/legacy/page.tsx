import type { Metadata } from "next";

import { LegacyContent } from "@/components/legacy/legacy-content";

export const metadata: Metadata = {
  title: "My Legacy",
  description:
    "Kenya's standing on the world stage — my state visits, summits, and global diplomacy.",
};

export default function LegacyPage() {
  return <LegacyContent />;
}
