import Heading2 from "@/app/components/Heading2"
import { Content } from "@prismicio/client"
import { PrismicRichText, SliceComponentProps } from "@prismicio/react"

/**
 * Props for `Guidelines`.
 */
export type GuidelinesProps = SliceComponentProps<Content.GuidelinesSlice>

/**
 * Component for "Guidelines" Slices.
 */
const Guidelines = ({ slice }: GuidelinesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="my-8 space-y-8 md:my-12"
    >
      {slice.items.map(({ title, content }, i) => (
        <div key={i} className="space-y-4">
          <Heading2>{title}</Heading2>
          <div className="prose prose-black prose-lg md:prose-2xl space-y-4 marker:text-black">
            <PrismicRichText field={content} />
          </div>
        </div>
      ))}
    </section>
  )
}

export default Guidelines
