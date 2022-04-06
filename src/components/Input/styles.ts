import styled from 'styled-components';

export const CustomInput = styled.input`
  padding: 12px 15px;
  border: solid 1px ${(props) => props.theme.colors.text.secondary};
  border-radius: 5px;
`;
