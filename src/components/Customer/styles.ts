import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 2rem 1rem;
    border: 0.1rem solid var(--primary);
    padding: 1.5rem;
`;

const commonStyle = css`
    display: flex;
    flex: 1;
    flex-direction: column;
    /* align-items: center; */

    p {
        margin-top: 0.5rem;
    }
`;

export const LeftContent = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    @media (max-width: 640px) {
        flex-direction: column;
    }
`;

export const RightContent = styled.div``;

export const NameEmailContent = styled.div`
    ${commonStyle};
    margin-left: 2rem;
    @media (max-width: 640px) {
        margin-left: 0;
    }
`;

export const CpfNumberContent = styled.div`
    ${commonStyle};

    @media (max-width: 640px) {
        margin-top: 1rem;
    }
`;
const signalSize = 0.6;
export const StatusContent = styled.div`
    ${commonStyle};
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    @media (max-width: 640px) {
        align-items: flex-start;
        justify-content: flex-start;
        margin-top: 0.5rem;
    }
    div {
        height: ${signalSize}rem;
        width: ${signalSize}rem;

        border-radius: ${signalSize}rem;
        margin: 1rem 1rem 0.3rem 1rem;
        @media (max-width: 640px) {
            margin: 1rem 1rem 0.3rem 0;
        }

        background-color: green;
    }

    .inactive {
        background-color: red;
    }

    .waiting {
        background-color: #d3a710;
    }

    .disabled {
        background-color: var(--primary);
    }
`;

export const ButtonContent = styled.div`
    display: flex;

    align-items: center;

    @media (max-width: 640px) {
        align-items: flex-end;
    }

    justify-content: center;
    button {
        background: #fff;
        border: 0.12rem solid var(--secondary);
        border-radius: 0.4rem;
        height: 2.5rem;
        width: 12rem;
        color: var(--secondary);
        font-weight: 700;
        font-size: 1rem;
    }

    button:hover {
        filter: brightness(0.9);
    }
`;
