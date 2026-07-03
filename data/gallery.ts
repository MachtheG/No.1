import { unsplash } from "@/lib/utils";

export interface GalleryItem {
  id: string;
  caption: string;
  context: string;
  image: string;
  span: "tall" | "wide" | "square";
}

export const galleryItems: GalleryItem[] = [
  {
    id: "un-general-assembly",
    caption: "United Nations General Assembly",
    context: "New York, 2024",
    image: unsplash("photo-1750074275893-b7c6ddbf42b1"),
    span: "tall",
  },
  {
    id: "g20-summit",
    caption: "G20 Summit Roundtable",
    context: "New Delhi, 2023",
    image: unsplash("photo-1658761492656-a088d80f65c5"),
    span: "wide",
  },
  {
    id: "cop28",
    caption: "COP28 Climate Leadership Panel",
    context: "Dubai, 2023",
    image: unsplash("photo-1485394595691-5411947d63a4"),
    span: "square",
  },
  {
    id: "white-house-state-visit",
    caption: "State Visit — The White House",
    context: "Washington D.C., 2024",
    image: unsplash("photo-1594663872347-2bea8329cd94"),
    span: "tall",
  },
  {
    id: "africa-climate-summit",
    caption: "Africa Climate Summit, Host Chair",
    context: "Nairobi, 2023",
    image: unsplash("photo-1485394595691-5411947d63a4", 1400),
    span: "square",
  },
  {
    id: "au-assembly",
    caption: "African Union Assembly",
    context: "Addis Ababa, 2024",
    image: unsplash("flagged/photo-1568187113326-974ff6d0c6b6"),
    span: "wide",
  },
  {
    id: "clean-cooking-africa",
    caption: "Clean Cooking Africa Summit, Host",
    context: "Nairobi, 2024",
    image: unsplash("photo-1723967052599-93403a001bb1"),
    span: "square",
  },
  {
    id: "commonwealth-heads",
    caption: "Commonwealth Heads of Government",
    context: "Apia, 2024",
    image: unsplash("photo-1658761492656-a088d80f65c5", 1400),
    span: "tall",
  },
];

export interface LegacyQuote {
  id: string;
  quote: string;
  attribution: string;
}

export const legacyQuotes: LegacyQuote[] = [
  {
    id: "quote-1",
    quote:
      "Kenya is no longer waiting for the future to arrive — we are building it, one policy, one home, one hospital bed at a time.",
    attribution: "H.E. Dr. William Samoei Ruto",
  },
  {
    id: "quote-2",
    quote:
      "The bottom-up economic model is not a slogan. It is a mathematics of dignity for every hustler in this Republic.",
    attribution: "H.E. Dr. William Samoei Ruto",
  },
  {
    id: "quote-3",
    quote:
      "A nation's greatness is measured not by the height of its towers, but by the depth of its care for the mama mboga and the boda boda rider.",
    attribution: "H.E. Dr. William Samoei Ruto",
  },
];
