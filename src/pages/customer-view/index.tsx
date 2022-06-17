import React, {useEffect, useState} from 'react';
import {
    ActionContainer,
    Description,
    DescriptionContainer,
    DescriptionSubtitle, FormContainer,
    DescriptionTitle, InputForm, Input, Select,
} from './style';
import Button from '../../components/button';
import { useNavigate, useParams } from "react-router-dom";
import { configDB } from '../../configs/database';
import {MyAlertDialog} from '../../components/alert';

interface Customer {
    id?: string;
    name?: string;
    email?: string;
    phone?: string;
    status?: 'active' | 'inactive' | 'waiting' | 'disabled' | undefined;
}

const CustomerView = () => {

    const normalizePhoneNumber = (value: string) => {
        if (!value || typeof value !== 'string') return ''
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{4})(\d+?)/, '$1')
    }

    const normalizeCpf = (value: string) => {
        if (!value || typeof value !== 'string') return ''
        return value
            .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
            .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
    }

    useEffect(() => {
        if (id != "0") {
            getCustomer(id as string);
        }
    }, [])

    const navigate = useNavigate();
    const params = useParams()
    const id = params?.id

    const [customer, setCustomer] = useState<Customer>({
        name: undefined,
        email: undefined,
        phone: undefined,
        status: undefined,
        id: undefined,
    });

    const [alertOpen, setAlertOpen] = useState<boolean>(false);
    const [description, setDescription] = useState<string>('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (await verification()) {
            if (id != "0") {
                configDB((db: any) =>{
                    let req = db.get(id);
                    req.onsuccess = () => {
                        db.put(customer, id)
                        navigate('/')
                    }
                })
            } else {
                configDB((db: any) =>{
                    db.add(customer, customer.id)
                    navigate('/')
                })
            }
        }
        event.preventDefault();
    }

    const getCustomer = (id: string) => {
        configDB((db: any) =>{
            let req = db.get(id);
            req.onsuccess = () => {
                setCustomer(req.result)
            }
        })
    }

    const verification = async () => {
        if (!customerVerify()) {
            setAlertOpen(true)
            return false
        }

        if(!CPFverify(customer.id as string)){
            setDescription('Número de CPF inválido')
            setAlertOpen(true)
            return false
        }


        if (!numberVerify(customer.phone as string)){
            setDescription('Número de telefone inválido')
            setAlertOpen(true)
            return false
        }

        if (!(id != "0")) {
            const isExisting = await customerExisting(customer.id as string)
            if (isExisting) {
                setDescription('CPF já cadastrado no sistema')
                setAlertOpen(true)
                return false
            }
        }

        return true;
    }

    const CPFverify = (cpf: string) => {
        let numeros, digitos, soma, i, resultado, digitos_iguais;
        digitos_iguais = 1;
        cpf = cpf.replaceAll('.', '').replace('-', '')
        if (cpf.length < 11)
            return false;
        for (i = 0; i < cpf.length - 1; i++)
            if (cpf.charAt(i) != cpf.charAt(i + 1))
            {
                digitos_iguais = 0;
                break;
            }
        if (!digitos_iguais)
        {
            numeros = cpf.substring(0,9);
            digitos = cpf.substring(9);
            soma = 0;
            for (i = 10; i > 1; i--)
                soma += numeros.charAt(10 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0))
                return false;
            numeros = cpf.substring(0,10);
            soma = 0;
            for (i = 11; i > 1; i--)
                soma += numeros.charAt(11 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(1))
                return false;
            return true;
        }
        else
            return false;
    }

    const customerVerify = () => {
        if(!customer.name) {
            setDescription('O nome precisa ser preenchido')
            return false
        }

        if(!customer.email) {
            setDescription('O E-mail precisa ser preenchido')
            return false
        }

        if(!customer.id) {
            setDescription('O CPF precisa ser preenchido')
            return false
        }

        if(!customer.phone) {
            setDescription('O telefone precisa ser preenchido')
            return false
        }

        if(!customer.status) {
            setDescription('O status precisa ser selecionado')
            return false
        }

        return true
    }

    const customerExisting = (cpf: string) => {
        return new Promise((resolve, reject) => {
            configDB( (db: any) => {
                let req = db.get(cpf);
                req.onsuccess = () => {
                    resolve(req.result)
                }
            })
        })
    };

    const numberVerify = (phone: string) => {
        phone = phone.replace(/\D/g, '');

        if (!(phone.length >= 10 && phone.length <= 11)) return false;

        if (phone.length == 11 && parseInt(phone.substring(2, 3)) != 9) return false;

        for (var n = 0; n < 10; n++) {
            if (phone == new Array(11).join(n) || phone == new Array(12).join(n)) return false;
        }

        var codigosDDD = [11, 12, 13, 14, 15, 16, 17, 18, 19,
            21, 22, 24, 27, 28, 31, 32, 33, 34,
            35, 37, 38, 41, 42, 43, 44, 45, 46,
            47, 48, 49, 51, 53, 54, 55, 61, 62,
            64, 63, 65, 66, 67, 68, 69, 71, 73,
            74, 75, 77, 79, 81, 82, 83, 84, 85,
            86, 87, 88, 89, 91, 92, 93, 94, 95,
            96, 97, 98, 99];
        if (codigosDDD.indexOf(parseInt(phone.substring(0, 2))) == -1) return false;

        if (new Date().getFullYear() < 2017) return true;
        if (phone.length == 10 && [2, 3, 4, 5, 7].indexOf(parseInt(phone.substring(2, 3))) == -1) return false;

        return true;
    }

    return (
        <>
            <MyAlertDialog
                openAlert={alertOpen}
                title={'Erro'}
                description={description}
                onOpenChange={() => setAlertOpen(false)}
            />
            <DescriptionContainer>
                <Description>
                    <DescriptionTitle>Novo usuário</DescriptionTitle>
                    <DescriptionSubtitle>Informe os campos a seguir para criar novo usuário</DescriptionSubtitle>
                </Description>
            </DescriptionContainer>
            <FormContainer>
                <InputForm onSubmit={handleSubmit}>
                    <Input onChange={(e) => setCustomer({...customer, name: e.target.value})} placeholder="Nome" value={customer.name} />
                    <Input onChange={(e) => setCustomer({...customer, email: e.target.value})} placeholder="E-mail" value={customer.email} />
                    <Input onChange={(e) => setCustomer({...customer, id: normalizeCpf(e.target.value)})} placeholder="CPF" value={customer.id} />
                    <Input onChange={(e) => setCustomer({...customer, phone: normalizePhoneNumber(e.target.value)})} placeholder="Telefone" value={customer.phone} />
                    <Select onChange={(event) => setCustomer({...customer, status: event.target.value})} value={customer.status} defaultValue="default">
                        <option value="default" disabled selected>Status</option>
                        <option value="active">Ativo</option>
                        <option value="inactive">Inativo</option>
                        <option value="waiting">Aguardando ativação</option>
                        <option value="disabled">Desativado</option>
                    </Select>
                    <ActionContainer>
                        <Button edit={true} color="#e29933" type="submit" placeholder={id != "0" ? 'Salvar' : 'Criar'} />
                        <Button edit={true} type={undefined} clickOn={() => { navigate('/') }} placeholder="Voltar" />
                    </ActionContainer>
                </InputForm>
            </FormContainer>
        </>
    );
};

export default CustomerView;
