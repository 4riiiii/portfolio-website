import Reveal from "./Reveal";

/** Reference-style rhythm: small index + label in a left column, content on the right. */
export default function Section({
  index, label, title, children, id,
}: { index: string; label: string; title?: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} aria-label={label} className="wrap py-section">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] md:gap-16">
        <div className="eyebrow flex gap-4 md:block md:space-y-2">
          <span className="tabular-nums">({index})</span>
          <span className="block">{label}</span>
        </div>
        <div>
          {title && <Reveal text={title} className="display mb-12 text-display-lg md:mb-16" />}
          {children}
        </div>
      </div>
    </section>
  );
}
