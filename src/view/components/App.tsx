import React, { useState, useCallback, useEffect } from "react"

import { FrameDurationInput } from "view/components/FrameDurationInput"
import { CellSizeInput } from "view/components/CellSizeInput"
import { Canvas } from "view/components/Canvas"

import { createArray2D } from "logic/utils"
import { next } from "logic/algorithm/crystal"

const FIELD_SIZE = 100

const defaultFieldState = createArray2D(FIELD_SIZE, false)
defaultFieldState[FIELD_SIZE / 2][FIELD_SIZE / 2] = true

export const App = () => {
  const [pause, setPause] = useState(false)
  const [iteration, setIteration] = useState<number | null>(0)
  const [frameDuration, setFrameDuration] = useState<number | null>(1000)
  const [cells, setCells] = useState<boolean[][]>(defaultFieldState)

  const [cellSize, setCellSize] = useState<number>(8)

  const incrementIteration = useCallback(() => setIteration(iteration => (iteration || 0) + 1), []);
  const incrementCellSize = useCallback(() => setCellSize(scale => scale + 1), [])
  const decrementCellSize = useCallback(() => setCellSize(scale => scale > 1 ? scale - 1 : scale), [])
  const pauseIterations = useCallback(() => { setPause(true) }, [])
  const resumeIteration = useCallback(() => {
    setPause(false)
    incrementIteration()
  }, [])

  useEffect(() => {
    if (pause) {
      return
    }

    setTimeout(() => {
      if (!iteration) {
        setIteration(1)
        return
      }
      incrementIteration()
    }, frameDuration || 1000)
    setCells(next)
  }, [iteration])

  return (
    <>
      <div className="config" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px', padding: '16px' }}>
        <p>Iteration: {iteration}</p>
        <CellSizeInput
          cellSize={cellSize}
          incrementCellSize={incrementCellSize}
          decrementCellSize={decrementCellSize}
        />
        <FrameDurationInput
          frameDuration={frameDuration}
          setFrameDuration={setFrameDuration}
        />
        {pause && <button onClick={resumeIteration}>Resume</button>}
        {!pause && <button onClick={pauseIterations}>Pause</button>}
      </div>
      <Canvas
        cellWidth={cellSize}
        cellHeight={cellSize}
        cells={cells}
      />
    </>
  )
}
