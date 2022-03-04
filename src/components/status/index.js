import React from 'react'

const Status = ({ tipoStatus }) => {
  if (tipoStatus === 'active') {
    return "Ativo";
  }
  else if(tipoStatus === "inactive"){
    return "Inativo";
}
  else if(tipoStatus === "waiting"){
    return "Aguardando ativação"
  }
  return "Desativado"
}

export default Status;
