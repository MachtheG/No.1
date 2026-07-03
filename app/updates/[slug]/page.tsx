import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/ui/container";
import { blogPosts, getPost } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Update" };
  return { title: post.title, description: post.excerpt };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function UpdatePost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="bg-white pb-24 pt-36 sm:pt-40">
      <Container>
        <div className="mx-auto max-w-2xl">
          <Link
            href="/updates"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-black/50 transition-colors hover:text-party-gold"
          >
            <ArrowLeft size={15} /> All updates
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <time className="text-xs uppercase tracking-widest text-black/40">
              {formatDate(post.date)}
            </time>
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-party-yellow/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-widest text-party-gold"
              >
                {t}
              </span>
            ))}
          </div>

          <h1 className="mt-4 text-balance font-display text-4xl font-medium leading-[1.1] tracking-tight text-black sm:text-5xl">
            {post.title}
          </h1>

          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-party-yellow to-party-green" />

          <div className="mt-8 space-y-5">
            {post.body.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-black/70">
                {para}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </article>
  );
}
