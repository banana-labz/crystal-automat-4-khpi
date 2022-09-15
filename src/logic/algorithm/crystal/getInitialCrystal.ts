import { createArray2D } from "logic/utils"

export const getInitialCrystal = (fieldSize: number) => {
  const cells = createArray2D(fieldSize, false) as boolean[][]
  const middle = Math.floor(fieldSize / 2)
  cells[middle][middle] = true
  return cells
}
