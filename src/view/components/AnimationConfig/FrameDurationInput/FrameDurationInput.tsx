import React, { useCallback } from "react"
import { useSelector } from "react-redux"
import { useActions } from "react-redux-actions-hook"

import { actions, selectors } from "store"

import { FrameDurationInputContainer, FrameDurationInputComponent, FrameDurationInputLabel } from "./FrameDurationInput.styled"

export const FrameDurationInput = () => {
    const { frameDuration } = useSelector(selectors.config)
    const { setFrameDuration } = useActions(actions.config)

    const handleSetFrameDuration = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const frameDuration = event.target.value.match(/\d+/)
        if (!frameDuration) {
            return
        }

        setFrameDuration(+frameDuration)
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