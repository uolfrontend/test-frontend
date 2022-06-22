import { useField } from "@unform/core";
import { useEffect, useRef } from "react";
import { Container } from "./styles";

interface Props {
    name: string;
    label?: string;
}

type InputProps = JSX.IntrinsicElements["input"] & Props;

export default function Input({ name, label, disabled, ...rest }: InputProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const { fieldName, defaultValue, registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef,
            getValue: (ref) => {
                return ref.current.value;
            },
            setValue: (ref, value) => {
                ref.current.value = value;
            },
            clearValue: (ref) => {
                ref.current.value = "";
            },
        });
    }, [fieldName, registerField]);

    return (
        <Container>
            {label && <label htmlFor={fieldName}>{label}</label>}

            <input
                id={fieldName}
                ref={inputRef}
                defaultValue={defaultValue}
                disabled={disabled}
                {...rest}
            />

            {error && <span> * {error}</span>}
        </Container>
    );
}
