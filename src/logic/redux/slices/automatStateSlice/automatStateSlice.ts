import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { CrystalGrowthOption } from "logic/types"
import { getInitialCrystal, getNextCrystal } from "logic/algorithm/crystal"

const OLD_STATE_OPTIONS = [true, false]
const NEIGHBORS_AMOUNT_OPTIONS = [0, 1, 2, 3, 4]

const DEFAULT_FIELD_SIZE = 200

const initialState = {
  fieldSize: DEFAULT_FIELD_SIZE,
  iteration: 0,
  growthOptions: [
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
  ] as CrystalGrowthOption[],
  cells: getInitialCrystal(DEFAULT_FIELD_SIZE),
}

const automatStateSlice = createSlice({
  name: "automatState",
  initialState,
  reducers: {
    setFieldSize: (state, { payload }: PayloadAction<number>) => {
      state.fieldSize = payload
    },
    setGrowthOptions: (state, { payload }: PayloadAction<number>) => {
      if (!(payload >= 0 && payload < 1024)) {
        return
      }

      const binaryRepresentation = (payload >>> 0).toString(2)
      state.growthOptions = OLD_STATE_OPTIONS.reduce<CrystalGrowthOption[]>((allOptions, oldState) => {
        const currentStateOptions = NEIGHBORS_AMOUNT_OPTIONS.map((neighbors, i) => {
          const indexInByteRepresentation = +oldState * NEIGHBORS_AMOUNT_OPTIONS.length + i
          const bit = binaryRepresentation.charAt(indexInByteRepresentation)

          return { oldState, neighbors, newState: bit === "1" }
        });

        return [...allOptions, ...currentStateOptions]
      }, [])
      
    },
    reset: (state) => {
      state.cells = getInitialCrystal(state.fieldSize)
      state.iteration = 0
    },
    growCrystal: (state) => {
      state.cells = getNextCrystal(state.cells, state.growthOptions)
      state.iteration++
    }
  }
})

export const { reset, growCrystal, setGrowthOptions, setFieldSize } = automatStateSlice.actions
export default automatStateSlice.reducer