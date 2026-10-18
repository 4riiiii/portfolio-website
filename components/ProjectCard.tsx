import Link from "next/link";
import type { Project } from "@/content/site";
import Placeholder from "./Placeholder";
import { FadeIn } from "./Reveal";

export default function ProjectCard({ project, index, className = "" }: { project: Project; index: number; className?: string }) {
  return (
    <FadeIn className={className}>
      <Link href={`/work/${project.slug}`} data-cursor-label="View" className="group block">
        <div className="overflow-hidden">
          <div className="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]">
            <Placeholder label={`${project.title}: hero`} tone={project.tone} ratio="4 / 3" />
          </div>
        </div>
        <div className="mt-5 flex items-baseline justify-between gap-4">
          <h3 className="display text-display-md transition-transform duration-500 ease-out group-hover:translate-x-2">{project.title}</h3>
          <span className="eyebrow tabular-nums">0{index + 1}</span>
        </div>
        <p className="mt-2 max-w-md text-fg/70">{project.tagline}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((s) => (
            <li key={s} className="pill">{s}</li>
          ))}
        </ul>
      </Link>
    </FadeIn>
  );
}
