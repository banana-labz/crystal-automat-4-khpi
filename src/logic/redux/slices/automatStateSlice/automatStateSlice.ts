import { createSlice } from "@reduxjs/toolkit"

import { CrystalGrowthOption } from "logic/types"
import { getInitialCrystal, getNextCrystal } from "logic/algorithm/crystal"

const FIELD_SIZE = 100

const initialState = {
  fieldSize: FIELD_SIZE,
  growthOptions: [
    { oldState: false, neighbors: 0, newState: false },
    { oldState: false, neighbors: 1, newState: true },
    { oldState: false, neighbors: 2, newState: false },
    { oldState: false, neighbors: 3, newState: false },
    { oldState: true, neighbors: 0, newState: true },
    { oldState: true, neighbors: 1, newState: true },
    { oldState: true, neighbors: 2, newState: true },
    { oldState: true, neighbors: 3, newState: true },
  ] as CrystalGrowthOption[],
  cells: getInitialCrystal(FIELD_SIZE),
}

const automatStateSlice = createSlice({
  name: "automatState",
  initialState,
  reducers: {
    reset: (state) => {
      state.cells = getInitialCrystal(state.fieldSize)
    },
    growCrystal: (state) => {
      state.cells = getNextCrystal(state.cells, state.growthOptions)
    }
  }
})

export const { reset, growCrystal } = automatStateSlice.actions
export default automatStateSlice.reducer