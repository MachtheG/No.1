export interface NavLink {
  label: string;
  href: string;
  description: string;
}

export interface NavGroup {
  label: string;
  links: NavLink[];
}

/**
 * Primary header navigation — pruned to a handful of destinations a voter
 * arriving from a WhatsApp link can scan in seconds. Everything else lives in
 * the footer sitemap (navGroups) and inside the relevant sections.
 */
export const primaryNav: NavLink[] = [
  {
    label: "My Record",
    href: "/achievements",
    description: "Every delivery, with a source you can check",
  },
  {
    label: "Second Term Plan",
    href: "/promises",
    description: "My commitments for the next chapter",
  },
  {
    label: "Manifesto",
    href: "/manifesto",
    description: "The Bottom-Up Economic Transformation Agenda",
  },
  {
    label: "My Journey",
    href: "/journey",
    description: "From Sugoi to State House",
  },
  {
    label: "Elections",
    href: "/elections",
    description: "2027 countdown & the 2022 result",
  },
];

export const navGroups: NavGroup[] = [
  {
    label: "My Record",
    links: [
      {
        label: "My Record",
        href: "/achievements",
        description: "The Transformation Ledger, audited by pillar",
      },
      {
        label: "What We've Delivered",
        href: "/delivered",
        description: "A scorecard of completed initiatives, by sector",
      },
      {
        label: "Major Projects",
        href: "/projects",
        description: "In-progress and upcoming flagship projects",
      },
      {
        label: "Manifesto",
        href: "/manifesto",
        description: "The formal policy platform, pillar by pillar",
      },
      {
        label: "Second Term Plan",
        href: "/promises",
        description: "Commitments for the next chapter",
      },
      {
        label: "Kenya on the World Stage",
        href: "/legacy",
        description: "Kenya's standing on the world stage",
      },
    ],
  },
  {
    label: "About Me",
    links: [
      {
        label: "My Journey",
        href: "/journey",
        description: "From Sugoi to State House",
      },
      {
        label: "Why Ruto",
        href: "/why-ruto",
        description: "The case for a second term, by demographic",
      },
      {
        label: "The Party",
        href: "/party",
        description: "United Democratic Alliance — Kazi ni Kazi",
      },
    ],
  },
  {
    label: "Get Involved",
    links: [
      {
        label: "Join Us",
        href: "/why-ruto#pledge",
        description: "Pledge your vote and join the movement",
      },
      {
        label: "Donate",
        href: "/donate",
        description: "Fuel the movement — M-Pesa, card or PayPal",
      },
      {
        label: "Election Center",
        href: "/elections",
        description: "2027 countdown & the 2022 result, county by county",
      },
      {
        label: "Campaign Roadmap",
        href: "/roadmap",
        description: "Where we've been and where we're going",
      },
      {
        label: "Campaign Updates",
        href: "/updates",
        description: "The latest news from the movement",
      },
      {
        label: "Ask the Manifesto (AI)",
        href: "/ask",
        description: "Ask any question about the plan — with sources",
      },
      {
        label: "Q&A Town Hall",
        href: "/qa",
        description: "Submit a question and get a real answer",
      },
      {
        label: "Media Room",
        href: "/media",
        description: "Photos and video from the field",
      },
    ],
  },
];

export const flatNavLinks: NavLink[] = navGroups.flatMap((g) => g.links);
