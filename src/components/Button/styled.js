import styled from 'styled-components';

const color1 = '#e69941';

export const Button = styled.a`
  background-color: ${props => (props.primary ? color1 : 'white')};
  color: ${props => (props.primary ? 'white' : color1)};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 120px;
  border: 1px solid ${color1};
  border-radius: 5px;
  text-decoration: none;
  &:hover{
    background-color:${props => (props.primary ? 'white' : color1)};
    color: ${props => (props.primary ? color1 : 'white')};
  }
`;
