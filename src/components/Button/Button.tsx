import React, { ButtonHTMLAttributes } from 'react';

import { CustomButton } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorScheme?: 'primary' | 'secondary';
  size?: 'sm' | 'lg';
}

const Button: React.FC<Props> = ({
  colorScheme = 'primary',
  size = 'lg',
  children,
  ...props
}) => {
  return (
    <CustomButton {...props} colorScheme={colorScheme} size={size}>
      {children}
    </CustomButton>
  );
};

export default Button;
