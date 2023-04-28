import React, { useCallback, useState } from "react"
import { useActions } from "react-redux-actions-hook"

import { actions } from "store"

import { AutomatConfigContainer, AutomatConfigButton } from "./AutomatConfig.styled"
import { GrowthRuleInput } from "./GrowthRuleInput"
import { FieldSizeInput } from "./FieldSizeInput"

export const AutomatConfig = () => {
    const [growthRule, setGrowthRule] = useState<number>(286)
    const [fieldSize, setFieldSize] = useState<number>(200)

    const connectedActions = useActions(actions.automat)

    const handleSaveAndStart = useCallback(() => {
        connectedActions.setFieldSize(fieldSize)
        connectedActions.setGrowthOptions(growthRule)
        connectedActions.reset()
    }, [])

    return (
        <AutomatConfigContainer>
            <GrowthRuleInput
                growthRule={growthRule}
                setGrowthRule={setGrowthRule}
            />
            <FieldSizeInput
                fieldSize={fieldSize}
                setFieldSize={setFieldSize}
            />
            <AutomatConfigButton onClick={handleSaveAndStart}>
                Save and restart
            </AutomatConfigButton>
        </AutomatConfigContainer>
    )
}
