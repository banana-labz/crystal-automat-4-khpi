import React from "react"
import { useActions } from "react-redux-actions-hook"

import { useAutomatState, useConfigState } from "logic/redux"
import * as automatActions from "logic/redux/slices/automatStateSlice"

import { useFrameLoop } from "view/hooks/useFrameLoop"

import { Canvas } from "./Canvas"
import { AutomatStatus } from "./AutomatStatus"
import { AutomatContainer } from "./Automat.styled"

export const Automat = () => {
  const { iteration, cells } = useAutomatState()
  const { frameDuration, cellSize } = useConfigState()
  const { growCrystal, reset } = useActions(automatActions)

  const { pause, switchPause } = useFrameLoop(growCrystal, frameDuration, [iteration])

  return (
    <AutomatContainer>
      <AutomatStatus
        iteration={iteration}
        pause={pause}
        switchPause={switchPause}
        resetAutomat={reset}
      />
      <Canvas
        cells={cells}
        iteration={iteration}
        cellSize={cellSize}
      />
    </AutomatContainer>
  )
}
