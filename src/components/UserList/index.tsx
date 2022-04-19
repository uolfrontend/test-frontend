import {Button, Circle, Flex, Text} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import {customerStatus} from '../../constants/customerStatus';

type Props = {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
};

export default function UserList({id, name, email, phone, status}: Props) {
  const [{label, color}] = customerStatus.filter(
    (element) => element.status == status
  );

  const router = useRouter();
  return (
    <Flex
      border="1px"
      borderColor="lighter"
      p="20px"
      w="100%"
      justify="center"
      align="center"
    >
      <Flex
        direction={{base: 'column', md: 'row'}}
        gap={{base: '20px', md: '30px', lg: 0}}
        w="100%"
        justify="center"
      >
        <Flex direction="column" w={{base: '100%', md: '25%'}}>
          <Text fontWeight={600}>{name}</Text>
          <Text>{email}</Text>
        </Flex>
        <Flex
          direction="column"
          w={{base: '100%', md: '25%'}}
          align={{base: 'flex-start', md: 'center'}}
        >
          <Text fontWeight={600}>{id}</Text>
          <Text>{phone}</Text>
        </Flex>
        <Flex align="center" w={{base: '100%', md: '25%'}} gap="10px">
          <Circle size="10px" bg={color} />
          <Text>{label}</Text>
        </Flex>
      </Flex>
      <Button
        alignSelf={{base: 'flex-end', md: 'center'}}
        variant="secondary"
        w={{base: '25%'}}
        maxW="200px"
        onClick={() => router.push('/cliente/editar/' + id)}
      >
        Editar
      </Button>
    </Flex>
  );
}
