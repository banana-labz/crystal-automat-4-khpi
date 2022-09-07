import { createArray2D, forEach } from "utils"

const CRYSTAL_GROWTH_OPTIONS = [
  { oldState: false, neighbours: 1 },
  { oldState: true, neighbours: 0 },
  { oldState: true, neighbours: 1 },
  { oldState: true, neighbours: 2 },
  { oldState: true, neighbours: 3 },
]
const CRYSTAL_NEIGHBOUR_OFFSET = [-1, 1]

export const getCrystalNeighbours = (x: number, y: number, cells: boolean[][]) => {
  let neighbours = 0

  CRYSTAL_NEIGHBOUR_OFFSET.forEach(i => {
    CRYSTAL_NEIGHBOUR_OFFSET.forEach(j => {
      if (!cells[x + i]) {
        return
      }
      if (!cells[x + i][y + j]) {
        return
      }
      neighbours++
    })
  })

  return neighbours
}

export const next = (cells: boolean[][]) => {
  const newIteration = createArray2D(cells.length, false)

  forEach(cells, (cellStatus, x, y) => {
    const isCellActive = !!CRYSTAL_GROWTH_OPTIONS.find(({ oldState, neighbours }) => (
      oldState === cellStatus && neighbours === getCrystalNeighbours(x, y, cells)
    ))

    newIteration[x][y] = isCellActive
  })

  return newIteration
}