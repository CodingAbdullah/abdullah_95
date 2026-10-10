import type { MetadataRoute } from "next"
import { SITE_URL } from "@/utils/constants/Profile"

// Single-page site, so the sitemap has one entry
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE_URL, changeFrequency: "monthly", priority: 1 }]
}
