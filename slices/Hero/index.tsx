import { cn } from "@/app/lib/utils"
import { Content } from "@prismicio/client"
import { PrismicNextImage } from "@prismicio/next"
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
      className={cn("mb-12 mt-8 md:mb-16 md:mt-14", {
        "flex flex-col items-center gap-8 text-center lg:flex-row lg:gap-4":
          slice.variation === "withImage",
      })}
    >
      <div className="space-y-6">
        <h1 className="font-serif text-3xl font-semibold md:text-5xl">
          {slice.primary.heading}
        </h1>
        <p className="max-w-3xl font-sans text-lg md:text-2xl">
          {slice.primary.tagline}
        </p>
      </div>
      {slice.variation === "withImage" && (
        <PrismicNextImage
          field={slice.primary.image}
          priority
          sizes="100vw"
          className="aspect-square size-72"
        />
      )}
    </section>
  )
}

export default Hero
