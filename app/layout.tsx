import type { Metadata, Viewport } from "next";
import { display, sans } from "./fonts";
import "./globals.css";
import { site, theme } from "@/content/site";
import { hexToChannels } from "@/lib/todo";
import { SiteProvider } from "@/components/SiteProvider";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Credits from "@/components/Credits";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s — ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: site.url,
    locale: "en_IE",
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F1EA" },
    { media: "(prefers-color-scheme: dark)", color: "#0E0E0D" },
  ],
};

// Runs before first paint so there's no flash: stored choice, else system preference.
const themeScript = `try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: site.email,
  jobTitle: "Software engineer",
  alumniOf: { "@type": "CollegeOrUniversity", name: "University College Dublin" },
  address: { "@type": "PostalAddress", addressLocality: "Dublin", addressCountry: "IE" },
  sameAs: [site.social.github, site.social.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        {/* The single accent token lives in content/site.ts */}
        <style dangerouslySetInnerHTML={{ __html: `:root{--accent:${hexToChannels(theme.accent)}}` }} />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript><style>{`.rv-i{transform:none!important}`}</style></noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <SiteProvider>
          <a href="#main" className="sr-only z-[60] bg-accent px-4 py-2 text-[#111110] focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
            Skip to content
          </a>
          <SmoothScroll />
          <Cursor />
          <Header />
          <div id="page">
            <main id="main">{children}</main>
            <Footer />
          </div>
          <Credits />
        </SiteProvider>
      </body>
    </html>
  );
}
