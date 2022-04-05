import styled from 'styled-components';

export const CustomButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.button.primary};
  color: ${(props) => props.theme.colors.button.secondary};
  border: solid 1px ${(props) => props.theme.colors.button.secondary};
  transition: 0.5s background, 0.5s text;
  font-size: 18px;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.button.secondary};
    color: ${(props) => props.theme.colors.button.primary};
  }
`;
