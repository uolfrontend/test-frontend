import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ICustomer } from '../../services/db';
import OutlinedButton from '../OutlinedButton/OutlinedButton';
import Status from '../Status/Status';

const Customer: FC<ICustomer> = ({ name, email, id, phone, status }) => {
  

  return (
    <div className='grid grid-cols-1 sm:grid-cols-4 justify-between px-8 py-4 border mb-4' data-testid="Customer">
      <div>
        <div>{name}</div>
        <div>{email}</div>
      </div>
      <div>
        <div>{id}</div>
        <div>{phone}</div>
      </div>
      <Status status={status} />
      <div className='flex justify-end' >
        <Link to={`edit?user=${id}`}>
          <OutlinedButton label='Editar' />
        </Link>
      </div>
    </div>
  )
};

export default Customer;
