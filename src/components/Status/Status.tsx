import { FC } from 'react';

interface StatusProps {
  status: string;
}

const Status: FC<StatusProps> = ({ status }) => {
  const render = (emoji: string, message: string) => (
    <div className='flex items-center pl-0 sm:pl-4' data-testid="Status">
      <div className='mr-4' >{emoji}</div>
      <div>{message}</div>
    </div>
  )

  switch (status) {
    case 'inactive':
      return render('🔴', 'Inativo');
    case 'active':
      return render('🟢', 'Ativo');
    case 'waiting':
      return render('🟡', 'Aguardando ativação');
    case 'disabled':
      return render('⚪️', 'Desativado');
    default:
      return render('❌', 'Status inválido');
  }
};

export default Status;
