import axios from 'axios'

const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
})

const AxiosAdapter = {
  request: async ({ url, method, data, headers, params, responseType }) => {
    let apiResponse
    try {
      apiResponse = await api.request({
        url,
        method,
        headers,
        params,
        data,
        responseType,
      })
    } catch (error) {
      if (error.response) apiResponse = error.response
      else apiResponse = 500
    }
    return {
      statusCode: apiResponse.status,
      data: apiResponse.data,
    }
  },
}

export default AxiosAdapter
