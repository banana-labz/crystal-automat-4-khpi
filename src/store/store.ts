import { configureStore } from "@reduxjs/toolkit"

import { automatReducer } from "./automat"
import { configReducer } from "./config"

export const store = configureStore({
    reducer: {
        automat: automatReducer,
        config: configReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export const { dispatch } = store

export type RootState = ReturnType<typeof store.getState>