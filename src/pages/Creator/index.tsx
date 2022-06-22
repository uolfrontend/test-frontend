import { FormHandles } from "@unform/core";
import * as EmailValidator from "email-validator";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { CustomerHandler } from "../../components/CustomerHandler";
import { CustomSelect } from "../../components/CustomSelect";
import Input from "../../components/Input";
import { customerStatus } from "../../constants/customerStatus";
import { ICustomerDTO } from "../../dtos/ICustomerDTO";
import { useCustomers } from "../../hooks/useCustomers";
import { useToast } from "../../hooks/useToast";
import { validateCPF } from "../../utils/CPFValidator";
import maskCPF from "../../utils/maskCPF";
import maskPhone from "../../utils/maskPhone";
import { nameValidate } from "../../utils/nameValidate";
import { BtnContent, Container, FormContainer, Redirect } from "./styles";

const Creator: React.FC = () => {
    const label = "Criar";
    const title = "Novo usuário";
    const subtitle = "Informe os campos a seguir para criar novo usuário:";

    let navigate = useNavigate();

    const [isTooShortName, setIsTooShortName] = useState(true);
    const [selectStatus, setSelectStatus] = useState("select");
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isUncompletedPhone, setIsUncompletedPhone] = useState(true);
    const [isCpfValid, setIsCpfValid] = useState(false);
    const [lockSubmit, setLockSubmit] = useState(true);

    const { createCustomer } = useCustomers();
    const { toastConfig } = useToast();

    let { id } = useParams();

    const formRef = useRef<FormHandles>(null);

    const handleGetExistingUser = useCallback(async (id: string) => {}, []);

    const handleSubmitForm = (data: ICustomerDTO) => {
        const obj: ICustomerDTO = {
            ...data,
            status: selectStatus,
        };

        createCustomer(obj);
    };

    useEffect(() => {
        if (
            toastConfig.message === "Cliente adicionado com sucesso!" &&
            !!toastConfig.trigger
        ) {
            navigate("/", { replace: true });
        }
    }, [navigate, toastConfig.message, toastConfig.trigger]);

    /** Block Submit when to avoid troubles */
    useEffect(() => {
        if (
            selectStatus === "select" ||
            !isValidEmail ||
            isTooShortName ||
            isUncompletedPhone ||
            !isCpfValid
        ) {
            setLockSubmit(true);
        } else {
            setLockSubmit(false);
        }
    }, [
        isCpfValid,
        isTooShortName,
        isUncompletedPhone,
        isValidEmail,
        selectStatus,
    ]);

    // if we have id(cpf) that came throw navigation we lock it. It's usefull to help us to avoid problems
    useEffect(() => {
        if (!!id) {
            formRef.current?.setFieldValue("id", id);
            handleGetExistingUser(id);
        }
    }, [handleGetExistingUser, id]);

    return (
        <Container>
            <CustomerHandler title={title} subtitle={subtitle} />

            <FormContainer onSubmit={handleSubmitForm} ref={formRef}>
                <Input
                    name="name"
                    maxLength={45}
                    placeholder="Nome"
                    onChange={(e) => {
                        const isValidName = nameValidate(e.target.value);

                        if (e.target.value.length < 3 || !isValidName) {
                            setIsTooShortName(true);
                            formRef.current?.setFieldError(
                                "name",
                                "O nome completo é requerido"
                            );
                        } else {
                            setIsTooShortName(false);
                            formRef.current?.setFieldError("name", "");
                        }
                    }}
                />
                <Input
                    name="email"
                    maxLength={35}
                    placeholder="Email"
                    onChange={(e) => {
                        if (EmailValidator.validate(e.target.value)) {
                            setIsValidEmail(true);
                            formRef.current?.setFieldError("email", "");
                        } else {
                            setIsValidEmail(false);
                            formRef.current?.setFieldError(
                                "email",
                                "Email é requerido"
                            );
                        }
                    }}
                />
                <Input
                    name="id"
                    maxLength={14}
                    placeholder="CPF"
                    // disabled={!!id}
                    onChange={(e) => {
                        formRef.current?.setFieldValue(
                            "id",
                            maskCPF(e.target.value)
                        );
                        const isValidCpf = validateCPF(e.target.value);
                        if (isValidCpf) {
                            formRef.current?.setFieldError("id", "");
                        } else {
                            formRef.current?.setFieldError(
                                "id",
                                "CPF é requerido"
                            );
                        }
                        setIsCpfValid(isValidCpf);
                    }}
                />
                <Input
                    name="phone"
                    maxLength={15}
                    placeholder="Telefone"
                    onChange={(e) => {
                        formRef.current?.setFieldValue(
                            "phone",
                            maskPhone(e.target.value)
                        );

                        if (e.target.value.length !== 15) {
                            setIsUncompletedPhone(true);
                            formRef.current?.setFieldError(
                                "phone",
                                "Telefone é requerido"
                            );
                        } else {
                            setIsUncompletedPhone(false);
                            formRef.current?.setFieldError("phone", "");
                        }
                    }}
                />

                <CustomSelect
                    options={customerStatus}
                    setUserStatus={setSelectStatus}
                />

                <BtnContent>
                    <Button label={label} type="submit" disabled={lockSubmit} />

                    <Redirect to="/">
                        <Button label="Voltar" isOutline />
                    </Redirect>
                </BtnContent>
            </FormContainer>
        </Container>
    );
};

export { Creator };
