import { FC } from 'react';
import { cpfCnpjMask } from 'js-functions-essentials';


interface CpfInputProps {
  value: string;
  readOnly: boolean;
  onChange: (event:React.ChangeEvent<HTMLInputElement>) => void;
}

const CpfInput: FC<CpfInputProps> = ({value, readOnly,onChange}) => (
  <input
    name="cpf"
    maxLength={14}
    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
    title="CPF inválido"
    type="text"
    placeholder='CPF'
    className='border px-4 py-2 rounded-md mb-4'
    value={cpfCnpjMask(value)}
    readOnly={readOnly}
    disabled={readOnly}
    onChange={onChange}
    required
  />
);

export default CpfInput;
