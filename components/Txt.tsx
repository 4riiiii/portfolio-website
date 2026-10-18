import { isTodo } from "@/lib/todo";

/** Renders a string; if it's a "TODO …" placeholder, it's visibly marked. */
export default function Txt({ children, className = "" }: { children: string; className?: string }) {
  return isTodo(children) ? <span className={`todo ${className}`}>{children}</span> : <span className={className}>{children}</span>;
}
