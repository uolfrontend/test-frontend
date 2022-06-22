import React from "react";
import { Btn, BtnOutline, Container } from "./styles";

interface Props {
    isOutline?: boolean;
    label: string;
}

type ButtonProps = JSX.IntrinsicElements["button"] & Props;

const Button: React.FC<ButtonProps> = ({
    isOutline = false,
    label,
    type,
    disabled,
}) => {
    return (
        <Container>
            {isOutline ? (
                <BtnOutline type={type}>{label}</BtnOutline>
            ) : (
                <Btn type={type} disabled={disabled}>
                    {label}
                </Btn>
            )}
        </Container>
    );
};

export { Button };
