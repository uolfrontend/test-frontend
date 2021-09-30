import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);

  position: fixed;

  z-index: 999;

  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: ${(props) => (props.show ? `flex` : `none`)};
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.div`
  animation: ${spin} 2s linear infinite;
  border: 10px solid #fff;

  width: 100px;
  height: 100px;
`;
