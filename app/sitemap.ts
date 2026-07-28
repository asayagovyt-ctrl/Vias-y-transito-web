import type { MetadataRoute } from "next";
import { siteUrl } from "@/constants/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/servicios", "/proyectos", "/nosotros", "/contacto", "/politica-de-datos"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
