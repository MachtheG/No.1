export interface KBEntry {
  keywords: string[];
  answer: string;
}

/**
 * Curated knowledge base for the campaign assistant. In production this would
 * be backed by a retrieval system over verified campaign content and reviewed
 * for accuracy. For this demo it is a simple keyword-matched responder — it
 * only answers from the entries below and never invents facts.
 */
export const knowledgeBase: KBEntry[] = [
  {
    keywords: ["hustler", "fund", "loan", "credit"],
    answer:
      "The Hustler Fund provides collateral-free micro-loans directly via mobile phone. As reported, it has disbursed around Sh80 billion and built a savings culture among millions of previously unbanked Kenyans. See My Record for the sourced details.",
  },
  {
    keywords: ["sha", "health", "nhif", "hospital", "insurance"],
    answer:
      "The Social Health Authority (SHA) replaced NHIF on 1 October 2024, moving Kenya toward needs-based universal coverage, with over 27 million registered. Cancer cover has been enhanced to Sh800,000 per household. More on My Record.",
  },
  {
    keywords: ["housing", "home", "affordable", "rent"],
    answer:
      "The Affordable Housing Programme is delivering dignified homes and on-site jobs across the counties, with tens of thousands of units under construction. See What We've Delivered and Major Projects.",
  },
  {
    keywords: ["fertiliser", "fertilizer", "farmer", "agriculture", "maize", "food"],
    answer:
      "The subsidised fertiliser programme cut input costs by more than half, helping lift national maize harvests. Details and sources are on My Record.",
  },
  {
    keywords: ["manifesto", "plan", "policy", "pillar", "bottom"],
    answer:
      "My Manifesto is the Bottom-Up Economic Transformation Agenda — five pillars: agriculture, the MSME/hustler economy, housing, healthcare, and the digital superhighway. Read the full breakdown on the My Manifesto page.",
  },
  {
    keywords: ["election", "2027", "vote", "countdown", "iebc"],
    answer:
      "The next General Election is confirmed by the IEBC for Tuesday, 10 August 2027. The Election Center has a live countdown and the full 2022 result mapped county by county.",
  },
  {
    keywords: ["uda", "party", "wheelbarrow", "kazi"],
    answer:
      "The United Democratic Alliance (UDA) is the party behind the movement — symbol: the wheelbarrow; slogan: 'Kazi ni Kazi' (every hustle matters). See The Party page.",
  },
  {
    keywords: ["donate", "donation", "contribute", "mpesa", "support"],
    answer:
      "You can support the movement via M-Pesa, card, or PayPal on the Donate page. (In this demo, payments are a UI scaffold and are not processed.)",
  },
  {
    keywords: ["visit", "roadmap", "county", "where", "rally"],
    answer:
      "The Campaign Roadmap shows where the movement has been and where it's going next, on an interactive map of all 47 counties.",
  },
];

export const fallbackAnswer =
  "I can help with questions about the record, manifesto, promises, the 2027 election, the party, campaign visits, and how to get involved. Try asking about the Hustler Fund, SHA, housing, or the manifesto.";

export function answerFor(query: string): string {
  const q = query.toLowerCase();
  let best: KBEntry | null = null;
  let bestScore = 0;
  for (const entry of knowledgeBase) {
    const score = entry.keywords.reduce(
      (acc, k) => acc + (q.includes(k) ? 1 : 0),
      0
    );
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }
  return best && bestScore > 0 ? best.answer : fallbackAnswer;
}
