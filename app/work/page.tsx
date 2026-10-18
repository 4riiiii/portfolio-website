import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/site";
import PageIntro from "@/components/PageIntro";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import { FadeIn } from "@/components/Reveal";
import Reveal from "@/components/Reveal";
import Txt from "@/components/Txt";
import { ArrowUpRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects by Arika Kashyap: Mysl, Dockway, SentinelAI, PersonaSim and more.",
};

export default function WorkPage() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);
  return (
    <>
      <PageIntro eyebrow="Work" title="Things I've *built.*" intro="Startups, hackathons and experiments. Each one has a short case study: the problem, what I made and how it went." />

      <section aria-label="Featured projects" className="wrap py-section">
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-24">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} className={i % 2 ? "md:mt-40" : ""} />
          ))}
        </div>
      </section>

      <section aria-label="More projects" className="wrap pb-section">
        <Reveal text="Also *built.*" className="display mb-12 text-display-lg" />
        <ul className="border-t border-fg/15">
          {more.map((p, i) => (
            <FadeIn as="li" key={p.slug} className="border-b border-fg/15">
              <Link href={`/work/${p.slug}`} data-cursor-label="View" className="group grid items-baseline gap-2 py-7 transition-colors duration-300 hover:text-accent md:grid-cols-[4rem_minmax(0,1.3fr)_minmax(0,2fr)_2rem] md:gap-8 md:py-9">
                <span className="eyebrow tabular-nums">0{featured.length + i + 1}</span>
                <h3 className="display text-display-md transition-transform duration-500 ease-out group-hover:translate-x-3">{p.title}</h3>
                <p className="text-fg/70"><Txt>{p.tagline}</Txt></p>
                <span className="hidden transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 md:block"><ArrowUpRight /></span>
              </Link>
            </FadeIn>
          ))}
        </ul>
      </section>

      <Contact />
    </>
  );
}
