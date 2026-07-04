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
    date: "2026-04-14",
    status: "past",
    theme: "Affordable Housing",
    summary: "Commissioned housing units and addressed a mega rally at Afraha Stadium.",
  },
  {
    id: "kisumu-visit",
    county: "Kisumu",
    town: "Kisumu",
    date: "2026-04-22",
    status: "past",
    theme: "Markets & Trade",
    summary: "Toured the modern market and met traders and boda boda SACCOs.",
  },
  {
    id: "kilifi-visit",
    county: "Kilifi",
    town: "Malindi",
    date: "2026-04-29",
    status: "past",
    theme: "Blue Economy",
    summary: "Toured fishing cooperatives and launched a coastal tourism revival initiative.",
  },
  {
    id: "machakos-visit",
    county: "Machakos",
    town: "Machakos",
    date: "2026-05-06",
    status: "past",
    theme: "Water & Irrigation",
    summary: "Commissioned a dam expansion and met smallholder irrigation farmers.",
  },
  {
    id: "meru-tour",
    county: "Meru",
    town: "Meru",
    date: "2026-05-13",
    status: "past",
    theme: "Agriculture",
    summary: "Launched fertiliser distribution and a coffee value-addition plant.",
  },
  {
    id: "nyeri-visit",
    county: "Nyeri",
    town: "Nyeri",
    date: "2026-05-20",
    status: "past",
    theme: "Manufacturing",
    summary: "Toured a textile factory and met dairy cooperative leaders.",
  },
  {
    id: "mombasa-visit",
    county: "Mombasa",
    town: "Mombasa",
    date: "2026-05-27",
    status: "past",
    theme: "Blue Economy",
    summary: "Inspected port modernisation and the Dongo Kundu economic zone.",
  },
  {
    id: "kakamega-visit",
    county: "Kakamega",
    town: "Kakamega",
    date: "2026-06-03",
    status: "past",
    theme: "Healthcare",
    summary: "SHA registration drive and commissioning of a Level 5 hospital wing.",
  },
  {
    id: "kisii-visit",
    county: "Kisii",
    town: "Kisii",
    date: "2026-06-10",
    status: "past",
    theme: "Agriculture",
    summary: "Launched a tea and banana value-addition cooperative programme.",
  },
  {
    id: "turkana-visit",
    county: "Turkana",
    town: "Lodwar",
    date: "2026-06-17",
    status: "past",
    theme: "Water & Resilience",
    summary: "Commissioned a borehole electrification project and met pastoralist leaders.",
  },
  {
    id: "kajiado-visit",
    county: "Kajiado",
    town: "Kajiado",
    date: "2026-06-24",
    status: "past",
    theme: "Youth & Jobs",
    summary: "Digital jobs hub launch and a town hall with young entrepreneurs.",
  },
  {
    id: "garissa-visit",
    county: "Garissa",
    town: "Garissa",
    date: "2026-07-01",
    status: "past",
    theme: "Water & Resilience",
    summary: "Water security programme launch and pastoralist economy forum.",
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
    id: "kiambu-rally",
    county: "Kiambu",
    town: "Thika",
    date: "2026-07-19",
    status: "upcoming",
    theme: "Manufacturing",
    summary: "Industrial park groundbreaking and an SME empowerment event.",
  },
  {
    id: "bungoma-visit",
    county: "Bungoma",
    town: "Bungoma",
    date: "2026-07-26",
    status: "upcoming",
    theme: "Agriculture",
    summary: "Sugar sector reform forum and fertiliser depot commissioning.",
  },
  {
    id: "kericho-visit",
    county: "Kericho",
    town: "Kericho",
    date: "2026-08-02",
    status: "upcoming",
    theme: "Manufacturing",
    summary: "Tea factory modernisation launch and workers' welfare forum.",
  },
  {
    id: "homa-bay-visit",
    county: "Homa Bay",
    town: "Homa Bay",
    date: "2026-08-09",
    status: "upcoming",
    theme: "Blue Economy",
    summary: "Lake Victoria fisheries investment forum and cold-chain facility launch.",
  },
  {
    id: "nairobi-visit",
    county: "Nairobi",
    town: "Nairobi",
    date: "2026-08-16",
    status: "upcoming",
    theme: "Housing & Jobs",
    summary: "Affordable housing handover and a national youth employment summit.",
  },
  {
    id: "wajir-visit",
    county: "Wajir",
    town: "Wajir",
    date: "2026-08-23",
    status: "upcoming",
    theme: "Water & Resilience",
    summary: "Livestock market modernisation and drought resilience programme launch.",
  },
  {
    id: "kirinyaga-visit",
    county: "Kirinyaga",
    town: "Kerugoya",
    date: "2026-08-30",
    status: "upcoming",
    theme: "Agriculture",
    summary: "Rice irrigation scheme expansion and farmer cooperative empowerment forum.",
  },
];
