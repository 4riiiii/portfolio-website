"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { fallbackFor } from "@/lib/fallback";

type Props = {
  src: string;
  alt: string;
  seed: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
  fit?: "cover" | "contain";
};

/** next/image (fill) that swaps to a generated gradient if the source fails to load. */
export default function SmartImage({ src, alt, seed, sizes = "100vw", priority, className = "", style, fit = "cover" }: Props) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // An image can fail before React hydrates, so onError never fires: check once on mount.
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <Image
      ref={ref}
      src={failed ? fallbackFor(seed) : src}
      unoptimized={failed}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      draggable={false}
      onError={() => setFailed(true)}
      className={`${fit === "contain" ? "object-contain" : "object-cover"} ${className}`}
      style={style}
    />
  );
}
