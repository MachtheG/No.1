export const nextElectionDate = "2027-08-10T00:00:00+03:00";
export const nextElectionLabel = "2027 General Election";

/**
 * 2022 presidential election results by county.
 * Source: IEBC official county returns, as tabulated by Wikipedia's
 * "2022 Kenyan general election" article (https://en.wikipedia.org/wiki/2022_Kenyan_general_election)
 * and cross-referenced against IEBC's published PDF (iebc.or.ke). Only the
 * two leading candidates are shown; minor-candidate votes are omitted so the
 * two figures will not sum to the county total.
 */
export interface CountyResult {
  county: string;
  region: string;
  ruto: number;
  odinga: number;
}

export const countyResults: CountyResult[] = [
  { county: "Mombasa", region: "Coast", ruto: 113700, odinga: 161015 },
  { county: "Kwale", region: "Coast", ruto: 51918, odinga: 125541 },
  { county: "Kilifi", region: "Coast", ruto: 77331, odinga: 204536 },
  { county: "Tana River", region: "Coast", ruto: 41505, odinga: 51390 },
  { county: "Lamu", region: "Coast", ruto: 22876, odinga: 26160 },
  { county: "Taita-Taveta", region: "Coast", ruto: 29148, odinga: 81271 },
  { county: "Garissa", region: "North Eastern", ruto: 28111, odinga: 81376 },
  { county: "Wajir", region: "North Eastern", ruto: 49062, odinga: 83486 },
  { county: "Mandera", region: "North Eastern", ruto: 28351, odinga: 106279 },
  { county: "Marsabit", region: "Eastern", ruto: 58782, odinga: 55675 },
  { county: "Isiolo", region: "Eastern", ruto: 32302, odinga: 26449 },
  { county: "Meru", region: "Eastern", ruto: 398946, odinga: 103679 },
  { county: "Tharaka-Nithi", region: "Eastern", ruto: 145081, odinga: 15062 },
  { county: "Embu", region: "Eastern", ruto: 188874, odinga: 31469 },
  { county: "Kitui", region: "Eastern", ruto: 77912, odinga: 203750 },
  { county: "Machakos", region: "Eastern", ruto: 79386, odinga: 258647 },
  { county: "Makueni", region: "Eastern", ruto: 59331, odinga: 229187 },
  { county: "Nyandarua", region: "Central", ruto: 189519, odinga: 49228 },
  { county: "Nyeri", region: "Central", ruto: 272507, odinga: 52043 },
  { county: "Kirinyaga", region: "Central", ruto: 220752, odinga: 37978 },
  { county: "Murang'a", region: "Central", ruto: 310895, odinga: 67181 },
  { county: "Kiambu", region: "Central", ruto: 605761, odinga: 210302 },
  { county: "Turkana", region: "Rift Valley", ruto: 29333, odinga: 56300 },
  { county: "West Pokot", region: "Rift Valley", ruto: 109940, odinga: 63147 },
  { county: "Samburu", region: "Rift Valley", ruto: 28319, odinga: 41737 },
  { county: "Trans-Nzoia", region: "Rift Valley", ruto: 115750, odinga: 131581 },
  { county: "Uasin Gishu", region: "Rift Valley", ruto: 272862, odinga: 76032 },
  { county: "Elgeyo-Marakwet", region: "Rift Valley", ruto: 160092, odinga: 4902 },
  { county: "Nandi", region: "Rift Valley", ruto: 240820, odinga: 24872 },
  { county: "Baringo", region: "Rift Valley", ruto: 143429, odinga: 40316 },
  { county: "Laikipia", region: "Rift Valley", ruto: 105827, odinga: 34276 },
  { county: "Nakuru", region: "Rift Valley", ruto: 357439, odinga: 170169 },
  { county: "Narok", region: "Rift Valley", ruto: 132366, odinga: 106967 },
  { county: "Kajiado", region: "Rift Valley", ruto: 147974, odinga: 157704 },
  { county: "Kericho", region: "Rift Valley", ruto: 272975, odinga: 14442 },
  { county: "Bomet", region: "Rift Valley", ruto: 333491, odinga: 15132 },
  { county: "Kakamega", region: "Western", ruto: 130184, odinga: 325302 },
  { county: "Vihiga", region: "Western", ruto: 66717, odinga: 113623 },
  { county: "Bungoma", region: "Western", ruto: 255337, odinga: 144658 },
  { county: "Busia", region: "Western", ruto: 48827, odinga: 226317 },
  { county: "Siaya", region: "Nyanza", ruto: 4307, odinga: 371201 },
  { county: "Kisumu", region: "Nyanza", ruto: 10049, odinga: 419141 },
  { county: "Homa Bay", region: "Nyanza", ruto: 3469, odinga: 397499 },
  { county: "Migori", region: "Nyanza", ruto: 64645, odinga: 292451 },
  { county: "Kisii", region: "Nyanza", ruto: 133838, odinga: 262618 },
  { county: "Nyamira", region: "Nyanza", ruto: 76541, odinga: 126284 },
  { county: "Nairobi", region: "Nairobi", ruto: 560293, odinga: 760506 },
];

export const nationalResult2022 = {
  ruto: { votes: 7176141, pct: 50.49 },
  odinga: { votes: 6942930, pct: 48.85 },
  date: "9 August 2022",
  source:
    "IEBC official declaration, 15 August 2022 (iebc.or.ke); tabulated via Wikipedia, \"2022 Kenyan general election\"",
};
