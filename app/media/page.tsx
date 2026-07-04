import type { Metadata } from "next";

import { MediaContent } from "@/components/media/media-content";

export const metadata: Metadata = {
  title: "Media Room",
  description:
    "Photos and video from the field — sourced from the official State House Kenya channel.",
};

export default function MediaPage() {
  return <MediaContent />;
}
