import type { Metadata } from "next";
import { contact } from "@/content/chapters";
import FadeIn from "@/components/FadeIn";
import ContactLinks from "@/components/ContactLinks";

export const metadata: Metadata = { title: "Let's talk", description: contact.intro };

export default function ContactPage() {
  return (
    <div className="flex min-h-[100svh] flex-col justify-between px-[var(--pad)] pb-20 pt-32 md:pt-40">
      <div>
        <h1 className="font-display text-[clamp(4rem,17vw,19rem)] font-bold leading-[0.82] tracking-[-0.055em]">{contact.headline}</h1>
        <FadeIn delay={0.2} className="mt-10 max-w-md text-lg text-paper/70"><p>{contact.intro}</p></FadeIn>
      </div>
      <FadeIn delay={0.3} className="mt-20 max-w-2xl"><ContactLinks large /></FadeIn>
    </div>
  );
}
