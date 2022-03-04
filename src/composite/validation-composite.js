export const ValidationComposite = (validations) => {
  return {
    validate: (field, input) => {
      const validation = validations[field]
      return validation.validate(input)
    },
  }
}
