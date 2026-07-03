import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-KE").format(value);
}

/**
 * Builds an Unsplash CDN URL from a verified photo id (sourced via WebSearch
 * + WebFetch of the real unsplash.com/photos/{slug} page — never guessed).
 * Pass the id including any path prefix Unsplash uses (e.g. "flagged/photo-...").
 */
export function unsplash(id: string, width = 1600) {
  return `https://images.unsplash.com/${id}?q=80&w=${width}&auto=format&fit=crop`;
}
