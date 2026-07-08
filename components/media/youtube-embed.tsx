"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export function YoutubeEmbed({
  youtubeId,
  title,
}: {
  youtubeId: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);
  // Prefer the 1280×720 native-16:9 thumbnail for a crisp poster; fall back to
  // the always-available 4:3 hqdefault if a video has no max-res thumbnail.
  const [thumb, setThumb] = useState(
    `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`
  );

  if (playing) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
          title={title}
          allow="accelerate-compute; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className="group relative aspect-video w-full overflow-hidden rounded-xl bg-onyx-800 text-left"
    >
      <Image
        src={thumb}
        alt={title}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        quality={90}
        onError={() =>
          setThumb(`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`)
        }
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-party-yellow/90 text-black shadow-lg transition-transform group-hover:scale-110">
          <Play size={22} fill="currentColor" />
        </div>
      </div>
      <p className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-white">
        {title}
      </p>
    </button>
  );
}
