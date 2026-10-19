import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { chapters } from "@/content/chapters";
import { isTodo } from "@/lib/todo";
import ChapterHero from "@/components/ChapterHero";
import FadeIn from "@/components/FadeIn";
import SmartImage from "@/components/SmartImage";

type Params = { slug: string };

export const dynamicParams = false;
export const generateStaticParams = (): Params[] => chapters.map((c) => ({ slug: c.slug }));

export function generateMetadata({ params }: { params: Params }): Metadata {
  const c = chapters.find((x) => x.slug === params.slug);
  if (!c) return {};
  return { title: c.title, description: c.line, openGraph: { title: `${c.title}: ${c.tag}`, description: c.line } };
}

const Txt = ({ children }: { children: string }) => (isTodo(children) ? <span className="todo">{children}</span> : <>{children}</>);

export default function ChapterPage({ params }: { params: Params }) {
  const i = chapters.findIndex((x) => x.slug === params.slug);
  if (i < 0) notFound();
  const c = chapters[i];
  const prev = chapters[(i - 1 + chapters.length) % chapters.length];
  const next = chapters[(i + 1) % chapters.length];

  return (
    <article>
      <ChapterHero chapter={c} />

      <header className="px-[var(--pad)] pb-16 pt-10 md:pb-24 md:pt-14">
        <div className="flex items-baseline justify-between">
          <span className="label text-accent">{c.tag}</span>
          <span className="label text-paper/50 tabular-nums">
            {String(i + 1).padStart(2, "0")} / {chapters.length}
          </span>
        </div>
        <h1 className="mt-4 font-display text-[clamp(3rem,11vw,12rem)] font-bold leading-[0.88] tracking-[-0.045em]">{c.title}</h1>
      </header>

      <section aria-label="Summary" className="grid gap-8 px-[var(--pad)] pb-20 md:grid-cols-[1fr_2fr] md:gap-16 md:pb-32">
        <div className="label text-paper/50">In a line</div>
        <FadeIn>
          <p className="max-w-2xl font-display text-[clamp(1.4rem,2.6vw,2.4rem)] leading-[1.15] tracking-[-0.02em]">{c.line}</p>
        </FadeIn>
      </section>

      <section aria-label="Story" className="grid gap-8 px-[var(--pad)] pb-20 md:grid-cols-[1fr_2fr] md:gap-16 md:pb-32">
        <div className="label text-paper/50">The story</div>
        <div className="max-w-2xl space-y-6 text-[17px] leading-relaxed text-paper/85">
          {c.paragraphs.map((p, k) => (
            <FadeIn key={k}><p>{p}</p></FadeIn>
          ))}
        </div>
      </section>

      <section aria-label="Facts" className="px-[var(--pad)] pb-20 md:pb-32">
        <dl className="grid gap-x-8 gap-y-8 border-t border-paper/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {c.facts.map((f) => (
            <div key={f.label}>
              <dt className="label mb-2 text-paper/50">{f.label}</dt>
              <dd><Txt>{f.value}</Txt></dd>
            </div>
          ))}
        </dl>
      </section>

      {c.projects && (
        <section aria-label="Projects" className="px-[var(--pad)] pb-20 md:pb-32">
          <ol className="border-t border-paper/15">
            {c.projects.map((pr, k) => (
              <li key={pr.name} className="border-b border-paper/15">
                <FadeIn>
                  <div className="grid gap-4 py-8 md:grid-cols-[4rem_minmax(0,1.1fr)_minmax(0,2fr)] md:gap-10 md:py-12">
                    <span className="label tabular-nums text-paper/50">{String(k + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="font-display text-[clamp(2rem,3.6vw,3.4rem)] font-medium leading-none tracking-[-0.03em]">{pr.name}</h3>
                      <p className="label mt-3 flex items-center gap-3 text-paper/55">
                        {pr.tag}
                        {pr.latest && <span className="rounded-full bg-accent px-2.5 py-1 text-ink">Latest</span>}
                      </p>
                    </div>
                    <div>
                      <p className="max-w-xl text-[17px] leading-relaxed text-paper/85">{pr.blurb}</p>
                      {pr.status && <p className="mt-3 text-small text-paper/60">Status: <Txt>{pr.status}</Txt></p>}
                      {pr.stack && (
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {pr.stack.map((t) => (
                            <li key={t} className={isTodo(t) ? "todo" : "pill"}>{t}</li>
                          ))}
                        </ul>
                      )}
                      {pr.links && pr.links.length > 0 && (
                        <ul className="mt-5 flex flex-wrap gap-3">
                          {pr.links.map((l) => (
                            <li key={l.label}>
                              {/* TODO links point at "#" until you add the real URL in content/chapters.ts */}
                              <a
                                href={l.href}
                                {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                className="label inline-flex items-center gap-3 rounded-full border border-paper/30 px-5 py-3 transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-ink"
                              >
                                {l.label}
                                {l.todo && <span className="todo !border-current !text-inherit">TODO</span>}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ol>
        </section>
      )}

      {c.notebook && (
        <section aria-label="Notebook" className="px-[var(--pad)] pb-20 md:pb-32">
          <div className="label mb-6 text-paper/50">From the notebook</div>
          <ul className="grid gap-4 md:grid-cols-3">
            {c.notebook.map((n) => (
              <li key={n.label} className="border border-paper/15 p-6">
                <p className="label mb-4 text-paper/50">{n.label}</p>
                <p className="font-display text-xl leading-snug"><Txt>{n.text}</Txt></p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {c.gallery.length > 0 && (
      <section aria-label="Gallery" className="px-[var(--pad)] pb-20 md:pb-32">
        {(() => {
          const tall = c.galleryLayout === "portrait";
          const natural = c.galleryLayout === "natural";
          const n = c.gallery.length;
          const grid = tall ? (n >= 3 ? "md:grid-cols-3" : "md:grid-cols-2") : "md:grid-cols-2";
          return (
            <ul className={`grid items-start gap-4 ${grid}`}>
              {c.gallery.map((g, k) => {
                const [rw, rh] = (g.ratio ?? "4 / 3").split("/").map(Number);
                const wide = natural ? rw > rh : !tall && n % 2 === 1 && k === 0;
                return (
                  <li key={k} className={wide ? "md:col-span-2" : ""}>
                    <FadeIn>
                      <div
                        className={`relative w-full overflow-hidden bg-paper/5 ${natural ? "" : tall ? "aspect-[3/4]" : wide ? "aspect-[21/9]" : "aspect-[16/10]"}`}
                        style={natural ? { aspectRatio: g.ratio ?? "4 / 3" } : undefined}
                      >
                        <SmartImage
                          src={g.src}
                          alt={g.caption && !isTodo(g.caption) ? g.caption : `${c.title}: gallery image ${k + 1}`}
                          seed={`${c.slug}-${k + 2}`}
                          sizes={tall ? "(min-width: 768px) 33vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
                          style={{ objectPosition: g.position }}
                        />
                      </div>
                      {g.caption && <p className="label mt-3 text-paper/55"><Txt>{g.caption}</Txt></p>}
                    </FadeIn>
                  </li>
                );
              })}
            </ul>
          );
        })()}
      </section>
      )}

      {c.links && c.links.length > 0 && (
        <section aria-label="Links" className="px-[var(--pad)] pb-20 md:pb-32">
          <ul className="flex flex-wrap gap-3">
            {c.links.map((l) => (
              <li key={l.label}>
                {/* TODO links point at "#" until you add the real URL in content/chapters.ts */}
                <a
                  href={l.href}
                  {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="label inline-flex items-center gap-3 rounded-full border border-paper/30 px-6 py-3.5 transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-ink"
                >
                  {l.label}
                  {l.todo && <span className="todo !border-current !text-inherit">TODO</span>}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <nav aria-label="Chapter navigation" className="border-t border-paper/15">
        <div className="grid md:grid-cols-2">
          <Link href={`/chapters/${prev.slug}`} className="group border-b border-paper/15 px-[var(--pad)] py-10 transition-colors duration-300 hover:bg-paper/[0.04] md:border-b-0 md:border-r">
            <span className="label text-paper/50">Previous</span>
            <span className="mt-3 block font-display text-4xl font-medium tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-2 md:text-5xl">{prev.title}</span>
          </Link>
          <Link href={`/chapters/${next.slug}`} className="group px-[var(--pad)] py-10 text-left transition-colors duration-300 hover:bg-paper/[0.04] md:text-right">
            <span className="label text-paper/50">Next</span>
            <span className="mt-3 block font-display text-4xl font-medium tracking-tight transition-transform duration-500 ease-out group-hover:-translate-x-2 md:text-5xl">{next.title}</span>
          </Link>
        </div>
        <div className="flex justify-center border-t border-paper/15 py-10">
          <Link href="/" className="label u-link inline-flex items-center gap-3 rounded-full border border-paper/30 px-7 py-3.5 transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-ink">
            Back to chapters
          </Link>
        </div>
      </nav>
    </article>
  );
}
