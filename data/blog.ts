export interface BlogPost {
  slug: string;
  title: string;
  date: string; // ISO date
  tags: string[];
  excerpt: string;
  body: string[]; // paragraphs
}

/**
 * Demonstration content — illustrative campaign updates. Replace with real
 * posts from the communications team before any public use.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "housing-milestone-nairobi",
    title: "Handing Over the Keys: A Housing Milestone in Nairobi",
    date: "2026-06-30",
    tags: ["Housing", "Nairobi"],
    excerpt:
      "Families moved into newly completed units this week as the Affordable Housing Programme crossed another delivery milestone.",
    body: [
      "This week we handed over keys to families at one of our flagship housing settlements — a moment that captures what the bottom-up agenda is about: dignity, ownership, and a stake in the nation's future.",
      "Every unit delivered is a job created on-site and a family lifted out of the rent trap. We remain focused on scaling delivery across all 47 counties.",
      "To every hustler saving toward a home: this programme is built for you.",
    ],
  },
  {
    slug: "hustler-fund-anniversary",
    title: "The Hustler Fund: Financial Inclusion at Scale",
    date: "2026-06-15",
    tags: ["Economy", "Hustler Fund"],
    excerpt:
      "Billions disbursed, millions of savers — a look at how collateral-free credit is reshaping the informal economy.",
    body: [
      "When we launched the Hustler Fund, the goal was simple: put affordable, collateral-free credit in the hands of the people the old system ignored.",
      "Today, millions of Kenyans have borrowed, repaid, and — importantly — saved. That savings culture is the foundation of a stronger, more inclusive economy.",
      "The next phase is graduation: moving successful borrowers into larger SACCO and bank facilities so they can grow.",
    ],
  },
  {
    slug: "healthcare-that-follows-you",
    title: "Healthcare That Follows the Patient, Not the Payslip",
    date: "2026-05-28",
    tags: ["Healthcare", "SHA"],
    excerpt:
      "The Social Health Authority is extending needs-based coverage to households that were previously left behind.",
    body: [
      "Universal health coverage is not a slogan — it is a promise that no family should be bankrupted by illness.",
      "Through the Social Health Authority, we are registering households, contracting facilities, and enhancing cover for the most catastrophic costs, including cancer treatment.",
      "There is more work to do, and we are doing it — transparently and with the patient at the centre.",
    ],
  },
  {
    slug: "agriculture-record-harvest",
    title: "From Subsidy to Surplus: A Record Harvest Season",
    date: "2026-05-10",
    tags: ["Agriculture"],
    excerpt:
      "Subsidised inputs and better logistics are translating into fuller granaries for smallholder farmers.",
    body: [
      "Cutting the cost of fertiliser was never about politics — it was about restoring the dignity and profitability of the smallholder farmer.",
      "With inputs more affordable and delivered closer to the farm, harvests are up and more families are selling surplus rather than borrowing to eat.",
      "Food security is national security, and we are building it season by season.",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
