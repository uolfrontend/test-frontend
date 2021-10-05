import logo from '../../assets/uol-logo.svg';
import * as S from './styled';

const Header = () => {
  return (
    <S.Header>
      <a href="/">
        <S.Logo src={logo} alt="Logo Uol" />
      </a>
    </S.Header>
  );
};

export default Header;
