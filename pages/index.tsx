import Link from "next/link";
import InputMask from "react-input-mask";

import {
  Box,
  Collapse,
  Button,
  Flex,
  FormControl,
  Heading,
  HStack,
  Input,
  Select,
  Text,
  useToast,
  VStack,
  Divider,
  toast,
  Grid
} from "@chakra-ui/react";
import { AppLayout } from "../src/layouts/App";
import { FiEdit, FiUserPlus, FiTrash } from "react-icons/fi";
import { Customer } from "../src/models/customer.model";
import { useEffect, useState } from "react";
import { makeFindCustomerUseCase } from "../src/composers/findCustomers.composer";
import { useForm } from "react-hook-form";
import { AddCustomerDTO } from "../src/usecases/dtos/addCustomerDTO.interface";
import { makeDeleteCustomerUseCase } from "../src/composers/deleteCustomer.composer";
import { makeUpdateCustomerUseCase } from "../src/composers/updateCustomer.composer";

export default function Home() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  const toast = useToast()

  useEffect(() => {
    const findCustomerUseCase = makeFindCustomerUseCase();

    findCustomerUseCase.execute().then(async (customers) => {
      setCustomers(customers);
    });
  }, []);

  const handleDeleteCustomer = (id: string) => {
    const deleteCustomerUseCase = makeDeleteCustomerUseCase();
    deleteCustomerUseCase.execute(id);

    const newCustomers = customers.filter((customer) => customer.id !== id);
    setCustomers(newCustomers);
  }

  const handleUpdateCustomer = async (id: string, data: Customer) => {
    try {
      const updateCustomerUseCase = makeUpdateCustomerUseCase();
      await updateCustomerUseCase.execute(id, data);

      const newCustomers = customers.map((customer) => {
        if (customer.id === id) {
          return data;
        }
  
        return customer;
      });
  
      setCustomers(newCustomers);
    } catch (error) {
      toast({
        title: "Erro ao atualizar cliente",
        description: error.message,
        status: "error",
      })
    }
  }

  return (
    <AppLayout>
      <Flex alignItems="center" justifyContent="space-between" mb="8">
        <Flex flexDir="column" alignItems="flex-start">
          <Heading fontSize="md" lineHeight="160%">
            Listagens de Usuários
          </Heading>
          <Text fontSize="md">Escolha um cliente para editar os detalhes</Text>
        </Flex>

        <Link href="/customers/new" passHref>
          <Button leftIcon={<FiUserPlus />} size="lg" colorScheme="orange">
            Novo Cliente
          </Button>
        </Link>
      </Flex>

      <VStack mb="8">
        {customers.map((customer) => (
          <CustomerCard key={customer.id} onSubmit={handleUpdateCustomer} onDelete={handleDeleteCustomer} data={customer} />
        ))}
      </VStack>

      <Text fontSize="md">
        Exibindo {String(customers.length).padStart(2, "0")} clientes
      </Text>
    </AppLayout>
  );
}

type CustomerCardProps = {
  data: Customer;
  onSubmit: (id: string, data: Customer) => void;
  onDelete: (id: string) => void;
};

const CustomerCard = ({ data, onSubmit, onDelete }: CustomerCardProps) => {
  const [show, setShow] = useState(false);

  const { register, handleSubmit } = useForm<AddCustomerDTO>({
    defaultValues: {
      name: data.name,
      email: data.email,
      document: data.document,
      phone: data.phone,
      status: data.status
    }
  });

  const handleToggle = () => setShow(!show);

  const handleSubmitForm = (formData: Customer) => {
    onSubmit(data.id, formData);
    handleToggle();
  };

  return (
    <Box
      w="100%"
      p="6"
      border="1px solid #f1f1f1"
      borderRadius="base"
      transition="all .2s"
      cursor="pointer"
      _hover={{
        boxShadow: "base",
      }}
    >
      <Box d="flex" alignItems="center" justifyContent="space-between">
        <Flex flexDir="column" alignItems="flex-start" w="52">
          <Heading fontSize="md" lineHeight="160%">
            {data.name}
          </Heading>
          <Text fontSize="md">{data.email}</Text>
        </Flex>

        <Flex flexDir="column" alignItems="flex-start" d={{ base: "none", md: "flex"}}>
          <Heading fontSize="md" lineHeight="160%">
            {data.document}
          </Heading>
          <Text fontSize="md">{data.phone}</Text>
        </Flex>

        {
          {
            ACTIVE: (
              <Flex alignItems="center" w="60" d={{ base: "none", md: "flex"}}>
                <Box h="4" w="4" borderRadius="full" bg="green.400" mr="2" />
                <Text fontSize="md">Ativo</Text>
              </Flex>
            ),
            INACTIVE: (
              <Flex alignItems="center" w="60" d={{ base: "none", md: "flex"}}>
                <Box h="4" w="4" borderRadius="full" bg="red.400" mr="2" />
                <Text fontSize="md">Inativo</Text>
              </Flex>
            ),
            WAITING_FOR_ACTIVATION: (
              <Flex alignItems="center" w="60" d={{ base: "none", md: "flex"}}>
                <Box h="4" w="4" borderRadius="full" bg="yellow.400" mr="2" />
                <Text fontSize="md">Aguardando Ativaçäo</Text>
              </Flex>
            ),
            DISABLED: (
              <Flex alignItems="center" w="60" d={{ base: "none", md: "flex"}}>
                <Box h="4" w="4" borderRadius="full" bg="gray.400" mr="2" />
                <Text fontSize="md">Desabilitado</Text>
              </Flex>
            ),
          }[data.status]
        }

        <Button
          onClick={handleToggle}
          leftIcon={<FiEdit />}
          variant="link"
          colorScheme="orange"
          border='1px' 
          borderColor='orange'
          _hover={{ bg: 'orange', color: "#fff" }}
          p="2.5"
        >
          Editar
        </Button>
      </Box>
      <Collapse startingHeight={0} in={show}>
        <Divider my="8" />

        <Box as="form" onSubmit={handleSubmit(handleSubmitForm)}>
          <Grid gridTemplateColumns={{ base: '1fr', md: 'repeat(5, 1fr)'}} gridGap="4" mb="8">
            <FormControl>
              <Input placeholder="Nome" {...register("name")} />
            </FormControl>
            <FormControl>
              <Input placeholder="E-mail" {...register("email")} />
            </FormControl>
            <FormControl>
              <Input
                placeholder="CPF"
                as={InputMask}
                mask="999.999.999-99"
                maskChar={null}
                {...register("document")}
              />
            </FormControl>
            <FormControl>
              <Input
                type="tel"
                placeholder="Telefone"
                as={InputMask}
                mask="(99)99999-9999"
                maskChar={null}
                {...register("phone")}
              />
            </FormControl>
            <FormControl>
              <Select id="status" placeholder="Status" {...register("status")}>
                <option value="ACTIVE">Ativo</option>
                <option value="INACTIVE">Inativo</option>
                <option value="WAITING_FOR_ACTIVATION">
                  Aguardando ativação
                </option>
                <option value="DISABLED">Desativado</option>
              </Select>
            </FormControl>
          </Grid>

          <Flex justifyContent="flex-end">
            <HStack spacing="5">
              <Button
                type="button"
                colorScheme="red"
                variant="link"
                leftIcon={<FiTrash />}
                onClick={() => onDelete(data.id)}
              >
                Deletar
              </Button>
              <Button type="submit" colorScheme="orange" leftIcon={<FiEdit />}>
                Atualizar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Collapse>
    </Box>
  );
};
