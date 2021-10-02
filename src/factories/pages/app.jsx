import React from 'react'
import { makeLoadAllCustomers } from '../usecases/http-request'
import {
  makeCheckCacheExists,
  makeInsertAllCustomersCache,
} from '../usecases/cache'

import { StoreProvider } from '../../context/store'

export const makeStoreProvider = ({ children }) => {
  return (
    <StoreProvider
      loadAllCustomers={makeLoadAllCustomers()}
      checkCustomers={makeCheckCacheExists()}
      insertAllCustomersCache={makeInsertAllCustomersCache()}
    >
      {children}
    </StoreProvider>
  )
}
