import type { Metadata, Viewport } from "next";
import { display, sans } from "./fonts";
import "./globals.css";
import { site, theme } from "@/content/chapters";
import { SoundProvider } from "@/components/SoundProvider";
import { TransitionProvider } from "@/components/TransitionLayer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Chapters`, template: `%s — ${site.name}` },
  description: site.description,
  openGraph: { type: "website", siteName: site.name, title: `${site.name} — Chapters`, description: site.description, locale: "en_IE" },
  twitter: { card: "summary_large_image", title: `${site.name} — Chapters`, description: site.description },
};

export const viewport: Viewport = { themeColor: "#0a0a0a", viewportFit: "cover" };

const hex = (h: string) => {
  const n = parseInt(h.replace("#", ""), 16);
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: `:root{--accent:${hex(theme.accent)}}` }} />
        <noscript><style>{`.intro-hidden,section[aria-label="Chapters"]{opacity:1!important}`}</style></noscript>
      </head>
      <body>
        <SoundProvider>
          <TransitionProvider>
            <a href="#main" className="sr-only z-[100] bg-accent px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
              Skip to content
            </a>
            <Cursor />
            <Header />
            <main id="main">{children}</main>
            <Footer />
          </TransitionProvider>
        </SoundProvider>
      </body>
    </html>
  );
}
