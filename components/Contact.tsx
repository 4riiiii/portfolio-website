import { contact } from "@/content/site";
import Reveal, { FadeIn } from "./Reveal";
import CopyEmail from "./CopyEmail";
import { ArrowUpRight } from "./Icons";

/** "Come say hi" block. Lives at the bottom of every page; /contact uses it as the whole page. */
export default function Contact({ asPage = false }: { asPage?: boolean }) {
  return (
    <section id="contact" aria-labelledby="contact-title" className={`wrap ${asPage ? "pb-section pt-40 md:pt-52" : "py-section"}`}>
      <p className="eyebrow mb-8">Contact</p>
      <Reveal as={asPage ? "h1" : "h2"} text={contact.headline} className="display text-display-xl" immediate={asPage} />
      <span id="contact-title" className="sr-only">Contact</span>
      <FadeIn className="mt-8 max-w-xl text-lead text-fg/70">
        <p>{contact.intro}</p>
      </FadeIn>

      <ul className="mt-16 border-t border-fg/15 md:mt-24">
        {contact.links.map((l) => (
          <li key={l.label} className="border-b border-fg/15">
            {l.kind === "email" ? (
              <div className="group grid gap-2 py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:items-baseline md:py-8">
                <span className="display text-display-sm">{l.label}</span>
                <span className="text-lead">
                  <CopyEmail>{l.value}</CopyEmail>
                </span>
              </div>
            ) : (
              <a
                href={l.href}
                {...(l.href.startsWith("http") || l.href.endsWith(".pdf") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group grid gap-2 py-6 transition-colors duration-300 hover:text-accent md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:items-baseline md:py-8"
              >
                <span className="display text-display-sm transition-transform duration-500 ease-out group-hover:translate-x-3">{l.label}</span>
                <span className="flex items-center justify-between gap-4 text-lead">
                  <span>{l.value}</span>
                  <span className="transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-1"><ArrowUpRight size={28} /></span>
                </span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
