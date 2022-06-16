import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Toaster } from 'react-hot-toast'

import { Layout } from './components/layout'
import { Routers } from './routes'
import { Provider } from 'use-http'
import { CORS_ANYWHERE_URL, API_URL } from 'constants/request.constants'
import { TOAST_OPTIONS } from 'constants/toast-options.constants'

export default function App() {
  return (
    <Provider url={`${CORS_ANYWHERE_URL}${API_URL}`}>
      <BrowserRouter>
        <Layout>
          <Routers />
        </Layout>
        <Toaster toastOptions={TOAST_OPTIONS} />
      </BrowserRouter>
    </Provider>
  )
}
