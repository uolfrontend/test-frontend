import React from 'react';

import status from '../../constants/status';

import Button from '../Button';

import {
  Container,
  Title,
  Text,
  StatusWrapper,
  StatusCircle,
  Wrapper,
} from './styles';

interface Props {
  data: {
    id: string;
    name: string;
    email: string;
    phone: string;
    status: 'active' | 'inactive' | 'waiting' | 'disabled';
  };
}

const UserCard: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <Wrapper>
        <Title>{data.name}</Title>
        <Text>{data.email}</Text>
      </Wrapper>
      <Wrapper>
        <Title>{data.id}</Title>
        <Text>{data.phone}</Text>
      </Wrapper>
      <Wrapper>
        <StatusWrapper>
          <StatusCircle color={data.status} />
          <Text>{status[data.status]} </Text>
        </StatusWrapper>
      </Wrapper>
      <Wrapper>
        <Button>Editar</Button>
      </Wrapper>
    </Container>
  );
};

export default UserCard;
