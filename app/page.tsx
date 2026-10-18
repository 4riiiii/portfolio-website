import Link from "next/link";
import { home, projects, site } from "@/content/site";
import Reveal, { FadeIn } from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import { ArrowRight } from "@/components/Icons";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);
  return (
    <>
      <section className="wrap flex min-h-[100svh] flex-col justify-end pb-12 pt-36 md:pb-16">
        <p className="eyebrow mb-8">{site.role}</p>
        <Reveal as="h1" text={home.headline} className="display max-w-[16ch] text-display-xl md:max-w-[15ch]" immediate delay={0.1} />
        <FadeIn delay={0.7} className="mt-10 flex flex-col justify-between gap-6 border-t border-fg/15 pt-6 md:flex-row md:items-end">
          <p className="text-lead">{home.sub}</p>
          <p className="eyebrow">Scroll</p>
        </FadeIn>
      </section>

      <section id="work" aria-labelledby="work-title" className="wrap py-section">
        <div className="mb-16 flex flex-col justify-between gap-6 md:mb-24 md:flex-row md:items-end">
          <Reveal text={home.workTitle} className="display text-display-lg" />
          <span id="work-title" className="sr-only">Selected work</span>
          <FadeIn className="max-w-sm text-fg/70"><p>{home.workIntro}</p></FadeIn>
        </div>
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-24">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} className={i % 2 ? "md:mt-40" : ""} />
          ))}
        </div>
        <FadeIn className="mt-20 md:mt-32">
          <Link href="/work" className="group inline-flex items-center gap-3 text-lead">
            <span className="u-link">See all work</span>
            <span className="transition-transform duration-500 ease-out group-hover:translate-x-2"><ArrowRight /></span>
          </Link>
        </FadeIn>
      </section>

      <section aria-label="About" className="wrap py-section">
        <div className="hairline pt-10">
          <p className="eyebrow mb-8">About</p>
          <Reveal text={home.aboutTeaser} className="display max-w-[24ch] text-display-md" />
          <FadeIn className="mt-12">
            <Link href="/about" className="group inline-flex items-center gap-3 rounded-full border border-fg/25 px-7 py-4 text-lead transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-[#111110]" data-cursor-label="Go">
              {home.aboutCta}
              <span className="transition-transform duration-500 ease-out group-hover:translate-x-1"><ArrowRight /></span>
            </Link>
          </FadeIn>
        </div>
      </section>

      <Contact />
    </>
  );
}
