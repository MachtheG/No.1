import type { Metadata } from "next";
import { Mail, MapPin, Twitter } from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { AskForm } from "@/components/contact/ask-form";

export const metadata: Metadata = {
  title: "Ask the President",
  description:
    "Send a question, a story, or feedback directly to the correspondence team.",
};

const CHANNELS = [
  {
    icon: Mail,
    label: "Correspondence",
    value: "Submit via the form below",
  },
  {
    icon: Twitter,
    label: "Social",
    value: "@WilliamsRuto",
  },
  {
    icon: MapPin,
    label: "State House",
    value: "Nairobi, Kenya",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Ask the President"
        title="Have your"
        accent="say."
        description="Every household has a story or a question for this administration. Send yours directly — high-volume topics shape future Town Hall sessions."
      />

      <section className="border-t border-black/10 bg-white py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <div className="flex flex-col gap-5">
                {CHANNELS.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-4 rounded-2xl border border-black/10 bg-black/[0.02] p-5"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-party-yellow/10 text-party-gold">
                      <c.icon size={18} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-black/40">
                        {c.label}
                      </p>
                      <p className="mt-0.5 text-sm text-black/85">
                        {c.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <AskForm />
          </div>
        </Container>
      </section>
    </>
  );
}
