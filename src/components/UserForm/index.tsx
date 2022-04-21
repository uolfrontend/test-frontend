import {Button, Flex, useToast} from '@chakra-ui/react';
import {FormProvider, useForm} from 'react-hook-form';
import {useRouter} from 'next/router';
import {userResolver} from './resolvers/userResolver';
import CustomInput from './CustomInput';
import {customerStatus} from 'src/constants/customerStatus';
import {getLocalValue, setLocalValue} from '../../utils/localStorageManager';
import CustomSelect from './CustomSelect';

type Props = {
  defaultValues?: TCustomer;
};

export default function UserForm({defaultValues}: Props) {
  const toast = useToast();

  const router = useRouter();

  const methods = useForm({
    resolver: userResolver,
    mode: 'onChange',
    defaultValues,
  });

  const onSubmit = async (data: any) => {
    const clients = getLocalValue('clients');
    if (defaultValues) {
      const userId = router.query.id;
      setLocalValue('clients', [
        ...clients.map((client: TCustomer) =>
          client.id === userId ? data : client
        ),
      ]);
    } else {
      setLocalValue('clients', [...clients, data]);
    }

    toast({
      status: 'success',
      title: defaultValues ? 'Atualizado com sucesso!' : 'Criado com sucesso!',
      position: 'bottom-right',
      duration: 4000,
      isClosable: true,
    });
    router.push('/');
  };

  const onError = () => {
    toast({
      status: 'error',
      title: 'Falha ao atualizar. Verifique os dados e tente novamente!',
      position: 'bottom-right',
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <Flex as="form" onSubmit={methods.handleSubmit(onSubmit, onError)}>
      <Flex
        py="30px"
        direction="column"
        gap={{base: '13px'}}
        w={{base: '100%', md: '40%', lg: '20%'}}
      >
        <FormProvider {...methods}>
          <CustomInput name="name" placeholder="Nome" />
          <CustomInput name="email" placeholder="Email" />
          <CustomInput name="id" mask="999.999.999-99" placeholder="CPF" />
          <CustomInput
            name="phone"
            mask="(99) 99999-9999"
            placeholder="Telefone"
          />
          <CustomSelect name="status" options={customerStatus} />
          <Flex gap="20px" mt="20px" direction={{base: 'column', md: 'row'}}>
            <Button
              variant="primary"
              type="submit"
              w={{base: '100%', md: '50%'}}
              isDisabled={!methods.formState.isValid}
            >
              {defaultValues ? 'Atualizar' : 'Criar'}
            </Button>
            <Button
              variant="secondary"
              onClick={() => router.back()}
              w={{base: '100%', md: '50%'}}
            >
              Voltar
            </Button>
          </Flex>
        </FormProvider>
      </Flex>
    </Flex>
  );
}
