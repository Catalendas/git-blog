import styled from "styled-components";

export const ProfileContainer = styled.div`
    background-color: ${({ theme }) => theme.colors["base-profile"]};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    width: 100%;
    height: 13.25rem;
    margin-top: -88px;
    padding: 40px 38px;

    display: flex;
    align-items: center;
    gap: 2rem;

    img {
        object-fit: cover;
        width: 9.25rem;
        height: 9.25rem;
        border-radius: 8px;
    }
`

export const ProfileContent = styled.div`

    ul {

        display: flex;
        gap: 1.5rem;

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

export const ProfileTitle = styled.div`
    display: flex;
    align-items: center;  
    justify-content: space-between;

    color: ${({ theme }) => theme.colors["base-title"]};
    margin-bottom: 8px;

    a {
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${({ theme }) => theme.colors["blue"]};
        font-size: 12px;
    }
`

export const ProfileAbout = styled.div`
    color: ${({ theme }) => theme.colors["base-text"]};
`