"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { blogPosts } from "@/data/blog";
import { useT } from "@/lib/i18n";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function UpdatesContent() {
  const { t } = useT();
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHero
        kicker="Campaign Updates"
        title="The latest from"
        accent="the movement."
        description="News, milestones and stories from the field — updated as the work continues."
      />
      <section className="border-t border-black/10 bg-white py-20 lg:py-28">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/updates/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-black/10 bg-black/[0.02] p-7 transition-colors hover:border-party-yellow/40"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <time className="text-xs uppercase tracking-widest text-black/40">
                    {formatDate(post.date)}
                  </time>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-party-yellow/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-widest text-party-gold"
                    >
                      {t(tag)}
                    </span>
                  ))}
                </div>
                <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-black">
                  {t(post.title)}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-black/50">
                  {t(post.excerpt)}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-party-gold">
                  {t("Read update")}
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
