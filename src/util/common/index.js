export const onlyDigits = (input) => {
  return input.replace(/\D/g, '')
}

export const checkNumbers = (input, tamanho) => {
  let regExp = new RegExp(`^(\\d{${tamanho}})$`)
  return input.match(regExp)
}

export const checkEqualsNumber = (input) => {
  let ch = input.charAt(0)
  for (let i = 0; i < input.length; i++) {
    if (ch != input.charAt(i)) return false
  }
  return true
}
