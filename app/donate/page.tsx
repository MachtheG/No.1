import type { Metadata } from "next";

import { DonateContent } from "@/components/donate/donate-content";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Fuel the movement — contribute via M-Pesa, card or PayPal. (Demonstration UI.)",
};

export default function DonatePage() {
  return <DonateContent />;
}
