import Heading2 from "@/app/components/Heading2"
import { Content } from "@prismicio/client"
import { PrismicNextImage } from "@prismicio/next"
import { SliceComponentProps } from "@prismicio/react"

/**
 * Props for `Message`.
 */
export type MessageProps = SliceComponentProps<Content.MessageSlice>

/**
 * Component for "Message" Slices.
 */
const Message = ({ slice }: MessageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="my-8 space-y-2 md:my-12 md:space-y-6"
    >
      <Heading2>{slice.primary.title}</Heading2>
      <div className="card-hover grid grid-cols-1 gap-2 border border-black p-4 md:grid-cols-[1fr,4fr] md:gap-4">
        <div className="grid gap-2">
          <PrismicNextImage
            field={slice.primary.avatar}
            // sizes="100vw"
            className="aspect-square object-cover"
          />
          <p className="font-serif text-xl font-medium md:text-center md:text-2xl">
            {slice.primary.name}
          </p>
        </div>
        <p className="font-sans text-base md:text-lg">
          {slice.primary.description}
        </p>
      </div>
    </section>
  )
}

export default Message
