import styled from "styled-components"

export const FrameDurationInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
    min-width: 256px;
    width: 50%;
    padding: 8px;

    border: 1px solid ${({ theme }) => theme.colors.border};;
    border-radius: 4px;
`

export const FrameDurationInputLabel = styled.label`
`

export const FrameDurationInputComponent = styled.input`
    width: 64px;
    height: 24px;
`