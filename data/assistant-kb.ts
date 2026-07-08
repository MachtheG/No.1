import type { Lang } from "@/lib/i18n";

export interface KBSource {
  label: string;
  href: string;
}

export interface KBEntry {
  keywords: string[];
  answer: string;
  answerSw: string;
  source?: KBSource;
}

export interface KBResult {
  answer: string;
  source?: KBSource;
}

/**
 * Curated, grounded knowledge base for the manifesto assistant. Answers only
 * from these entries — it never invents facts — and cites a source link where
 * one exists, in English or Swahili. In production this would be a retrieval
 * layer over reviewed campaign content.
 */
export const knowledgeBase: KBEntry[] = [
  {
    keywords: ["hustler", "fund", "loan", "credit", "mkopo"],
    answer:
      "The Hustler Fund provides collateral-free micro-loans directly via mobile phone. As reported, it has disbursed around Sh80 billion and built a savings culture among millions of previously unbanked Kenyans.",
    answerSw:
      "Hustler Fund hutoa mikopo midogo bila dhamana moja kwa moja kupitia simu. Kwa mujibu wa ripoti, imetoa takribani Sh80 bilioni na kujenga utamaduni wa kuweka akiba kwa mamilioni ya Wakenya.",
    source: {
      label: "The Star — Sh80 billion disbursed",
      href: "https://www.the-star.co.ke/news/2025-11-11-ruto-hustler-fund-has-disbursed-sh80-billion-to-boost-financial-inclusion",
    },
  },
  {
    keywords: ["sha", "health", "nhif", "hospital", "insurance", "afya", "matibabu"],
    answer:
      "The Social Health Authority (SHA) replaced NHIF on 1 October 2024, moving Kenya toward needs-based universal coverage, with over 27 million registered. Cancer cover has been enhanced to Sh800,000 per household.",
    answerSw:
      "Mamlaka ya Afya ya Jamii (SHA) ilichukua nafasi ya NHIF tarehe 1 Oktoba 2024, ikielekea kwenye bima ya afya kwa wote, na zaidi ya Wakenya milioni 27 wamejisajili. Bima ya saratani imeongezwa hadi Sh800,000 kwa kila kaya.",
    source: {
      label: "Ministry of Health — SHA launch",
      href: "https://www.health.go.ke/kenya-officially-launch-social-health-authority-october-1-2024",
    },
  },
  {
    keywords: ["housing", "home", "affordable", "rent", "nyumba", "makazi"],
    answer:
      "The Affordable Housing Programme is delivering dignified homes and on-site jobs across the counties, with over 161,000 units under construction nationwide.",
    answerSw:
      "Mpango wa Nyumba za Bei Nafuu unatoa nyumba za heshima na ajira maeneo ya ujenzi kote nchini, na zaidi ya nyumba 161,000 zinajengwa.",
    source: {
      label: "Nation — Affordable housing progress",
      href: "https://nation.africa/kenya/news/success-hurdles-in-ruto-affordable-housing-dream-5250536",
    },
  },
  {
    keywords: ["fertiliser", "fertilizer", "farmer", "agriculture", "maize", "food", "mbolea", "kilimo"],
    answer:
      "The subsidised fertiliser programme cut the price per bag from KES 6,000 to KES 2,500, helping lift national maize harvests from 44 million to 67 million bags.",
    answerSw:
      "Mpango wa ruzuku ya mbolea ulipunguza bei kwa mfuko kutoka KES 6,000 hadi KES 2,500, ukisaidia kuongeza mavuno ya mahindi kutoka mifuko milioni 44 hadi milioni 67.",
    source: {
      label: "Citizen Digital — Two years of Bottom-Up",
      href: "https://citizen.digital/article/two-years-of-bottom-up-what-has-rutos-economic-agenda-for-kenya-achieved-n349574",
    },
  },
  {
    keywords: ["manifesto", "plan", "policy", "pillar", "bottom", "ilani", "mpango"],
    answer:
      "The manifesto is the Bottom-Up Economic Transformation Agenda — five pillars: agriculture, the MSME/hustler economy, housing, healthcare, and the digital superhighway. You can download the full PDF from the Manifesto page.",
    answerSw:
      "Ilani ni Ajenda ya Mageuzi ya Kiuchumi ya Chini-Juu — nguzo tano: kilimo, uchumi wa wajasiriamali wadogo, nyumba, afya, na barabara kuu ya kidijitali. Unaweza kupakua PDF kamili kwenye ukurasa wa Ilani.",
    source: { label: "Download the Manifesto (PDF)", href: "/downloads/ruto-2027-manifesto.pdf" },
  },
  {
    keywords: ["election", "2027", "vote", "countdown", "iebc", "uchaguzi", "kura"],
    answer:
      "The next General Election is confirmed by the IEBC for Tuesday, 10 August 2027. The Election Center has a live countdown and the full 2022 result mapped county by county.",
    answerSw:
      "Uchaguzi Mkuu ujao umethibitishwa na IEBC kwa Jumanne, tarehe 10 Agosti 2027. Kituo cha Uchaguzi kina kihesabu cha moja kwa moja na matokeo kamili ya 2022 kaunti kwa kaunti.",
  },
  {
    keywords: ["uda", "party", "wheelbarrow", "kazi", "chama", "toroli"],
    answer:
      "The United Democratic Alliance (UDA) is the party behind the movement — symbol: the wheelbarrow; slogan: 'Kazi ni Kazi' (every hustle matters).",
    answerSw:
      "United Democratic Alliance (UDA) ndicho chama kinachoongoza harakati hizi — alama: toroli; kauli mbiu: 'Kazi ni Kazi'.",
  },
  {
    keywords: ["donate", "donation", "contribute", "mpesa", "support", "changia", "changa"],
    answer:
      "You can support the movement via M-Pesa, card, or PayPal on the Donate page.",
    answerSw:
      "Unaweza kuunga mkono harakati kupitia M-Pesa, kadi, au PayPal kwenye ukurasa wa Changia.",
  },
];

const fallback = {
  answer:
    "I can only answer from the campaign's published record and manifesto. Try asking about the Hustler Fund, SHA, housing, fertiliser, the manifesto, or the 2027 election.",
  answerSw:
    "Naweza kujibu tu kutoka kwa rekodi na ilani iliyochapishwa ya kampeni. Jaribu kuuliza kuhusu Hustler Fund, SHA, nyumba, mbolea, ilani, au uchaguzi wa 2027.",
};

export function answerFor(query: string, lang: Lang = "en"): KBResult {
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
  if (best && bestScore > 0) {
    return {
      answer: lang === "sw" ? best.answerSw : best.answer,
      source: best.source,
    };
  }
  return { answer: lang === "sw" ? fallback.answerSw : fallback.answer };
}
