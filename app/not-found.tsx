import Link from "next/link";
import PageIntro from "@/components/PageIntro";

export default function NotFound() {
  return (
    <div className="pb-section">
      <PageIntro eyebrow="404" title="This page *took a wrong turn.*" intro="Easy to do. Let's get you back somewhere useful." />
      <div className="wrap mt-12">
        <Link href="/" className="u-link text-lead">Back to the homepage</Link>
      </div>
    </div>
  );
}
