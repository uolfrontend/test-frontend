import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: "Lato";
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
`;
