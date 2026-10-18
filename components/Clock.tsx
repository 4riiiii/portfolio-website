"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

const fmt = new Intl.DateTimeFormat("en-GB", {
  timeZone: site.timezone,
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

/** "Based in Dublin, HH:MM" in Europe/Dublin time, ticking on the minute. */
export default function Clock({ className = "" }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const now = new Date();
      setTime(fmt.format(now));
      t = setTimeout(tick, (60 - now.getSeconds()) * 1000 - now.getMilliseconds() + 20);
    };
    tick();
    return () => clearTimeout(t);
  }, []);

  return (
    <p className={className}>
      Based in {site.city},{" "}
      <span className="tabular-nums" suppressHydrationWarning>{time ?? "--:--"}</span>
    </p>
  );
}
