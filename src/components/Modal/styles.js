import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  z-index: 10;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  right: 0;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 20px 40px;

  h2 {
    color: rgba(55, 66, 250, 0.6);
    font-size: 22px;
    font-weight: 700;
  }
`;

export const FormContent = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
`;

export const ButtonSubmit = styled.button`
  background: rgba(55, 66, 250, 0.6);
  border-radius: 10px;
  color: white;

  font-size: 14px;
  text-transform: uppercase;

  padding: 12px;
  margin-top: -10px;

  cursor: pointer;

  transition: 0.3s;

  :hover {
    transform: scale(1.1);
  }
`;
export const ButtonOutline = styled.button`
  border: 1px solid rgba(55, 66, 250, 0.6);
  border-radius: 10px;
  background-color: white;
  color: rgba(55, 66, 250, 0.6);

  font-size: 14px;
  text-transform: uppercase;

  padding: 12px;
  margin-top: -10px;

  width: 100%;

  cursor: pointer;
  transition: 0.3s;

  :hover {
    transform: scale(1.1);
  }
`;
