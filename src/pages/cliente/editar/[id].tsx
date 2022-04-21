import Headline from '@components/Headline';
import PageTags from '@components/PageTags';
import UserForm from '@components/UserForm';
import {getLocalValue} from '@utils/localStorageManager';
import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import Container from '@components/layout/Container';

const pageTagsProps = {
  title: 'Editar cliente - Teste Front-End UOL',
  description: 'Teste técnico UOL para Front -End',
};

export default function EditUserPage() {
  const [defaultValues, setDefaultValues] = useState<TCustomer | undefined>(
    undefined
  );
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const userId = router.query.id;
      const allClients = getLocalValue('clients') as TCustomer[];
      setDefaultValues(allClients.filter((client) => client.id === userId)[0]);
    }
  }, [router.isReady]);

  return (
    <Container py={{base: '40px', md: '100px'}}>
      <PageTags {...pageTagsProps} />
      <Headline
        title="Novo usuário"
        description="Informe os campos a seguir para criar novo usuário:"
      />
      {defaultValues && <UserForm defaultValues={defaultValues} />}
    </Container>
  );
}
