import Headline from '@components/Headline';
import UserForm from '@components/UserForm';
import {getLocalValue} from '@utils/localStorageManager';
import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import Container from 'src/layout/Container';

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
      <Headline
        title="Novo usuário"
        description="Informe os campos a seguir para criar novo usuário:"
      />
      {defaultValues && <UserForm defaultValues={defaultValues} />}
    </Container>
  );
}
