"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/badge";
import { flatNavLinks } from "@/data/nav";
import { useT } from "@/lib/i18n";

export function ExploreGrid() {
  const { t } = useT();
  return (
    <section className="border-t border-black/10 bg-white py-28 lg:py-36">
      <Container>
        <Kicker>Explore the Platform</Kicker>
        <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-medium leading-[1.05] tracking-tighter text-black sm:text-5xl">
          {t("One record. Every")}{" "}
          <span className="italic text-party-gold">{t("angle.")}</span>
        </h2>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {flatNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-black/[0.02] p-7 transition-colors hover:border-party-yellow/40 hover:bg-black/[0.04]"
            >
              <div>
                <h3 className="font-display text-xl font-medium text-black">
                  {t(link.label)}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-black/50">
                  {t(link.description)}
                </p>
              </div>
              <ArrowUpRight
                size={18}
                className="mt-6 text-black/20 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-party-gold"
              />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
