import React from 'react'
import { makeLoadAllCustomersCache } from '../usecases/cache'
import TelaInicial from '../../pages/tela-inicial'

export const makeTelaInicial = () => {
  return <TelaInicial loadAllCustomers={makeLoadAllCustomersCache()} />
}
