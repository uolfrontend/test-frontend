import { onlyDigits, checkEqualsNumber, checkNumbers } from '../common'

export const cpfValidator = () => {
  const errorMensage = 'CPF Inválido'
  return {
    validate: (input) => {
      input = onlyDigits(input)

      if (!checkNumbers(input, 11)) return errorMensage
      if (checkEqualsNumber(input)) return errorMensage

      let soma1 = 0
      let soma2 = 0
      let j = input.length

      for (let i = 0; i < 10; i++, j--) {
        if (j > 2) soma1 += Number(input.charAt(i)) * (j - 1)
        soma2 += Number(input.charAt(i)) * j
      }

      let verificador1 = 11 - (soma1 % 11)
      let verificador2 = 11 - (soma2 % 11)

      let isOk1 =
        ((verificador1 === 10 || verificador1 === 11) &&
          Number(input.charAt(9)) === 0) ||
        Number(input.charAt(9)) === verificador1

      let isOk2 =
        ((verificador2 === 10 || verificador2 === 11) &&
          Number(input.charAt(10)) === 0) ||
        Number(input.charAt(10)) === verificador2

      return isOk1 && isOk2 ? null : errorMensage
    },
  }
}

export const emailValidator = () => {
  const errorMensage = 'Email Inválido'
  return {
    validate: (input) => {
      const emailRegex =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      return emailRegex.test(input) ? null : errorMensage
    },
  }
}

export const phoneValidator = () => {
  const errorMensage = 'Telefone Inválido'
  return {
    validate: (input) => {
      const phoneRegex = /^(\(\d{2}\)) \D*(\d{5}|\d{4})(\-)\D*(\d{4})$/
      return phoneRegex.test(input) ? null : errorMensage
    },
  }
}
