import { chapters } from "@/content/chapters";
import Carousel from "@/components/Carousel";
import HeroTitle from "@/components/HeroTitle";

export default function Home() {
  return (
    <>
      <Carousel chapters={chapters} />
      <HeroTitle />
    </>
  );
}
