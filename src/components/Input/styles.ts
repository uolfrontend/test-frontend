import styled from "styled-components";

export const Container = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 0.75rem;

    /* border: 0.1rem solid red; */
    label {
    }

    input {
        height: 3rem;
        width: 22rem;
        padding-left: 1rem;
        border: 0.15rem solid var(--lighter);
        border-radius: 0.3rem;
        font-size: 1rem;
        ::placeholder {
            color: var(--primary);
        }

        @media (max-width: 640px) {
            width: 100%;
        }
    }

    span {
        margin-left: 0.5rem;

        color: var(--attention);
    }
`;
