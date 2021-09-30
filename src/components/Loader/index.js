import React from 'react';
import { Container, Spinner } from './styles';

function Loader({ loader }) {
  return (
    <Container show={loader}>
      <Spinner />
    </Container>
  );
}

export default Loader;
