import Image from "next/image"
import Link from "next/link"

export default async function Footer() {
  const emails = ["one@gmail.com", "two@gmail.com"]
  const numbers = ["9109090909", "9209090909"]

  const navlinks = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Submission Guidelines", path: "/submission-guidelines" },
    { text: "Contact", path: "/#contact" },
  ]

  return (
    <footer className="flex flex-wrap justify-between gap-8 text-xl sm:text-base">
      <div>
        <Image
          src="/logo.jpg"
          alt="Rizvi Law College Logo"
          width={112}
          height={112}
          className="aspect-square w-28"
        />
        <p className="max-w-[35ch]">
          Rizvi Law College is an outstanding Law College in the city of Mumbai.
          Since its establishment in the year 2002, the college has proved
          itself to be a popular destination for young students who choose to
          study law in a systematic and creative manner in an environment which
          is conducive to make students attain the best of their talents.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-serif text-xl font-semibold">
          Contact information
        </h3>
        <div className="grid gap-2">
          {emails.map((email, i) => (
            <p key={i}>{email}</p>
          ))}
          {numbers.map((number, i) => (
            <p key={i}>{number}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-serif text-xl font-semibold">Navigation links</h3>
        <div className="grid gap-2">
          {navlinks.map(({ path, text }) => (
            <Link key={path} href={path} className="inline-block">
              {text}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
