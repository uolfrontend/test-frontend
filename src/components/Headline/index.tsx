import React from "react";
import { FiUser } from "react-icons/fi";

import { Container } from "./styles";

const Headline: React.FC = () => {
    return (
        <Container>
            <FiUser size="2rem" />
            <h1>Painel de Clientes</h1>
           
        </Container>
    );
};

export { Headline };
