import Author from "@/app/components/Author"
import { formatDate } from "@/app/lib/utils"
import { createClient } from "@/prismicio"
import { PrismicNextImage } from "@prismicio/next"
import { PrismicRichText } from "@prismicio/react"
import { Metadata } from "next"
import { notFound } from "next/navigation"

type ParamsType = {
  params: {
    uid: string
  }
}

export default async function BlogPost({ params: { uid } }: ParamsType) {
  const client = createClient()

  const post = await client.getByUID("blog_posts", uid, {
    fetchLinks: ["authors.name", "authors.link"],
  })
  if (!post) notFound()

  const {
    last_publication_date,
    data: {
      cover_image,
      title,
      author: {
        //@ts-ignore
        data: { name, link },
      },
      post_content,
    },
  } = post

  return (
    <main className="prose prose-lg my-12 font-sans md:prose-xl md:my-16">
      <PrismicNextImage
        field={cover_image}
        className="aspect-[4/3] w-full object-cover"
      />
      <h1 className="font-serif text-3xl font-semibold md:text-5xl">{title}</h1>
      <p className="not-prose flex items-center gap-2">
        <span className="text-lg md:text-xl">
          {formatDate(last_publication_date)}
        </span>
        <span>·</span>
        <Author name={name} link={link} />
      </p>
      <div className="prose-headings:font-serif">
        <PrismicRichText field={post_content} />
      </div>
    </main>
  )
}

export async function generateMetadata({ params: { uid } }: ParamsType) {
  const client = createClient()

  const post = await client.getByUID("blog_posts", uid, {
    fetchLinks: ["authors.name"],
  })
  if (!post) {
    return {
      title: "This article could not be found",
    }
  }

  const {
    last_publication_date,
    data: {
      cover_image,
      title,
      summary,
      author: {
        //@ts-ignore
        data: { name },
      },
    },
  } = post
  const meta: Metadata = {
    title,
    description: summary,

    openGraph: {
      images: [cover_image.url || ""],
      authors: [name],
      publishedTime: new Date(last_publication_date).toISOString(),
    },

    twitter: {
      card: "summary",
    },

    alternates: {
      canonical: `/blog/${uid}`,
    },
  }

  return meta
}

export async function generateStaticParams() {
  const client = createClient()

  const posts = await client.getAllByType("blog_posts")
  const slugs = posts.map((post) => post.uid)

  return slugs
}
