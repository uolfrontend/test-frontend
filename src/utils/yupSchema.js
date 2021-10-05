import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("* Campo obrigatório"),
  email: yup.string().email("* Insira um email válido").required("* Campo obrigatório"),
  id: yup.string().required("* Campo obrigatório").matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "* Insira um CPF válido com pontos e traço."),
  phone: yup.string().required("* Campo obrigatório").matches(/(\(\d{2}\)\s)(\d{4,5}\-\d{4})/g, "* Insira um telefone válido de 8 ou 9 digitos, divido por traço e com DDD entre parêntesis separado por um espaço."),
  status: yup.string().required("* Campo obrigatório"),
}).required();