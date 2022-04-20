import {FormControl, FormErrorMessage, Select} from '@chakra-ui/react';
import {useFormContext} from 'react-hook-form';

type Props = {
  name: string;
  options: {status: string; label: string; color?: string}[];
};

export default function CustomSelect({name, options}: Props) {
  const {formState, register} = useFormContext();

  const {errors} = formState;

  const error = errors[name];
  return (
    <FormControl isInvalid={Boolean(error)}>
      <Select {...register(name)} defaultValue={options[0].status}>
        {options.map(({status, label}, key) => (
          <option key={key} value={status} disabled={key === 0}>
            {label}
          </option>
        ))}
      </Select>
      <FormErrorMessage
        fontSize={{base: 'xs', lg: 'sm'}}
        mt="3px"
        color="attention"
        position="absolute"
      >
        {String(error?.message)}
      </FormErrorMessage>
    </FormControl>
  );
}
