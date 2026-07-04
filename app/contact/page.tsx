import type { Metadata } from "next";

import { ContactContent } from "@/components/contact/contact-content";

export const metadata: Metadata = {
  title: "Ask the President",
  description:
    "Send a question, a story, or feedback directly to the correspondence team.",
};

export default function ContactPage() {
  return <ContactContent />;
}
