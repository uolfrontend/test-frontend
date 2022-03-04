import React from 'react'
import { makeHandleCustomersCache } from '../usecases/cache'
import TelaEdicao from '../../pages/tela-edicao'
import { makeTelaEdicaoFormatter } from '../util-factory/formatter'
import { makeTelaEdicaoValidation } from '../util-factory/validator'

export const makeTelaEdicao = () => {
  return (
    <TelaEdicao
      handleCustomers={makeHandleCustomersCache()}
      formatter={makeTelaEdicaoFormatter()}
      validator={makeTelaEdicaoValidation()}
    />
  )
}
