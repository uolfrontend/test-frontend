import styled from 'styled-components';

interface CustomButtonProps {
  colorScheme: 'primary' | 'secondary';
  size: 'sm' | 'lg';
}

export const CustomButton = styled.button<CustomButtonProps>`
  width: ${(props) => (props.size === 'lg' ? 130 : 115)}px;
  height: ${(props) => (props.size === 'lg' ? 50 : 37)}px;
  background-color: ${(props) =>
    props.theme.colors.button.background[props.colorScheme]};
  color: ${(props) => props.theme.colors.button.text[props.colorScheme]};
  border: solid 1px
    ${(props) => props.theme.colors.button.text[props.colorScheme]};
  transition: 0.5s background, 0.5s text;
  font-size: ${(props) => (props.size === 'lg' ? 18 : 16)}px;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: ${(props) =>
      props.theme.colors.button.background.hover[props.colorScheme]};
    color: #ffffff;
  }
`;
