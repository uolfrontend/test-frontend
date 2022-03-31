import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, TabPane } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';

import { UserContext } from '../../context/UserContext';

import './styles.scss';

const UserForm = () => {
  const { usersStatus, userStatus, schema, createUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm({
    resolver: yupResolver(schema)
  });
  const navigate = useNavigate();

  const onSubmitHandler = (data) => {
    if (createUser(data)) {
      toast.success('Usuário criado com sucesso!');
      navigate('/');
      reset();
    }
  };
  return (
    <div className="mt-5" id="create-user">
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <Form.Group className="mb-3">
          <InputMask
            className={`default-input ${errors.name ? 'is-invalid' : ''}`}
            {...register('name')}
            type="text"
            placeholder="Nome"
            onChange={(e) => {
              setValue('name', e.target.value);
            }}
          />
          <div className="invalid-feedback">{errors.id?.message}</div>
        </Form.Group>
        <Form.Group className="mb-3">
          <InputMask
            className={`default-input ${errors.email ? 'is-invalid' : ''}`}
            {...register('email')}
            type="email"
            placeholder="E-mail"
            onChange={(e) => {
              setValue('email', e.target.value);
            }}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </Form.Group>
        <Form.Group className="mb-3">
          <InputMask
            className="default-input"
            type="text"
            placeholder="CPF"
            mask={'999.999.999-99'}
            {...register('id')}
            onChange={(e) => {
              setValue('id', e.target.value);
            }}
          />
          <div className="invalid-feedback">{errors.id?.message}</div>
        </Form.Group>
        <Form.Group className="mb-3">
          <InputMask
            className={`default-input ${errors.phone ? 'is-invalid' : ''}`}
            {...register('phone')}
            type="text"
            placeholder="Telefone"
            mask={'(99) 99999-9999'}
            onChange={(e) => {
              setValue('phone', e.target.value);
            }}
          />
          <div className="invalid-feedback">{errors.phone?.message}</div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Select
            className={`drop-up ${errors.status ? 'is-invalid' : ''}`}
            noOptionsMessage={() => 'Sem opções'}
            classNamePrefix="react-select"
            placeholder={'Selecionar o status'}
            options={usersStatus}
            isClearable={false}
            onChange={(status) => {
              setValue('status', status.value);
            }}
          />
          <input type="hidden" {...register('status')} value={userStatus.value} />
          <div className="invalid-feedback">{errors.status?.message}</div>
        </Form.Group>
        <div className="btns mt-5">
          <Button variant="warning" type="submit">
            Criar
          </Button>
          <Link to="/">
            <Button variant="outline-warning">Voltar</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default UserForm;
