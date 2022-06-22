const removeAllMaskValues = (value: string): string => {
  const regex = /\D/g;

  return value.replace(regex, '');
};

export default removeAllMaskValues;