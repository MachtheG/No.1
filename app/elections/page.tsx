import type { Metadata } from "next";

import { ElectionsContent } from "@/components/elections/elections-content";

export const metadata: Metadata = {
  title: "Election Center",
  description:
    "The countdown to the 2027 General Election, and the full county-by-county record of the 2022 result.",
};

export default function ElectionsPage() {
  return <ElectionsContent />;
}
