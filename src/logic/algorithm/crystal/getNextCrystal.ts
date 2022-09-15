import { CrystalGrowthOption } from "logic/types"
import { createArray2D, forEach } from "logic/utils"

const CRYSTAL_NEIGHBOR_OFFSETS = [-1, 1]

const getCrystalNeighbors = (cells: boolean[][], x: number, y: number) => {
  let neighbors = 0

  CRYSTAL_NEIGHBOR_OFFSETS.forEach(i => {
    if (!cells[x + i]) {
      return
    }
    CRYSTAL_NEIGHBOR_OFFSETS.forEach(j => { 
      if (!cells[x + i][y + j]) {
        return
      }
      neighbors++
    })
  })

  return neighbors
}

export const getNextCrystal = (previousState: boolean[][], growthOptions: CrystalGrowthOption[]) => {
  const newState = createArray2D(previousState.length, false)

  forEach(previousState, (cellStatus, x, y) => {
    const growthOption = growthOptions.find(({ oldState, neighbors }) => {
      const isSameState = oldState === cellStatus
      const isSameNeighourCount = neighbors === getCrystalNeighbors(previousState, x, y)

      return isSameState && isSameNeighourCount
    })

    newState[x][y] = !!growthOption?.newState
  })

  return newState
}