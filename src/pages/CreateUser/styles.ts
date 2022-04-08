import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div``;

export const SectionInfo = styled.div`
  display: flex;
  margin-bottom: 35px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.text.secondary};
  font-weight: 500;
  font-size: 19px;
  margin-bottom: 15px;
`;

export const Text = styled.p`
  color: ${(props) => lighten(0.2, props.theme.colors.text.secondary)};
  font-weight: 400;
  font-size: 18px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 280px;

  input + input {
    margin-top: 20px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 75px;
`;
