import { telephoneMask } from 'js-functions-essentials';
import React, { FC } from 'react';

interface PhoneInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PhoneInput: FC<PhoneInputProps> = ({ value, onChange }) => (
  <input
    name="tel"
    minLength={14}
    title='Telefone inválido'
    pattern="\(\d{2}\) \d{4,5}-\d{4}" 
    placeholder='Telefone'
    className='border px-4 py-2 rounded-md mb-4'
    type="text"
    maxLength={15}
    onChange={onChange}
    value={telephoneMask(value)}
    required
  />
);

export default PhoneInput;
