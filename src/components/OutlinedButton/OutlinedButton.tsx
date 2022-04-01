import { FC } from 'react';

interface OutlinedButtonProps {
  label: string;
}

const OutlinedButton: FC<OutlinedButtonProps> = ({label, ...rest}) => (
  <button {...rest} className='text-orange-400 hover:bg-orange-400 border border-orange-400 hover:text-white hover:text-white font-bold py-1 px-4 rounded h-10 px-8'>{label}</button>
);

export default OutlinedButton;
