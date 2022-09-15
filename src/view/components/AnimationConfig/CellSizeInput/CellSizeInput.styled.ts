import styled from "styled-components"

export const CellSizeInputContainer = styled.div`
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

export const CellSizeIndicator = styled.p`
`

export const CellSizeLevers = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;

  > * {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
