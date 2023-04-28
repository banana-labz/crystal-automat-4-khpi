import styled from "styled-components"

export const CanvasStyled = styled.canvas`
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
    
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    outline: 1px solid ${({ theme }) => theme.colors.border};
`