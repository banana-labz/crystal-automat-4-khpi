import React from "react"
import { useSelector } from "react-redux"

import { selectors } from "store"

import { Layout } from "./Layout"
import { AutomatConfig } from "./AutomatConfig"
import { AnimationConfig } from "./AnimationConfig"
import { Automat } from "./Automat"

export const App = () => {
    const { cells } = useSelector(selectors.automat)
    const { cellSize } = useSelector(selectors.config)

    return (
        <Layout width={cells.length * cellSize}>
            <AutomatConfig />
            <AnimationConfig />
            <Automat />
        </Layout>
    )
}
