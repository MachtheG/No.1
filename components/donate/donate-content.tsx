"use client";

import { ShieldCheck, HeartHandshake, Receipt } from "lucide-react";

import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { DonateForm } from "@/components/donate/donate-form";
import { useT } from "@/lib/i18n";

const ASSURANCES = [
  {
    icon: ShieldCheck,
    title: "Transparent & compliant",
    body: "Contributions are recorded with the disclosures required under Kenyan campaign-finance law.",
  },
  {
    icon: HeartHandshake,
    title: "Every shilling counts",
    body: "From printing to rallies to grassroots mobilisation — your support powers the ground game.",
  },
  {
    icon: Receipt,
    title: "Instant receipt",
    body: "You receive a confirmation and receipt the moment your contribution is processed.",
  },
];

export function DonateContent() {
  const { t } = useT();
  return (
    <>
      <PageHero
        kicker="Donate"
        title="Fuel the"
        accent="movement."
        description="Add your support to the bottom-up movement. Contribute via M-Pesa, card, or PayPal."
      />
      <section className="border-t border-black/10 bg-white py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <div className="space-y-6">
              {ASSURANCES.map((a) => (
                <div key={a.title} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-party-yellow/10 text-party-gold">
                    <a.icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium text-black">
                      {t(a.title)}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-black/55">
                      {t(a.body)}
                    </p>
                  </div>
                </div>
              ))}
              <p className="rounded-xl border border-black/10 bg-black/[0.02] p-4 text-xs leading-relaxed text-black/45">
                {t(
                  "Note: This is a demonstration build. Payment processing (M-Pesa/Daraja, card, PayPal) is a later technical phase and is not connected. No real transactions occur."
                )}
              </p>
            </div>
            <DonateForm />
          </div>
        </Container>
      </section>
    </>
  );
}
