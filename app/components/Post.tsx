import { cn, formatDate } from "@/app/lib/utils"

import {
  // ContentRelationshipField,
  ImageField,
  KeyTextField,
} from "@prismicio/client"
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next"
import Link from "next/link"
import Author from "./Author"

type PostProps = {
  featured?: boolean
  last_publication_date: string
  uid: KeyTextField
  cover_image: ImageField
  title: KeyTextField
  author: any
  summary: KeyTextField
}

export default function Post({
  featured,
  last_publication_date,
  uid,
  cover_image,
  title,
  author,
  summary,
}: PostProps) {
  const { name, link } = author.data

  return (
    <Link
      href={`/blog/${uid}`}
      className={cn(
        "card-hover relative flex flex-col border border-black font-sans",
        {
          "md:flex-row md:text-start": featured,
        },
      )}
    >
      {featured && (
        <p className="absolute left-0 top-0 -translate-x-px -translate-y-1/2 border border-black bg-white px-4 py-2 text-lg">
          FEATURED POST
        </p>
      )}
      <PrismicNextImage
        field={cover_image}
        className={cn("mx-auto aspect-[4/3] w-full object-cover lg:mx-0", {
          "md:aspect-square md:w-[40%]": featured,
        })}
        priority={featured}
        // sizes="100vw"
      />

      <div className="p-4">
        <p className="text-base font-light md:text-lg">
          {formatDate(last_publication_date)}
        </p>
        <div className="space-y-3">
          <h1
            className={cn("font-serif text-xl font-medium md:text-3xl", {
              "text-2xl md:text-4xl": featured,
            })}
          >
            {title}
          </h1>
          <Author name={name} link={link} />
          <p className="font-sans text-lg md:text-xl">{summary}</p>
        </div>
      </div>
    </Link>
  )
}
