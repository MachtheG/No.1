export interface QuickStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export const quickStats: QuickStat[] = [
  {
    id: "sha",
    value: 15.6,
    suffix: "M",
    label: "Kenyans Registered",
    sublabel: "Social Health Authority (SHA)",
  },
  {
    id: "housing",
    value: 141000,
    suffix: "+",
    label: "Housing Units Delivered",
    sublabel: "Affordable Housing Programme",
  },
  {
    id: "fertilizer",
    value: 12.5,
    suffix: "M",
    label: "Subsidized Fertilizer Bags",
    sublabel: "Reaching smallholder farmers",
  },
  {
    id: "hustler",
    value: 314,
    suffix: "B",
    label: "KES Disbursed",
    sublabel: "Hustler Fund micro-loans",
  },
];
