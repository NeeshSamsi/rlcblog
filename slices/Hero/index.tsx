import { cn } from "@/app/lib/utils"
import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={cn("mb-12 mt-8 space-y-6 md:mb-16 md:mt-14", {
        "text-center": slice.variation === "centered",
      })}
    >
      <h1 className="font-serif text-3xl font-semibold md:text-5xl">
        {slice.primary.heading}
      </h1>
      <p
        className={cn("max-w-3xl font-sans text-lg md:text-2xl", {
          "mx-auto": slice.variation === "centered",
        })}
      >
        {slice.primary.tagline}
      </p>
    </section>
  )
}

export default Hero
