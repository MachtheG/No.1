export const partyProfile = {
  name: "United Democratic Alliance",
  abbreviation: "UDA",
  founded: "Registered December 2020; renamed United Democratic Alliance 8 January 2021",
  symbol: "The Wheelbarrow",
  symbolMeaning:
    "Representing the worth, respect, and dignity of work — the tools of the hustler economy, elevated to a national symbol.",
  slogan: "Kazi ni Kazi",
  sloganMeaning: "\"A job is a job\" — every hustle matters, none is beneath dignity.",
  leader: "H.E. Dr. William Samoei Ruto",
  coalition: "Kenya Kwanza Alliance",
  colors: [
    { name: "Yellow", hex: "#FFD700" },
    { name: "Black", hex: "#000000" },
    { name: "Green", hex: "#008000" },
    { name: "White", hex: "#FFFFFF" },
  ],
};

export interface PartyValue {
  title: string;
  description: string;
}

export const partyValues: PartyValue[] = [
  {
    title: "Bottom-Up, Not Trickle-Down",
    description:
      "An economic philosophy that channels resources to the base of the pyramid first — the mama mboga, the boda boda rider, the smallholder farmer.",
  },
  {
    title: "Dignity of Work",
    description:
      "No hustle is beneath dignity. The wheelbarrow, not the boardroom, is UDA's founding symbol.",
  },
  {
    title: "Grassroots Democracy",
    description:
      "A party built on ward-level organizing and direct nominations, not dynastic gatekeeping.",
  },
  {
    title: "Inclusive Nationhood",
    description:
      "A coalition-first approach to governance that reaches across Kenya's regions and communities.",
  },
];
