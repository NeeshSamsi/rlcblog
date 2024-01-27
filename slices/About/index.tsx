import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="space-y-2 md:space-y-6"
    >
      <h2 className="font-serif text-2xl font-semibold md:text-4xl">
        {slice.primary.title}
      </h2>
      <p className="font-sans text-lg md:text-2xl">
        {slice.primary.description}
      </p>
    </section>
  )
}

export default About
