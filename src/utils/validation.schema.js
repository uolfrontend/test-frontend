import * as Yup from 'yup'
import { INPUT_REGEX } from 'constants/regex.constants'

const { id, email, phone } = INPUT_REGEX

export const validationSchema = Yup.object().shape({
  id: Yup.string()
    .matches(id, 'Verifique se o CPF é válido')
    .required('O CPF é obrigatório'),
  name: Yup.string().required('O Nome é obrigatório'),
  email: Yup.string()
    .matches(email, 'Verifique se o e-mail é válido')
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  phone: Yup.string()
    .matches(phone, 'Verifique se o telefone é válido')
    .required('O Telefone é obrigatório'),
  status: Yup.string().required('O Status é obrigatório')
})
