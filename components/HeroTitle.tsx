import { site } from "@/content/chapters";
import Scramble from "./Scramble";

/** Fixed in the foreground over the carousel. Ignores the pointer so slides stay clickable. */
export default function HeroTitle() {
  return (
    <div className="pointer-events-none fixed inset-0 z-20 flex flex-col items-center justify-center px-[var(--pad)] text-center text-white mix-blend-difference">
      <h1 className="font-display text-[clamp(4.5rem,31vw,27rem)] font-bold leading-[0.82] tracking-[-0.05em] md:text-[min(29vw,44vh)]">
        <Scramble text={site.display} />
      </h1>
      <p className="mt-5 max-w-[26rem] text-[13px] leading-snug md:mt-7 md:max-w-[30rem] md:text-[15px]">{site.description}</p>
    </div>
  );
}
