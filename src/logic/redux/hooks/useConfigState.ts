import { useSelector } from "react-redux"

import { RootState } from "logic/redux"

export const useConfigState = () => (
  useSelector<RootState, RootState["configState"]>(state => state.configState)
)
