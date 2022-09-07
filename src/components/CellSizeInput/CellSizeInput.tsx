import React from "react"

interface CellSizeInputProps {
  cellSize: number
  incrementCellSize: () => void
  decrementCellSize: () => void
}

export const CellSizeInput = ({
  cellSize,
  incrementCellSize,
  decrementCellSize
}: CellSizeInputProps) => (
  <div className="CellSizeInput">
    <p>Cell size: {cellSize}px</p>
    <button onClick={incrementCellSize}>+</button>
    <button onClick={decrementCellSize}>-</button>
  </div>
)
