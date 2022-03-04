import { HttpStatusCode } from '../../protocols/http'

export const loadAllCustomers = (url, httpClient) => {
  return {
    loadAll: async () => {
      const httpResponse = await httpClient.request({
        url,
        method: 'get',
      })
      const customers = httpResponse.data || []
      switch (httpResponse.statusCode) {
        case HttpStatusCode.ok:
          return customers
        case HttpStatusCode.noContent:
          return []
        default:
          throw new Error('Something went wrong')
      }
    },
  }
}
