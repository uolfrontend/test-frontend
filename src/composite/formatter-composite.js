export const FormatterComposite = (formatters) => {
  return {
    format: (field, input) => {
      const formatter = formatters[field]
      return formatter.format(input)
    },
  }
}
