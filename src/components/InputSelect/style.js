import styled from 'styled-components';
import ReactSelect from 'react-select';

export const InputStyle = styled(ReactSelect)`
  background-color: rgba(255, 255, 255);
  border-radius: 5px;

  color: rgba(0, 0, 0, 0.5);

  font-size: 18px;

  margin-bottom: 15px;
  padding: 2px;

  width: 100%;

  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  div {
    border: none;
    color: rgba(0, 0, 0, 0.5);
  }
`;
