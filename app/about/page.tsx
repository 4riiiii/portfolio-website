import type { Metadata } from "next";
import { about, site } from "@/content/chapters";
import FadeIn from "@/components/FadeIn";
import SmartImage from "@/components/SmartImage";
import ContactLinks from "@/components/ContactLinks";

export const metadata: Metadata = { title: "About", description: about.text[0] };

export default function AboutPage() {
  return (
    <div className="min-h-[100svh] px-[var(--pad)] pb-24 pt-32 md:pt-40">
      <h1 className="font-display text-[clamp(3.5rem,13vw,14rem)] font-bold leading-[0.85] tracking-[-0.05em]">{about.title}</h1>
      <div className="mt-14 grid gap-12 md:mt-24 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-20">
        <FadeIn>
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper/[0.06]">
            {about.portrait ? (
              <SmartImage src={about.portrait} alt={`Portrait of ${site.name}`} seed="portrait" sizes="(min-width: 768px) 40vw, 100vw" className="object-[50%_22%]" />
            ) : (
              <div role="img" aria-label="Portrait placeholder" className="absolute inset-0 flex items-end p-5">
                <span className="label text-paper/50">{about.portraitLabel}</span>
              </div>
            )}
          </div>
        </FadeIn>
        <div className="flex flex-col justify-between gap-16">
          <div className="max-w-xl space-y-5 text-[18px] leading-relaxed">
            {about.text.map((t, i) => (
              <FadeIn key={i} delay={i * 0.06}><p>{t}</p></FadeIn>
            ))}
          </div>
          <FadeIn><ContactLinks /></FadeIn>
        </div>
      </div>
    </div>
  );
}
