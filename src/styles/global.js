import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Helvetica', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }

  html {
    --scroll-behavior: smooth;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  .container {
    width: 100%;
    max-width: 2000px;
    margin: 0 auto;

    @media(max-width: 2000px) {
      max-width: 1400px;
    }


    @media(max-width: 1600px) {
      max-width: 1300px;
    }

    @media(max-width: 1480px) {
      max-width: 1200px;
    }

    @media(max-width: 1300px) {
      max-width: 1200px;
    }

    @media(max-width: 1250px) {
      max-width: 1100px;
    }

    @media(max-width: 1150px) {
      max-width: 1000px;
    }

    @media(max-width: 1050px) {
      max-width: 900px;
    }

    @media(max-width: 950px) {
      max-width: 800px;
    }

    @media(max-width: 850px) {
      max-width: 700px;
    }

    @media(max-width: 750px) {
      max-width: 600px;
    }

    @media(max-width: 650px) {
      max-width: 500px;
    }

    @media(max-width: 550px) {
      max-width: 420px;
    }

    @media(max-width: 450px) {
      max-width: 360px;
    }

    @media(max-width: 360px) {
      max-width: 330px;
    }

    @media(max-width: 330px) {
      max-width: 300px;
    }
  }
`;
