import { Form, Button } from 'react-bootstrap';
import { useContext, useState, useEffect } from 'react';
import UsersContext from '../../context/UsersContext';

function AddUser() {
  useEffect(() => {
    console.log('Component Mounted');
    // Limpeza - cleanup
    return () => {
      console.log('Component Unmounted');
    };
  }, []);

  const { createUser } = useContext(UsersContext);
  const mTop = 'mt-3';

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    id: '',
    phone: '',
    status: '',
  });

  const onInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
    console.log(newUser);
  };

  const { name, email, id, phone, status } = newUser;

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [idError, setIdError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [statusError, setStatusError] = useState('');

  //VALIDAÇÕES
  const validateID = (id) => {
    // id = id.replace(/[^\d]+/g, '');
    if (id == '') return false;
    // Elimina ids invalidos conhecidos
    if (
      id.length != 11 ||
      id == '00000000000' ||
      id == '11111111111' ||
      id == '22222222222' ||
      id == '33333333333' ||
      id == '44444444444' ||
      id == '55555555555' ||
      id == '66666666666' ||
      id == '77777777777' ||
      id == '88888888888' ||
      id == '99999999999'
    )
      return false;
    // Valida 1o digito
    let add = 0;
    for (let i = 0; i < 9; i++) add += parseInt(id.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(id.charAt(9))) return false;
    // Valida 2o digito
    add = 0;
    for (let i = 0; i < 10; i++) add += parseInt(id.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(id.charAt(10))) return false;
    return true;
  };

  // FUNÇÃO DE VALIDAÇÃO
  const validate = () => {
    //  VALIDAÇÃO NOME
    if (name === '' || name.length <= 1) {
      setNameError('Nome Inválido');
      console.log('Erro de Validação - Nome');
      return false;
    }

    // VALIDAÇÃO EMAIL
    if (!email.includes('@')) {
      setEmailError('Email Inválido');
      console.log('Erro de Validação - Email');
      return false;
    }

    // VALIDAÇÃO CPF
    const isIDValid = validateID(id);
    if (!isIDValid) {
      setIdError('CPF Inválido');
      console.log('Erro de Validação - CPF');
      return false;
    }

    // VALIDAÇÃO FONE
    const regexPhone = /[1-9]{2}[0-9]{8}/;
    const isPhoneValid = regexPhone.test(phone);

    if (!isPhoneValid) {
      setPhoneError('Fone Inválido');
      console.log('Erro de Validação - Fone');
      return false;
    }

    // VALIDAÇÃO STATUS

    const regexStatus = /[Status]/;
    const isStatusValid = regexStatus.test(status);

    if (!isStatusValid) {
      setStatusError('Status Inválido');
      console.log('Erro de Validação - Status');
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate(newUser);
    if (isValid) {
      console.log('Validação Realizada!');
      createUser(newUser);
    } else {
      console.log('Usuário não Validado');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className='p-4'>
      <Form.Group className={mTop}>
        <Form.Control
          type='text'
          placeholder='Nome'
          name='name'
          value={name}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <div className='errorMessage'>{nameError}</div>
      <Form.Group className={mTop}>
        <Form.Control
          type='text'
          placeholder='E-mail'
          name='email'
          value={email}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <div className='errorMessage'>{emailError}</div>
      <Form.Group className={mTop}>
        <Form.Control
          type='text'
          placeholder='CPF'
          name='id'
          value={id}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <div className='errorMessage'>{idError}</div>
      <Form.Group className={mTop}>
        <Form.Control
          type='text'
          placeholder='Fone'
          name='phone'
          value={phone}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <div className='errorMessage'>{phoneError}</div>
      <Form.Group className={mTop}>
        <Form.Select
          type='text'
          placeholder='Status'
          name='status'
          value={status}
          onChange={(e) => onInputChange(e)}
          required
        >
          <option value='' disabled selected hidden>
            Status
          </option>
          <option value='Ativo'>Ativo</option>
          <option value='Inativo'>Inativo</option>
          <option value='Aguardando ativação'>Aguardando ativação</option>
          <option value='Desativado'>Desativado</option>
        </Form.Select>
      </Form.Group>
      <div className='errorMessage'>{statusError}</div>

      <div className={mTop}>
        <Button
          className='my-2 px-4 btn-warning'
          variant='success'
          type='submit'
          block
        >
          Criar
        </Button>
      </div>
    </Form>
  );
}

export default AddUser;
