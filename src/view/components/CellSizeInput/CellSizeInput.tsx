import React from "react"
import { useActions } from "react-redux-actions-hook"

import { useConfigState } from "logic/redux"
import * as actions from "logic/redux/slices/configStateSlice"

export const CellSizeInput = () => {
  const { cellSize } = useConfigState()
  const { incrementCellSize, decrementCellSize } = useActions(actions)

  return (
    <div className="CellSizeInput">
      <p>Cell size: {cellSize}px</p>
      <button onClick={incrementCellSize}>+</button>
      <button onClick={decrementCellSize}>-</button>
    </div>
  )
}
