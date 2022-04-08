import styled from 'styled-components';
import { darken, lighten, transparentize } from 'polished';

interface SelectedTextProps {
  value: string;
}

interface OptionProps {
  active: boolean;
}

export const Container = styled.div`
  position: relative;
  margin-top: 20px;
`;

export const SelectContainer = styled.div`
  padding: 13px 15px;
  border: solid 1px
    ${(props) => lighten(0.3, props.theme.colors.text.secondary)};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const SelectText = styled.p<SelectedTextProps>`
  font-size: 18px;
  color: ${(props) =>
    props.theme.colors.text[props.value ? 'primary' : 'tertiary']};
  font-weight: ${(props) => (props.value ? 500 : 300)};
`;

export const OptionsContainer = styled.div`
  position: absolute;
  margin-top: 10px;
  max-height: 100px;
  background-color: ${(props) => props.theme.colors.background.light};
  overflow-y: scroll;
  width: 100%;
  filter: drop-shadow(rgba(0, 0, 0, 0.1) 0.5px 1px 1px)
    drop-shadow(rgba(0, 0, 0, 0.1) 1px 2px 2px)
    drop-shadow(rgba(0, 0, 0, 0.1) 2px 4px 4px)
    drop-shadow(rgba(0, 0, 0, 0.1) 4px 8px 8px)
    drop-shadow(rgba(0, 0, 0, 0.1) 8px 16px 16px);
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Option = styled.button<OptionProps>`
  padding: 10px;
  font-size: 15px;
  background-color: ${(props) =>
    props.theme.colors.button.background[
      props.active ? 'secondary' : 'primary'
    ]};
  color: ${(props) =>
    props.theme.colors.button.text[props.active ? 'secondary' : 'primary']};
  transition: background 0.5s;

  & + & {
    border-top: solid 1px ${(props) => props.theme.colors.disabled};
  }

  :hover {
    background-color: ${(props) =>
      darken(
        0.2,
        transparentize(0.8, props.theme.colors.button.background['secondary']),
      )};
    cursor: pointer;
  }
`;
