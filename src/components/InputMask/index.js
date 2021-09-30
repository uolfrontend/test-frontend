import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

// Styles
import { InputStyle } from './style';

export default function InputMask({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref, value) {
        ref.setInputValue(value);
      },
      clearValue(ref) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);
  return <InputStyle ref={inputRef} defaultValue={defaultValue} {...rest} />;
}
