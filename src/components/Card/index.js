import Button from '../Button';
import TextBold from '../TextBold';
import TextNormal from '../TextNormal';
import userLogo from '../../assets/user.png';
import * as S from './styled';

const Card = ({ nome, email, cpf, telefone, status }) => {
  return (
    <S.CardContent>
      <S.CardBox>
        <TextBold>{nome}</TextBold>
        <TextNormal>{email}</TextNormal>
      </S.CardBox>
      <S.CardBox>
        <TextBold>{cpf}</TextBold>
        <TextNormal>{telefone}</TextNormal>
      </S.CardBox>
      <S.CardBox>
        <TextNormal>{status}</TextNormal>
      </S.CardBox>
      <S.CardBox>
        <Button>Editar</Button>
      </S.CardBox>
    </S.CardContent>
  );
};

export default Card;
