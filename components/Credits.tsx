"use client";

import { useEffect, useRef } from "react";
import { credits } from "@/content/site";
import { useSite } from "./SiteProvider";

/** Native <dialog>: focus trap, Esc-to-close and inertness come for free. */
export default function Credits() {
  const { creditsOpen, setCreditsOpen } = useSite();
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (creditsOpen && !d.open) d.showModal();
    if (!creditsOpen && d.open) d.close();
  }, [creditsOpen]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="credits-title"
      onClose={() => setCreditsOpen(false)}
      onClick={(e) => e.target === ref.current && setCreditsOpen(false)}
      className="m-auto w-[min(92vw,40rem)] bg-bg p-0 text-fg backdrop:bg-black/50"
    >
      <div className="p-6 md:p-10">
        <div className="flex items-start justify-between gap-6">
          <h2 id="credits-title" className="font-display text-display-md">Credits</h2>
          <button type="button" onClick={() => setCreditsOpen(false)} className="u-link text-small uppercase tracking-[0.12em]">
            Close
          </button>
        </div>

        <h3 className="eyebrow mt-8">Typefaces</h3>
        <ul className="mt-3 divide-y divide-fg/15 border-y border-fg/15">
          {credits.fonts.map((f) => (
            <li key={f.name} className="flex flex-col justify-between gap-1 py-3 sm:flex-row sm:items-baseline">
              <span className="font-display text-display-sm">{f.name}</span>
              <span className="text-small text-fg/60">{f.by} · {f.note}</span>
            </li>
          ))}
        </ul>

        <h3 className="eyebrow mt-8">Built with</h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {credits.tools.map((t) => (
            <li key={t} className="pill">{t}</li>
          ))}
        </ul>

        <p className="mt-8 text-small text-fg/60">{credits.notes}</p>
      </div>
    </dialog>
  );
}
