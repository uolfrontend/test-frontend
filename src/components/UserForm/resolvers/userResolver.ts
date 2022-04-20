import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {customerStatus} from 'src/constants/customerStatus';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Esse campo é obrigatório.'),
  email: Yup.string()
    .email('Verifique se este é um e-mail válido')
    .required('Esse campo é obrigatório'),
  id: Yup.string()
    .required('Esse campo é obrigatório')
    .matches(
      /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/,
      'Verifique se é um CPF válido'
    ),
  phone: Yup.string()
    .required('Esse campo é obrigatório')
    .matches(
      /^\(?[1-9]{2}\)? 9[0-9]{4}\-?[0-9]{4}$/,
      'Verifique se é um número válido'
    ),
  status: Yup.string()
    .oneOf(customerStatus.slice(1).map(({status}) => status))
    .required(),
});

export const userResolver = yupResolver(validationSchema);
