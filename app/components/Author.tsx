import { LinkField } from "@prismicio/client"
import { PrismicNextLink } from "@prismicio/next"
import { cn } from "../lib/utils"

export default function Author({
  name,
  link,
}: {
  name: string
  link: LinkField
}) {
  return link ? (
    <PrismicNextLink
      field={link}
      className="flex items-center gap-1 text-base md:text-xl"
    >
      <UserIcon />
      <span>{name}</span>
    </PrismicNextLink>
  ) : (
    <p
      className={cn("flex items-center gap-1 text-base md:text-xl", {
        // "justify-center md:justify-start": featured,
      })}
    >
      <UserIcon />
      <span>{name}</span>
    </p>
  )
}

function UserIcon() {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    </span>
  )
}
