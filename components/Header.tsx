"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/content/site";
import { useSite } from "./SiteProvider";
import Clock from "./Clock";
import CopyEmail from "./CopyEmail";
import ThemeToggle from "./ThemeToggle";
import AudioToggle from "./AudioToggle";
import SocialLinks from "./SocialLinks";

export default function Header() {
  const { menuOpen, setMenuOpen } = useSite();
  const pathname = usePathname();
  const btn = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);

  // close on navigation
  useEffect(() => setMenuOpen(false), [pathname, setMenuOpen]);

  // Esc to close, focus management, hide page from keyboard/AT while open
  useEffect(() => {
    const page = document.getElementById("page");
    if (!menuOpen) {
      page?.removeAttribute("inert");
      return;
    }
    page?.setAttribute("inert", "");
    const t = setTimeout(() => firstLink.current?.focus(), 350);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        btn.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      page?.removeAttribute("inert");
    };
  }, [menuOpen, setMenuOpen]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 text-white mix-blend-difference">
        <div className="wrap flex items-center justify-between py-5 md:py-6">
          <Link href="/" className="pointer-events-auto font-display text-[1.6rem] leading-none tracking-tight" aria-label={`${site.name}, home`}>
            {site.name}
          </Link>
          <button
            ref={btn}
            type="button"
            className="pointer-events-auto group flex items-center gap-2 text-small font-medium uppercase tracking-[0.14em]"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            <span aria-hidden className="relative block h-2.5 w-5">
              <span className={`absolute left-0 h-px w-full bg-current transition-all duration-500 ease-out ${menuOpen ? "top-1/2 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-px w-full bg-current transition-all duration-500 ease-out ${menuOpen ? "top-1/2 -rotate-45" : "bottom-0"}`} />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-40 overflow-y-auto bg-bg"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="wrap flex min-h-full flex-col justify-between gap-12 pb-8 pt-24 md:pt-28">
              <nav aria-label="Main">
                <ul>
                  {nav.map((item, i) => {
                    const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                    return (
                      <li key={item.href} className="overflow-hidden border-b border-fg/15 last:border-b-0">
                        <motion.div
                          initial={{ y: "105%" }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.9, delay: 0.25 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <Link
                            ref={i === 0 ? firstLink : undefined}
                            href={item.href}
                            aria-current={active ? "page" : undefined}
                            className="group flex items-baseline gap-4 py-1 font-display text-[clamp(3rem,min(13vw,14vh),10rem)] uppercase leading-[1.08] tracking-[-0.03em] transition-colors duration-300 hover:text-accent md:gap-8"
                          >
                            <span className="w-8 font-sans text-small tracking-normal text-fg/50 md:w-12">0{i + 1}</span>
                            <span className="transition-transform duration-500 ease-out group-hover:translate-x-3 md:group-hover:translate-x-6">
                              {item.label}
                            </span>
                            {active && <span aria-hidden className="ml-2 h-3 w-3 self-center rounded-full bg-accent" />}
                          </Link>
                        </motion.div>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="grid gap-8 text-small md:grid-cols-[1fr_auto] md:items-end"
              >
                <div className="space-y-2 text-base">
                  <Clock />
                  <CopyEmail prefix="For inquiries:" />
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                  <ThemeToggle />
                  <AudioToggle />
                  <SocialLinks />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
