import React, { FC } from 'react';

interface TextInputProps {
  value: string;
  placeholder: string;
  type:string;
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput: FC<TextInputProps> = (props) => (
  <input {...props} className='border px-4 py-2 rounded-md mb-4' data-testid="TextInput" required/>
);

export default TextInput;
