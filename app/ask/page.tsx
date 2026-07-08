import type { Metadata } from "next";

import { PageHero } from "@/components/ui/page-hero";
import { AskConsole } from "@/components/ask/ask-console";

export const metadata: Metadata = {
  title: "Ask the Manifesto",
  description:
    "Ask any question about the manifesto or the record — answered from published campaign content, with sources, in English or Swahili.",
};

export default function AskPage() {
  return (
    <>
      <PageHero
        kicker="Ask the Manifesto"
        title="Ask anything."
        accent="Check the source."
        description="Answers come only from the published record and manifesto — in English or Swahili — and every answer links to where it came from."
      />
      <section className="border-t border-black/10 bg-white pt-14">
        <AskConsole />
      </section>
    </>
  );
}
