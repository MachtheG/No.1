"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { primaryNav, navGroups } from "@/data/nav";
import { CAMPAIGN } from "@/data/campaign";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n";

function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useT();
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-black/15 p-0.5 text-[11px] font-semibold",
        className
      )}
    >
      {(["en", "sw"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase tracking-widest transition-colors",
            lang === l ? "bg-party-yellow text-black" : "text-black/50"
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const { t } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white">
      <div className="h-1 w-full bg-party-yellow" />
      <div
        className={cn(
          "border-b transition-shadow duration-300",
          scrolled ? "border-black/10 shadow-sm" : "border-black/10"
        )}
      >
        <div className="container mx-auto flex h-[68px] items-center justify-between px-6 lg:px-10">
          <Link href="/" className="group flex items-center gap-3">
            <span className="relative h-10 w-10 flex-shrink-0">
              <Image
                src="/images/coat-of-arms.svg"
                alt="Coat of Arms of the Republic of Kenya"
                fill
                className="object-contain"
                priority
              />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-sm font-semibold text-black sm:text-base">
                H.E. Hon. Dr. William Ruto
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-party-gold">
                {CAMPAIGN.slogan}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-black/70 transition-colors hover:bg-party-yellow/15 hover:text-black"
              >
                {t(link.label)}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageToggle />
            <Button size="sm" variant="outline" asChild>
              <Link href="/why-ruto#pledge">{t("Join Us")}</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/donate">{t("Donate")}</Link>
            </Button>
          </div>

          <button
            className="text-black lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-black/10 bg-white lg:hidden"
          >
            <div className="flex max-h-[75vh] flex-col gap-6 overflow-y-auto px-6 py-6">
              <div className="flex items-center justify-between">
                <span className="kicker">{t("Language")}</span>
                <LanguageToggle />
              </div>
              {navGroups.map((group) => (
                <div key={group.label}>
                  <p className="kicker mb-3">{t(group.label)}</p>
                  <div className="flex flex-col">
                    {group.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="py-2.5 text-sm font-medium text-black/80"
                      >
                        {t(link.label)}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex gap-3">
                <Button className="flex-1" variant="outline" asChild>
                  <Link href="/why-ruto#pledge" onClick={() => setMenuOpen(false)}>
                    {t("Join Us")}
                  </Link>
                </Button>
                <Button className="flex-1" asChild>
                  <Link href="/donate" onClick={() => setMenuOpen(false)}>
                    {t("Donate")}
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
