import styled from "styled-components"

export const AutomatConfigContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
    padding: 8px;

    border: 1px solid ${({ theme }) => theme.colors.border};;
    border-radius: 4px;
`

export const AutomatConfigButton = styled.button`
    width: 128px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
`