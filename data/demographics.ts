export interface Demographic {
  id: string;
  label: string;
  icon: "sprout" | "bike" | "store" | "graduation-cap" | "hammer" | "stethoscope";
  benefits: { title: string; detail: string }[];
}

export const demographics: Demographic[] = [
  {
    id: "farmer",
    label: "Smallholder Farmer",
    icon: "sprout",
    benefits: [
      {
        title: "Subsidized Fertilizer Access",
        detail: "E-verified depots cut input costs by up to 50%",
      },
      {
        title: "Warehouse Receipt Financing",
        detail: "Bank your harvest as collateral for fair-rate credit",
      },
      {
        title: "SHA Coverage",
        detail: "Family healthcare secured without depleting farm income",
      },
    ],
  },
  {
    id: "boda-boda",
    label: "Boda Boda Rider",
    icon: "bike",
    benefits: [
      {
        title: "Hustler Fund Micro-Loans",
        detail: "Collateral-free credit for bike maintenance & fuel",
      },
      {
        title: "SHA Accident Cover",
        detail: "Full-cost trauma and surgical coverage on the road",
      },
      {
        title: "Boda Boda SACCO Support",
        detail: "Pathways to bike ownership through group savings",
      },
    ],
  },
  {
    id: "trader",
    label: "Mama Mboga / Trader",
    icon: "store",
    benefits: [
      {
        title: "Hustler Fund Working Capital",
        detail: "Same-day mobile loans to restock inventory",
      },
      {
        title: "Market Infrastructure",
        detail: "Modern, sanitary market stalls under county upgrades",
      },
      {
        title: "SHA Family Cover",
        detail: "Comprehensive care without catastrophic medical debt",
      },
    ],
  },
  {
    id: "student",
    label: "Student / Graduate",
    icon: "graduation-cap",
    benefits: [
      {
        title: "University Funding Model",
        detail: "Needs-based scholarships and loans restructured for fairness",
      },
      {
        title: "Digital Jobs Programme",
        detail: "Access to the global gig economy through tech hubs",
      },
      {
        title: "Affordable Housing",
        detail: "First-home ownership pathways from early career",
      },
    ],
  },
  {
    id: "construction",
    label: "Construction Worker",
    icon: "hammer",
    benefits: [
      {
        title: "Affordable Housing Jobs",
        detail: "Direct employment across 47-county housing sites",
      },
      {
        title: "NSSF Enhanced Contributions",
        detail: "Stronger retirement security for informal labor",
      },
      {
        title: "SHA Injury Cover",
        detail: "On-site injury and rehabilitation fully covered",
      },
    ],
  },
  {
    id: "healthcare",
    label: "Patient / Caregiver",
    icon: "stethoscope",
    benefits: [
      {
        title: "Specialized Surgery Fund",
        detail: "Cardiac, oncology & renal procedures now covered",
      },
      {
        title: "Chronic Illness Management",
        detail: "Continuous care without exhausting family savings",
      },
      {
        title: "Primary Care Network",
        detail: "Expanded community health promoter coverage",
      },
    ],
  },
];
