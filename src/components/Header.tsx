import NextImage from 'next/image';

import { Box } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Box 
      d="flex"
      alignItems="center"
      justifyContent="center"
      as="header" 
      bg="#333333" 
      h="20"
    >
      <NextImage src="/logo-uol.png" width="150" height="24" objectFit='contain' />
    </Box>
  )
}