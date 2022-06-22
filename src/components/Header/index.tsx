import React from "react";

import Logo from "../../assets/images/logo.png";

import { Container } from "./styles";

const Header: React.FC = () => {
    return (
        <Container>
            <img src={Logo} alt="UOL - Universo Online" />
        </Container>
    );
};

export { Header };
