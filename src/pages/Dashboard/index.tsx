import React from "react";
import { Customer } from "../../components/Customer";
import { CustomerHandler } from "../../components/CustomerHandler";
import { useCustomers } from "../../hooks/useCustomers";

import { Content } from "./styles";

const Dashboard: React.FC = () => {
    const { customers } = useCustomers();

    return (
        <>
            <Content>
                <CustomerHandler
                    title="Listagem de usuários"
                    subtitle="Escolha um cliente para visualizar os detalhes"
                    isCreate
                />
                {!!customers &&
                    customers.length > 0 &&
                    customers.map((customer) => (
                        <Customer
                            key={customer.id}
                            email={customer.email}
                            id={customer.id}
                            name={customer.name}
                            phone={customer.phone}
                            status={customer.status}
                        />
                    ))}
            </Content>
        </>
    );
};

export { Dashboard };
