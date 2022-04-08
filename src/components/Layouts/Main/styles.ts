import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  padding: 107px 193px;
  background-color: ${(props) => props.theme.colors.background.light};
  flex: 1;

  @media (max-width: 860px) {
    padding: 107px 30px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  margin-left: 27px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.text.primary};
`;

export const Hr = styled.hr`
  width: 100%;
  border: solid 1px
    ${(props) => transparentize(0.7, props.theme.colors.disabled)};
  margin: 25px 0;
`;
