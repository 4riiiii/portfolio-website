"use client";

import { usePathname } from "next/navigation";
import { site } from "@/content/chapters";
import SoundToggle from "./SoundToggle";

export default function Footer() {
  const home = usePathname() === "/";
  return (
    <footer
      className={
        home
          ? "fixed inset-x-0 bottom-0 z-30 text-white mix-blend-difference"
          : "border-t border-paper/10 text-paper/80"
      }
    >
      <div className="flex flex-col items-start justify-between gap-3 px-[var(--pad)] py-5 sm:flex-row sm:items-center">
        <ul className="label flex items-center gap-3">
          <li><a href={site.github} target="_blank" rel="noopener noreferrer" className="u-link">GitHub</a></li>
          <li aria-hidden>·</li>
          <li><a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="u-link">LinkedIn</a></li>
          <li aria-hidden>·</li>
          <li><a href={`mailto:${site.email}`} className="u-link">Email</a></li>
        </ul>
        <div className="label flex items-center gap-6">
          <SoundToggle />
          <span>© {site.year}</span>
        </div>
      </div>
    </footer>
  );
}
