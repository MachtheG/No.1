import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { blogPosts, getPost } from "@/data/blog";
import { UpdatePostContent } from "@/components/updates/update-post-content";

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

export default async function UpdatePost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return <UpdatePostContent post={post} />;
}
