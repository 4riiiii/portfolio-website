"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

/** Light/dark toggle. The initial value is set pre-paint by the inline script in layout.tsx (stored choice or system). */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme((document.documentElement.dataset.theme as Theme) || "light");
    // Follow the system until the visitor makes an explicit choice.
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      try { if (localStorage.getItem("theme")) return; } catch {}
      const t: Theme = e.matches ? "dark" : "light";
      document.documentElement.dataset.theme = t;
      setTheme(t);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
    setTheme(next);
  };

  return (
    <button type="button" onClick={toggle} className={`u-link ${className}`} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
      Theme: <span suppressHydrationWarning>{theme === "dark" ? "Dark" : "Light"}</span>
    </button>
  );
}
