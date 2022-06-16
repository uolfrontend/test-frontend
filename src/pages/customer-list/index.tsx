import React, { useState } from 'react';
import { DescriptionContainer, Description, ActionContainer, DescriptionTitle, DescriptionSubtitle } from './style';
import Button from '../../components/button';
import CustomerList from '../../components/customer-list';
import { useNavigate } from "react-router-dom";

function CustomersList() {
    const navigate = useNavigate();

    return (
        <>
            <DescriptionContainer>
                <Description>
                    <DescriptionTitle>Listagem de usuários</DescriptionTitle>
                    <DescriptionSubtitle>Escolha um cliente para visualizar os detalhes</DescriptionSubtitle>
                </Description>
                <ActionContainer>
                    <Button type={undefined} clickOn={() => { navigate('/customer-view/0')}} placeholder="Novo cliente" />
                </ActionContainer>
            </DescriptionContainer>
            <CustomerList />
        </>
    );
}

export default CustomersList;
