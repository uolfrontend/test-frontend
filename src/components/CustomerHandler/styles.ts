import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    margin: 1rem;
    display: flex;

    @media (max-width: 1080px) {
        flex-direction: row;
    }

    @media (max-width: 640px) {
        flex-direction: column;
    }
`;

export const LeftContent = styled.div`
    display: flex;
    flex: 1;

    flex-direction: column;

    h2 {
        font-weight: 600;
    }

    h3 {
        margin-top: 1rem;
        font-weight: 400;
    }
`;

export const RightContent = styled.div`
    display: flex;
    flex: 1;

    align-items: center;
    justify-content: flex-end;
    button {
        height: 2.5rem;
        width: 10rem;
        border-radius: 0.3rem;
        border-width: 0;
        border-color: var(--secondary);
        background-color: var(--secondary);
        color: white;
        font-size: 1.1rem;
        font-weight: 600;

        @media (max-width: 640px) {
            flex: 1;
            margin-top: 1.5rem;
            height: 3.5rem;
            font-size: 1.5rem;
        }
    }

    button:hover {
        filter: brightness(0.8);
    }
`;

export const Redirect = styled(Link)``;
