"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { galleryItems } from "@/data/gallery";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n";

const SPAN_CLASSES: Record<string, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  square: "",
};

const EASE = [0.16, 1, 0.3, 1] as const;

export function MasonryGallery() {
  const { t } = useT();
  return (
    <Container>
      <div className="grid auto-rows-[180px] grid-cols-2 gap-3 lg:auto-rows-[220px] lg:grid-cols-4 lg:gap-4">
        {galleryItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: (i % 4) * 0.08 }}
            className={cn(
              "group relative overflow-hidden rounded-xl border border-black/10 bg-onyx-800",
              SPAN_CLASSES[item.span]
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-uda-900/30 via-onyx-900 to-forest-900/30" />
            <Image
              src={item.image}
              alt={item.caption}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover opacity-0 transition-all duration-700 group-hover:scale-105"
              onLoad={(e) => (e.currentTarget.style.opacity = "1")}
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-onyx-950/95 via-onyx-950/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-sm font-medium text-black">{t(item.caption)}</p>
              <p className="font-mono text-xs uppercase tracking-widest text-party-gold/80">
                {item.context}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
