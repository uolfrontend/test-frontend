import * as S from './styled';

const Button = props => {
  return (
    <S.Button href={props.link} primary={props.primary}>
      {props.children}
    </S.Button>
  );
};

export default Button;
