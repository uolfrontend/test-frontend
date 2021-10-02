import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const InputStyled = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  outline: 0;
  &:focus {
    box-shadow: 0 0 5px black;
  }
`

export const ErrorContainer = styled.div`
  padding: 4px 12px 0px 12px;
  height: 22px;
  label {
    color: rgba(255, 15, 15, 0.68);
    font-size: 12px;
  }
`
