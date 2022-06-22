import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { ICustomerDTO } from "../../dtos/ICustomerDTO";

import {
    ButtonContent,
    Container,
    CpfNumberContent,
    LeftContent,
    NameEmailContent,
    StatusContent,
} from "./styles";

const Customer: React.FC<ICustomerDTO> = ({
    name,
    email,
    id,
    phone,
    status,
}) => {
    const getLabelByStatus = useCallback((status: string): string => {
        switch (status) {
            case "active":
                return "Ativo";
            case "inactive":
                return "Inativo";
            case "waiting":
                return "Aguardando ativação";
            case "disabled":
            default:
                return "Desativado";
        }
    }, []);

    return (
        <Container>
            <LeftContent>
                <NameEmailContent>
                    <h4>{name}</h4>
                    <p>{email}</p>
                </NameEmailContent>
                <CpfNumberContent>
                    <h4>{id}</h4>
                    <p>{phone}</p>
                </CpfNumberContent>
                <StatusContent>
                    <div className={status}></div>
                    <p>{getLabelByStatus(status)}</p>
                </StatusContent>
            </LeftContent>
            <ButtonContent>
                <Link to={`edit/${id}`}>
                    <button>Editar</button>
                </Link>
            </ButtonContent>
        </Container>
    );
};

export { Customer };
