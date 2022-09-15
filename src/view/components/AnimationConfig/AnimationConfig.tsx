import React from "react"

import { CellSizeInput } from "./CellSizeInput"
import { FrameDurationInput } from "./FrameDurationInput"
import { AnimationConfigContainer } from "./AnimationConfig.styled"

export const AnimationConfig = () => (
  <AnimationConfigContainer>
    <CellSizeInput />
    <FrameDurationInput />
  </AnimationConfigContainer>
)