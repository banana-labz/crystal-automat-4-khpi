import { useSelector } from "react-redux"

import { RootState } from "logic/redux"

export const useAutomatState = () => (
  useSelector<RootState, RootState["automatState"]>(state => state.automatState)
);
