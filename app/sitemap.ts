import { createClient } from "@/prismicio"
import { MetadataRoute } from "next"

export default async function sitempap(): Promise<MetadataRoute.Sitemap> {
  const client = createClient()
  const settings = await client.getSingle("site_settings")
  const pages = await client.getAllByType("page")
  const posts = await client.getAllByType("blog_posts")

  const { deployed_url } = settings.data

  const url =
    process.env.NODE_ENV === "production"
      ? deployed_url
      : "http://localhost:3000"

  const pageUrls = pages.map((page) => ({
    url: `${url}/${page.uid}`,
    lastModified: new Date(),
  }))
  const postUrls = posts.map((post) => ({
    url: `${url}/blog/${post.uid}`,
    lastModified: new Date(post.last_publication_date),
  }))

  return [
    {
      url: `${url}/`,
      lastModified: new Date(),
    },
    ...pageUrls,
    ...postUrls,
  ]
}
