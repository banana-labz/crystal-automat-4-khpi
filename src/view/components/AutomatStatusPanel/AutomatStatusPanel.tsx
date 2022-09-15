import React from "react"

import {
  AutomatStatusPanelContainer,
  IterationIndicator,
  AutomatStatusButtons,
} from "./AutomatStatusPanel.styled"

type AutomatStatusPanelProps = {
  iteration: number
  pause: boolean
  switchPause: () => void
  resetAutomat: () => void
}

export const AutomatStatusPanel = ({
  iteration,
  pause,
  switchPause,
  resetAutomat,
}: AutomatStatusPanelProps) => (
  <AutomatStatusPanelContainer>
    <IterationIndicator>Iteration: {iteration}</IterationIndicator>
    <AutomatStatusButtons>
      <button onClick={resetAutomat}>Reset</button>
      {pause && <button onClick={switchPause}>Resume</button>}
      {!pause && <button onClick={switchPause}>Pause</button>}
    </AutomatStatusButtons>
  </AutomatStatusPanelContainer>
)