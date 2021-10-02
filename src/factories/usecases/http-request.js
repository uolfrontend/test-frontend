import { loadAllCustomers } from '../../service/http'
import { makeApiUrl } from '../api/api-url'
import { makeHttpRequest } from '../api/http-request'

export const makeLoadAllCustomers = () => {
  return loadAllCustomers(makeApiUrl('customers'), makeHttpRequest())
}
