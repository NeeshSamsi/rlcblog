import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next"
import Image from "next/image"

export default async function Footer() {
  const client = createClient()
  const settings = await client.getSingle("site_settings")

  const {
    college_description: description,
    email_addresses: emails,
    phone_numbers: numbers,
    navigation_items,
  } = settings.data

  return (
    <footer
      id="contact"
      className="mt-16 flex flex-wrap justify-between gap-8 text-xl sm:text-base"
    >
      <div>
        <Image
          src="/logo.jpg"
          alt="Rizvi Law College Logo"
          width={112}
          height={112}
          className="aspect-square w-28"
        />
        <p className="max-w-[35ch]">{description}</p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-serif text-xl font-semibold">
          Contact information
        </h3>
        <div className="grid gap-2">
          {emails.map(({ email }, i) => (
            <p key={i}>{email}</p>
          ))}
          {numbers.map(({ number }, i) => (
            <p key={i}>{number}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-serif text-xl font-semibold">Navigation links</h3>
        <div className="grid gap-2">
          {navigation_items.map(({ link, label }, i) => (
            <PrismicNextLink key={i} field={link} className="inline-block">
              {label}
            </PrismicNextLink>
          ))}
        </div>
      </div>
    </footer>
  )
}
