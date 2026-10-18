import { site } from "@/content/site";
import { GitHub, LinkedIn } from "./Icons";

export default function SocialLinks({ className = "" }: { className?: string }) {
  const item = "flex h-11 w-11 items-center justify-center rounded-full border border-fg/25 transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-[#111110]";
  return (
    <ul className={`flex gap-3 ${className}`}>
      <li>
        <a href={site.social.github} target="_blank" rel="noopener noreferrer" aria-label="Arika on GitHub" className={item}>
          <GitHub />
        </a>
      </li>
      <li>
        <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Arika on LinkedIn" className={item}>
          <LinkedIn />
        </a>
      </li>
    </ul>
  );
}
