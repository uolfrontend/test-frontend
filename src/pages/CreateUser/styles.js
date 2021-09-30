import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  h1 {
    border-bottom: 1px solid #c3c3c3;
    display: flex;
    align-items: center;
    color: #333333;
    font-weight: 100;
    padding-bottom: 30px;
    margin-top: 30px;
  }

  img {
    width: 50px;
    margin-right: 50px;
  }
`;

export const Titles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 0;

  h2 {
    color: #9fa3a9;
    margin-bottom: 10px;
    font-weight: 300;
  }

  p {
    color: #9fa3a9;
    margin-bottom: 10px;
    font-weight: 100;
  }
`;

export const BlockUsers = styled(Form)`
  width: 400px;

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const BlockButtons = styled.div`
  margin-top: 20px;

  .edit-button {
    background-color: #e29933;
    border-radius: 5px;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    margin-right: 10px;
  }

  .back-button {
    border: 1px solid #e29933;
    background-color: transparent;
    border-radius: 5px;
    color: #e29933;
    padding: 10px 20px;
    text-decoration: none;
    margin-left: 10px;
  }
`;
