import { ReactNode } from "react"

export default function Heading2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-serif text-3xl font-semibold md:text-4xl">
      {children}
    </h2>
  )
}
