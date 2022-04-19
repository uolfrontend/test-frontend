import {Button, Divider, Flex, Heading, Text} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import {FiUser} from 'react-icons/fi';

type Props = {
  title: string;
  description: string;
  button?: string;
};

export default function Headline({title, description, button}: Props) {
  const router = useRouter();
  return (
    <Flex direction="column">
      <Flex align="center">
        <FiUser size="30px" />
        <Heading
          as="h1"
          fontSize={{base: '20px', md: '30px'}}
          ml="15px"
          fontWeight={500}
        >
          Painel de clientes
        </Heading>
      </Flex>
      <Divider my="20px" borderColor="primary" />
      <Flex
        justify="space-between"
        direction={{base: 'column', md: 'row'}}
        align={{md: 'center'}}
        gap={{base: '20px', md: 0}}
      >
        <Flex direction="column" gap={{base: '10px', md: '15px'}}>
          <Heading
            as="h2"
            fontSize={{base: '16px', md: '20px'}}
            fontWeight={600}
          >
            {title}
          </Heading>
          <Text fontSize={{base: '14px', md: '18px'}}>{description}</Text>
        </Flex>
        {button && (
          <Button
            variant="primary"
            onClick={() => router.push('/cliente/adicionar')}
          >
            {button}
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
