import Headline from '@components/Headline';
import PageTags from '@components/PageTags';
import UserForm from '@components/UserForm';
import Container from '@components/layout/Container';

const pageTagsProps = {
  title: 'Adicionar cliente - Teste Front-End UOL',
  description: 'Teste técnico UOL para Front -End',
};

export default function AddClient() {
  return (
    <Container py={{base: '40px', md: '100px'}}>
      <PageTags {...pageTagsProps} />
      <Headline
        title="Novo usuário"
        description="Informe os campos a seguir para criar novo usuário:"
      />
      <UserForm />
    </Container>
  );
}
