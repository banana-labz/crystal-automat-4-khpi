import { automatActions, selectAutomatState } from "./automat"
import { configActions, selectConfigState } from "./config"

export const actions = {
    automat: automatActions,
    config: configActions,
}

export const selectors = {
    automat: selectAutomatState,
    config: selectConfigState,
}

export * from "./store"