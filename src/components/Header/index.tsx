import {Flex} from '@chakra-ui/react';
import Image from 'next/image';
import logo from '@public/assets/images/logo.png';

export default function Header() {
  return (
    <Flex h="60px" w="100%" bg="darkest" justify="center" py="10px">
      <Image
        src={logo}
        alt="UOL - Universo Online"
        width="100%"
        height="100%"
        objectFit="contain"
      />
    </Flex>
  );
}
