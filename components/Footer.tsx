"use client";

import { site } from "@/content/site";
import Clock from "./Clock";
import CopyEmail from "./CopyEmail";
import ThemeToggle from "./ThemeToggle";
import AudioToggle from "./AudioToggle";
import SocialLinks from "./SocialLinks";
import { useSite } from "./SiteProvider";

export default function Footer() {
  const { setCreditsOpen } = useSite();
  return (
    <footer className="border-t border-fg/15">
      <div className="wrap grid gap-10 py-10 md:grid-cols-3 md:py-12">
        <div className="space-y-2">
          <Clock />
          <CopyEmail prefix="For inquiries:" />
        </div>
        <div className="flex flex-wrap items-start gap-x-6 gap-y-3 text-small md:justify-center">
          <ThemeToggle />
          <AudioToggle />
          <button type="button" onClick={() => setCreditsOpen(true)} className="u-link">Credits</button>
        </div>
        <SocialLinks className="md:justify-end" />
      </div>
      <div className="wrap pb-8 text-small text-fg/50">
        © {new Date().getFullYear()} {site.name}. Designed and built by me, in Dublin.
      </div>
    </footer>
  );
}
