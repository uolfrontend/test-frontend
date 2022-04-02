import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CpfInput from '../../components/CpfInput/CpfInput';
import OutlinedButton from '../../components/OutlinedButton/OutlinedButton';
import PhoneInput from '../../components/PhoneInput/PhoneInput';
import FilledButton from '../../components/FilledButton/FilledButton';
import TextInput from '../../components/TextInput/TextInput';
import db from '../../services/db';
import { useSnackbar } from 'react-simple-snackbar'
import StatusInput from '../../components/StatusInput/StatusInput';

interface StoreProps { }

const Store: FC<StoreProps> = () => {
  const navigate = useNavigate();

  const [openSnackbar,] = useSnackbar({ style: { backgroundColor: 'red' } })
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('active');

  const actionButton = { label: 'Criar', type: 'submit' }

  const backButton = {
    label: 'Voltar',
    onClick: (event: any) => {
      navigate('/')
      event.preventDefault()
    }
  }

  const onSubmit = (event: any) => {
    db.customers.add({
      name,
      id: cpf,
      phone,
      email,
      status
    })
      .then((value) => navigate('/'))
      .catch(err => openSnackbar('CPF já cadastrado'))
    event.preventDefault()
  }

  return (
    <form className='flex flex-col w-full sm:w-3/4 md:w-2/5' data-testid="Edit" onSubmit={onSubmit}>
      <h2>Editar de usuário</h2>
      <h3 className='mb-4' >Informe os campos a seguir para editar usuário</h3>
      <TextInput value={name} type='text' placeholder='Nome' onChange={(e) => setName(e.target.value)} />
      <TextInput value={email} type='email' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
      <CpfInput value={cpf} onChange={(e) => setCpf(e.target.value)} readOnly={false} />
      <PhoneInput value={phone} onChange={(e) => setPhone(e.target.value)} />
      <StatusInput value={status} onChange={ (e) => setStatus(e.target.value)}/>
      <div className='grid grid-cols-2 gap-x-10'>
        <FilledButton  {...actionButton} />
        <OutlinedButton {...backButton} />
      </div>
    </form>
  )
};

export default Store;
