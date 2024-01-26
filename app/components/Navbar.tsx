import Link from "next/link"
import Wrapper from "./Wrapper"
import { FaInstagram, FaLinkedin } from "react-icons/fa"

export default async function Navbar() {
  const navlinks = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Submission Guidelines", path: "/submission-guidelines" },
    { text: "Contact", path: "/#contact" },
  ]

  return (
    <nav className="border-b border-t border-black font-sans text-xl md:text-base">
      <Wrapper className="flex flex-col items-center justify-between md:flex-row md:border-l md:border-r md:border-black">
        <div className="flex flex-wrap items-center justify-center">
          {navlinks.map(({ path, text }) => (
            <Link
              key={path}
              href={path}
              className="inline-block px-5 py-1 md:border-r md:border-black md:py-3"
            >
              {text}
            </Link>
          ))}
        </div>
        <div className="flex">
          <Link
            href="https://linkedin.com"
            className="inline-block px-5 py-3 md:border-l md:border-black"
          >
            <FaLinkedin className="h-6 w-6" />
          </Link>
          <Link
            href="https://instagram.com"
            className="inline-block px-5 py-3 md:border-l md:border-black"
          >
            <FaInstagram className="h-6 w-6" />
          </Link>
        </div>
      </Wrapper>
    </nav>
  )
}
