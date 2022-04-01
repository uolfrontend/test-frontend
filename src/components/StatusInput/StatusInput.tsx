import React, { FC } from 'react';
import styles from './StatusInput.module.css';

interface StatusInputProps {
  value: string;
  onChange: (e:React.ChangeEvent<any>) => void;
 }

const StatusInput: FC<StatusInputProps> = ({value,...rest}) => (
  <select value={value} {...rest} name="status" id="status" className='border px-4 py-2 rounded-md mb-4' required >
    <option value="active">Ativo</option>
    <option value="inactive">Inativo</option>
    <option value="waiting">Aguardando ativação</option>
    <option value="disabled">Desativado</option>
  </select>
);

export default StatusInput;
