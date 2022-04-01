import { useLiveQuery } from 'dexie-react-hooks';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import Customer from '../../components/Customer/Customer';
import FilledButton from '../../components/FilledButton/FilledButton';
import db from '../../services/db';

interface ListProps { }

const List: FC<ListProps> = () => {
  const customers = useLiveQuery(async () => await db.customers.toArray());

  

  return (
    <div className="flex flex-col" data-testid="List">
      <div className='flex justify-between items-center mb-4 flex-col sm:flex-row'>
        <div className='text-center sm:text-left'>
          <h2 className='pb-3' >Listagem de usuários</h2>
          <h3>Escolha um cliente para visualizar os detalhes</h3>
        </div>
        <Link to="store">
          <FilledButton label='Novo cliente'/>
        </Link>
      </div>
      {customers?.map(customer => <Customer key={customer.id} {...customer} /> )}
      <p className='pb-4 pt-2'>Exibindo {customers?.length} clientes</p>
    </div>
  )
};

export default List;
