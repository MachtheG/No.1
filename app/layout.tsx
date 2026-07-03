import type { Metadata } from "next";
import { Playfair_Display, Work_Sans, JetBrains_Mono } from "next/font/google";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CampaignAssistant } from "@/components/assistant/campaign-assistant";
import { LanguageProvider } from "@/lib/i18n";

import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://architect-of-modern-kenya.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "William Ruto | The Architect of Modern Kenya",
    template: "%s | William Ruto",
  },
  description:
    "The official record of transformation under H.E. Dr. William Samoei Ruto — universal healthcare, affordable housing, economic empowerment, and Kenya's rise on the global stage.",
  keywords: [
    "William Ruto",
    "President of Kenya",
    "SHA",
    "Hustler Fund",
    "Affordable Housing Kenya",
    "Bottom-Up Economic Transformation",
  ],
  authors: [{ name: "Office of the President, Kenya" }],
  openGraph: {
    title: "William Ruto | The Architect of Modern Kenya",
    description:
      "Universal healthcare, affordable housing, economic empowerment, and Kenya's rise on the global stage.",
    url: siteUrl,
    siteName: "The Architect of Modern Kenya",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "William Ruto | The Architect of Modern Kenya",
    description:
      "Universal healthcare, affordable housing, economic empowerment, and Kenya's rise on the global stage.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${workSans.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-onyx-950 font-sans">
        <LanguageProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <CampaignAssistant />
        </LanguageProvider>
      </body>
    </html>
  );
}
