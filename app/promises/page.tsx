import type { Metadata } from "next";

import { PromisesContent } from "@/components/promises/promises-content";

export const metadata: Metadata = {
  title: "My Promises",
  description:
    "My commitments for the next chapter — what I will deliver, and by when.",
};

export default function PromisesPage() {
  return <PromisesContent />;
}
