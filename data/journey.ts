export interface JourneyMilestone {
  year: string;
  title: string;
  description: string;
  source: { title: string; url: string; type: "article" | "video" };
  youtubeId?: string;
}

/**
 * Every entry is backed by a verified, live source — checked via WebSearch
 * and an HTTP status check, not asserted from memory.
 */
export const journeyMilestones: JourneyMilestone[] = [
  {
    year: "1966",
    title: "Born in Sambut, Uasin Gishu",
    description:
      "Born 21 December 1966 to a farming family of Kipsigis and Nandi heritage in Sambut village — a childhood of selling chicken by the roadside that would later define his 'hustler' identity.",
    source: {
      title: "William Ruto — Wikipedia",
      url: "https://en.wikipedia.org/wiki/William_Ruto",
      type: "article",
    },
  },
  {
    year: "1990",
    title: "University of Nairobi, B.Sc. Botany & Zoology",
    description:
      "Graduated from the University of Nairobi. He later returned to the same institution for an M.Sc. in 2011 and a Ph.D. in Plant Ecology in 2018 — an academic record built alongside a full-time political career.",
    source: {
      title: "William Ruto | Wife, Family, Education, Biography — Britannica",
      url: "https://www.britannica.com/biography/William-Ruto",
      type: "article",
    },
  },
  {
    year: "1992",
    title: "Co-Founds Youth for KANU '92",
    description:
      "Co-founded the youth mobilization movement backing President Daniel arap Moi's re-election — the first rung of a political career built from grassroots organizing.",
    source: {
      title: "William Ruto — Wikipedia",
      url: "https://en.wikipedia.org/wiki/William_Ruto",
      type: "article",
    },
  },
  {
    year: "1997",
    title: "Elected to Parliament, Eldoret North",
    description:
      "Won the Eldoret North parliamentary seat, re-elected in 2002, beginning three decades of continuous elected office.",
    source: {
      title: "William Ruto — Wikipedia",
      url: "https://en.wikipedia.org/wiki/William_Ruto",
      type: "article",
    },
  },
  {
    year: "2002–2010",
    title: "Cabinet Minister",
    description:
      "Served as Minister for Home Affairs, later Minister for Agriculture, and Minister for Higher Education — hands-on stewardship of portfolios now central to his presidency.",
    source: {
      title: "William Ruto | Wife, Family, Education, Biography — Britannica",
      url: "https://www.britannica.com/biography/William-Ruto",
      type: "article",
    },
  },
  {
    year: "2013",
    title: "Sworn in as Deputy President",
    description:
      "Inaugurated as Kenya's Deputy President alongside President Uhuru Kenyatta at Kasarani Stadium on 9 April 2013, having run on the Jubilee ticket dubbed 'UhuRuto.' Re-elected in 2017.",
    source: {
      title: "First inauguration of Uhuru Kenyatta — Wikipedia",
      url: "https://en.wikipedia.org/wiki/First_inauguration_of_Uhuru_Kenyatta",
      type: "article",
    },
  },
  {
    year: "2020",
    title: "Founds the United Democratic Alliance",
    description:
      "Allies register the United Democratic Alliance in December 2020 as Ruto's new political vehicle, replacing the bull symbol of the old Party for Development and Reforms with the wheelbarrow — a bottom-up movement for hustlers and traders.",
    source: {
      title: "Kenya: Has Deputy President Ruto joined the new UDA Party? — The Africa Report",
      url: "https://www.theafricareport.com/58519/kenya-has-deputy-president-ruto-joined-the-new-uda-party/",
      type: "article",
    },
  },
  {
    year: "2022",
    title: "Elected President of Kenya",
    description:
      "Declared winner of the 9 August 2022 general election by the IEBC with 50.5% of the vote, a result upheld by the Supreme Court on 5 September. Sworn in as Kenya's fifth President at Kasarani Stadium on 13 September 2022.",
    source: {
      title: "President William Ruto's Inauguration Speech at Kasarani — Full Video",
      url: "https://www.youtube.com/watch?v=5Eed1z3lT5s",
      type: "video",
    },
    youtubeId: "5Eed1z3lT5s",
  },
];
