import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    frameDuration: 6000,
    cellSize: 3,
}

const configSlice = createSlice({
    name: "config",
    initialState,
    reducers: {
        setFrameDuration: (state, { payload }: PayloadAction<number>) => {
            state.frameDuration = payload
        },
        incrementCellSize: (state) => {
            if (state.cellSize > 30) {
                return
            }

            state.cellSize++
        },
        decrementCellSize: (state) => {
            if (state.cellSize <= 1) {
                return
            }

            state.cellSize--
        },
    },
})

export const configActions = configSlice.actions
export const configReducer = configSlice.reducer