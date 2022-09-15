import React, { useCallback } from "react"
import { useActions } from "react-redux-actions-hook"

import { useAutomatState, useConfigState } from "logic/redux"
import * as automatActions from "logic/redux/slices/automatStateSlice"

import { useFrameLoop } from "view/hooks/useFrameLoop"

import { Canvas } from "./Canvas"
import { Layout } from "./Layout"
import { ConfigPanel } from "./ConfigPanel"
import { AutomatContainer } from "./AutomatContainer"
import { AutomatStatusPanel } from "./AutomatStatusPanel"

export const App = () => {
  const { cells } = useAutomatState()
  const { frameDuration, cellSize } = useConfigState()
  const { growCrystal, reset } = useActions(automatActions)

  const frameLoopData = useFrameLoop(growCrystal, frameDuration)
  const { iteration, setIteration } = frameLoopData.iteration
  const { pause, switchPause } = frameLoopData.pause

  const resetAutomat = useCallback(() => {
    reset()
    setIteration(0)
  }, [])

  return (
    <Layout width={cells.length * cellSize}>
      <ConfigPanel />
      <AutomatContainer>
        <AutomatStatusPanel
          iteration={iteration}
          pause={pause}
          switchPause={switchPause}
          resetAutomat={resetAutomat}
        />
        <Canvas
          cells={cells}
          iteration={iteration}
          cellSize={cellSize}
        />
      </AutomatContainer>
    </Layout>
  )
}
