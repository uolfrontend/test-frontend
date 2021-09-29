import * as yup from 'yup';

export const UserValidation = yup.object().shape({
  name: yup.string().required("Preencha o seu nome!"),
  email: yup.string().email().required("Preencha o seu e-mail!"),
  id: yup.string().required("Preencha o seu CPF!"),
  phone: yup.string().required("Preencha o seu celular!"),
  status: yup.string().required("Ajuste o status!") 
})

export const maskCPF = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

export const removeMask = (value) => {
    return value
    .replace(/[^\d]+/g,'')
};

export const maskPhone = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})(\d+?)$/, "$1");
};
