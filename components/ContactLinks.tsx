import { site } from "@/content/chapters";
import CopyEmail from "./CopyEmail";

export default function ContactLinks({ large = false }: { large?: boolean }) {
  const text = large ? "text-[clamp(1.3rem,2.4vw,2.2rem)]" : "text-lg";
  return (
    <ul className={`space-y-3 border-t border-paper/15 pt-6 font-display ${text}`}>
      <li><CopyEmail /></li>
      <li><a href={site.github} target="_blank" rel="noopener noreferrer" className="u-link">GitHub</a></li>
      <li><a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="u-link">LinkedIn</a></li>
    </ul>
  );
}
