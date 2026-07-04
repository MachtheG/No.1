import type { Metadata } from "next";

import { ManifestoContent } from "@/components/manifesto/manifesto-content";

export const metadata: Metadata = {
  title: "My Manifesto",
  description:
    "My manifesto — the Bottom-Up Economic Transformation Agenda, pillar by pillar.",
};

export default function ManifestoPage() {
  return <ManifestoContent />;
}
