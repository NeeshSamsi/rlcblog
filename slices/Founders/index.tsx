import { Content } from "@prismicio/client"
import { PrismicNextImage } from "@prismicio/next"
import { SliceComponentProps } from "@prismicio/react"

/**
 * Props for `Founders`.
 */
export type FoundersProps = SliceComponentProps<Content.FoundersSlice>

/**
 * Component for "Founders" Slices.
 */
const Founders = ({ slice }: FoundersProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-wrap justify-center gap-8 md:justify-between"
    >
      {slice.items.map(({ avatar, designation, name }, i) => (
        <div key={i} className="grid gap-6 border border-black p-4 text-center">
          <PrismicNextImage
            field={avatar}
            className="aspect-square w-52 object-cover"
          />
          <div>
            <p className="font-sans text-lg font-extralight capitalize">
              {designation}
            </p>
            <p className="font-serif text-xl font-medium md:text-center md:text-2xl">
              {name}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Founders
