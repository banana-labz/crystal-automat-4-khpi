import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { createCrystalGrowthOption, getInitialCrystal, getNextCrystal } from "algorithm"

const DEFAULT_FIELD_SIZE = 200

const initialState = {
    fieldSize: DEFAULT_FIELD_SIZE,
    iteration: 0,
    growthOptions: createCrystalGrowthOption(null),
    cells: getInitialCrystal(DEFAULT_FIELD_SIZE),
}

const automatSlice = createSlice({
    name: "automat",
    initialState,
    reducers: {
        setFieldSize: (state, { payload }: PayloadAction<number>) => {
            state.fieldSize = payload
        },
        setGrowthOptions: (state, { payload }: PayloadAction<number>) => {
            state.growthOptions = createCrystalGrowthOption(payload);
        },
        reset: (state) => {
            state.cells = getInitialCrystal(state.fieldSize)
            state.iteration = 0
        },
        growCrystal: (state) => {
            state.cells = getNextCrystal(state.cells, state.growthOptions)
            state.iteration++
        },
    },
})

export const automatActions = automatSlice.actions
export const automatReducer = automatSlice.reducer