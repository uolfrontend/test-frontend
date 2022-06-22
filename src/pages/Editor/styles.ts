import { Form } from "@unform/web";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    @media (min-width: 1080px) {
        padding: 0 12rem;
    }
`;

export const FormContainer = styled(Form)``;

export const BtnContent = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    @media (max-width: 640px) {
        flex-direction: column;
    }
`;


export const Redirect = styled(Link)`
    text-decoration: none;
`;