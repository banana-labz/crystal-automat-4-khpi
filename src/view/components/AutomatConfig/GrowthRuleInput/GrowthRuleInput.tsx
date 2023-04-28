import React, { useCallback } from "react"

import { GrowthRuleInputContainer, GrowthRuleInputLabel, GrowthRuleInputComponent } from "./GrowthRuleInput.styled"

type GrowthRuleInputProps = {
    growthRule: number
    setGrowthRule: (growthRule: number) => void
}

function clamp(value: number, min: number, max: number) {
    if (value < min) {
        return min
    }

    if (value > max) {
        return max
    }

    return value
}

export const GrowthRuleInput = ({ growthRule, setGrowthRule }: GrowthRuleInputProps) => {
    const handleSetGrowthOptions = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const seed = event.target.value.slice(0, 4).match(/\d+/)
        if (!seed) {
            return
        }

        setGrowthRule(clamp(+seed, 0, 1023))
    }, [])

    return (
        <GrowthRuleInputContainer>
            <GrowthRuleInputLabel>
                Growth rule:
            </GrowthRuleInputLabel>
            <GrowthRuleInputComponent
                placeholder="666"
                title="A number in [0; 1024) range"
                value={growthRule}
                onChange={handleSetGrowthOptions}
            />
        </GrowthRuleInputContainer>
    )
}