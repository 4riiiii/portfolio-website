"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { getLenis, setLenis } from "@/lib/lenis";
import { useSite } from "./SiteProvider";

export default function SmoothScroll() {
  const pathname = usePathname();
  const { menuOpen, creditsOpen } = useSite();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    setLenis(lenis);
    let id = requestAnimationFrame(function raf(t) {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    });
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  // New page -> start at the top.
  useEffect(() => {
    getLenis()?.scrollTo(0, { immediate: true });
  }, [pathname]);

  // Freeze scrolling behind overlays.
  useEffect(() => {
    const lenis = getLenis();
    const lock = menuOpen || creditsOpen;
    if (lock) lenis?.stop();
    else lenis?.start();
    document.documentElement.style.overflow = lock ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen, creditsOpen]);

  return null;
}
