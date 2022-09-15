import React, { useCallback } from "react"

import {
  GrowthRuleInputContainer,
  GrowthRuleInputLabel,
  GrowthRuleInputComponent,
} from "./GrowthRuleInput.styled"

type GrowthRuleInputProps = {
  growthRule: number
  setGrowthRule: (growthRule: number) => void
}

export const GrowthRuleInput = ({
  growthRule,
  setGrowthRule,
}: GrowthRuleInputProps) => {
  const handleSetGrowthOptions = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const str = event.target.value.slice(0, 4).match(/\d+/)
    if (!str) {
      return
    }

    let limitedString = +str
    if (limitedString < 0) {
      limitedString = 0
    }
    if (limitedString >= 1024) {
      limitedString = 1023
    }
    setGrowthRule(+limitedString)
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