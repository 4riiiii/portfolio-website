"use client";

import { useRef, useState } from "react";
import { site } from "@/content/site";

/** Click-to-copy email with a "Copied" confirmation (announced to screen readers). */
export default function CopyEmail({
  className = "", prefix, children,
}: { className?: string; prefix?: string; children?: React.ReactNode }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {
      // Fallback for older browsers / insecure contexts.
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
    <span className="inline-flex flex-wrap items-baseline gap-x-2">
      {prefix && <span>{prefix}</span>}
      <button type="button" onClick={copy} className={`u-link text-left ${className}`} data-cursor-label="Copy" aria-label={`Copy email address ${site.email}`}>
        {children ?? site.email}
      </button>
      <span role="status" aria-live="polite" className={`text-small font-medium text-accent transition-opacity duration-300 ${copied ? "opacity-100" : "opacity-0"}`}>
        {copied ? "Copied" : ""}
      </span>
    </span>
  );
}
