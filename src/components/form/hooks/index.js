import { useEffect, useState } from "react";

function validateValues(values) {
  setErrors(validate(values));
}

function useForm({ initialValues, validate }) {
  const [errors, setErrors] = useState(initialValues);
  const [values, setValues] = useState(initialValues);
  const [touched, setTouchedFields] = useState({});

  useEffect(() => {
    validateValues(values);
  }, [values]);

  function handleChange(event) {
    const fieldName = event.target.name;
    const value = event.target.value;
    setValues({
      ...values,
      [fieldName]: value,
    });
  }

  function handleBlur(event) {
    const fieldName = event.target.name;
    setTouchedFields({
      ...touched,
      [fieldName]: true,
    });
  }

  return {
    values,
    errors,
    touched,
    handleBlur,
    setErrors,
    handleChange,
  };
}

export { useForm };
