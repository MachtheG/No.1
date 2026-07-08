"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/badge";
import { useT } from "@/lib/i18n";

// A curated shortlist — not the full sitemap (that lives in the footer).
const FEATURED = [
  { label: "My Record", href: "/achievements", description: "Every delivery, with a source you can check" },
  { label: "Second Term Plan", href: "/promises", description: "My commitments for the next chapter" },
  { label: "Election Center", href: "/elections", description: "2027 countdown & the 2022 result, mapped" },
  { label: "Ask the Manifesto", href: "/ask", description: "Ask any question about the plan — with sources" },
  { label: "Q&A Town Hall", href: "/qa", description: "Submit a question, get a real answer" },
  { label: "Donate", href: "/donate", description: "Fuel the movement — M-Pesa, card or PayPal" },
];

export function ExploreGrid() {
  const { t } = useT();
  return (
    <section className="border-t border-black/10 bg-white py-24 lg:py-32">
      <Container>
        <Kicker>Explore</Kicker>
        <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tighter text-black sm:text-5xl">
          {t("Everything you need,")}{" "}
          <span className="text-party-gold">{t("in one place.")}</span>
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-black/10 bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-party-yellow hover:shadow-[0_8px_30px_-8px_rgba(255,199,0,0.5)]"
            >
              <div>
                <h3 className="font-display text-xl font-semibold text-black">
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
