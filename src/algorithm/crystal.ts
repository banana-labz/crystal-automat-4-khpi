import { CrystalGrowthOption } from "types"
import { createArray2D, forEach } from "./array2D"

const CRYSTAL_NEIGHBOR_OFFSETS = [-1, 1]
const BOOLEAN_OPTIONS = [true, false]
const NEIGHBORS_AMOUNT_OPTIONS = [0, 1, 2, 3, 4]
const DEFAULT_CRYSTAL_GROWTH_OPTIONS: CrystalGrowthOption[] = [
    { oldState: false, neighbors: 0, newState: false },
    { oldState: false, neighbors: 1, newState: true },
    { oldState: false, neighbors: 2, newState: false },
    { oldState: false, neighbors: 3, newState: false },
    { oldState: false, neighbors: 4, newState: false },
    { oldState: true, neighbors: 0, newState: true },
    { oldState: true, neighbors: 1, newState: true },
    { oldState: true, neighbors: 2, newState: true },
    { oldState: true, neighbors: 3, newState: true },
    { oldState: true, neighbors: 4, newState: false },
]

export function getInitialCrystal(fieldSize: number): boolean[][] {
    const cells = createArray2D<boolean>(fieldSize, false)
    const middle = Math.floor(fieldSize / 2)
    cells[middle][middle] = true
    return cells
}

export function createCrystalGrowthOption(seed: number | null): CrystalGrowthOption[] {
    if (seed === null) {
        return DEFAULT_CRYSTAL_GROWTH_OPTIONS
    }

    if (seed < 0 || seed >= 1024) {
        return DEFAULT_CRYSTAL_GROWTH_OPTIONS
    }

    const binaryRepresentation = (seed >>> 0).toString(2)

    const crystalGrowthOptions = BOOLEAN_OPTIONS.reduce<CrystalGrowthOption[]>((allOptions, oldState) => {
        const currentStateOptions = NEIGHBORS_AMOUNT_OPTIONS.map((neighbors, i) => {
            const indexInByteRepresentation = +oldState * NEIGHBORS_AMOUNT_OPTIONS.length + i
            const bit = binaryRepresentation.charAt(indexInByteRepresentation)

            return {
                oldState,
                neighbors,
                newState: bit === "1",
            }
        })

        return [
            ...allOptions,
            ...currentStateOptions,
        ]
    }, [])

    return crystalGrowthOptions
}

function getCrystalNeighbors(cells: boolean[][], x: number, y: number): number {
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

export function getNextCrystal(previousState: boolean[][], growthOptions: CrystalGrowthOption[]): boolean[][] {
    const newState = createArray2D(previousState.length, false)

    forEach(previousState, (cellStatus, x, y) => {
        const growthOption = growthOptions.find(({ oldState, neighbors }) => {
            const isSameCellState = oldState === cellStatus
            const isSameNeighborCount = neighbors === getCrystalNeighbors(previousState, x, y)

            return isSameCellState && isSameNeighborCount
        })

        newState[x][y] = !!growthOption?.newState
    })

    return newState
}