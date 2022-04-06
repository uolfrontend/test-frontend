import React, { useState, useCallback, FormEvent } from 'react';
import { useParams } from 'react-router-dom';

import InputMask from '../../components/InputMask';
import Input from '../../components/Input';

import { SectionInfo, Title, Text } from './styles';

interface UserData {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive' | 'waiting' | 'disabled';
}

const EditUser: React.FC = () => {
  const [user, setUser] = useState<UserData>({} as UserData);

  const handleChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      setUser({
        ...user,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [user],
  );

  const params = useParams();

  const handleSubmitForm = () => {
    console.log(params);
  };

  return (
    <>
      <SectionInfo>
        <div>
          <Title>Edição de usuário</Title>
          <Text>Informe os campos a seguir para editar o usuário:</Text>
        </div>
      </SectionInfo>
      <form onSubmit={handleSubmitForm}>
        <InputMask onChange={handleChange} mask="cpf" name="cpf" />
        <InputMask
          onChange={handleChange}
          mask="phoneNumber"
          name="name"
          CustomInput={Input}
        />
      </form>
    </>
  );
};

export default EditUser;
