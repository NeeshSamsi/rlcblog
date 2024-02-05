"use client"

import { SliceSimulator } from "@slicemachine/adapter-next/simulator"
import { SliceZone } from "@prismicio/react"

import { components } from "../../slices"
import Wrapper from "../components/Wrapper"

export default function SliceSimulatorPage() {
  return (
    <Wrapper>
      <SliceSimulator
        sliceZone={(props) => <SliceZone {...props} components={components} />}
      />
    </Wrapper>
  )
}
