import { RootState } from "store"

export function selectAutomatState(state: RootState): RootState["automat"] {
    return state.automat;
}