import styled from "styled-components"

export const AutomatStatusPanelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px;
  
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  outline: 1px solid ${({ theme }) => theme.colors.border};
`

export const IterationIndicator = styled.p`
`

export const AutomatStatusButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  
  > *{
    width: 64px;
    height: 24px;
  }
`