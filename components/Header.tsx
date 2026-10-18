"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/content/chapters";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="fixed inset-x-0 top-0 z-50 text-white mix-blend-difference">
      <div className="flex items-center justify-between px-[var(--pad)] py-5">
        <Link href="/" className="label" aria-label={`${site.name}, home`}>
          {site.name}
        </Link>
        <nav aria-label="Main">
          <ul className="flex items-center gap-5 md:gap-9">
            {nav.map((n) => {
              const active = n.href === "/" ? pathname === "/" || pathname.startsWith("/chapters") : pathname.startsWith(n.href);
              return (
                <li key={n.href}>
                  <Link href={n.href} aria-current={active ? "page" : undefined} className="label u-link">
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
