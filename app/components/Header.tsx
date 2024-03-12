import { createClient } from "@/prismicio"
import Image from "next/image"

export default async function Header() {
  const client = createClient()
  const settings = await client.getSingle("site_settings")

  const { pre_college_name, college_name, college_address } = settings.data

  return (
    <header className="my-4 flex flex-col items-center justify-center gap-0 font-serif font-medium lg:my-8 lg:flex-row lg:gap-6">
      <Image
        src="/logo.jpg"
        alt="Rizvi Law College Logo"
        width={180}
        height={180}
        className="aspect-square w-44"
        priority
        sizes="176px"
      />
      <div className="space-y-2 text-center">
        <p className="text-lg uppercase md:text-2xl">{pre_college_name}</p>
        <p className="font-algerian text-3xl md:text-5xl">{college_name}</p>
        <p className="text-base md:text-xl">{college_address}</p>
      </div>
    </header>
  )
}
