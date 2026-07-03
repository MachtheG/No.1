export type Sector =
  | "Healthcare"
  | "Housing"
  | "Economy"
  | "Agriculture"
  | "Education"
  | "Infrastructure"
  | "Digital";

export const sectors: Sector[] = [
  "Healthcare",
  "Housing",
  "Economy",
  "Agriculture",
  "Education",
  "Infrastructure",
  "Digital",
];

export interface DeliveredItem {
  id: string;
  title: string;
  sector: Sector;
  metric: string;
  metricLabel: string;
  county: string; // "Nationwide" or a specific county
  blurb: string;
}

/**
 * Demonstration dataset — representative of the administration's stated
 * delivery areas. Figures are illustrative placeholders for this demo build
 * and should be replaced with verified official figures before any public use.
 */
export const deliveredItems: DeliveredItem[] = [
  {
    id: "sha-registration",
    title: "Universal Health Coverage Rollout",
    sector: "Healthcare",
    metric: "27M+",
    metricLabel: "Kenyans registered under SHA",
    county: "Nationwide",
    blurb:
      "The Social Health Authority replaced NHIF, extending needs-based coverage to households across all 47 counties.",
  },
  {
    id: "housing-units",
    title: "Affordable Housing Units",
    sector: "Housing",
    metric: "161,000+",
    metricLabel: "Units under construction",
    county: "Nationwide",
    blurb:
      "A nationwide construction drive delivering dignified homes and on-site jobs, county by county.",
  },
  {
    id: "hustler-fund",
    title: "Hustler Fund Disbursements",
    sector: "Economy",
    metric: "Sh80B",
    metricLabel: "Disbursed to borrowers",
    county: "Nationwide",
    blurb:
      "Collateral-free micro-credit delivered to millions of previously unbanked traders and hustlers.",
  },
  {
    id: "fertilizer",
    title: "Subsidised Fertiliser Programme",
    sector: "Agriculture",
    metric: "8.6M",
    metricLabel: "Bags distributed",
    county: "Nationwide",
    blurb:
      "Input costs cut by more than half, helping lift national maize harvests to record levels.",
  },
  {
    id: "school-funding",
    title: "University & TVET Funding Model",
    sector: "Education",
    metric: "900K+",
    metricLabel: "Students supported",
    county: "Nationwide",
    blurb:
      "A restructured, needs-based higher-education funding model prioritising the most vulnerable students.",
  },
  {
    id: "roads",
    title: "Road Network Expansion",
    sector: "Infrastructure",
    metric: "2,000km+",
    metricLabel: "Roads under delivery",
    county: "Nationwide",
    blurb:
      "New and rehabilitated road corridors connecting agricultural zones to markets.",
  },
  {
    id: "digital-jobs",
    title: "Digital Superhighway & Jobs",
    sector: "Digital",
    metric: "1M+",
    metricLabel: "Digital jobs targeted",
    county: "Nationwide",
    blurb:
      "Fibre rollout and digital hubs connecting young Kenyans to the global online economy.",
  },
  {
    id: "cancer-cover",
    title: "Enhanced Cancer Cover",
    sector: "Healthcare",
    metric: "Sh800K",
    metricLabel: "Cover per household",
    county: "Nationwide",
    blurb:
      "SHA's cancer benefit raised to ease the cost of sustained, specialised treatment.",
  },
  {
    id: "markets",
    title: "Modern Markets Programme",
    sector: "Economy",
    metric: "300+",
    metricLabel: "Markets planned & built",
    county: "Nationwide",
    blurb:
      "Modern, sanitary market infrastructure supporting mama mbogas and small traders.",
  },
];
