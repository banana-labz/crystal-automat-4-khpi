import { configureStore } from "@reduxjs/toolkit"

import {
  automatStateReducer,
  configStateReducer,
} from "logic/redux/slices"

export const store = configureStore({
  reducer: {
    configState: configStateReducer,
    automatState: automatStateReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
})

export type RootState = ReturnType<typeof store.getState>