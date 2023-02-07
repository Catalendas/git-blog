import styled from "styled-components";

export const PostHeaderContainer = styled.section`
    width: 100%;
    min-height: 10.5rem;
    margin-top: -5.5rem;
    background: ${({ theme }) => theme.colors["base-profile"]};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 2rem;
    display: flex;
    flex-direction: column;

    header {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    h1 {
        margin-top: 1.25rem;
        color: ${({ theme }) => theme.colors["base-title"]};
        font-size: 1.5rem;
        line-height: 130%;
    }

    ul {
        margin-top: .5rem;
        display: flex;
        gap: 1.5rem;
        list-style: none;

        li {
            display: flex;
            align-items: center;
            gap: .5rem;
            margin-top: 1.5rem;

            color: ${({ theme }) => theme.colors["base-span"]};

            svg {
                color: ${({ theme }) => theme.colors["base-label"]};
            }
        }
    }
`