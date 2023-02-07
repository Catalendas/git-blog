import styled from "styled-components";

export const HomeContainer = styled.section`
    background-color: ${({ theme }) => theme.colors["base-background"]};
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`