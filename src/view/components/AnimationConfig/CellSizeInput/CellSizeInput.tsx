import React from "react"
import { useSelector } from "react-redux"
import { useActions } from "react-redux-actions-hook"

import { actions, selectors } from "store"

import { CellSizeInputContainer, CellSizeIndicator, CellSizeLevers } from "./CellSizeInput.styled"

export const CellSizeInput = () => {
    const { cellSize } = useSelector(selectors.config)
    const { incrementCellSize, decrementCellSize } = useActions(actions.config)

    return (
        <CellSizeInputContainer>
            <CellSizeIndicator>Cell size: {cellSize}px</CellSizeIndicator>
            <CellSizeLevers>
                <button onClick={incrementCellSize}>+</button>
                <button onClick={decrementCellSize}>-</button>
            </CellSizeLevers>
        </CellSizeInputContainer>
    )
}
