import styled from "styled-components";

export const Container = styled.div`
    margin: 1rem;

    select {
        height: 3rem;
        width: 22rem;
        padding-left: 1rem;
        border: 0.15rem solid var(--lighter);
        border-radius: 0.3rem;
        font-size: 1.1rem;
        font-weight: 500;
        background-color: white;

        @media (max-width: 640px) {
            width: 100%;
        }

        option {
            font-size: 1.1rem;
            font-weight: 600;
        }
    }
    span {
        margin-left: 0.5rem;

        color: var(--attention);
    }
`;
