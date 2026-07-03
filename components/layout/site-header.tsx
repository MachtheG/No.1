"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navGroups } from "@/data/nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white">
      <div
        className={cn(
          "border-b transition-shadow duration-300",
          scrolled ? "border-black/10 shadow-sm" : "border-black/10"
        )}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-10">
          <Link href="/" className="group flex items-center gap-3">
            <span className="relative h-11 w-11 flex-shrink-0">
              <Image
                src="/images/coat-of-arms.svg"
                alt="Coat of Arms of the Republic of Kenya"
                fill
                className="object-contain"
                priority
              />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base font-semibold text-black">
                William Ruto
              </span>
              <span className="text-[11px] uppercase tracking-widest text-black/50">
                President of Kenya
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 md:flex"
            onMouseLeave={() => setOpenGroup(null)}
          >
            {navGroups.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setOpenGroup(group.label)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-widest transition-colors",
                    openGroup === group.label
                      ? "text-party-gold"
                      : "text-black/65 hover:text-black"
                  )}
                >
                  {group.label}
                  <ChevronDown
                    size={13}
                    className={cn(
                      "transition-transform",
                      openGroup === group.label && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence>
                  {openGroup === group.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3"
                    >
                      <div className="rounded-2xl border border-black/10 bg-white p-2 shadow-lg">
                        {group.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block rounded-xl px-4 py-3 transition-colors hover:bg-black/[0.04]"
                          >
                            <p className="text-sm font-medium text-black">
                              {link.label}
                            </p>
                            <p className="mt-0.5 text-xs text-black/45">
                              {link.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button size="sm" asChild>
              <Link href="/why-ruto#pledge">Join the Movement</Link>
            </Button>
          </div>

          <button
            className="text-black md:hidden"
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
            className="overflow-hidden border-b border-black/10 bg-white md:hidden"
          >
            <div className="flex max-h-[75vh] flex-col gap-6 overflow-y-auto px-6 py-6">
              {navGroups.map((group) => (
                <div key={group.label}>
                  <p className="kicker mb-3">{group.label}</p>
                  <div className="flex flex-col">
                    {group.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="py-2.5 text-sm font-medium text-black/80"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Button className="w-full" asChild>
                <Link href="/why-ruto#pledge" onClick={() => setMenuOpen(false)}>
                  Join the Movement
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
