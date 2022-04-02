import { FC } from 'react';

interface FilledButtonProps {
  label: string;
}

const FilledButton: FC<FilledButtonProps> = ({ label, ...rest }) => {
  return (
    <button {...rest} className='bg-orange-400 hover:bg-orange-500 text-white font-bold py-1 px-4 rounded h-10'>{label}</button>
  );
};

export default FilledButton;
