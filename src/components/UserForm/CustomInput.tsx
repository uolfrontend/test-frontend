import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputProps,
} from '@chakra-ui/react';
import {useFormContext} from 'react-hook-form';
import InputMask from 'react-input-mask';

type Props = {
  name: string;
  mask?: string;
} & InputProps;

export default function CustomInput({name, mask, ...props}: Props) {
  const {formState, register} = useFormContext();

  const {errors, dirtyFields} = formState;

  const error = errors[name];

  return (
    <FormControl
      isInvalid={Boolean(error)}
      position="relative"
      mb={errors[name] ? '20px' : 0}
    >
      <InputGroup>
        <Input
          w="100%"
          fontSize={{base: '14px', md: '16px'}}
          as={mask ? InputMask : 'input'}
          {...(mask ? {mask: mask, maskChar: null} : {})}
          borderWidth={2}
          borderColor={
            Boolean(error)
              ? 'attention'
              : dirtyFields[name]
              ? 'green'
              : 'lighter'
          }
          {...props}
          {...register(name)}
        />
      </InputGroup>
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
