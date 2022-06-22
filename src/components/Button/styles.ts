import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    @media (max-width: 640px) {
        width: 100%;

        flex: 1;
    }
`;

export const Btn = styled.button`
    margin: 1rem;
    height: 3rem;
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
`;

export const BtnOutline = styled.button`
    margin: 1rem;
    height: 3rem;
    width: 10rem;
    border-radius: 0.3rem;

    background-color: white;
    color: var(--secondary);
    border: 1px solid var(--secondary);

    font-size: 1.1rem;
    font-weight: 600;

    @media (max-width: 640px) {
        flex: 1;
        margin-top: 1.5rem;
        height: 3.5rem;
        font-size: 1.5rem;
    }
`;
