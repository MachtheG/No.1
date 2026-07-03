export type VisitStatus = "past" | "upcoming";

export interface Visit {
  id: string;
  county: string;
  town: string;
  date: string; // ISO date
  status: VisitStatus;
  theme: string;
  summary: string;
}

/**
 * Demonstration dataset — illustrative campaign stops. County names must match
 * the keys used by the KenyaMap component so the map can highlight them.
 * Replace with the real schedule before any public use.
 */
export const visits: Visit[] = [
  {
    id: "nakuru-rally",
    county: "Nakuru",
    town: "Nakuru",
    date: "2026-05-18",
    status: "past",
    theme: "Affordable Housing",
    summary: "Commissioned housing units and addressed a mega rally at Afraha Stadium.",
  },
  {
    id: "kisumu-visit",
    county: "Kisumu",
    town: "Kisumu",
    date: "2026-06-02",
    status: "past",
    theme: "Markets & Trade",
    summary: "Toured the modern market and met traders and boda boda SACCOs.",
  },
  {
    id: "meru-tour",
    county: "Meru",
    town: "Meru",
    date: "2026-06-20",
    status: "past",
    theme: "Agriculture",
    summary: "Launched fertiliser distribution and a coffee value-addition plant.",
  },
  {
    id: "mombasa-visit",
    county: "Mombasa",
    town: "Mombasa",
    date: "2026-06-28",
    status: "past",
    theme: "Blue Economy",
    summary: "Inspected port modernisation and the Dongo Kundu economic zone.",
  },
  {
    id: "uasin-gishu",
    county: "Uasin Gishu",
    town: "Eldoret",
    date: "2026-07-12",
    status: "upcoming",
    theme: "Youth & Jobs",
    summary: "Digital jobs launch and a town hall with young entrepreneurs.",
  },
  {
    id: "kakamega-visit",
    county: "Kakamega",
    town: "Kakamega",
    date: "2026-07-19",
    status: "upcoming",
    theme: "Healthcare",
    summary: "SHA registration drive and commissioning of a Level 5 hospital wing.",
  },
  {
    id: "garissa-visit",
    county: "Garissa",
    town: "Garissa",
    date: "2026-07-26",
    status: "upcoming",
    theme: "Water & Resilience",
    summary: "Water security programme launch and pastoralist economy forum.",
  },
  {
    id: "kiambu-rally",
    county: "Kiambu",
    town: "Thika",
    date: "2026-08-02",
    status: "upcoming",
    theme: "Manufacturing",
    summary: "Industrial park groundbreaking and an SME empowerment event.",
  },
];
