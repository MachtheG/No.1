export interface Promise {
  id: string;
  title: string;
  pledge: string;
  horizon: string;
}

export const promises: Promise[] = [
  {
    id: "sha-completion",
    title: "Complete Universal Health Coverage",
    pledge:
      "Every Kenyan household registered under SHA, with primary care available within 5km of every home and zero catastrophic out-of-pocket surgery bills.",
    horizon: "By 2027",
  },
  {
    id: "housing-scale",
    title: "One Million Affordable Homes",
    pledge:
      "Scale the Affordable Housing Programme to one million delivered units, with integrated markets, schools, and green space in every settlement.",
    horizon: "By 2030",
  },
  {
    id: "hustler-fund-graduation",
    title: "Hustler Fund Graduation Pathways",
    pledge:
      "Move successful Hustler Fund borrowers into formal SACCO and bank credit lines, turning micro-loans into growing small businesses.",
    horizon: "Ongoing",
  },
  {
    id: "food-security",
    title: "End Reliance on Food Imports",
    pledge:
      "Achieve staple food self-sufficiency through irrigation expansion, input subsidies, and value-addition infrastructure for smallholder farmers.",
    horizon: "By 2027",
  },
  {
    id: "digital-jobs",
    title: "One Million Digital Jobs",
    pledge:
      "Connect one million young Kenyans to the global digital economy through outsourcing hubs, fibre rollout, and creative-economy financing.",
    horizon: "By 2027",
  },
  {
    id: "clean-cooking",
    title: "Clean Cooking for Every Household",
    pledge:
      "Continue the Clean Cooking Africa Initiative to transition Kenyan households away from harmful biomass fuels toward affordable clean energy.",
    horizon: "By 2028",
  },
];
