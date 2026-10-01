import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

// Set NEXT_PUBLIC_SITE_URL to your production origin before deploying.
const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://howardfgoh.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projects/${p.id}`,
    lastModified: new Date(),
  }));

  return [...routes, ...projectRoutes];
}
