import { Metadata } from "next"

import { createClient } from "@/prismicio"
import { SliceZone } from "@prismicio/react"
import { components } from "@/slices"

import Post from "@/app/components/Post"
import Heading2 from "@/app/components/Heading2"

export default async function Page() {
  const client = createClient()
  const page = await client.getSingle("home")
  const posts = await client.getAllByType("blog_posts", {
    fetchLinks: ["authors.name", "authors.link"],
  })

  let featuredPost

  try {
    // @ts-ignore
    featuredPost = await client.getByID(page.data.featured_post.id, {
      fetchLinks: ["authors.name", "authors.link"],
    })
  } catch (error) {
    console.log(error)
  }

  return (
    <>
      <main>
        <SliceZone slices={page.data.slices} components={components} />
      </main>

      {featuredPost && (
        <section className="my-12 md:my-16">
          <Post
            featured
            last_publication_date={featuredPost.last_publication_date}
            uid={featuredPost.uid}
            // @ts-ignore
            cover_image={featuredPost.data.cover_image}
            // @ts-ignore
            title={featuredPost.data.title}
            // @ts-ignore
            author={featuredPost.data.author}
            // @ts-ignore
            summary={featuredPost.data.summary}
          />
        </section>
      )}

      <section className="space-y-6">
        <Heading2>Latest Posts</Heading2>

        {posts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map(
              (
                {
                  last_publication_date,
                  uid,
                  data: { cover_image, title, author, summary },
                },
                i,
              ) => {
                return (
                  <Post
                    key={i}
                    last_publication_date={last_publication_date}
                    uid={uid}
                    cover_image={cover_image}
                    title={title}
                    author={author}
                    summary={summary}
                  />
                )
              },
            )}
          </div>
        ) : (
          <p>No posts to show.</p>
        )}
      </section>
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const page = await client.getSingle("home")

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title || "",
      description: page.data.meta_description || "",
      images: [page.data.meta_image.url || ""],
    },
    twitter: {
      title: page.data.meta_title || "",
      description: page.data.meta_description || "",
    },
  }
}
