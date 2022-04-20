import Headline from '@components/Headline';
import UserForm from '@components/UserForm';
import Container from 'src/layout/Container';

export default function AddClient() {
  return (
    <Container py={{base: '40px', md: '100px'}}>
      <Headline
        title="Novo usuário"
        description="Informe os campos a seguir para criar novo usuário:"
      />
      <UserForm />
    </Container>
  );
}
