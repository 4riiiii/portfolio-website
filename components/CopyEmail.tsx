"use client";

import { useRef, useState } from "react";
import { site } from "@/content/chapters";

/** Click-to-copy email with a "Copied" confirmation (announced to screen readers). */
export default function CopyEmail({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = site.email;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <span className="inline-flex flex-wrap items-baseline gap-x-4 gap-y-1">
      <button type="button" onClick={copy} data-cursor="Copy" aria-label={`Copy email address ${site.email}`} className={`u-link text-left ${className}`}>
        {site.email}
      </button>
      <span role="status" aria-live="polite" className={`label text-accent transition-opacity duration-300 ${copied ? "opacity-100" : "opacity-0"}`}>
        {copied ? "Copied" : ""}
      </span>
    </span>
  );
}
