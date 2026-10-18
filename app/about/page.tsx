import type { Metadata } from "next";
import { about, site } from "@/content/site";
import Reveal, { FadeIn } from "@/components/Reveal";
import Counter from "@/components/Counter";
import Section from "@/components/Section";
import Contact from "@/components/Contact";
import Txt from "@/components/Txt";
import Placeholder from "@/components/Placeholder";
import { isTodo } from "@/lib/todo";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}: ${about.statement.replace(/\*/g, "")}`,
};

export default function AboutPage() {
  return (
    <>
      {/* 1 — Intro statement */}
      <header className="wrap pb-section pt-40 md:pt-52">
        <p className="eyebrow mb-8">About</p>
        <Reveal as="h1" text={about.statement} className="display max-w-[20ch] text-display-lg" immediate />
        <FadeIn delay={0.5} className="mt-16 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] md:gap-16">
          <span aria-hidden />
          <Placeholder label="Portrait / studio shot" tone="sand" ratio="16 / 9" />
        </FadeIn>
      </header>

      {/* 2 — Quirks */}
      <Section index="01" label="A few things about me">
        <ul className="border-t border-fg/15">
          {about.quirks.map((q, i) => (
            <FadeIn as="li" key={i} className="border-b border-fg/15">
              <div className="group flex items-baseline gap-6 py-5 md:py-7">
                <span className="eyebrow w-6 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <span className={`display text-display-md transition-transform duration-500 ease-out group-hover:translate-x-3`}>
                  <Txt className={isTodo(q) ? "!font-sans !text-base" : ""}>{q}</Txt>
                </span>
              </div>
            </FadeIn>
          ))}
        </ul>
      </Section>

      {/* 3 — Stats */}
      <section aria-label="By the numbers" className="wrap py-section">
        <dl className="grid gap-x-10 gap-y-16 sm:grid-cols-2">
          {about.stats.map((s) => (
            <FadeIn key={s.label} className="flex flex-col-reverse justify-end border-t border-fg/15 pt-6">
              <dt className="mt-4 max-w-[22ch] text-lead text-fg/70">{s.label}</dt>
              <dd className="display text-[clamp(4.5rem,14vw,13rem)] leading-[0.9] tracking-[-0.04em]">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </dd>
            </FadeIn>
          ))}
        </dl>
      </section>

      {/* 4 — Experience */}
      <Section index="02" label="Experience" title="Where I've been *building.*">
        <ul className="border-t border-fg/15">
          {about.experience.map((e) => (
            <FadeIn as="li" key={e.role + e.org} className="border-b border-fg/15">
              <div className="group grid gap-2 py-7 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:gap-10 md:py-9">
                <div>
                  <h3 className="display text-display-sm transition-transform duration-500 ease-out group-hover:translate-x-2">{e.role}</h3>
                  <p className="mt-1 text-lead text-fg/70">{e.org}</p>
                  <p className="mt-3 max-w-xl text-fg/70"><Txt>{e.line}</Txt></p>
                </div>
                <p className="text-small uppercase tracking-[0.1em] text-fg/60 md:text-right"><Txt>{e.dates}</Txt></p>
              </div>
            </FadeIn>
          ))}
        </ul>
      </Section>

      {/* 5 — Awards */}
      <Section index="03" label="Awards & recognition" title="Little *gold stars.*">
        <ul className="border-t border-fg/15">
          {about.awards.map((a, i) => (
            <FadeIn as="li" key={a.title} className="border-b border-fg/15">
              <div className="group flex items-baseline justify-between gap-6 py-6 transition-colors duration-300 hover:text-accent md:py-8">
                <div className="flex items-baseline gap-6">
                  <span className="eyebrow w-6 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="display text-display-sm transition-transform duration-500 ease-out group-hover:translate-x-3">{a.title}</h3>
                </div>
                <p className="text-small uppercase tracking-[0.1em] text-fg/60">{a.detail}</p>
              </div>
            </FadeIn>
          ))}
        </ul>
      </Section>

      {/* 6 — Capabilities */}
      <Section index="04" label="Capabilities" title="What I can *do for you.*">
        <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
          {about.capabilities.map((c) => (
            <FadeIn key={c.title} className="border-t border-fg/15 pt-5">
              <h3 className="display text-display-sm">{c.title}</h3>
              <ul className="mt-4 space-y-1 text-fg/70">
                {c.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* 7 — Process */}
      <Section index="05" label="Approach & process" title="How I *work.*">
        <ol className="border-t border-fg/15">
          {about.process.map((p) => (
            <FadeIn as="li" key={p.id} className="border-b border-fg/15">
              <div className="group grid gap-3 py-7 md:grid-cols-[5rem_minmax(0,1.2fr)_minmax(0,2fr)] md:gap-8 md:py-9">
                <span className="display text-display-sm text-accent">{p.id}</span>
                <h3 className="display text-display-sm transition-transform duration-500 ease-out group-hover:translate-x-2">{p.title}</h3>
                <p className="max-w-lg text-fg/70">{p.text}</p>
              </div>
            </FadeIn>
          ))}
        </ol>
      </Section>

      {/* 8 — Impact */}
      <Section index="06" label={about.impact.eyebrow}>
        <Reveal text={about.impact.title} className="display text-display-lg" />
        <div className="mt-12 max-w-2xl space-y-6 text-lead md:mt-16">
          {about.impact.paragraphs.map((p, i) => (
            <FadeIn key={i}><p>{p}</p></FadeIn>
          ))}
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          <Placeholder label="Photo: device drive, India" tone="accent" ratio="4 / 3" />
          <Placeholder label="Photo: Deoghar classroom" tone="ink" ratio="4 / 3" />
        </div>
      </Section>

      <Contact />
    </>
  );
}
