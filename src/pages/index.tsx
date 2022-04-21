import {Flex, Text} from '@chakra-ui/react';
import Headline from '@components/Headline';
import PageTags from '@components/PageTags';
import UserList from '@components/UserList';
import {getAllClients} from '@services/getAllClients';
import {getLocalValue, setLocalValue} from '@utils/localStorageManager';
import {useEffect, useState} from 'react';
import Container from '@components/layout/Container';

const pageTagsProps = {
  title: 'Teste Front-End UOL',
  description: 'Teste técnico UOL para Front -End',
};

export default function Home() {
  const [customers, setCustomers] = useState<TCustomer[]>([]);

  useEffect(() => {
    const localClients = getLocalValue('clients');
    if (localClients) setCustomers(localClients);
    if (!localClients) {
      getAllClients().then((data) => {
        setCustomers(data);
        setLocalValue('clients', data);
      });
    }
  }, []);

  return (
    <>
      <PageTags {...pageTagsProps} />
      <Container py={{base: '40px', md: '100px'}}>
        <Headline
          title="Listagem de usuários"
          description="Escolha um cliente para visualizar os detalhes"
          button="Novo cliente"
        />
        <Flex py="50px" direction="column" gap="30px">
          {customers.map((customer, key) => (
            <UserList key={key} {...customer} />
          ))}
        </Flex>
        <Text>Exibindo {customers.length} resultados</Text>
      </Container>
    </>
  );
}
