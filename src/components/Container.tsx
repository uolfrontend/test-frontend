import { Box, BoxProps } from "@chakra-ui/react"

export const Container = ({ children, ...rest }: BoxProps) => {
  return (
    <Box w={{ base: "90%", md: "1280px"}} m="0 auto" {...rest}>
      {children}
    </Box>
  )
}