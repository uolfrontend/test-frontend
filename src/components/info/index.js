import React from 'react'
import { H2Div, H3Div } from './style'

function EditUser(props) {
  return (
    <div>
      <H2Div>Editar Usuário</H2Div>
      <H3Div>Informe os campos a seguir para editar o usuário</H3Div>
    </div>
  )
}

function NovoUser(props) {
  return (
    <div>
      <H2Div>Novo Usuário</H2Div>
      <H3Div>Informe os campos a seguir para criar novo usuário</H3Div>
    </div>
  )
}

const Info = ({ isEdit }) => {
  if (isEdit) {
    return <EditUser />
  }
  return <NovoUser />
}

export default Info
