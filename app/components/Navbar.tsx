import Wrapper from "./Wrapper"
import { FaInstagram, FaLinkedin } from "react-icons/fa"
import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next"

export default async function Navbar() {
  const client = createClient()
  const settings = await client.getSingle("site_settings")

  const { navigation_items, linkedin_url, instagram_url } = settings.data

  return (
    <nav className="border-b border-t border-black font-sans text-xl md:text-base">
      <Wrapper className="flex flex-col items-center justify-between md:flex-row md:border-l md:border-r md:border-black">
        <div className="flex flex-wrap items-center justify-center">
          {navigation_items.map(({ link, label }, i) => (
            <PrismicNextLink
              key={i}
              field={link}
              className="inline-block px-5 py-1 md:border-r md:border-black md:py-3"
            >
              {label}
            </PrismicNextLink>
          ))}
        </div>
        <div className="flex">
          <PrismicNextLink
            field={linkedin_url}
            className="inline-block px-5 py-3 md:border-l md:border-black"
          >
            <FaLinkedin className="h-6 w-6" />
          </PrismicNextLink>
          <PrismicNextLink
            field={instagram_url}
            className="inline-block px-5 py-3 md:border-l md:border-black"
          >
            <FaInstagram className="h-6 w-6" />
          </PrismicNextLink>
        </div>
      </Wrapper>
    </nav>
  )
}
