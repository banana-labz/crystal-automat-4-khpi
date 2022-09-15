import React from "react"

import { useAutomatState, useConfigState } from "logic/redux"

import { Layout } from "./Layout"
import { AutomatConfig } from "./AutomatConfig"
import { AnimationConfig } from "./AnimationConfig"
import { Automat } from "./Automat"

export const App = () => {
  const { cells } = useAutomatState()
  const { cellSize } = useConfigState()

  return (
    <Layout width={cells.length * cellSize}>
      <AutomatConfig />
      <AnimationConfig />
      <Automat />
    </Layout>
  )
}
