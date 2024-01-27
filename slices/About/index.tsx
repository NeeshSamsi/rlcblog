import Heading2 from "@/app/components/Heading2"
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
      <Heading2>{slice.primary.title}</Heading2>
      <p className="font-sans text-lg md:text-2xl">
        {slice.primary.description}
      </p>
    </section>
  )
}

export default About
