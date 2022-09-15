import { createSlice } from "@reduxjs/toolkit"

const configStateSlice = createSlice({
  name: "configState",
  initialState: {
    frameDuration: 6000 as number | undefined,
    cellSize: 10,
  },
  reducers: {
    setFrameDuration: (state, { payload }) => {
      const inputValue = payload.match(/\d+/)
      if (!inputValue) {
        state.frameDuration = undefined
        return
      }

      state.frameDuration = +inputValue
    },
    incrementCellSize: (state) => {
      state.cellSize++
    },
    decrementCellSize: (state) => {
      if (state.cellSize > 1) {
        state.cellSize--
      }
    },
  }
})

export const { setFrameDuration, incrementCellSize, decrementCellSize } = configStateSlice.actions
export default configStateSlice.reducer