import React, { Dispatch, SetStateAction, useState } from "react";
import { Container } from "./styles";

interface SelectProps {
    options: { status: string; label: string; color?: string }[];
    setUserStatus: Dispatch<SetStateAction<string>>;
}

const CustomSelect: React.FC<SelectProps> = ({ options, setUserStatus }) => {
    const [error, setError] = useState(true);

    return (
        <Container>
            <select
                id="st"
                onChange={(e) => {
                    setUserStatus(e.target.value);
                    if (e.target.value === "select") {
                        setError(true);
                    } else {
                        setError(false);
                    }
                }}
            >
                {options.map(({ status, label }) => (
                    <option key={status} value={status}>
                        {label}
                    </option>
                ))}
            </select>

            {error && <span> * Selecione um status para prosseguir</span>}
        </Container>
    );
};

export { CustomSelect };
