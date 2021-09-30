import styled from 'styled-components';

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

  button {
    background-color: #e29933;
    border-radius: 5px;
    color: white;
    padding: 10px 10px;
    text-decoration: none;
  }

  button:hover {
    background-color: #b77928;
    cursor: pointer;
  }

  @media (max-width: 950px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const BlockUsers = styled.div``;

export const ItemUser = styled.div`
  border: 1px solid #c3c3c3;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  padding: 10px 20px;
  margin: 10px 0;

  .align {
    display: flex;
    align-items: center;
  }

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);

    p {
      margin-bottom: 10px;
    }
  }
`;

export const Circle = styled.div`
  background-color: ${(props) => props.status === 'active' && '#4aad5b'};
  background-color: ${(props) => props.status === 'inactive' && '#d73240'};
  background-color: ${(props) => props.status === 'waiting' && '#d3a710'};
  background-color: ${(props) => props.status === 'disabled' && '#d2d2d2'};

  width: 20px;
  height: 20px;
  border-radius: 10px;

  margin-right: 10px;

  @media (max-width: 950px) {
    margin-bottom: 10px;
  }
`;
