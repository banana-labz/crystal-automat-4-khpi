import React from "react"
import { useActions } from "react-redux-actions-hook"

import { useAutomatState, useConfigState } from "logic/redux"
import * as automatActions from "logic/redux/slices/automatStateSlice"

import { CellSizeInput } from "view/components/CellSizeInput"
import { FrameDurationInput } from "view/components/FrameDurationInput"
import { Canvas } from "view/components/Canvas"
import { useFrameLoop } from "view/hooks/useFrameLoop"

export const App = () => {
  const { cells } = useAutomatState()
  const { frameDuration, cellSize } = useConfigState()
  const { growCrystal } = useActions(automatActions)

  const frameLoopData = useFrameLoop(growCrystal, frameDuration)
  const { iteration, setIteration } = frameLoopData.iteration
  const { pause, switchPause } = frameLoopData.pause

  return (
    <>
      <div className="config" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px', padding: '16px' }}>
        <p>Iteration: {iteration}</p>
        <CellSizeInput />
        <FrameDurationInput />
        {pause && <button onClick={switchPause}>Resume</button>}
        {!pause && <button onClick={switchPause}>Pause</button>}
      </div>
      <Canvas
        cellWidth={cellSize}
        cellHeight={cellSize}
        cells={cells}
      />
    </>
  )
}
