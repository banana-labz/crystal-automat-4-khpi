import { RootState } from "store"

export function selectConfigState(state: RootState): RootState["config"] {
    return state.config;
}
