import type { Metadata } from "next";

import { PartyContent } from "@/components/party/party-content";

export const metadata: Metadata = {
  title: "The Party",
  description:
    "United Democratic Alliance (UDA) — the wheelbarrow, the hustler nation, and the philosophy of Kazi ni Kazi.",
};

export default function PartyPage() {
  return <PartyContent />;
}
