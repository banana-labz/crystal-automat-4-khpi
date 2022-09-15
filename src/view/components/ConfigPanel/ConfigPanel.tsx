import React from "react"

import { CellSizeInput } from "./CellSizeInput"
import { FrameDurationInput } from "./FrameDurationInput"
import { ConfigPanelContainer } from "./ConfigPanel.styled"

export const ConfigPanel = () => (
  <ConfigPanelContainer>
    <CellSizeInput />
    <FrameDurationInput />
  </ConfigPanelContainer>
)