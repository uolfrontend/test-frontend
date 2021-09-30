import { useRef, useEffect } from 'react';

import { useField } from '@unform/core';

// Styles
import { InputStyle } from './style';

function TextArea({ name, label, rows = 5, cols, ...rest }) {
  const textareaRef = useRef(null);
  const { fieldName, defaultValue = '', registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef,
      getValue: (ref) => ref.current.value,
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <InputStyle
      ref={textareaRef}
      id={fieldName}
      defaultValue={defaultValue}
      rows={rows}
      cols={cols}
      {...rest}
    />
  );
}

export default TextArea;
