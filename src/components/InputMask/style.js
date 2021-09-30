import styled from 'styled-components';
import ReactInputMask from 'react-input-mask';

export const InputStyle = styled(ReactInputMask)`
  background-color: rgba(255, 255, 255);
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  color: rgba(0, 0, 0, 0.5);

  font-size: 18px;

  margin-bottom: 15px;
  padding: 10px;

  width: 100%;

  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;
