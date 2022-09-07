import React, { useEffect, useRef } from "react"

import { colors } from "const"

import { forEach } from "utils"

interface CanvasProps {
  cells: boolean[][]
  cellWidth: number
  cellHeight: number
}

export const Canvas = ({ cells, cellWidth, cellHeight }: CanvasProps) => {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) {
      return
    }

    const context = canvas.getContext("2d")
    if (!context) {
      return
    }

    context.clearRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = colors.ACTIVE_CELL_COLOR

    forEach(cells, (cellStatus, i, j) => {
      cellStatus && context.fillRect(
        j * cellHeight,
        i * cellWidth,
        cellHeight,
        cellWidth,
      )
    })

  }, [cells])
  
  return (
    <canvas
      ref={ref}
      width={cellWidth * cells.length}
      height={cellHeight * cells.length}
      style={{ backgroundColor: colors.BACKGROUND_COLOR }}
    />
  )
}