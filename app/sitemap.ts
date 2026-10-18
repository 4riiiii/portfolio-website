import type { MetadataRoute } from "next";
import { chapters, site } from "@/content/chapters";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/contact", ...chapters.map((c) => `/chapters/${c.slug}`)];
  return pages.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date() }));
}
