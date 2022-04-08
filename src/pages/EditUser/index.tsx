import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import InputMask from '../../components/InputMask';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

import { SectionInfo, Title, Text, Form, ButtonsWrapper } from './styles';

interface UserData {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  status?: 'active' | 'inactive' | 'waiting' | 'disabled';
}

const EditUser: React.FC = () => {
  const [user, setUser] = useState<UserData>({
    name: undefined,
    email: undefined,
    phone: undefined,
    status: undefined,
    id: undefined,
  });
  const [users, setUsers] = useState<UserData[]>([]);

  const params = useParams();
  const navigate = useNavigate();

  const handleSubmitForm = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      const schema = yup.object().shape({
        name: yup.string().required('Nome é obrigatório'),
        email: yup
          .string()
          .required('E-mail é obrigatório')
          .matches(
            /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
            'E-mail inválido, digite novamente',
          ),
        phone: yup
          .string()
          .required('Número de telefone é obrigatório')
          .matches(
            /[(]([0-9]{2})[)] ([1-9][0-9]{4})-([0-9]{4})/,
            'Número inválido',
          ),
        status: yup.string().required('Status é obrigatório'),
        id: yup
          .string()
          .required('CPF é obrigatório')
          // eslint-disable-next-line no-useless-escape
          .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'CPF inválido'),
      });

      await schema.validate(user, {
        abortEarly: false,
      });

      const objectHasValue = Object.values(user).every((value) => !!value);

      if (!objectHasValue) {
        return;
      }

      const newUsers = users.map((userData: any) =>
        userData.id === params.id ? { ...user } : userData,
      );

      localStorage.setItem('users', JSON.stringify(newUsers));

      navigate(-1);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        err.inner.forEach((error) => {
          toast.error(error.message, {
            position: 'top-left',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
      }
    }
  };

  React.useEffect(() => {
    const storageUsers = localStorage.getItem('users');

    if (storageUsers) {
      const parsedUsers = JSON.parse(storageUsers);

      const findUser = parsedUsers.find(
        (parsedUser: UserData) => parsedUser.id === params.id,
      );

      setUsers(parsedUsers);

      setUser(findUser);
    }
  }, []);

  return (
    <>
      <SectionInfo>
        <div>
          <Title>Edição de usuário</Title>
          <Text>Informe os campos a seguir para editar o usuário:</Text>
        </div>
      </SectionInfo>
      <Form onSubmit={handleSubmitForm}>
        <Input
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          value={user.name}
          name="name"
          placeholder="Nome"
        />
        <Input
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          value={user.email}
          name="email"
          placeholder="E-mail"
        />
        <InputMask
          onChange={(e) => setUser({ ...user, id: e.target.value })}
          value={user.id}
          mask="999.999.999-99"
          name="id"
          placeholder="CPF"
        />
        <InputMask
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
          value={user.phone}
          mask="(99) 99999-9999"
          name="phone"
          placeholder="Telefone"
        />
        <Select
          items={[
            { value: 'active', text: 'Ativo' },
            { value: 'inactive', text: 'Inativo' },
            { value: 'waiting', text: 'Aguardando ativação' },
            { value: 'disabled', text: 'Desativado' },
          ]}
          setValue={(value) => setUser({ ...user, status: value })}
          defaultValue={user.status}
        />
        <ButtonsWrapper>
          <Button colorScheme="secondary" type="submit">
            Editar
          </Button>
          <Button type="button" onClick={() => navigate(-1)}>
            Voltar
          </Button>
        </ButtonsWrapper>
      </Form>
    </>
  );
};

export default EditUser;
