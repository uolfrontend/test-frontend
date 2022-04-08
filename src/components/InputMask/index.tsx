import React, { InputHTMLAttributes } from 'react';
import { Props as InputProps } from 'react-input-mask';

import { CustomInput } from './styles';

interface Props extends InputProps {
  CustomInput?: React.FC<InputHTMLAttributes<HTMLInputElement>>;
}

const InputMask: React.FC<Props> = ({ ...rest }) => {
  return (
    <>
      <CustomInput {...rest} />
    </>
  );
};

export default InputMask;
