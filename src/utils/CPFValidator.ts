import { cpf as CPF } from "cpf-cnpj-validator";

export const validateCPF = (cpf: string): boolean => {
    if (!cpf) return false;

    const CPFValidationResponse = CPF.isValid(cpf);

    return CPFValidationResponse;
};
