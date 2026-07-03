import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

import { Container } from "@/components/ui/container";
import { navGroups } from "@/data/nav";

const SOCIALS = [
  { icon: Twitter, href: "https://twitter.com/WilliamsRuto", label: "X (Twitter)" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@StateHouseRepublicofKenya", label: "YouTube" },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-black">
      <Container className="py-20">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white p-1">
                <Image
                  src="/images/coat-of-arms.svg"
                  alt="Coat of Arms of the Republic of Kenya"
                  fill
                  className="object-contain p-1.5"
                />
              </span>
              <span className="font-display text-base font-semibold text-white">
                H.E. Hon. Dr. William Ruto
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/50">
              The official record of transformation — a bottom-up economic
              model turning policy into dignity for every Kenyan household.
            </p>
            <div className="mt-8 flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-party-yellow/50 hover:text-party-yellow"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {navGroups.map((group) => (
            <div key={group.label}>
              <h3 className="kicker mb-6 text-party-yellow">{group.label}</h3>
              <ul className="space-y-3.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} United Democratic Alliance (UDA)
            &amp; the Kenya Kwanza Movement. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-widest">
            Kazi ni Kazi
          </p>
        </div>
      </Container>
    </footer>
  );
}
