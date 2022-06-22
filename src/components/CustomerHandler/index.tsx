import React from "react";
import { Container, LeftContent, Redirect, RightContent } from "./styles";

interface CustomerHandlerProps {
    title: string;
    subtitle: string;
    isCreate?: boolean;
}

const CustomerHandler: React.FC<CustomerHandlerProps> = ({
    title,
    subtitle,
    isCreate = false,
}) => {
    return (
        <Container>
            <LeftContent>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
            </LeftContent>

            <RightContent>
                {isCreate && (
                    <Redirect to={"create"}>
                        <button>Novo cliente</button>
                    </Redirect>
                )}
            </RightContent>
        </Container>
    );
};
export { CustomerHandler };
