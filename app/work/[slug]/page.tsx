import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/site";
import Reveal, { FadeIn } from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";
import Contact from "@/components/Contact";
import Txt from "@/components/Txt";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";
import { isTodo } from "@/lib/todo";
import LinkButton from "@/components/LinkButton";

type Params = { slug: string };

export const dynamicParams = false;
export const generateStaticParams = (): Params[] => projects.map((p) => ({ slug: p.slug }));

export function generateMetadata({ params }: { params: Params }): Metadata {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return {};
  const desc = isTodo(p.tagline) ? `${p.title}, a project by Arika Kashyap.` : p.tagline;
  return { title: p.title, description: desc, openGraph: { title: `${p.title} — Arika Kashyap`, description: desc } };
}

export default function CaseStudy({ params }: { params: Params }) {
  const i = projects.findIndex((x) => x.slug === params.slug);
  if (i < 0) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];

  const blocks: { label: string; body: string }[] = [
    { label: "The problem", body: p.problem },
    { label: "What I built", body: p.built },
    { label: "Outcome", body: p.outcome },
  ];

  return (
    <>
      <header className="wrap pt-40 md:pt-52">
        <Link href="/work" className="eyebrow u-link mb-8 inline-block">Back to work</Link>
        <Reveal as="h1" text={p.title} className="display text-display-xl" immediate />
        <FadeIn delay={0.4} className="mt-8 max-w-2xl text-lead text-fg/70">
          <p><Txt>{p.tagline}</Txt></p>
        </FadeIn>
        <FadeIn delay={0.5} className="mt-12 grid gap-6 border-t border-fg/15 pt-6 sm:grid-cols-3">
          <div><p className="eyebrow mb-2">Type</p><p><Txt>{p.category}</Txt></p></div>
          <div><p className="eyebrow mb-2">Stack</p><p><Txt>{p.stack.join(" · ")}</Txt></p></div>
          {p.status && <div><p className="eyebrow mb-2">Status</p><p><Txt>{p.status}</Txt></p></div>}
        </FadeIn>
        <FadeIn delay={0.6} className="mt-12">
          <Placeholder label={`${p.title}: hero image`} tone={p.tone} ratio="16 / 9" />
        </FadeIn>
      </header>

      <section aria-label="Case study" className="wrap py-section">
        {blocks.map((b) => (
          <div key={b.label} className="grid gap-6 border-t border-fg/15 py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] md:gap-16 md:py-14">
            <h2 className="eyebrow">{b.label}</h2>
            <FadeIn><p className="max-w-2xl text-lead"><Txt>{b.body}</Txt></p></FadeIn>
          </div>
        ))}

        <div className="grid gap-6 border-t border-fg/15 py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] md:gap-16 md:py-14">
          <h2 className="eyebrow">Stack</h2>
          <ul className="flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <li key={s} className={isTodo(s) ? "todo" : "pill"}>{s}</li>
            ))}
          </ul>
        </div>

        <div className="grid gap-6 border-t border-fg/15 py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] md:gap-16 md:py-14">
          <h2 className="eyebrow">Links</h2>
          <ul className="flex flex-wrap gap-3">
            {p.links.map((l) => (
              <li key={l.label}><LinkButton link={l} /></li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 border-t border-fg/15 pt-10 sm:grid-cols-2 md:pt-14">
          <Placeholder label={`${p.title}: screen 1`} tone="sand" ratio="4 / 3" />
          <Placeholder label={`${p.title}: screen 2`} tone="mist" ratio="4 / 3" />
        </div>
      </section>

      <section aria-label="Next project" className="wrap pb-section">
        <Link href={`/work/${next.slug}`} data-cursor-label="Next" className="group block border-t border-fg/15 pt-8">
          <p className="eyebrow mb-4">Next project</p>
          <div className="flex items-center justify-between gap-6">
            <span className="display text-display-lg transition-transform duration-500 ease-out group-hover:translate-x-4 group-hover:text-accent">{next.title}</span>
            <span className="transition-transform duration-500 ease-out group-hover:translate-x-2"><ArrowRight size={40} /></span>
          </div>
        </Link>
      </section>

      <Contact />
    </>
  );
}
