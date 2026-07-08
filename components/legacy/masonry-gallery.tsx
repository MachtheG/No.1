"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { galleryItems, type GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n";

const SPAN_CLASSES: Record<string, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  square: "",
};

const EASE = [0.16, 1, 0.3, 1] as const;

function GalleryTile({ item, index }: { item: GalleryItem; index: number }) {
  const { t } = useT();
  const [loaded, setLoaded] = useState(false);

  // Fade the photo in on load, but reveal it immediately if it was already
  // cached/complete before this handler attached — otherwise a cached image
  // would never fire onLoad and stay invisible.
  const attachRef = useCallback((node: HTMLImageElement | null) => {
    if (node?.complete) setLoaded(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE, delay: (index % 4) * 0.08 }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-black/10 bg-onyx-800",
        SPAN_CLASSES[item.span]
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-uda-900/30 via-onyx-900 to-forest-900/30" />
      <Image
        ref={attachRef}
        src={item.image}
        alt={item.caption}
        fill
        sizes="(min-width: 1024px) 25vw, 50vw"
        quality={85}
        onLoad={() => setLoaded(true)}
        className={cn(
          "object-cover object-center transition-all duration-700 group-hover:scale-105",
          loaded ? "opacity-100" : "opacity-0"
        )}
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-onyx-950/95 via-onyx-950/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-sm font-medium text-black">{t(item.caption)}</p>
        <p className="font-mono text-xs uppercase tracking-widest text-party-gold/80">
          {item.context}
        </p>
      </div>
    </motion.div>
  );
}

export function MasonryGallery() {
  return (
    <Container>
      <div className="grid auto-rows-[180px] grid-cols-2 gap-3 lg:auto-rows-[220px] lg:grid-cols-4 lg:gap-4">
        {galleryItems.map((item, i) => (
          <GalleryTile key={item.id} item={item} index={i} />
        ))}
      </div>
    </Container>
  );
}
