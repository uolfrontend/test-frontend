import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  components: {
    Button: {
      baseProps: {
        boxShadow: "base"
      }
    }
  }
})