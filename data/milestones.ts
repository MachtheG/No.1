export type Pillar = "economy" | "health" | "housing" | "diplomacy";

export interface Milestone {
  id: string;
  pillar: Pillar;
  year: string;
  title: string;
  description: string;
  metric: { value: string; label: string };
  source: { title: string; url: string; type: "article" | "video" };
  youtubeId?: string;
}

export const pillarMeta: Record<
  Pillar,
  { label: string; color: string; description: string }
> = {
  economy: {
    label: "Economic Transformation",
    color: "uda",
    description: "The Hustler Fund & bottom-up economic model",
  },
  health: {
    label: "Universal Healthcare",
    color: "forest",
    description: "The Social Health Authority transition",
  },
  housing: {
    label: "Affordable Housing",
    color: "uda",
    description: "Dignity over survival — homes for every Kenyan",
  },
  diplomacy: {
    label: "Global Diplomacy",
    color: "forest",
    description: "Clean Cooking Africa & international stature",
  },
};

/**
 * Every milestone below is backed by a verified, live source (news article
 * or official/State House-linked YouTube video) — checked via WebSearch and
 * an HTTP status check, not asserted from memory. Figures are quoted as
 * reported by the cited source, with the reporting date noted.
 */
export const milestones: Milestone[] = [
  {
    id: "hustler-fund",
    pillar: "economy",
    year: "2025",
    title: "Hustler Fund Disburses Sh80 Billion",
    description:
      "Since its November 2022 launch, the Hustler Fund has grown from a collateral-free micro-loan platform into a savings and credit-building program reaching millions of previously unbanked Kenyans.",
    metric: { value: "Sh80B", label: "Disbursed as of November 2025" },
    source: {
      title:
        "Ruto: Hustler Fund has disbursed Sh80 billion to boost financial inclusion",
      url: "https://www.the-star.co.ke/news/2025-11-11-ruto-hustler-fund-has-disbursed-sh80-billion-to-boost-financial-inclusion",
      type: "article",
    },
  },
  {
    id: "fertilizer-subsidy",
    pillar: "economy",
    year: "2024",
    title: "Fertilizer Subsidy Cuts Farmer Costs by 58%",
    description:
      "Subsidized fertilizer distribution grew more than sixfold between 2022 and 2024 as the price per bag fell from KES 6,000 to KES 2,500 — a key driver behind national maize harvests rising from 44 million to 67 million bags.",
    metric: { value: "8.6M", label: "Bags distributed in 2024" },
    source: {
      title:
        "Two years of 'Bottom-Up': What has Ruto's economic agenda for Kenya achieved?",
      url: "https://citizen.digital/article/two-years-of-bottom-up-what-has-rutos-economic-agenda-for-kenya-achieved-n349574",
      type: "article",
    },
  },
  {
    id: "sha-launch",
    pillar: "health",
    year: "2024",
    title: "Social Health Authority Replaces NHIF",
    description:
      "On 1 October 2024 the Social Health Authority officially took over from the National Hospital Insurance Fund, moving Kenya toward needs-based universal coverage rather than a fragmented insurance model.",
    metric: { value: "27M", label: "Kenyans registered under SHA" },
    source: {
      title: "Kenya to Officially Launch Social Health Authority on October 1, 2024",
      url: "https://www.health.go.ke/kenya-officially-launch-social-health-authority-october-1-2024",
      type: "article",
    },
  },
  {
    id: "sha-cancer-cover",
    pillar: "health",
    year: "2025",
    title: "Cancer Treatment Cover Raised to Sh800,000",
    description:
      "Responding to the rising cost of sustained cancer care, President Ruto announced the SHA cancer benefits package would rise from Sh550,000 to Sh800,000 per household, effective 1 December 2025.",
    metric: { value: "Sh800K", label: "Cancer cover per household" },
    source: {
      title:
        "Ruto: SHA to enhance cancer package from Ksh.550K to Ksh.800K from December",
      url: "https://www.citizen.digital/article/ruto-sha-to-enhance-cancer-package-from-ksh550k-to-ksh800k-from-december-n373338",
      type: "video",
    },
    youtubeId: "Ydv0P1EJBZ0",
  },
  {
    id: "affordable-housing",
    pillar: "housing",
    year: "2025",
    title: "Affordable Housing Programme Scales Nationwide",
    description:
      "The government's flagship housing drive has moved from groundbreaking to delivery, with thousands of units complete and tens of thousands more under active construction across the country.",
    metric: { value: "161,911", label: "Units under construction nationwide" },
    source: {
      title: "Reality check: Success, hurdles in Ruto's affordable housing dream",
      url: "https://nation.africa/kenya/news/success-hurdles-in-ruto-affordable-housing-dream-5250536",
      type: "article",
    },
  },
  {
    id: "makasembo-handover",
    pillar: "housing",
    year: "2025",
    title: "910 Units Handed Over at Makasembo, Kisumu",
    description:
      "The LAPFUND Makasembo Affordable Housing Project delivered 910 completed units with groundbreaking held for a third phase — one of the programme's largest single handovers to date.",
    metric: { value: "910", label: "Units delivered, Kisumu" },
    source: {
      title: "Ruto, Raila to commission LAPFUND Makasembo housing project in Kisumu",
      url: "https://www.the-star.co.ke/news/2025-05-29-ruto-raila-to-commission-kisumu-housing-project",
      type: "article",
    },
  },
  {
    id: "un-food-systems",
    pillar: "diplomacy",
    year: "2025",
    title: "Represents Kenya at the UN Food Systems Summit",
    description:
      "President Ruto addressed the 2nd UN Food Systems Summit in Addis Ababa, pressing the case for accelerated global action on hunger and climate-smart agriculture.",
    metric: { value: "2nd", label: "UN Food Systems Summit attended" },
    source: {
      title: "President Ruto Attends the 2nd UN Food Systems Summit, Addis Ababa, Ethiopia",
      url: "https://www.youtube.com/watch?v=zEOyCaFr8Ag",
      type: "video",
    },
    youtubeId: "zEOyCaFr8Ag",
  },
  {
    id: "clean-cooking-cochair",
    pillar: "diplomacy",
    year: "2026",
    title: "Kenya to Co-Chair 2026 Africa Clean Cooking Summit",
    description:
      "Building on the $2.2 billion mobilized at the 2024 Paris summit, Kenya will co-chair the second major Summit on Clean Cooking in Africa in Nairobi, alongside the US, Norway, and the IEA.",
    metric: { value: "$2.2B", label: "Mobilized at the 2024 Paris summit" },
    source: {
      title: "Kenya, Norway, US and IEA to hold 2nd major Summit on Clean Cooking in Africa",
      url: "https://www.iea.org/news/kenya-norway-us-and-iea-to-hold-2nd-major-summit-on-clean-cooking-in-africa",
      type: "article",
    },
  },
];
