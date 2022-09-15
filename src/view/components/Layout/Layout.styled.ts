import styled from "styled-components"

export const Layout = styled.div<{ width: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  > * {
    min-width: ${({ width }) => `${width}px`};
  }
`
