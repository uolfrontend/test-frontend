import React from 'react'
import Header from './components/header'
import GlobalStyle from './theme/style'
import RouterApp from './router'
import Main from './components/main'
import { makeStoreProvider as StoreProvider } from './factories/pages/app'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <StoreProvider>
        <Main>
          <RouterApp />
        </Main>
      </StoreProvider>
    </>
  )
}

export default App
