import React, { InputHTMLAttributes, useCallback } from 'react';

import { cpf, phoneNumber } from './masks';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  mask: 'cpf' | 'phoneNumber';
  prefix?: string;
  CustomInput?: React.FC<InputHTMLAttributes<HTMLInputElement>>;
}

const InputMask: React.FC<Props> = ({ CustomInput, mask, prefix, ...rest }) => {
  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === 'cpf') {
        cpf(e);
      } else if (mask === 'phoneNumber') {
        phoneNumber(e);
      }
    },
    [mask],
  );

  return (
    <div>
      {prefix && <span className="prefix-span">{prefix}</span>}
      {CustomInput ? (
        <CustomInput {...rest} onKeyUp={handleKeyUp} />
      ) : (
        <input {...rest} onKeyUp={handleKeyUp} />
      )}
    </div>
  );
};

export default InputMask;
