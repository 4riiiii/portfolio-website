import type { Metadata } from "next";
import { playground } from "@/content/site";
import PageIntro from "@/components/PageIntro";
import Contact from "@/components/Contact";
import PlayCardView from "@/components/PlayCardView";

export const metadata: Metadata = {
  title: "Playground",
  description: "Experiments, songs, poems and smaller builds by Arika Kashyap.",
};

export default function PlaygroundPage() {
  return (
    <>
      <PageIntro eyebrow="Playground" title="Loose ends & *happy accidents.*" intro={playground.intro} />
      <section aria-label="Experiments" className="wrap py-section">
        {/* CSS columns give a true masonry flow without JS */}
        <ul className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>li]:mb-6 [&>li]:break-inside-avoid">
          {playground.cards.map((c, i) => (
            <li key={i}><PlayCardView card={c} /></li>
          ))}
        </ul>
      </section>
      <Contact />
    </>
  );
}
