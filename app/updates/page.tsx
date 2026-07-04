import type { Metadata } from "next";

import { UpdatesContent } from "@/components/updates/updates-content";

export const metadata: Metadata = {
  title: "Campaign Updates",
  description: "The latest news, milestones and stories from the movement.",
};

export default function UpdatesPage() {
  return <UpdatesContent />;
}
