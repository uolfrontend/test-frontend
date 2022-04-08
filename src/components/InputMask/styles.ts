import styled from 'styled-components';
import InputMask from 'react-input-mask';
import { lighten } from 'polished';

export const CustomInput = styled(InputMask)`
  padding: 15px 15px;
  border: solid 1px
    ${(props) => lighten(0.3, props.theme.colors.text.secondary)};
  border-radius: 5px;
  font-size: 18px;
  color: ${(props) => props.theme.colors.text.primary};

  ::placeholder {
    color: ${(props) => props.theme.colors.text.tertiary};
    font-weight: 300;
  }
`;
