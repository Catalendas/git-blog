import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostComponentContainer = styled(Link)`
    width: 26rem;
    height: 16.25rem;
    border-radius: 10px;
    padding: 2rem;
    background-color: ${({ theme }) => theme.colors["base-post"]};
    border: 2px solid ${({ theme }) => theme.colors["base-post"]};

    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    transition: 0.4s;

    &:hover {
        border-color: ${({ theme }) => theme.colors["base-label"]};
    }

    div {
        display: flex;
        

        strong {
            font-size: 1.25rem;
            line-height: 2rem;
            flex: 1;
            color: ${({ theme }) => theme.colors["base-title"]};
        }

        span {
            font-size: 14px;
            color: ${({ theme }) => theme.colors["base-span"]};
            width: max-content;
        }
    }
`

export const PostComponentText = styled.div`
    p {
        font-size: 1rem;
        line-height: 1.25rem;
        color: ${({ theme }) => theme.colors["base-text"]};

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
    }
`