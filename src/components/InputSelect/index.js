// import { useRef, useEffect } from 'react'
// import { useField } from '@unform/core'

// function InputSelect({ name, label, children, ...rest }) {
//   const selectRef = useRef(null)

//   const { fieldName, defaultValue, registerField, error } = useField(name)

//   useEffect(() => {
//     registerField({
//       ref: selectRef,
//       name: fieldName,
//       getValue: ref => {
//         return ref.current?.value
//       },
//       setValue: (ref, newValue) => {
//         ref.current.value = newValue
//       },
//       clearValue: ref => {
//         ref.current.value = ''
//       },
//     })
//   }, [fieldName, registerField])

//   return (
//     <div>
//       <label htmlFor={fieldName}>{label}</label>

//       <select
//         id={fieldName}
//         ref={selectRef}
//         defaultValue={defaultValue}
//         {...rest}
//       >
//         {children}
//       </select>

//       {error && <span className="error">{error}</span>}
//     </div>
//   )
// }

// export default InputSelect;

import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

// Style
import { InputStyle } from './style';

export default function Select({ name, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);
  return (
    <InputStyle
      defaultValue={defaultValue}
      ref={selectRef}
      classNamePrefix="react-select"
      {...rest}
    />
  );
}
