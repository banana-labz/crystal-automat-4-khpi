import React from "react"
import { useSelector } from "react-redux"
import { useActions } from "react-redux-actions-hook"

import { actions, selectors } from "store"

import { useFrameLoop } from "view/hooks/useFrameLoop"

import { Canvas } from "./Canvas"
import { AutomatStatus } from "./AutomatStatus"
import { AutomatContainer } from "./Automat.styled"

export const Automat = () => {
    const { iteration, cells } = useSelector(selectors.automat)
    const { frameDuration, cellSize } = useSelector(selectors.config)
    const { growCrystal, reset } = useActions(actions.automat)

    const { pause, switchPause } = useFrameLoop(growCrystal, frameDuration, [iteration])

    return (
        <AutomatContainer>
            <AutomatStatus
                iteration={iteration}
                pause={pause}
                switchPause={switchPause}
                resetAutomat={reset}
            />
            <Canvas
                cells={cells}
                iteration={iteration}
                cellSize={cellSize}
            />
        </AutomatContainer>
    )
}
