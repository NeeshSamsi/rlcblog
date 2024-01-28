import { createClient } from "@/prismicio"
import { MetadataRoute } from "next"

export default async function robots(): Promise<MetadataRoute.Robots> {
  const client = await createClient()
  const settings = await client.getSingle("site_settings")

  const { deployed_url } = settings.data

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${deployed_url}/sitemap.xml`,
  }
}
