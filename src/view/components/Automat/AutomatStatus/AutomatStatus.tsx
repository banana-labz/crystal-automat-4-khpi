import React from "react"

import {
  AutomatStatusContainer,
  IterationIndicator,
  AutomatStatusButtons,
} from "./AutomatStatus.styled"

type AutomatStatusProps = {
  iteration: number
  pause: boolean
  switchPause: () => void
  resetAutomat: () => void
}

export const AutomatStatus = ({
  iteration,
  pause,
  switchPause,
  resetAutomat,
}: AutomatStatusProps) => (
  <AutomatStatusContainer>
    <IterationIndicator>Iteration: {iteration}</IterationIndicator>
    <AutomatStatusButtons>
      <button onClick={resetAutomat}>Reset</button>
      {pause && <button onClick={switchPause}>Resume</button>}
      {!pause && <button onClick={switchPause}>Pause</button>}
    </AutomatStatusButtons>
  </AutomatStatusContainer>
)