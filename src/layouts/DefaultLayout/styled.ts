import styled from "styled-components";

export const LayoutContainer = styled.div`
    .container {
        max-width: 54rem;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    background-color: ${({ theme }) => theme.colors["base-background"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    
`