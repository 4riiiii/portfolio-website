import type { MetadataRoute } from "next";
import { projects, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/work", "/playground", "/contact", ...projects.map((p) => `/work/${p.slug}`)];
  return pages.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date() }));
}
