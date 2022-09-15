import React from "react"

import { forEach } from "logic/utils"

import { theme } from "view/themes"
import { useCanvas } from "view/hooks"

import { CanvasStyled } from "./Canvas.styled"

interface CanvasProps {
  iteration: number
  cells: boolean[][]
  cellSize: number
}

export const Canvas = ({
  iteration,
  cells,
  cellSize,
}: CanvasProps) => {  
  const canvasRef = useCanvas((context) => {
    context.fillStyle = theme.colors.canvasFill

    forEach(cells, (cellStatus, i, j) => {
      cellStatus && context.fillRect(j * cellSize, i * cellSize, cellSize, cellSize)
    })
  }, [cells, cellSize])

  const canvasSize = cellSize * cells.length

  return (
    <CanvasStyled
      ref={canvasRef}
      width={canvasSize}
      height={canvasSize}
    />
  )
}