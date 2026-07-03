import type { Metadata } from "next";

import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/badge";
import { YoutubeEmbed } from "@/components/media/youtube-embed";
import { MasonryGallery } from "@/components/legacy/masonry-gallery";
import { videos } from "@/data/videos";

export const metadata: Metadata = {
  title: "Media Room",
  description:
    "Photos and video from the field — sourced from the official State House Kenya channel.",
};

export default function MediaPage() {
  return (
    <>
      <PageHero
        kicker="Media Room"
        title="The record,"
        accent="in real time."
        description="Video from State House engagements and photos from the international stage — updated as the administration works."
      />

      <section className="border-t border-black/10 bg-white py-24 lg:py-32">
        <Container>
          <Kicker>Video</Kicker>
          <p className="mt-3 max-w-xl text-sm text-black/45">
            Sourced from the verified official channel{" "}
            <span className="text-black/70">
              @StateHouseRepublicofKenya
            </span>
            .
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <YoutubeEmbed
                key={video.id}
                youtubeId={video.youtubeId}
                title={video.title}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-black/10 bg-onyx-900 py-24 lg:py-32">
        <Container>
          <Kicker>Photo Diary</Kicker>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-medium leading-[1.05] tracking-tighter text-black sm:text-5xl">
            Moments from the{" "}
            <span className="italic text-party-gold">global stage.</span>
          </h2>
        </Container>
        <div className="mt-14">
          <MasonryGallery />
        </div>
      </section>
    </>
  );
}
