import Image from "next/image"

export default async function Header() {
  return (
    <header className="my-4 flex flex-col items-center justify-center gap-0 font-serif font-medium lg:my-8 lg:flex-row lg:gap-6">
      <Image
        src="/logo.jpg"
        alt="Rizvi Law College Logo"
        width={180}
        height={180}
        className="aspect-square w-44"
        priority
      />
      <div className="space-y-2 text-center">
        <p className="text-lg md:text-2xl">RIZVI EDUCATION SOCIETY&apos;S</p>
        <p className="font-algerian text-3xl md:text-5xl">Rizvi Law College</p>
        <p className="text-base md:text-xl">
          New Rizvi Education Complex, Off Carter Road, Bandra (West), Mumbai
          400 050 <br /> Phone: 2600 2230, 2600 2322
        </p>
      </div>
    </header>
  )
}
