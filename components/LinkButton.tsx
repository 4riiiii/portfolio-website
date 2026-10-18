"use client";

import type { LinkItem } from "@/content/site";
import { ArrowUpRight } from "./Icons";

/** Pill button for project links. `todo` links render but go nowhere (#) until you fill them in. */
export default function LinkButton({ link }: { link: LinkItem }) {
  const external = link.href.startsWith("http");
  return (
    <a
      href={link.href}
      onClick={link.href === "#" ? (e) => e.preventDefault() : undefined}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group inline-flex items-center gap-3 rounded-full border border-fg/25 px-6 py-3 transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-[#111110]"
    >
      {link.label}
      {link.todo && <span className="todo !border-current !text-[0.7rem] uppercase !text-inherit">TODO</span>}
      <span className="transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"><ArrowUpRight size={18} /></span>
    </a>
  );
}
