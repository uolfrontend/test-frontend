import { onlyDigits } from '../common'

export const cpfMask = () => {
  return {
    format: (input) => {
      input = onlyDigits(input)

      let result = input
      const size = input.length

      if (size > 9)
        result = input.replace(
          /^([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{0,2}).*/,
          '$1.$2.$3-$4'
        )
      else if (size > 6)
        result = input.replace(/^([0-9]{3})([0-9]{3})([0-9]{0,3})/, '$1.$2.$3')
      else if (size > 3)
        result = input.replace(/^([0-9]{3})([0-9]{0,3})/, '$1.$2')

      return result
    },
  }
}

export const phoneMask = () => {
  return {
    format: (input) => {
      input = onlyDigits(input)

      let size = input.length

      if (size > 10) {
        input = input.replace(
          /^([0-9]{2})([0-9]{5})([0-9]{0,4}).*/,
          '($1) $2-$3'
        )
      }
      if (size > 6) {
        input = input.replace(
          /^([0-9]{2})([0-9]{4})([0-9]{0,4}).*/,
          '($1) $2-$3'
        )
      } else if (size > 2) {
        input = input.replace(/^([0-9]{2})([0-9]{0,5}).*/, '($1) $2')
      }
      return input
    },
  }
}
