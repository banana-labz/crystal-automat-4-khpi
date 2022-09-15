import React, { useCallback } from "react"
import { useActions } from "react-redux-actions-hook"

import { useConfigState } from "logic/redux/hooks"
import * as actions from "logic/redux/slices/configStateSlice"

import {
  FrameDurationInputContainer,
  FrameDurationInputComponent,
  FrameDurationInputLabel,
} from "./FrameDurationInput.styled"

export const FrameDurationInput = () => {
  const { frameDuration } = useConfigState()
  const { setFrameDuration } = useActions(actions)

  const handleSetFrameDuration = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFrameDuration(event.target.value);
  }, [])

  return (
    <FrameDurationInputContainer>
      <FrameDurationInputLabel>
        Frame duration:
      </FrameDurationInputLabel>
      <FrameDurationInputComponent
        placeholder="frame duration"
        value={frameDuration || ""}
        onChange={handleSetFrameDuration}
      />
    </FrameDurationInputContainer>
  )
}