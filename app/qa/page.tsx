import type { Metadata } from "next";

import { QaContent } from "@/components/qa/qa-content";

export const metadata: Metadata = {
  title: "Q&A Town Hall",
  description:
    "Ask the President directly — moderated, answered in the open, and often on video.",
};

export default function QaPage() {
  return <QaContent />;
}
