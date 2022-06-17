import React from 'react';
import { ICustomer } from '../../interfaces/ICustomer';
import { CustomerContainer, FirstInfos, SecondInfos, StatusContainer, ActionContainer, Name, Email, Id, Phone, Status, AlertBall } from './style';
import Button from '../button';
import { useNavigate } from "react-router-dom";

interface Props {
    customer: ICustomer;
}

const Customer = (props: Props) => {
    const navigate = useNavigate();
    const { name, email, id, phone, status } = props.customer;

    const infoStatus = {
        active: {color: '#4aad5b', text: 'Ativo'},
        inactive: {color: '#d73240', text: 'Inativo'},
        waiting: {color: '#d3a710', text: 'Aguardando Ativação'},
        disabled: {color: '#d2d2d2', text: 'Desativado'}
    }

    return (
        <CustomerContainer data-testid="customer">
            <FirstInfos>
                <Name>{name}</Name>
                <Email>{email}</Email>
            </FirstInfos>
            <SecondInfos>
                <Id>{id}</Id>
                <Phone>{phone}</Phone>
            </SecondInfos>
            <StatusContainer>
                <AlertBall style={{
                    backgroundColor: infoStatus[status].color
                }} />
                <Status>{infoStatus[status].text}</Status>
            </StatusContainer>
            <ActionContainer>
                <Button edit={true} clickOn={() => {navigate(`/customer-view/${id}`)}} type={undefined} placeholder="Editar" />
            </ActionContainer>
        </CustomerContainer>
    );
};

export default Customer;
