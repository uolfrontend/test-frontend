import React, { InputHTMLAttributes } from 'react';

import { CustomInput } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<Props> = ({ ...props }) => {
  return <CustomInput {...props} />;
};

export default Input;
