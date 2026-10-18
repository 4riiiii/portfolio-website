"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

/** Soft fade between routes. Home and chapter pages manage their own entrances. */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const path = usePathname();
  if (reduce || path === "/" || path.startsWith("/chapters")) return <>{children}</>;
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}
