import Button from '../Button';
import TextBold from '../TextBold';
import TextNormal from '../TextNormal';
import userLogo from '../../assets/user.png';
import * as S from './styled';

const Info = () => {
  return (
    <>
      <S.PanelLogo>
        <S.UserLogo src={userLogo} alt="Logo User" />
        <S.Titulo>Painel de clientes</S.Titulo>
      </S.PanelLogo>
      <S.PanelInfo>
        <div>
          <TextBold>Listagem de usuários</TextBold>
          <TextNormal>Escolha um cliente para visualizar os detalhes</TextNormal>
        </div>
        <Button link="/cadastro" primary>
          Novo cliente
        </Button>
      </S.PanelInfo>
    </>
  );
};

export default Info;
