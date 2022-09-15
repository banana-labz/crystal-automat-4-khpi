import React, { useCallback } from "react"

import {
  FieldSizeInputContainer,
  FieldSizeInputLabel,
  FieldSizeInputComponent,
} from "./FieldSizeInput.styled"

type FieldSizeInputProps = {
  fieldSize: number
  setFieldSize: (fieldSize: number) => void
}

export const FieldSizeInput = ({
  fieldSize,
  setFieldSize,
}: FieldSizeInputProps) => {
  const handleSetFieldSize = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const str = event.target.value.slice(0, 4).match(/\d+/)
    if (!str || !+str) {
      return
    }
    setFieldSize(+str)
  }, [])

  return (
    <FieldSizeInputContainer>
      <FieldSizeInputLabel>
        Field size:
      </FieldSizeInputLabel>
      <FieldSizeInputComponent
        placeholder="200"
        value={fieldSize}
        onChange={handleSetFieldSize}
      />
    </FieldSizeInputContainer>
  )
}