import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { CountdownTimer } from "@/components/elections/countdown-timer";
import { nextElectionLabel, nextElectionDate } from "@/data/elections";

export function CountdownBanner() {
  return (
    <section className="border-y border-black/10 bg-onyx-900 py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="text-center lg:text-left">
            <p className="kicker justify-center lg:justify-start">
              Countdown to {nextElectionLabel}
            </p>
            <p className="mt-2 text-sm text-black/45">
              IEBC-confirmed Election Day: Tuesday, 10 August 2027
            </p>
          </div>
          <CountdownTimer target={nextElectionDate} size="compact" />
          <Link
            href="/elections"
            className="flex items-center gap-1.5 text-sm font-medium text-party-gold transition-colors hover:text-forest-600"
          >
            See the 2022 Result
            <ArrowRight size={15} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
