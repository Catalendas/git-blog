import styled from "styled-components";

export const SearchInputContainer = styled.form`
    margin-top: 4.5rem;

`

export const SearchInputTitle = styled.div`
    display: flex;
    justify-content: space-between;

    strong {
        color: ${({ theme }) => theme.colors["base-text"]};
    }

    span {
        color: ${({ theme }) => theme.colors["base-span"]};
    }
`

export const SearchInputComponent = styled.input`
    height: 3.125rem;
    width: 100%;
    padding: 16px 12px;
    margin-top: 12px;

    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors["base-border"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    background-color: ${({ theme }) => theme.colors["base-input"]};
`