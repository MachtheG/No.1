export interface ManifestoPillar {
  id: string;
  number: string;
  title: string;
  summary: string;
  commitments: string[];
}

/**
 * The five pillars of "The Plan" — the Kenya Kwanza Bottom-Up Economic
 * Transformation Agenda (BETA) 2022–2027, as unveiled ahead of the 2022
 * general election.
 */
export const manifestoPillars: ManifestoPillar[] = [
  {
    id: "agriculture",
    number: "01",
    title: "Agricultural Transformation & Food Security",
    summary:
      "Rebuilding the backbone of the rural economy — inputs, credit, and markets designed around the smallholder farmer, not around cartels.",
    commitments: [
      "Subsidized, e-verified fertilizer and certified seed for smallholders",
      "Warehouse receipt financing so farmers can bank their harvest",
      "Revival of collapsed cooperatives, factories, and produce boards",
    ],
  },
  {
    id: "msme",
    number: "02",
    title: "MSME Economy & Financing",
    summary:
      "The 85% of Kenya's workforce in the informal sector are the real economy — this pillar puts collateral-free capital directly in their hands.",
    commitments: [
      "The Hustler Fund: collateral-free micro-loans via mobile phone",
      "A dedicated MSME credit guarantee scheme",
      "Formalization pathways that don't punish informal traders",
    ],
  },
  {
    id: "housing",
    number: "03",
    title: "Housing & Settlement",
    summary:
      "Dignity over survival — a nationwide construction drive that builds homes and creates jobs on-site, county by county.",
    commitments: [
      "Affordable Housing Programme units across all 47 counties",
      "Public land converted into planned, serviced settlements",
      "Construction-sector jobs prioritized for local youth",
    ],
  },
  {
    id: "healthcare",
    number: "04",
    title: "Healthcare Access",
    summary:
      "Universal coverage that follows the patient, not the payslip — replacing a fragmented NHIF with needs-based national insurance.",
    commitments: [
      "The Social Health Authority (SHA): universal registration and coverage",
      "A dedicated fund for specialized and catastrophic-cost surgery",
      "Primary care expansion through community health promoters",
    ],
  },
  {
    id: "digital",
    number: "05",
    title: "Digital Superhighway & Creative Economy",
    summary:
      "Connectivity and content as economic infrastructure — putting Kenya's youth and creators onto the global digital economy.",
    commitments: [
      "Nationwide fibre rollout and affordable last-mile connectivity",
      "Digital jobs and outsourcing hubs for young graduates",
      "Legal and financial infrastructure for the creative industries",
    ],
  },
];

export const manifestoSource =
  '"The Plan" — Kenya Kwanza Bottom-Up Economic Transformation Agenda 2022–2027, unveiled June 2022.';
