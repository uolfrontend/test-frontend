import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 7rem 0 1rem 0;
    margin: 0 1rem;

    border-bottom-width: 0.1rem;
    border-bottom-style: solid;
    border-color: var(--primary);

    @media (max-width: 640px) {
        padding: 3rem 0 2rem 0;
    }
    @media (min-width: 1080px) {
        margin: 1rem 13rem;
    }
    h1 {
        margin-left: 1rem;
        font-weight: 500;
    }
`;
