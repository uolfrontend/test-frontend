import styled from 'styled-components';
import { lighten, transparentize } from 'polished';

interface StatusCircleProps {
  color: 'active' | 'inactive' | 'waiting' | 'disabled';
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 4fr 4fr 0fr;
  border: solid 2px
    ${(props) => transparentize(0.7, props.theme.colors.disabled)};
  padding: 20px 35px;
  align-items: center;
  & + & {
    margin-top: 25px;
  }

  @media (max-width: 1290px) {
    grid-template-columns: 1fr 0fr;
    gap: 20px;
  }

  @media (max-width: 510px) {
    grid-template-columns: 1fr;
  }
`;

export const Wrapper = styled.div`
  align-self: center;

  :last-child {
    @media (max-width: 510px) {
      justify-self: flex-end;
    }
  }
`;

export const Title = styled.h4`
  color: ${(props) => props.theme.colors.text.secondary};
  font-weight: 500;
  font-size: 19px;
`;

export const Text = styled.p`
  color: ${(props) => lighten(0.2, props.theme.colors.text.secondary)};
  font-weight: 400;
  font-size: 18px;
`;

export const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StatusCircle = styled.div<StatusCircleProps>`
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.theme.colors[props.color]};
  border-radius: 50%;
  margin-right: 10px;
`;
