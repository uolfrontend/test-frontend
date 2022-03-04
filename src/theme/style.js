import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: #fff;
  }

    @media (max-width: 1080px) {
        html {
        font-size: 93.75%;
    }
    }

    @media (max-width: 720px) {
        html {
          font-size: 87.5%;
    }

    h1,
  h2,
  h3, 
  h4,
  h5,
  h6 {
  font-weight: 600;
  color: #606060;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1rem;
}
}
`

export default GlobalStyle
