export interface NavLink {
  label: string;
  href: string;
  description: string;
}

export interface NavGroup {
  label: string;
  links: NavLink[];
}

export const navGroups: NavGroup[] = [
  {
    label: "The Record",
    links: [
      {
        label: "Achievements",
        href: "/achievements",
        description: "The Transformation Ledger, audited by pillar",
      },
      {
        label: "Manifesto",
        href: "/manifesto",
        description: "The formal policy platform, pillar by pillar",
      },
      {
        label: "Promises",
        href: "/promises",
        description: "Commitments for the next chapter",
      },
      {
        label: "Legacy",
        href: "/legacy",
        description: "Kenya's standing on the world stage",
      },
    ],
  },
  {
    label: "About Him",
    links: [
      {
        label: "Journey to Presidency",
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
        label: "Election Center",
        href: "/elections",
        description: "2027 countdown & the 2022 result, county by county",
      },
      {
        label: "Media Room",
        href: "/media",
        description: "Photos and video from the field",
      },
      {
        label: "Ask the President",
        href: "/contact",
        description: "Send a question or a message directly",
      },
    ],
  },
];

export const flatNavLinks: NavLink[] = navGroups.flatMap((g) => g.links);
