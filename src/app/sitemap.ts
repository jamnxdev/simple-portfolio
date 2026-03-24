import type { MetadataRoute } from "next"

import { SITE_INFO } from "@/config/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: SITE_INFO.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_INFO.url}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_INFO.url}/blogs`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.7,
    },
  ]
}
