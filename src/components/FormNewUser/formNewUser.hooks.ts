import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import * as yup from "yup";
import 'aos/dist/aos.css';
import Aos from 'aos'
import { Customers } from "../../models/customers.model";
import { customersDB } from "../../data/customers";
import { FieldError, useForm, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";


export interface FormNewUserExit{
    register: UseFormRegister<Customers>;
    onSubmit: (data: Customers) => void;
    errors: {
        id?: FieldError | undefined;
        name?: FieldError | undefined;
        email?: FieldError | undefined;
        phone?: FieldError | undefined;
        status?: FieldError | undefined;
    };
    handleSubmit: UseFormHandleSubmit<Customers>;
}

export const useFormNewUser = (): FormNewUserExit => {
    
    const router = useRouter();
    const schema = yup.object({
        name: yup.string().required('Digite seu Nome'),
        email: yup.string().required('Digite seu E-mail'),
        id: yup.string().length(14, 'Digite um CPF').required(),
        phone: yup.string().length(14,'Digite Telefone').required(),
        status: yup.string().required('Selecione um Status')
    }).required();

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    const { register, handleSubmit, formState: { errors } } = useForm<Customers>({
        resolver: yupResolver(schema)
    });
    const onSubmit = useCallback((data: Customers) => {
        customersDB.push(data)
        localStorage.setItem("customersDB", JSON.stringify(customersDB));
        router.push("/");
        console.log(customersDB)
    }, []);

    return{
        errors,
        onSubmit,
        register, 
        handleSubmit}

}