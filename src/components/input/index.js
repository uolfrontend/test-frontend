import React from 'react'
import { InputStyled, ErrorContainer, Container } from './style'

function Input(props) {
  const { error } = props
  return (
    <Container>
      <InputStyled {...props} />
      <ErrorContainer>
        <label>{error || ''} </label>
      </ErrorContainer>
    </Container>
  )
}

export default Input
