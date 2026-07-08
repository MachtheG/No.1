export interface AnsweredQuestion {
  id: string;
  question: string;
  asker: string; // display name or "Anonymous"
  county: string;
  answer: string;
  /** Optional video answer from the official channel. */
  youtubeId?: string;
}

/**
 * Demonstration content — illustrative answered questions for the public Q&A
 * feed. In production these pass through a moderation queue before publishing.
 */
export const answeredQuestions: AnsweredQuestion[] = [
  {
    id: "q-sha-rural",
    question: "How will SHA reach people in rural areas far from hospitals?",
    asker: "Anonymous",
    county: "Turkana",
    answer:
      "Through community health promoters and contracted local facilities, coverage is being extended so care is available closer to home — not only in major towns. Registration drives continue county by county.",
  },
  {
    id: "q-hustler-repay",
    question: "What happens if I can't repay my Hustler Fund loan on time?",
    asker: "Mercy A.",
    county: "Machakos",
    answer:
      "The fund is designed to build credit history and savings rather than punish. Staying engaged and saving improves your limit over time; the goal is graduation into larger facilities, not penalty.",
    youtubeId: "Ydv0P1EJBZ0",
  },
  {
    id: "q-housing-apply",
    question: "How does an ordinary hustler apply for an affordable housing unit?",
    asker: "Anonymous",
    county: "Nairobi",
    answer:
      "Applications run through the official Affordable Housing portal, with allocations prioritising first-time owners. Watch Campaign Updates for new openings as more units are completed.",
  },
  {
    id: "q-youth-jobs",
    question: "What is being done for young people who can't find jobs?",
    asker: "Brian K.",
    county: "Uasin Gishu",
    answer:
      "The Digital Superhighway, TVET expansion, and the MSME/hustler economy are all aimed at creating pathways to work — both digital jobs and skilled trades. See My Manifesto for the full plan.",
  },
];
