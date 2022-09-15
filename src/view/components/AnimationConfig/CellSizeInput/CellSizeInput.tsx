import React from "react"
import { useActions } from "react-redux-actions-hook"

import { useConfigState } from "logic/redux"
import * as actions from "logic/redux/slices/configStateSlice"

import {
  CellSizeInputContainer,
  CellSizeIndicator,
  CellSizeLevers,
} from "./CellSizeInput.styled"

export const CellSizeInput = () => {
  const { cellSize } = useConfigState()
  const { incrementCellSize, decrementCellSize } = useActions(actions)

  return (
    <CellSizeInputContainer>
      <CellSizeIndicator>Cell size: {cellSize}px</CellSizeIndicator>
      <CellSizeLevers>
        <button onClick={incrementCellSize}>+</button>
        <button onClick={decrementCellSize}>-</button>
      </CellSizeLevers>
    </CellSizeInputContainer>
  )
}
