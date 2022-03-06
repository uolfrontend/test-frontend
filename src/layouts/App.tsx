import { Box, Divider, Heading, HStack, Icon } from "@chakra-ui/react"
import { FiUser } from "react-icons/fi"
import { Container } from "../components/Container"
import { Header } from "../components/Header"

export const AppLayout = ({ children }) => {
  return (
    <Box>
      <Header />
      <Container py="12">
        <Box as="header">
          <HStack>
            <Icon as={FiUser} w={8} h={8} />
            <Heading fontSize="lg">Painel de Clientes</Heading>
          </HStack>
        </Box>

        <Divider my="8" />
        {children}
      </Container>
    </Box>
  )
}