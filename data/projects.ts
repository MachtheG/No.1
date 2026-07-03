export type ProjectStatus = "in-progress" | "upcoming";
export type ProjectStage = "planning" | "procurement" | "construction" | "commissioning";

export interface Project {
  id: string;
  name: string;
  sector: string;
  county: string;
  status: ProjectStatus;
  stage: ProjectStage;
  progress: number; // 0–100
  target: string;
  summary: string;
}

/**
 * Demonstration dataset — illustrative projects representative of the
 * administration's programme areas. Replace with verified project records
 * before any public use.
 */
export const projects: Project[] = [
  {
    id: "mukuru-housing",
    name: "Mukuru Affordable Housing Estate",
    sector: "Housing",
    county: "Nairobi",
    status: "in-progress",
    stage: "construction",
    progress: 62,
    target: "13,000 units by 2027",
    summary:
      "One of the largest single housing settlements under the Affordable Housing Programme, replacing informal structures with serviced homes.",
  },
  {
    id: "talanta-stadium",
    name: "Talanta Sports City",
    sector: "Infrastructure",
    county: "Nairobi",
    status: "in-progress",
    stage: "construction",
    progress: 48,
    target: "60,000-seat stadium",
    summary:
      "A modern sporting and events complex to anchor Kenya's hosting ambitions and the creative economy.",
  },
  {
    id: "makasembo-phase3",
    name: "Makasembo Housing — Phase Three",
    sector: "Housing",
    county: "Kisumu",
    status: "in-progress",
    stage: "construction",
    progress: 35,
    target: "9,100 units total",
    summary:
      "Expansion of the LAPFUND Makasembo estate following the handover of earlier phases.",
  },
  {
    id: "dongo-kundu",
    name: "Dongo Kundu Special Economic Zone",
    sector: "Economy",
    county: "Mombasa",
    status: "in-progress",
    stage: "procurement",
    progress: 22,
    target: "Industrial & logistics hub",
    summary:
      "A coastal special economic zone intended to attract manufacturing and create export-oriented jobs.",
  },
  {
    id: "county-aggregation",
    name: "County Aggregation & Industrial Parks",
    sector: "Agriculture",
    county: "Nationwide",
    status: "upcoming",
    stage: "planning",
    progress: 8,
    target: "One park per county",
    summary:
      "Value-addition parks to process agricultural produce closer to the farm and cut post-harvest losses.",
  },
  {
    id: "last-mile-fibre",
    name: "Last-Mile Fibre Connectivity",
    sector: "Digital",
    county: "Nationwide",
    status: "upcoming",
    stage: "planning",
    progress: 15,
    target: "100,000km fibre",
    summary:
      "Extending the national fibre backbone to wards and villages to power the digital economy.",
  },
  {
    id: "coastal-water",
    name: "Coastal Water Security Programme",
    sector: "Infrastructure",
    county: "Kilifi",
    status: "upcoming",
    stage: "planning",
    progress: 5,
    target: "Desalination & storage",
    summary:
      "Water infrastructure to address chronic shortages along the coast and support tourism and agriculture.",
  },
  {
    id: "tvet-expansion",
    name: "TVET Centres of Excellence",
    sector: "Education",
    county: "Nationwide",
    status: "upcoming",
    stage: "planning",
    progress: 12,
    target: "Constituency-level TVETs",
    summary:
      "New technical and vocational training centres to build the skilled workforce the economy needs.",
  },
];

export const stageLabels: Record<ProjectStage, string> = {
  planning: "Planning",
  procurement: "Procurement",
  construction: "Construction",
  commissioning: "Commissioning",
};
